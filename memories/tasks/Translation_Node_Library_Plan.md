# План перекладу Бібліотеки нод (Node Library)

**Дата створення:** 2026-08-03
**Статус:** заплановано
**Пріоритет:** після виправлення всіх 404

---

## 🔍 Як працює переклад Бібліотеки нод

Frontend завантажує переклади назв нод (node names, inputs, outputs) **виключно з compiled bundles**:
- `comfyui_frontend_package/static/assets/nodeDefs-6_OSqomM.js` — український bundle
- `comfyui_frontend_package/static/assets/nodeDefs-ODHPSASO.js` — англійський bundle

Механізм: `i18n-B4bSsdRi.js` має `localeFiles` мапу, яка підвантажує `./uk/nodeDefs.json` → `nodeDefs-6_OSqomM.js`.

**Frontend НЕ підхоплює локалізацію з `/extensions/*/locales/*/nodeDefs.json`** — немає коду, який би шукав nodeDefs.json у каталогах custom nodes.

## 📊 Поточний стан

- 8 custom nodes мають `locales/uk/` з `main.json` + `settings.json`, але **жоден не має `nodeDefs.json`**:
  - comfyui-easy-use, comfyui-impact-pack, comfyui-kjnodes, comfyui-lora-manager, comfyui-videohelpersuite, ComfyUI-VoxCPM, rgthree-comfy, tts_audio_suite
- `uk/nodeDefs.json` (compiled bundle) містить переклади для **ядра ComfyUI** (LoraLoader, SaveLoRA, KSampler тощо), але **не для custom nodes**

## 📋 План виконання

### Варіант A: Додати переклади у compiled bundle (рекомендовано)

**Файл:** `comfyui_frontend_package/static/assets/nodeDefs-6_OSqomM.js`

Додати ключі для custom nodes у форматі:
```javascript
"LoraLoaderLM": {
  "display_name": "Завантажувач LoRA",
  "inputs": { "model": { "name": "Модель" }, ... },
  "outputs": { "0": { "name": "Вихід 0" } }
}
```

**Плюси:** працює одразу, без змін у frontend
**Мінуси:** перезапишеться при оновленні frontend (треба повторювати)

### Варіант B: Створити скрипт, який додає переклади після оновлення

Створити `scripts/apply_node_defs_translations.py`, який:
1. Читає `nodeDefs-6_OSqomM.js`
2. Додає/оновлює ключі для custom nodes
3. Запускається після кожного оновлення frontend

## 🎯 Які ноди перекладати (пріоритет)

| Пріоритет | Компонент | Кількість нод |
|-----------|-----------|---------------|
| 🔥 Високий | LoRA Manager | ~10 нод |
| 🔥 Високий | TTS Audio Suite | ~15 нод |
| 🟡 Середній | rgthree-comfy | ~20 нод |
| 🟡 Середній | VHS (Video Helper Suite) | ~30 нод |
| 🟢 Низький | KJNodes, EasyUse, Impact Pack | багато |

## ⚠️ Залежності

Перед перекладом Бібліотеки нод треба **спочатку завершити виправлення 404** (comfyui-manager-locale, /lm/settings), бо вони блокують завантаження інших компонентів.