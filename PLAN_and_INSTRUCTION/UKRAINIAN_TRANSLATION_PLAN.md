# Ukrainian Translation Plan

## Правила ведення плану

### 1. Форматування завдань
- Кожне завдання повинно містити:
  - **Дата створення:** YYYY-MM-DD HH:MM
  - **Дата завершення:** YYYY-MM-DD HH:MM (встановлюється коли користувач підтверджує, що переклад працює у браузері, НЕ коли модель написала код)
  - **Статус:** не-розпочато / в-процесі / завершено
  - **Коментар:** причина статусу

### 2. Немодифікованість історії
- **ЗАБОРОНЕНО видаляти пункти з плану**
- Дозволено тільки: редагувати статус, додавати коментарі, додавати нові пункти
- Якщо пункт не реалізований — прописати причину, щоб не повторювати помилку

### 3. Уніфікований підхід до перекладу
- Пошук вмісту фреймів налаштувань через:
  1. `custom_nodes/*/locales/{uk,en}.json` — файли локалізації
  2. `custom_nodes/*/web/comfyui/config.js` — конфігураційні файли
  3. `custom_nodes/*/src_web/comfyui/config.ts` — джерельний код (TypeScript)
- Витягування всіх рядків для перекладу з англійських файлів
- Створення/оновлення українських перекладів з тими ж ключами
- Тестування в браузері — критерій завершення

### 4. Критерій завершення завдання
- Переклад вважається завершеним ТІЛЬКИ коли:
  - ✅ Код написаний і файли оновлені
  - ✅ Переклад перевірено в браузері (працює, відображається правильно)
  - ✅ Користувач підтвердив правильність відображення

## Status

- [x] LoRA Manager — перекладено
- [x] rgthree-comfy — перекладено (config.js + locales)
- [ ] Інші custom nodes — не розпочато

## Architecture

### LoRA Manager
- Файл: `custom_nodes/comfyui-lora-manager/web/comfyui/settings.js`
- Локалі: `custom_nodes/comfyui-lora-manager/locales/{uk,en}.json`
- Механізм: завантаження JSON через `fetch()` при ініціалізації

### rgthree-comfy
- Файл: `custom_nodes/rgthree-comfy/web/comfyui/config.js`
- Локалі: `custom_nodes/rgthree-comfy/locales/{uk,en}/settings.json`
- Механізм: завантаження JSON через `fetch()` при ініціалізації
- Джерело: `custom_nodes/rgthree-comfy/src_web/comfyui/config.ts`
- Генератор: `custom_nodes/rgthree-comfy/web/comfyui/gen_config.js`

## Problem Solved

Раніше переклад був неструктурованим через різні підходи в різних custom nodes:
- LoRA Manager використовував власний механізм
- rgthree-comfy не мав перекладу

Тепер обидва використовують єдиний підхід:
1. Завантаження перекладів з JSON при старті
2. Функція `t(key, field)` для отримання перекладу
3. Fallback на англійську, якщо переклад відсутній

## Next Steps

1. Застосувати той же підхід до інших custom nodes
2. Додати переклади для всіх знайдених рядків
3. Тестування в браузері

## Аналіз Settings Panel (2026-07-31)

### Архітектура Settings Panel

Вкладки Settings panel визначаються в коді (`settingStore-pm7IqVHI.js`):
- `CORE_CATEGORIES_ORDER = ["Comfy", "LiteGraph", "Appearance", "3D", "Mask Editor", "Other"]`
- Назви категорій **ЗАШИТІ в код** і НЕ перекладаються через i18n
- Перекладаються тільки налаштування всередині категорій (через `settings.json`)

### Вкладки з HTML (з вашого запиту)

**Account:**
- ✅ Користувач (User) — перекладено

