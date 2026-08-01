#!/usr/bin/env python3
"""
Скрипт для порівняння ключів між English та Ukrainian версіями файлів локалізації.
Допомагає виявити відсутні або зайві ключі.
"""

import json
import sys
from pathlib import Path
from typing import Dict, Set, Tuple


def load_json(file_path: Path) -> Dict:
    """Завантажує JSON файл."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"❌ Файл не знайдено: {file_path}")
        sys.exit(1)
    except json.JSONDecodeError as e:
        print(f"❌ Помилка парсингу JSON в {file_path}: {e}")
        sys.exit(1)


def extract_keys(data: Dict, parent_key: str = "") -> Set[str]:
    """
    Рекурсивно витягує всі ключі з JSON структури.
    Повертає набір повних шляхів до ключів.
    """
    keys = set()
    for key, value in data.items():
        full_key = f"{parent_key}.{key}" if parent_key else key
        keys.add(full_key)
        if isinstance(value, dict):
            keys.update(extract_keys(value, full_key))
    return keys


def compare_keys(en_file: Path, uk_file: Path) -> Tuple[Set[str], Set[str], Set[str]]:
    """
    Порівнює ключі між English та Ukrainian файлами.
    Повертає: (спільні ключі, відсутні в uk, відсутні в en)
    """
    en_data = load_json(en_file)
    uk_data = load_json(uk_file)
    
    en_keys = extract_keys(en_data)
    uk_keys = extract_keys(uk_data)
    
    common = en_keys & uk_keys
    missing_in_uk = en_keys - uk_keys
    extra_in_uk = uk_keys - en_keys
    
    return common, missing_in_uk, extra_in_uk


def print_comparison_report(
    filename: str,
    common: Set[str],
    missing: Set[str],
    extra: Set[str]
) -> None:
    """Виводить звіт порівняння."""
    print(f"\n{'='*70}")
    print(f"📊 Звіт порівняння: {filename}")
    print(f"{'='*70}")
    
    print(f"\n✅ Спільні ключі: {len(common)}")
    if len(common) > 0:
        print(f"   Всі {len(common)} ключі присутні в обох версіях")
    
    print(f"\n⚠️  Відсутні в українській версії: {len(missing)}")
    if missing:
        print("   Відсутні ключі:")
        for key in sorted(missing):
            print(f"   - {key}")
    else:
        print("   ✅ Всі ключі перекладені")
    
    print(f"\nℹ️  Додаткові в українській версії: {len(extra)}")
    if extra:
        print("   Додаткові ключі:")
        for key in sorted(extra):
            print(f"   - {key}")
    else:
        print("   ✅ Немає додаткових ключів")
    
    # Загальна статистика
    total_en = len(common) + len(missing)
    coverage = (len(common) / total_en * 100) if total_en > 0 else 0
    
    print(f"\n📈 Статистика:")
    print(f"   Всього ключів в English: {total_en}")
    print(f"   Перекладено: {len(common)} ({coverage:.1f}%)")
    print(f"   Покриття: {coverage:.1f}%")
    
    if missing:
        print(f"\n⚠️  Увага: {len(missing)} ключів потребують перекладу!")
    else:
        print(f"\n🎉 Всі ключі перекладені!")


def main():
    """Головна функція."""
    if len(sys.argv) < 3:
        print("Використання: python compare_keys.py <en_file> <uk_file>")
        print("\nПриклад:")
        print("  python compare_keys.py locales/en/main.json locales/uk/main.json")
        print("  python compare_keys.py locales/en/nodeDefs.json locales/uk/nodeDefs.json")
        sys.exit(1)
    
    en_file = Path(sys.argv[1])
    uk_file = Path(sys.argv[2])
    
    if not en_file.exists():
        print(f"❌ English файл не знайдено: {en_file}")
        sys.exit(1)
    
    if not uk_file.exists():
        print(f"❌ Ukrainian файл не знайдено: {uk_file}")
        print(f"💡 Створіть файл {uk_file} перед порівнянням")
        sys.exit(1)
    
    filename = uk_file.name
    common, missing, extra = compare_keys(en_file, uk_file)
    print_comparison_report(filename, common, missing, extra)
    
    # Повертаємо код виходу для автоматизації
    return 1 if missing else 0


if __name__ == "__main__":
    sys.exit(main())