#!/usr/bin/env pwsh
#Requires -Version 5.1
<#
.SYNOPSIS
    Безпечне оновлення ComfyUI-Ukrainian з офіційних репозиторіїв.
    Зберігає всі переклади та налаштування.

.DESCRIPTION
    1. Створює бекап всіх перекладів
    2. Робить git pull origin main
    3. Оновлює frontend через scripts/update_frontend.py
    4. Відновлює переклади з бекапу

.USAGE
    .\scripts\update_comfyui.ps1
    .\scripts\update_comfyui.ps1 -DryRun      # тільки перевірка
    .\scripts\update_comfyui.ps1 -Force        # примусове оновлення
#>

param(
    [switch]$DryRun,
    [switch]$Force
)

# Шляхи
$REPO_ROOT = Split-Path -Parent $PSScriptRoot
$TEMP_DIR = Join-Path $REPO_ROOT "temp"
$BACKUP_DIR = Join-Path $REPO_ROOT "locales" "uk_backup_$(Get-Date -Format 'yyyyMMdd_HHmmss')"
$FRONTEND_DIR = Join-Path $TEMP_DIR "ComfyUI_frontend"
$PACKAGE_STATIC = Join-Path $REPO_ROOT "comfyui_frontend_package" "static"
$LOCALES_UK = Join-Path $REPO_ROOT "locales" "uk"
$PACKAGE_LOCALES_UK = Join-Path $PACKAGE_STATIC "locales" "uk"

# Файли перекладів
$LOCALE_FILES = @("main.json", "nodeDefs.json", "settings.json", "commands.json")

# Кольори для виводу
function Write-Color($text, $color) { Write-Host $text -ForegroundColor $color }
function Write-Step($text) { Write-Color "`n=== $text ===" Cyan }
function Write-Success($text) { Write-Color "✅ $text" Green }
function Write-Warning2($text) { Write-Color "⚠️  $text" Yellow }
function Write-Error2($text) { Write-Color "❌ $text" Red }
function Write-Info($text) { Write-Host "   $text" }

# Перевірка що ми в правильній папці
if (-not (Test-Path (Join-Path $REPO_ROOT ".git"))) {
    Write-Error2 "Не знайдено .git у $REPO_ROOT"
    Write-Host "Запустіть скрипт з кореня репозиторію ComfyUI-Ukrainian" -ForegroundColor Red
    exit 1
}

Write-Color "`n========================================" Green
Write-Color "  ComfyUI-Ukrainian Safe Updater" Green
Write-Color "========================================" Green

if ($DryRun) {
    Write-Color "`n>>> DRY RUN MODE — нічого не змінюється" Yellow
}

# ============================================
# КРОК 1: Бекап перекладів
# ============================================
Write-Step "КРОК 1: Бекап перекладів"

if (Test-Path $BACKUP_DIR) {
    Write-Warning2 "Бекап вже існує: $BACKUP_DIR"
    Write-Host "   Видаліть його або використайте -Force" -ForegroundColor Yellow
    if (-not $Force) {
        Write-Host "`nНатисніть Enter для продовження (пропуск бекапу)" -ForegroundColor Yellow
        Read-Host
    }
} else {
    Write-Info "Створення бекапу: $BACKUP_DIR"
    New-Item -ItemType Directory -Force -Path $BACKUP_DIR | Out-Null
    
    foreach ($file in $LOCALE_FILES) {
        $src = Join-Path $LOCALES_UK $file
        if (Test-Path $src) {
            Copy-Item $src $BACKUP_DIR -Force
            Write-Success "$file → бекап"
        } else {
            Write-Warning2 "$file не знайдено"
        }
    }
    
    # Бекап custom_nodes налаштувань
    $customNodesBackup = Join-Path $REPO_ROOT "custom_nodes_backup_$(Get-Date -Format 'yyyyMMdd_HHmmss')"
    Write-Info "Бекап custom_nodes: $customNodesBackup"
    if (Test-Path $REPO_ROOT "custom_nodes") {
        New-Item -ItemType Directory -Force -Path $customNodesBackup | Out-Null
        Get-ChildItem (Join-Path $REPO_ROOT "custom_nodes") -Directory | ForEach-Object {
            $nodeBackup = Join-Path $customNodesBackup $_.Name
            New-Item -ItemType Directory -Force -Path $nodeBackup | Out-Null
            Copy-Item -Recurse $_.FullName $nodeBackup -Force -ErrorAction SilentlyContinue
            Write-Success "$($_.Name) → бекап"
        }
    }
}