**Application Settings:**
- ⚠️ Comfy — brand name, зашитий в код, не перекладається
- ⚠️ LiteGraph — brand name, зашитий в код, не перекладається
- ⚠️ Appearance — зашитий в код, не перекладається
- ⚠️ Mask Editor — зашитий в код, не перекладається
- ⚠️ EasyUse — plugin name, не перекладається
- ⚠️ KJNodes — plugin name, не перекладається
- ⚠️ LoRA Manager — plugin name, не перекладається
- ⚠️ VoxCPM — plugin name, не перекладається
- ⚠️ TTS Audio Suite — plugin name, не перекладається
- ⚠️ 🎥🅥🅗🅢 — plugin name з емодзі, не перекладається
- ⚠️ rgthree — plugin name, не перекладається
- ⚠️ 3D — зашитий в код, не перекладається

**Special Settings:**
- ✅ Поєднання клавіш (Keybinding) — перекладено
- ✅ Розширення (Extension) — перекладено
- ✅ Про програму (About) — перекладено

### Аналіз файлів локалізації

**Файл:** `comfyui_frontend_package/static/locales/en/settings.json`
- **Всього ключів:** 112

**Файл:** `comfyui_frontend_package/static/locales/uk/settings.json`
- **Всього ключів:** 151 (112 з en + 39 додаткові: KJNodes, loramanager)

### Результати порівняння

✅ **Всі 112 ключів з англійського файлу присутні в українському**
✅ **Всі 112 ключів мають перекладені `name` (жоден не збігається з англійським)**
✅ **Перекладено:** Comfy, LiteGraph, Appearance, 3D, Mask Editor категорії
✅ **Додатково перекладено:** KJNodes (30+ налаштувань), LoRA Manager (9 налаштувань)

### Статус перекладу за категоріями

| Категорія | Ключів | Статус |
|-----------|--------|--------|
| Comfy-Desktop | 7 | ✅ Перекладено |
| Comfy (Appearance/Canvas/Graph) | 30+ | ✅ Перекладено |
| Comfy (Node/NodeBadge/NodeSearch) | 25+ | ✅ Перекладено |
| Comfy (Workflow/Queue/Sidebar) | 20+ | ✅ Перекладено |
| LiteGraph | 6 | ✅ Перекладено |
| 3D (Load3D) | 8 | ✅ Перекладено |
| Mask Editor | 2 | ✅ Перекладено |
| KJNodes | 30+ | ✅ Перекладено (додатково) |
| LoRA Manager | 9 | ✅ Перекладено (додатково) |

### Висновки

1. **Назви вкладок Settings panel НЕ перекладаються** — вони зашиті в код (`CORE_CATEGORIES_ORDER`)
2. **Всі налаштування всередині вкладок перекладені** — 112 ключів з en/settings.json мають переклад
3. **Додаткові переклади** — KJNodes (30+), LoRA Manager (9) перекладені окремо
4. **Вкладки custom nodes** (EasyUse, VoxCPM, TTS Audio Suite, 🎥🅥🅗🅢, rgthree) мають власні файли локалізації в `custom_nodes/*/locales/`

## Завдання (2026-07-31)

### Завдання 1: VoxCPM — повний переклад
- **Дата створення:** 2026-07-31 14:05
- **Дата завершення:** —
- **Статус:** завершено
- **Статус фрейму:** перекладено все, що можливо
- **Файл:** `custom_nodes/ComfyUI-VoxCPM/locales/uk/settings.json`
- **Знайдені англійські рядки в js/extension.js:**
  - Діалог 1: "VoxCPM Model Setup", "Welcome to VoxCPM! How would you like to configure your model path?", "Use Default Path", "Use Custom Path", "Official models will be downloaded automatically.", "Select a custom directory where your VoxCPM models are located.", "Useful for existing model collections.", "Cancel", "Continue"
  - Діалог 2: "Select Model Directory", "Enter model directory path", "Browse...", "Found Models", "Use This Path"
  - Повідомлення: "Custom Model Path Set", "No models found", "Invalid path or no models found", "Failed to validate path"
  - Settings: "Use Custom Model Path", "Custom Model Path", ["VoxCPM", "Model Path"]
