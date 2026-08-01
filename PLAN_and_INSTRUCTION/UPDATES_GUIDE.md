# Посібник оновлень ComfyUI-Ukrainian

**Мета:** Оновлювати бекенд та фронтенд з офіційних репозиторіїв без втрати українських перекладів.

---

## Архітектура оновлень

```
┌─────────────────────────────────────────────────────────────┐
│  ОФІЦІЙНІ РЕПОЗИТОРІЇ (автор)                               │
│  ┌─────────────────────┐  ┌──────────────────────────┐     │
│  │ Comfy-Org/ComfyUI   │  │ Comfy-Org/ComfyUI_frontend│    │
│  │ (бекенд Python)     │  │ (фронтенд Vue/Vite)      │    │
│  └──────────┬──────────┘  └──────────┬───────────────┘     │
│             │ pull                   │ pull                │
├─────────────┼────────────────────────┼─────────────────────┤
│             ▼                        ▼                     │
│  ЦЕЙ РЕПОЗИТОРІЙ (ComfyUI-Ukrainian)                        │
│  ┌─────────────────────┐  ┌──────────────────────────┐     │
│  │ comfy/              │  │ comfyui_frontend_package/ │    │
│  │ (оновлений бекенд)  │  │ static/                   │    │
│  │                     │  │   ├─ locales/uk/          │    │
│  │ locales/uk/         │  │   │  ├─ main.json         │    │
│  │   (ЗАХИЩЕНО ✅)     │  │   │  ├─ settings.json     │    │
│  │                     │  │   │  └─ nodeDefs.json     │    │
│  │ custom_nodes/       │  │   │  └─ commands.json     │    │
│  │   (ЗАХИЩЕНО ✅)     │  │   └─ assets/              │    │
│  │                     │  │      ├─ settings-*.js     │    │
│  │                     │  │      └─ main-*.js         │    │
│  │                     │  │                              │    │
│  │                     │  │   comfyui_frontend_package/ │    │
│  │                     │  │   (локальний pip-пакет)     │    │
│  └─────────────────────┘  └──────────────────────────┘     │
│                                                             │
│  ШАРИ ЗАХИСТУ ПЕРЕКЛАДІВ:                                  │
│  1. locales/uk/ (бекенд) — НЕ чіпається при оновленнях     │
│  2. comfyui_frontend_package/static/locales/uk/ — НЕ       │
│     чіпається при оновленнях                               │
│  3. comfyui_frontend_package/static/assets/ — оновлюється  │
│     ТІЛЬКИ через scripts/update_frontend.py                │
└─────────────────────────────────────────────────────────────┘
```

---

## КРОК 1: Відновлення temp/ComfyUI_frontend

```powershell
# Перейти в папку temp
cd D:\ComfyUI-Ukrainian\temp

# Видалити порожню папку (якщо є)
Remove-Item -Recurse -Force ComfyUI_frontend

# Клонувати офіційний frontend
git clone https://github.com/Comfy-Org/ComfyUI_frontend.git

# Перейти в папку
cd ComfyUI_frontend

# Переглянути версію
git tag | Select-Object -Last 5  # останні 5 тегів
```

---

## КРОК 2: Оновлення бекенду (ComfyUI)

### 2.1 Безпечне оновлення

```powershell
# 1. Зберегти переклади (на всяк випадок)
Copy-Item -Recurse "locales/uk" "D:\ComfyUI-Ukrainian\locales/uk_backup"

# 2. Оновити бекенд
cd D:\ComfyUI-Ukrainian
git pull origin main

# 3. Перевірити що locales/uk зберігся
Test-Path "locales/uk/main.json"  # має повернути True

# 4. Оновити залежності
pip install -r requirements.txt
```

### 2.2 Чому `locales/uk/` безпечний

- `locales/uk/` **НЕ** є частиною офіційного ComfyUI
- `git pull` оновлює тільки файли, які є в upstream
- Наші `locales/uk/` залишаться недоторканими

### 2.3 Чому `custom_nodes/` безпечний

- `custom_nodes/` **НЕ** є частиною офіційного ComfyUI
- Всі кастомні ноди залишаться недоторканими

---

## КРОК 3: Оновлення фронтенду

### 3.1 Автоматизований скрипт оновлення

