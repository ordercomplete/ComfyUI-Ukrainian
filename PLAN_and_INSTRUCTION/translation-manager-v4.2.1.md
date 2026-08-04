# План перекладу ComfyUI Manager V4.2.1 — Фінальний

**Дата створення:** 2026-08-01
**Статус:** в-процесі
**Мета:** Повний український переклад інтерфейсу Manager V4.2.1

---

## ⚠️ КРИТИЧНО: Поточна проблема

Система перекладу `comfyui-manager-locale` існує, але **не працює**:
- `uk.js:1 Failed to load resource: the server responded with a status of 404`
- Жодного логу `[Manager Locale UA]` не було — скрипт взагалі не завантажився

### Причина
`prestartup_script.py` виконується, але API `/comfyui-manager-locale/uk.js` не реєструється коректно.
FastAPI route може не спрацювати якщо `PromptServer.instance.routes.get` викликається занадто рано.

---

## Архітектура пакету `comfyui-manager-locale`

```
custom_nodes/comfyui-manager-locale/
├── __init__.py                    # Прихована нода + WEB_DIRECTORY
├── prestartup_script.py           # Реєстрація extension + патч HTML + API
└── web/
    ├── manager-locale-loader.js   # Завантажувач (чекає app, грузить uk.js)
    └── manager-locale-uk.js       # Словник перекладів + MutationObserver
```

### Як має працювати
1. `prestartup_script.py` виконується при запуску ComfyUI
2. Патчить `index.html` — додає `<script src="/comfyui-manager-locale/uk.js"></script>`
3. `manager-locale-loader.js` чекає поки з'явиться `window.comfyApp || window.app`
4. Завантажує `manager-locale-uk.js` через API `/comfyui-manager-locale/uk.js`
5. `manager-locale-uk.js` використовує MutationObserver для перекладу DOM

---

## План дій (пріоритетний)

### ✅ Фаза 0: Виправити механізм підключення (НАЙВАЖЛИВІШЕ)
**Статус:** не-розпочато

#### Варіант A: Фікс API реєстрації
- Перевірити чи `PromptServer.instance.routes.get` викликається після ініціалізації server
- Можливо потрібно перенести реєстрацію API в `__init__.py` або використати `server.PromptServer`

#### Варіант B: Фікс WEB_DIRECTORY
- Перевірити чи `nodes.EXTENSION_WEB_DIRS["comfyui-manager-locale"]` працює
- Можливо потрібно використовувати `app.registerExtension()` замість `nodes.EXTENSION_WEB_DIRS`

#### Варіант C: Прямий скрипт в HTML (найпростіше)
- Замість API — ін'єктувати весь JS перекладу напряму в `<script>` тег
- Це уникне проблеми з 404

**Рекомендація:** Спробувати спочатку Варіант A (мінімальні зміни), якщо не працює — Варіант C.

---

### Фаза 1: Розширити словник перекладів
**Статус:** не-розпочато
**Поточно:** ~70 перекладів
**Потрібно:** ще ~240+ для повного покриття

#### Категорії (з файлів Manager):

1. **comfyui-manager.js** (~50 елементів) — ГОЛОВНЕ
   - Menu Column 1: DB, Channel, Share, Update налаштування
   - Menu Column 2: основні кнопки (Custom Nodes, Models, Restart тощо)
   - Menu Column 3: Community Manual, Workflow Gallery, Nodes Info
   - Notice Board, Footer

2. **custom-nodes-manager.js** (~40 елементів)
   - Footer buttons: Restart, Stop, Used In Workflow, Check Update, Check Missing, Install via Git URL
   - Filter dropdown, Version dialog, Placeholder "Search"
   - Status messages, Flyover info, INVALID tag, Channel label

3. **model-manager.js** (~30 елементів)
   - Buttons: Refresh, Stop
   - Filter dropdown: All, Installed, Not Installed, In Workflow
   - Type dropdown, Base dropdown, Placeholder "Search"

4. **snapshot.js** (~15 елементів)
   - Buttons: Close, Restore, Remove, Save snapshot
   - Table headers: ID, Datetime, Action
   - Apply messages

5. **components-manager.js** (~15 елементів)
   - Buttons: Close, Save
   - Placeholder для input, Node label

6. **comfyui-share-*.js** (~80 елементів) — найбільший об'єм
   - OpenArt Share: title, description, API key, Share, Close
   - YouML Share: name, description, API token, Share, Close
   - Copus Share: title, subtitle, content, API key, Share, Close
   - Matrix Share: Homeserver, Username, Password, Share key
   - eSheep, ComfyWorkflows, Copus
   - Placeholder для всіх input
   - Success/error messages

7. **common.js** (~10 елементів)
   - Confirm/Cancel buttons
   - Toast messages
   - Tooltip

---

## Методологія збору перекладів

### Крок 1: Відкрити Manager в браузері
- Натиснути F12 → Console
- Відкрити Manager (правий клік → ComfyUI Manager)
- Зібрати всі унікальні текстові рядки з DOM

### Крок 2: Використати DevTools скрипт
```javascript
// Витягнути всі текстові вузли з діалогу Manager
const dialog = document.getElementById('cm-manager-dialog');
if (dialog) {
    const texts = new Set();
    dialog.querySelectorAll('*').forEach(el => {
        if (el.textContent && el.textContent.trim().length > 1 && !el.getAttribute('data-translated')) {
            texts.add(el.textContent.trim());
        }
    });
    console.log(JSON.stringify([...texts], null, 2));
}
```

### Крок 3: Перевірити кожен файл Manager
- Відкрити `custom_nodes/comfyui-manager/js/*.js` в VS Code
- Знайти всі рядки тексту (англійські)
- Додати до словника перекладів

---

## Критерії завершення

- [ ] Механізм підключення працює (uk.js грузиться без 404)
- [ ] Всі ~310+ елементів перекладені
- [ ] Переклад перевірено в браузері (працює, відображається правильно)
- [ ] Git commit + push

---

## Примітки

- Brand names (OpenArt, YouML, Copus, Matrix) — НЕ перекладаються
- Plugin names (litellm) — НЕ перекладаються
- Версії (v1.82.7, v4.2.1) — НЕ перекладаються
- Share messages (Success, Error, Loading) — ПЕРЕКЛАДАТИ
