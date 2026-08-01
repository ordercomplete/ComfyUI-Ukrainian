#!/usr/bin/env python3
"""
Оновлення ComfyUI-Ukrainian з офіційних репозиторіїв.

Безпечне оновлення бекенду та фронтенду без втрати українських перекладів.

Використання:
    python scripts/update_frontend.py              # повне оновлення
    python scripts/update_frontend.py --dry-run     # тільки перевірка
    python scripts/update_frontend.py --backend     # тільки бекенд
    python scripts/update_frontend.py --frontend    # тільки фронтенд
    python scripts/update_frontend.py --apply-translations  # тільки переклади
"""

import os
import subprocess
import sys
import re
import shutil
import json
from pathlib import Path
from typing import Dict, List, Optional, Tuple

# Шляхи
REPO_ROOT = Path(__file__).parent.parent  # D:\ComfyUI-Ukrainian
TEMP_DIR = REPO_ROOT / "temp"
FRONTEND_DIR = TEMP_DIR / "ComfyUI_frontend"
PACKAGE_STATIC = REPO_ROOT / "comfyui_frontend_package" / "static"
LOCALES_UK = REPO_ROOT / "locales" / "uk"
PACKAGE_LOCALES_UK = PACKAGE_STATIC / "locales" / "uk"

# Файли перекладів (захист)
LOCALE_FILES = ["main.json", "nodeDefs.json", "settings.json", "commands.json"]

# Переклади KJNodes (з UKRAINIAN_TRANSLATION_PLAN.md → ДОДАТОК A)
KJNODES_TRANSLATIONS = {
    # Категорії (9 категорій)
    "KJNodes.category.image": "Зображення",
    "KJNodes.category.video": "Відео",
    "KJNodes.category.audio": "Аудіо",
    "KJNodes.category.mask": "Маска",
    "KJNodes.category.latent": "Латент",
    "KJNodes.category.controlnet": "ControlNet",
    "KJNodes.category.conditioning": "Умовлення",
    "KJNodes.category.text": "Текст",
    "KJNodes.category.other": "Інше",
    
    # Налаштування (32 налаштування)
    "KJNodes.image_width": "Ширина",
    "KJNodes.image_height": "Висота",
    "KJNodes.seed": "Насіння",
    "KJNodes.steps": "Кроки",
    "KJNodes.cfg": "CFG",
    "KJNodes.denoise": "Шумозаглушення",
    "KJNodes.start_at_step": "Почати з кроку",
    "KJNodes.end_at_step": "Закінчити на кроці",
    "KJNodes.return_with_leftover_noise": "Повернути з залишковим шумом",
    "KJNodes.return": "Повернути",
    "KJNodes.noise": "Шум",
    "KJNodes.vae": "VAE",
    "KJNodes.ckpt_name": "Назва моделі",
    "KJNodes.vae_name": "Назва VAE",
    "KJNodes.image": "Зображення",
    "KJNodes.images": "Зображення",
    "KJNodes.mask": "Маска",
    "KJNodes.latent": "Латент",
    "KJNodes.conditioning": "Умовлення",
    "KJNodes.clip": "CLIP",
    "KJNodes.text": "Текст",
    "KJNodes.audio": "Аудіо",
    "KJNodes.video": "Відео",
    "KJNodes.fps": "FPS",
    "KJNodes.duration": "Тривалість",
    "KJNodes.width": "Ширина",
    "KJNodes.height": "Висота",
    "KJNodes.channels": "Канали",
    "KJNodes.sample_rate": "Частота дискретизації",
    "KJNodes.batch_size": "Розмір батчу",
    "KJNodes.interpolation": "Інтерполяція",
    "KJNodes.video_format": "Формат відео",
}


def run_cmd(cmd: List[str], cwd: Optional[Path] = None, check: bool = True) -> subprocess.CompletedProcess:
    """Запустити команду в терміналі."""
    print(f"\n>>> {' '.join(cmd)}")
    result = subprocess.run(cmd, cwd=cwd, capture_output=True, text=True, check=check)
    if result.stdout:
        print(result.stdout)
    if result.stderr:
        print(result.stderr, file=sys.stderr)
    return result


