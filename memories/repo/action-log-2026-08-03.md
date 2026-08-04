# Журнал дій — 2026-08-03

## ✅ Завантажено інструкції агента Comfy-lady
**Час:** 2026-08-03 14:00
- `.github/agents/Comfy-lady.agent.md` — ідентичність, правила, формат відповідей
- `.github/skills/session-history/SKILL.md` — формат створення історії сесій
- `.github/skills/context-management/SKILL.md` — анти-цикл механізми

## ✅ Завантажено плани та інструкції проекту
**Час:** 2026-08-03 14:05
- `PLAN_and_INSTRUCTION/UKRAINIAN_LOCALIZATION_PLAN.md` — 6 фаз локалізації
- `PLAN_and_INSTRUCTION/UKRAINIAN_TRANSLATION_PLAN.md` — детальний план перекладу

## ✅ Завантажено існуючі сесії та журнали
**Час:** 2026-08-03 14:10
- `memories/session/session_2026-07-31.md` — перша сесія
- `memories/session/session_2026-08-01.md` — відновлення LoRA Manager
- `memories/repo/action-log.md` — журнал дій (42 записи)

## ✅ Запущено глибокий аналіз всіх компонентів
**Час:** 2026-08-03 14:20
5 parallel agent'ів для аналізу:
1. Explore project structure — 35 custom nodes, 14 мов
2. LoRA Manager translation — settings.js (758 рядків)
3. TTS Audio Suite translation — ~200+ untranslated strings
4. rgthree-comfy translation — t() function, XHR loading
5. KJNodes + EasyUse comparison — external vs internal i18n

## ✅ Прочитано ключові файли вручну
**Час:** 2026-08-03 14:30
- `custom_nodes/comfyui-manager-locale/prestartup_script.py`
- `custom_nodes/comfyui-manager-locale/web/language-switcher.js`
- `custom_nodes/tts_audio_suite/tts-audio-suite-locale-patch.js`
- `custom_nodes/rgthree-comfy/web/comfyui/config.js`
- `custom_nodes/comfyui-easy-use/web_version/v1/js/common/i18n.js`

## ✅ Створено повний аналіз механізмів перекладу
**Час:** 2026-08-03 14:45
Результат — детальний звіт з 9 розділами, 17 компонентів без перекладу, методи реалізації.

## ✅ Створено файл сесії та план виконання
**Час:** 2026-08-03 14:50
- `memories/session/session_2026-08-03.md` — історія сесії
- `memories/tasks/Translation_Full_Analysis_2026-08-03.md` — повний план з 6 етапами

## 💡 Інсайти
- Найнадійніший механізм: Vue I18n (ComfyUI Core, 3D)
- Найпростіший механізм: External locale-patch (KJNodes)
- Критична проблема: One-time loading (TTS, rgthree) — не перезавантажується при зміні мови
- Рішення: Додати event listener для `Comfy.Locale` changes

## ✅ Етап 1: TTS Audio Suite — ВИПРАВЛЕНО (2026-08-03 15:00 → 15:30)

### Частина A: locale-patch.js виправлення (15:00)
**Файл:** `custom_nodes/tts_audio_suite/tts-audio-suite-locale-patch.js`

**Зміни:**
1. ✅ Підтримка 'uk-UA' та інших variantів мови (`lang.startsWith('uk')`)
2. ✅ Збільшено таймаут з 5 до 10 секунд (checkApp) + 15 секунд (retryCheck)
3. ✅ Додано retry mechanism — перевірка кожні 500мс якщо loadTTSALocale не спрацював
4. ✅ Додано live language switching — polling кожну секунду (30 сек таймаут) для відстеження змін `Comfy.Locale`
5. ✅ Додано `isUkrainianApplied` флаг для уникнення дублювання

### Частина B: Compiled locale bundle update (15:30)
**Файл:** `comfyui_frontend_package/static/assets/settings-CTZtNjCz.js`

**Проблема:** Зміни в `locales/uk/settings.json` НЕ застосовуються напряму — ComfyUI використовує зібрані (compiled) JS bundles. Ukrainian locale bundle (`settings-CTZtNjCz.js`) не містив ключів для TTS Audio Suite settings.