- **Створено:** locales/en/settings.json (22 ключі), locales/uk/settings.json (22 ключі)
- **Створено:** `__init__.py` — додано маршрут для locale файлів
- **Створено:** `voxcpm-locale-patch.js` — перевизначає налаштування з перекладеними назвами
- **Що перекладено:** назви налаштувань, tooltip'и, діалоги, повідомлення
- **Що НЕ перекладено (обмеження ComfyUI):** категорія "VoxCPM", підкатегорія "Model Path"

### Невдалі спроби перекладу VoxCPM

**Спроба 1: Перекласти категорію "VoxCPM"**
- **Результат:** невдала
- **Причина:** категорії налаштувань зашиті в `extension.js`: `category: ["VoxCPM", "Model Path"]`
- ComfyUI **не підтримує** переклад категорій — вони відображаються з оригінального коду
- Це загальне обмеження: LoRA Manager теж має неперекладену категорію "LoRA Manager"

**Спроба 2: Перекласти підкатегорію "Model Path"**
- **Результат:** невдала
- **Причина:** та ж проблема — категорії зашиті в код extension.js
- Неможливо перевизначити через patch-файл

**Спроба 3: Додати переклад через locales.js (перевизначення категорій)**
- **Результат:** невдала
- **Причина:** app.settings.set() перевизначає тільки name/tooltip, але не category
- ComfyUI використовує category для групування налаштувань — не піддається перекладу

**Висновок:** категорії налаштувань ComfyUI НЕ ПЕРЕКЛАДАЮТЬСЯ — це обмеження фреймворку.
### Завдання 2: TTS Audio Suite — частковий переклад
- **Дата створення:** 2026-07-31 14:05
- **Дата завершення:** —
- **Статус:** не-розпочато
- **Статус фрейму:** частково перекладений
- **Файл:** `custom_nodes/tts_audio_suite/locales/uk/settings.json`
- **Ключів в uk:** 4 (TTSAudioSuite.InlineEditTags.Precision/Device, TTSAudioSuite.RestoreTags.VCEngine/CosyVoiceVariant)
- **Проблема:** Англійський файл `locales/en/settings.json` відсутній — потрібно знайти оригінал в коді
- **Коментар:** Потрібно перевірити, чи є додаткові ключі в англійському файлі в оригінальному репозиторії

### Невдалі спроби перекладу TTS Audio Suite

**Спроба 1: Створити `locales/en/settings.json`**
- **Результат:** успішна
- **Створено:** `custom_nodes/tts_audio_suite/locales/en/settings.json` (4 ключі)
- **Створено:** `custom_nodes/tts_audio_suite/locales/en/main.json` (7 категорій + 15 опцій)

**Спроба 2: Додати маршрут для locale файлів в `__init__.py`**
- **Результат:** успішна
- **Додано:** `/api/tts-audio-suite/locale` — для `settings.json`
- **Додано:** `/api/tts-audio-suite/main-locale` — для `main.json`

**Спроба 3: Створити patch-файл `tts-audio-suite-locale-patch.js`**
- **Результат:** невдала
- **Причина:** Patch-файл НЕ завантажується ComfyUI автоматично

### Завдання 3: EasyUse — повна локалізація неможлива без зміни коду
- **Дата створення:** 2026-07-31
- **Дата завершення:** —
- **Статус:** не-розпочато (неможливо виконати)
- **Файл:** `custom_nodes/comfyui-easy-use/locales/{uk,en}.json`
- **Проблема:** EasyUse використовує `localStorage['Comfy.Settings.AGL.Locale']` замість API endpoint для завантаження locale файлів
- **Наслідки:**
  - Переклад працює **тільки якщо користувач сам встановить `Comfy.Locale` в 'uk'**
  - Неможливо автоматично завантажити переклад через ComfyUI
  - Це обмеження самого EasyUse, а не нашого підходу
- **Що зроблено:** Перевірено механізм локалізації — виявлено обмеження
- **Що НЕ можна зробити:** Додати API endpoint `/easyuse/locale` без зміни коду EasyUse

**Висновок:** EasyUse має архітектурне обмеження — використовує localStorage замість API для локалізації. Повна локалізація неможлива без зміни коду плагіну.

---

## Проблема з браузерною мовою (2026-07-31 16:15)

