import json

with open(r'd:\ComfyUI-Ukrainian\locales\uk\nodeDefs.json', 'r', encoding='utf-8') as f:
    uk_defs = json.load(f)

# Words that are proper names / brands and should NOT be translated
proper_names = {
    'APG', 'Canny', 'FreeU', 'Mahiro', 'Rodin', 'MoGe', 'TCFG', 'Wan',
    'Gemini', 'Laplace', 'FreSca', 'Basic',  # Basic is part of product name
}

# Common English UI words that SHOULD be translated
english_words = {
    'Hook': 'Гак',
    'Scheduler': 'Планувальник',
    'Guider': 'Напрямний',
    'Norm': 'Норма',
    'Override': 'Перевизначення',
    'Zero': 'Нуль',
    'Star': 'Зірка',
    'Attention': 'Увага',
    'Multiply': 'Множення',
    'Combine': 'Об\'єднати',
    'Case': 'Реєстр',
    'Converter': 'Конвертер',
    'Context': 'Контекст',
    'Windows': 'Вікна',
    'Manual': 'Ручний',
    'Inference': 'Висновок',
    'Panorama': 'Панорама',
}

print("=" * 70)
print("НОДИ З НЕПЕРЕКЛАДЕНИМИ ОПИСОВИМИ СЛОВАМИ")
print("(власні назви пропущено)")
print("=" * 70)

needs_translation = []

for node_id, defn in uk_defs.items():
    display_name = defn.get('display_name', '')
    
    # Skip if no Ukrainian characters at all (pure English names)
    has_ukrainian = any(c in display_name for c in 'АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯабвгдеєжзиіїйклмнопрстувфхцчшщьюя')
    if not has_ukrainian:
        # Check if it's a proper name or needs translation
        words = display_name.split()
        all_proper = any(word in proper_names for word in words)
        
        if not all_proper:
            # Has English descriptive words - should be translated
            needs_translation.append((node_id, display_name))

if needs_translation:
    print(f"\nЗнайдено {len(needs_translation)} нод з неперекладеними описовими словами:\n")
    for node_id, name in needs_translation:
        print(f"  • {node_id}: \"{name}\"")
else:
    print("\n✅ Всі описові слова перекладено!")

# Show which proper names are correctly kept in English
print("\n" + "=" * 70)
print("НОДИ З ВЛАСНИМИ НАЗВАМИ (правильно залишено англійською)")
print("=" * 70)

proper_name_nodes = []
for node_id, defn in uk_defs.items():
    display_name = defn.get('display_name', '')
    
    has_ukrainian = any(c in display_name for c in 'АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯабвгдеєжзиіїйклмнопрстувфхцчшщьюя')
    if not has_ukrainian:
        proper_name_nodes.append((node_id, display_name))

print(f"\nВсього нод з власними назвами: {len(proper_name_nodes)}")
for node_id, name in proper_name_nodes[:15]:
    print(f"  • {node_id}: \"{name}\"")
