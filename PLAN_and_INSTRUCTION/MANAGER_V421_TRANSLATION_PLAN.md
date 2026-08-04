# План перекладу ComfyUI Manager V4.2.1

**Дата створення:** 2026-08-01 14:00
**Статус:** не-розпочато
**Гілка:** `feature/ukrainian-translation`

---

## ⚠️ КРИТИЧНО: Система перекладу НЕ БУЛА РЕАЛІЗОВАНА!

### Поточний стан
- `comfyui-manager-locale/` — існує, але це **прототип/чернетка**
- `manager-locale-uk.js` — словник є, але **ніколи не тестувався**
- `manager-locale-loader.js` — лоадер є, але **ніколи не працював**
- `prestartup_script.py` — патчить index.html, але **не перевірялося**

### Причина
**Система перекладу ніколи не була повноцінно реалізована!**

Це не "баг" — це "не реалізовано". Потрібно:
1. Визначити правильний механізм інтеграції
2. Реалізувати його з нуля
3. Тільки потім додавати переклади

---

## Аналіз поточного стану

### Що вже є
- `custom_nodes/comfyui-manager-locale/` — існує, частковий переклад
- `custom_nodes/comfyui-manager-locale/web/manager-locale-uk.js` — ~180 перекладів
- `custom_nodes/comfyui-manager-locale/prestartup_script.py` — ін'єкція скрипта
- `custom_nodes/comfyui-manager/js/manager-locale-uk.js` — дубль/старий файл

### Що потрібно зробити
- **Фаза 0: Виправити механізм перекладу** (НЕ працює!)
- **Фаза 1: Діагностика** — чому не працює
- **Фаза 2: Виправлення** — зробити працюючим
- **Фаза 3-9: Розширення перекладу** — ~240 рядків

---

## Архітектура Manager V4.2.1

### Основні JS файли
```
custom_nodes/comfyui-manager/js/
├── comfyui-manager.js          ← Головний діалог Manager (меню, кнопки)
├── custom-nodes-manager.js     ← Менеджер кастомних нод (grid, фільтри)
├── model-manager.js            ← Менеджер моделей (grid, фільтри)
├── snapshot.js                 ← Менеджер знімків (backup/restore)
├── components-manager.js       ← Component Builder (group nodes)
├── comfyui-share-common.js     ← Спільний код Share діалогів
├── comfyui-share-openart.js    ← Share через OpenArt
├── comfyui-share-youml.js      ← Share через YouML
├── comfyui-share-copus.js      ← Share через Copus
├── common.js                   ← Спільні функції (confirm, toast, popover)
├── comfyui-gui-builder.js      ← GUI builder (діалоги)
└── manager-locale-uk.js        ← Частковий переклад (потрібно розширити)
```

### Механізм перекладу
1. **MutationObserver** — спостерігає за появою `#cm-manager-dialog`
2. **textContent переклад** — перебирає всі текстові вузли
3. **title переклад** — перебирає tooltips
4. **option переклад** — перебирає опції в select
5. **periodic check** — перевірка кожні 1 сек (30 сек таймаут)

---

## План перекладу (по файлах)

### Фаза 1: Головний діалог Manager (`comfyui-manager.js`)
**Статус:** не-розпочато
**Очікувано:** ~50 рядків

- [ ] Заголовок діалогу
- [ ] Menu Column 1 (DB, Channel, Share, Update)
- [ ] Menu Column 2 (основні кнопки)
- [ ] Menu Column 3 (інформація)
- [ ] Notice Board
- [ ] Footer

### Фаза 2: Custom Nodes Manager (`custom-nodes-manager.js`)
**Статус:** не-розпочато
**Очікувано:** ~40 рядків

- [ ] Кнопки в footer (Restart, Stop, Used In Workflow, Check Update, Check Missing, Install via Git URL)
- [ ] Filter dropdown
- [ ] Version dialog (Select Version, Cancel, Select)
- [ ] Placeholder "Search"
- [ ] Статусні повідомлення
- [ ] Flyover (інформація про ноду)
- [ ] INVALID tag
- [ ] Channel label

### Фаза 3: Model Manager (`model-manager.js`)
**Статус:** не-розпочато
**Очікувано:** ~30 рядків

- [ ] Кнопки (Refresh, Stop)
- [ ] Filter dropdown (All, Installed, Not Installed, In Workflow)
- [ ] Type dropdown
- [ ] Base dropdown
- [ ] Placeholder "Search"

### Фаза 4: Snapshot Manager (`snapshot.js`)
**Статус:** не-розпочато
**Очікувано:** ~15 рядків

- [ ] Кнопки (Close, Restore, Remove, Save snapshot)
- [ ] Заголовки таблиці (ID, Datetime, Action)
- [ ] Повідомлення про застосування

### Фаза 5: Component Builder (`components-manager.js`)
**Статус:** не-розпочато
**Очікувано:** ~15 рядків

- [ ] Кнопки (Close, Save)
- [ ] Placeholder для input
- [ ] Node label

### Фаза 6: Share діалоги (`comfyui-share-*.js`)
**Статус:** не-розпочато
**Очікувано:** ~80 рядків

- [ ] OpenArt Share (title, description, API key, Share, Close)
- [ ] YouML Share (name, description, API token, Share, Close)
- [ ] Copus Share (title, subtitle, content, API key, Share, Close)
- [ ] Matrix Share (Homeserver, Username, Password, Share key)
- [ ] eSheep, ComfyWorkflows, Copus
- [ ] Placeholder для всіх input
- [ ] Повідомлення про успіх/помилку

### Фаза 7: Common (`common.js`)
**Статус:** не-розпочато
**Очікувано:** ~10 рядків

- [ ] Confirm/Cancel кнопки
- [ ] Toast повідомлення
- [ ] Tooltip

---

## Очікуваний підсумок

| Фаза | Файл | Рядків | Статус |
|------|------|--------|--------|
| 0 | Діагностика | — | не-розпочато |
| 1 | Виправлення механізму | — | не-розпочато |
| 2 | Тестування | — | не-розпочато |
| 3 | comfyui-manager.js | ~50 | не-розпочато |
| 4 | custom-nodes-manager.js | ~40 | не-розпочато |
| 5 | model-manager.js | ~30 | не-розпочато |
| 6 | snapshot.js | ~15 | не-розпочато |
| 7 | components-manager.js | ~15 | не-розпочато |
| 8 | comfyui-share-*.js | ~80 | не-розпочато |
| 9 | common.js | ~10 | не-розпочато |
| **Разом** | | **~240** | |

---

## Критерії завершення

- [ ] Код написаний і файли оновлені
- [ ] Переклад перевірено в браузері (працює, відображається правильно)
- [ ] Користувач підтвердив правильність відображення

---

## Примітки

- Вже існує ~180 перекладів у `manager-locale-uk.js`
- Потрібно додати ще ~60 перекладів для повного покриття
- Деякі рядки (brand names, plugin names) не перекладаються
- Share діалоги — найбільш об'ємна частина