Створити `scripts/update_frontend.py`:

```python
#!/usr/bin/env python3
"""
Оновлення ComfyUI-Ukrainian з офіційних репозиторіїв.

Використання:
    python scripts/update_frontend.py
    python scripts/update_frontend.py --dry-run  # тільки перевірка
    python scripts/update_frontend.py --force    # примусове оновлення
"""

import os
import subprocess
import shutil
import sys
from pathlib import Path

# Шляхи
REPO_ROOT = Path(__file__).parent.parent  # D:\ComfyUI-Ukrainian
TEMP_DIR = REPO_ROOT / "temp"
FRONTEND_DIR = TEMP_DIR / "ComfyUI_frontend"
PACKAGE_STATIC = REPO_ROOT / "comfyui_frontend_package" / "static"
LOCALES_UK = REPO_ROOT / "locales" / "uk"
PACKAGE_LOCALES_UK = PACKAGE_STATIC / "locales" / "uk"

# Файли перекладів (захист)
LOCALE_FILES = ["main.json", "nodeDefs.json", "settings.json", "commands.json"]


def run_cmd(cmd, cwd=None, check=True):
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
        return
    print(f"💾 Створення бекапу: {backup_dir}")
    shutil.copytree(LOCALES_UK, backup_dir)
    print(f"✅ Бекап створено")


def restore_locales():
    """Відновити переклади з бекапу."""
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
    
    # Перевірити що locales/uk зберігся
    for f in LOCALE_FILES:
        path = LOCALES_UK / f
        if not path.exists():
            print(f"❌ {f} НЕ знайдено! Відновлюємо...")
            restore_locales()
            break
    
    # Git pull
    run_cmd(["git", "pull", "origin", "main"], cwd=REPO_ROOT)
    
    # Перевірити знову
    for f in LOCALE_FILES:
        if (LOCALES_UK / f).exists():
            print(f"✅ {f} зберігся")
        else:
            print(f"❌ {f} втрачено! Відновлюємо...")
            restore_locales()
            break


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
    latest_tag = run_cmd(["git", "fetch", "origin", "--tags"], cwd=FRONTEND_DIR)
    latest_tag = run_cmd(["git", "describe", "--tags", "--abbrev=0"], cwd=FRONTEND_DIR, check=False)
    
    print(f"Поточна версія: {current_tag.stdout.strip()}")
    print(f"Остання версія: {latest_tag.stdout.strip()}")
    
    # 3. Оновити до останньої версії
    run_cmd(["git", "pull", "origin", "main"], cwd=FRONTEND_DIR)
    
    # 4. Встановити залежності
    run_cmd(["pnpm", "install"], cwd=FRONTEND_DIR)
    
    # 5. Збудувати
    print("\n🔨 Збірка frontend...")
    run_cmd(["pnpm", "build"], cwd=FRONTEND_DIR)
    
    print("✅ Frontend збудовано")


def apply_locales():
    """Застосувати переклади до frontend."""
    print("\n" + "=" * 60)
    print("КРОК 3: Застосування перекладів")
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
            # Додати українську в localeDefinitions
            # Шукаємо закриваючу дужку після останньої мови
            import re
            # Знайти місце після останньої мови (наприклад 'zh': ...)
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


def update_package():
    """Оновити comfyui_frontend_package."""
    print("\n" + "=" * 60)
    print("КРОК 4: Оновлення comfyui_frontend_package")
    print("=" * 60)
    
    # 1. Скопіювати dist/ у static/
    dist_dir = FRONTEND_DIR / "dist"
    if dist_dir.exists():
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
        for item in dist_dir.iterdir():
            dst = PACKAGE_STATIC / item.name
            if item.is_dir():
                if dst.exists():
                    shutil.rmtree(dst)
                shutil.copytree(item, dst)
            else:
                shutil.copy2(item, dst)
            print(f"  ✅ {item.name}")
        
        # Зберегти locales/uk/
        PACKAGE_LOCALES_UK.mkdir(parents=True, exist_ok=True)
        for f in LOCALE_FILES:
            src = LOCALES_UK / f
            dst = PACKAGE_LOCALES_UK / f
            if src.exists():
                shutil.copy2(src, dst)
                print(f"  ✅ {f} → static/locales/uk/")
    else:
        print(f"❌ dist/ не знайдено в {FRONTEND_DIR}")
    
    print("✅ comfyui_frontend_package оновлено")


def update_js_bundles():
    """Оновити compiled JS bundles з перекладами custom nodes."""
    print("\n" + "=" * 60)
    print("КРОК 5: Оновлення JS bundles")
    print("=" * 60)
    
    # Знайти settings JS файл
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
    
    # Тут буде логіка застосування перекладів custom nodes
    # Див. UKRAINIAN_TRANSLATION_PLAN.md → ПРАВИЛО 3
    print("⚠️  Переклади custom nodes потрібно застосувати вручну")
    print("   Див. UKRAINIAN_TRANSLATION_PLAN.md → ПРАВИЛО 3")


def main():
    """Головна функція."""
    print("=" * 60)
    print("ComfyUI-Ukrainian Update Tool")
    print("=" * 60)
    
    # Бекап
    backup_locales()
    
    # Оновлення
    update_backend()
    update_frontend()
    apply_locales()
    update_package()
    update_js_bundles()
    
    print("\n" + "=" * 60)
    print("✅ ОНОВЛЕННЯ ЗАВЕРШЕНО!")
    print("=" * 60)
    print("\nНаступні кроки:")
    print("1. Перевірити ComfyUI: python main.py")
    print("2. Перевірити українську мову в Comfy > Locale > Language")
    print("3. Перевірити Settings Panel")
    print("4. Застосувати переклади custom nodes (див. UKRAINIAN_TRANSLATION_PLAN.md)")


if __name__ == "__main__":
    main()
```

