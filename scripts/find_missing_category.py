#!/usr/bin/env python3
import json

en = json.load(open('comfyui_frontend_package/static/locales/en/main.json', 'r', encoding='utf-8'))
uk = json.load(open('comfyui_frontend_package/static/locales/uk/main.json', 'r', encoding='utf-8'))

en_cats = set(en.get('nodeCategories', {}).keys())
uk_cats = set(uk.get('nodeCategories', {}).keys())

missing = en_cats - uk_cats
extra = uk_cats - en_cats

print(f"EN categories: {len(en_cats)}")
print(f"UK categories: {len(uk_cats)}")
print(f"Missing in UK: {missing if missing else 'None'}")
print(f"Extra in UK: {extra if extra else 'None'}")

if missing:
    for cat in missing:
        print(f"\nMissing category: '{cat}'")
        print(f"EN value: '{en['nodeCategories'].get(cat, 'N/A')}'")