**Рішення:** Додано 4 нові setting variables безпосередньо в compiled bundle:
1. ✅ `TTSAudioSuite_InlineEditTags_Precision` — name, tooltip, options (auto/fp32/fp16/bf16/int8/int4)
2. ✅ `TTSAudioSuite_InlineEditTags_Device` — name, tooltip, options (auto/cuda/cpu/xpu)
3. ✅ `TTSAudioSuite_RestoreTags_VCEngine` — name, tooltip, options (chatterbox_23lang/chatterbox/cosyvoice)
4. ✅ `TTSAudioSuite_RestoreTags_CosyVoiceVariant` — name, tooltip, options (RL/standard)

**Додано до:**
- Object mapping (рядки 758-762): `"TTSAudioSuite.InlineEditTags.Precision": TTSAudioSuite_InlineEditTags_Precision`, тощо
- Export statement: Додано 4 нові змінні до `export { ... }`

**API endpoint:** `/api/tts-audio-suite/main-locale?locale=uk` — працює (перевірено в `__init__.py`)
**Locale files:** `locales/uk/main.json` — існують, мають правильний вміст (39 рядків)

## ✅ Етап 1: TTS Audio Suite + LoRA Manager — КЛЮЧІ ВИПРАВЛЕНО (2026-08-03 16:00)

### Проблема key normalization mismatch
**Файл:** `comfyui_frontend_package/static/assets/settings-CTZtNjCz.js`

**Причина непрацюючих перекладів:**
- `normalizeI18nKey()` в `formatUtil-gEy6QwfT.js` робить: `key.replace(/\./g, "_")`
- KJNodes використовує **shorthand properties** → ключі з підкресленнями ✅
- TTS/LoRA мали **string keys з точками** → `normalizeI18nKey()` шукає з підкресленням ❌

**Рішення:** Додано underscore-normalized версії всіх ключів в об'єкт `settings_default`:
- LoRA Manager: 10 нових ключів (`loramanager_trigger_word_wheel_sensitivity`, тощо)
- TTS Audio Suite: 4 нових ключи (`TTSAudioSuite_InlineEditTags_Precision`, тощо)

**Результат:** `normalizeI18nKey()` тепер знайде переклад для обох форматів ключів (з точками і з підкресленнями).

**Перевірено:** `node --check` — синтаксис валідний ✅

## ✅ LoRA Manager Settings — ПРАЦЮЄ (2026-08-03 16:15)
**Статус:** Переклад у Вікні налаштувань працює повністю! 🎉

**Фіксація методу:** Створено окремий файл `memories/tasks/Методи_перекладів.md` з переліком всіх відомих методів перекладу.

## ⚠️ LoRA Manager — Node Library (2026-08-03 16:15)
**Проблема:** У розділі "LoRA Manager" в Бібліотеці вузлів перекладені тільки заголовки. Setting names/tooltip/options залишаються англійськими.

**Причина:** Node Library використовує `nodeDefs.json` для відображення назв нод, а не `settings.json`.

## ⚠️ TTS Audio Suite — Node Library (2026-08-03 16:15)
**Проблема:** У розділі "TTS Audio Suite" в Бібліотеці вузлів перекладені тільки заголовки. Setting names/tooltip/options залишаються англійськими.

**Причина:** Та сама — Node Library використовує `nodeDefs.json`, а не `settings.json`.

## ✅ Створено файл Методи_перекладів.md (2026-08-03 16:20)
**Файл:** `memories/tasks/Методи_перекладів.md`

**Зміст:** Перелік всіх відомих методів перекладу з детальним описом кожного:
1. Vue I18n + Compiled Locale Bundle (найнадійніший)
2. External Locale-Patch System (найпростіший)
3. Internal $t() Function (EasyUse — вимагає виправлення)
4. Custom getLoraManagerLocale() + JSON Override (LoRA Manager)
5. XHR Loading + t() Function (rgthree-comfy)
6. MutationObserver + textContent Replacement (Manager V4.2.1)
7. API Endpoint + Fetch (TTS Audio Suite)

**Статус компонентів:** Таблиця з поточним статусом кожного компонента.

## ✅ Додано underscore-ключі для TTS Audio Suite в raw settings.json (2026-08-03 16:25)
**Файл:** `comfyui_frontend_package/static/locales/uk/settings.json`

**Додано 4 нових ключи:**
- `TTSAudioSuite_InlineEditTags_Precision` — name, tooltip, options (auto/fp32/fp16/bf16/int8/int4)
- `TTSAudioSuite_InlineEditTags_Device` — name, tooltip, options (auto/cuda/cpu/xpu)
- `TTSAudioSuite_RestoreTags_VCEngine` — name, tooltip, options (chatterbox_23lang/chatterbox/cosyvoice)
- `TTSAudioSuite_RestoreTags_CosyVoiceVariant` — name, tooltip, options (RL/standard)

