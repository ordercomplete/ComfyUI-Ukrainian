# Повний план виконання — Виправлення перекладу ComfyUI-Ukrainian

**Дата створення:** 2026-08-03  
**Статус:** в-процесі  
**Пріоритет:** стабільність > швидкість  

---

## 📊 ПЕРЕЛІК ВСІХ ЗБЕРЕЖЕНИХ ФАЙлів ДАНИХ

| № | Файл | Призначення |
|---|------|-------------|
| 1 | `memories/session/session_2026-08-03.md` | Історія сесії (ця дата) |
| 2 | `memories/tasks/Translation_Full_Analysis_2026-08-03.md` | Повний аналіз всіх компонентів (цей файл) |
| 3 | `memories/tasks/Translation_Plan_Ukrainian.md` | План для Manager V4.2.1 (існуючий) |
| 4 | `PLAN_and_INSTRUCTION/UKRAINIAN_LOCALIZATION_PLAN.md` | Основний план локалізації (6 фаз) |
| 5 | `.github/agents/Comfy-lady.agent.md` | Інструкції агента |
| 6 | `.github/skills/session-history/SKILL.md` | Формат сесій |
| 7 | `.github/skills/context-management/SKILL.md` | Анти-цикл механізми |

---

## 🎯 ЕТАП 1: Виправлення TTS Audio Suite (КРИТИЧНО)

**Проблема:** locale-patch.js працює тільки для 4 settings, весь widget UI (~200+ рядків) hardcoded English. Переклад може не працювати через:
- Таймінг (5 сек таймаут може спрацьовувати раніше)
- API endpoint `/api/tts-audio-suite/main-locale?locale=uk` може повертати 404
- Мова 'uk-UA' замість 'uk'

### Крок 1.1: Виправити таймінг та перевірку мови
**Файл:** `custom_nodes/tts_audio_suite/tts-audio-suite-locale-patch.js`

**Зміни:**
```javascript
// Замінити:
if (lang === 'uk') return 'uk';
// На:
if (lang && (lang === 'uk' || lang.startsWith('uk'))) return 'uk';

// Збільшити таймаут з 5 до 10 секунд:
setTimeout(() => clearInterval(checkApp), 10000); // замість 5000

// Додати polling після ініціалізації (якщо loadTTSALocale не спрацював):
const retryCheck = setInterval(() => {
    if (app?.settings) {
        loadTTSALocale();
        clearInterval(retryCheck);
    }
}, 500);
setTimeout(() => clearInterval(retryCheck), 15000);
```

### Крок 1.2: Перевірити API endpoint
**Файл:** `custom_nodes/tts_audio_suite/__init__.py`

**Перевірка:**
- Чи реєструється `/api/tts-audio-suite/main-locale`?
- Чи повертає правильний MIME type (`application/json`)?
- Чи існує `locales/uk/main.json`?

### Крок 1.3: Створити повноцінну i18n систему для widget UI
**Новий файл:** `custom_nodes/tts_audio_suite/tts-audio-suite-i18n.js`

**Механізм:**
- Створити `locales/uk/widget.json` з усіма рядками widget UI (~200+ ключів)
- Функція `t(key)` яка читає locale та повертає переклад
- Замінити hardcoded рядки на `$t('key')` у:
  - `widget-ui-builder.js`
  - `widget-tabs.js`
  - `widget-preset-system.js`
  - `widget-parameter-section.js`
  - `widget-inline-edit-section.js`
  - `audio_analyzer_ui.js`
  - `string_multiline_tag_editor_srt.js`

**Пріоритет:** 🔥 Високий (найбільший обсяг неперекладеного UI)

---

## 🎯 ЕТАП 2: Виправлення rgthree-comfy (ВИСОКИЙ)

**Проблема:** XHR завантажує settings.json при старті, main.json існує але НЕ ЗАВАНТАЖУЄТЬСЯ. One-time loading — не перезавантажується при зміні мови.

### Крок 2.1: Використовувати існуючу t() function
**Файли:** `rgthree.js`, `menu_queue_node.js`, `base_node.js`, `reroute.js`, `context.js`, `bypasser.js`, `muter.js`, `fast_groups_bypasser.js`, `fast_groups_muter.js`, `random_unmuter.js`, `power_lora_loader.js`

