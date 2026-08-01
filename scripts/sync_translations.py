#!/usr/bin/env python3
"""
Скрипт для синхронізації перекладів з оновленою версією ComfyUI.
Додає нові ключі з English версії в Ukrainian, зберігаючи існуючі переклади.
"""

import json
import sys
from pathlib import Path
from typing import Dict, Set


def load_json(file_path: Path) -> Dict:
    """Завантажує JSON файл."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        return {}
    except json.JSONDecodeError as e:
        print(f"❌ Помилка парсингу JSON в {file_path}: {e}")
        sys.exit(1)


def save_json(file_path: Path, data: Dict) -> None:
    """Зберігає JSON файл з красивим форматуванням."""
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write('\n')


def extract_keys(data: Dict, parent_key: str = "") -> Set[str]:
    """Рекурсивно витягує всі ключі з JSON структури."""
    keys = set()
    for key, value in data.items():
        full_key = f"{parent_key}.{key}" if parent_key else key
        keys.add(full_key)
        if isinstance(value, dict):
            keys.update(extract_keys(value, full_key))
    return keys


def sync_translations(en_file: Path, uk_file: Path, backup: bool = True) -> None:
    """
    Синхронізує Ukrainian файл з English версією.
    Додає нові ключі, зберігаючи існуючі переклади.
    """
    print(f"\n{'='*70}")
    print(f"🔄 Синхронізація перекладів")
    print(f"{'='*70}")
    print(f"English: {en_file}")
    print(f"Ukrainian: {uk_file}")
    
    # Завантаження файлів
    en_data = load_json(en_file)
    uk_data = load_json(uk_file)
    
    if not en_data:
        print(f"❌ English файл порожній або не знайдено: {en_file}")
        sys.exit(1)
    
    # Створення бекапу
    if backup and uk_data:
        backup_file = uk_file.with_suffix('.json.backup')
        save_json(backup_file, uk_data)
        print(f"\n💾 Бекап створено: {backup_file}")
    
    # Отримання ключів
    en_keys = extract_keys(en_data)
    uk_keys = extract_keys(uk_data)
    
    # Знаходження нових ключів
    new_keys = en_keys - uk_keys
    missing_keys = en_keys - uk_keys
    
    if not missing_keys:
        print(f"\n✅ Всі ключі вже присутні в українській версії")
        print(f"   Нічого додавати не потрібно")
        return
    
    print(f"\n📊 Знайдено {len(missing_keys)} нових ключів")
    print(f"\nНові ключі:")
    for key in sorted(missing_keys):
        print(f"  + {key}")
    
    # Додавання нових ключів з порожніми значеннями
    def add_missing_keys(en_dict: Dict, uk_dict: Dict, prefix: str = "") -> None:
        """Рекурсивно додає відсутні ключі."""
        for key, value in en_dict.items():
            full_key = f"{prefix}.{key}" if prefix else key
            
            if full_key in missing_keys:
                if isinstance(value, dict):
                    # Створення вкладеної структури
                    if key not in uk_dict:
                        uk_dict[key] = {}
                    add_missing_keys(value, uk_dict[key], full_key)
                else:
                    # Додавання порожнього значення для перекладу
                    uk_dict[key] = ""
    
    add_missing_keys(en_data, uk_data)
    
    # Збереження оновленого файлу
    save_json(uk_file, uk_data)
    
    print(f"\n✅ Оновлено файл: {uk_file}")
    print(f"\n📝 Наступні кроки:")
    print(f"   1. Відкрийте {uk_file}")
    print(f"   2. Заповніть переклади для нових ключів (позначені як \"\")")
    print(f"   3. Запустіть: python validate_json.py {uk_file}")
    print(f"   4. Перевірте: python compare_keys.py {en_file} {uk_file}")


def create_structure_from_en(en_file: Path, uk_file: Path) -> None:
    """
    Створює Ukrainian файл з нуля на основі English структури.
    Всі значення залишаються порожніми для заповнення.
    """
    print(f"\n{'='*70}")
    print(f"🆕 Створення Ukrainian файлу з нуля")
    print(f"{'='*70}")
    print(f"English: {en_file}")
    print(f"Ukrainian: {uk_file}")
    
    # Завантаження English файлу
    en_data = load_json(en_file)
    
    if not en_data:
        print(f"❌ English файл порожній або не знайдено: {en_file}")
        sys.exit(1)
    
    # Створення копії з порожніми значеннями
    def clear_values(data: Dict) -> Dict:
        """Замінює всі значення на порожні рядки."""
        result = {}
        for key, value in data.items():
            if isinstance(value, dict):
                result[key] = clear_values(value)
            else:
                result[key] = ""
        return result
    
    uk_data = clear_values(en_data)
    
    # Збереження
    if uk_file.exists():
        backup_file = uk_file.with_suffix('.json.backup')
        save_json(backup_file, load_json(uk_file))
        print(f"💾 Бекап існуючого файлу: {backup_file}")
    
    save_json(uk_file, uk_data)
    
    print(f"\n✅ Створено файл: {uk_file}")
    print(f"\n📝 Наступні кроки:")
    print(f"   1. Відкрийте {uk_file}")
    print(f"   2. Заповніть всі переклади (зараз всі значення порожні)")
    print(f"   3. Запустіть: python validate_json.py {uk_file}")


def main():
    """Головна функція."""
    if len(sys.argv) < 3:
        print("Використання:")
        print("  python sync_translations.py sync <en_file> <uk_file>")
        print("  python sync_translations.py create <en_file> <uk_file>")
        print("\nРежими:")
        print("  sync   - Додає нові ключі з English в Ukrainian (зберігає переклади)")
        print("  create - Створює Ukrainian файл з нуля (всі значення порожні)")
        print("\nПриклади:")
        print("  python sync_translations.py sync locales/en/main.json locales/uk/main.json")
        print("  python sync_translations.py create locales/en/nodeDefs.json locales/uk/nodeDefs.json")
        sys.exit(1)
    
    mode = sys.argv[1]
    en_file = Path(sys.argv[2])
    uk_file = Path(sys.argv[3])
    
    if not en_file.exists():
        print(f"❌ English файл не знайдено: {en_file}")
        sys.exit(1)
    
    if mode == "sync":
        if not uk_file.exists():
            print(f"⚠️  Ukrainian файл не знайдено: {uk_file}")
            print(f"💡 Використовуйте режим 'create' для створення нового файлу")
            sys.exit(1)
        sync_translations(en_file, uk_file)
    
    elif mode == "create":
        if uk_file.exists():
            print(f"⚠️  Ukrainian файл вже існує: {uk_file}")
            response = input("Перезаписати? (y/N): ")
            if response.lower() != 'y':
                print("Скасовано")
                sys.exit(0)
        create_structure_from_en(en_file, uk_file)
    
    else:
        print(f"❌ Невідомий режим: {mode}")
        print("Доступні режими: sync, create")
        sys.exit(1)


if __name__ == "__main__":
    main()