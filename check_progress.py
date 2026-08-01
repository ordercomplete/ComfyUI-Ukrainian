import json
import os

locales_dir = r'd:\ComfyUI-Ukrainian\locales\uk'

files_to_check = ['nodeDefs.json', 'main.json', 'settings.json', 'commands.json']

print("=" * 60)
print("ПРОГРЕС УКРАЇНСЬКОЇ ЛОКАЛІЗАЦІЇ COMFYUI")
print("=" * 60)

for filename in files_to_check:
    filepath = os.path.join(locales_dir, filename)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)
        print(f"\n{filename}:")
        print(f"  Статус: ✅ Існує")
        print(f"  Ключів: {len(data)}")
    else:
        print(f"\n{filename}:")
        print(f"  Статус: ❌ Не існує")

# Analyze nodeDefs.json for translation quality
print("\n" + "=" * 60)
print("АНАЛІЗ ЯКОСТІ ПЕРЕКЛАДУ (nodeDefs.json)")
print("=" * 60)

with open(os.path.join(locales_dir, 'nodeDefs.json'), 'r', encoding='utf-8') as f:
    uk_defs = json.load(f)

uk_letters = set('АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯабвгдеєжзиіїйклмнопрстувфхцчшщьюя')

fully_translated = 0
partially_translated = 0
english_only = 0
mixed_examples = []

for node_id, defn in uk_defs.items():
    display_name = defn.get('display_name', '')
    
    # Check if contains Ukrainian characters
    has_ukrainian = any(c in display_name for c in uk_letters)
    
    if not has_ukrainian:
        english_only += 1
        if len(mixed_examples) < 30:
            mixed_examples.append((node_id, display_name))
    else:
        fully_translated += 1

total = len(uk_defs)
print(f"\nВсього нод: {total}")
print(f"Повністю перекладено (укр): {fully_translated} ({fully_translated*100//total}%)")
print(f"Англійською (не перекладено): {english_only} ({english_only*100//total}%)")

if mixed_examples:
    print("\nПриклади неперекладених нод (перші 30):")
    for node_id, name in mixed_examples:
        print(f"  • {node_id}: \"{name}\"")

# Check main.json content types
print("\n" + "=" * 60)
print("СТРУКТУРА main.json")
print("=" * 60)

with open(os.path.join(locales_dir, 'main.json'), 'r', encoding='utf-8') as f:
    main_data = json.load(f)

categories = list(main_data.keys())
print(f"Категорій: {len(categories)}")
for cat in categories[:20]:
    count = len(main_data[cat]) if isinstance(main_data[cat], dict) else 0
    print(f"  • {cat}: {count} ключів")
