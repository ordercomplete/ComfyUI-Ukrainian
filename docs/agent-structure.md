# Структура Агента Comfy-smart-lady

Цей файл описує повну структуру агента `Comfy-smart-lady` та всі її адаптації для різних розширень VSCode.

---

## 📌 Головні принципи

- **Ім'я:** Comfy-smart-lady
- **Роль:** coding-агент для локальних моделей (30-40B)
- **Пріоритет:** стабільність > структурованість даних > фіксація звітів > швидкість

---

## 🏗️ Архітектура: 3 адаптації для різних середовищ

У проекті існують **три копії** системи інструкцій агента, кожна для свого середовища:

| Середовище | Папка | Статус |
|------------|-------|--------|
| **OpenCode** (основне) | `.opencode/` + `.github/` | ✅ Канонічна (повна) |
| **GitHub Copilot** | `.github/.prompt.md` | ✅ Активний |
| **Cline** | `.clinerules/` | ⚠️ Дзеркальна копія |

---

## 1️⃣ OpenCode — Основне середовище

### Конфігурація

| Файл | Призначення |
|------|-------------|
| `opencode.json` | Головний конфіг: встановлює `default_agent`, підключає плагін, шляхи до skills |
| `.opencode/package.json` | Залежність `@opencode-ai/plugin: 1.18.4` |

### Файли інструкцій агента

| Шлях | Роль | Статус |
|------|------|--------|
| `.github/agents/Comfy-smart-lady.agent.md` (101 рядок) | **ГЛАВНИЙ** файл інструкцій | ✅ Канонічний |
| `.opencode/agents/Comfy-smart-lady.md` (101 рядок) | Дубль для OpenCode | ⚠️ Синхронізувати з `.github/` |

### Плагіни та хуки

| Шлях | Тип | Призначення |
|------|-----|-------------|
| `.opencode/plugin/anti-loop.js` (28 рядків) | JS-плагін | Викликає Python-хук після кожного `tool.execute` |
| `.github/hooks/anti_loop.py` (271 рядок) | Python-хук | Детектування 5 типів циклів, скидання стану, запис у error-log |
| `.github/hooks/Loops.json` | Конфіг хуків | Визначає `PreToolUse` → `python .github/hooks/anti_loop.py` (таймаут 8 сек) |

### Навички (Skills)

| Шлях | Назва | Рядків | Призначення |
|------|-------|--------|-------------|
| `.github/skills/context-management/SKILL.md` | Анти-цикл + очищення контексту | 110 | Детектування циклів, таблиця рівнів заповнення, резюме для нового чату |
| `.github/skills/session-history/SKILL.md` | Історія сесій | 111 | Формат `session_YYYY-MM-DD.md`, action-log, error-log |
| `.github/skills/errors/SKILL.md` | Журнал помилок | 92 | Формат `error-log-YYYY-MM-DD.md`, типи помилок |
| `.github/skills/localization-qa/SKILL.md` | QA локалізації | 23 | Пошук проблем у locale файлах |
| `.github/skills/safe-edit/SKILL.md` | Безпечне редагування | 10 | Правила перед edit |
| `.github/skills/small-steps/SKILL.md` | Адаптивна розбивка задач | 19 | Розбиття на маленькі кроки |

### База знань

| Шлях | Статус |
|------|--------|
| `.github/knowledge-base/README.md` | ✅ Структура бази знань |
| `.github/knowledge-base/solutions/*.md` | ✅ 3 рішення (anti-loop, manager-locale, vhs-locale) |
| `.github/knowledge-base/code-patterns/` | ⬜ Порожня папка |
| `.github/knowledge-base/external-resources/` | ⬜ Порожня папка |

### Пам'ять сесії

| Шлях | Призначення |
|------|-------------|
| `memories/session/session_YYYY-MM-DD.md` | Історія кожної сесії з часом та статусами |
| `memories/repo/action-log_YYYY-MM-DD.md` | Журнал дій (✅ успішні, ❌ невдалі, 💡 інсайти) |
| `memories/errors/error-log-YYYY-MM-DD.md` | Журнал помилок та циклів |

---

## 2️⃣ GitHub Copilot — Точка входу

### Файли

| Шлях | Роль | Статус |
|------|------|--------|
| `.github/.prompt.md` (26 рядків) | **Точка входу** для Copilot. Вказує агенту прочитати `.github/agents/Comfy-lady.agent.md` при кожній новій сесії | ✅ Активний |

