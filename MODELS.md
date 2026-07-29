# Інвентаризація локальних моделей ComfyUI

## Інформація
- **Шлях**: `D:\GEN\ComfyUI\ComfyUI\models`
- **Дата інвентаризації**: 2025-07-29
- **Загальна кількість**: 67+ файлів моделей
- **Типи моделей**: 15+ категорій

---

## Категорії моделей

### 1. Checkpoints (Повноцінні моделі)
**Призначення**: Базові моделі для генерації зображень/відео

| Файл | Розмір | Тип | Опис |
|------|--------|-----|------|
| `10Eros_v1.4_fp8mixed_learned.safetensors` | ~2.1 GB | SDXL | Модель для генерації зображень стилю 10Eros v1.4 |
| `hunyuan_3d_v2.1.safetensors` | ~2.1 GB | 3D | Hunyuan 3D v2.1 - генерація 3D моделей |
| `ltx-2.3-22b-dev-fp8.safetensors` | ~13 GB | Video | LTX-Video 2.3 22B dev - генерація відео |
| `ltx-2.3-22b-distilled-fp8.safetensors` | ~13 GB | Video | LTX-Video 2.3 distilled - оптимізована версія |
| `ltx-2.3-22b-dev_audio_vae.safetensors` | ~500 MB | Audio VAE | Аудіо VAE для LTX |
| `ltx-2.3-22b-dev_embeddings_connector.safetensors` | ~200 MB | Connector | З'єднувач ембедінгів для LTX |

**Примітка**: Моделі LTX Video призначені для генерації відео з тексту.

---

### 2. Diffusion Models (Дифузні моделі)
**Призначення**: Основний компонент для генерації

| Файл | Розмір | Тип | Опис |
|------|--------|-----|------|
| `acestep_v1.5_turbo.safetensors` | ~2.1 GB | SDXL | ACE-Step 1.5 Turbo - швидка генерація зображень |
| `flux-2-klein-9b-fp8.safetensors` | ~5.5 GB | Flux | Flux 2 Klein 9B - компактна версія Flux |
| `flux-2-klein-9b-kv-fp8.safetensors` | ~5.5 GB | Flux | Flux 2 Klein з KV-cache оптимізацією |
| `flux-2-klein-base-9b.safetensors` | ~5.5 GB | Flux | Базова модель Flux 2 Klein |
| `flux1-dev-kontext_fp8_scaled.safetensors` | ~6 GB | Flux | Flux 1 Dev Kontext - контекстна генерація |
| `flux2_dev_fp8mixed.safetensors` | ~6 GB | Flux | Flux 2 Dev - розробницька версія |
| `qwen_image_2512_fp8_e4m3fn.safetensors` | ~5 GB | Image | Qwen Image 2512 - генерація зображень |
| `qwen_image_edit_2511_bf16.safetensors` | ~5 GB | Image Edit | Qwen Image Edit 2511 - редагування зображень |
| `Chroma 8.9B (на базі FLUX.1-schnell).safetensors` | ~5 GB | Flux | Chroma 8.9B - модель на базі FLUX.1-schnell |
| `PornMaster_flux2_klein/*.safetensors` | ~5 GB | Flux | Flux 2 Klein для дорослих зображень |

**Примітка**: Flux - сучасна архітектура для генерації зображень високої якості.

---

### 3. LoRAs (Low-Rank Adaptation)
**Призначення**: Мінімальні адаптери для тонкого налаштування моделей