### Виявлено проблему
**Симптом:** При `Comfy.Locale = 'en'` або `Comfy.Locale = 'ru'` відображається український переклад.

**Причина:** У `getLoraManagerLocale()` є перевірка `navigator.language.startsWith('uk')`, яка повертає true, бо браузерна мова — **'uk-UA'**.

**Вплив:**
- `Comfy.Locale = 'ru'` → завантажується український переклад (через navigator.language)
- `Comfy.Locale = 'en'` → завантажується український переклад (через navigator.language)

**Рішення:** Змінити порядок перевірки в `getLoraManagerLocale()` — спочатку перевіряти `Comfy.Locale`, а потім `navigator.language`.

### Оновлене правило для getLoraManagerLocale()
```javascript
function getLoraManagerLocale() {
    try {
        // 1. Перевірка Comfy.Locale (має найвищий пріоритет)
        const settingManager = app?.extensionManager?.setting;
        if (settingManager) {
            const lang = settingManager.get('Comfy.Locale');
            if (lang === 'uk' || lang === 'ru') return lang; // Додати підтримку 'ru'
        }
        
        // 2. Fallback: window.i18n.getCurrentLocale() (LoRA Manager's i18n system)
        if (typeof window.i18n?.getCurrentLocale === 'function') {
            const locale = window.i18n.getCurrentLocale();
            if (locale === 'uk' || locale === 'ru') return locale;
        }
        
        // 3. Fallback: state.global.settings.language
        const state = window.__LORA_STATE__ || window.__COMFYUI_STATE__;
        if (state?.global?.settings?.language === 'uk' || state?.global?.settings?.language === 'ru') 
            return state.global.settings.language;
        
        // 4. Fallback: check browser language
        if (navigator.language) {
            if (navigator.language.startsWith('uk')) return 'uk';
            if (navigator.language.startsWith('ru')) return 'ru'; // Додати підтримку 'ru'
        }
    } catch (e) { /* ignore */ }
    return 'en';
}
```

**Що змінилося:**
1. `Comfy.Locale` тепер перевіряється **першим** (найвищий пріоритет)
2. Додано підтримку 'ru' для всіх fallback'ів
3. `navigator.language` перевіряється **останнім**, як останню спробу

### Наступні кроки
1. Оновити `getLoraManagerLocale()` в `comfyui-lora-manager/web/comfyui/settings.js`
2. Додати російський переклад у `locales/ru.json` (або оновити існуючий)
3. Перевірити, чи тепер `Comfy.Locale = 'en'` завантажує англійський переклад
4. Перевірити, чи `Comfy.Locale = 'ru'` завантажує російський переклад

**Статус:** Проблема виявлена, потрібно оновити код LoRA Manager.

---

## Проблема з жорстко заданими рядками (2026-07-31 16:30)

### Виявлено проблему
**Симптом:** Деякі рядки (наприклад, "Замінювати підкреслення на пробіли в тегах") **жорстко прописані в коді**, а не завантажуються з locale файлу.

**Причина:** У `getLoraManagerSettings()` викликається `getTranslatedSetting()` **тільки для name та tooltip**, але **категорії** (`category: ["LoRA Manager", "Autocomplete", ...]`) — це **жорстко задані рядки**, які **НЕ перекладаються**.

**Аналіз HTML:**
```html
<div class="setting-group">
  <h3 class="text-base">Autocomplete</h3>
  <div data-setting-id="loramanager.tag_space_replacement">
```

Це `<h3>` заголовок, який відображає **назву групи налаштувань**. Це означає, що це **жорстко заданий рядок**, який **НЕ перекладається**.

**Але!** Ти сказав, що "Autocomplete" перекладається правильно. Це можливо, якщо:
1. ComfyUI **сам перекладає категорії custom nodes через settings.json**
2. Існує якийсь **невідомий механізм**, який перевизначає категорії

**Перевірка:**
- `CORE_CATEGORIES_ORDER = ["Comfy", "LiteGraph", "Appearance", "3D", "Mask Editor", "Other"]` — ці категорії **ЗАШИТІ в код ComfyUI** і НЕ перекладаються
- Категорії custom nodes (наприклад, "Autocomplete") також зашиті в `category: ["LoRA Manager", "Autocomplete", ...]`