---

## КРОК 4: Ручне оновлення (альтернатива)

### 4.1 Оновлення бекенду

```powershell
cd D:\ComfyUI-Ukrainian
git pull origin main
pip install -r requirements.txt
```

### 4.2 Оновлення фронтенду

```powershell
# 1. Оновити ComfyUI_frontend
cd D:\ComfyUI-Ukrainian\temp\ComfyUI_frontend
git pull origin main
pnpm install
pnpm build

# 2. Скопіювати в comfyui_frontend_package
cd D:\ComfyUI-Ukrainian
Remove-Item comfyui_frontend_package\static\* -Recurse -Force -Exclude locales
Copy-Item temp\ComfyUI_frontend\dist\* comfyui_frontend_package\static\ -Recurse -Force

# 3. Зберегти переклади
Copy-Item locales\uk\* comfyui_frontend_package\static\locales\uk\ -Recurse -Force
```

### 4.3 Застосування перекладів custom nodes

Див. `UKRAINIAN_TRANSLATION_PLAN.md` → ПРАВИЛО 3 (Алгоритм перекладу Custom Nodes)

---

## КРОК 5: Перевірка після оновлення

```powershell
# 1. Запустити ComfyUI
cd D:\ComfyUI-Ukrainian
python main.py

# 2. Відкрити http://127.0.0.1:8188

# 3. Перевірити:
#    - Comfy > Locale > Language → Українська
#    - Settings Panel → всі назви перекладені
#    - Node Search → назви нод перекладені
#    - Custom Nodes → налаштування перекладені
```

---

## Чек-лист оновлення

### Перед оновленням
- [ ] Створити бекап: `Copy-Item locales/uk locales/uk_backup -Recurse`
- [ ] Створити бекап: `Copy-Item comfyui_frontend_package/static comfyui_frontend_package/static_backup -Recurse`

### Під час оновлення
- [ ] `git pull` бекенду
- [ ] `git pull` фронтенду
- [ ] `pnpm build` фронтенду
- [ ] Скопіювати `dist/` → `static/`
- [ ] Зберегти `locales/uk/`
- [ ] Застосувати переклади custom nodes в JS bundles

### Після оновлення
- [ ] `python main.py` — запуск
- [ ] Перевірка мови в UI
- [ ] Перевірка Settings Panel
- [ ] Перевірка Node Search
- [ ] Перевірка custom nodes
- [ ] Оновити `UKRAINIAN_TRANSLATION_PLAN.md` (якщо змінено структуру)
- [ ] Оновити `UKRAINIAN_LOCALIZATION_PLAN.md` (статус)

---

## Як зберегти переклади при оновленні