**Зміни:** Кожен hardcoded рядок замінити на:
```javascript
t("menuItems.convertReroutes", "name") || "Convert Reroutes"
```

### Крок 2.2: Додати ключі у locales/uk/settings.json та main.json
**Файли:** 
- `custom_nodes/rgthree-comfy/locales/uk/settings.json` — додати name/tooltip для settings
- `custom_nodes/rgthree-comfy/locales/uk/main.json` — додати menuItems, nodeActions, dialogMessages

### Крок 2.3: Додати live language switching
**Файл:** `config.js`

**Зміни:**
```javascript
// Додати event listener для зміни мови:
if (app?.extensionManager?.setting) {
    app.extensionManager.setting.addChangeListener((key, value) => {
        if (key === 'Comfy.Locale') {
            loadRgthreeTranslations(); // перезавантажити переклади
        }
    });
}
```

**Пріоритет:** 🔥 Високий (~50+ неперекладених рядків)

---

## 🎯 ЕТАП 3: Виправлення EasyUse (СЕРЕДНІЙ)

**Проблема:** $t() перевіряє тільки `locale === 'zh-CN'`, Ukrainian fallback = English keys. Немає nodeDefs.json для української.

### Крок 3.1: Виправити $t() функцію
**Файл:** `custom_nodes/comfyui-easy-use/web_version/v1/js/common/i18n.js`

**Зміни:**
```javascript
// Замінити:
return locale === 'zh-CN' && cn ? cn : key

// На:
const isUkrainian = ['uk', 'uk-UA'].includes(locale)
if (isUkrainian && ukTranslations[key]) return ukTranslations[key]
return locale === 'zh-CN' && cn ? cn : key
```

### Крок 3.2: Створити locales/uk/nodeDefs.json
**Новий файл:** `custom_nodes/comfyui-easy-use/locales/uk/nodeDefs.json`

**Механізм:** Копіювати структуру з `locales/en/nodeDefs.json`, перекласти назви нод.

### Крок 3.3: Виправити таймінг locale reading
**Файл:** `i18n.js`

**Зміни:** Замінити `const locale = getLocale()` (captured once) на функцію, яка читає locale кожен раз при виклику `$t()`.

**Пріоритет:** 🟡 Середній (~30 неперекладених рядків)

---

## 🎯 ЕТАП 4: Додавання перекладу для LoRA Manager (НЕПЕРЕКЛАДЕНІ ЧАСТИНИ)

**Проблема:** Settings працюють, але ~50+ рядків в context menu, widget, tags hardcoded English.

### Крок 4.1: Створити словник для неперекладених частин
**Новий файл або розширення:** `custom_nodes/comfyui-lora-manager/web/comfyui/translations.js`

**Механізм:** Використовувати існуючу `getLoraManagerLocale()` + `LORA_MANAGER_SETTINGS_TRANSLATIONS`.

### Крок 4.2: Замінити hardcoded рядки
**Файли:**
- `loras_widget.js` — `"No LoRAs added"`, `"Toggle All"`, `"Strength"`
- `loras_widget_events.js` — context menu items (~12 рядків)
- `tags_widget.js` — `"No tags in this group"`, `"No trigger words detected"`
- `node_marker.js` — role labels (6 рядків)
- `preview_tooltip.js` — license icon labels (~12 рядків)
- `autocomplete.js` — category labels (7 рядків)

**Пріоритет:** 🟡 Середній

---

## 🎯 ЕТАП 5: Створення locale files для 17 компонентів (НИЗЬКИЙ/СЕРЕДНІЙ)

**Компоненти без перекладу:**
1. 10s-comfy-nodes
2. ComfyMath
3. ComfyUI-AIToolkit
4. ComfyUI-DistorchMemoryManager
5. ComfyUI-GGUF
6. comfyui-hiforce-plugin
7. comfyui-impact-subpack
8. comfyui-krea2-ostris-edit
9. ComfyUI-LTXVideo
10. comfyui-mxtoolkit
11. ComfyUI-Qwen3-ASR
12. ComfyUI-QwenASR
13. comfyui-scheduledguider-ext
14. comfyui-textonsegs
15. controlaltai-nodes
16. LTX-2-3-LipSync
17. ComfyUI-XTTS