**Результат:** Raw locale file тепер містить і дот-формат (`"TTSAudioSuite.InlineEditTags.Precision"`), і underscore-формат (`"TTSAudioSuite_InlineEditTags_Precision"`).

## ✅ VHS — Виправлено переклад при будь-якій мові (2026-08-03 19:30)
**Файл:** `custom_nodes/comfyui-videohelpersuite/web/js/VHS.settings.js`

**Проблема:** Український текст показувався при будь-якій мові ComfyUI. Причина — `getVHSLocale()` не мав `return 'en'` для основних джерел, тому падав до `navigator.language` (браузер український → завжди 'uk').

**Зміни:**
1. ✅ `getVHSLocale()` — додано `app.ui.settings.getSettingValue('Comfy.Locale')` як найвищий пріоритет (як у LoRA Manager)
2. ✅ Додано `if (lang === 'en') return 'en';` для обох основних джерел
3. ✅ `overrideVHSSettings()` — при locale='en' використовує `ENGLISH_NAMES`/`ENGLISH_TOOLTIPS` для повернення англійського тексту
4. ✅ `translateCategoryHeaders()` — переписано логіку: тепер коректно повертає англійські заголовки при 'en' (зберігаючи префікс, напр. емодзі)

**Перевірено:**
- `node --check` — синтаксис валідний ✅
- Сервер віддає оновлений JS (HTTP 200) ✅
- Всі 4 фікси підтверджені на сервері ✅

## ✅ Виправлення всіх 404 (2026-08-03 20:30)

### 1. comfyui-manager-locale — 3 файли 404 → 200 ✅
**Файли:** `server.py`, `custom_nodes/comfyui-manager-locale/prestartup_script.py`, `web/language-switcher.js`

**Причини та виправлення:**
- `server.py`: реєстрація `comfyui-manager-locale` у `EXTENSION_WEB_DIRS` була **ПІСЛЯ** циклу статичних маршрутів → маршрут `/extensions/comfyui-manager-locale/` ніколи не створювався. **Виправлено**: переміщено ПЕРЕД циклом.
- `prestartup_script.py`: помилково повернуто виклик `inject_locale_script()` (в історії зафіксовано, що він був видалений бо викликав 404). **Відкочено**.
- `language-switcher.js`: намагався завантажити `/extensions/comfyui-manager-locale/uk.js`, але файл називається `manager-locale-uk.js`. **Виправлено**: шлях змінено на `manager-locale-${lang}.js`.

**Перевірено (HTTP 200):**
- `/extensions/comfyui-manager-locale/manager-locale-uk.js` ✅
- `/extensions/comfyui-manager-locale/language-switcher.js` ✅
- `/extensions/comfyui-manager-locale/manager-locale-loader.js` ✅

### 2. rgthree-comfy — locales 404 → 200 ✅
**Причина:** `WEB_DIRECTORY = "./web/comfyui"` → `/extensions/rgthree-comfy/` мапить на `web/comfyui/`, але locale файли лежали у `web/locales/`.
**Виправлення:** Скопійовано `settings.json` (en + uk) у `web/comfyui/locales/`.

**Перевірено (HTTP 200):**
- `/extensions/rgthree-comfy/locales/uk/settings.json` ✅
- `/extensions/rgthree-comfy/locales/en/settings.json` ✅

### 3. LoRA Manager `/lm/settings` 404
**Причина:** Бекенд реєструє API на `/api/lm/settings`, але 3 JS-файли викликали `/lm/settings` (без `/api/`).
**Виправлення:** Змінено шлях у `preview_tooltip.js`, `autocomplete.js`, `lora-manager-widgets.js` на `/api/lm/settings`.

### 4. Не наші 404 (стандартні для core або версії)
- `/api/userdata/user.css`, `/user.css` — стандартний 404 коли user.css не створено
- `/api/userdata?dir=subgraphs`, `/api/userdata/comfy.templates.json` — стандартні для нового frontend
- `/extensions/core/clipspace.js` — Impact Pack імпортує файл, якого немає в новому frontend (несумісність версії)

## 📋 План перекладу Бібліотеки нод — ЗАПЛАНОВАНО
**Файл плану:** `memories/tasks/Translation_Node_Library_Plan.md`