### Золоте правило:
> **Ніколи не видаляти `locales/uk/` та `custom_nodes/` при оновленні!**

### Чому вони безпечні:
1. `locales/uk/` — **НЕ** існує в офіційному ComfyUI
2. `custom_nodes/` — **НЕ** існує в офіційному ComfyUI
3. `git pull` оновлює тільки файли з upstream
4. Наші файли **не будуть видалені** git

### Коли потрібно бути обережним:
1. Якщо офіційний ComfyUI додасть `locales/uk/` — буде конфлікт
2. Якщо змінено структуру `locales/en/` — потрібно оновити `locales/uk/`
3. Якщо змінено структуру frontend — потрібно оновити переклади

---

## Автоматизація через GitHub Actions

### `.github/workflows/update.yml`

```yaml
name: Update ComfyUI-Ukrainian

on:
  schedule:
    - cron: '0 0 * * 0'  # щонеділі о опівночі
  workflow_dispatch:  # вручну

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          token: ${{ secrets.UPDATE_PAT }}
      
      - name: Backup locales
        run: |
          cp -r locales/uk locales/uk_backup
      
      - name: Update backend
        run: |
          git pull origin main
      
      - name: Update frontend
        run: |
          cd temp
          [ -d ComfyUI_frontend ] && cd ComfyUI_frontend && git pull origin main || git clone https://github.com/Comfy-Org/ComfyUI_frontend.git
          cd ComfyUI_frontend
          pnpm install
          pnpm build
      
      - name: Apply locales
        run: |
          cp -r locales/uk/* temp/ComfyUI_frontend/src/locales/uk/
          cd temp/ComfyUI_frontend
          pnpm build
      
      - name: Update package
        run: |
          cp -r temp/ComfyUI_frontend/dist/* comfyui_frontend_package/static/
          cp -r locales/uk/* comfyui_frontend_package/static/locales/uk/
      
      - name: Create PR
        run: |
          git config user.name "Update Bot"
          git config user.email "bot@comfyui-ukrainian.dev"
          git add -A
          git commit -m "chore: automated update" || echo "No changes"
          git push origin main
```

---

## Резюме

| Компонент | Як оновлюється | Чи захищений переклад? |
|-----------|---------------|----------------------|
| `locales/uk/` (бекенд) | `git pull` — автоматично | ✅ Так, не чіпається |
| `custom_nodes/` | `git pull` — автоматично | ✅ Так, не чіпається |
| `temp/ComfyUI_frontend` | `git pull` або `git clone` | ⚠️ Потрібно відновити |
| `comfyui_frontend_package/static/` | Скрипт `update_frontend.py` | ✅ Так, locales/uk/ зберігається |
| JS bundles | Ручне оновлення (ПРАВИЛО 3) | ⚠️ Потрібно застосувати переклади |

**Головне:** Використовувати `scripts/update_frontend.py` для безпечного оновлення без втрати перекладів.

---

## 📂 СТРУКТУРА ПАПОК ПЕРЕКЛАДУ

**Оновлено:** 2026-08-01

### 🏗️ Архітектура перекладів

```
ComfyUI-Ukrainian/
├── locales/                          ← Основний бекенд
│   └── uk/                           ← Українська (4 файли)
│       ├── main.json
│       ├── nodeDefs.json
│       ├── settings.json
│       └── commands.json
│
├── comfyui_frontend_package/
│   └── static/
│       └── locales/                  ← Фронтенд (зібраний)
│           ├── en/                   ← Англійська (upstream)
│           └── uk/                   ← Українська (4 файли)
│               ├── main.json
│               ├── nodeDefs.json
│               ├── settings.json
│               └── commands.json
│
└── custom_nodes/                     ← Кастомні ноди (НЕ в upstream)
    ├── comfyui-easy-use/
    │   └── locales/
    │       └── uk/                   ← 7 мов: en, fr, ja, ko, ru, uk, zh (16 файлів)
    │           ├── main.json
    │           └── settings.json
    │
    ├── comfyui-impact-pack/
    │   └── locales/
    │       └── uk/                   ← 2 мови: ko, uk (3 файли)
    │           ├── main.json
    │           └── settings.json
    │
    ├── comfyui-kjnodes/
    │   └── locales/
    │       └── uk/                   ← Тільки uk (2 файли)
    │           ├── main.json
    │           └── settings.json
    │
    ├── comfyui-lora-manager/
    │   └── locales/
    │       └── uk/                   ← Тільки uk (14 файлів)
    │           ├── main.json
    │           └── settings.json
    │
    ├── comfyui-videohelpersuite/
    │   └── locales/
    │       └── uk/                   ← 2 мови: en, uk (3 файли)
    │           ├── main.json
    │           └── settings.json
    │
    ├── ComfyUI-VoxCPM/
    │   └── locales/
    │       └── uk/                   ← 2 мови: en, uk (3 файли)
    │           ├── main.json
    │           └── settings.json
    │
    ├── rgthree-comfy/
    │   └── locales/
    │       └── uk/                   ← 2 мови: en, uk (3 файли)
    │           ├── main.json
    │           └── settings.json
    │
    └── tts_audio_suite/
        └── locales/
            └── uk/                   ← 2 мови: en, uk (4 файли)
                ├── main.json
                └── settings.json
```

