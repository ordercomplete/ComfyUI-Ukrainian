#!/usr/bin/env python3
"""Підрахунок прогресу перекладу."""
import json
from pathlib import Path


def count_translations(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    stats = {"total": 0, "filled": 0, "empty": 0}
    
    def count(d):
        for k, v in d.items():
            if isinstance(v, dict):
                count(v)
            else:
                stats["total"] += 1
                if v:
                    stats["filled"] += 1
                else:
                    stats["empty"] += 1
    
    count(data)
    total = stats["total"]
    filled = stats["filled"]
    empty = stats["empty"]
    pct = (filled / total * 100) if total > 0 else 0
    print(f"{file_path.name}: {filled}/{total} перекладено ({pct:.1f}%), {empty} порожніх")


for f in ["main.json", "nodeDefs.json", "settings.json", "commands.json"]:
    p = Path("locales/uk") / f
    if p.exists():
        count_translations(p)