def backup_locales():
    """Зберегти бекап перекладів."""
    backup_dir = REPO_ROOT / "locales" / "uk_backup"
    if backup_dir.exists():
        print(f"⚠️  Бекап вже існує: {backup_dir}")
        return backup_dir
    
    print(f"💾 Створення бекапу: {backup_dir}")
    shutil.copytree(LOCALES_UK, backup_dir)
    print(f"✅ Бекап створено ({len(LOCALE_FILES)} файлів)")
    return backup_dir


def restore_locales(backup_dir: Optional[Path] = None):
    """Відновити переклади з бекапу."""
    if backup_dir is None:
        backup_dir = REPO_ROOT / "locales" / "uk_backup"
    
    if not backup_dir.exists():
        print("⚠️  Бекап не знайдено — нічого відновлювати")
        return
    
    print(f"🔄 Відновлення з бекапу: {backup_dir}")
    for f in LOCALE_FILES:
        src = backup_dir / f
        dst = LOCALES_UK / f
        if src.exists():
            shutil.copy2(src, dst)
            print(f"  ✅ {f}")
    print("✅ Відновлення завершено")


def update_backend():
    """Оновити бекенд (git pull)."""
    print("\n" + "=" * 60)
    print("КРОК 1: Оновлення бекенду")
    print("=" * 60)
    
    # Git pull
    run_cmd(["git", "pull", "origin", "main"], cwd=REPO_ROOT)
    
    # Перевірити що locales/uk зберігся
    all_ok = True
    for f in LOCALE_FILES:
        if (LOCALES_UK / f).exists():
            print(f"✅ {f} зберігся")
        else:
            print(f"❌ {f} втрачено! Відновлюємо...")
            restore_locales()
            all_ok = False
            break
    
    if all_ok:
        print("✅ Бекенд оновлено, переклади збережені")
    
    return all_ok


def update_frontend():
    """Оновити фронтенд."""
    print("\n" + "=" * 60)
    print("КРОК 2: Оновлення фронтенду")
    print("=" * 60)
    
    # 1. Перевірити чи існує
    if not FRONTEND_DIR.exists():
        print("📥 Клоную ComfyUI_frontend...")
        TEMP_DIR.mkdir(parents=True, exist_ok=True)
        run_cmd(["git", "clone", "https://github.com/Comfy-Org/ComfyUI_frontend.git"], cwd=TEMP_DIR)
    
    # 2. Отримати останню версію
    current_tag = run_cmd(["git", "describe", "--tags", "--abbrev=0"], cwd=FRONTEND_DIR, check=False)
    run_cmd(["git", "fetch", "origin", "--tags"], cwd=FRONTEND_DIR)
    latest_tag = run_cmd(["git", "describe", "--tags", "--abbrev=0"], cwd=FRONTEND_DIR, check=False)
    
    current = current_tag.stdout.strip() if current_tag.returncode == 0 else "невідома"
    latest = latest_tag.stdout.strip() if latest_tag.returncode == 0 else "невідома"
    
    print(f"Поточна версія: {current}")
    print(f"Остання версія: {latest}")
    
    if current == latest:
        print("✅ Frontend вже останньої версії")
        return None  # Немає оновлень
    
    # 3. Оновити до останньої версії
    run_cmd(["git", "pull", "origin", "main"], cwd=FRONTEND_DIR)
    
    # 4. Встановити залежності
    run_cmd(["pnpm", "install"], cwd=FRONTEND_DIR)
    
    # 5. Збудувати
    print("\n🔨 Збірка frontend...")
    run_cmd(["pnpm", "build"], cwd=FRONTEND_DIR)
    
    print("✅ Frontend збудовано")
    return latest