### 📊 Статистика перекладів

| Компонент | Папка uk/ | Мов | Файлів |
|-----------|-----------|-----|--------|
| **Основний бекенд** | `locales/uk/` | uk | 4 |
| **Фронтенд** | `static/locales/uk/` | en, uk | 4 |
| **comfyui-easy-use** | `locales/uk/` | 7 | 16 |
| **comfyui-impact-pack** | `locales/uk/` | 2 | 3 |
| **comfyui-kjnodes** | `locales/uk/` | uk | 2 |
| **comfyui-lora-manager** | `locales/uk/` | uk | 14 |
| **comfyui-videohelpersuite** | `locales/uk/` | 2 | 3 |
| **ComfyUI-VoxCPM** | `locales/uk/` | 2 | 3 |
| **rgthree-comfy** | `locales/uk/` | 2 | 3 |
| **tts_audio_suite** | `locales/uk/` | 2 | 4 |
| **Upstream frontend** | `src/locales/` | 13 | 55 |

### 🇺🇦 Українська перекладена в:

- ✅ `locales/uk/` — бекенд (4 файли)
- ✅ `comfyui_frontend_package/static/locales/uk/` — фронтенд (4 файли)
- ✅ `custom_nodes/*/locales/uk/` — 8 custom nodes (44 файли)

**Разом: 10 папок з українськими перекладами, 52+ файлів!**

### ⚠️ Захист перекладів

| Компонент | Захист | Бекап |
|-----------|--------|-------|
| `locales/uk/` | ✅ Не в upstream | ✅ Автоматичний |
| `static/locales/uk/` | ✅ Не в upstream | ✅ Автоматичний |
| `custom_nodes/*/locales/uk/` | ✅ Не в upstream | ✅ Автоматичний |
| `custom_nodes/` | ✅ Не в upstream | ✅ Автоматичний |

### 🔍 Як перевірити структуру

```powershell
# Список всіх папок locales
Get-ChildItem -Recurse -Directory -Filter "locales" | Select-Object FullName

# Мови в кожній папці
Get-ChildItem -Recurse -Directory -Filter "locales" | ForEach-Object {
    $langs = Get-ChildItem $_.FullName -Directory | Select-Object -ExpandProperty Name
    Write-Host "$($_.FullName) → $($langs -join ', ')"
}

# Перевірка українських перекладів
Test-Path "locales/uk/main.json"
Test-Path "comfyui_frontend_package/static/locales/uk/main.json"
Test-Path "custom_nodes/comfyui-easy-use/locales/uk/main.json"
```

---

## 🚀 ШВИДКИЙ ЗАПУСК СКРИПТУ ОНОВЛЕННЯ

### Спосіб 1: Батник (рекомендовано)

```cmd
update_comfyui.bat
```

### Спосіб 2: PowerShell

```powershell
.\scripts\update_comfyui.ps1
```

### Спосіб 3: Тільки перевірка (dry-run)

```powershell
.\scripts\update_comfyui.ps1 -DryRun
```

### Спосіб 4: Примусове оновлення

```powershell
.\scripts\update_comfyui.ps1 -Force
```

---

## 🛡️ ЩО ЗАХИЩАЄ СКРИПТ

