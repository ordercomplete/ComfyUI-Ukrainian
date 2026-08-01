# 📦 Інструкція встановлення ComfyUI-Ukrainian

## 📋 Зміст

1. [Вимоги](#вимоги)
2. [Швидкий старт](#швидкий-старт)
3. [Встановлення custom nodes](#встановлення-custom-nodes)
4. [Запуск](#запуск)
5. [Список custom nodes](#список-custom-nodes)

---

## Вимоги

- Python 3.10+
- Git
- [ComfyUI](https://github.com/Comfy-Org/ComfyUI) (базовий)
- pnpm (для збірки frontend)

---

## Швидкий старт

```powershell
# 1. Клонувати репозиторій
git clone https://github.com/ordercomplete/ComfyUI-Ukrainian.git
cd ComfyUI-Ukrainian

# 2. Встановити custom nodes
.\scripts\install_custom_nodes.ps1

# 3. Запустити
.\update_comfyui.bat
```

---

## Встановлення custom nodes

### Автоматично (рекомендовано)

```powershell
.\scripts\install_custom_nodes.ps1
```

### Вручну

```powershell
cd custom_nodes

# ComfyUI-Easy-Use
git clone https://github.com/yolain/ComfyUI-Easy-Use.git

# ComfyUI-Impact-Pack
git clone https://github.com/ltdrdata/ComfyUI-Impact-Pack.git
git clone https://github.com/ltdrdata/ComfyUI-Impact-Subpack.git

# ComfyUI-KJNodes
git clone https://github.com/kijai/ComfyUI-KJNodes.git

# ComfyUI-Lora-Manager
git clone https://github.com/willmiao/ComfyUI-Lora-Manager.git

# ComfyUI-VideoHelperSuite
git clone https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

# ComfyUI-VoxCPM
git clone https://github.com/wildminder/ComfyUI-VoxCPM.git

# rgthree-comfy
git clone https://github.com/rgthree/rgthree-comfy.git

# TTS Audio Suite
git clone https://github.com/diodiogod/TTS-Audio-Suite.git

# ComfyUI-mxToolkit
git clone https://github.com/Smirnov75/ComfyUI-mxToolkit.git

# ComfyUI-Qwen3-ASR
git clone https://github.com/kaushiknishchay/ComfyUI-Qwen3-ASR.git

# ComfyUI-QwenASR
git clone https://github.com/1038lab/ComfyUI-QwenASR.git

# ComfyUI-AIToolkit
git clone https://github.com/sandichhuu/ComfyUI-AIToolkit.git

# ComfyUI-DistorchMemoryManager
git clone https://github.com/ussoewwin/ComfyUI-DistorchMemoryManager.git

# ComfyUI-GGUF
git clone https://github.com/city96/ComfyUI-GGUF.git

# comfyui-hiforce-plugin
git clone https://github.com/hiforce/comfyui-hiforce-plugin.git

# comfyui-krea2-ostris-edit
git clone https://github.com/ostris/ComfyUI-Krea2-Ostris-Edit.git

# ComfyUI-LTXVideo
git clone https://github.com/Lightricks/ComfyUI-LTXVideo.git

# comfyui-manager
git clone https://github.com/ltdrdata/ComfyUI-Manager.git

# comfyui-multigpu
git clone https://github.com/pollockjj/ComfyUI-MultiGPU.git

# comfyui-textonsegs
git clone https://github.com/nkchocoai/ComfyUI-TextOnSegs.git

# ComfyUI-XTTS
git clone https://github.com/AIFSH/ComfyUI-XTTS.git

# controlaltai-nodes
git clone https://github.com/gseth/ControlAltAI-Nodes.git

# LTX-2-3-LipSync
git clone https://github.com/GeekatplayStudio/LTX-2-3-LipSync.git
```

---

## Запуск

```powershell
# Спосіб 1: Батник
.\update_comfyui.bat

# Спосіб 2: PowerShell
.\scripts\update_comfyui.ps1

# Спосіб 3: Безпосередньо
python main.py
```

---

## Список custom nodes

| # | Node | Джерело |
|---|------|---------|
| 1 | ComfyUI-AIToolkit | github.com/sandichhuu/ComfyUI-AIToolkit |
| 2 | ComfyUI-DistorchMemoryManager | github.com/ussoewwin/ComfyUI-DistorchMemoryManager |
| 3 | comfyui-easy-use | github.com/yolain/ComfyUI-Easy-Use |
| 4 | ComfyUI-GGUF | github.com/city96/ComfyUI-GGUF |
| 5 | comfyui-hiforce-plugin | github.com/hiforce/comfyui-hiforce-plugin |
| 6 | comfyui-impact-pack | github.com/ltdrdata/ComfyUI-Impact-Pack |
| 7 | comfyui-impact-subpack | github.com/ltdrdata/ComfyUI-Impact-Subpack |
| 8 | comfyui-kjnodes | github.com/kijai/ComfyUI-KJNodes |
| 9 | comfyui-krea2-ostris-edit | github.com/ostris/ComfyUI-Krea2-Ostris-Edit |
| 10 | comfyui-lora-manager | github.com/willmiao/ComfyUI-Lora-Manager |
| 11 | ComfyUI-LTXVideo | github.com/Lightricks/ComfyUI-LTXVideo |
| 12 | comfyui-manager | github.com/ltdrdata/ComfyUI-Manager |
| 13 | comfyui-multigpu | github.com/pollockjj/ComfyUI-MultiGPU |
| 14 | comfyui-mxtoolkit | github.com/Smirnov75/ComfyUI-mxToolkit |
| 15 | ComfyUI-Qwen3-ASR | github.com/kaushiknishchay/ComfyUI-Qwen3-ASR |
| 16 | ComfyUI-QwenASR | github.com/1038lab/ComfyUI-QwenASR |
| 17 | comfyui-textonsegs | github.com/nkchocoai/ComfyUI-TextOnSegs |
| 18 | comfyui-videohelpersuite | github.com/Kosinkadink/ComfyUI-VideoHelperSuite |
| 19 | ComfyUI-VoxCPM | github.com/wildminder/ComfyUI-VoxCPM |
| 20 | ComfyUI-XTTS | github.com/AIFSH/ComfyUI-XTTS |
| 21 | controlaltai-nodes | github.com/gseth/ControlAltAI-Nodes |
| 22 | LTX-2-3-LipSync | github.com/GeekatplayStudio/LTX-2-3-LipSync |
| 23 | rgthree-comfy | github.com/rgthree/rgthree-comfy |
| 24 | tts_audio_suite | github.com/diodiogod/TTS-Audio-Suite |

---

## Оновлення

Див. [UPDATES_GUIDE.md](PLAN_and_INSTRUCTION/UPDATES_GUIDE.md) для повного посібника оновлень.
