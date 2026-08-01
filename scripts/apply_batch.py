#!/usr/bin/env python3
"""
Скрипт для застосування перекладів з JSON файлу.
Використання: python apply_batch.py translations_file.json [output_file.json]
"""
import json
import sys
from pathlib import Path
from typing import Dict, Any

EN_DIR = Path("temp/ComfyUI_frontend/src/locales/en")
UK_DIR = Path("locales/uk")


def load_json(path: Path) -> Dict[str, Any]:
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)


def save_json(path: Path, data: Dict[str, Any]) -> None:
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write('\n')


def set_by_path(data: Dict, path: str, value: str) -> bool:
    keys = path.split('.')
    current = data
    for key in keys[:-1]:
        if key not in current or not isinstance(current[key], dict):
            return False
        current = current[key]
    if keys[-1] in current:
        current[keys[-1]] = value
        return True
    return False


def apply_translations(uk_data: Dict, translations: Dict) -> tuple:
    applied = 0
    failed = 0
    for path, translation in translations.items():
        if set_by_path(uk_data, path, translation):
            applied += 1
        else:
            failed += 1
            print(f"⚠️  Ключ не знайдено: {path}")
    return applied, failed


def main():
    if len(sys.argv) < 2:
        print("Використання: python apply_batch.py <translations.json> [output_file]")
        sys.exit(1)
    
    trans_file = Path(sys.argv[1])
    output_file = sys.argv[2] if len(sys.argv) > 2 else "main.json"
    
    if not trans_file.exists():
        print(f"❌ Файл перекладів не знайдено: {trans_file}")
        sys.exit(1)
    
    translations = load_json(trans_file)
    en_file = EN_DIR / output_file
    uk_file = UK_DIR / output_file
    
    if not en_file.exists():
        print(f"❌ English файл не знайдено: {en_file}")
        sys.exit(1)
    
    print(f"\n{'='*60}")
    print(f"🔄 Обробка: {output_file}")
    print(f"{'='*60}")
    
    en_data = load_json(en_file)
    
    if uk_file.exists():
        uk_data = load_json(uk_file)
        print(f"📂 Завантажено існуючий файл: {uk_file}")
    else:
        uk_data = json.loads(json.dumps(en_data))
        print(f"🆕 Створено новий файл з English шаблону")
    
    applied, failed = apply_translations(uk_data, translations)
    print(f"✅ Застосовано: {applied} перекладів")
    if failed:
        print(f"⚠️  Не знайдено: {failed} ключів")
    
    save_json(uk_file, uk_data)
    print(f"💾 Збережено: {uk_file}")


if __name__ == "__main__":
    main()