### Зміст `.github/.prompt.md`:
- Вказівка завантажити `Comfy-lady.agent.md`
- Короткі правила анти-циклу
- Очищення контексту
- Захист від таймаутів (50% — скорочувати відповіді)

---

## 3️⃣ Cline — Дзеркальна копія

### Файли

| Шлях | Роль | Статус |
|------|------|--------|
| `.clinerules/agents/Comfy-lady.agent.md` (5 рядків) | Посилання: "Канонічний файл — `.github/agents/Comfy-lady.agent.md`" | ⚠️ Дзеркальний |
| `.clinerules/.prompt.md` (5 рядків) | Посилання: "Канонічний файл — `.github/.prompt.md`" | ⚠️ Дзеркальний |
| `.clinerules/hooks/anti_loop.py` (271 рядок) | Повна копія Python-хуку | ⚠️ Дзеркальний |
| `.clinerules/skills/*/SKILL.md` | Скорочені копії (306-384 байти vs 539-9107 в оригіналі) | ⚠️ Дзеркальні |

### Архів-джерело:
- `.github.rar` (67 736 байт) — містить повну копію `.github/` + дзеркальну копію в `.clinerules/`

---

## 🔗 Зв'язки між файлами

```
opencode.json
├── default_agent: "Comfy-smart-lady"
├── plugin: [".opencode/plugin/anti-loop.js"]
│   └── викликає → .github/hooks/anti_loop.py
└── skills.paths:
    ├── .opencode/agents
    ├── .github/agents (КАНОНІЧНИЙ)
    │   └── Comfy-smart-lady.agent.md (101 рядок — ГЛАВНИЙ)
    ├── .opencode/skills
    └── .github/skills (6 SKILL.md файлів)

.github/.prompt.md → Copilot точка входу
├── завантажує → .github/agents/Comfy-lady.agent.md
└── правила анти-циклу + очищення контексту

.clinerules/ → дзеркальні копії для Cline
├── agents/Comfy-lady.agent.md (посилання на .github/)
├── .prompt.md (посилання на .github/.prompt.md)
└── hooks/skills/knowledge-base (копії з .github/)

memories/ → пам'ять сесій
├── session/session_YYYY-MM-DD.md
├── repo/action-log_YYYY-MM-DD.md
└── errors/error-log-YYYY-MM-DD.md
```

---

## 📊 Статистика файлів системи агента

| Категорія | Кількість |
|-----------|-----------|
| Конфігураційні файли (opencode.json, Loops.json, package.json) | 3 |
| Agent.md файли (головний + дублі + посилання) | 3 |
| Плагіни (.js) | 1 |
| Хуки (.py + .json + .pyc) | 3 |
| Skills (SKILL.md) | 6 |
| База знань (README + solutions) | 4 |
| .prompt.md файли | 2 |
| Скрипти (.sh) | 1 |
| GitHub Actions workflows | 24 |
| Шаблони issue/PR | 5 |
| Файли пам'яті сесії (session, errors, action-log) | 13+ |
| **Разом унікальних файлів системи агента** | **~60+** |

---

## 🔄 Синхронізація

### Золоте правило:
> **`.github/` — єдине канонічне джерело.** Усі зміни робляться тільки тут.

### Що Потрібна синхронізація. (синхронізувати):
1. ✅ `.github/agents/Comfy-smart-lady.agent.md` → `.opencode/agents/Comfy-smart-lady.md`
2. ✅ `.github/.prompt.md` → `.clinerules/.prompt.md` (посилання)
3. ✅ `.github/skills/*/SKILL.md` → `.clinerules/skills/*/SKILL.md` (копії)

### Автоматична синхронізація:
- `.opencode/plugin/anti-loop.js` завжди викликає `.github/hooks/anti_loop.py`
- `Loops.json` конфігурує хук на `PreToolUse` подію

---

## 🎯 Як працює анти-цикл механізм

```
Користувач → tool call → agent
              ↓
    .opencode/plugin/anti-loop.js (after)
              ↓
    .github/hooks/anti_loop.py (stdin JSON)
              ↓
    Детекція циклів:
    ├── Exact repeat (5+ однакових)
    ├── Same target (7+ одного файлу)
    ├── Oscillation (A-B-A-B патерн)
    ├── Tool flood (10-15 одного типу)
    └── No progress (багато викликів, мало унікальних)
              ↓
    Якщо цикл виявлено:
    ├── Скидання recent calls
    ├── Запис у error-log.md
    └── Дозвіл продовжити з іншим підходом
```

---

## 4️⃣ PLAN_and_INSTRUCTION — Плани перекладу та інструкції

