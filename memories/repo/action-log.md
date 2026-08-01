# Журнал дій — ComfyUI Manager Ukrainian Locale

## 2026-08-01

### ✅ Створено пакет comfyui-manager-locale
- Структура: `__init__.py`, `prestartup_script.py`, `web/`
- Словник: 70+ key-value пар (EN → UK)
- MutationObserver для перехоплення діалогу Manager

### ❌ JS не підключається
- `prestartup_script.py` виконується, але API не працює
- `WEB_DIRECTORY` не достатньо — потрібен `app.registerExtension()`
- Консоль DevTools: 404 на `/comfyui-manager-locale/uk.js`
- Жодного логу `[Manager Locale UA]` не було

### 💡 Інсайти
- ComfyUI Manager має `WEB_DIRECTORY = "js"` але `NODE_CLASS_MAPPINGS = {}` порожній
- Manager використовує `app.registerExtension()` для підключення JS
- `prestartup_script.py` виконується тільки при запуску сервера
- `index.html` патчується, але скрипт не завантажується

### ⚠️ Потрібне рішення
Знайти спосіб підключити JS перекладу до ComfyUI. 
Можливі варіанти:
1. Змінити `index.html` напряму (але це ламається при оновленні)
2. Використати `app.registerExtension()` в JS файлі
3. Знайти інший hook в ComfyUI
