#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
safetensors_inspector.py
Локальний інструмент для ComfyUI: читає заголовки моделей,
класифікує тип і створює .info.txt поруч з файлом.

Підтримувані формати:
  .safetensors / .sft  — повний розбір заголовка + класифікація
  .gguf                — базовий розбір GGUF-заголовка
  .ckpt / .pt / .pth / .bin — лише розмір + евристика (pickle небезпечний)

Працює без сторонніх бібліотек (тільки стандартна бібліотека Python 3.8+).
"""

from __future__ import annotations
import argparse
import json
import os
import struct
import sys
from pathlib import Path
from typing import Any

# ---------------------------------------------------------------------------
# Константи
# ---------------------------------------------------------------------------
MAX_HEADER_SIZE = 32 * 1024 * 1024  # 32 МБ

SUPPORTED_EXTENSIONS = {
    ".safetensors", ".sft",
    ".gguf",
    ".ckpt", ".pt", ".pth", ".bin",
}

# ---------------------------------------------------------------------------
# Читання заголовків
# ---------------------------------------------------------------------------

def read_safetensors_header(path: Path) -> dict[str, Any] | None:
    """Читає JSON-заголовок .safetensors / .sft."""
    try:
        with open(path, "rb") as f:
            header_len_bytes = f.read(8)
            if len(header_len_bytes) < 8:
                return None
            header_len = struct.unpack("<Q", header_len_bytes)[0]
            if header_len == 0 or header_len > MAX_HEADER_SIZE:
                return None
            header_data = f.read(header_len)
            if len(header_data) < header_len:
                return None
            return json.loads(header_data.decode("utf-8"))
    except (OSError, json.JSONDecodeError, UnicodeDecodeError, struct.error):
        return None


def read_gguf_header(path: Path) -> dict[str, Any] | None:
    """
    Базовий розбір заголовка GGUF (версія 1–3).
    Повертає словник з magic, version, tensor_count, kv_count та деякими KV.
    Не завантажує самі тензори.
    """
    try:
        with open(path, "rb") as f:
            magic = f.read(4)
            if magic != b"GGUF":
                return None
            version = struct.unpack("<I", f.read(4))[0]
            if version not in (1, 2, 3):
                return {"magic": "GGUF", "version": version, "note": "невідома версія"}

            # tensor_count і kv_count — uint64
            tensor_count = struct.unpack("<Q", f.read(8))[0]
            kv_count = struct.unpack("<Q", f.read(8))[0]

            info: dict[str, Any] = {
                "magic": "GGUF",
                "version": version,
                "tensor_count": tensor_count,
                "kv_count": kv_count,
                "metadata": {},
            }

            # Читаємо тільки кілька корисних KV (щоб не витрачати час на великі рядки)
            # GGUF value types: 0=uint8 ... 8=string, 9=array
            def read_string() -> str:
                n = struct.unpack("<Q", f.read(8))[0]
                if n > 1_000_000:  # захист
                    f.seek(n, 1)
                    return "<too long>"
                return f.read(n).decode("utf-8", errors="replace")

            useful_keys = {
                "general.architecture", "general.name", "general.file_type",
                "general.quantization_version", "general.alignment",
                "llama.context_length", "llama.embedding_length",
                "clip.projector_type", "clip.has_text_encoder", "clip.has_vision_encoder",
            }

            for _ in range(min(kv_count, 80)):  # обмежуємо кількість
                try:
                    key = read_string()
                    vtype = struct.unpack("<I", f.read(4))[0]
                    value: Any = None
                    if vtype == 8:  # string
                        value = read_string()
                    elif vtype == 4:  # uint32
                        value = struct.unpack("<I", f.read(4))[0]
                    elif vtype == 5:  # int32
                        value = struct.unpack("<i", f.read(4))[0]
                    elif vtype == 6:  # float32
                        value = struct.unpack("<f", f.read(4))[0]
                    elif vtype == 7:  # bool
                        value = bool(struct.unpack("<B", f.read(1))[0])
                    elif vtype == 9:  # array — пропускаємо
                        arr_type = struct.unpack("<I", f.read(4))[0]
                        arr_len = struct.unpack("<Q", f.read(8))[0]
                        # дуже грубо пропускаємо
                        if arr_type == 8:
                            for _ in range(min(arr_len, 100)):
                                read_string()
                        else:
                            # приблизний розмір елементів
                            sizes = {0: 1, 1: 1, 2: 2, 3: 2, 4: 4, 5: 4, 6: 4, 7: 1, 10: 8, 11: 8, 12: 8}
                            f.seek(arr_len * sizes.get(arr_type, 4), 1)
                        value = f"<array len={arr_len}>"
                    else:
                        # інші типи — пропускаємо приблизно
                        sizes = {0: 1, 1: 1, 2: 2, 3: 2, 4: 4, 5: 4, 6: 4, 7: 1, 10: 8, 11: 8, 12: 8}
                        f.seek(sizes.get(vtype, 4), 1)
                        value = f"<type {vtype}>"

                    if key in useful_keys or key.startswith("general."):
                        info["metadata"][key] = value
                except Exception:
                    break

            return info
    except (OSError, struct.error, UnicodeDecodeError):
        return None


# ---------------------------------------------------------------------------
# Класифікація
# ---------------------------------------------------------------------------

def classify_safetensors(header: dict[str, Any], file_size_mb: float) -> dict[str, Any]:
    """Класифікація .safetensors за ключами тензорів + метаданими."""
    meta = header.get("__metadata__", {}) or {}
    if not isinstance(meta, dict):
        meta = {}

    tensor_keys = [k for k in header.keys() if k != "__metadata__"]
    keys_lower = "\n".join(tensor_keys).lower()
    keys_joined = " ".join(tensor_keys).lower()

    result: dict[str, Any] = {
        "type": "Unknown",
        "subtype": "",
        "base_model": "",
        "confidence": "low",
        "notes": [],
        "tensor_count": len(tensor_keys),
        "file_size_mb": round(file_size_mb, 1),
        "format": "safetensors",
    }

    # Метадані
    arch = (
        meta.get("modelspec.architecture")
        or meta.get("ss_base_model_version")
        or meta.get("ss_sd_model_name")
        or meta.get("base_model")
        or ""
    ).lower()
    if arch:
        result["base_model"] = arch
        if "/lora" in arch or "lora" in arch:
            result["type"] = "LoRA"
            result["confidence"] = "high"
        elif "textual-inversion" in arch or "embedding" in arch:
            result["type"] = "Embedding / Textual Inversion"
            result["confidence"] = "high"

    ss_keys = [k for k in meta if k.startswith("ss_")]
    if ss_keys and result["type"] == "Unknown":
        result["type"] = "LoRA"
        result["confidence"] = "high"
        result["notes"].append(f"Знайдено {len(ss_keys)} ключів ss_* (Kohya)")

    # Патерни тензорів
    has_lora = any(
        ("lora_" in k and (".alpha" in k or "lora_down" in k or "lora_up" in k
                           or "lora_A" in k or "lora_B" in k))
        for k in tensor_keys
    ) or "lora_down.weight" in keys_joined or "lora_up.weight" in keys_joined

    has_diffusion = any(
        x in keys_joined for x in (
            "model.diffusion_model.", "diffusion_model.", "double_blocks.",
            "single_blocks.", "joint_blocks.", "transformer_blocks.",
            "img_attn.", "txt_attn.", "x_embedder.", "time_text_embed."
        )
    )
    has_clip = any(
        x in keys_joined for x in (
            "cond_stage_model.", "text_model.", "clip_l.", "clip_g.",
            "t5xxl.", "text_encoder", "conditioner.embedders"
        )
    )
    has_vae = (
        any(k.startswith("encoder.") or k.startswith("decoder.")
            or "first_stage_model." in k for k in tensor_keys)
        and not has_diffusion
    )
    has_controlnet = (
        "controlnet" in keys_joined
        or (any("input_blocks." in k for k in tensor_keys)
            and "middle_block." in keys_joined
            and not has_clip and file_size_mb < 3000)
    )

    size = file_size_mb

    if has_lora:
        result["type"] = "LoRA"
        result["confidence"] = "high"
        if "loha" in keys_lower or "hada" in keys_lower:
            result["subtype"] = "LoHa"
        elif "lokr" in keys_lower:
            result["subtype"] = "LoKr"
        elif "locon" in keys_lower or "lycoris" in keys_lower:
            result["subtype"] = "LoCon / LyCORIS"
        elif "dora" in keys_lower:
            result["subtype"] = "DoRA"
        else:
            result["subtype"] = "Standard LoRA"
        if size > 500:
            result["notes"].append("Великий розмір для LoRA — можливо full fine-tune")
    elif has_vae and size < 1200:
        result["type"] = "VAE"
        result["confidence"] = "high"
    elif has_controlnet:
        result["type"] = "ControlNet"
        result["confidence"] = "medium"
    elif has_diffusion and has_clip:
        result["type"] = "Checkpoint (повний)"
        result["confidence"] = "high"
        result["notes"].append("UNet/DiT + CLIP/Text Encoder (+ можливо VAE)")
    elif has_diffusion and not has_clip:
        result["type"] = "Diffusion Model / UNet (тільки ядро)"
        result["confidence"] = "high"
        result["notes"].append("Ймовірно для models/diffusion_models/ (Flux, SD3, DiT)")
    elif has_clip and not has_diffusion and size < 3000:
        result["type"] = "Text Encoder / CLIP"
        result["confidence"] = "medium"
    elif size > 2000 and len(tensor_keys) > 200:
        result["type"] = "Checkpoint (ймовірно)"
        result["confidence"] = "low"
        result["notes"].append("Великий файл з багатьма тензорами")
    elif size < 50 and len(tensor_keys) < 30:
        result["type"] = "Embedding / Textual Inversion (ймовірно)"
        result["confidence"] = "low"

    # Корисні метадані
    useful_meta = {}
    for key in (
        "ss_base_model_version", "ss_network_dim", "ss_network_alpha",
        "ss_network_module", "ss_epoch", "ss_num_train_images",
        "ss_learning_rate", "ss_output_name", "modelspec.architecture",
        "modelspec.title", "modelspec.date", "ss_tag_frequency",
        "sshs_model_hash", "modelspec.sai_model_spec",
    ):
        if key in meta and meta[key]:
            useful_meta[key] = meta[key]

    triggers: list[str] = []
    if "ss_tag_frequency" in meta:
        try:
            tag_freq = meta["ss_tag_frequency"]
            if isinstance(tag_freq, str):
                tag_freq = json.loads(tag_freq)
            all_tags: dict[str, int] = {}
            if isinstance(tag_freq, dict):
                for _, tags in tag_freq.items():
                    if isinstance(tags, dict):
                        for t, c in tags.items():
                            all_tags[t] = all_tags.get(t, 0) + int(c)
            triggers = sorted(all_tags.keys(), key=lambda x: -all_tags[x])[:15]
        except Exception:
            pass

    result["useful_metadata"] = useful_meta
    result["possible_triggers"] = triggers
    result["all_metadata_keys"] = sorted(meta.keys()) if meta else []
    return result


def classify_gguf(header: dict[str, Any], file_size_mb: float) -> dict[str, Any]:
    """Класифікація .gguf."""
    meta = header.get("metadata", {})
    arch = str(meta.get("general.architecture", "")).lower()
    name = str(meta.get("general.name", ""))

    result: dict[str, Any] = {
        "type": "GGUF Model",
        "subtype": "",
        "base_model": arch or name,
        "confidence": "medium",
        "notes": [
            f"GGUF version: {header.get('version')}",
            f"Кількість тензорів: {header.get('tensor_count')}",
            f"KV pairs: {header.get('kv_count')}",
        ],
        "tensor_count": header.get("tensor_count", 0),
        "file_size_mb": round(file_size_mb, 1),
        "format": "gguf",
        "useful_metadata": meta,
        "possible_triggers": [],
        "all_metadata_keys": list(meta.keys()),
    }

    if "clip" in arch or "vision" in arch:
        result["type"] = "GGUF CLIP / Vision Encoder"
        result["notes"].append("Ймовірно для text_encoders або clip_vision")
    elif any(x in arch for x in ("llama", "qwen", "mistral", "gemma", "phi")):
        result["type"] = "GGUF LLM (текстова модель)"
        result["notes"].append("Може використовуватися як text encoder у деяких workflow")
    elif "flux" in arch or "sd" in arch or "dit" in arch or "unet" in arch:
        result["type"] = "GGUF Diffusion / UNet"
        result["notes"].append("Квантизована diffusion-модель → models/diffusion_models/ + GGUF loader")
    else:
        result["notes"].append("Загальний GGUF — потрібен відповідний loader (ComfyUI-GGUF тощо)")

    return result


def classify_by_extension(ext: str, file_size_mb: float) -> dict[str, Any]:
    """Евристика для .ckpt / .pt / .pth / .bin (без розбору вмісту)."""
    result: dict[str, Any] = {
        "type": "Unknown (pickle-based)",
        "subtype": "",
        "base_model": "",
        "confidence": "low",
        "notes": [
            "Формат на основі pickle — повний розбір небезпечний і не виконується.",
            "Рекомендується конвертувати в .safetensors, якщо можливо.",
        ],
        "tensor_count": 0,
        "file_size_mb": round(file_size_mb, 1),
        "format": ext.lstrip("."),
        "useful_metadata": {},
        "possible_triggers": [],
        "all_metadata_keys": [],
    }

    size = file_size_mb
    if size > 1500:
        result["type"] = "Checkpoint (ймовірно, .ckpt/.pt)"
        result["notes"].append("Великий розмір → швидше за все повний checkpoint")
        result["confidence"] = "medium"
    elif size < 30:
        result["type"] = "Embedding / маленький pickle"
        result["confidence"] = "low"
    elif 30 <= size <= 500:
        result["type"] = "LoRA або VAE (ймовірно)"
        result["notes"].append("Середній розмір — може бути LoRA, VAE або ControlNet")
    return result


# ---------------------------------------------------------------------------
# Форматування .info.txt
# ---------------------------------------------------------------------------

FOLDER_HINTS = {
    "lora": "models/loras/",
    "checkpoint (повний)": "models/checkpoints/",
    "checkpoint (ймовірно)": "models/checkpoints/",
    "checkpoint (ймовірно, .ckpt/.pt)": "models/checkpoints/",
    "diffusion model / unet (тільки ядро)": "models/diffusion_models/",
    "gguf diffusion / unet": "models/diffusion_models/  (+ ComfyUI-GGUF loader)",
    "vae": "models/vae/",
    "controlnet": "models/controlnet/",
    "text encoder / clip": "models/text_encoders/ або models/clip/",
    "gguf clip / vision encoder": "models/text_encoders/ або models/clip_vision/",
    "gguf llm (текстова модель)": "models/text_encoders/ (якщо підтримується workflow)",
    "embedding / textual inversion": "models/embeddings/",
    "embedding / textual inversion (ймовірно)": "models/embeddings/",
    "embedding / маленький pickle": "models/embeddings/",
}


def format_info(path: Path, classification: dict, extra: dict | None = None) -> str:
    lines: list[str] = []
    lines.append("=" * 60)
    lines.append(f"Файл: {path.name}")
    lines.append(f"Шлях: {path}")
    lines.append(f"Формат: {classification.get('format', '?')}")
    lines.append(f"Розмір: {classification['file_size_mb']} МБ")
    if classification.get("tensor_count"):
        lines.append(f"Кількість тензорів: {classification['tensor_count']}")
    lines.append("=" * 60)
    lines.append("")
    lines.append(f"ТИП:          {classification['type']}")
    if classification.get("subtype"):
        lines.append(f"Підтип:       {classification['subtype']}")
    lines.append(f"Впевненість:  {classification['confidence']}")
    if classification.get("base_model"):
        lines.append(f"Base model:   {classification['base_model']}")
    lines.append("")

    if classification.get("notes"):
        lines.append("Нотатки:")
        for n in classification["notes"]:
            lines.append(f"  • {n}")
        lines.append("")

    t = classification["type"].lower()
    for key, folder in FOLDER_HINTS.items():
        if key in t:
            lines.append(f"Рекомендована папка ComfyUI: {folder}")
            break
    lines.append("")

    if classification.get("possible_triggers"):
        lines.append("Можливі trigger / теги:")
        lines.append("  " + ", ".join(classification["possible_triggers"][:12]))
        lines.append("")

    if classification.get("useful_metadata"):
        lines.append("Корисні метадані:")
        for k, v in classification["useful_metadata"].items():
            vs = str(v)
            if len(vs) > 200:
                vs = vs[:200] + "..."
            lines.append(f"  {k}: {vs}")
        lines.append("")

    if classification.get("all_metadata_keys"):
        keys = classification["all_metadata_keys"]
        lines.append(f"Усі ключі метаданих ({len(keys)}):")
        lines.append("  " + ", ".join(keys[:40]))
        if len(keys) > 40:
            lines.append("  ...")
        lines.append("")

    if extra and "tensor_keys_sample" in extra:
        lines.append("Приклади ключів тензорів:")
        for k in extra["tensor_keys_sample"]:
            lines.append(f"  {k}")
        if classification.get("tensor_count", 0) > 15:
            lines.append(f"  ... і ще {classification['tensor_count'] - 15}")
        lines.append("")

    lines.append("Згенеровано safetensors_inspector.py")
    return "\n".join(lines)


# ---------------------------------------------------------------------------
# Обробка одного файлу
# ---------------------------------------------------------------------------

def process_file(path: Path, force: bool = False) -> bool:
    info_path = path.with_suffix(path.suffix + ".info.txt")

    if info_path.exists() and not force:
        print(f"  [skip] {path.name}")
        return False

    size_mb = path.stat().st_size / (1024 * 1024)
    ext = path.suffix.lower()
    classification: dict[str, Any]
    extra: dict[str, Any] = {}

    if ext in (".safetensors", ".sft"):
        header = read_safetensors_header(path)
        if header is None:
            print(f"  [error] Не вдалося прочитати заголовок: {path.name}")
            return False
        classification = classify_safetensors(header, size_mb)
        extra["tensor_keys_sample"] = [k for k in header.keys() if k != "__metadata__"][:15]

    elif ext == ".gguf":
        header = read_gguf_header(path)
        if header is None:
            print(f"  [error] Не GGUF або пошкоджений: {path.name}")
            return False
        classification = classify_gguf(header, size_mb)

    elif ext in (".ckpt", ".pt", ".pth", ".bin"):
        classification = classify_by_extension(ext, size_mb)

    else:
        print(f"  [skip] Невідомий формат: {path.name}")
        return False

    text = format_info(path, classification, extra)
    info_path.write_text(text, encoding="utf-8")
    print(f"  [ok] {path.name} → {classification['type']} ({classification['confidence']})")
    return True


# ---------------------------------------------------------------------------
# main
# ---------------------------------------------------------------------------

def main() -> None:
    parser = argparse.ArgumentParser(
        description="Інспектор моделей ComfyUI (.safetensors, .gguf, .ckpt ...) → .info.txt"
    )
    parser.add_argument("path", help="Файл або папка з моделями")
    parser.add_argument("--recursive", "-r", action="store_true", help="Рекурсивно")
    parser.add_argument("--force", "-f", action="store_true", help="Перезаписати існуючі .info.txt")
    args = parser.parse_args()

    target = Path(args.path)
    if not target.exists():
        print(f"Шлях не існує: {target}")
        sys.exit(1)

    files: list[Path] = []
    if target.is_file():
        if target.suffix.lower() in SUPPORTED_EXTENSIONS:
            files = [target]
        else:
            print(f"Формат не підтримується: {target.suffix}")
            sys.exit(1)
    else:
        patterns = []
        for ext in SUPPORTED_EXTENSIONS:
            patterns.append(f"**/*{ext}" if args.recursive else f"*{ext}")
        seen = set()
        for pat in patterns:
            for p in target.glob(pat):
                if p not in seen:
                    seen.add(p)
                    files.append(p)

    if not files:
        print("Файлів підтримуваних форматів не знайдено")
        sys.exit(0)

    print(f"Знайдено {len(files)} файл(ів). Обробка...\n")
    created = 0
    for f in sorted(files):
        if process_file(f, force=args.force):
            created += 1

    print(f"\nГотово. Створено/оновлено: {created} з {len(files)}")


if __name__ == "__main__":
    main()