# ============================================
# КРОК 2: Git pull
# ============================================
Write-Step "КРОК 2: Оновлення бекенду (git pull)"

if ($DryRun) {
    Write-Info "[DRY RUN] git pull origin main"
} else {
    try {
        $result = git -C $REPO_ROOT pull origin main 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Success "Бекенд оновлено"
            if ($result) {
                $result | ForEach-Object { Write-Info $_ }
            }
        } else {
            Write-Error2 "git pull завершився з помилкою"
            $result | ForEach-Object { Write-Error2 $_ }
        }
    } catch {
        Write-Error2 "Помилка git pull: $_"
    }
}

# ============================================
# КРОК 3: Оновлення frontend
# ============================================
Write-Step "КРОК 3: Оновлення frontend"

if (Test-Path $FRONTEND_DIR) {
    Write-Info "Оновлення існуючого ComfyUI_frontend..."
    if (-not $DryRun) {
        git -C $FRONTEND_DIR fetch origin --tags 2>&1 | Out-Null
        git -C $FRONTEND_DIR pull origin main 2>&1 | Out-Null
        Write-Success "ComfyUI_frontend оновлено"
    }
} else {
    Write-Info "Клоную ComfyUI_frontend..."
    if (-not $DryRun) {
        New-Item -ItemType Directory -Force -Path $TEMP_DIR | Out-Null
        git clone https://github.com/Comfy-Org/ComfyUI_frontend.git $FRONTEND_DIR 2>&1 | Out-Null
        Write-Success "ComfyUI_frontend клонувано"
    }
}

# ============================================
# КРОК 4: Відновлення перекладів
# ============================================
Write-Step "КРОК 4: Відновлення перекладів"

# Знайти останній бекап
$latestBackup = Get-ChildItem (Join-Path $REPO_ROOT "locales") -Directory -Filter "uk_backup_*" | Sort-Object Name -Descending | Select-Object -First 1

if ($latestBackup) {
    Write-Info "Знайдено бекап: $($latestBackup.FullName)"
    
    # Відновити locales/uk/
    foreach ($file in $LOCALE_FILES) {
        $src = Join-Path $latestBackup.FullName $file
        $dst = Join-Path $LOCALES_UK $file
        if (Test-Path $src) {
            if (-not (Test-Path (Split-Path $dst))) {
                New-Item -ItemType Directory -Force -Path (Split-Path $dst) | Out-Null
            }
            Copy-Item $src $dst -Force
            Write-Success "$file → locales/uk/"
        }
    }
    
    # Відновити comfyui_frontend_package/static/locales/uk/
    if (Test-Path $PACKAGE_STATIC) {
        if (-not (Test-Path $PACKAGE_LOCALES_UK)) {
            New-Item -ItemType Directory -Force -Path $PACKAGE_LOCALES_UK | Out-Null
        }
        foreach ($file in $LOCALE_FILES) {
            $src = Join-Path $latestBackup.FullName $file
            $dst = Join-Path $PACKAGE_LOCALES_UK $file
            if (Test-Path $src) {
                Copy-Item $src $dst -Force
                Write-Success "$file → static/locales/uk/"
            }
        }
    }
} else {
    Write-Warning2 "Бекап не знайдено — переклади вже на місці"
}

# ============================================
# ФІНАЛ
# ============================================
Write-Color "`n========================================" Green
Write-Color "  Оновлення завершено!" Green
Write-Color "========================================" Green

if ($latestBackup) {
    Write-Color "`nБекап збережено: $($latestBackup.FullName)" Yellow
}

Write-Color "`nНатисніть Enter для закриття..." Gray
Read-Host
