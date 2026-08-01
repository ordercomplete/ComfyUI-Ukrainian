# ComfyUI Ukrainian Localization

**Unofficial Ukrainian localization for ComfyUI interface.**

This repository provides Ukrainian language files for the ComfyUI interface.

> **Note:** This is an independent community project and is **not** affiliated with or endorsed by Comfy Org.

## License

This project is licensed under the **GNU General Public License v3.0**.  
See the [LICENSE](LICENSE) file for the full license text.

It is a derivative work of:
- [ComfyUI](https://github.com/Comfy-Org/ComfyUI)
- [ComfyUI Frontend](https://github.com/Comfy-Org/ComfyUI_frontend)

Original ComfyUI is also licensed under GPLv3.

## Status

Localization files are currently under development.  
The `locales/uk/` directory will contain the translation files once ready.

## How to use (preliminary)

Instructions will be updated after the first release of translation files.

Typical usage (expected):
1. Copy the `uk` folder into the appropriate locales directory of your ComfyUI frontend installation.
2. Select Ukrainian language in ComfyUI settings (`Comfy > Locale > Language`).

## Installation

### Prerequisites

- Python 3.10+
- [ComfyUI](https://github.com/Comfy-Org/ComfyUI) installed
- [ComfyUI Frontend](https://github.com/Comfy-Org/ComfyUI_frontend) built

### Custom Nodes

This repository includes **24 custom nodes** in `custom_nodes/`. They are **not tracked by Git** because each has its own `.git` repository.

To install them after cloning:

```powershell
# Run the automatic installer
.\scripts\install_custom_nodes.ps1

# Or manually clone each node
cd custom_nodes
git clone https://github.com/yolain/ComfyUI-Easy-Use.git
git clone https://github.com/ltdrdata/ComfyUI-Impact-Pack.git
git clone https://github.com/kijai/ComfyUI-KJNodes.git
# ... see INSTALL.md for full list
```

### Full installation guide

See [INSTALL.md](INSTALL.md) for complete installation instructions.

## Installation

### Prerequisites

- Python 3.10+
- [ComfyUI](https://github.com/Comfy-Org/ComfyUI) installed
- [ComfyUI Frontend](https://github.com/Comfy-Org/ComfyUI_frontend) built

### Custom Nodes

This repository includes **24 custom nodes** in `custom_nodes/`. They are **not tracked by Git** because each has its own `.git` repository.

To install them after cloning:

```powershell
# Run the automatic installer
.\scripts\install_custom_nodes.ps1

# Or manually clone each node
cd custom_nodes
git clone https://github.com/yolain/ComfyUI-Easy-Use.git
git clone https://github.com/ltdrdata/ComfyUI-Impact-Pack.git
git clone https://github.com/kijai/ComfyUI-KJNodes.git
# ... see INSTALL.md for full list
```

### Full installation guide

See [INSTALL.md](INSTALL.md) for complete installation instructions.

## Contributing

Contributions, improvements and corrections are welcome.  
Please open an issue or pull request.

## Disclaimer

This is an unofficial localization.  
ComfyUI, Comfy Org and related names are trademarks of their respective owners.

---

# Українська локалізація ComfyUI

**Неофіційна українська локалізація інтерфейсу ComfyUI.**

Цей репозиторій містить файли української мови для ComfyUI.

> **Увага:** Це незалежний громадський проєкт і **не** є афілійованим з Comfy Org.

## Ліцензія

Проєкт поширюється під **GNU General Public License v3.0**.  
Повний текст ліцензії — у файлі [LICENSE](LICENSE).

Це похідна робота від:
- [ComfyUI](https://github.com/Comfy-Org/ComfyUI)
- [ComfyUI Frontend](https://github.com/Comfy-Org/ComfyUI_frontend)

Оригінальний ComfyUI також ліцензований під GPLv3.

## Статус

Файли локалізації зараз у розробці.  
Папка `locales/uk/` буде наповнена перекладами після їх готовності.

## Як користуватися (попередньо)

Інструкція буде оновлена після першого релізу файлів перекладу.

Очікуваний спосіб використання:
1. Скопіювати папку `uk` у відповідну директорію локалей вашої установки ComfyUI frontend.
2. Обрати українську мову в налаштуваннях ComfyUI (`Comfy > Locale > Language`).

## Внесок

Виправлення, покращення та доповнення вітаються.  
Створюйте issue або pull request.

## Відмова від відповідальності

Це неофіційна локалізація.  
ComfyUI, Comfy Org та пов’язані назви є торговельними марками відповідних власників.