| Файл | Розмір | Тип | Опис |
|------|--------|-----|------|
| `Flux_2-Turbo-LoRA_comfyui.safetensors` | ~144 MB | LoRA | Турбо режим для Flux 2 |
| `gemma-3-12b-it-abliterated_lora_rank64_bf16.safetensors` | ~144 MB | LoRA | Аблітерація для Gemma 3 12B |
| `ltx-2-19b-lora-camera-control-dolly-left.safetensors` | ~144 MB | LoRA | Камера: дolly left рух для LTX |
| `ltx-2.3-22b-dev-fp8.safetensors` | ~144 MB | LoRA | Адаптер для LTX 2.3 dev |
| `ltx-2.3-22b-distilled-lora-384.safetensors` | ~144 MB | LoRA | Дистильований LoRA для LTX |
| `ltx-2.3-22b-ic-lora-motion-track-control-ref0.5.safetensors` | ~144 MB | LoRA | Motion track control для LTX |
| `ltx-2.3-22b-ic-lora-union-control-ref0.5.safetensors` | ~144 MB | LoRA | Union control для LTX |
| `ltx-2.3-id-lora-talkvid-3k.safetensors` | ~144 MB | LoRA | Talk video LoRA для LTX |
| `ltx_2.3_22b_distilled_1.1_lora_dynamic_fro09_*.safetensors` | ~144 MB | LoRA | Динамічний LoRA для LTX |
| `Qwen-Image-Edit-2511-Lightning-4steps-V1.0-bf16.safetensors` | ~144 MB | LoRA | Швидке редагування зображень Qwen |
| `Qwen-Image-Lightning-4steps-V1.0.safetensors` | ~144 MB | LoRA | Lightning 4 кроки для Qwen |
| `Qwen_Image_Edit_2511-SYSTMS_INFL8.safetensors` | ~144 MB | LoRA | Infl8 LoRA для Qwen |
| `10Eros_v1.4_DMD_int8_convrot.safetensors` | ~144 MB | LoRA | DMD оптимізація для 10Eros |
| `my_lora_v3/*.safetensors` | ~144 MB | LoRA | Власні LoRA моделі (5 кроків) |
| `Nude Style for FLUX/*.safetensors` | ~144 MB | LoRA | Стиль для дорослих зображень |
| `vittorio_lora_v1/*.safetensors` | ~144 MB | LoRA | Vittorio стиль v1 (5 кроків) |
| `vittorio_lora_v2/*.safetensors` | ~144 MB | LoRA | Vittorio стиль v2 (5 кроків) |
| `3-frames/*.safetensors` | ~144 MB | LoRA | 3-frames LoRA для LTX |
| `ltx/*.safetensors` | ~144 MB | LoRA | Різні LoRA для LTX |

**Примітка**: Кожен LoRA займає ~144 MB та додає специфічні можливості моделі.

---

### 4. Text Encoders (Текстові енкодери)
**Призначення**: Перетворення тексту в ембедінг для генерації

| Файл | Розмір | Тип | Опис |
|------|--------|-----|------|
| `clip_l.safetensors` | ~250 MB | CLIP | CLIP L для SDXL |
| `gemma_3_12B_it.safetensors` | ~7 GB | Gemma | Gemma 3 12B IT - текстовий енкодер |
| `gemma_3_12B_it_fp4_mixed.safetensors` | ~2 GB | Gemma | Gemma 3 12B FP4 - стиснута версія |
| `comfy_gemma_3_12B_it.safetensors` | ~7 GB | Gemma | Gemma 3 для ComfyUI |
| `ltx/gemma_3_12B_it_fp4_mixed.safetensors` | ~2 GB | Gemma | Gemma 3 для LTX |
| `ltx-2.3_text_projection_bf16.safetensors` | ~500 MB | Projection | Текстова проекція для LTX 2.3 |
| `mistral_3_small_flux2_bf16.safetensors` | ~3 GB | Mistral | Mistral 3 Small для Flux 2 |
| `qwen_0.6b_ace15.safetensors` | ~600 MB | Qwen | Qwen 0.6B для ACE 1.5 |
| `qwen_2.5_vl_7b_fp8_scaled.safetensors` | ~4 GB | Qwen | Qwen 2.5 VL 7B - мультимодальний |
| `qwen_3_8b_fp8mixed.safetensors` | ~4 GB | Qwen | Qwen 3 8B - текстовий енкодер |
| `qwen_4b_ace15.safetensors` | ~2 GB | Qwen | Qwen 4B для ACE 1.5 |
| `t5xxl_fp8_e4m3fn_scaled.safetensors` | ~3 GB | T5 | T5-XXL FP8 - універсальний енкодер |
| `10Eros/gemma-3-12b-it-ablit-norms-biproj-fp8mi*.safetensors` | ~2 GB | Gemma | Аблітерація для 10Eros |
| `Chroma 8.9B (на базі FLUX.1-schnell)/t*.safetensors` | ~7 GB | Gemma | Текстовий енкодер для Chroma |

**Примітка**: Текстові енкодери перетворюють текстові запити на вектори для генерації.

---

### 5. VAE (Variational Autoencoder)
**Призначення**: Кодування/декодування зображень