def apply_locales_to_frontend():
    """Застосувати переклади до frontend джерела."""
    print("\n" + "=" * 60)
    print("КРОК 3: Застосування перекладів до frontend джерела")
    print("=" * 60)
    
    # 1. Створити папку locales/uk у frontend
    frontend_locales_uk = FRONTEND_DIR / "src" / "locales" / "uk"
    frontend_locales_uk.mkdir(parents=True, exist_ok=True)
    
    # 2. Скопіювати переклади
    for f in LOCALE_FILES:
        src = LOCALES_UK / f
        dst = frontend_locales_uk / f
        if src.exists():
            shutil.copy2(src, dst)
            print(f"  ✅ Скопійовано {f} → frontend")
    
    # 3. Додати українську в localeConfig.ts
    locale_config = FRONTEND_DIR / "src" / "locales" / "localeConfig.ts"
    if locale_config.exists():
        content = locale_config.read_text(encoding="utf-8")
        if "'uk'" not in content and '"uk"' not in content:
            import re
            pattern = r"('zh':\s*\{[^}]+\})"
            match = re.search(pattern, content)
            if match:
                insert_pos = match.end()
                new_entry = "\n  uk: { text: 'Українська', loaders: loadersFor('uk') },"
                content = content[:insert_pos] + new_entry + content[insert_pos:]
                locale_config.write_text(content, encoding="utf-8")
                print("  ✅ Додано 'uk' в localeConfig.ts")
            else:
                print("  ⚠️  Не знайдено місце для вставки в localeConfig.ts")
        else:
            print("  ✅ 'uk' вже є в localeConfig.ts")
    
    # 4. Перебудувати з перекладами
    print("\n🔨 Перебудова з перекладами...")
    run_cmd(["pnpm", "build"], cwd=FRONTEND_DIR)
    
    print("✅ Переклади застосовано до frontend")


def update_package():
    """Оновити comfyui_frontend_package."""
    print("\n" + "=" * 60)
    print("КРОК 4: Оновлення comfyui_frontend_package")
    print("=" * 60)
    
    # 1. Скопіювати dist/ у static/
    dist_dir = FRONTEND_DIR / "dist"
    if not dist_dir.exists():
        print(f"❌ dist/ не знайдено в {dist_dir}")
        return
    
    print("📋 Копіювання dist/ → static/...")
    
    # Очистити static/ (крім locales/uk/)
    if PACKAGE_STATIC.exists():
        for item in PACKAGE_STATIC.iterdir():
            if item.name == "locales":
                continue  # Зберегти locales
            if item.is_dir():
                shutil.rmtree(item)
            else:
                item.unlink()
    
    # Копіювати все з dist/
    copied = 0
    for item in dist_dir.iterdir():
        dst = PACKAGE_STATIC / item.name
        if item.is_dir():
            if dst.exists():
                shutil.rmtree(dst)
            shutil.copytree(item, dst)
        else:
            shutil.copy2(item, dst)
        copied += 1
        print(f"  ✅ {item.name}")
    
    # Зберегти locales/uk/
    PACKAGE_LOCALES_UK.mkdir(parents=True, exist_ok=True)
    for f in LOCALE_FILES:
        src = LOCALES_UK / f
        dst = PACKAGE_LOCALES_UK / f
        if src.exists():
            shutil.copy2(src, dst)
            print(f"  ✅ {f} → static/locales/uk/")
    
    print(f"✅ comfyui_frontend_package оновлено ({copied} файлів)")
    
    # 2. Знайти нові імена файлів
    assets_dir = PACKAGE_STATIC / "assets"
    if assets_dir.exists():
        settings_files = list(assets_dir.glob("settings-*.js"))
        if settings_files:
            print(f"\n📄 Нові файли settings-*.js:")
            for sf in settings_files:
                print(f"   {sf.name} ({sf.stat().st_size // 1024} KB)")


def apply_kjnodes_translations():
    """Застосувати переклади KJNodes в compiled JS bundles."""
    print("\n" + "=" * 60)
    print("КРОК 5: Застосування перекладів KJNodes")
    print("=" * 60)
    
    assets_dir = PACKAGE_STATIC / "assets"
    if not assets_dir.exists():
        print("⚠️  assets/ не знайдено")
        return
    
    # Знайти settings-*.js
    settings_files = list(assets_dir.glob("settings-*.js"))
    if not settings_files:
        print("⚠️  settings-*.js не знайдено")
        return
    
    settings_file = settings_files[0]
    print(f"📄 Обробка: {settings_file.name}")
    
    # Читати файл
    content = settings_file.read_text(encoding="utf-8")
    original = content
    
    # Застосувати переклади
    replacements = 0
    for key, value in KJNODES_TRANSLATIONS.items():
        # Шукаємо "key": "value" або 'key': 'value'
        pattern = rf'("{re.escape(key)}"\s*:\s*"[^"]+")'
        match = re.search(pattern, content)
        if match:
            old_value = match.group(1)
            new_value = f'"{key}": "{value}"'
            content = content.replace(old_value, new_value)
            replacements += 1
            print(f"  ✅ {key}: {value}")
    
    if replacements > 0:
        settings_file.write_text(content, encoding="utf-8")
        print(f"\n✅ Застосовано {replacements} перекладів")
    else:
        print("\n⚠️  Перекладів не знайдено (можливо структура змінилася)")
    
    # Перевірити чи контент змінився
    if content != original:
        print("✅ Файл оновлено")
    else:
        print("⚠️  Файл не змінився")