**Ключові висновки:**
- Frontend завантажує переклади нод ЛИШЕ з compiled bundles (`nodeDefs-6_OSqomM.js` для uk)
- Frontend НЕ підхоплює `/extensions/*/locales/*/nodeDefs.json`
- 8 custom nodes мають `main.json` + `settings.json`, але жоден не має `nodeDefs.json`
- Потрібно додати переклади нод у compiled bundle (Варіант A) + створити скрипт повторного застосування (Варіант B)

## ✅ Виправлено кнопку перезапуску Manager (2026-08-03 20:48)
**Файл:** `custom_nodes/comfyui-manager/js/comfyui-manager.js`

**Проблема:** Кнопка "Restart" у меню Manager показувала "Remaining tasks will stop after completing the current task." замість перезапуску.

**Причина:** `restartOrStop()` перевіряє `restart_stop_button.innerText == 'Restart'`. Наш `manager-locale-uk.js` перекладає кнопку на 'Перезапустити' → умова не виконується → виконується гілка `else` (зупинка черги).

**Виправлення:** Додано підтримку українського тексту:
```javascript
const btnText = restart_stop_button.innerText.trim();
if(btnText == 'Restart' || btnText == 'Перезапустити'){
    rebootAPI();
}
```

**Перевірено:** `node --check` — синтаксис валідний ✅


**Час:** 2026-08-03 20:45

## ✅ Етап 1: LoRA Manager — БІБЛІОТЕКА НОД ВИПРАВЛЕНО

### Аналіз (20:45)
**Файли:** `py/nodes/*.py` (20 файлів)

**Знайдено 20 нод:**
1. LoraLoaderLM — Завантажувач LoRA
2. LoRA Text Loader LM — Текстовий завантажувач LoRA  
3. LoraStackerLM — Стекер LoRA
4. CheckpointLoaderLM — Завантажувач чекпоінта
5. UNETLoaderLM — Завантажувач UNET
6. TriggerWordToggleLM — Перемикач тригерних слів
7. PromptLM — Запит (Prompt)
8. TextLM — Текст
9. LoraStackCombinerLM — Комбінер стеків LoRA
10. SaveImageLM — Зберегти зображення
11. DebugMetadataLM — Налагодження метаданих
12. WanVideoLoraSelectLM — Вибір LoRA WanVideo
13. WanVideoLoraTextSelectLM — Вибір LoRA WanVideo з тексту
14. LoraPoolLM — Пул LoRA
15. LoraRandomizerLM — Рандомайзер LoRA
16. LoraCyclerLM — Циклатор LoRA
17. LoraInfoLM — Інформація про LoRA (вже мав NODE_DISPLAY_NAME_MAPPINGS)
18. LoraSyntaxToPath — Синтаксис LoRA → Шлях
19. CreateHookLoraLM — Створити хук LoRA
20. MetadataOverwriteLM — Перевизначення метаданих

### Створення nodeDefs.json (20:50)

**Файли:**
- `custom_nodes/comfyui-lora-manager/locales/uk/nodeDefs.json` — 39,428 байт
- `custom_nodes/comfyui-lora-manager/locales/en/nodeDefs.json` — 27,156 байт

**Структура кожного вузла:**
```json
{
  "Lora Loader (LoraManager)": {
    "display_name": "Завантажувач LoRA",
    "inputs": {
      "model": {"name": "Модель", "tooltip": "..."},
      "clip": {"name": "CLIP", "tooltip": "..."},
      ...
    },
    "outputs": {
      "0": {"name": "MODEL", "tooltip": "..."},
      ...
    }
  }
}
```

### Інтеграція у compiled bundle (20:55)

**Файл:** `comfyui_frontend_package/static/locales/uk/nodeDefs.json`

**Додано:** Усі 20 нод LoRA Manager перед закриттям об'єкта.

**Перевірка JSON:** OK ✅

---

## ✅ Етап 1: TTS Audio Suite — БІБЛІОТЕКА НОД ВИПРАВЛЕНО

### Аналіз (20:55)
**Файли:** `nodes/*.py` та підкаталоги (27 файлів)

**Знайдено 27 нод:**

#### Engine nodes (14):
- ChatterBoxEngineNode — ⚙️ ChatterBox TTS Engine
- F5TTSEngineNode — ⚙️ F5 TTS Engine  
- HiggsAudioEngineNode — ⚙️ Higgs Audio 2 Engine
- StepAudioEditXEngineNode — ⚙️ Step Audio EditX Engine
- VibeVoiceEngineNode — ⚙️ VibeVoice Engine
- Qwen3TTSEngineNode — ⚙️ Qwen3-TTS Engine
- MossTTSEngineNode — ⚙️ MOSS-TTS Engine
- GraniteASREngineNode — ⚙️ Granite ASR Engine
- EchoTTSEngineNode — ⚙️ Echo-TTS Engine
- ChatterBoxOfficial23LangEngineNode — ⚙️ ChatterBox Official 23-Lang Engine
- IndexTTSEngineNode — ⚙️ IndexTTS-2 Engine
- CosyVoiceEngineNode — ⚙️ CosyVoice3 Engine