### Крок 5.1: Створити базову структуру для кожного
**Нові файли для кожного компонента:**
```
custom_nodes/{component}/locales/uk/
├── main.json      # settingsCategories, nodeCategories
└── settings.json  # setting name/tooltip/options
```

### Крок 5.2: Використовувати existing pattern KJNodes
**Механізм:** External locale-patch system автоматично знайде і застосує ці файли (якщо працює).

### Крок 5.3: Пріоритизація
- **Високий:** Impact subpack, Video helpers (вже мають partial translations)
- **Середній:** GGUF, XTTS, QwenASR (популярні nodes)
- **Низький:** решта

**Пріоритет:** 🟢 Низький/Середній (залежить від популярності)

---

## 🎯 ЕТАП 6: Тестування та валідація

### Крок 6.1: Локальне тестування кожного виправлення
- Запустити ComfyUI
- Переключити мову на Українська
- Перевірити кожен компонент окремо
- Зафіксувати результати в `memories/session/`

### Крок 6.2: Автоматична валідація JSON
**Скрипт:** `scripts/validate_uk_translations.py`
- Перевірка існування всіх locale файлів
- Валідація JSON syntax
- Порівняння ключів з English baseline

### Крок 6.3: Фіксація результатів
**Файл:** Оновлення `memories/session/session_2026-08-03.md` та створення нового `action-log-2026-08-03.md`

---

## 🎯 ЕТАП 7: Виправлення VHS (Video Helper Suite) — КРИТИЧНО

**Проблема:** VHS має 2 дубльовані файли перекладу (`VHS.settings.js` + `VHS.locale.js`), жоден не працює.
- `VHS.settings.js`: `get settings()` getter — повертає settings array, але ComfyUI core ігнорує
- `VHS.locale.js`: `setSettingValue(id+'.name', ...)` — змінює значення, не UI
- Обидва визначають однакові функції → конфлікт

**Українські переклади вже є в `locales/uk/settings.json`:**
- ✅ 8 setting names — всі перекладені
- ❌ 4 tooltip — порожні (`""`)
- ❌ Опції combo — не перекладені

### Крок 7.1: Об'єднати файли в один з DOM override pattern
**Новий файл:** `custom_nodes/comfyui-videohelpersuite/web/js/VHS.settings.js` (оновити)
**Видалити:** `custom_nodes/comfyui-videohelpersuite/web/js/VHS.locale.js`

**Механізм (як LoRA Manager):**
```javascript
function overrideVHSSettings() {
    const settings = document.querySelectorAll('[data-setting-id^="VHS."]');
    settings.forEach(settingEl => {
        const settingId = settingEl.dataset.settingId;
        // DOM textContent replacement як у LoRA Manager
    });
}
setInterval(overrideVHSSettings, 500);
```

### Крок 7.2: Додати переклади опцій для combo-type settings
**Файл:** `locales/uk/settings.json` — додати `"options"` для кожного setting з combo типом:
- `"Never"` → "Ніколи"
- `"Always"` → "Завжди"
- `"Input Only"` → "Тільки вхід"
- `"realtime"` → "realtime" (без перекладу)
- `"good"` → "good" (без перекладу)

### Крок 7.3: Заповнити порожні tooltip
**Файл:** `locales/uk/settings.json` — додати українські tooltips для:
- `VHS.AdvancedPreviewsDefaultMute.tooltip`
- `VHS.LatentPreview.tooltip`
- `VHS.MetadataImage.tooltip`
- `VHS.KeepIntermediate.tooltip`

**Пріоритет:** 🔥 Високий (8 settings, вже є переклади — треба тільки виправити механізм)

---

## 📋 ПІДСУМКОВА ТАБЛИЦЯ ЕТАПІВ

| Етап | Компонент | Час оцінка | Пріоритет | Статус |
|------|-----------|------------|-----------|--------|
| 1 | TTS Audio Suite | 2-3 години | 🔥 Високий | ✅ DOM override готовий (очікує тестування) |
| 2 | rgthree-comfy | 1-2 години | 🔥 Високий | ⏳ Не розпочато |
| 3 | EasyUse | 1 година | 🟡 Середній | ⏳ Не розпочато |
| 4 | LoRA Manager (частини) | 1-2 години | 🟡 Середній | ⏳ Не розпочато |
| 5 | 17 компонентів (базові) | 3-5 годин | 🟢 Низький | ⏳ Не розпочато |
| 6 | Тестування | 2 години | 🔥 Високий | ⏳ Не розпочато |
| 7 | VHS (Video Helper Suite) | 1 година | 🔥 Високий | ✅ Виконано (DOM override + шлях + опції + заголовки) |