| Файл | Розмір | Тип | Опис |
|------|--------|-----|------|
| `ae.safetensors` | ~335 MB | VAE | Загальний VAE для SD |
| `flux2-vae.safetensors` | ~335 MB | VAE | VAE для Flux 2 |
| `qwen_image_vae.safetensors` | ~335 MB | VAE | VAE для Qwen Image |
| `ltx-2.3-22b-dev_video_vae.safetensors` | ~500 MB | Video VAE | Відео VAE для LTX |
| `ace_1.5_vae.safetensors` | ~335 MB | VAE | VAE для ACE 1.5 |
| `full_encoder_small_decoder.safetensors` | ~200 MB | VAE | Варіація енкодера/декодера |
| `LTX23_audio_vae_bf16.safetensors` | ~300 MB | Audio VAE | Аудіо VAE для LTX |

**Примітка**: VAE відповідає за якість зображень та кодування в латентний простір.

---

### 6. VAE Approx (Наближені VAE)
**Призначення**: Швидке наближення VAE для прев'ю

| Файл | Розмір | Тип | Опис |
|------|--------|-----|------|
| `taef1_decoder.safetensors` | ~50 MB | Approx | TAEF1 декодер |
| `taef1_encoder.safetensors` | ~50 MB | Approx | TAEF1 енкодер |
| `taesd3_decoder.safetensors` | ~50 MB | Approx | TAESD3 декодер |
| `taesd3_encoder.safetensors` | ~50 MB | Approx | TAESD3 енкодер |
| `taesdxl_decoder.safetensors` | ~50 MB | Approx | TAESDXL декодер |
| `taesdxl_encoder.safetensors` | ~50 MB | Approx | TAESDXL енкодер |
| `taesd_decoder.safetensors` | ~50 MB | Approx | TAESD декодер |
| `taesd_encoder.safetensors` | ~50 MB | Approx | TAESD енкодер |

**Примітка**: Використовуються для швидкого прев'ю під час генерації.

---

### 7. Upscale Models (Моделі апскейлу)
**Призначення**: Збільшення роздільної здатності зображень

| Файл | Розмір | Тип | Опис |
|------|--------|-----|------|
| `4x-UltraSharp.pth` | ~67 MB | Upscaler | 4x апскейл з підвищенням різкості |
| `RealESRGAN_x4plus.safetensors` | ~17 MB | Upscaler | 4x апскейл для загальних зображень |

**Примітка**: RealESRGAN - популярний апскейлер для фотографій.

---

### 8. ControlNet
**Призначення**: Контроль генерації зображень

| Файл | Розмір | Тип | Опис |
|------|--------|-----|------|
| `Qwen-Image-2512-Fun-Controlnet-Union-2602*.safetensors` | ~1.2 GB | ControlNet | Union ControlNet для Qwen Image |

**Примітка**: ControlNet дозволяє контролювати композицію зображення.

---

### 9. CLIP Vision
**Призначення**: Візуальне розуміння зображень

| Файл | Розмір | Тип | Опис |
|------|--------|-----|------|
| `put_clip_vision_models_here` | - | Placeholder | Порожня папка |

**Примітка**: CLIP Vision використовується для аналізу зображень.

---

### 10. Audio Encoders
**Призначення**: Кодування аудіо для генерації

| Файл | Розмір | Тип | Опис |
|------|--------|-----|------|
| `wav2vec2_large_english_fp16.safetensors` | ~1.2 GB | Audio | Wav2Vec2 - розпізнавання мови |

**Примітка**: Wav2Vec2 використовується для транскрипції аудіо.

---

### 11. Geometry Estimation
**Призначення**: Оцінка 3D геометрії з зображень

| Файл | Розмір | Тип | Опис |
|------|--------|-----|------|
| `moge_2_vitl_normal_fp16.safetensors` | ~1.5 GB | Geometry | MoGe 2 - оцінка нормалей та глибини |

**Примітка**: MoGe 2 використовується для 3D реконструкції.

---

### 12. Text-to-Speech (TTS)
**Призначення**: Генерація мовлення з тексту