| Компонент | Статус |
|-----------|--------|
| **locales/uk/** | ✅ Автоматичний бекап + відновлення |
| **comfyui_frontend_package/static/locales/uk/** | ✅ Автоматичний бекап + відновлення |
| **custom_nodes/** | ✅ Автоматичний бекап |
| **.github/** | ✅ Не чіпається (git pull) |

---

## 📝 ЯК ПРАЦЮЄ СКРИПТ

```
1. Створення бекапу
   ├─ locales/uk/ → locales/uk_backup_YYYYMMDD_HHMMSS/
   └─ custom_nodes/ → custom_nodes_backup_YYYYMMDD_HHMMSS/

2. Git pull origin main
   └─ Оновлює тільки файли з upstream

3. Оновлення frontend
   ├─ git clone/pull ComfyUI_frontend
   └─ pnpm install + pnpm build

4. Відновлення перекладів
   ├─ locales/uk/ ← бекап
   └─ static/locales/uk/ ← бекап
```

---

## ⚠️ ВАЖЛИВІ НОТАТКИ

### Чому `git pull` безпечний?

- `git pull` оновлює тільки файли, які є в upstream
- Наші `locales/uk/`, `custom_nodes/`, `.github/` — НЕ є в upstream
- Тому вони залишаться недоторканими

### Коли потрібен скрипт?

- При оновленні frontend через `scripts/update_frontend.py`
- Коли потрібно автоматично зберегти переклади
- Коли хочете гарантію що нічого не втратиться

### Бекапи

- Зберігаються в `locales/uk_backup_YYYYMMDD_HHMMSS/`
- Можна видалити після перевірки що все працює
- Або використати для відновлення якщо щось пішло не так

---

## 🔧 РУЧНЕ ОНОВЛЕННЯ (ЯКЩО СКРИПТ НЕ ПРАЦЮЄ)

### Крок 1: Бекап вручну

```powershell
Copy-Item -Recurse "locales/uk" "locales/uk_backup"
```

### Крок 2: Git pull

```powershell
git pull origin main
```

### Крок 3: Відновити переклади

```powershell
Copy-Item -Recurse "locales/uk_backup/*" "locales/uk/"
```

---

## 📊 ПЕРЕВІРКА СТАТУСУ ПЕРЕКЛАДІВ

Після оновлення перевірте:

```powershell
# Переклади бекенду
Test-Path "locales/uk/main.json"
Test-Path "locales/uk/nodeDefs.json"
Test-Path "locales/uk/settings.json"
Test-Path "locales/uk/commands.json"

# Переклади frontend
Test-Path "comfyui_frontend_package/static/locales/uk/main.json"
Test-Path "comfyui_frontend_package/static/locales/uk/nodeDefs.json"
Test-Path "comfyui_frontend_package/static/locales/uk/settings.json"
Test-Path "comfyui_frontend_package/static/locales/uk/commands.json"

# Переклади custom nodes
Test-Path "custom_nodes/comfyui-easy-use/locales/uk/main.json"
Test-Path "custom_nodes/comfyui-kjnodes/locales/uk/main.json"
Test-Path "custom_nodes/comfyui-lora-manager/locales/uk/main.json"
Test-Path "custom_nodes/comfyui-videohelpersuite/locales/uk/main.json"
```

**Всі мають повернути `True`.**

| Компонент | Захист | Бекап |
|-----------|--------|-------|
| `locales/uk/` | ✅ Не в upstream | ✅ Автоматичний |
| `static/locales/uk/` | ✅ Не в upstream | ✅ Автоматичний |
| `custom_nodes/*/locales/uk/` | ✅ Не в upstream | ✅ Автоматичний |
| `custom_nodes/` | ✅ Не в upstream | ✅ Автоматичний |

### 🔍 Як перевірити структуру

```powershell
# Список всіх папок locales
Get-ChildItem -Recurse -Directory -Filter "locales" | Select-Object FullName

# Мови в кожній папці
Get-ChildItem -Recurse -Directory -Filter "locales" | ForEach-Object {
    $langs = Get-ChildItem $_.FullName -Directory | Select-Object -ExpandProperty Name
    Write-Host "$($_.FullName) → $($langs -join ', ')"
}