**Загальний час:** 11-14 годин роботи (розбивати на сесії)

---

## 💡 ІНСАЙТИ З АНАЛІЗУ

1. **Найнадійніший механізм:** Vue I18n (ComfyUI Core, 3D) — lazy-load locale bundles
2. **Найпростіший механізм:** External locale-patch (KJNodes) — JSON override settings об'єктів
3. **Найскладніший механізм:** DOM replacement (Manager V4.2.1) — MutationObserver + textContent replacement
4. **Критична проблема:** One-time loading (TTS, rgthree) — не перезавантажується при зміні мови
5. **Рішення:** Додати event listener для `Comfy.Locale` changes у кожному компоненті

### ✅ ПІДТВЕРДЖЕНІ МЕХАНІЗМИ (робочі):

1. **DOM Override + setInterval** (LoRA Manager) — ✅ Працює
   - `document.querySelectorAll('[data-setting-id^="loramanager."]')`
   - `setInterval(override, 500)`
   - `nameEl.textContent = translatedName`
   - `tooltipEl.setAttribute('title', translatedTooltip)`

2. **get settings() getter** (LoRA Manager) — ✅ Працює як доповнення
   - Повертає settings array з перекладами
   - Але НЕ достатньо для DOM rendering

### ❌ НЕПРАЦЮЮЧІ МЕХАНІЗМИ:

1. **`get settings()` getter alone** (TTS Audio Suite, VHS.settings.js) — ❌ Не працює
   - ComfyUI core ігнорує перевизначення settings array
   - Потрібен DOM override як доповнення

2. **`setSettingValue(id + '.name', ...)`** (VHS.locale.js) — ❌ Не працює
   - `app.ui.settings.setSettingValue()` призначений для зміни значень, не властивостей
   - `id+'.name'` не є валідним setting ID

3. **`app.extensionManager?.extensions.find()`** (TTS Audio Suite — стара версія) — ❌ Не працює
   - ComfyUI core не зберігає extensions у цій структурі для settings extension

---

## 📌 КЛЮЧОВІ ФАЙЛИ ДЛЯ РЕДАГУВАННЯ

### ТTS Audio Suite:
- `custom_nodes/tts_audio_suite/tts-audio-suite-locale-patch.js` (виправити таймінг + мова)
- `custom_nodes/tts_audio_suite/__init__.py` (перевірити API endpoint)
- `custom_nodes/tts_audio_suite/locales/uk/main.json` (додати widget translations)

### rgthree-comfy:
- `custom_nodes/rgthree-comfy/web/comfyui/config.js` (додати live switching)
- `custom_nodes/rgthree-comfy/locales/uk/settings.json` (додати ключі)
- `custom_nodes/rgthree-comfy/locales/uk/main.json` (додати menuItems, nodeActions)

### EasyUse:
- `custom_nodes/comfyui-easy-use/web_version/v1/js/common/i18n.js` (виправити $t())
- `custom_nodes/comfyui-easy-use/locales/uk/nodeDefs.json` (створити новий)

### LoRA Manager:
- `custom_nodes/comfyui-lora-manager/web/comfyui/loras_widget.js` (додати переклади)
- `custom_nodes/comfyui-lora-manager/web/comfyui/loras_widget_events.js` (додати переклади)

### VHS (Video Helper Suite):
- `custom_nodes/comfyui-videohelpersuite/web/js/VHS.settings.js` (об'єднати з VHS.locale.js, DOM override pattern)
- `custom_nodes/comfyui-videohelpersuite/web/js/VHS.locale.js` (видалити — дубль)
- `custom_nodes/comfyui-videohelpersuite/locales/uk/settings.json` (додати опції + заповнити tooltip)

---

**Останнє оновлення:** 2026-08-03 14:45  
**Версія плану:** 1.0  
**Автор:** Comfy-lady