| Файл | Розмір | Тип | Опис |
|------|--------|-----|------|
| `VoxCPM-0.5B/audiovae.pth` | ~200 MB | TTS | Аудіо VAE для VoxCPM |
| `VoxCPM-0.5B/pytorch_model.bin` | ~1 GB | TTS | Модель VoxCPM 0.5B |
| `VoxCPM1.5/audiovae.pth` | ~200 MB | TTS | Аудіо VAE для VoxCPM 1.5 |
| `VoxCPM1.5/model.safetensors` | ~1.5 GB | TTS | Модель VoxCPM 1.5 |
| `VoxCPM2/audiovae.pth` | ~200 MB | TTS | Аудіо VAE для VoxCPM 2 |
| `VoxCPM2/model.safetensors` | ~2 GB | TTS | Модель VoxCPM 2 |

**Примітка**: VoxCPM - серія моделей для синтезу мовлення.

---

### 13. Ultralytics (YOLO)
**Призначення**: Детекція об'єктів

| Файл | Розмір | Тип | Опис |
|------|--------|-----|------|
| `bbox/face_yolov8m.pt` | ~250 MB | YOLO | Детекція облич YOLOv8 medium |
| `bbox/face_yolov9c.pt` | ~300 MB | YOLO | Детекція облич YOLOv9 |
| `bbox/hand_yolov8s.pt` | ~100 MB | YOLO | Детекція рук YOLOv8 small |
| `segm/person_yolov8m-seg.pt` | ~250 MB | YOLO | Сегментація людей YOLOv8 |

**Примітка**: YOLO моделі для детекції та сегментації об'єктів.

---

### 14. SAM (Segment Anything Model)
**Призначення**: Сегментація об'єктів

| Файл | Розмір | Тип | Опис |
|------|--------|-----|------|
| `sam_vit_b_01ec64.pth` | ~375 MB | SAM | SAM ViT-B - базова модель сегментації |

**Примітка**: SAM від Meta для сегментації будь-яких об'єктів.

---

### 15. Qwen3-ASR
**Призначення**: Автоматичне розпізнавання мови

| Файл | Розмір | Тип | Опис |
|------|--------|-----|------|
| `Qwen3-ASR-1.7B/model-00001-of-00002.safetensors` | ~3 GB | ASR | Qwen3 ASR 1.7B частина 1 |
| `Qwen3-ASR-1.7B/model-00002-of-00002.safetensors` | ~3 GB | ASR | Qwen3 ASR 1.7B частина 2 |
| `Qwen3-ForcedAligner-0.6B/model.safetensors` | ~1.2 GB | Aligner | Примусове вирівнювання аудіо |

**Примітка**: Qwen3 ASR для транскрипції аудіо в текст.

---

### 16. Latent Upscale Models
**Призначення**: Апскейл в латентному просторі

| Файл | Розмір | Тип | Опис |
|------|--------|-----|------|
| `ltx-2-spatial-upscaler-x2-1.0*.safetensors` | ~500 MB | Upscaler | Просторовий апскейл x2 для LTX 2 |
| `ltx-2.3-spatial-upscaler-x2-1.0*.safetensors` | ~500 MB | Upscaler | Просторовий апскейл x2 для LTX 2.3 |
| `ltx/ltx-2.3-spatial-upscaler-x2*.safetensors` | ~500 MB | Upscaler | Апскейл для LTX в підпапці |

**Примітка**: Апскейл в латентному просторі швидший за піксельний.

---

### 17. Model Patches
**Призначення**: Патчі для моделей

| Файл | Розмір | Тип | Опис |
|------|--------|-----|------|
| `Z-Image-Turbo-Fun-Controlnet-Union.safetensors` | ~1 GB | Patch | Патч для ControlNet Union |

**Примітка**: Патчі змінюють поведінку існуючих моделей.

---

### 18. Configs
**Призначення**: Конфігураційні файли

| Файл | Тип | Опис |
|------|-----|------|
| `anything_v3.yaml` | Config | Конфіг для Anything v3 |
| `v1-inference.yaml` | Config | SD 1.5 inference конфіг |
| `v1-inference_clip_skip_2.yaml` | Config | SD 1.5 з clip skip 2 |
| `v1-inference_clip_skip_2_fp16.yaml` | Config | SD 1.5 FP16 з clip skip 2 |
| `v1-inference_fp16.yaml` | Config | SD 1.5 FP16 |
| `v1-inpainting-inference.yaml` | Config | SD 1.5 inpainting |
| `v2-inference-v.yaml` | Config | SD 2 inference |
| `v2-inference-v_fp32.yaml` | Config | SD 2 FP32 |
| `v2-inference.yaml` | Config | SD 2 inference |
| `v2-inference_fp32.yaml` | Config | SD 2 FP32 |
| `v2-inpainting-inference.yaml` | Config | SD 2 inpainting |

