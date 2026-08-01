@echo off
chcp 65001 >nul
title ComfyUI Model Inspector
echo ========================================
echo   ComfyUI Model Inspector
echo   Шлях: D:\ComfyUI-Ukrainian\models
echo ========================================
echo.

REM Переходимо в папку, де лежить цей .bat (і скрипт)
cd /d "%~dp0"

REM Перевірка наявності Python
python --version >nul 2>&1
if errorlevel 1 (
    echo [ПОМИЛКА] Python не знайдено в PATH.
    echo Встановіть Python з https://www.python.org/downloads/
    echo і поставте галочку "Add python.exe to PATH".
    echo.
    pause
    exit /b 1
)

REM Перевірка наявності скрипта
if not exist "safetensors_inspector.py" (
    echo [ПОМИЛКА] Файл safetensors_inspector.py не знайдено
    echo в папці: %~dp0
    echo Покладіть скрипт поруч з цим .bat файлом.
    echo.
    pause
    exit /b 1
)

echo Запуск інспекції (рекурсивно)...
echo.

python safetensors_inspector.py "D:\ComfyUI-Ukrainian\models" -r -f

echo.
echo ========================================
echo Готово. Поруч з кожним файлом моделі
echo з'явився файл *.info.txt з описом.
echo ========================================
echo.
pause