### Призначення папки
Папка `PLAN_and_INSTRUCTION/` містить плани перекладу, інструкції та документацію для процесу локалізації. Ці файли **не є частиною коду додатку** — вони створюються/змінюються під час розробки перекладу і мають бути залиті у головну гілку GitHub.

### Файли в папці

| Файл | Призначення |
|------|-------------|
| `MANAGER_V421_TRANSLATION_PLAN.md` | План перекладу ComfyUI Manager v4.2.1 |
| `translation-manager-v4.2.1.md` | Детальна документація перекладу manager |
| `UKRAINIAN_LOCALIZATION_PLAN.md` | Загальний план української локалізації |
| `UKRAINIAN_TRANSLATION_PLAN.md` | План українського перекладу |
| `UPDATES_GUIDE.md` | Посібник з оновлень перекладу |

### Відмінність від файлів додатку
- ✅ **Ці файли** — створюються/змінюються агентом під час розробки перекладу → залити в `main`
- ❌ **Файли додатку** (напр. `locale/*.json`) — якщо змінені в самому коді додатку (не агентом) → окрема гілка

---

## 📋 Файли Агента для заливання у головну гілку GitHub

Цей список містить усі файли та папки, які стосуються роботи Агента `Comfy-smart-lady` і мають бути залиті у головну гілку (`main`).

### ✅ ОБОВ'ЯЗКОВО додати в main:

#### 1. Конфігурація агента
| Шлях | Опис |
|------|------|
| `opencode.json` | Головний конфіг OpenCode (default_agent, plugin, skills) |

#### 2. Інструкції агента
| Шлях | Опис |
|------|------|
| `.github/agents/Comfy-smart-lady.agent.md` | **ГЛАВНИЙ** файл інструкцій (101 рядок) |
| `.opencode/agents/Comfy-smart-lady.md` | Дубль для OpenCode (синхронізувати з `.github/`) |

#### 3. Плагіни та хуки
| Шлях | Опис |
|------|------|
| `.opencode/plugin/anti-loop.js` | JS-плагін anti-loop (28 рядків) |
| `.github/hooks/anti_loop.py` | Python-хук детектування циклів (271 рядок) |
| `.github/hooks/Loops.json` | Конфігурація хуків PreToolUse |

#### 4. Навички (Skills)
| Шлях | Опис |
|------|------|
| `.github/skills/context-management/SKILL.md` | Анти-цикл + очищення контексту |
| `.github/skills/session-history/SKILL.md` | Історія сесій |
| `.github/skills/errors/SKILL.md` | Журнал помилок |
| `.github/skills/localization-qa/SKILL.md` | QA локалізації |
| `.github/skills/safe-edit/SKILL.md` | Безпечне редагування |
| `.github/skills/small-steps/SKILL.md` | Адаптивна розбивка задач |

#### 5. База знань
| Шлях | Опис |
|------|------|
| `.github/knowledge-base/README.md` | Структура бази знань |
| `.github/knowledge-base/solutions/*.md` | Рішення проблем (anti-loop, manager-locale, vhs-locale) |

#### 6. Точки входу для Copilot
| Шлях | Опис |
|------|------|
| `.github/.prompt.md` | Точка входу для GitHub Copilot |

#### 7. Плани перекладу та інструкції
| Шлях | Опис |
|------|------|
| `PLAN_and_INSTRUCTION/*.md` (5 файлів) | Плани перекладу, інструкції, посібники |

#### 8. Документація структури
| Шлях | Опис |
|------|------|
| `docs/agent-structure.md` | Цей файл — повна структура агента |

### ⚠️ НЕ додавати в main (окрема гілка):
| Шлях | Причина |
|------|---------|
| `locale/*.json` (якщо змінені в самому коді додатку) | Зміни з самого ComfyUI — окрема гілка |

### 📝 Динамічні файли (не додавати в main):
| Шлях | Причина |
|------|---------|
| `memories/session/*.md` | Історія сесій — генеруються під час роботи |
| `memories/repo/action-log_*.md` | Журнали дій — генеруються під час роботи |
| `memories/errors/error-log-*.md` | Журнали помилок — генеруються під час роботи |

---

## 📝 Останнє оновлення

- **Дата:** 2026-08-04
- **Зміни:** 
  - додано правило про скрипти/плагіни в `.opencode/agents/Comfy-smart-lady.md`
  - додано папку `PLAN_and_INSTRUCTION` в структуру агента
  - створено список файлів Агента для заливання у головну гілку GitHub