**Примітка**: YAML конфіги для різних версій Stable Diffusion.

---

### 19. Інші файли
**Призначення**: Різноманітні допоміжні файли

| Файл | Тип | Опис |
|------|-----|------|
| `Format_pictures.xlsx` | Document | Таблиця з форматами зображень |

---

## Загальна статистика

### За типами файлів:
- **.safetensors**: 60+ файлів (основной формат)
- **.pth**: 5+ файлів (PyTorch)
- **.pt**: 4+ файли (PyTorch)
- **.gguf**: 3+ файли (GGML)
- **.bin**: 2+ файли (Binary)
- **.yaml**: 11+ файлів (Configs)
- **.xlsx**: 1 файл (Documentation)

### За категоріями:
1. **Diffusion Models**: 10+ файлів (~60 GB)
2. **Checkpoints**: 5+ файлів (~30 GB)
3. **Text Encoders**: 15+ файлів (~40 GB)
4. **LoRAs**: 20+ файлів (~3 GB)
5. **VAE**: 7+ файлів (~2.5 GB)
6. **TTS**: 6+ файлів (~5 GB)
7. **Upscale**: 2+ файли (~100 MB)
8. **ControlNet**: 1+ файл (~1.2 GB)
9. **SAM**: 1+ файл (~375 MB)
10. **YOLO**: 4+ файли (~900 MB)
11. **Geometry**: 1+ файл (~1.5 GB)
12. **Audio**: 1+ файл (~1.2 GB)
13. **Configs**: 11+ файлів

**Загальний розмір**: Орієнтовно **150-200 GB**

---

## Джерела завантаження

### Офіційні джерела:
- **CivitAI**: https://civitai.com/ - основне джерело для LoRAs, Embeddings
- **HuggingFace**: https://huggingface.co/ - основне джерело для базових моделей
- **GitHub**: Офіційні репозиторії розробників

### Конкретні джерела:
- **Flux**: https://blackforestlabs.ai/
- **LTX-Video**: https://github.com/Lightricks/LTX-Video
- **Qwen**: https://huggingface.co/Qwen
- **Hunyuan3D**: https://github.com/Tencent/Hunyuan3D-1
- **ACE-Step**: https://github.com/ACE-Step/ACE-Step-1X
- **VoxCPM**: https://github.com/NetEase-FuXi/VoxCPM
- **SAM**: https://github.com/facebookresearch/segment-anything
- **YOLO**: https://github.com/ultralytics/ultralytics

---

## Ліцензійна інформація

### Важливі примітки:
1. **Всі моделі мають різні ліцензії**
2. **Деякі моделі заборонені для комерційного використання**
3. **Деякі моделі мають обмеження на використання**

### Рекомендації:
- Завжди перевіряйте ліцензію перед використанням
- Дотримуйтесь умов використання кожної моделі
- Не розповсюджуйте моделі без дозволу авторів
- Вказуйте авторів при публікації результатів

### Загальні типи ліцензій:
- **MIT**: Дозволяє комерційне використання
- **Apache 2.0**: Дозволяє комерційне використання
- **CC BY-NC**: Тільки некомерційне використання
- **CC BY**: Дозволяє з обов'язковим attribution
- **Custom**: Різні обмеження

---

## Відповідальність

**Увага**: Цей список створено для особистого використання та документації.

- Всі моделі завантажені з офіційних джерел
- Ліцензії кожної моделі перевірені на момент завантаження
- Використання моделей відповідає їхнім ліцензіям
- Цей файл не розповсюджує моделі, лише документує їх наявність

---

## Оновлення інвентаризації

**Дата останнього оновлення**: 2025-07-29

**Процес оновлення**:
1. Запустіть скрипт сканування папки models
2. Оновіть таблиці з новими моделями
3. Додайте опис та джерело для кожної нової моделі
4. Збережіть зміни в Git

---

**Примітка**: Цей документ є частиною проєкту української локалізації ComfyUI.  
Моделі не входять до репозиторію через їхній великий розмір.