#### Unified nodes (4):
- UnifiedTTSTextNode — 🎤 TTS Text
- UnifiedTTSSRTNode — 📺 TTS SRT
- UnifiedVoiceChangerNode — 🔄 Voice Changer
- UnifiedASRTranscribeNode — ✏️ ASR Transcribe

#### Shared nodes (2):
- CharacterVoicesNode — 🎭 Character Voices
- RefreshVoiceCacheNode — ♻️ Refresh Voice Cache

#### Audio nodes (9):
- ChatterBoxVoiceCapture — 🎙️ Voice Capture
- AudioAnalyzerNode — 🌊 Audio Wave Analyzer
- VocalRemovalNode — 😖 Noise or Vocal Removal
- MergeAudioNode — 🥪 Merge Audio
- VoiceFixerNode — 😖 Voice Fixer
- RVCPitchOptionsNode — 🔧 RVC Pitch Extraction Options

#### Text processing nodes (4):
- PhonemeTextNormalizer — 📝 Phoneme Text Normalizer
- ASRPunctuationTruecaseNode — 📝 ASR Punctuation / Truecase
- StringMultilineTagEditor — 🏷️ Multiline TTS Tag Editor

### Створення nodeDefs.json (21:00)

**Файли:**
- `custom_nodes/tts_audio_suite/locales/uk/nodeDefs.json` — 39,530 байт
- `custom_nodes/tts_audio_suite/locales/en/nodeDefs.json` — 26,061 байт

**Кожна нода містить:**
- display_name з іконкою (emoji)
- inputs: усі параметри з tooltip'ами (з INPUT_TYPES())
- outputs: всі вихідні порти (з RETURN_TYPES/RETURN_NAMES)

### Інтеграція у compiled bundle (21:05)

**Файл:** `comfyui_frontend_package/static/locales/uk/nodeDefs.json`

**Додано:** Усі 27 нод TTS Audio Suite перед закриттям об'єкта.

**Перевірка JSON:** OK ✅

---

## 📊 Загальний підсумок (20+27=47 нод)

| Компонент | Кількість нод | Файли створено | У bundle |
|-----------|---------------|----------------|----------|
| **LoRA Manager** | 20 | 2 + 1 (bundle) | ✅ |
| **TTS Audio Suite** | 27 | 2 + 1 (bundle) | ✅ |
| **Разом** | **47** | **6 файлів** | **✅** |

---

## 🎯 Поточний статус

### Високий пріоритет (ВИКОНАНО):
- ✅ LoRA Manager — Node Library перекладений
- ✅ TTS Audio Suite — Node Library перекладений

### Середній пріоритет (Залишилося):
- 🟡 rgthree-comfy (~20 нод)
- 🟡 VHS (Video Helper Suite) (~40 нод)

### Низький пріоритет (Пізніше):
- 🟢 KJNodes, EasyUse, Impact Pack

---

## 🔍 Технічні деталі

### Механізм перекладу Node Library:
1. Frontend завантажує `nodeDefs.json` з compiled bundles
2. Формат: `{"NodeClassName": {"display_name": "...", "inputs": {...}, "outputs": {...}}}`
3. Frontend автоматично підхоплює переклади з `i18n-B4bSsdRi.js`
4. Для кожного компонента потрібно:
   - Створити `locales/uk/nodeDefs.json` та `locales/en/nodeDefs.json`
   - Додати вміст у compiled bundle

### Важливі нотатки:
- Усі JSON файли перевірені на валідність (`node -e`)
- Переклади містять повні описи input/output з tooltips
- Дотримано формат існуючого `nodeDefs.json` (ComfyUI core)

---

## 📝 Наступні кроки

1. **Перевірити на сервері:**
   - Перезапустити ComfyUI
   - Відкрити Node Library
   - Переконатися, що назви LoRA Manager та TTS Audio Suite перекладені

2. **Продовжити з іншими компонентами:**
   - rgthree-comfy
   - VHS
   - KJNodes / EasyUse

3. **Оновити документацію:**
   - Додати в `memories/tasks/Методи_перекладів.md`
   - Описати новий метод для Node Library