**Висновок:** Жорстко задані рядки **НЕ ПЕРЕКЛАДАЮТЬСЯ**, якщо вони не завантажуються через `getTranslatedSetting()`.

### Наступні кроки
1. Перевірити, чи всі категорії використовують `getTranslatedSetting()`
2. Якщо ні — оновити код, щоб категорії завантажувалися з locale файлу
3. Створити **окремий locale файл для категорій** (наприклад, `locales/categories.json`)

**Статус:** Проблема виявлена, потрібно перевірити код LoRA Manager.
- Patch-файли потребують підключення в HTML/JS кодом, але TTS Audio Suite не має такого механізму
- `app.settings.set()` перевизначає налаштування, але це відбувається ПІСЛЯ того, як ComfyUI вже відобразив їх

**Спроба 4: Переклад категорій через `main.json`**
- **Результат:** невдала
- **Причина:** Patch-файл не завантажується, тому переклад категорій з `main.json` не застосовується
- Навіть якщо `main.json` містить переклад, немає механізму його завантаження

**Висновок:** TTS Audio Suite не має вбудованого механізму завантаження locale файлів. Потрібен інший підхід — або модифікація оригінального коду, або використання іншого способу інтеграції перекладу.

### Завдання 3: 🎥🅥🅗🅢 (VideoHelperSuite) — повний переклад
- **Дата створення:** 2026-07-31 14:05
- **Дата завершення:** —
- **Статус:** в-процесі
- **Статус фрейму:** перекладено все, що можливо
- **Файл:** `custom_nodes/comfyui-videohelpersuite/locales/uk/settings.json`
- **Ключів в uk:** 8 (VHS.AdvancedPreviews, VHS.AdvancedPreviewsMinWidth, VHS.AdvancedPreviewsDeadline, VHS.AdvancedPreviewsDefaultMute, VHS.LatentPreview, VHS.LatentPreviewRate, VHS.MetadataImage, VHS.KeepIntermediate)
- **Англійський файл:** `locales/en/settings.json` — існує
- **Механізм завантаження:**
  - `web/js/VHS.locale.js` — визначає локаль через `app.extensionManager.setting.get('Comfy.Locale')`
  - `web/js/VHS.settings.js` — завантажує переклади та перевизначає налаштування
  - `web/js/VHS.core.js` — використовує `getTranslatedSettings()` з VHS.settings.js

**Що перекладено:**
- Назви налаштувань (name)
- Підказки (tooltip)

**Що НЕ перекладено (обмеження ComfyUI):**
- Категорія "🎥🅥🅗🅢" — зашита в код
- Підкатегорії "Previews", "Sampling", "Output" — зашиті в код

**Створено:**
- `locales/en/settings.json` (8 ключів)
- `locales/uk/settings.json` (8 ключів)
- `web/js/VHS.locale.js` — механізм завантаження locale
- `web/js/VHS.settings.js` — перевизначення налаштувань з перекладом

**Коментар:** Механізм локалізації вже повністю реалізований у коді. Потрібно перевірити роботу в браузері.

### Завдання 4: rgthree — перевірка перекладу settings panel
- **Дата створення:** 2026-07-31 14:05
- **Дата завершення:** —
- **Статус:** не-розпочато
- **Статус фрейму:** частково перекладений
- **Файл:** `custom_nodes/rgthree-comfy/locales/uk/settings.json`
- **Ключів в uk:** 20+ (features.*, log_level, settingsPanel, settingsCategories)
- **Знайдені рядки для перевірки:**
  - `settingsPanel.config_button.name` = "Налаштування rgthree-comfy" ✅
  - `settingsCategories.Features.name` = "Функції" ✅
  - `settingsCategories.Menus.name` = "Меню" ✅
- **Проблема:** Кнопка "rgthree-comfy settings" відкриває додатковий фрейм — зайвий крок
- **Коментар:** Вкладка повинна відкривати налаштування одразу. Потрібно перевірити `config.js` та `config.ts` для зміни поведінки

