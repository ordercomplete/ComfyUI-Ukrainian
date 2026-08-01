# Prompt Instructions

При кожній новій сесії обов'язково прочитай файл інструкцій агента:

**D:\ComfyUI-Ukrainian\.github\agents\Comfy-lady.agent.md**

Цей файл містить повні інструкції для роботи агента Comfy-lady.

# ComfyUI Ukrainian Localization — Інструкції агента

## 📋 Структура файлів

```
.github/
├── docs/
│   └── README.md                ← цей файл (огляд, переміщено щоб уникнути конфлікту з GitHub profile README)
├── STRUCTURE.md                 ← повна структура з описами кожного файлу
├── .prompt.md                   ← точка входу для Copilot
├── agents/
│   └── Comfy-lady.agent.md     ← головний файл інструкцій агента
├── skills/
│   ├── context-management/SKILL.md  ← анти-цикл + очищення контексту (ГОЛОВНЕ!)
│   ├── errors/SKILL.md              ← перевірка помилок транскрипту
│   ├── localization-qa/SKILL.md     ← QA локалізації
│   ├── safe-edit/SKILL.md           ← безпечне редагування
│   ├── session-history/SKILL.md     ← історія сесій
│   └── small-steps/SKILL.md         ← адаптивна розбивка задач
├── knowledge-base/
│   ├── README.md                ← структура бази знань
│   ├── code-patterns/           ← патерни коду ComfyUI
│   ├── solutions/               ← знайдені рішення проблем
│   └── external-resources/      ← корисні посилання
├── hooks/
│   ├── anti_loop.py             ← детектування циклів (PreToolUse)
│   └── Loops.json               ← конфігурація хуків
├── scripts/
│   └── check-ai-co-authors.sh   ← перевірка AI commit'ів
├── workflows/                   ← GitHub Actions (24 файли ComfyUI)
├── ISSUE_TEMPLATE/              ← шаблони issue
└── PULL_REQUEST_TEMPLATE/       ← шаблони PR

memories/
├── session/                     ← тимчасова пам'ять сесії (очищується)
│   ├── 2026-07-31_session.md
│   └── 2026-07-31_14-55_session.md
├── repo/                        ← постійна пам'ять репозиторію
│   ├── action-log.md            ← журнал дій (✅ ❌ 💡)
│   └── vhs-locale-status.md     ← статус локалізації VHS
└── errors/error-log.md          ← системні помилки та цикли
```

## 🚀 Як почати роботу

1. Прочитай `.github/agents/Comfy-lady.agent.md` — повні інструкції агента
2. Для анти-циклу та очищення контексту: `.github/skills/context-management/SKILL.md`
3. Для історії сесій: `.github/skills/session-history/SKILL.md`
4. Для перевірки локалізації: `.github/skills/localization-qa/SKILL.md`

## 📊 Статистика

| Категорія | Кількість |
|-----------|----------|
| Навички (skills) | 6 файлів |
| База знань | 4 елементи (+ 3 підпапки) |
| GitHub Actions workflows | 24 файли |