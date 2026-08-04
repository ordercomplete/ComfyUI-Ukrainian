# Журнал дій

## 2026-08-01

### ✅ Переклад ComfyUI Manager V4.2.1
- Витягнуто всі текстові елементи з HTML сторінки
- Створено список перекладу з 60+ елементів
- Розбито на категорії: налаштування, кнопки, новини
- Створено файл `PLAN_and_INSTRUCTION/translation-manager-v4.2.1.md`
- Створено план дій

### 📊 Статистика
- Елементів для перекладу: ~65
- Категорій: 6 (DB, Channel, Share, Update, Experimental, Buttons)
- Новин безпеки: 1 критична
- Новин оновлень: 1

### ✅ Створено перехоплювач перекладу Manager V4.2.1
**Час:** 2026-08-01 12:30
**Рішення:** Створено окремий пакет `comfyui-manager-locale` без змін у основному коді Manager.
- `js/manager-locale-uk.js` — словник перекладів + MutationObserver
- `js/manager-locale-loader.js` — завантажувач підключення
- Підхід: спостереження за DOM + переклад після рендеру

### 📋 Виявлено структуру Manager V4.2.1
**Час:** 2026-08-01 12:35
- Manager НЕ має власної системи перекладів
- Текст жорстко закодований в JS файлах (`comfyui-manager.js`, `custom-nodes-manager.js`, `model-manager.js`)
- Переклади ComfyUI: `locales/uk/main.json`, `settings.json`, `commands.json`
- Manager рендерить текст напряму: `textContent: "Restart"`


### ✅ Фаза 0: Виправлено механізм підключення (ПРОСТОЕ РІШЕННЯ)
**Час:** 2026-08-01 ~13:00
**Проблема:** loader.js намагається fetchнути окремий файл, але static routing не працював.

**Рішення — об'єднати все в один файл:**
- `manager-locale-uk.js` — містить весь код (словник + MutationObserver)
- `prestartup_script.py` — патчить HTML: `<script src="/extensions/comfyui-manager-locale/manager-locale-uk.js">`
- Static routing через `EXTENSION_WEB_DIRS` → `/extensions/comfyui-manager-locale/` автоматично обслуговує файли з `web/`
- `loader.js` — простий, просто додає `<script>` тег

**Логіка:**
1. HTML патч додає `<script src="/extensions/comfyui-manager-locale/manager-locale-uk.js">`
2. Static routing через `EXTENSION_WEB_DIRS` працює напряму (без API)
3. `manager-locale-uk.js` виконується і запускає MutationObserver

### ❌ JS не підключається
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