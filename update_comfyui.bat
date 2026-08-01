@echo off
chcp 65001 >nul
title ComfyUI-Ukrainian Safe Updater

echo ========================================
echo   ComfyUI-Ukrainian Safe Updater
echo ========================================
echo.

:: Перейти в корінь репозиторію
cd /d "%~dp0"

:: Запустити PowerShell скрипт
powershell -ExecutionPolicy Bypass -File "%~dp0scripts\update_comfyui.ps1" %*

pause
