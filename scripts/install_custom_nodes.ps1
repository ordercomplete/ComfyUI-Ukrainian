#!/usr/bin/env pwsh
# Install custom nodes for ComfyUI-Ukrainian
# Usage: .\scripts\install_custom_nodes.ps1

$ErrorActionPreference = "Stop"
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$repoRoot = Split-Path -Parent $scriptDir
$customNodesDir = Join-Path $repoRoot "custom_nodes"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  ComfyUI-Ukrainian Custom Nodes Installer" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Створити папку якщо не існує
if (-not (Test-Path $customNodesDir)) {
    New-Item -ItemType Directory -Path $customNodesDir -Force | Out-Null
    Write-Host "Створено папку: $customNodesDir" -ForegroundColor Yellow
}

$nodes = @(
    @{ Name = "comfyui-easy-use"; URL = "https://github.com/yolain/ComfyUI-Easy-Use.git" },
    @{ Name = "ComfyUI-Impact-Pack"; URL = "https://github.com/ltdrdata/ComfyUI-Impact-Pack.git" },
    @{ Name = "ComfyUI-Impact-Subpack"; URL = "https://github.com/ltdrdata/ComfyUI-Impact-Subpack.git" },
    @{ Name = "ComfyUI-KJNodes"; URL = "https://github.com/kijai/ComfyUI-KJNodes.git" },
    @{ Name = "ComfyUI-Lora-Manager"; URL = "https://github.com/willmiao/ComfyUI-Lora-Manager.git" },
    @{ Name = "ComfyUI-VideoHelperSuite"; URL = "https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git" },
    @{ Name = "ComfyUI-VoxCPM"; URL = "https://github.com/wildminder/ComfyUI-VoxCPM.git" },
    @{ Name = "rgthree-comfy"; URL = "https://github.com/rgthree/rgthree-comfy.git" },
    @{ Name = "TTS-Audio-Suite"; URL = "https://github.com/diodiogod/TTS-Audio-Suite.git" },
    @{ Name = "ComfyUI-mxToolkit"; URL = "https://github.com/Smirnov75/ComfyUI-mxToolkit.git" },
    @{ Name = "ComfyUI-Qwen3-ASR"; URL = "https://github.com/kaushiknishchay/ComfyUI-Qwen3-ASR.git" },
    @{ Name = "ComfyUI-QwenASR"; URL = "https://github.com/1038lab/ComfyUI-QwenASR.git" },
    @{ Name = "ComfyUI-AIToolkit"; URL = "https://github.com/sandichhuu/ComfyUI-AIToolkit.git" },
    @{ Name = "ComfyUI-DistorchMemoryManager"; URL = "https://github.com/ussoewwin/ComfyUI-DistorchMemoryManager.git" },
    @{ Name = "ComfyUI-GGUF"; URL = "https://github.com/city96/ComfyUI-GGUF.git" },
    @{ Name = "comfyui-hiforce-plugin"; URL = "https://github.com/hiforce/comfyui-hiforce-plugin.git" },
    @{ Name = "ComfyUI-Krea2-Ostris-Edit"; URL = "https://github.com/ostris/ComfyUI-Krea2-Ostris-Edit.git" },
    @{ Name = "ComfyUI-LTXVideo"; URL = "https://github.com/Lightricks/ComfyUI-LTXVideo.git" },
    @{ Name = "ComfyUI-Manager"; URL = "https://github.com/ltdrdata/ComfyUI-Manager.git" },
    @{ Name = "ComfyUI-MultiGPU"; URL = "https://github.com/pollockjj/ComfyUI-MultiGPU.git" },
    @{ Name = "ComfyUI-TextOnSegs"; URL = "https://github.com/nkchocoai/ComfyUI-TextOnSegs.git" },
    @{ Name = "ComfyUI-XTTS"; URL = "https://github.com/AIFSH/ComfyUI-XTTS.git" },
    @{ Name = "ControlAltAI-Nodes"; URL = "https://github.com/gseth/ControlAltAI-Nodes.git" },
    @{ Name = "LTX-2-3-LipSync"; URL = "https://github.com/GeekatplayStudio/LTX-2-3-LipSync.git" }
)

$installed = 0
$skipped = 0

foreach ($node in $nodes) {
    $nodePath = Join-Path $customNodesDir $node.Name
    if (Test-Path $nodePath) {
        Write-Host "  [SKIP] $($node.Name) — вже встановлено" -ForegroundColor Gray
        $skipped++
    } else {
        Write-Host "  [INSTALL] $($node.Name)..." -ForegroundColor Green
        git clone --depth 1 $node.URL $nodePath 2>&1 | Out-Null
        if ($LASTEXITCODE -eq 0) {
            Write-Host "    ✅ Успішно" -ForegroundColor Green
            $installed++
        } else {
            Write-Host "    ❌ Помилка" -ForegroundColor Red
        }
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Встановлено: $installed" -ForegroundColor Green
Write-Host "  Пропущено: $skipped" -ForegroundColor Gray
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Готово! Запустіть ComfyUI:" -ForegroundColor Yellow
Write-Host "  .\update_comfyui.bat" -ForegroundColor White