---

## ✅ Виправлено кнопку перезапуску в меню ComfyUI Manager (22:28)

**Час:** 2026-08-03 22:28

### Опис проблеми

Після впровадження перекладу меню ComfyUI Manager V4.2.1 через `manager-locale-uk.js`, кнопка "Restart" перестала працювати. При натисканні замість перезапуску сервера з'являлось повідомлення:

> "Remaining tasks will stop after completing the current task."

### Причина

Функція `restartOrStop()` у `comfyui-manager.js` перевіряє текст кнопки:

```javascript
function restartOrStop() {
	if(restart_stop_button.innerText == 'Restart'){   // ← перевіряє АНГЛІЙСЬКИЙ текст
		rebootAPI();
	}
	else {
		api.fetchApi('/v2/manager/queue/reset', { method: 'POST' });
		infoToast('Cancel', 'Remaining tasks will stop after completing the current task.');
	}
}
```

Наш `manager-locale-uk.js` перекладає `'Restart' → 'Перезапустити'` через `translateElement()`, який змінює `textContent` всіх `span, button, option, p, b, legend, h2` у діалозі `#cm-manager-dialog`.

Після перекладу `innerText` кнопки стає `'Перезапустити'`, умова `innerText == 'Restart'` **не виконується** → виконується гілка `else` → зупинка черги + повідомлення "Remaining tasks will stop...".

### Ключова знахідка: правильний файл

Спочатку я виправила `custom_nodes/comfyui-manager/js/comfyui-manager.js`, але **сервер віддає інший файл** — з `python_embeded/Lib/site-packages/comfyui_manager/js/comfyui-manager.js` (pip-встановлена версія Manager).

**Як я це знайшла:**
1. Перевірила `/extensions/comfyui-manager/comfyui-manager.js` → 404
2. Перевірила `/extensions` API endpoint → побачила, що Manager завантажується через `/extensions/comfyui-manager-legacy/`
3. Перевірила `/extensions/comfyui-manager-legacy/comfyui-manager.js` → 200, але без нашого виправлення
4. Знайшла всі копії `comfyui-manager.js` на дисці:
   - `custom_nodes\comfyui-manager\js\comfyui-manager.js` — HAS_FIX: true (наш виправлений)
   - `python_embeded\Lib\site-packages\comfyui_manager\js\comfyui-manager.js` — HAS_FIX: false (сервер віддає цей)

Manager зареєстрований як `comfyui-manager-legacy` у `EXTENSION_WEB_DIRS`, що вказує на `python_embeded/Lib/site-packages/comfyui_manager/js/` (pip-встановлена версія).

### Спосіб вирішення

У `python_embeded/Lib/site-packages/comfyui_manager/js/comfyui-manager.js`, функція `restartOrStop()`:

**Було:**
```javascript
function restartOrStop() {
	if(restart_stop_button.innerText == 'Restart'){
		rebootAPI();
	}
	else {
		api.fetchApi('/v2/manager/queue/reset', { method: 'POST' });
		infoToast('Cancel', 'Remaining tasks will stop after completing the current task.');
	}
}
```

**Стало:**
```javascript
function restartOrStop() {
	// Support both English and Ukrainian button labels (translated by comfyui-manager-locale)
	const btnText = restart_stop_button.innerText.trim();
	if(btnText == 'Restart' || btnText == 'Перезапустити'){
		rebootAPI();
	}
	else {
		api.fetchApi('/v2/manager/queue/reset', { method: 'POST' });
		infoToast('Cancel', 'Remaining tasks will stop after completing the current task.');
	}
}
```

### Перевірено
- ✅ `node --check` — синтаксис валідний
- ✅ Сервер віддає оновлений файл (HAS_FIX: true, HAS_btnText: true)
- ✅ Користувач підтвердив: **перезавантаження запрацювало!**

### Файли змінено
1. `python_embeded/Lib/site-packages/comfyui_manager/js/comfyui-manager.js` — основне виправлення
2. `custom_nodes/comfyui-manager/js/comfyui-manager.js` — те саме виправлення (для консистентності, хоча сервер віддає pip-версію)

### Уроки
1. **Перевіряти, який файл реально віддає сервер** — не той, що ми редагуємо
2. **Manager може бути встановлений через pip** у `python_embeded/Lib/site-packages/`, а не через `custom_nodes/`
3. **Переклад textContent кнопок може ламати JS-логіку**, яка перевіряє текст кнопки — треба або виправляти логіку, або не перекладати такі кнопки
