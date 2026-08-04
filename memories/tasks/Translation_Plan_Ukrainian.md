# План перекладу ComfyUI Manager V4.2.1 (Українська)

**Статус:** в-процесі  
**Останнє оновлення:** 2026-08-03  

## ⚙️ Мета
Прийти до повного українського перекладу всіх інтерфейсних рядків Manager V4.2.1, виправити механізм завантаження локалей та протестувати на реальному додатку.

---

## 📂 Файли, які треба обробити

| Файл | Призначення | Поточний статус |
|------|-------------|----------------|
| `custom_nodes/comfyui-manager-locale/web/manager-locale-uk.js` | Словник українських перекладів + скрипт перекладу | **Виправлено** (додано основні рядки, треба додати відсутні категорії) |
| `custom_nodes/comfyui-manager-locale/prestartup_script.py` | Реєстрація extension, патч index.html, API для locale | **Вимодовано** (видалено виклик `inject_locale_script()` – запобігає 404) |
| `custom_nodes/comfyui-lora-manager/web/comfyui/settings.js` | Рендеринг категорій у Settings modal | **Не редагували** – треба перевірити, чи всі категорії перекладено |
| `custom_nodes/comfyui-lora-manager/web/comfyui/settings.js` (рядки `category: [...]`) | Твірчі масиви категорій | **Не перекладено** – треба додати переклад через `tr()` |

---

## 🛠️ Виконані зміни

1. **Виправлено `prestartup_script.py`** – видалено виклик `inject_locale_script()`, який вызывав API `/comfyui-manager-locale/uk.js` і викликав 404.  
2. **Збережено `manager-locale-uk.js`** – вже містить velикий словник українських перекладів.  
3. **Видалений виклик API** – тепер локализація завантажується безпосередньо через тег `<script>` у `index.html`.  

---

## 📋 Наступні кроки (послідовність)

| Етап | Дія | Файл/операція | Примітки |
|------|-----|--------------|----------|
| **1** | Додати українські переклади для відсутніх категорій (Automation, Statistics, Workflow, New Tab Template, Strength Step, Tag Formatting) | `custom_nodes/comfyui-manager-locale/web/manager-locale-uk.js` | Додати у `managerTranslations` near the end, перед `};`. |
| **2** | Перевірити, чи у `settings.js` (компонент LoRA Manager) використовуються `tr()`/`getTranslatedSetting` для `category` масивів. Якщо ні – змінити на `category: [tr('categories.Automation'), …]`. | `custom_nodes/comfyui-lora-manager/web/comfyui/settings.js` | Після цього UI буде отримувати переклад. |
| **3** | Тестувати: запустити ComfyUI, переключити мову на Українська, відкрити Settings → LoRA Manager → перевірити, чи всі категорії виводться українською. | — | Якщо щось залишилося англійським – додати у словник. |
| **4** | Повторити крок 2 та 3 для інших компонентів (TTS Audio Suite, rgthree, KJNodes, EasyUse, 3D) – у кожному випадку додати відповідні ключі у `manager-locale-uk.js` та використати `tr()` у відповідних файлах. | — | Цей крок розширює переклад на всі компоненти. |
| **5** | Документувати результат: створити `/memories/tasks/Translation_Plan_Ukrainian.md` з повним списком перекладених рядків. | — | Для архівації та подальшого контролю. |

---

## 📌 Ключові файли, які треба/edit

| Шлях | Опис |
|------|------|
| `custom_nodes/comfyui-manager-locale/prestartup_script.py` | Видалено виклик `inject_locale_script()` (виправлено 404). |
| `custom_nodes/comfyui-locale/web/manager-locale-uk.js` | Основний словник перекладів – треба додати відсутні ключі. |
| `custom_nodes/comfyui-lora-manager/web/comfyui/settings.js` | Масиви `category: [...]` – треба замінити на `tr('…')`. |
| `custom_nodes/comfyui-lora-manager/web/comfyui/settings.js` (та інші вузли) | Подібні зміни для інших компонентів. |

---

## ✅ Готово до виконання

- [x] **Виправлено** проблемний виклик API (завдання #1).  
- [x] **Збережено** поточний план у `/memories/tasks/Translation_Plan_Ukrainian.md`.  
- [ ] **Наступний крок:** Додати відсутні українські переклади у `manager-locale-uk.js` (зверіть увагу на крок 1 у таблиці вище).  

Як тільки будете готові, я продовжу з кроком 1 (додати відсутні ключі у `manager-locale-uk.js`).  

</content>
</function>
</tool_call>
<tool_call>
<function=write>
<parameter=filePath>
d:\ComfyUI-Ukrainian\memories\tasks\Translation_Plan_Ukrainian.md