#!/usr/bin/env python3
"""Аналіз порожніх секцій в main.json"""
import json
from pathlib import Path

data = json.load(open('locales/uk/main.json', 'r', encoding='utf-8'))

def find_empty(d, prefix=''):
    keys = []
    for k, v in d.items():
        path = f'{prefix}.{k}' if prefix else k
        if isinstance(v, dict):
            keys.extend(find_empty(v, path))
        elif not v:
            keys.append(path)
    return keys

empty = find_empty(data)
groups = {}
for k in empty:
    section = k.split('.')[0]
    groups.setdefault(section, []).append(k)

for section, keys in sorted(groups.items()):
    print(f'{section}: {len(keys)} ключів')
    # Показуємо перші 3 ключі для контексту
    for k in keys[:3]:
        print(f'  - {k}')
    if len(keys) > 3:
        print(f'  ... та ще {len(keys)-3}')
    print()

print(f'Всього порожніх ключів: {len(empty)}')