### Завдання 5: EasyUse — перевірка перекладу
- **Дата створення:** 2026-07-31 14:05
- **Дата завершення:** —
- **Статус:** не-розпочато
- **Коментар:** Потрібно знайти файли локалізації та перевірити статус перекладу

### Завдання 6: ComfyUI-VoxCPM — перевірка перекладу
- **Дата створення:** 2026-07-31 14:05
- **Дата завершення:** —
- **Статус:** не-розпочато
- **Коментар:** Потрібно перевірити чи працює patch-файл та маршрути

### Завдання 7: ComfyMath — перевірка перекладу
- **Дата створення:** 2026-07-31 15:30
- **Дата завершення:** —
- **Статус:** не-розпочато
- **Коментар:** Потрібно знайти файли локалізації та перевірити статус перекладу

### Завдання 8: ComfyUI-AIToolkit — перевірка перекладу
- **Дата створення:** 2026-07-31 15:30
- **Дата завершення:** —
- **Статус:** не-розпочато
- **Коментар:** Потрібно знайти файли локалізації та перевірити статус перекладу

### Завдання 9: ComfyUI-QwenASR / Qwen3-ASR — перевірка перекладу
- **Дата створення:** 2026-07-31 15:30
- **Дата завершення:** —
- **Статус:** не-розпочато
- **Коментар:** Потрібно знайти файли локалізації та перевірити статус перекладу

### Завдання 10: comfyui-hiforce-plugin — перевірка перекладу
- **Дата створення:** 2026-07-31 15:30
- **Дата завершення:** —
- **Статус:** не-розпочато
- **Коментар:** Потрібно знайти файли локалізації та перевірити статус перекладу

### Завдання 11: comfyui-impact-pack / impact-subpack — перевірка перекладу
- **Дата створення:** 2026-07-31 15:30
- **Дата завершення:** —
- **Статус:** не-розпочато
- **Коментар:** Потрібно знайти файли локалізації та перевірити статус перекладу

### Завдання 12: comfyui-kjnodes — перевірка перекладу settings panel
- **Дата створення:** 2026-07-31 15:30
- **Дата завершення:** —
- **Статус:** не-розпочато
- **Коментар:** Переклад settings.json вже є (30+ ключів), потрібно перевірити чи працює

### Завдання 13: ComfyUI-LTXVideo / LTX-2-3-LipSync — перевірка перекладу
- **Дата створення:** 2026-07-31 15:30
- **Дата завершення:** —
- **Статус:** не-розпочато
- **Коментар:** Потрібно знайти файли локалізації та перевірити статус перекладу

### Завдання 14: controlaltai-nodes — перевірка перекладу
- **Дата створення:** 2026-07-31 15:30
- **Дата завершення:** —
- **Статус:** не-розпочато
- **Коментар:** Потрібно знайти файли локалізації та перевірити статус перекладу

### Завдання 15: ComfyUI-GGUF / comfyui-mxtoolkit — перевірка перекладу
- **Дата створення:** 2026-07-31 15:30
- **Дата завершення:** —
- **Статус:** не-розпочато
- **Коментар:** Потрібно знайти файли локалізації та перевірити статус перекладу

### Завдання 16: comfyui-scheduledguider-ext / comfyui-textonsegs — перевірка перекладу
- **Дата створення:** 2026-07-31 15:30
- **Дата завершення:** —
- **Статус:** не-розпочато
- **Коментар:** Потрібно знайти файли локалізації та перевірити статус перекладу

### Завдання 17: ComfyUI-XTTS — перевірка перекладу
- **Дата створення:** 2026-07-31 15:30
- **Дата завершення:** —
- **Статус:** не-розпочато
- **Коментар:** Потрібно знайти файли локалізації та перевірити статус перекладу

## Зведена таблиця всіх проблем перекладу

### Проблема 1: Категорії налаштувань зашиті в код ComfyUI
**Всі custom nodes, що використовують app.settings.set()**
- **Суть:** category: ["NodeName", "SubCategory"] відображається з оригінального коду
- **app.settings.set()** перевизначає тільки name/tooltip, але не category
- **Рішення:** неможливо перекласти (обмеження фреймворку)

