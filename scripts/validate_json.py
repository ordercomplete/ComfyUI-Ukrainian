#!/usr/bin/env python3
"""
Скрипт для перевірки валідності JSON файлів локалізації.
Перевіряє синтаксис, кодування та цілісність файлів.
"""

import json
import sys
from pathlib import Path
from typing import List, Tuple


def validate_json_file(file_path: Path) -> Tuple[bool, List[str]]:
    """
    Валідує JSON файл.
    Повертає: (успіх, список помилок)
    """
    errors = []
    
    # Перевірка існування файлу
    if not file_path.exists():
        return False, [f"❌ Файл не знайдено: {file_path}"]
    
    # Перевірка, що це файл, а не директорія
    if not file_path.is_file():
        return False, [f"❌ Шлях не є файлом: {file_path}"]
    
    # Перевірка розширення
    if file_path.suffix.lower() != '.json':
        return False, [f"⚠️  Файл не є JSON: {file_path}"]
    
    # Перевірка розміру (не порожній)
    if file_path.stat().st_size == 0:
        return False, [f"❌ Файл порожній: {file_path}"]
    
    # Перевірка кодування
    try:
        with open(file_path, 'rb') as f:
            raw_content = f.read()
            # Спроба декодувати як UTF-8
            content = raw_content.decode('utf-8')
    except UnicodeDecodeError as e:
        return False, [f"❌ Помилка кодування (не UTF-8): {file_path}\n   {e}"]
    
    # Перевірка на BOM (Byte Order Mark)
    if content.startswith('\ufeff'):
        errors.append(f"⚠️  Файл містить BOM (Byte Order Mark): {file_path}")
    
    # Перевірка валідності JSON
    try:
        data = json.loads(content)
    except json.JSONDecodeError as e:
        return False, [f"❌ Невалідний JSON в {file_path}:\n   {e}"]
    
    # Перевірка, що це об'єкт (не масив, не рядок, не число)
    if not isinstance(data, dict):
        errors.append(f"⚠️  Корінь JSON не є об'єктом (dict) в {file_path}")
    
    # Перевірка наявності хоча б одного ключа
    if isinstance(data, dict) and len(data) == 0:
        errors.append(f"⚠️  JSON об'єкт порожній (немає ключів): {file_path}")
    
    return len(errors) == 0, errors


def validate_directory(directory: Path, pattern: str = "*.json") -> bool:
    """
    Валідує всі JSON файли в директорії.
    Повертає True, якщо всі файли валідні.
    """
    json_files = sorted(directory.glob(pattern))
    
    if not json_files:
        print(f"⚠️  Не знайдено JSON файлів в {directory}")
        return False
    
    all_valid = True
    total_errors = 0
    
    print(f"\n{'='*70}")
    print(f"🔍 Валідація JSON файлів в: {directory}")
    print(f"{'='*70}")
    print(f"Знайдено файлів: {len(json_files)}\n")
    
    for file_path in json_files:
        is_valid, errors = validate_json_file(file_path)
        
        if is_valid:
            print(f"✅ {file_path.name}")
        else:
            all_valid = False
            total_errors += len(errors)
            print(f"❌ {file_path.name}")
            for error in errors:
                print(f"   {error}")
    
    # Загальна статистика
    print(f"\n{'='*70}")
    print(f"📊 Результати валідації:")
    print(f"{'='*70}")
    print(f"Всього файлів: {len(json_files)}")
    print(f"Валідних: {len(json_files) - total_errors} ✅")
    print(f"З помилками: {total_errors} ❌")
    
    if all_valid:
        print(f"\n🎉 Всі JSON файли валідні!")
    else:
        print(f"\n⚠️  Знайдено {total_errors} помилок. Виправте їх перед комітом.")
    
    return all_valid


def main():
    """Головна функція."""
    if len(sys.argv) < 2:
        print("Використання: python validate_json.py <шлях> [шлях2...]")
        print("\nПриклади:")
        print("  python validate_json.py locales/uk/")
        print("  python validate_json.py locales/uk/main.json")
        print("  python validate_json.py locales/uk/ locales/en/")
        print("\nМожна вказати:")
        print("  - Окремий файл: validate_json.py locales/uk/main.json")
        print("  - Директорію: validate_json.py locales/uk/")
        print("  - Кілька шляхів: validate_json.py locales/uk/ locales/en/")
        sys.exit(1)
    
    all_valid = True
    
    for path_str in sys.argv[1:]:
        path = Path(path_str)
        
        if not path.exists():
            print(f"❌ Шлях не знайдено: {path}")
            all_valid = False
            continue
        
        if path.is_file():
            # Валідація одного файлу
            is_valid, errors = validate_json_file(path)
            
            if is_valid:
                print(f"✅ {path.name} - валідний")
            else:
                all_valid = False
                print(f"❌ {path.name}")
                for error in errors:
                    print(f"   {error}")
        
        elif path.is_dir():
            # Валідація всіх файлів в директорії
            valid = validate_directory(path)
            all_valid = all_valid and valid
        
        else:
            print(f"⚠️  Невідомий тип шляху: {path}")
            all_valid = False
    
    # Повертаємо код виходу
    sys.exit(0 if all_valid else 1)


if __name__ == "__main__":
    main()