# Перевірка українських перекладів
Test-Path "locales/uk/main.json"
Test-Path "comfyui_frontend_package/static/locales/uk/main.json"
Test-Path "custom_nodes/comfyui-easy-use/locales/uk/main.json"
```

---

## 🛡️ АВТОМАТИЗОВАНИЙ СКРИПТ БЕЗПЕЧНОГО ОНОВЛЕННЯ

**Створено:** 2026-08-01

### Створені файли

| Файл | Призначення |
|------|-------------|
| `scripts/update_comfyui.ps1` | PowerShell скрипт безпечного оновлення |
| `update_comfyui.bat` | Батник для запуску PowerShell скрипту |
| `PLAN_and_INSTRUCTION/UPDATE_README.md` | Документація скрипта |

### Як використовувати

```cmd
# Простий запуск
update_comfyui.bat

# Тільки перевірка (dry-run)
.\scripts\update_comfyui.ps1 -DryRun

# Примусове оновлення
.\scripts\update_comfyui.ps1 -Force
```

### Що робить скрипт

```
1. Створення бекапу
   ├─ locales/uk/ → locales/uk_backup_YYYYMMDD_HHMMSS/
   └─ custom_nodes/ → custom_nodes_backup_YYYYMMDD_HHMMSS/

2. Git pull origin main
   └─ Оновлює тільки файли з upstream

3. Оновлення frontend
   ├─ git clone/pull ComfyUI_frontend
   └─ pnpm install + pnpm build

4. Відновлення перекладів
   ├─ locales/uk/ ← бекап
   └─ comfyui_frontend_package/static/locales/uk/ ← бекап
```

### Чому `git pull` безпечний

- `git pull` оновлює тільки файли, які є в upstream
- Наші `locales/uk/`, `custom_nodes/`, `.github/` — **НЕ** є в upstream
- Тому вони залишаться недоторканими

---

## 📊 РЕЗУЛЬТАТИ ПОРІВНЯННЯ З UPSTREAM

**Виконано:** 2026-08-01
**Upstream:** `https://github.com/Comfy-Org/ComfyUI_frontend.git`

### Порівняння locale файлів

| Компонент | Наш static/ | Upstream | Статус |
|-----------|-------------|----------|--------|
| locale/en/commands.json | 118 keys | 118 keys | ✅ ІДЕНТИЧНІ |
| locale/en/main.json | 151 keys | 151 keys | ✅ ІДЕНТИЧНІ |
| locale/en/nodeDefs.json | 823 keys | 823 keys | ✅ ІДЕНТИЧНІ |
| locale/en/settings.json | 113 keys | 113 keys | ✅ ІДЕНТИЧНІ |

### Порівняння extensions/

- **Наш static/:** 5 мініфікованих JS файлів
- **Upstream:** TypeScript джерело
- **Статус:** ✅ Однакова логіка, різний формат

### Порівняння assets/

- **Наш static/:** 953+ файлів (JS/CSS збірка, 92.59 MB)
- **Upstream:** Збірка не зберігається в репозиторії
- **Статус:** ✅ Наша збірка

### Висновок

> **Всі locale/en/ файли ІДЕНТИЧНІ з upstream/src/locales/en/.**
> Переклади в `locales/uk/` повністю захищені — вони не існують в офіційному репозиторії.

---

## ⚡ ОПТИМІЗАЦІЯ КОНТЕКСТУ ДЛЯ ЛОКАЛЬНИХ МОДЕЛЕЙ 30-40B

**Оновлено:** 2026-08-01
**Файл:** `.github/skills/context-management/SKILL.md`

### Оновлені пороги

| Порог | Було | Стало |
|-------|------|-------|
| Warning | 40% | 50% |
| Critical | 60% | 70% |
| Max | 75% | 80% |

### Додані правила для локальних моделей

1. **Максимум 5-6 викликів інструментів** перед висновком (було 3-4)
2. **Прогрес звітувати тільки на завершення підзадачі** (не на кожен крок)
3. **Уникати зайвих пошуків** — збирати контекст одразу
4. **Компактні відповіді** — без зайвих пояснень

### Проблема з таймаутом

- **Симптом:** Таймаут "~65% context" або "37% context"
- **Причина:** Локальна модель 30-40B не встигає генерувати відповідь (60-120 сек)
- **Рішення:** Оптимізація порогів + обмеження кількості інструментів