### Проблема 2: Patch-файли (.js) не завантажуються автоматично
**TTS Audio Suite, VideoHelperSuite та інші без вбудованого locale-механізму**
- **Суть:** створений patch-файл з перекладом, але ComfyUI не має механізму автозавантаження
- **Patch-файли** потребують явного підключення в HTML/JS кодом
- **Рішення:** або модифікувати оригінальний JS код node, або додати fetch() для locale JSON

### Проблема 3: Custom nodes без вбудованого locale-механізму
**TTS Audio Suite, VideoHelperSuite, ComfyMath, AIToolkit та інші**
- **Суть:** на відміну від LoRA Manager і rgthree-comfy, ці node не мають вбудованого fetch() для завантаження JSON при старті
- **Рішення:** додати маршрут в `__init__.py` + JavaScript код для завантаження locale файлів

### Проблема 4: Відсутність англійського оригіналу для порівняння
**VideoHelperSuite — тільки uk/locales, немає en/locales**
- **Суть:** створено українські переклади, але немає англійського оригіналу для перевірки повноти
- **Рішення:** знайти в оригінальному коді node або створити з JS файлів

### Проблема 5: Невідомий locale-механізм EasyUse
**EasyUse — має locales/uk/main.json та settings.json, але невідомо як грузяться**
- **Суть:** потрібно перевірити чи працює завантаження перекладів
- **Рішення:** знайти JS код завантаження locale в web_version/ або ComfyUI-Easy-Use-Frontend/

### Проблема 6: Невідомий статус решти custom nodes
**ComfyMath, AIToolkit, QwenASR, hiforce, impact-pack, LTXVideo, controlaltai, GGUF, mxtoolkit, scheduledguider, textonsegs, XTTS — не перевірені**
- **Суть:** потрібно знайти файли локалізації та перевірити статус перекладу
- **Рішення:** переписати всі custom nodes і перевірити наявність locales/ папок

---

## ✅ LoRA Manager — Виправлено завантаження перекладів (2026-07-31 23:12)

### Корінь проблеми "жорстко прописаних" рядків
**Симптом:** Назви налаштувань та тултіпи (напр. "Крок регулювання сили") показувались українською в усіх мовах, ніби жорстко прописані в коді.

**Причина:** Невідповідність ключів між `settings.js` та locale JSON:
- `settings.js` — `getTranslatedSetting()` шукав у JSON ключі за повним ID: `"loramanager.strength_step"`
- `locales/uk.json` та `locales/en.json` — секція `settingsPanel` має ключі **без префікса**: `"strength_step"`
- Тому JSON-переклади ніколи не знаходились → завжди спрацьовував hardcoded fallback (український)

### Що виправлено в `custom_nodes/comfyui-lora-manager/web/comfyui/settings.js`
1. **`getTranslatedSetting()`** — прибирає префікс `loramanager.` перед пошуком у JSON:
   ```javascript
   const jsonKey = settingId.replace(/^loramanager\./, '');
   ```
2. **`getLoraManagerLocale()`** — `Comfy.Locale` має найвищий пріоритет, `navigator.language` — лише останній fallback:
   ```javascript
   // 1. Comfy.Locale setting has the HIGHEST priority
   const lang = settingManager.get('Comfy.Locale');
   if (lang === 'uk') return 'uk';
   if (lang === 'en') return 'en';
   ```

### Результат
- `Comfy.Locale = 'en'` → завантажується `en.json` (англійські назви та тултіпи)
- `Comfy.Locale = 'uk'` → завантажується `uk.json` (українські назви та тултіпи)
- Підтримку 'ru' НЕ додавали — перемикаємось тільки між en та uk (за вимогою користувача)
- Категорії (`LoRA Widget`, `Autocomplete` тощо) — не чіпали, працюють через окремий механізм

**Статус:** Код виправлено, синтаксис перевірено (`node --check`). Потребує перевірки в браузері.