def check_backend_locales():
    """Перевірити бекенд locale файли."""
    print("\n" + "=" * 60)
    print("ПЕРЕВІРКА: Бекенд locale файли")
    print("=" * 60)
    
    for f in LOCALE_FILES:
        path = LOCALES_UK / f
        if path.exists():
            size = path.stat().st_size
            print(f"✅ {f} ({size // 1024} KB, {path.read_text(encoding='utf-8').count(chr(10))} рядків)")
        else:
            print(f"❌ {f} НЕ знайдено!")


def check_frontend_locales():
    """Перевірити фронтенд locale файли."""
    print("\n" + "=" * 60)
    print("ПЕРЕВІРКА: Фронтенд locale файли")
    print("=" * 60)
    
    # locales/uk/
    if PACKAGE_LOCALES_UK.exists():
        for f in LOCALE_FILES:
            path = PACKAGE_LOCALES_UK / f
            if path.exists():
                size = path.stat().st_size
                print(f"✅ static/locales/uk/{f} ({size // 1024} KB)")
            else:
                print(f"❌ static/locales/uk/{f} НЕ знайдено!")
    else:
        print("❌ static/locales/uk/ НЕ знайдено!")
    
    # JS bundles
    assets_dir = PACKAGE_STATIC / "assets"
    if assets_dir.exists():
        print(f"\n📊 JS bundles ({len(list(assets_dir.glob('*.js')))} файлів):")
        
        settings_files = list(assets_dir.glob("settings-*.js"))
        if settings_files:
            for sf in settings_files:
                size = sf.stat().st_size
                print(f"   settings-{sf.name} ({size // 1024} KB)")
        
        node_defs = list(assets_dir.glob("nodeDefs-*.js"))
        if node_defs:
            for nd in node_defs:
                size = nd.stat().st_size
                print(f"   nodeDefs-{nd.name} ({size // 1024} KB)")
        
        commands = list(assets_dir.glob("commands-*.js"))
        if commands:
            for cm in commands:
                size = cm.stat().st_size
                print(f"   commands-{cm.name} ({size // 1024} KB)")


def main():
    """Головна функція."""
    import argparse
    
    parser = argparse.ArgumentParser(description="Оновлення ComfyUI-Ukrainian")
    parser.add_argument("--dry-run", action="store_true", help="Тільки перевірка")
    parser.add_argument("--backend", action="store_true", help="Тільки бекенд")
    parser.add_argument("--frontend", action="store_true", help="Тільки фронтенд")
    parser.add_argument("--apply-translations", action="store_true", help="Тільки переклади")
    parser.add_argument("--check", action="store_true", help="Тільки перевірка")
    args = parser.parse_args()
    
    print("=" * 60)
    print("ComfyUI-Ukrainian Update Tool")
    print("=" * 60)
    
    # Бекап
    backup_dir = backup_locales()
    
    if args.check:
        check_backend_locales()
        check_frontend_locales()
        return
    
    if args.dry_run:
        print("\n🔍 DRY RUN — нічого не змінюється")
        check_backend_locales()
        check_frontend_locales()
        return
    
    if args.backend:
        update_backend()
        return
    
    if args.frontend:
        update_frontend()
        return
    
    if args.apply_translations:
        apply_kjnodes_translations()
        return
    
    # Повне оновлення
    update_backend()
    update_frontend()
    apply_locales_to_frontend()
    update_package()
    apply_kjnodes_translations()
    
    print("\n" + "=" * 60)
    print("✅ ОНОВЛЕННЯ ЗАВЕРШЕНО!")
    print("=" * 60)
    print("\nНаступні кроки:")
    print("1. Перевірити: python scripts/update_frontend.py --check")
    print("2. Запустити: python main.py")
    print("3. Відкрити: http://127.0.0.1:8188")
    print("4. Перевірити: Comfy > Locale > Language → Українська")
    print("5. Перевірити: Settings Panel → перекладені налаштування")


if __name__ == "__main__":
    main()
