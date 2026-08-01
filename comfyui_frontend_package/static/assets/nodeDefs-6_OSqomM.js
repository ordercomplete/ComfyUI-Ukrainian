//#region src/locales/uk/nodeDefs.json
var AddNoise = {
	"display_name": "Додати Шум",
	"inputs": {
		"model": { "name": "Модель" },
		"noise": { "name": "Шум" },
		"sigmas": { "name": "Сигми" },
		"latent_image": { "name": "Латентне зображення" }
	},
	"outputs": { "0": {} }
};
var AddTextPrefix = {
	"display_name": "Додати Текст Prefix",
	"inputs": {
		"texts": { "name": "Тексти" },
		"prefix": { "name": "Префікс" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var AddTextSuffix = {
	"display_name": "Додати Текст Suffix",
	"inputs": {
		"texts": { "name": "Тексти" },
		"suffix": { "name": "Суфікс" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var AdjustBrightness = {
	"display_name": "Adjust Яскравість",
	"inputs": {
		"images": { "name": "Зображення" },
		"factor": { "name": "Коефіцієнт" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var AdjustContrast = {
	"display_name": "Adjust Контраст",
	"inputs": {
		"images": { "name": "Зображення" },
		"factor": { "name": "Коефіцієнт" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var AlignYourStepsScheduler = {
	"display_name": "Вирівняти Your Steps Scheduler",
	"inputs": {
		"model_type": { "name": "Тип моделі" },
		"steps": { "name": "Кроки" },
		"denoise": { "name": "Денойз" }
	},
	"outputs": { "0": {} }
};
var AnimaLLLiteApply = {
	"display_name": "Anima Lite Застосувати",
	"inputs": {
		"model": { "name": "Модель" },
		"model_patch": { "name": "model_patch" },
		"image": { "name": "Зображення" },
		"strength": { "name": "Сила" },
		"start_percent": { "name": "start_percent" },
		"end_percent": { "name": "end_percent" },
		"mask": { "name": "Маска" }
	}
};
var APG = {
	"display_name": "APG",
	"inputs": {
		"model": { "name": "Модель" },
		"eta": { "name": "eta" },
		"norm_threshold": { "name": "norm_threshold" },
		"momentum": { "name": "momentum" }
	},
	"outputs": { "0": {} }
};
var ARVideoI2V = {
	"display_name": "Відео",
	"inputs": {
		"model": { "name": "Модель" },
		"vae": { "name": "VAE" },
		"start_image": { "name": "start_image" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" }
	},
	"outputs": {
		"0": {},
		"1": {}
	}
};
var AudioAdjustVolume = {
	"display_name": "Аудіо Adjust Об'єм",
	"inputs": {
		"audio": { "name": "audio" },
		"volume": { "name": "volume" }
	},
	"outputs": { "0": {} }
};
var AudioConcat = {
	"display_name": "Аудіо Concat",
	"inputs": {
		"audio1": { "name": "audio1" },
		"audio2": { "name": "audio2" },
		"direction": { "name": "direction" }
	},
	"outputs": { "0": {} }
};
var AudioEncoderEncode = {
	"display_name": "Аудіо Encoder Кодувати",
	"inputs": {
		"audio_encoder": { "name": "audio_encoder" },
		"audio": { "name": "audio" }
	},
	"outputs": { "0": {} }
};
var AudioEncoderLoader = {
	"display_name": "Аудіо Encoder Loader",
	"inputs": { "audio_encoder_name": { "name": "audio_encoder_name" } },
	"outputs": { "0": {} }
};
var AudioEqualizer3Band = {
	"display_name": "Аудіо Equalizer Band",
	"inputs": {
		"audio": { "name": "audio" },
		"low_gain_dB": { "name": "low_gain_dB" },
		"low_freq": { "name": "low_freq" },
		"mid_gain_dB": { "name": "mid_gain_dB" },
		"mid_freq": { "name": "mid_freq" },
		"mid_q": { "name": "mid_q" },
		"high_gain_dB": { "name": "high_gain_dB" },
		"high_freq": { "name": "high_freq" }
	},
	"outputs": { "0": {} }
};
var AudioMerge = {
	"display_name": "Аудіо Об'єднати",
	"inputs": {
		"audio1": { "name": "audio1" },
		"audio2": { "name": "audio2" },
		"merge_method": { "name": "merge_method" }
	},
	"outputs": { "0": {} }
};
var BasicGuider = {
	"display_name": "Basic Guider",
	"inputs": {
		"model": { "name": "Модель" },
		"conditioning": { "name": "Кондиціювання" }
	},
	"outputs": { "0": {} }
};
var BasicScheduler = {
	"display_name": "Basic Scheduler",
	"inputs": {
		"model": { "name": "Модель" },
		"scheduler": { "name": "Розклад" },
		"steps": { "name": "Кроки" },
		"denoise": { "name": "Денойз" }
	},
	"outputs": { "0": {} }
};
var BatchImagesNode = {
	"display_name": "Партія Images Node",
	"inputs": { "images": { "name": "Зображення" } },
	"outputs": { "0": {} }
};
var BatchLatentsNode = {
	"display_name": "Партія Latents Node",
	"inputs": { "latents": { "name": "latents" } },
	"outputs": { "0": {} }
};
var BatchMasksNode = {
	"display_name": "Партія Masks Node",
	"inputs": { "masks": { "name": "masks" } },
	"outputs": { "0": {} }
};
var BeebleSwitchXImageEdit = {
	"display_name": "Beeble Перемкнути Зображення Редагувати",
	"inputs": {
		"image": { "name": "Зображення" },
		"prompt": { "name": "Промпт" },
		"alpha_mode": { "name": "alpha_mode" },
		"max_resolution": { "name": "max_resolution" },
		"seed": { "name": "Сід" },
		"reference_image": { "name": "reference_image" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var BeebleSwitchXVideoEdit = {
	"display_name": "Beeble Перемкнути Відео Редагувати",
	"inputs": {
		"video": { "name": "video" },
		"prompt": { "name": "Промпт" },
		"alpha_mode": { "name": "alpha_mode" },
		"max_resolution": { "name": "max_resolution" },
		"seed": { "name": "Сід" },
		"reference_image": { "name": "reference_image" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var BerniniConditioning = {
	"display_name": "Bernini Кондиціювання",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" },
		"source_video": { "name": "source_video" },
		"reference_video": { "name": "reference_video" },
		"reference_images": { "name": "reference_images" },
		"ref_max_size": { "name": "ref_max_size" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var BetaSamplingScheduler = {
	"display_name": "Beta Семплування Scheduler",
	"inputs": {
		"model": { "name": "Модель" },
		"steps": { "name": "Кроки" },
		"alpha": { "name": "alpha" },
		"beta": { "name": "beta" }
	},
	"outputs": { "0": {} }
};
var BriaImageEditNode = {
	"display_name": "Bria Зображення Редагувати Node",
	"inputs": {
		"model": { "name": "Модель" },
		"image": { "name": "Зображення" },
		"prompt": { "name": "Промпт" },
		"negative_prompt": { "name": "Негативний промпт" },
		"structured_prompt": { "name": "structured_prompt" },
		"seed": { "name": "Сід" },
		"guidance_scale": { "name": "guidance_scale" },
		"steps": { "name": "Кроки" },
		"moderation": { "name": "moderation" },
		"mask": { "name": "Маска" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": {
		"0": {},
		"1": { "name": "Вихід 1" }
	}
};
var BriaRemoveImageBackground = {
	"display_name": "Bria Видалити Зображення Фон",
	"inputs": {
		"image": { "name": "Зображення" },
		"moderation": { "name": "moderation" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var BriaRemoveVideoBackground = {
	"display_name": "Bria Видалити Відео Фон",
	"inputs": {
		"video": { "name": "video" },
		"background_color": { "name": "background_color" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var BriaTransparentVideoBackground = {
	"display_name": "Bria Transparent Відео Фон",
	"inputs": {
		"video": { "name": "video" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var BriaVideoGreenScreen = {
	"display_name": "Bria Відео Green Screen",
	"inputs": {
		"video": { "name": "video" },
		"green_shade": { "name": "green_shade" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var BriaVideoReplaceBackground = {
	"display_name": "Bria Відео Замінити Фон",
	"inputs": {
		"video": { "name": "video" },
		"seed": { "name": "Сід" },
		"background_image": { "name": "background_image" },
		"background_video": { "name": "background_video" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var BuildJsonPromptIdeogram = {
	"display_name": "Збудувати Json Промпт Ideogram",
	"inputs": {
		"element": { "name": "element" },
		"high_level_description": { "name": "high_level_description" },
		"background": { "name": "background" },
		"style": { "name": "style" },
		"aesthetics": { "name": "aesthetics" },
		"lighting": { "name": "lighting" },
		"medium": { "name": "medium" },
		"color_palette": { "name": "color_palette" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var ByteDance2FirstLastFrameNode = {
	"display_name": "Byte Dance Перший Останній Кадр Node",
	"inputs": {
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"watermark": { "name": "watermark" },
		"first_frame": { "name": "first_frame" },
		"last_frame": { "name": "last_frame" },
		"first_frame_asset_id": { "name": "first_frame_asset_id" },
		"last_frame_asset_id": { "name": "last_frame_asset_id" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_duration": { "name": "model_duration" },
		"model_generate_audio": { "name": "model_generate_audio" },
		"model_prompt": { "name": "model_prompt" },
		"model_ratio": { "name": "model_ratio" },
		"model_resolution": { "name": "model_resolution" }
	},
	"outputs": { "0": {} }
};
var ByteDance2ReferenceNode = {
	"display_name": "Byte Dance Reference Node",
	"inputs": {
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"watermark": { "name": "watermark" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_auto_downscale": { "name": "model_auto_downscale" },
		"model_auto_upscale": { "name": "model_auto_upscale" },
		"model_duration": { "name": "model_duration" },
		"model_generate_audio": { "name": "model_generate_audio" },
		"model_prompt": { "name": "model_prompt" },
		"model_ratio": { "name": "model_ratio" },
		"model_resolution": { "name": "model_resolution" }
	},
	"outputs": { "0": {} }
};
var ByteDance2TextToVideoNode = {
	"display_name": "Byte Dance Текст To Відео Node",
	"inputs": {
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"watermark": { "name": "watermark" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_duration": { "name": "model_duration" },
		"model_generate_audio": { "name": "model_generate_audio" },
		"model_prompt": { "name": "model_prompt" },
		"model_ratio": { "name": "model_ratio" },
		"model_resolution": { "name": "model_resolution" }
	},
	"outputs": { "0": {} }
};
var ByteDanceCreateImageAsset = {
	"display_name": "Byte Dance Створити Зображення Asset",
	"inputs": {
		"image": { "name": "Зображення" },
		"group_id": { "name": "group_id" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var ByteDanceCreateVideoAsset = {
	"display_name": "Byte Dance Створити Відео Asset",
	"inputs": {
		"video": { "name": "video" },
		"group_id": { "name": "group_id" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var ByteDanceFirstLastFrameNode = {
	"display_name": "Byte Dance Перший Останній Кадр Node",
	"inputs": {
		"model": { "name": "Модель" },
		"prompt": { "name": "Промпт" },
		"first_frame": { "name": "first_frame" },
		"last_frame": { "name": "last_frame" },
		"resolution": { "name": "resolution" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"duration": { "name": "Тривалість" },
		"seed": { "name": "Сід" },
		"camera_fixed": { "name": "camera_fixed" },
		"watermark": { "name": "watermark" },
		"generate_audio": { "name": "generate_audio" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var ByteDanceImageNode = {
	"display_name": "Byte Dance Зображення Node",
	"inputs": {
		"model": { "name": "Модель" },
		"prompt": { "name": "Промпт" },
		"size_preset": { "name": "size_preset" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"seed": { "name": "Сід" },
		"guidance_scale": { "name": "guidance_scale" },
		"watermark": { "name": "watermark" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var ByteDanceImageReferenceNode = {
	"display_name": "Byte Dance Зображення Reference Node",
	"inputs": {
		"model": { "name": "Модель" },
		"prompt": { "name": "Промпт" },
		"images": { "name": "Зображення" },
		"resolution": { "name": "resolution" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"duration": { "name": "Тривалість" },
		"seed": { "name": "Сід" },
		"watermark": { "name": "watermark" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var ByteDanceImageToVideoNode = {
	"display_name": "Byte Dance Зображення To Відео Node",
	"inputs": {
		"model": { "name": "Модель" },
		"prompt": { "name": "Промпт" },
		"image": { "name": "Зображення" },
		"resolution": { "name": "resolution" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"duration": { "name": "Тривалість" },
		"seed": { "name": "Сід" },
		"camera_fixed": { "name": "camera_fixed" },
		"watermark": { "name": "watermark" },
		"generate_audio": { "name": "generate_audio" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var ByteDanceSeedAudio = {
	"display_name": "Byte Dance Сід Аудіо",
	"inputs": {
		"text_prompt": { "name": "text_prompt" },
		"reference_mode": { "name": "reference_mode" },
		"sample_rate": { "name": "sample_rate" },
		"speech_rate": { "name": "speech_rate" },
		"loudness_rate": { "name": "loudness_rate" },
		"pitch_rate": { "name": "pitch_rate" },
		"seed": { "name": "Сід" },
		"model": { "name": "Модель" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var ByteDanceSeedNode = {
	"display_name": "Byte Dance Сід Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"system_prompt": { "name": "system_prompt" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_temperature": { "name": "model_temperature" }
	},
	"outputs": { "0": {} }
};
var ByteDanceSeedreamNode = {
	"display_name": "Byte Dance Seedream Node",
	"inputs": {
		"model": { "name": "Модель" },
		"prompt": { "name": "Промпт" },
		"size_preset": { "name": "size_preset" },
		"image": { "name": "Зображення" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"sequential_image_generation": { "name": "sequential_image_generation" },
		"max_images": { "name": "max_images" },
		"seed": { "name": "Сід" },
		"watermark": { "name": "watermark" },
		"fail_on_partial": { "name": "fail_on_partial" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var ByteDanceSeedreamNodeV2 = {
	"display_name": "Byte Dance Seedream Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"watermark": { "name": "watermark" },
		"thinking": { "name": "thinking" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_height": { "name": "model_height" },
		"model_size_preset": { "name": "model_size_preset" },
		"model_width": { "name": "model_width" }
	},
	"outputs": { "0": {} }
};
var ByteDanceTextToVideoNode = {
	"display_name": "Byte Dance Текст To Відео Node",
	"inputs": {
		"model": { "name": "Модель" },
		"prompt": { "name": "Промпт" },
		"resolution": { "name": "resolution" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"duration": { "name": "Тривалість" },
		"seed": { "name": "Сід" },
		"camera_fixed": { "name": "camera_fixed" },
		"watermark": { "name": "watermark" },
		"generate_audio": { "name": "generate_audio" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var Canny = {
	"display_name": "Canny",
	"inputs": {
		"image": { "name": "Зображення" },
		"low_threshold": { "name": "low_threshold" },
		"high_threshold": { "name": "high_threshold" }
	},
	"outputs": { "0": {} }
};
var CaseConverter = {
	"display_name": "Case Converter",
	"inputs": {
		"string": { "name": "Рядок" },
		"mode": { "name": "Режим" }
	},
	"outputs": { "0": {} }
};
var CenterCropImages = {
	"display_name": "Центр Обрізати Images",
	"inputs": {
		"images": { "name": "Зображення" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var CFGGuider = {
	"display_name": "Guider",
	"inputs": {
		"model": { "name": "Модель" },
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"cfg": { "name": "CFG" }
	},
	"outputs": { "0": {} }
};
var CFGNorm = {
	"display_name": "Norm",
	"inputs": {
		"model": { "name": "Модель" },
		"strength": { "name": "Сила" },
		"pre_cfg": { "name": "pre_cfg" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var CFGOverride = {
	"display_name": "Override",
	"inputs": {
		"model": { "name": "Модель" },
		"cfg": { "name": "CFG" },
		"start_percent": { "name": "start_percent" },
		"end_percent": { "name": "end_percent" }
	},
	"outputs": { "0": {} }
};
var CFGZeroStar = {
	"display_name": "Zero Star",
	"inputs": { "model": { "name": "Модель" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var CheckpointLoader = {
	"display_name": "Checkpoint Loader",
	"inputs": {
		"config_name": { "name": "config_name" },
		"ckpt_name": { "name": "ckpt_name" }
	}
};
var CheckpointLoaderSimple = {
	"display_name": "Checkpoint Loader Simple",
	"inputs": { "ckpt_name": { "name": "ckpt_name" } },
	"outputs": {
		"0": {},
		"1": {},
		"2": {}
	}
};
var CheckpointSave = {
	"display_name": "Checkpoint Зберегти",
	"inputs": {
		"model": { "name": "Модель" },
		"clip": { "name": "CLIP" },
		"vae": { "name": "VAE" },
		"filename_prefix": { "name": "filename_prefix" }
	}
};
var ChromaRadianceOptions = {
	"display_name": "Chroma Radiance Опції",
	"inputs": {
		"model": { "name": "Модель" },
		"preserve_wrapper": { "name": "preserve_wrapper" },
		"start_sigma": { "name": "start_sigma" },
		"end_sigma": { "name": "end_sigma" },
		"nerf_tile_size": { "name": "nerf_tile_size" },
		"force_sequential_txt_ids": { "name": "force_sequential_txt_ids" }
	},
	"outputs": { "0": {} }
};
var ClaudeNode = {
	"display_name": "Claude Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"images": { "name": "Зображення" },
		"system_prompt": { "name": "system_prompt" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_max_tokens": { "name": "model_max_tokens" },
		"model_reasoning_effort": { "name": "model_reasoning_effort" }
	},
	"outputs": { "0": {} }
};
var CLIPAttentionMultiply = {
	"display_name": "Attention Multiply",
	"inputs": {
		"clip": { "name": "CLIP" },
		"q": { "name": "q" },
		"k": { "name": "k" },
		"v": { "name": "v" },
		"out": { "name": "out" }
	},
	"outputs": { "0": {} }
};
var CLIPLoader = {
	"display_name": "Loader",
	"inputs": {
		"clip_name": { "name": "clip_name" },
		"type": { "name": "type" },
		"device": { "name": "device" }
	}
};
var CLIPMergeAdd = {
	"display_name": "Об'єднати Додати",
	"inputs": {
		"clip1": { "name": "clip1" },
		"clip2": { "name": "clip2" }
	}
};
var CLIPMergeSimple = {
	"display_name": "Об'єднати Simple",
	"inputs": {
		"clip1": { "name": "clip1" },
		"clip2": { "name": "clip2" },
		"ratio": { "name": "Відношення" }
	}
};
var CLIPMergeSubtract = {
	"display_name": "Об'єднати Subtract",
	"inputs": {
		"clip1": { "name": "clip1" },
		"clip2": { "name": "clip2" },
		"multiplier": { "name": "multiplier" }
	}
};
var CLIPSave = {
	"display_name": "Зберегти",
	"inputs": {
		"clip": { "name": "CLIP" },
		"filename_prefix": { "name": "filename_prefix" }
	}
};
var CLIPSetLastLayer = {
	"display_name": "Множина Останній Шар",
	"inputs": {
		"clip": { "name": "CLIP" },
		"stop_at_clip_layer": { "name": "stop_at_clip_layer" }
	}
};
var CLIPTextEncode = {
	"display_name": "Текст Кодувати",
	"inputs": {
		"text": { "name": "Текст" },
		"clip": { "name": "CLIP" }
	},
	"outputs": { "0": {} }
};
var CLIPTextEncodeControlnet = {
	"display_name": "Текст Кодувати Controlnet",
	"inputs": {
		"clip": { "name": "CLIP" },
		"conditioning": { "name": "Кондиціювання" },
		"text": { "name": "Текст" }
	},
	"outputs": { "0": {} }
};
var CLIPTextEncodeFlux = {
	"display_name": "Текст Кодувати Flux",
	"inputs": {
		"clip": { "name": "CLIP" },
		"clip_l": { "name": "clip_l" },
		"t5xxl": { "name": "t5xxl" },
		"guidance": { "name": "Напрям" }
	},
	"outputs": { "0": {} }
};
var CLIPTextEncodeHiDream = {
	"display_name": "Текст Кодувати Hi Dream",
	"inputs": {
		"clip": { "name": "CLIP" },
		"clip_l": { "name": "clip_l" },
		"clip_g": { "name": "clip_g" },
		"t5xxl": { "name": "t5xxl" },
		"llama": { "name": "llama" }
	},
	"outputs": { "0": {} }
};
var CLIPTextEncodeHunyuanDiT = {
	"display_name": "Текст Кодувати Hunyuan Di",
	"inputs": {
		"clip": { "name": "CLIP" },
		"bert": { "name": "bert" },
		"mt5xl": { "name": "mt5xl" }
	},
	"outputs": { "0": {} }
};
var CLIPTextEncodeKandinsky5 = {
	"display_name": "Текст Кодувати Kandinsky",
	"inputs": {
		"clip": { "name": "CLIP" },
		"clip_l": { "name": "clip_l" },
		"qwen25_7b": { "name": "qwen25_7b" }
	},
	"outputs": { "0": {} }
};
var CLIPTextEncodeLumina2 = {
	"display_name": "Текст Кодувати Lumina",
	"inputs": {
		"system_prompt": { "name": "system_prompt" },
		"user_prompt": { "name": "user_prompt" },
		"clip": { "name": "CLIP" }
	},
	"outputs": { "0": {} }
};
var CLIPTextEncodePixArtAlpha = {
	"display_name": "Текст Кодувати Pix Art Альфа",
	"inputs": {
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"text": { "name": "Текст" },
		"clip": { "name": "CLIP" }
	},
	"outputs": { "0": {} }
};
var CLIPTextEncodeSD3 = {
	"display_name": "Текст Кодувати",
	"inputs": {
		"clip": { "name": "CLIP" },
		"clip_l": { "name": "clip_l" },
		"clip_g": { "name": "clip_g" },
		"t5xxl": { "name": "t5xxl" },
		"empty_padding": { "name": "empty_padding" }
	},
	"outputs": { "0": {} }
};
var CLIPTextEncodeSDXL = {
	"display_name": "Текст Кодувати",
	"inputs": {
		"clip": { "name": "CLIP" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"crop_w": { "name": "crop_w" },
		"crop_h": { "name": "crop_h" },
		"target_width": { "name": "target_width" },
		"target_height": { "name": "target_height" },
		"text_g": { "name": "text_g" },
		"text_l": { "name": "text_l" }
	},
	"outputs": { "0": {} }
};
var CLIPTextEncodeSDXLRefiner = {
	"display_name": "Текст Кодувати Refiner",
	"inputs": {
		"ascore": { "name": "ascore" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"text": { "name": "Текст" },
		"clip": { "name": "CLIP" }
	},
	"outputs": { "0": {} }
};
var CLIPVisionEncode = {
	"display_name": "Vision Кодувати",
	"inputs": {
		"clip_vision": { "name": "clip_vision" },
		"image": { "name": "Зображення" },
		"crop": { "name": "crop" }
	}
};
var CLIPVisionLoader = {
	"display_name": "Vision Loader",
	"inputs": { "clip_name": { "name": "clip_name" } }
};
var ColorToRGBInt = {
	"display_name": "Колір To Int",
	"inputs": { "color": { "name": "color" } },
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var ColorTransfer = {
	"display_name": "Колір Transfer",
	"inputs": {
		"image_target": { "name": "Ціль зображень" },
		"image_ref": { "name": "image_ref" },
		"method": { "name": "method" },
		"source_stats": { "name": "source_stats" },
		"strength": { "name": "Сила" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var CombineHooks2 = {
	"display_name": "Combine Hooks",
	"inputs": {
		"hooks_A": { "name": "hooks_A" },
		"hooks_B": { "name": "hooks_B" }
	}
};
var CombineHooks4 = {
	"display_name": "Combine Hooks",
	"inputs": {
		"hooks_A": { "name": "hooks_A" },
		"hooks_B": { "name": "hooks_B" },
		"hooks_C": { "name": "hooks_C" },
		"hooks_D": { "name": "hooks_D" }
	}
};
var CombineHooks8 = {
	"display_name": "Combine Hooks",
	"inputs": {
		"hooks_A": { "name": "hooks_A" },
		"hooks_B": { "name": "hooks_B" },
		"hooks_C": { "name": "hooks_C" },
		"hooks_D": { "name": "hooks_D" },
		"hooks_E": { "name": "hooks_E" },
		"hooks_F": { "name": "hooks_F" },
		"hooks_G": { "name": "hooks_G" },
		"hooks_H": { "name": "hooks_H" }
	}
};
var ComfyAndNode = {
	"display_name": "Comfy And Node",
	"inputs": { "values": { "name": "values" } },
	"outputs": { "0": {} }
};
var ComfyMathExpression = {
	"display_name": "Comfy Math Expression",
	"inputs": {
		"expression": { "name": "expression" },
		"values": { "name": "values" }
	},
	"outputs": {
		"0": {},
		"1": {},
		"2": { "name": "Вихід 2" }
	}
};
var ComfyNotNode = {
	"display_name": "Comfy Not Node",
	"inputs": { "value": { "name": "Значення" } },
	"outputs": { "0": {} }
};
var ComfyNumberConvert = {
	"display_name": "Comfy Число Конвертувати",
	"inputs": { "value": { "name": "Значення" } },
	"outputs": {
		"0": {},
		"1": {}
	}
};
var ComfyOrNode = {
	"display_name": "Comfy Or Node",
	"inputs": { "values": { "name": "values" } },
	"outputs": { "0": {} }
};
var ComfySwitchNode = {
	"display_name": "Comfy Перемкнути Node",
	"inputs": {
		"switch": { "name": "switch" },
		"on_false": { "name": "on_false" },
		"on_true": { "name": "on_true" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var ConditioningAverage = {
	"display_name": "Кондиціювання Average",
	"inputs": {
		"conditioning_to": { "name": "conditioning_to" },
		"conditioning_from": { "name": "conditioning_from" },
		"conditioning_to_strength": { "name": "conditioning_to_strength" }
	}
};
var ConditioningCombine = {
	"display_name": "Кондиціювання Combine",
	"inputs": {
		"conditioning_1": { "name": "conditioning_1" },
		"conditioning_2": { "name": "conditioning_2" }
	}
};
var ConditioningConcat = {
	"display_name": "Кондиціювання Concat",
	"inputs": {
		"conditioning_to": { "name": "conditioning_to" },
		"conditioning_from": { "name": "conditioning_from" }
	}
};
var ConditioningMultiply = {
	"display_name": "Кондиціювання Multiply",
	"inputs": {
		"conditioning": { "name": "Кондиціювання" },
		"multiplier": { "name": "multiplier" }
	}
};
var ConditioningSetArea = {
	"display_name": "Кондиціювання Множина Площа",
	"inputs": {
		"conditioning": { "name": "Кондиціювання" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"x": { "name": "x" },
		"y": { "name": "y" },
		"strength": { "name": "Сила" }
	}
};
var ConditioningSetAreaPercentage = {
	"display_name": "Кондиціювання Множина Площа Відсоток",
	"inputs": {
		"conditioning": { "name": "Кондиціювання" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"x": { "name": "x" },
		"y": { "name": "y" },
		"strength": { "name": "Сила" }
	}
};
var ConditioningSetAreaPercentageVideo = {
	"display_name": "Кондиціювання Множина Площа Відсоток Відео",
	"inputs": {
		"conditioning": { "name": "Кондиціювання" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"temporal": { "name": "temporal" },
		"x": { "name": "x" },
		"y": { "name": "y" },
		"z": { "name": "z" },
		"strength": { "name": "Сила" }
	}
};
var ConditioningSetAreaStrength = {
	"display_name": "Кондиціювання Множина Площа Strength",
	"inputs": {
		"conditioning": { "name": "Кондиціювання" },
		"strength": { "name": "Сила" }
	}
};
var ConditioningSetDefaultCombine = {
	"display_name": "Кондиціювання Множина Default Combine",
	"inputs": {
		"cond": { "name": "cond" },
		"cond_DEFAULT": { "name": "cond_DEFAULT" },
		"hooks": { "name": "hooks" }
	}
};
var ConditioningSetMask = {
	"display_name": "Кондиціювання Множина Маска",
	"inputs": {
		"conditioning": { "name": "Кондиціювання" },
		"mask": { "name": "Маска" },
		"strength": { "name": "Сила" },
		"set_cond_area": { "name": "set_cond_area" }
	}
};
var ConditioningSetProperties = {
	"display_name": "Кондиціювання Множина Properties",
	"inputs": {
		"cond_NEW": { "name": "cond_NEW" },
		"strength": { "name": "Сила" },
		"set_cond_area": { "name": "set_cond_area" },
		"mask": { "name": "Маска" },
		"hooks": { "name": "hooks" },
		"timesteps": { "name": "timesteps" }
	}
};
var ConditioningSetPropertiesAndCombine = {
	"display_name": "Кондиціювання Множина Properties And Combine",
	"inputs": {
		"cond": { "name": "cond" },
		"cond_NEW": { "name": "cond_NEW" },
		"strength": { "name": "Сила" },
		"set_cond_area": { "name": "set_cond_area" },
		"mask": { "name": "Маска" },
		"hooks": { "name": "hooks" },
		"timesteps": { "name": "timesteps" }
	}
};
var ConditioningSetTimestepRange = {
	"display_name": "Кондиціювання Множина Timestep Range",
	"inputs": {
		"conditioning": { "name": "Кондиціювання" },
		"start": { "name": "Почати" },
		"end": { "name": "Кінець" }
	}
};
var ConditioningStableAudio = {
	"display_name": "Кондиціювання Stable Аудіо",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"seconds_start": { "name": "seconds_start" },
		"seconds_total": { "name": "seconds_total" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var ConditioningTimestepsRange = {
	"display_name": "Кондиціювання Timesteps Range",
	"inputs": {
		"start_percent": { "name": "start_percent" },
		"end_percent": { "name": "end_percent" }
	},
	"outputs": {
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var ConditioningZeroOut = {
	"display_name": "Кондиціювання Zero Out",
	"inputs": { "conditioning": { "name": "Кондиціювання" } }
};
var ContextWindowsManual = {
	"display_name": "Context Windows Manual",
	"inputs": {
		"model": { "name": "Модель" },
		"context_length": { "name": "context_length" },
		"context_overlap": { "name": "context_overlap" },
		"context_schedule": { "name": "context_schedule" },
		"context_stride": { "name": "context_stride" },
		"closed_loop": { "name": "closed_loop" },
		"fuse_method": { "name": "fuse_method" },
		"dim": { "name": "dim" },
		"freenoise": { "name": "freenoise" },
		"cond_retain_index_list": { "name": "cond_retain_index_list" },
		"split_conds_to_windows": { "name": "split_conds_to_windows" },
		"latent_retain_index_list": { "name": "latent_retain_index_list" },
		"causal_window_fix": { "name": "causal_window_fix" }
	},
	"outputs": { "0": {} }
};
var ControlNetApply = {
	"display_name": "Керувати Net Застосувати",
	"inputs": {
		"conditioning": { "name": "Кондиціювання" },
		"control_net": { "name": "ControlNet" },
		"image": { "name": "Зображення" },
		"strength": { "name": "Сила" }
	}
};
var ControlNetApplyAdvanced = {
	"display_name": "Керувати Net Застосувати Advanced",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"control_net": { "name": "ControlNet" },
		"image": { "name": "Зображення" },
		"strength": { "name": "Сила" },
		"start_percent": { "name": "start_percent" },
		"end_percent": { "name": "end_percent" },
		"vae": { "name": "VAE" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var ControlNetApplySD3 = {
	"display_name": "Керувати Net Застосувати",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"control_net": { "name": "ControlNet" },
		"vae": { "name": "VAE" },
		"image": { "name": "Зображення" },
		"strength": { "name": "Сила" },
		"start_percent": { "name": "start_percent" },
		"end_percent": { "name": "end_percent" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var ControlNetInpaintingAliMamaApply = {
	"display_name": "Керувати Net Inpainting Ali Mama Застосувати",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"control_net": { "name": "ControlNet" },
		"vae": { "name": "VAE" },
		"image": { "name": "Зображення" },
		"mask": { "name": "Маска" },
		"strength": { "name": "Сила" },
		"start_percent": { "name": "start_percent" },
		"end_percent": { "name": "end_percent" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var ControlNetLoader = {
	"display_name": "Керувати Net Loader",
	"inputs": { "control_net_name": { "name": "control_net_name" } }
};
var ConvertArrayToString = {
	"display_name": "Конвертувати Масив To Рядок",
	"inputs": {
		"array": { "name": "Масив" },
		"indent": { "name": "indent" }
	},
	"outputs": { "0": {} }
};
var ConvertDictionaryToString = {
	"display_name": "Конвертувати Словник To Рядок",
	"inputs": {
		"dictionary": { "name": "dictionary" },
		"indent": { "name": "indent" }
	},
	"outputs": { "0": {} }
};
var CosmosImageToVideoLatent = {
	"display_name": "Cosmos Зображення To Відео Латент",
	"inputs": {
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" },
		"start_image": { "name": "start_image" },
		"end_image": { "name": "end_image" }
	},
	"outputs": { "0": {} }
};
var CosmosPredict2ImageToVideoLatent = {
	"display_name": "Cosmos Predict Зображення To Відео Латент",
	"inputs": {
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" },
		"start_image": { "name": "start_image" },
		"end_image": { "name": "end_image" }
	},
	"outputs": { "0": {} }
};
var CreateBoundingBoxes = {
	"display_name": "Створити Bounding Boxes",
	"inputs": {
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"editor_state": { "name": "editor_state" },
		"background": { "name": "background" },
		"bboxes": { "name": "bboxes" },
		"last_incoming": { "name": "last_incoming" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var CreateCameraInfo = {
	"display_name": "Створити Камера Інформація",
	"inputs": {
		"mode": { "name": "Режим" },
		"target_x": { "name": "target_x" },
		"target_y": { "name": "target_y" },
		"target_z": { "name": "target_z" },
		"roll": { "name": "roll" },
		"fov": { "name": "fov" },
		"zoom": { "name": "zoom" },
		"camera_type": { "name": "camera_type" },
		"mode_distance": { "name": "mode_distance" },
		"mode_pitch": { "name": "mode_pitch" },
		"mode_yaw": { "name": "mode_yaw" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var CreateHookKeyframe = {
	"display_name": "Створити Hook Keyframe",
	"inputs": {
		"strength_mult": { "name": "strength_mult" },
		"start_percent": { "name": "start_percent" },
		"prev_hook_kf": { "name": "prev_hook_kf" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var CreateHookKeyframesFromFloats = {
	"display_name": "Створити Hook Keyframes From Floats",
	"inputs": {
		"floats_strength": { "name": "floats_strength" },
		"start_percent": { "name": "start_percent" },
		"end_percent": { "name": "end_percent" },
		"print_keyframes": { "name": "print_keyframes" },
		"prev_hook_kf": { "name": "prev_hook_kf" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var CreateHookKeyframesInterpolated = {
	"display_name": "Створити Hook Keyframes Interpolated",
	"inputs": {
		"strength_start": { "name": "strength_start" },
		"strength_end": { "name": "strength_end" },
		"interpolation": { "name": "interpolation" },
		"start_percent": { "name": "start_percent" },
		"end_percent": { "name": "end_percent" },
		"keyframes_count": { "name": "keyframes_count" },
		"print_keyframes": { "name": "print_keyframes" },
		"prev_hook_kf": { "name": "prev_hook_kf" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var CreateHookLora = {
	"display_name": "Створити Hook Lora",
	"inputs": {
		"lora_name": { "name": "lora_name" },
		"strength_model": { "name": "strength_model" },
		"strength_clip": { "name": "strength_clip" },
		"prev_hooks": { "name": "prev_hooks" }
	}
};
var CreateHookLoraModelOnly = {
	"display_name": "Створити Hook Lora Модель Only",
	"inputs": {
		"lora_name": { "name": "lora_name" },
		"strength_model": { "name": "strength_model" },
		"prev_hooks": { "name": "prev_hooks" }
	}
};
var CreateHookModelAsLora = {
	"display_name": "Створити Hook Модель As Lora",
	"inputs": {
		"ckpt_name": { "name": "ckpt_name" },
		"strength_model": { "name": "strength_model" },
		"strength_clip": { "name": "strength_clip" },
		"prev_hooks": { "name": "prev_hooks" }
	}
};
var CreateHookModelAsLoraModelOnly = {
	"display_name": "Створити Hook Модель As Lora Модель Only",
	"inputs": {
		"ckpt_name": { "name": "ckpt_name" },
		"strength_model": { "name": "strength_model" },
		"prev_hooks": { "name": "prev_hooks" }
	}
};
var CreateList = {
	"display_name": "Створити Список",
	"inputs": { "inputs": { "name": "Входи" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var CreateVideo = {
	"display_name": "Створити Відео",
	"inputs": {
		"images": { "name": "Зображення" },
		"fps": { "name": "fps" },
		"audio": { "name": "audio" },
		"bit_depth": { "name": "bit_depth" }
	},
	"outputs": { "0": {} }
};
var CropByBBoxes = {
	"display_name": "Обрізати By Boxes",
	"inputs": {
		"image": { "name": "Зображення" },
		"bboxes": { "name": "bboxes" },
		"output_width": { "name": "output_width" },
		"output_height": { "name": "output_height" },
		"padding": { "name": "Відступ" },
		"keep_aspect": { "name": "keep_aspect" }
	},
	"outputs": { "0": {} }
};
var CropMask = {
	"display_name": "Обрізати Маска",
	"inputs": {
		"mask": { "name": "Маска" },
		"x": { "name": "x" },
		"y": { "name": "y" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" }
	},
	"outputs": { "0": {} }
};
var CurveEditor = {
	"display_name": "Крива Editor",
	"inputs": {
		"curve": { "name": "curve" },
		"histogram": { "name": "histogram" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var CustomCombo = {
	"display_name": "Custom Combo",
	"inputs": {
		"choice": { "name": "choice" },
		"index": {},
		"option1": {}
	},
	"outputs": {
		"0": {},
		"1": { "name": "Вихід 1" }
	}
};
var DA3GeometryToMesh = {
	"display_name": "Geometry To Меш",
	"inputs": {
		"da3_geometry": { "name": "da3_geometry" },
		"batch_index": { "name": "batch_index" },
		"decimation": { "name": "decimation" },
		"discontinuity_threshold": { "name": "discontinuity_threshold" },
		"confidence_threshold": { "name": "confidence_threshold" },
		"use_sky_mask": { "name": "use_sky_mask" },
		"texture": { "name": "texture" }
	},
	"outputs": { "0": {} }
};
var DA3Inference = {
	"display_name": "Inference",
	"inputs": {
		"da3_model": { "name": "da3_model" },
		"image": { "name": "Зображення" },
		"resolution": { "name": "resolution" },
		"resize_method": { "name": "resize_method" },
		"mode": { "name": "Режим" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var DA3Render = {
	"display_name": "Рендеринг",
	"inputs": {
		"da3_geometry": { "name": "da3_geometry" },
		"output": { "name": "Вихід" },
		"output_apply_sky_clip": { "name": "output_apply_sky_clip" },
		"output_normalization": { "name": "output_normalization" }
	},
	"outputs": { "0": {} }
};
var DiffControlNetLoader = {
	"display_name": "Diff Керувати Net Loader",
	"inputs": {
		"model": { "name": "Модель" },
		"control_net_name": { "name": "control_net_name" }
	}
};
var DifferentialDiffusion = {
	"display_name": "Differential Diffusion",
	"inputs": {
		"model": { "name": "Модель" },
		"strength": { "name": "Сила" }
	},
	"outputs": { "0": {} }
};
var DiffusersLoader = {
	"display_name": "Diffusers Loader",
	"inputs": { "model_path": { "name": "model_path" } }
};
var DisableNoise = {
	"display_name": "Вимкнути Шум",
	"outputs": { "0": {} }
};
var DrawBBoxes = {
	"display_name": "Малювання Boxes",
	"inputs": {
		"bboxes": { "name": "bboxes" },
		"image": { "name": "Зображення" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var DualCFGGuider = {
	"display_name": "Dual Guider",
	"inputs": {
		"model": { "name": "Модель" },
		"cond1": { "name": "cond1" },
		"cond2": { "name": "cond2" },
		"negative": { "name": "Негативне" },
		"cfg_conds": { "name": "cfg_conds" },
		"cfg_cond2_negative": { "name": "cfg_cond2_negative" },
		"style": { "name": "style" }
	},
	"outputs": { "0": {} }
};
var DualCLIPLoader = {
	"display_name": "Dual Loader",
	"inputs": {
		"clip_name1": { "name": "clip_name1" },
		"clip_name2": { "name": "clip_name2" },
		"type": { "name": "type" },
		"device": { "name": "device" }
	}
};
var DualModelGuider = {
	"display_name": "Dual Модель Guider",
	"inputs": {
		"model": { "name": "Модель" },
		"positive": { "name": "Позитивне" },
		"cfg": { "name": "CFG" },
		"model_negative": { "name": "model_negative" },
		"negative": { "name": "Негативне" }
	},
	"outputs": { "0": {} }
};
var EasyCache = {
	"display_name": "Easy Кеш",
	"inputs": {
		"model": { "name": "Модель" },
		"reuse_threshold": { "name": "reuse_threshold" },
		"start_percent": { "name": "start_percent" },
		"end_percent": { "name": "end_percent" },
		"verbose": { "name": "verbose" }
	},
	"outputs": { "0": {} }
};
var ElevenLabsAudioIsolation = {
	"display_name": "Eleven Labs Аудіо Isolation",
	"inputs": { "audio": { "name": "audio" } },
	"outputs": { "0": {} }
};
var ElevenLabsInstantVoiceClone = {
	"display_name": "Eleven Labs Instant Voice Клонувати",
	"inputs": {
		"files": { "name": "files" },
		"remove_background_noise": { "name": "remove_background_noise" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var ElevenLabsSpeechToSpeech = {
	"display_name": "Eleven Labs Speech To Speech",
	"inputs": {
		"voice": { "name": "voice" },
		"audio": { "name": "audio" },
		"stability": { "name": "stability" },
		"model": { "name": "Модель" },
		"output_format": { "name": "Формат виводу" },
		"seed": { "name": "Сід" },
		"remove_background_noise": { "name": "remove_background_noise" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_similarity_boost": { "name": "model_similarity_boost" },
		"model_speed": { "name": "model_speed" },
		"model_style": { "name": "model_style" },
		"model_use_speaker_boost": { "name": "model_use_speaker_boost" }
	},
	"outputs": { "0": {} }
};
var ElevenLabsSpeechToText = {
	"display_name": "Eleven Labs Speech To Текст",
	"inputs": {
		"audio": { "name": "audio" },
		"model": { "name": "Модель" },
		"language_code": { "name": "language_code" },
		"num_speakers": { "name": "num_speakers" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_diarization_threshold": { "name": "model_diarization_threshold" },
		"model_diarize": { "name": "model_diarize" },
		"model_tag_audio_events": { "name": "model_tag_audio_events" },
		"model_temperature": { "name": "model_temperature" },
		"model_timestamps_granularity": { "name": "model_timestamps_granularity" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var ElevenLabsTextToDialogue = {
	"display_name": "Eleven Labs Текст To Dialogue",
	"inputs": {
		"stability": { "name": "stability" },
		"apply_text_normalization": { "name": "apply_text_normalization" },
		"model": { "name": "Модель" },
		"inputs": { "name": "Входи" },
		"language_code": { "name": "language_code" },
		"seed": { "name": "Сід" },
		"output_format": { "name": "Формат виводу" },
		"control_after_generate": { "name": "control_after_generate" },
		"inputs_text1": { "name": "inputs_text1" }
	},
	"outputs": { "0": {} }
};
var ElevenLabsTextToSoundEffects = {
	"display_name": "Eleven Labs Текст To Sound Effects",
	"inputs": {
		"text": { "name": "Текст" },
		"model": { "name": "Модель" },
		"output_format": { "name": "Формат виводу" },
		"model_duration": { "name": "model_duration" },
		"model_loop": { "name": "model_loop" },
		"model_prompt_influence": { "name": "model_prompt_influence" }
	},
	"outputs": { "0": {} }
};
var ElevenLabsTextToSpeech = {
	"display_name": "Eleven Labs Текст To Speech",
	"inputs": {
		"voice": { "name": "voice" },
		"text": { "name": "Текст" },
		"stability": { "name": "stability" },
		"apply_text_normalization": { "name": "apply_text_normalization" },
		"model": { "name": "Модель" },
		"language_code": { "name": "language_code" },
		"seed": { "name": "Сід" },
		"output_format": { "name": "Формат виводу" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_similarity_boost": { "name": "model_similarity_boost" },
		"model_speed": { "name": "model_speed" },
		"model_style": { "name": "model_style" },
		"model_use_speaker_boost": { "name": "model_use_speaker_boost" }
	},
	"outputs": { "0": {} }
};
var ElevenLabsVoiceSelector = {
	"display_name": "Eleven Labs Voice Selector",
	"inputs": { "voice": { "name": "voice" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var EmptyAceStep1_5LatentAudio = {
	"display_name": "Empty Ace Step Латент Аудіо",
	"inputs": {
		"seconds": { "name": "seconds" },
		"batch_size": { "name": "Розмір партії" }
	},
	"outputs": { "0": {} }
};
var EmptyAceStepLatentAudio = {
	"display_name": "Empty Ace Step Латент Аудіо",
	"inputs": {
		"seconds": { "name": "seconds" },
		"batch_size": { "name": "Розмір партії" }
	},
	"outputs": { "0": {} }
};
var EmptyARVideoLatent = {
	"display_name": "Empty Відео Латент",
	"inputs": {
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" }
	},
	"outputs": { "0": {} }
};
var EmptyAudio = {
	"display_name": "Empty Аудіо",
	"inputs": {
		"duration": { "name": "Тривалість" },
		"sample_rate": { "name": "sample_rate" },
		"channels": { "name": "Канали" }
	},
	"outputs": { "0": {} }
};
var EmptyChromaRadianceLatentImage = {
	"display_name": "Empty Chroma Radiance Латент Зображення",
	"inputs": {
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"batch_size": { "name": "Розмір партії" }
	},
	"outputs": { "0": {} }
};
var EmptyCosmosLatentVideo = {
	"display_name": "Empty Cosmos Латент Відео",
	"inputs": {
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" }
	},
	"outputs": { "0": {} }
};
var EmptyFlux2LatentImage = {
	"display_name": "Empty Flux Латент Зображення",
	"inputs": {
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"batch_size": { "name": "Розмір партії" }
	},
	"outputs": { "0": {} }
};
var EmptyHiDreamO1LatentImage = {
	"display_name": "Empty Hi Dream Латент Зображення",
	"inputs": {
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"batch_size": { "name": "Розмір партії" }
	},
	"outputs": { "0": {} }
};
var EmptyHunyuanImageLatent = {
	"display_name": "Empty Hunyuan Зображення Латент",
	"inputs": {
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"batch_size": { "name": "Розмір партії" }
	},
	"outputs": { "0": {} }
};
var EmptyHunyuanLatentVideo = {
	"display_name": "Empty Hunyuan Латент Відео",
	"inputs": {
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" }
	},
	"outputs": { "0": {} }
};
var EmptyHunyuanVideo15Latent = {
	"display_name": "Empty Hunyuan Відео Латент",
	"inputs": {
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" }
	},
	"outputs": { "0": {} }
};
var EmptyImage = {
	"display_name": "Empty Зображення",
	"inputs": {
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"batch_size": { "name": "Розмір партії" },
		"color": { "name": "color" }
	}
};
var EmptyLatentAudio = {
	"display_name": "Empty Латент Аудіо",
	"inputs": {
		"seconds": { "name": "seconds" },
		"batch_size": { "name": "Розмір партії" }
	},
	"outputs": { "0": {} }
};
var EmptyLatentHunyuan3Dv2 = {
	"display_name": "Empty Латент Hunyuan Dv",
	"inputs": {
		"resolution": { "name": "resolution" },
		"batch_size": { "name": "Розмір партії" }
	},
	"outputs": { "0": {} }
};
var EmptyLatentImage = {
	"display_name": "Empty Латент Зображення",
	"inputs": {
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"batch_size": { "name": "Розмір партії" }
	},
	"outputs": { "0": {} }
};
var EmptyLTXVLatentVideo = {
	"display_name": "Empty Латент Відео",
	"inputs": {
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" }
	},
	"outputs": { "0": {} }
};
var EmptyMochiLatentVideo = {
	"display_name": "Empty Mochi Латент Відео",
	"inputs": {
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" }
	},
	"outputs": { "0": {} }
};
var EmptyQwenImageLayeredLatentImage = {
	"display_name": "Empty Qwen Зображення Layered Латент Зображення",
	"inputs": {
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"layers": { "name": "layers" },
		"batch_size": { "name": "Розмір партії" }
	},
	"outputs": { "0": {} }
};
var EmptySD3LatentImage = {
	"display_name": "Empty Латент Зображення",
	"inputs": {
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"batch_size": { "name": "Розмір партії" }
	},
	"outputs": { "0": {} }
};
var ExponentialScheduler = {
	"display_name": "Exponential Scheduler",
	"inputs": {
		"steps": { "name": "Кроки" },
		"sigma_max": { "name": "sigma_max" },
		"sigma_min": { "name": "sigma_min" }
	},
	"outputs": { "0": {} }
};
var ExtendIntermediateSigmas = {
	"display_name": "Extend Intermediate Sigmas",
	"inputs": {
		"sigmas": { "name": "Сигми" },
		"steps": { "name": "Кроки" },
		"start_at_sigma": { "name": "start_at_sigma" },
		"end_at_sigma": { "name": "end_at_sigma" },
		"spacing": { "name": "spacing" }
	},
	"outputs": { "0": {} }
};
var FeatherMask = {
	"display_name": "Feather Маска",
	"inputs": {
		"mask": { "name": "Маска" },
		"left": { "name": "Ліво" },
		"top": { "name": "Верх" },
		"right": { "name": "Право" },
		"bottom": { "name": "Низ" }
	},
	"outputs": { "0": {} }
};
var File3DToSplat = {
	"display_name": "File To Splat",
	"inputs": { "model_3d": { "name": "model_3d" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var FlipSigmas = {
	"display_name": "Відзеркалити Sigmas",
	"inputs": { "sigmas": { "name": "Сигми" } },
	"outputs": { "0": {} }
};
var Flux2ImageNode = {
	"display_name": "Flux Зображення Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_height": { "name": "model_height" },
		"model_width": { "name": "model_width" }
	},
	"outputs": { "0": {} }
};
var Flux2MaxImageNode = {
	"display_name": "Flux Max Зображення Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"seed": { "name": "Сід" },
		"prompt_upsampling": { "name": "prompt_upsampling" },
		"images": { "name": "Зображення" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var Flux2ProImageNode = {
	"display_name": "Flux Pro Зображення Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"seed": { "name": "Сід" },
		"prompt_upsampling": { "name": "prompt_upsampling" },
		"images": { "name": "Зображення" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var Flux2Scheduler = {
	"display_name": "Flux Scheduler",
	"inputs": {
		"steps": { "name": "Кроки" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" }
	},
	"outputs": { "0": {} }
};
var FluxDisableGuidance = {
	"display_name": "Flux Вимкнути Guidance",
	"inputs": { "conditioning": { "name": "Кондиціювання" } },
	"outputs": { "0": {} }
};
var FluxEraseNode = {
	"display_name": "Flux Erase Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"mask": { "name": "Маска" },
		"dilate_pixels": { "name": "dilate_pixels" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var FluxGuidance = {
	"display_name": "Flux Guidance",
	"inputs": {
		"conditioning": { "name": "Кондиціювання" },
		"guidance": { "name": "Напрям" }
	},
	"outputs": { "0": {} }
};
var FluxKontextImageScale = {
	"display_name": "Flux Kontext Зображення Масштаб",
	"inputs": { "image": { "name": "Зображення" } },
	"outputs": { "0": {} }
};
var FluxKontextMaxImageNode = {
	"display_name": "Flux Kontext Max Зображення Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"guidance": { "name": "Напрям" },
		"steps": { "name": "Кроки" },
		"seed": { "name": "Сід" },
		"prompt_upsampling": { "name": "prompt_upsampling" },
		"input_image": { "name": "input_image" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var FluxKontextMultiReferenceLatentMethod = {
	"display_name": "Flux Kontext Multi Reference Латент Method",
	"inputs": {
		"conditioning": { "name": "Кондиціювання" },
		"reference_latents_method": { "name": "reference_latents_method" }
	},
	"outputs": { "0": {} }
};
var FluxKontextProImageNode = {
	"display_name": "Flux Kontext Pro Зображення Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"guidance": { "name": "Напрям" },
		"steps": { "name": "Кроки" },
		"seed": { "name": "Сід" },
		"prompt_upsampling": { "name": "prompt_upsampling" },
		"input_image": { "name": "input_image" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var FluxKVCache = {
	"display_name": "Flux Кеш",
	"inputs": { "model": { "name": "Модель" } },
	"outputs": { "0": {} }
};
var FluxProExpandNode = {
	"display_name": "Flux Pro Розгорнути Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"prompt": { "name": "Промпт" },
		"prompt_upsampling": { "name": "prompt_upsampling" },
		"top": { "name": "Верх" },
		"bottom": { "name": "Низ" },
		"left": { "name": "Ліво" },
		"right": { "name": "Право" },
		"guidance": { "name": "Напрям" },
		"steps": { "name": "Кроки" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var FluxProFillNode = {
	"display_name": "Flux Pro Заповнення Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"mask": { "name": "Маска" },
		"prompt": { "name": "Промпт" },
		"prompt_upsampling": { "name": "prompt_upsampling" },
		"guidance": { "name": "Напрям" },
		"steps": { "name": "Кроки" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var FluxProUltraImageNode = {
	"display_name": "Flux Pro Ultra Зображення Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"prompt_upsampling": { "name": "prompt_upsampling" },
		"seed": { "name": "Сід" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"raw": { "name": "raw" },
		"image_prompt": { "name": "image_prompt" },
		"image_prompt_strength": { "name": "image_prompt_strength" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var FluxVTONode = {
	"display_name": "Flux Node",
	"inputs": {
		"person": { "name": "person" },
		"garment": { "name": "garment" },
		"prompt": { "name": "Промпт" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var FrameInterpolate = {
	"display_name": "Кадр Interpolate",
	"inputs": {
		"interp_model": { "name": "interp_model" },
		"images": { "name": "Зображення" },
		"multiplier": { "name": "multiplier" }
	},
	"outputs": { "0": {} }
};
var FrameInterpolationModelLoader = {
	"display_name": "Кадр Interpolation Модель Loader",
	"inputs": { "model_name": { "name": "model_name" } },
	"outputs": { "0": {} }
};
var FreeU = {
	"display_name": "Free",
	"inputs": {
		"model": { "name": "Модель" },
		"b1": { "name": "b1" },
		"b2": { "name": "b2" },
		"s1": { "name": "s1" },
		"s2": { "name": "s2" }
	},
	"outputs": { "0": {} }
};
var FreeU_V2 = {
	"display_name": "Free",
	"inputs": {
		"model": { "name": "Модель" },
		"b1": { "name": "b1" },
		"b2": { "name": "b2" },
		"s1": { "name": "s1" },
		"s2": { "name": "s2" }
	},
	"outputs": { "0": {} }
};
var FreSca = {
	"display_name": "Fre Sca",
	"inputs": {
		"model": { "name": "Модель" },
		"scale_low": { "name": "scale_low" },
		"scale_high": { "name": "scale_high" },
		"freq_cutoff": { "name": "freq_cutoff" }
	},
	"outputs": { "0": {} }
};
var GeminiImage2Node = {
	"display_name": "Gemini Зображення Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"resolution": { "name": "resolution" },
		"response_modalities": { "name": "response_modalities" },
		"images": { "name": "Зображення" },
		"files": { "name": "files" },
		"system_prompt": { "name": "system_prompt" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": {
		"0": {},
		"1": {}
	}
};
var GeminiImageNode = {
	"display_name": "Gemini Зображення Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"images": { "name": "Зображення" },
		"files": { "name": "files" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"response_modalities": { "name": "response_modalities" },
		"system_prompt": { "name": "system_prompt" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": {
		"0": {},
		"1": {}
	}
};
var GeminiInputFiles = {
	"display_name": "Gemini Вхід Files",
	"inputs": {
		"file": { "name": "Файл" },
		"GEMINI_INPUT_FILES": { "name": "GEMINI_INPUT_FILES" }
	},
	"outputs": { "0": {} }
};
var GeminiNanoBanana2 = {
	"display_name": "Gemini Nano Banana",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"resolution": { "name": "resolution" },
		"response_modalities": { "name": "response_modalities" },
		"thinking_level": { "name": "thinking_level" },
		"images": { "name": "Зображення" },
		"files": { "name": "files" },
		"system_prompt": { "name": "system_prompt" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": {
		"0": {},
		"1": {},
		"2": { "name": "Вихід 2" }
	}
};
var GeminiNanoBanana2V2 = {
	"display_name": "Gemini Nano Banana",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"response_modalities": { "name": "response_modalities" },
		"system_prompt": { "name": "system_prompt" },
		"temperature": { "name": "temperature" },
		"top_p": { "name": "top_p" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_aspect_ratio": { "name": "model_aspect_ratio" },
		"model_resolution": { "name": "model_resolution" },
		"model_thinking_level": { "name": "model_thinking_level" }
	},
	"outputs": {
		"0": {},
		"1": {},
		"2": { "name": "Вихід 2" }
	}
};
var GeminiNode = {
	"display_name": "Gemini Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"images": { "name": "Зображення" },
		"audio": { "name": "audio" },
		"video": { "name": "video" },
		"files": { "name": "files" },
		"system_prompt": { "name": "system_prompt" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var GeminiNodeV2 = {
	"display_name": "Gemini Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"system_prompt": { "name": "system_prompt" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_max_output_tokens": { "name": "model_max_output_tokens" },
		"model_temperature": { "name": "model_temperature" },
		"model_thinking_level": { "name": "model_thinking_level" },
		"model_top_p": { "name": "model_top_p" }
	},
	"outputs": { "0": {} }
};
var GeminiVideoOmni = {
	"display_name": "Gemini Відео Omni",
	"inputs": {
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_prompt": { "name": "model_prompt" },
		"model_temperature": { "name": "model_temperature" },
		"model_top_p": { "name": "model_top_p" }
	},
	"outputs": {
		"0": {},
		"1": {}
	}
};
var GenerateTracks = {
	"display_name": "Генерувати Tracks",
	"inputs": {
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"start_x": { "name": "start_x" },
		"start_y": { "name": "start_y" },
		"end_x": { "name": "end_x" },
		"end_y": { "name": "end_y" },
		"num_frames": { "name": "num_frames" },
		"num_tracks": { "name": "num_tracks" },
		"track_spread": { "name": "track_spread" },
		"bezier": { "name": "bezier" },
		"mid_x": { "name": "mid_x" },
		"mid_y": { "name": "mid_y" },
		"interpolation": { "name": "interpolation" },
		"track_mask": { "name": "track_mask" }
	},
	"outputs": {
		"0": {},
		"1": { "name": "Вихід 1" }
	}
};
var GetICLoRAParameters = {
	"display_name": "Отримати Lo Parameters",
	"inputs": { "iclora_model": { "name": "iclora_model" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var GetImageSize = {
	"display_name": "Отримати Зображення Розмір",
	"inputs": { "image": { "name": "Зображення" } },
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var GetSplatCount = {
	"display_name": "Отримати Splat Count",
	"inputs": { "splat": { "name": "splat" } },
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var GetVideoComponents = {
	"display_name": "Отримати Відео Components",
	"inputs": { "video": { "name": "video" } },
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" }
	}
};
var GITSScheduler = {
	"display_name": "Scheduler",
	"inputs": {
		"coeff": { "name": "coeff" },
		"steps": { "name": "Кроки" },
		"denoise": { "name": "Денойз" }
	},
	"outputs": { "0": {} }
};
var GLIGENLoader = {
	"display_name": "Loader",
	"inputs": { "gligen_name": { "name": "gligen_name" } }
};
var GLIGENTextBoxApply = {
	"display_name": "Текст Box Застосувати",
	"inputs": {
		"conditioning_to": { "name": "conditioning_to" },
		"clip": { "name": "CLIP" },
		"gligen_textbox_model": { "name": "gligen_textbox_model" },
		"text": { "name": "Текст" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"x": { "name": "x" },
		"y": { "name": "y" }
	}
};
var GLSLShader = {
	"display_name": "Шейдер",
	"inputs": {
		"fragment_shader": { "name": "fragment_shader" },
		"size_mode": { "name": "size_mode" },
		"images": { "name": "Зображення" },
		"floats": { "name": "floats" },
		"ints": { "name": "ints" },
		"bools": { "name": "bools" },
		"curves": { "name": "curves" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" }
	}
};
var GrokImageEditNode = {
	"display_name": "Grok Зображення Редагувати Node",
	"inputs": {
		"model": { "name": "Модель" },
		"image": { "name": "Зображення" },
		"prompt": { "name": "Промпт" },
		"resolution": { "name": "resolution" },
		"number_of_images": { "name": "number_of_images" },
		"seed": { "name": "Сід" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var GrokImageEditNodeV2 = {
	"display_name": "Grok Зображення Редагувати Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_aspect_ratio": { "name": "model_aspect_ratio" },
		"model_number_of_images": { "name": "model_number_of_images" },
		"model_resolution": { "name": "model_resolution" }
	},
	"outputs": { "0": {} }
};
var GrokImageNode = {
	"display_name": "Grok Зображення Node",
	"inputs": {
		"model": { "name": "Модель" },
		"prompt": { "name": "Промпт" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"number_of_images": { "name": "number_of_images" },
		"seed": { "name": "Сід" },
		"resolution": { "name": "resolution" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var GrokVideoEditNode = {
	"display_name": "Grok Відео Редагувати Node",
	"inputs": {
		"model": { "name": "Модель" },
		"prompt": { "name": "Промпт" },
		"video": { "name": "video" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var GrokVideoExtendNode = {
	"display_name": "Grok Відео Extend Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"video": { "name": "video" },
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_duration": { "name": "model_duration" }
	},
	"outputs": { "0": {} }
};
var GrokVideoNode = {
	"display_name": "Grok Відео Node",
	"inputs": {
		"model": { "name": "Модель" },
		"prompt": { "name": "Промпт" },
		"resolution": { "name": "resolution" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"duration": { "name": "Тривалість" },
		"seed": { "name": "Сід" },
		"image": { "name": "Зображення" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var GrokVideoReferenceNode = {
	"display_name": "Grok Відео Reference Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_aspect_ratio": { "name": "model_aspect_ratio" },
		"model_duration": { "name": "model_duration" },
		"model_resolution": { "name": "model_resolution" }
	},
	"outputs": { "0": {} }
};
var GrowMask = {
	"display_name": "Grow Маска",
	"inputs": {
		"mask": { "name": "Маска" },
		"expand": { "name": "expand" },
		"tapered_corners": { "name": "tapered_corners" }
	},
	"outputs": { "0": {} }
};
var HappyHorseImageToVideoApi = {
	"display_name": "Happy Horse Зображення To Відео Api",
	"inputs": {
		"model": { "name": "Модель" },
		"first_frame": { "name": "first_frame" },
		"seed": { "name": "Сід" },
		"watermark": { "name": "watermark" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_duration": { "name": "model_duration" },
		"model_prompt": { "name": "model_prompt" },
		"model_resolution": { "name": "model_resolution" }
	},
	"outputs": { "0": {} }
};
var HappyHorseReferenceVideoApi = {
	"display_name": "Happy Horse Reference Відео Api",
	"inputs": {
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"watermark": { "name": "watermark" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_duration": { "name": "model_duration" },
		"model_prompt": { "name": "model_prompt" },
		"model_ratio": { "name": "model_ratio" },
		"model_resolution": { "name": "model_resolution" }
	},
	"outputs": { "0": {} }
};
var HappyHorseTextToVideoApi = {
	"display_name": "Happy Horse Текст To Відео Api",
	"inputs": {
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"watermark": { "name": "watermark" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_duration": { "name": "model_duration" },
		"model_prompt": { "name": "model_prompt" },
		"model_ratio": { "name": "model_ratio" },
		"model_resolution": { "name": "model_resolution" }
	},
	"outputs": { "0": {} }
};
var HappyHorseVideoEditApi = {
	"display_name": "Happy Horse Відео Редагувати Api",
	"inputs": {
		"model": { "name": "Модель" },
		"video": { "name": "video" },
		"seed": { "name": "Сід" },
		"watermark": { "name": "watermark" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_prompt": { "name": "model_prompt" },
		"model_ratio": { "name": "model_ratio" },
		"model_resolution": { "name": "model_resolution" }
	},
	"outputs": { "0": {} }
};
var HeyGenAvatarVideoNode = {
	"display_name": "Hey Gen Avatar Відео Node",
	"inputs": {
		"engine": { "name": "engine" },
		"speech": { "name": "speech" },
		"custom_avatar_id": { "name": "custom_avatar_id" },
		"resolution": { "name": "resolution" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"background_color": { "name": "background_color" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"engine_avatar": { "name": "engine_avatar" },
		"speech_custom_voice_id": { "name": "speech_custom_voice_id" },
		"speech_text": { "name": "speech_text" },
		"speech_voice": { "name": "speech_voice" },
		"speech_voice_speed": { "name": "speech_voice_speed" }
	},
	"outputs": { "0": {} }
};
var HeyGenCreateAvatarNode = {
	"display_name": "Hey Gen Створити Avatar Node",
	"inputs": {
		"source": { "name": "Джерело" },
		"source_prompt": { "name": "source_prompt" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var HeyGenTalkingPhotoNode = {
	"display_name": "Hey Gen Talking Photo Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"speech": { "name": "speech" },
		"resolution": { "name": "resolution" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"expressiveness": { "name": "expressiveness" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"speech_custom_voice_id": { "name": "speech_custom_voice_id" },
		"speech_text": { "name": "speech_text" },
		"speech_voice": { "name": "speech_voice" },
		"speech_voice_speed": { "name": "speech_voice_speed" }
	},
	"outputs": { "0": {} }
};
var HeyGenTextToSpeechNode = {
	"display_name": "Hey Gen Текст To Speech Node",
	"inputs": {
		"text": { "name": "Текст" },
		"voice": { "name": "voice" },
		"custom_voice_id": { "name": "custom_voice_id" },
		"speed": { "name": "speed" },
		"ssml": { "name": "ssml" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var HeyGenVideoTranslateNode = {
	"display_name": "Hey Gen Відео Translate Node",
	"inputs": {
		"video": { "name": "video" },
		"output_language": { "name": "output_language" },
		"mode": { "name": "Режим" },
		"translate_audio_only": { "name": "translate_audio_only" },
		"speaker_count": { "name": "speaker_count" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var HiDreamO1PatchSeamSmoothing = {
	"display_name": "Hi Dream Patch Seam Smoothing",
	"inputs": {
		"model": { "name": "Модель" },
		"start_percent": { "name": "start_percent" },
		"end_percent": { "name": "end_percent" },
		"pattern": { "name": "pattern" },
		"passes": { "name": "passes" },
		"blend": { "name": "blend" },
		"strength": { "name": "Сила" }
	},
	"outputs": { "0": {} }
};
var HiDreamO1ReferenceImages = {
	"display_name": "Hi Dream Reference Images",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"images": { "name": "Зображення" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var HitPawGeneralImageEnhance = {
	"display_name": "Hit Paw General Зображення Enhance",
	"inputs": {
		"model": { "name": "Модель" },
		"image": { "name": "Зображення" },
		"upscale_factor": { "name": "upscale_factor" },
		"auto_downscale": { "name": "auto_downscale" }
	},
	"outputs": { "0": {} }
};
var HitPawVideoEnhance = {
	"display_name": "Hit Paw Відео Enhance",
	"inputs": {
		"model": { "name": "Модель" },
		"video": { "name": "video" },
		"model_resolution": { "name": "model_resolution" }
	},
	"outputs": { "0": {} }
};
var Hunyuan3Dv2Conditioning = {
	"display_name": "Hunyuan Dv Кондиціювання",
	"inputs": { "clip_vision_output": { "name": "clip_vision_output" } },
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var Hunyuan3Dv2ConditioningMultiView = {
	"display_name": "Hunyuan Dv Кондиціювання Multi Перегляд",
	"inputs": {
		"front": { "name": "front" },
		"left": { "name": "Ліво" },
		"back": { "name": "back" },
		"right": { "name": "Право" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var HunyuanImageToVideo = {
	"display_name": "Hunyuan Зображення To Відео",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" },
		"guidance_type": { "name": "guidance_type" },
		"start_image": { "name": "start_image" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var HunyuanRefinerLatent = {
	"display_name": "Hunyuan Refiner Латент",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"latent": { "name": "Латент" },
		"noise_augmentation": { "name": "noise_augmentation" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var HunyuanVideo15ImageToVideo = {
	"display_name": "Hunyuan Відео Зображення To Відео",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" },
		"start_image": { "name": "start_image" },
		"clip_vision_output": { "name": "clip_vision_output" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var HunyuanVideo15LatentUpscaleWithModel = {
	"display_name": "Hunyuan Відео Латент Upscale With Модель",
	"inputs": {
		"model": { "name": "Модель" },
		"samples": { "name": "Семпли" },
		"upscale_method": { "name": "upscale_method" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"crop": { "name": "crop" }
	},
	"outputs": { "0": {} }
};
var HunyuanVideo15SuperResolution = {
	"display_name": "Hunyuan Відео Super Resolution",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"latent": { "name": "Латент" },
		"noise_augmentation": { "name": "noise_augmentation" },
		"vae": { "name": "VAE" },
		"start_image": { "name": "start_image" },
		"clip_vision_output": { "name": "clip_vision_output" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var HypernetworkLoader = {
	"display_name": "Hypernetwork Loader",
	"inputs": {
		"model": { "name": "Модель" },
		"hypernetwork_name": { "name": "hypernetwork_name" },
		"strength": { "name": "Сила" }
	},
	"outputs": { "0": {} }
};
var HyperTile = {
	"display_name": "Hyper Плитка",
	"inputs": {
		"model": { "name": "Модель" },
		"tile_size": { "name": "tile_size" },
		"swap_size": { "name": "swap_size" },
		"max_depth": { "name": "max_depth" },
		"scale_depth": { "name": "scale_depth" }
	},
	"outputs": { "0": {} }
};
var Ideogram4Scheduler = {
	"display_name": "Ideogram Scheduler",
	"inputs": {
		"steps": { "name": "Кроки" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"mu": { "name": "mu" },
		"std": { "name": "std" }
	},
	"outputs": { "0": {} }
};
var IdeogramV3 = {
	"display_name": "Ideogram",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"image": { "name": "Зображення" },
		"mask": { "name": "Маска" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"resolution": { "name": "resolution" },
		"magic_prompt_option": { "name": "magic_prompt_option" },
		"seed": { "name": "Сід" },
		"num_images": { "name": "num_images" },
		"rendering_speed": { "name": "rendering_speed" },
		"character_image": { "name": "character_image" },
		"character_mask": { "name": "character_mask" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var IdeogramV4 = {
	"display_name": "Ideogram",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"resolution": { "name": "resolution" },
		"rendering_speed": { "name": "rendering_speed" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var ImageAddNoise = {
	"display_name": "Зображення Додати Шум",
	"inputs": {
		"image": { "name": "Зображення" },
		"seed": { "name": "Сід" },
		"strength": { "name": "Сила" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var ImageBatch = {
	"display_name": "Зображення Партія",
	"inputs": {
		"image1": { "name": "image1" },
		"image2": { "name": "image2" }
	}
};
var ImageBlend = {
	"display_name": "Зображення Blend",
	"inputs": {
		"image1": { "name": "image1" },
		"image2": { "name": "image2" },
		"blend_factor": { "name": "blend_factor" },
		"blend_mode": { "name": "blend_mode" }
	},
	"outputs": { "0": {} }
};
var ImageBlur = {
	"display_name": "Зображення Розмити",
	"inputs": {
		"image": { "name": "Зображення" },
		"blur_radius": { "name": "blur_radius" },
		"sigma": { "name": "sigma" }
	},
	"outputs": { "0": {} }
};
var ImageColorToMask = {
	"display_name": "Зображення Колір To Маска",
	"inputs": {
		"image": { "name": "Зображення" },
		"color": { "name": "color" }
	},
	"outputs": { "0": {} }
};
var ImageCompare = {
	"display_name": "Зображення Compare",
	"inputs": {
		"compare_view": { "name": "compare_view" },
		"image_a": { "name": "image_a" },
		"image_b": { "name": "image_b" }
	}
};
var ImageCompositeMasked = {
	"display_name": "Зображення Composite Masked",
	"inputs": {
		"destination": { "name": "destination" },
		"source": { "name": "Джерело" },
		"x": { "name": "x" },
		"y": { "name": "y" },
		"resize_source": { "name": "resize_source" },
		"mask": { "name": "Маска" }
	},
	"outputs": { "0": {} }
};
var ImageCrop = {
	"display_name": "Зображення Обрізати",
	"inputs": {
		"image": { "name": "Зображення" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"x": { "name": "x" },
		"y": { "name": "y" }
	},
	"outputs": { "0": {} }
};
var ImageCropV2 = {
	"display_name": "Зображення Обрізати",
	"inputs": {
		"image": { "name": "Зображення" },
		"crop_region": { "name": "crop_region" },
		"height": {},
		"width": {},
		"x": {},
		"y": {}
	},
	"outputs": { "0": {} }
};
var ImageDeduplication = {
	"display_name": "Зображення Deduplication",
	"inputs": {
		"images": { "name": "Зображення" },
		"similarity_threshold": { "name": "similarity_threshold" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var ImageFlip = {
	"display_name": "Зображення Відзеркалити",
	"inputs": {
		"image": { "name": "Зображення" },
		"flip_method": { "name": "flip_method" }
	},
	"outputs": { "0": {} }
};
var ImageFromBatch = {
	"display_name": "Зображення From Партія",
	"inputs": {
		"image": { "name": "Зображення" },
		"batch_index": { "name": "batch_index" },
		"length": { "name": "length" }
	},
	"outputs": { "0": {} }
};
var ImageGrid = {
	"display_name": "Зображення Сітка",
	"inputs": {
		"images": { "name": "Зображення" },
		"columns": { "name": "columns" },
		"cell_width": { "name": "cell_width" },
		"cell_height": { "name": "cell_height" },
		"padding": { "name": "Відступ" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var ImageHistogram = {
	"display_name": "Зображення Гістограма",
	"inputs": { "image": { "name": "Зображення" } },
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" },
		"4": { "name": "Вихід 4" }
	}
};
var ImageInvert = {
	"display_name": "Зображення Invert",
	"inputs": { "image": { "name": "Зображення" } }
};
var ImageMergeTileList = {
	"display_name": "Зображення Об'єднати Плитка Список",
	"inputs": {
		"image_list": { "name": "Список зображень" },
		"final_width": { "name": "final_width" },
		"final_height": { "name": "final_height" },
		"overlap": { "name": "overlap" }
	},
	"outputs": { "0": {} }
};
var ImageOnlyCheckpointLoader = {
	"display_name": "Зображення Only Checkpoint Loader",
	"inputs": { "ckpt_name": { "name": "ckpt_name" } }
};
var ImageOnlyCheckpointSave = {
	"display_name": "Зображення Only Checkpoint Зберегти",
	"inputs": {
		"model": { "name": "Модель" },
		"clip_vision": { "name": "clip_vision" },
		"vae": { "name": "VAE" },
		"filename_prefix": { "name": "filename_prefix" }
	}
};
var ImagePadForOutpaint = {
	"display_name": "Зображення Pad For Аутпейнтинг",
	"inputs": {
		"image": { "name": "Зображення" },
		"left": { "name": "Ліво" },
		"top": { "name": "Верх" },
		"right": { "name": "Право" },
		"bottom": { "name": "Низ" },
		"feathering": { "name": "feathering" }
	}
};
var ImageQuantize = {
	"display_name": "Зображення Квантизувати",
	"inputs": {
		"image": { "name": "Зображення" },
		"colors": { "name": "colors" },
		"dither": { "name": "dither" }
	},
	"outputs": { "0": {} }
};
var ImageRGBToYUV = {
	"display_name": "Зображення To",
	"inputs": { "image": { "name": "Зображення" } },
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var ImageRotate = {
	"display_name": "Зображення Повернути",
	"inputs": {
		"image": { "name": "Зображення" },
		"rotation": { "name": "rotation" }
	},
	"outputs": { "0": {} }
};
var ImageScale = {
	"display_name": "Зображення Масштаб",
	"inputs": {
		"image": { "name": "Зображення" },
		"upscale_method": { "name": "upscale_method" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"crop": { "name": "crop" }
	}
};
var ImageScaleBy = {
	"display_name": "Зображення Масштаб By",
	"inputs": {
		"image": { "name": "Зображення" },
		"upscale_method": { "name": "upscale_method" },
		"scale_by": { "name": "scale_by" }
	}
};
var ImageScaleToMaxDimension = {
	"display_name": "Зображення Масштаб To Max Dimension",
	"inputs": {
		"image": { "name": "Зображення" },
		"upscale_method": { "name": "upscale_method" },
		"largest_size": { "name": "largest_size" }
	},
	"outputs": { "0": {} }
};
var ImageScaleToTotalPixels = {
	"display_name": "Зображення Масштаб To Total Pixels",
	"inputs": {
		"image": { "name": "Зображення" },
		"upscale_method": { "name": "upscale_method" },
		"megapixels": { "name": "megapixels" },
		"resolution_steps": { "name": "resolution_steps" }
	},
	"outputs": { "0": {} }
};
var ImageSharpen = {
	"display_name": "Зображення Зостришити",
	"inputs": {
		"image": { "name": "Зображення" },
		"sharpen_radius": { "name": "sharpen_radius" },
		"sigma": { "name": "sigma" },
		"alpha": { "name": "alpha" }
	},
	"outputs": { "0": {} }
};
var ImageStitch = {
	"display_name": "Зображення Stitch",
	"inputs": {
		"image1": { "name": "image1" },
		"direction": { "name": "direction" },
		"match_image_size": { "name": "match_image_size" },
		"spacing_width": { "name": "spacing_width" },
		"spacing_color": { "name": "spacing_color" },
		"image2": { "name": "image2" }
	},
	"outputs": { "0": {} }
};
var ImageToMask = {
	"display_name": "Зображення To Маска",
	"inputs": {
		"image": { "name": "Зображення" },
		"channel": { "name": "channel" }
	},
	"outputs": { "0": {} }
};
var ImageUpscaleWithModel = {
	"display_name": "Зображення Upscale With Модель",
	"inputs": {
		"upscale_model": { "name": "Модель масштабування" },
		"image": { "name": "Зображення" }
	},
	"outputs": { "0": {} }
};
var ImageYUVToRGB = {
	"display_name": "Зображення To",
	"inputs": {
		"Y": { "name": "Y" },
		"U": { "name": "U" },
		"V": { "name": "V" }
	},
	"outputs": { "0": {} }
};
var InpaintModelConditioning = {
	"display_name": "Інпейнтинг Модель Кондиціювання",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"pixels": { "name": "pixels" },
		"mask": { "name": "Маска" },
		"noise_mask": { "name": "noise_mask" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var InstructPixToPixConditioning = {
	"display_name": "Instruct Pix To Pix Кондиціювання",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"pixels": { "name": "pixels" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var InvertMask = {
	"display_name": "Invert Маска",
	"inputs": { "mask": { "name": "Маска" } },
	"outputs": { "0": {} }
};
var JoinAudioChannels = {
	"display_name": "Join Аудіо Channels",
	"inputs": {
		"audio_left": { "name": "audio_left" },
		"audio_right": { "name": "audio_right" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var JoinImageWithAlpha = {
	"display_name": "Join Зображення With Альфа",
	"inputs": {
		"image": { "name": "Зображення" },
		"alpha": { "name": "alpha" }
	},
	"outputs": { "0": {} }
};
var JsonExtractString = {
	"display_name": "Json Виділити Рядок",
	"inputs": {
		"json_string": { "name": "json_string" },
		"key": { "name": "key" }
	},
	"outputs": { "0": {} }
};
var Kandinsky5ImageToVideo = {
	"display_name": "Kandinsky Зображення To Відео",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" },
		"start_image": { "name": "start_image" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" }
	}
};
var KarrasScheduler = {
	"display_name": "Karras Scheduler",
	"inputs": {
		"steps": { "name": "Кроки" },
		"sigma_max": { "name": "sigma_max" },
		"sigma_min": { "name": "sigma_min" },
		"rho": { "name": "rho" }
	},
	"outputs": { "0": {} }
};
var KlingAvatarNode = {
	"display_name": "Kling Avatar Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"sound_file": { "name": "sound_file" },
		"mode": { "name": "Режим" },
		"seed": { "name": "Сід" },
		"prompt": { "name": "Промпт" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var KlingCameraControlI2VNode = {
	"display_name": "Kling Камера Керувати Node",
	"inputs": {
		"start_frame": { "name": "start_frame" },
		"prompt": { "name": "Промпт" },
		"negative_prompt": { "name": "Негативний промпт" },
		"cfg_scale": { "name": "cfg_scale" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"camera_control": { "name": "camera_control" }
	},
	"outputs": {
		"0": {},
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var KlingCameraControls = {
	"display_name": "Kling Камера Controls",
	"inputs": {
		"camera_control_type": { "name": "camera_control_type" },
		"horizontal_movement": { "name": "horizontal_movement" },
		"vertical_movement": { "name": "vertical_movement" },
		"pan": { "name": "pan" },
		"tilt": { "name": "tilt" },
		"roll": { "name": "roll" },
		"zoom": { "name": "zoom" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var KlingCameraControlT2VNode = {
	"display_name": "Kling Камера Керувати Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"negative_prompt": { "name": "Негативний промпт" },
		"cfg_scale": { "name": "cfg_scale" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"camera_control": { "name": "camera_control" }
	},
	"outputs": {
		"0": {},
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var KlingDualCharacterVideoEffectNode = {
	"display_name": "Kling Dual Character Відео Effect Node",
	"inputs": {
		"image_left": { "name": "Ліво зображень" },
		"image_right": { "name": "Право зображень" },
		"effect_scene": { "name": "effect_scene" },
		"model_name": { "name": "model_name" },
		"mode": { "name": "Режим" },
		"duration": { "name": "Тривалість" }
	},
	"outputs": {
		"0": {},
		"1": { "name": "Вихід 1" }
	}
};
var KlingFirstLastFrameNode = {
	"display_name": "Kling Перший Останній Кадр Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"duration": { "name": "Тривалість" },
		"first_frame": { "name": "first_frame" },
		"end_frame": { "name": "end_frame" },
		"generate_audio": { "name": "generate_audio" },
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_resolution": { "name": "model_resolution" }
	},
	"outputs": { "0": {} }
};
var KlingImage2VideoNode = {
	"display_name": "Kling Зображення Відео Node",
	"inputs": {
		"start_frame": { "name": "start_frame" },
		"prompt": { "name": "Промпт" },
		"negative_prompt": { "name": "Негативний промпт" },
		"model_name": { "name": "model_name" },
		"cfg_scale": { "name": "cfg_scale" },
		"mode": { "name": "Режим" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"duration": { "name": "Тривалість" }
	},
	"outputs": {
		"0": {},
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var KlingImageGenerationNode = {
	"display_name": "Kling Зображення Generation Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"negative_prompt": { "name": "Негативний промпт" },
		"image_type": { "name": "Тип зображень" },
		"image_fidelity": { "name": "image_fidelity" },
		"human_fidelity": { "name": "human_fidelity" },
		"model_name": { "name": "model_name" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"n": { "name": "n" },
		"image": { "name": "Зображення" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var KlingImageToVideoWithAudio = {
	"display_name": "Kling Зображення To Відео With Аудіо",
	"inputs": {
		"model_name": { "name": "model_name" },
		"start_frame": { "name": "start_frame" },
		"prompt": { "name": "Промпт" },
		"mode": { "name": "Режим" },
		"duration": { "name": "Тривалість" },
		"generate_audio": { "name": "generate_audio" }
	},
	"outputs": { "0": {} }
};
var KlingLipSyncAudioToVideoNode = {
	"display_name": "Kling Lip Синхронізувати Аудіо To Відео Node",
	"inputs": {
		"video": { "name": "video" },
		"audio": { "name": "audio" },
		"voice_language": { "name": "voice_language" }
	},
	"outputs": {
		"0": {},
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var KlingLipSyncTextToVideoNode = {
	"display_name": "Kling Lip Синхронізувати Текст To Відео Node",
	"inputs": {
		"video": { "name": "video" },
		"text": { "name": "Текст" },
		"voice": { "name": "voice" },
		"voice_speed": { "name": "voice_speed" }
	},
	"outputs": {
		"0": {},
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var KlingMotionControl = {
	"display_name": "Kling Motion Керувати",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"reference_image": { "name": "reference_image" },
		"reference_video": { "name": "reference_video" },
		"keep_original_sound": { "name": "keep_original_sound" },
		"character_orientation": { "name": "character_orientation" },
		"mode": { "name": "Режим" },
		"model": { "name": "Модель" }
	},
	"outputs": { "0": {} }
};
var KlingOmniProEditVideoNode = {
	"display_name": "Kling Omni Pro Редагувати Відео Node",
	"inputs": {
		"model_name": { "name": "model_name" },
		"prompt": { "name": "Промпт" },
		"video": { "name": "video" },
		"keep_original_sound": { "name": "keep_original_sound" },
		"reference_images": { "name": "reference_images" },
		"resolution": { "name": "resolution" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var KlingOmniProFirstLastFrameNode = {
	"display_name": "Kling Omni Pro Перший Останній Кадр Node",
	"inputs": {
		"model_name": { "name": "model_name" },
		"prompt": { "name": "Промпт" },
		"duration": { "name": "Тривалість" },
		"first_frame": { "name": "first_frame" },
		"end_frame": { "name": "end_frame" },
		"reference_images": { "name": "reference_images" },
		"resolution": { "name": "resolution" },
		"storyboards": { "name": "storyboards" },
		"generate_audio": { "name": "generate_audio" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var KlingOmniProImageNode = {
	"display_name": "Kling Omni Pro Зображення Node",
	"inputs": {
		"model_name": { "name": "model_name" },
		"prompt": { "name": "Промпт" },
		"resolution": { "name": "resolution" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"series_amount": { "name": "series_amount" },
		"reference_images": { "name": "reference_images" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var KlingOmniProImageToVideoNode = {
	"display_name": "Kling Omni Pro Зображення To Відео Node",
	"inputs": {
		"model_name": { "name": "model_name" },
		"prompt": { "name": "Промпт" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"duration": { "name": "Тривалість" },
		"reference_images": { "name": "reference_images" },
		"resolution": { "name": "resolution" },
		"storyboards": { "name": "storyboards" },
		"generate_audio": { "name": "generate_audio" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var KlingOmniProTextToVideoNode = {
	"display_name": "Kling Omni Pro Текст To Відео Node",
	"inputs": {
		"model_name": { "name": "model_name" },
		"prompt": { "name": "Промпт" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"duration": { "name": "Тривалість" },
		"resolution": { "name": "resolution" },
		"storyboards": { "name": "storyboards" },
		"generate_audio": { "name": "generate_audio" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var KlingOmniProVideoToVideoNode = {
	"display_name": "Kling Omni Pro Відео To Відео Node",
	"inputs": {
		"model_name": { "name": "model_name" },
		"prompt": { "name": "Промпт" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"duration": { "name": "Тривалість" },
		"reference_video": { "name": "reference_video" },
		"keep_original_sound": { "name": "keep_original_sound" },
		"reference_images": { "name": "reference_images" },
		"resolution": { "name": "resolution" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var KlingSingleImageVideoEffectNode = {
	"display_name": "Kling Single Зображення Відео Effect Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"effect_scene": { "name": "effect_scene" },
		"model_name": { "name": "model_name" },
		"duration": { "name": "Тривалість" }
	},
	"outputs": {
		"0": {},
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var KlingStartEndFrameNode = {
	"display_name": "Kling Почати Кінець Кадр Node",
	"inputs": {
		"start_frame": { "name": "start_frame" },
		"end_frame": { "name": "end_frame" },
		"prompt": { "name": "Промпт" },
		"negative_prompt": { "name": "Негативний промпт" },
		"cfg_scale": { "name": "cfg_scale" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"mode": { "name": "Режим" }
	},
	"outputs": {
		"0": {},
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var KlingTextToVideoNode = {
	"display_name": "Kling Текст To Відео Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"negative_prompt": { "name": "Негативний промпт" },
		"cfg_scale": { "name": "cfg_scale" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"mode": { "name": "Режим" }
	},
	"outputs": {
		"0": {},
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var KlingTextToVideoWithAudio = {
	"display_name": "Kling Текст To Відео With Аудіо",
	"inputs": {
		"model_name": { "name": "model_name" },
		"prompt": { "name": "Промпт" },
		"mode": { "name": "Режим" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"duration": { "name": "Тривалість" },
		"generate_audio": { "name": "generate_audio" }
	},
	"outputs": { "0": {} }
};
var KlingVideoExtendNode = {
	"display_name": "Kling Відео Extend Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"negative_prompt": { "name": "Негативний промпт" },
		"cfg_scale": { "name": "cfg_scale" },
		"video_id": { "name": "video_id" }
	},
	"outputs": {
		"0": {},
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var KlingVideoNode = {
	"display_name": "Kling Відео Node",
	"inputs": {
		"multi_shot": { "name": "multi_shot" },
		"generate_audio": { "name": "generate_audio" },
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"start_frame": { "name": "start_frame" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_aspect_ratio": { "name": "model_aspect_ratio" },
		"model_resolution": { "name": "model_resolution" },
		"multi_shot_duration": { "name": "multi_shot_duration" },
		"multi_shot_negative_prompt": { "name": "multi_shot_negative_prompt" },
		"multi_shot_prompt": { "name": "multi_shot_prompt" }
	},
	"outputs": { "0": {} }
};
var KlingVirtualTryOnNode = {
	"display_name": "Kling Virtual Try Увімкнуто Node",
	"inputs": {
		"human_image": { "name": "human_image" },
		"cloth_image": { "name": "cloth_image" },
		"model_name": { "name": "model_name" }
	},
	"outputs": { "0": {} }
};
var Krea2ImageNode = {
	"display_name": "Krea Зображення Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_aspect_ratio": { "name": "model_aspect_ratio" },
		"model_creativity": { "name": "model_creativity" },
		"model_moodboard_id": { "name": "model_moodboard_id" },
		"model_moodboard_strength": { "name": "model_moodboard_strength" },
		"model_resolution": { "name": "model_resolution" }
	},
	"outputs": { "0": {} }
};
var Krea2StyleReferenceNode = {
	"display_name": "Krea Стиль Reference Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"strength": { "name": "Сила" },
		"style_reference": { "name": "style_reference" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var KSampler = {
	"display_name": "Семплер",
	"inputs": {
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"steps": { "name": "Кроки" },
		"cfg": { "name": "CFG" },
		"sampler_name": { "name": "Назва семплера" },
		"scheduler": { "name": "Розклад" },
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"latent_image": { "name": "Латентне зображення" },
		"denoise": { "name": "Денойз" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var KSamplerAdvanced = {
	"display_name": "Семплер Advanced",
	"inputs": {
		"model": { "name": "Модель" },
		"add_noise": { "name": "add_noise" },
		"noise_seed": { "name": "Сід шуму" },
		"steps": { "name": "Кроки" },
		"cfg": { "name": "CFG" },
		"sampler_name": { "name": "Назва семплера" },
		"scheduler": { "name": "Розклад" },
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"latent_image": { "name": "Латентне зображення" },
		"start_at_step": { "name": "start_at_step" },
		"end_at_step": { "name": "end_at_step" },
		"return_with_leftover_noise": { "name": "return_with_leftover_noise" },
		"control_after_generate": { "name": "control_after_generate" }
	}
};
var KSamplerSelect = {
	"display_name": "Семплер Вибрати",
	"inputs": { "sampler_name": { "name": "Назва семплера" } },
	"outputs": { "0": {} }
};
var LaplaceScheduler = {
	"display_name": "Laplace Scheduler",
	"inputs": {
		"steps": { "name": "Кроки" },
		"sigma_max": { "name": "sigma_max" },
		"sigma_min": { "name": "sigma_min" },
		"mu": { "name": "mu" },
		"beta": { "name": "beta" }
	},
	"outputs": { "0": {} }
};
var LatentAdd = {
	"display_name": "Латент Додати",
	"inputs": {
		"samples1": { "name": "samples1" },
		"samples2": { "name": "samples2" }
	},
	"outputs": { "0": {} }
};
var LatentApplyOperation = {
	"display_name": "Латент Застосувати Operation",
	"inputs": {
		"samples": { "name": "Семпли" },
		"operation": { "name": "operation" }
	},
	"outputs": { "0": {} }
};
var LatentApplyOperationCFG = {
	"display_name": "Латент Застосувати Operation",
	"inputs": {
		"model": { "name": "Модель" },
		"operation": { "name": "operation" }
	},
	"outputs": { "0": {} }
};
var LatentBatch = {
	"display_name": "Латент Партія",
	"inputs": {
		"samples1": { "name": "samples1" },
		"samples2": { "name": "samples2" }
	},
	"outputs": { "0": {} }
};
var LatentBatchSeedBehavior = {
	"display_name": "Латент Партія Сід Behavior",
	"inputs": {
		"samples": { "name": "Семпли" },
		"seed_behavior": { "name": "seed_behavior" }
	},
	"outputs": { "0": {} }
};
var LatentBlend = {
	"display_name": "Латент Blend",
	"inputs": {
		"samples1": { "name": "samples1" },
		"samples2": { "name": "samples2" },
		"blend_factor": { "name": "blend_factor" }
	}
};
var LatentComposite = {
	"display_name": "Латент Composite",
	"inputs": {
		"samples_to": { "name": "samples_to" },
		"samples_from": { "name": "samples_from" },
		"x": { "name": "x" },
		"y": { "name": "y" },
		"feather": { "name": "feather" }
	}
};
var LatentCompositeMasked = {
	"display_name": "Латент Composite Masked",
	"inputs": {
		"destination": { "name": "destination" },
		"source": { "name": "Джерело" },
		"x": { "name": "x" },
		"y": { "name": "y" },
		"resize_source": { "name": "resize_source" },
		"mask": { "name": "Маска" }
	},
	"outputs": { "0": {} }
};
var LatentConcat = {
	"display_name": "Латент Concat",
	"inputs": {
		"samples1": { "name": "samples1" },
		"samples2": { "name": "samples2" },
		"dim": { "name": "dim" }
	},
	"outputs": { "0": {} }
};
var LatentCrop = {
	"display_name": "Латент Обрізати",
	"inputs": {
		"samples": { "name": "Семпли" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"x": { "name": "x" },
		"y": { "name": "y" }
	}
};
var LatentCut = {
	"display_name": "Латент Вирізати",
	"inputs": {
		"samples": { "name": "Семпли" },
		"dim": { "name": "dim" },
		"index": { "name": "index" },
		"amount": { "name": "Сума" }
	},
	"outputs": { "0": {} }
};
var LatentCutToBatch = {
	"display_name": "Латент Вирізати To Партія",
	"inputs": {
		"samples": { "name": "Семпли" },
		"dim": { "name": "dim" },
		"slice_size": { "name": "slice_size" }
	},
	"outputs": { "0": {} }
};
var LatentFlip = {
	"display_name": "Латент Відзеркалити",
	"inputs": {
		"samples": { "name": "Семпли" },
		"flip_method": { "name": "flip_method" }
	}
};
var LatentFromBatch = {
	"display_name": "Латент From Партія",
	"inputs": {
		"samples": { "name": "Семпли" },
		"batch_index": { "name": "batch_index" },
		"length": { "name": "length" }
	}
};
var LatentInterpolate = {
	"display_name": "Латент Interpolate",
	"inputs": {
		"samples1": { "name": "samples1" },
		"samples2": { "name": "samples2" },
		"ratio": { "name": "Відношення" }
	},
	"outputs": { "0": {} }
};
var LatentMultiply = {
	"display_name": "Латент Multiply",
	"inputs": {
		"samples": { "name": "Семпли" },
		"multiplier": { "name": "multiplier" }
	},
	"outputs": { "0": {} }
};
var LatentOperationSharpen = {
	"display_name": "Латент Operation Зостришити",
	"inputs": {
		"sharpen_radius": { "name": "sharpen_radius" },
		"sigma": { "name": "sigma" },
		"alpha": { "name": "alpha" }
	},
	"outputs": { "0": {} }
};
var LatentOperationTonemapReinhard = {
	"display_name": "Латент Operation Tonemap Reinhard",
	"inputs": { "multiplier": { "name": "multiplier" } },
	"outputs": { "0": {} }
};
var LatentRotate = {
	"display_name": "Латент Повернути",
	"inputs": {
		"samples": { "name": "Семпли" },
		"rotation": { "name": "rotation" }
	}
};
var LatentSubtract = {
	"display_name": "Латент Subtract",
	"inputs": {
		"samples1": { "name": "samples1" },
		"samples2": { "name": "samples2" }
	},
	"outputs": { "0": {} }
};
var LatentUpscale = {
	"display_name": "Латент Upscale",
	"inputs": {
		"samples": { "name": "Семпли" },
		"upscale_method": { "name": "upscale_method" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"crop": { "name": "crop" }
	}
};
var LatentUpscaleBy = {
	"display_name": "Латент Upscale By",
	"inputs": {
		"samples": { "name": "Семпли" },
		"upscale_method": { "name": "upscale_method" },
		"scale_by": { "name": "scale_by" }
	}
};
var LatentUpscaleModelLoader = {
	"display_name": "Латент Upscale Модель Loader",
	"inputs": { "model_name": { "name": "model_name" } },
	"outputs": { "0": {} }
};
var LazyCache = {
	"display_name": "Lazy Кеш",
	"inputs": {
		"model": { "name": "Модель" },
		"reuse_threshold": { "name": "reuse_threshold" },
		"start_percent": { "name": "start_percent" },
		"end_percent": { "name": "end_percent" },
		"verbose": { "name": "verbose" }
	},
	"outputs": { "0": {} }
};
var Load3D = {
	"display_name": "Завантажити",
	"inputs": {
		"model_file": { "name": "model_file" },
		"image": { "name": "Зображення" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"clear": {},
		"upload 3d model": {},
		"upload extra resources": {}
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" },
		"4": { "name": "Вихід 4" },
		"5": { "name": "Вихід 5" },
		"6": { "name": "Вихід 6" },
		"7": { "name": "Вихід 7" }
	}
};
var Load3DAdvanced = {
	"display_name": "Завантажити Advanced",
	"inputs": {
		"model_file": { "name": "model_file" },
		"viewport_state": { "name": "viewport_state" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" },
		"4": { "name": "Вихід 4" }
	}
};
var LoadAudio = {
	"display_name": "Завантажити Аудіо",
	"inputs": {
		"audio": { "name": "audio" },
		"audioUI": { "name": "audioUI" },
		"upload": { "name": "upload" }
	},
	"outputs": { "0": {} }
};
var LoadBackgroundRemovalModel = {
	"display_name": "Завантажити Фон Removal Модель",
	"inputs": { "bg_removal_name": { "name": "bg_removal_name" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var LoadDA3Model = {
	"display_name": "Завантажити Модель",
	"inputs": {
		"model_name": { "name": "model_name" },
		"weight_dtype": { "name": "weight_dtype" }
	},
	"outputs": { "0": {} }
};
var LoadImage = {
	"display_name": "Завантажити Зображення",
	"inputs": {
		"image": { "name": "Зображення" },
		"upload": { "name": "upload" }
	}
};
var LoadImageDataSetFromFolder = {
	"display_name": "Завантажити Зображення Дані Множина From Folder",
	"inputs": { "folder": { "name": "Папка" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var LoadImageMask = {
	"display_name": "Завантажити Зображення Маска",
	"inputs": {
		"image": { "name": "Зображення" },
		"channel": { "name": "channel" },
		"upload": { "name": "upload" }
	}
};
var LoadImageOutput = {
	"display_name": "Завантажити Зображення Вихід",
	"inputs": {
		"image": { "name": "Зображення" },
		"Auto-refresh after generation": {},
		"refresh": {},
		"upload": { "name": "upload" }
	}
};
var LoadImageTextDataSetFromFolder = {
	"display_name": "Завантажити Зображення Текст Дані Множина From Folder",
	"inputs": { "folder": { "name": "Папка" } },
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var LoadLatent = {
	"display_name": "Завантажити Латент",
	"inputs": { "latent": { "name": "Латент" } }
};
var LoadMediaPipeFaceLandmarker = {
	"display_name": "Завантажити Media Pipe Face Landmarker",
	"inputs": { "model_name": { "name": "model_name" } },
	"outputs": { "0": {} }
};
var LoadMoGeModel = {
	"display_name": "Завантажити Mo Ge Модель",
	"inputs": { "model_name": { "name": "model_name" } },
	"outputs": { "0": {} }
};
var LoadTrainingDataset = {
	"display_name": "Завантажити Training Dataset",
	"inputs": { "folder_name": { "name": "folder_name" } },
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var LoadVideo = {
	"display_name": "Завантажити Відео",
	"inputs": {
		"file": { "name": "Файл" },
		"upload": { "name": "upload" }
	},
	"outputs": { "0": {} }
};
var LoadVideoDataSetFromFolder = {
	"display_name": "Завантажити Відео Дані Множина From Folder",
	"inputs": { "folder": { "name": "Папка" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var LoadVideoTextDataSetFromFolder = {
	"display_name": "Завантажити Відео Текст Дані Множина From Folder",
	"inputs": { "folder": { "name": "Папка" } },
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var LoraLoader = {
	"display_name": "Lora Loader",
	"inputs": {
		"model": { "name": "Модель" },
		"clip": { "name": "CLIP" },
		"lora_name": { "name": "lora_name" },
		"strength_model": { "name": "strength_model" },
		"strength_clip": { "name": "strength_clip" }
	},
	"outputs": {
		"0": {},
		"1": {}
	}
};
var LoraLoaderBypass = {
	"display_name": "Lora Loader Bypass",
	"inputs": {
		"model": { "name": "Модель" },
		"clip": { "name": "CLIP" },
		"lora_name": { "name": "lora_name" },
		"strength_model": { "name": "strength_model" },
		"strength_clip": { "name": "strength_clip" }
	},
	"outputs": {
		"0": {},
		"1": {}
	}
};
var LoraLoaderBypassModelOnly = {
	"display_name": "Lora Loader Bypass Модель Only",
	"inputs": {
		"model": { "name": "Модель" },
		"lora_name": { "name": "lora_name" },
		"strength_model": { "name": "strength_model" }
	},
	"outputs": { "0": {} }
};
var LoraLoaderModelOnly = {
	"display_name": "Lora Loader Модель Only",
	"inputs": {
		"model": { "name": "Модель" },
		"lora_name": { "name": "lora_name" },
		"strength_model": { "name": "strength_model" }
	},
	"outputs": { "0": {} }
};
var LoraModelLoader = {
	"display_name": "Lora Модель Loader",
	"inputs": {
		"model": { "name": "Модель" },
		"lora": { "name": "lora" },
		"strength_model": { "name": "strength_model" },
		"bypass": { "name": "bypass" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var LoraSave = {
	"display_name": "Lora Зберегти",
	"inputs": {
		"filename_prefix": { "name": "filename_prefix" },
		"rank": { "name": "rank" },
		"lora_type": { "name": "lora_type" },
		"bias_diff": { "name": "bias_diff" },
		"model_diff": { "name": "model_diff" },
		"text_encoder_diff": { "name": "text_encoder_diff" }
	}
};
var LossGraphNode = {
	"display_name": "Loss Graph Node",
	"inputs": {
		"loss": { "name": "loss" },
		"filename_prefix": { "name": "filename_prefix" }
	}
};
var LotusConditioning = {
	"display_name": "Lotus Кондиціювання",
	"outputs": { "0": { "name": "Вихід 0" } }
};
var LTXAVTextEncoderLoader = {
	"display_name": "Текст Encoder Loader",
	"inputs": {
		"text_encoder": { "name": "text_encoder" },
		"ckpt_name": { "name": "ckpt_name" },
		"device": { "name": "device" }
	},
	"outputs": { "0": {} }
};
var LTXVAddGuide = {
	"display_name": "Додати Напрям",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"latent": { "name": "Латент" },
		"image": { "name": "Зображення" },
		"frame_idx": { "name": "frame_idx" },
		"strength": { "name": "Сила" },
		"attention_mask": { "name": "attention_mask" },
		"iclora_parameters": { "name": "iclora_parameters" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var LtxvApiImageToVideo = {
	"display_name": "Ltxv Api Зображення To Відео",
	"inputs": {
		"image": { "name": "Зображення" },
		"model": { "name": "Модель" },
		"prompt": { "name": "Промпт" },
		"duration": { "name": "Тривалість" },
		"resolution": { "name": "resolution" },
		"fps": { "name": "fps" },
		"generate_audio": { "name": "generate_audio" }
	},
	"outputs": { "0": {} }
};
var LtxvApiTextToVideo = {
	"display_name": "Ltxv Api Текст To Відео",
	"inputs": {
		"model": { "name": "Модель" },
		"prompt": { "name": "Промпт" },
		"duration": { "name": "Тривалість" },
		"resolution": { "name": "resolution" },
		"fps": { "name": "fps" },
		"generate_audio": { "name": "generate_audio" }
	},
	"outputs": { "0": {} }
};
var LTXVAudioVAEDecode = {
	"display_name": "Аудіо Декодувати",
	"inputs": {
		"samples": { "name": "Семпли" },
		"audio_vae": { "name": "audio_vae" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var LTXVAudioVAEEncode = {
	"display_name": "Аудіо Кодувати",
	"inputs": {
		"audio": { "name": "audio" },
		"audio_vae": { "name": "audio_vae" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var LTXVAudioVAELoader = {
	"display_name": "Аудіо Loader",
	"inputs": { "ckpt_name": { "name": "ckpt_name" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var LTXVConcatAVLatent = {
	"display_name": "Concat Латент",
	"inputs": {
		"video_latent": { "name": "video_latent" },
		"audio_latent": { "name": "audio_latent" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var LTXVConditioning = {
	"display_name": "Кондиціювання",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"frame_rate": { "name": "frame_rate" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var LTXVContextWindows = {
	"display_name": "Context Windows",
	"inputs": {
		"model": { "name": "Модель" },
		"context_length": { "name": "context_length" },
		"context_overlap": { "name": "context_overlap" },
		"context_schedule": { "name": "context_schedule" },
		"context_stride": { "name": "context_stride" },
		"closed_loop": { "name": "closed_loop" },
		"fuse_method": { "name": "fuse_method" },
		"freenoise": { "name": "freenoise" },
		"retain_first_frame": { "name": "retain_first_frame" },
		"split_conds_to_windows": { "name": "split_conds_to_windows" }
	},
	"outputs": { "0": {} }
};
var LTXVCropGuides = {
	"display_name": "Обрізати Guides",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"latent": { "name": "Латент" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var LTXVEmptyLatentAudio = {
	"display_name": "Empty Латент Аудіо",
	"inputs": {
		"frames_number": { "name": "frames_number" },
		"frame_rate": { "name": "frame_rate" },
		"batch_size": { "name": "Розмір партії" },
		"audio_vae": { "name": "audio_vae" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var LTXVImgToVideo = {
	"display_name": "Img To Відео",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"image": { "name": "Зображення" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" },
		"strength": { "name": "Сила" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var LTXVImgToVideoInplace = {
	"display_name": "Img To Відео Inplace",
	"inputs": {
		"vae": { "name": "VAE" },
		"image": { "name": "Зображення" },
		"latent": { "name": "Латент" },
		"strength": { "name": "Сила" },
		"bypass": { "name": "bypass" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var LTXVLatentUpsampler = {
	"display_name": "Латент Upsampler",
	"inputs": {
		"samples": { "name": "Семпли" },
		"upscale_model": { "name": "Модель масштабування" },
		"vae": { "name": "VAE" }
	},
	"outputs": { "0": {} }
};
var LTXVPreprocess = {
	"display_name": "Preprocess",
	"inputs": {
		"image": { "name": "Зображення" },
		"img_compression": { "name": "img_compression" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var LTXVReferenceAudio = {
	"display_name": "Reference Аудіо",
	"inputs": {
		"model": { "name": "Модель" },
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"reference_audio": { "name": "reference_audio" },
		"audio_vae": { "name": "audio_vae" },
		"identity_guidance_scale": { "name": "identity_guidance_scale" },
		"start_percent": { "name": "start_percent" },
		"end_percent": { "name": "end_percent" }
	},
	"outputs": {
		"0": {},
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var LTXVScheduler = {
	"display_name": "Scheduler",
	"inputs": {
		"steps": { "name": "Кроки" },
		"max_shift": { "name": "max_shift" },
		"base_shift": { "name": "base_shift" },
		"stretch": { "name": "stretch" },
		"terminal": { "name": "terminal" },
		"latent": { "name": "Латент" }
	},
	"outputs": { "0": {} }
};
var LTXVSeparateAVLatent = {
	"display_name": "Separate Латент",
	"inputs": { "av_latent": { "name": "av_latent" } },
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var LumaConceptsNode = {
	"display_name": "Luma Concepts Node",
	"inputs": {
		"concept1": { "name": "concept1" },
		"concept2": { "name": "concept2" },
		"concept3": { "name": "concept3" },
		"concept4": { "name": "concept4" },
		"luma_concepts": { "name": "luma_concepts" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var LumaImageEditNode2 = {
	"display_name": "Luma Зображення Редагувати Node",
	"inputs": {
		"source": { "name": "Джерело" },
		"prompt": { "name": "Промпт" },
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_style": { "name": "model_style" },
		"model_web_search": { "name": "model_web_search" }
	},
	"outputs": { "0": {} }
};
var LumaImageModifyNode = {
	"display_name": "Luma Зображення Modify Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"prompt": { "name": "Промпт" },
		"image_weight": { "name": "Вага зображень" },
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var LumaImageNode = {
	"display_name": "Luma Зображення Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"model": { "name": "Модель" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"seed": { "name": "Сід" },
		"style_image_weight": { "name": "style_image_weight" },
		"image_luma_ref": { "name": "image_luma_ref" },
		"style_image": { "name": "style_image" },
		"character_image": { "name": "character_image" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var LumaImageNode2 = {
	"display_name": "Luma Зображення Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_aspect_ratio": { "name": "model_aspect_ratio" },
		"model_style": { "name": "model_style" },
		"model_web_search": { "name": "model_web_search" }
	},
	"outputs": { "0": {} }
};
var LumaImageToVideoNode = {
	"display_name": "Luma Зображення To Відео Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"model": { "name": "Модель" },
		"resolution": { "name": "resolution" },
		"duration": { "name": "Тривалість" },
		"loop": { "name": "loop" },
		"seed": { "name": "Сід" },
		"first_image": { "name": "first_image" },
		"last_image": { "name": "last_image" },
		"luma_concepts": { "name": "luma_concepts" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var LumaRay32ExtendVideoNode = {
	"display_name": "Luma Ray Extend Відео Node",
	"inputs": {
		"source_generation_id": { "name": "source_generation_id" },
		"direction": { "name": "direction" },
		"prompt": { "name": "Промпт" },
		"resolution": { "name": "resolution" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"direction_loop": { "name": "direction_loop" }
	},
	"outputs": {
		"0": {},
		"1": { "name": "Вихід 1" }
	}
};
var LumaRay32ImageToVideoNode = {
	"display_name": "Luma Ray Зображення To Відео Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"resolution": { "name": "resolution" },
		"loop": { "name": "loop" },
		"seed": { "name": "Сід" },
		"start_frame": { "name": "start_frame" },
		"end_frame": { "name": "end_frame" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": {
		"0": {},
		"1": { "name": "Вихід 1" }
	}
};
var LumaRay32KeyframeNode = {
	"display_name": "Luma Ray Keyframe Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"position": { "name": "position" },
		"keyframes": { "name": "keyframes" },
		"position_fraction": { "name": "position_fraction" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var LumaRay32KeyframesToVideoNode = {
	"display_name": "Luma Ray Keyframes To Відео Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"resolution": { "name": "resolution" },
		"duration": { "name": "Тривалість" },
		"seed": { "name": "Сід" },
		"keyframes": { "name": "keyframes" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": {
		"0": {},
		"1": { "name": "Вихід 1" }
	}
};
var LumaRay32TextToVideoNode = {
	"display_name": "Luma Ray Текст To Відео Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"resolution": { "name": "resolution" },
		"duration": { "name": "Тривалість" },
		"loop": { "name": "loop" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": {
		"0": {},
		"1": { "name": "Вихід 1" }
	}
};
var LumaRay32VideoEditNode = {
	"display_name": "Luma Ray Відео Редагувати Node",
	"inputs": {
		"video": { "name": "video" },
		"prompt": { "name": "Промпт" },
		"resolution": { "name": "resolution" },
		"strength": { "name": "Сила" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": {
		"0": {},
		"1": { "name": "Вихід 1" }
	}
};
var LumaRay32VideoReframeNode = {
	"display_name": "Luma Ray Відео Reframe Node",
	"inputs": {
		"video": { "name": "video" },
		"prompt": { "name": "Промпт" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"resolution": { "name": "resolution" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": {
		"0": {},
		"1": { "name": "Вихід 1" }
	}
};
var LumaReferenceNode = {
	"display_name": "Luma Reference Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"weight": { "name": "Вага" },
		"luma_ref": { "name": "luma_ref" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var LumaVideoNode = {
	"display_name": "Luma Відео Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"model": { "name": "Модель" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"resolution": { "name": "resolution" },
		"duration": { "name": "Тривалість" },
		"loop": { "name": "loop" },
		"seed": { "name": "Сід" },
		"luma_concepts": { "name": "luma_concepts" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var MagnificImageRelightNode = {
	"display_name": "Magnific Зображення Relight Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"prompt": { "name": "Промпт" },
		"light_transfer_strength": { "name": "light_transfer_strength" },
		"style": { "name": "style" },
		"interpolate_from_original": { "name": "interpolate_from_original" },
		"change_background": { "name": "change_background" },
		"preserve_details": { "name": "preserve_details" },
		"advanced_settings": { "name": "розширені" },
		"reference_image": { "name": "reference_image" }
	},
	"outputs": { "0": {} }
};
var MagnificImageSkinEnhancerNode = {
	"display_name": "Magnific Зображення Skin Enhancer Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"sharpen": { "name": "sharpen" },
		"smart_grain": { "name": "smart_grain" },
		"mode": { "name": "Режим" }
	},
	"outputs": { "0": {} }
};
var MagnificImageStyleTransferNode = {
	"display_name": "Magnific Зображення Стиль Transfer Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"reference_image": { "name": "reference_image" },
		"prompt": { "name": "Промпт" },
		"style_strength": { "name": "style_strength" },
		"structure_strength": { "name": "structure_strength" },
		"flavor": { "name": "flavor" },
		"engine": { "name": "engine" },
		"portrait_mode": { "name": "portrait_mode" },
		"fixed_generation": { "name": "fixed_generation" }
	},
	"outputs": { "0": {} }
};
var MagnificImageUpscalerCreativeNode = {
	"display_name": "Magnific Зображення Upscaler Creative Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"prompt": { "name": "Промпт" },
		"scale_factor": { "name": "scale_factor" },
		"optimized_for": { "name": "optimized_for" },
		"creativity": { "name": "creativity" },
		"hdr": { "name": "hdr" },
		"resemblance": { "name": "resemblance" },
		"fractality": { "name": "fractality" },
		"engine": { "name": "engine" },
		"auto_downscale": { "name": "auto_downscale" }
	},
	"outputs": { "0": {} }
};
var MagnificImageUpscalerPreciseV2Node = {
	"display_name": "Magnific Зображення Upscaler Precise Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"scale_factor": { "name": "scale_factor" },
		"flavor": { "name": "flavor" },
		"sharpen": { "name": "sharpen" },
		"smart_grain": { "name": "smart_grain" },
		"ultra_detail": { "name": "ultra_detail" },
		"auto_downscale": { "name": "auto_downscale" }
	},
	"outputs": { "0": {} }
};
var Mahiro = {
	"display_name": "Mahiro",
	"inputs": { "model": { "name": "Модель" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var MakeTrainingDataset = {
	"display_name": "Створити Training Dataset",
	"inputs": {
		"images": { "name": "Зображення" },
		"vae": { "name": "VAE" },
		"clip": { "name": "CLIP" },
		"texts": { "name": "Тексти" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var ManualSigmas = {
	"display_name": "Manual Sigmas",
	"inputs": { "sigmas": { "name": "Сигми" } },
	"outputs": { "0": {} }
};
var MaskComposite = {
	"display_name": "Маска Composite",
	"inputs": {
		"destination": { "name": "destination" },
		"source": { "name": "Джерело" },
		"x": { "name": "x" },
		"y": { "name": "y" },
		"operation": { "name": "operation" }
	},
	"outputs": { "0": {} }
};
var MaskPreview = {
	"display_name": "Маска Попередній перегляд",
	"inputs": { "mask": { "name": "Маска" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var MaskToImage = {
	"display_name": "Маска To Зображення",
	"inputs": { "mask": { "name": "Маска" } },
	"outputs": { "0": {} }
};
var MediaPipeFaceLandmarker = {
	"display_name": "Media Pipe Face Landmarker",
	"inputs": {
		"face_detection_model": { "name": "face_detection_model" },
		"image": { "name": "Зображення" },
		"detector_variant": { "name": "detector_variant" },
		"num_faces": { "name": "num_faces" },
		"min_confidence": { "name": "min_confidence" },
		"missing_frame_fallback": { "name": "missing_frame_fallback" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var MediaPipeFaceMask = {
	"display_name": "Media Pipe Face Маска",
	"inputs": {
		"face_landmarks": { "name": "face_landmarks" },
		"regions": { "name": "regions" }
	},
	"outputs": { "0": {} }
};
var MediaPipeFaceMeshVisualize = {
	"display_name": "Media Pipe Face Меш Visualize",
	"inputs": {
		"face_landmarks": { "name": "face_landmarks" },
		"connections": { "name": "connections" },
		"color": { "name": "color" },
		"thickness": { "name": "thickness" },
		"point_size": { "name": "point_size" },
		"image": { "name": "Зображення" }
	},
	"outputs": { "0": {} }
};
var MergeImageLists = {
	"display_name": "Об'єднати Зображення Lists",
	"inputs": { "images": { "name": "Зображення" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var MergeSplat = {
	"display_name": "Об'єднати Splat",
	"inputs": { "splats": { "name": "splats" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var MergeTextLists = {
	"display_name": "Об'єднати Текст Lists",
	"inputs": { "texts": { "name": "Тексти" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var MeshyAnimateModelNode = {
	"display_name": "Meshy Animate Модель Node",
	"inputs": {
		"rig_task_id": { "name": "rig_task_id" },
		"action_id": { "name": "action_id" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var MeshyImageToModelNode = {
	"display_name": "Meshy Зображення To Модель Node",
	"inputs": {
		"model": { "name": "Модель" },
		"image": { "name": "Зображення" },
		"should_remesh": { "name": "should_remesh" },
		"symmetry_mode": { "name": "symmetry_mode" },
		"should_texture": { "name": "should_texture" },
		"pose_mode": { "name": "pose_mode" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"should_remesh_target_polycount": { "name": "should_remesh_target_polycount" },
		"should_remesh_topology": { "name": "should_remesh_topology" },
		"should_texture_enable_pbr": { "name": "should_texture_enable_pbr" },
		"should_texture_texture_prompt": { "name": "should_texture_texture_prompt" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" }
	}
};
var MeshyMultiImageToModelNode = {
	"display_name": "Meshy Multi Зображення To Модель Node",
	"inputs": {
		"model": { "name": "Модель" },
		"images": { "name": "Зображення" },
		"should_remesh": { "name": "should_remesh" },
		"symmetry_mode": { "name": "symmetry_mode" },
		"should_texture": { "name": "should_texture" },
		"pose_mode": { "name": "pose_mode" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"should_remesh_target_polycount": { "name": "should_remesh_target_polycount" },
		"should_remesh_topology": { "name": "should_remesh_topology" },
		"should_texture_enable_pbr": { "name": "should_texture_enable_pbr" },
		"should_texture_texture_prompt": { "name": "should_texture_texture_prompt" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" }
	}
};
var MeshyRefineNode = {
	"display_name": "Meshy Refine Node",
	"inputs": {
		"model": { "name": "Модель" },
		"meshy_task_id": { "name": "meshy_task_id" },
		"enable_pbr": { "name": "enable_pbr" },
		"texture_prompt": { "name": "texture_prompt" },
		"texture_image": { "name": "texture_image" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" }
	}
};
var MeshyRigModelNode = {
	"display_name": "Meshy Rig Модель Node",
	"inputs": {
		"meshy_task_id": { "name": "meshy_task_id" },
		"height_meters": { "name": "height_meters" },
		"texture_image": { "name": "texture_image" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" }
	}
};
var MeshyTextToModelNode = {
	"display_name": "Meshy Текст To Модель Node",
	"inputs": {
		"model": { "name": "Модель" },
		"prompt": { "name": "Промпт" },
		"style": { "name": "style" },
		"should_remesh": { "name": "should_remesh" },
		"symmetry_mode": { "name": "symmetry_mode" },
		"pose_mode": { "name": "pose_mode" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"should_remesh_target_polycount": { "name": "should_remesh_target_polycount" },
		"should_remesh_topology": { "name": "should_remesh_topology" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" }
	}
};
var MeshyTextureNode = {
	"display_name": "Meshy Текстура Node",
	"inputs": {
		"model": { "name": "Модель" },
		"meshy_task_id": { "name": "meshy_task_id" },
		"enable_original_uv": { "name": "enable_original_uv" },
		"pbr": { "name": "pbr" },
		"text_style_prompt": { "name": "text_style_prompt" },
		"image_style": { "name": "image_style" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" }
	}
};
var MinimaxHailuoVideoNode = {
	"display_name": "Minimax Hailuo Відео Node",
	"inputs": {
		"prompt_text": { "name": "prompt_text" },
		"seed": { "name": "Сід" },
		"first_frame_image": { "name": "first_frame_image" },
		"prompt_optimizer": { "name": "prompt_optimizer" },
		"duration": { "name": "Тривалість" },
		"resolution": { "name": "resolution" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var MinimaxImageToVideoNode = {
	"display_name": "Minimax Зображення To Відео Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"prompt_text": { "name": "prompt_text" },
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var MinimaxTextToVideoNode = {
	"display_name": "Minimax Текст To Відео Node",
	"inputs": {
		"prompt_text": { "name": "prompt_text" },
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var ModelComputeDtype = {
	"display_name": "Модель Compute Dtype",
	"inputs": {
		"model": { "name": "Модель" },
		"dtype": { "name": "dtype" }
	}
};
var ModelMergeAdd = {
	"display_name": "Модель Об'єднати Додати",
	"inputs": {
		"model1": { "name": "model1" },
		"model2": { "name": "model2" }
	}
};
var ModelMergeAuraflow = {
	"display_name": "Модель Об'єднати Auraflow",
	"inputs": {
		"model1": { "name": "model1" },
		"model2": { "name": "model2" },
		"init_x_linear_": { "name": "init_x_linear_" },
		"positional_encoding": { "name": "positional_encoding" },
		"cond_seq_linear_": { "name": "cond_seq_linear_" },
		"register_tokens": { "name": "register_tokens" },
		"t_embedder_": { "name": "t_embedder_" },
		"double_layers_0_": { "name": "double_layers_0_" },
		"double_layers_1_": { "name": "double_layers_1_" },
		"double_layers_2_": { "name": "double_layers_2_" },
		"double_layers_3_": { "name": "double_layers_3_" },
		"single_layers_0_": { "name": "single_layers_0_" },
		"single_layers_1_": { "name": "single_layers_1_" },
		"single_layers_2_": { "name": "single_layers_2_" },
		"single_layers_3_": { "name": "single_layers_3_" },
		"single_layers_4_": { "name": "single_layers_4_" },
		"single_layers_5_": { "name": "single_layers_5_" },
		"single_layers_6_": { "name": "single_layers_6_" },
		"single_layers_7_": { "name": "single_layers_7_" },
		"single_layers_8_": { "name": "single_layers_8_" },
		"single_layers_9_": { "name": "single_layers_9_" },
		"single_layers_10_": { "name": "single_layers_10_" },
		"single_layers_11_": { "name": "single_layers_11_" },
		"single_layers_12_": { "name": "single_layers_12_" },
		"single_layers_13_": { "name": "single_layers_13_" },
		"single_layers_14_": { "name": "single_layers_14_" },
		"single_layers_15_": { "name": "single_layers_15_" },
		"single_layers_16_": { "name": "single_layers_16_" },
		"single_layers_17_": { "name": "single_layers_17_" },
		"single_layers_18_": { "name": "single_layers_18_" },
		"single_layers_19_": { "name": "single_layers_19_" },
		"single_layers_20_": { "name": "single_layers_20_" },
		"single_layers_21_": { "name": "single_layers_21_" },
		"single_layers_22_": { "name": "single_layers_22_" },
		"single_layers_23_": { "name": "single_layers_23_" },
		"single_layers_24_": { "name": "single_layers_24_" },
		"single_layers_25_": { "name": "single_layers_25_" },
		"single_layers_26_": { "name": "single_layers_26_" },
		"single_layers_27_": { "name": "single_layers_27_" },
		"single_layers_28_": { "name": "single_layers_28_" },
		"single_layers_29_": { "name": "single_layers_29_" },
		"single_layers_30_": { "name": "single_layers_30_" },
		"single_layers_31_": { "name": "single_layers_31_" },
		"modF_": { "name": "modF_" },
		"final_linear_": { "name": "final_linear_" }
	}
};
var ModelMergeBlocks = {
	"display_name": "Модель Об'єднати Blocks",
	"inputs": {
		"model1": { "name": "model1" },
		"model2": { "name": "model2" },
		"input": { "name": "Вхід" },
		"middle": { "name": "Середина" },
		"out": { "name": "out" }
	}
};
var ModelMergeCosmos14B = {
	"display_name": "Модель Об'єднати Cosmos",
	"inputs": {
		"model1": { "name": "model1" },
		"model2": { "name": "model2" },
		"pos_embedder_": { "name": "pos_embedder_" },
		"extra_pos_embedder_": { "name": "extra_pos_embedder_" },
		"x_embedder_": { "name": "x_embedder_" },
		"t_embedder_": { "name": "t_embedder_" },
		"affline_norm_": { "name": "affline_norm_" },
		"blocks_block0_": { "name": "blocks_block0_" },
		"blocks_block1_": { "name": "blocks_block1_" },
		"blocks_block2_": { "name": "blocks_block2_" },
		"blocks_block3_": { "name": "blocks_block3_" },
		"blocks_block4_": { "name": "blocks_block4_" },
		"blocks_block5_": { "name": "blocks_block5_" },
		"blocks_block6_": { "name": "blocks_block6_" },
		"blocks_block7_": { "name": "blocks_block7_" },
		"blocks_block8_": { "name": "blocks_block8_" },
		"blocks_block9_": { "name": "blocks_block9_" },
		"blocks_block10_": { "name": "blocks_block10_" },
		"blocks_block11_": { "name": "blocks_block11_" },
		"blocks_block12_": { "name": "blocks_block12_" },
		"blocks_block13_": { "name": "blocks_block13_" },
		"blocks_block14_": { "name": "blocks_block14_" },
		"blocks_block15_": { "name": "blocks_block15_" },
		"blocks_block16_": { "name": "blocks_block16_" },
		"blocks_block17_": { "name": "blocks_block17_" },
		"blocks_block18_": { "name": "blocks_block18_" },
		"blocks_block19_": { "name": "blocks_block19_" },
		"blocks_block20_": { "name": "blocks_block20_" },
		"blocks_block21_": { "name": "blocks_block21_" },
		"blocks_block22_": { "name": "blocks_block22_" },
		"blocks_block23_": { "name": "blocks_block23_" },
		"blocks_block24_": { "name": "blocks_block24_" },
		"blocks_block25_": { "name": "blocks_block25_" },
		"blocks_block26_": { "name": "blocks_block26_" },
		"blocks_block27_": { "name": "blocks_block27_" },
		"blocks_block28_": { "name": "blocks_block28_" },
		"blocks_block29_": { "name": "blocks_block29_" },
		"blocks_block30_": { "name": "blocks_block30_" },
		"blocks_block31_": { "name": "blocks_block31_" },
		"blocks_block32_": { "name": "blocks_block32_" },
		"blocks_block33_": { "name": "blocks_block33_" },
		"blocks_block34_": { "name": "blocks_block34_" },
		"blocks_block35_": { "name": "blocks_block35_" },
		"final_layer_": { "name": "final_layer_" }
	}
};
var ModelMergeCosmos7B = {
	"display_name": "Модель Об'єднати Cosmos",
	"inputs": {
		"model1": { "name": "model1" },
		"model2": { "name": "model2" },
		"pos_embedder_": { "name": "pos_embedder_" },
		"extra_pos_embedder_": { "name": "extra_pos_embedder_" },
		"x_embedder_": { "name": "x_embedder_" },
		"t_embedder_": { "name": "t_embedder_" },
		"affline_norm_": { "name": "affline_norm_" },
		"blocks_block0_": { "name": "blocks_block0_" },
		"blocks_block1_": { "name": "blocks_block1_" },
		"blocks_block2_": { "name": "blocks_block2_" },
		"blocks_block3_": { "name": "blocks_block3_" },
		"blocks_block4_": { "name": "blocks_block4_" },
		"blocks_block5_": { "name": "blocks_block5_" },
		"blocks_block6_": { "name": "blocks_block6_" },
		"blocks_block7_": { "name": "blocks_block7_" },
		"blocks_block8_": { "name": "blocks_block8_" },
		"blocks_block9_": { "name": "blocks_block9_" },
		"blocks_block10_": { "name": "blocks_block10_" },
		"blocks_block11_": { "name": "blocks_block11_" },
		"blocks_block12_": { "name": "blocks_block12_" },
		"blocks_block13_": { "name": "blocks_block13_" },
		"blocks_block14_": { "name": "blocks_block14_" },
		"blocks_block15_": { "name": "blocks_block15_" },
		"blocks_block16_": { "name": "blocks_block16_" },
		"blocks_block17_": { "name": "blocks_block17_" },
		"blocks_block18_": { "name": "blocks_block18_" },
		"blocks_block19_": { "name": "blocks_block19_" },
		"blocks_block20_": { "name": "blocks_block20_" },
		"blocks_block21_": { "name": "blocks_block21_" },
		"blocks_block22_": { "name": "blocks_block22_" },
		"blocks_block23_": { "name": "blocks_block23_" },
		"blocks_block24_": { "name": "blocks_block24_" },
		"blocks_block25_": { "name": "blocks_block25_" },
		"blocks_block26_": { "name": "blocks_block26_" },
		"blocks_block27_": { "name": "blocks_block27_" },
		"final_layer_": { "name": "final_layer_" }
	}
};
var ModelMergeCosmosPredict2_14B = {
	"display_name": "Модель Об'єднати Cosmos Predict",
	"inputs": {
		"model1": { "name": "model1" },
		"model2": { "name": "model2" },
		"pos_embedder_": { "name": "pos_embedder_" },
		"x_embedder_": { "name": "x_embedder_" },
		"t_embedder_": { "name": "t_embedder_" },
		"t_embedding_norm_": { "name": "t_embedding_norm_" },
		"blocks_0_": { "name": "blocks_0_" },
		"blocks_1_": { "name": "blocks_1_" },
		"blocks_2_": { "name": "blocks_2_" },
		"blocks_3_": { "name": "blocks_3_" },
		"blocks_4_": { "name": "blocks_4_" },
		"blocks_5_": { "name": "blocks_5_" },
		"blocks_6_": { "name": "blocks_6_" },
		"blocks_7_": { "name": "blocks_7_" },
		"blocks_8_": { "name": "blocks_8_" },
		"blocks_9_": { "name": "blocks_9_" },
		"blocks_10_": { "name": "blocks_10_" },
		"blocks_11_": { "name": "blocks_11_" },
		"blocks_12_": { "name": "blocks_12_" },
		"blocks_13_": { "name": "blocks_13_" },
		"blocks_14_": { "name": "blocks_14_" },
		"blocks_15_": { "name": "blocks_15_" },
		"blocks_16_": { "name": "blocks_16_" },
		"blocks_17_": { "name": "blocks_17_" },
		"blocks_18_": { "name": "blocks_18_" },
		"blocks_19_": { "name": "blocks_19_" },
		"blocks_20_": { "name": "blocks_20_" },
		"blocks_21_": { "name": "blocks_21_" },
		"blocks_22_": { "name": "blocks_22_" },
		"blocks_23_": { "name": "blocks_23_" },
		"blocks_24_": { "name": "blocks_24_" },
		"blocks_25_": { "name": "blocks_25_" },
		"blocks_26_": { "name": "blocks_26_" },
		"blocks_27_": { "name": "blocks_27_" },
		"blocks_28_": { "name": "blocks_28_" },
		"blocks_29_": { "name": "blocks_29_" },
		"blocks_30_": { "name": "blocks_30_" },
		"blocks_31_": { "name": "blocks_31_" },
		"blocks_32_": { "name": "blocks_32_" },
		"blocks_33_": { "name": "blocks_33_" },
		"blocks_34_": { "name": "blocks_34_" },
		"blocks_35_": { "name": "blocks_35_" },
		"final_layer_": { "name": "final_layer_" }
	}
};
var ModelMergeCosmosPredict2_2B = {
	"display_name": "Модель Об'єднати Cosmos Predict",
	"inputs": {
		"model1": { "name": "model1" },
		"model2": { "name": "model2" },
		"pos_embedder_": { "name": "pos_embedder_" },
		"x_embedder_": { "name": "x_embedder_" },
		"t_embedder_": { "name": "t_embedder_" },
		"t_embedding_norm_": { "name": "t_embedding_norm_" },
		"blocks_0_": { "name": "blocks_0_" },
		"blocks_1_": { "name": "blocks_1_" },
		"blocks_2_": { "name": "blocks_2_" },
		"blocks_3_": { "name": "blocks_3_" },
		"blocks_4_": { "name": "blocks_4_" },
		"blocks_5_": { "name": "blocks_5_" },
		"blocks_6_": { "name": "blocks_6_" },
		"blocks_7_": { "name": "blocks_7_" },
		"blocks_8_": { "name": "blocks_8_" },
		"blocks_9_": { "name": "blocks_9_" },
		"blocks_10_": { "name": "blocks_10_" },
		"blocks_11_": { "name": "blocks_11_" },
		"blocks_12_": { "name": "blocks_12_" },
		"blocks_13_": { "name": "blocks_13_" },
		"blocks_14_": { "name": "blocks_14_" },
		"blocks_15_": { "name": "blocks_15_" },
		"blocks_16_": { "name": "blocks_16_" },
		"blocks_17_": { "name": "blocks_17_" },
		"blocks_18_": { "name": "blocks_18_" },
		"blocks_19_": { "name": "blocks_19_" },
		"blocks_20_": { "name": "blocks_20_" },
		"blocks_21_": { "name": "blocks_21_" },
		"blocks_22_": { "name": "blocks_22_" },
		"blocks_23_": { "name": "blocks_23_" },
		"blocks_24_": { "name": "blocks_24_" },
		"blocks_25_": { "name": "blocks_25_" },
		"blocks_26_": { "name": "blocks_26_" },
		"blocks_27_": { "name": "blocks_27_" },
		"final_layer_": { "name": "final_layer_" }
	}
};
var ModelMergeFlux1 = {
	"display_name": "Модель Об'єднати Flux",
	"inputs": {
		"model1": { "name": "model1" },
		"model2": { "name": "model2" },
		"img_in_": { "name": "img_in_" },
		"time_in_": { "name": "time_in_" },
		"guidance_in": { "name": "guidance_in" },
		"vector_in_": { "name": "vector_in_" },
		"txt_in_": { "name": "txt_in_" },
		"double_blocks_0_": { "name": "double_blocks_0_" },
		"double_blocks_1_": { "name": "double_blocks_1_" },
		"double_blocks_2_": { "name": "double_blocks_2_" },
		"double_blocks_3_": { "name": "double_blocks_3_" },
		"double_blocks_4_": { "name": "double_blocks_4_" },
		"double_blocks_5_": { "name": "double_blocks_5_" },
		"double_blocks_6_": { "name": "double_blocks_6_" },
		"double_blocks_7_": { "name": "double_blocks_7_" },
		"double_blocks_8_": { "name": "double_blocks_8_" },
		"double_blocks_9_": { "name": "double_blocks_9_" },
		"double_blocks_10_": { "name": "double_blocks_10_" },
		"double_blocks_11_": { "name": "double_blocks_11_" },
		"double_blocks_12_": { "name": "double_blocks_12_" },
		"double_blocks_13_": { "name": "double_blocks_13_" },
		"double_blocks_14_": { "name": "double_blocks_14_" },
		"double_blocks_15_": { "name": "double_blocks_15_" },
		"double_blocks_16_": { "name": "double_blocks_16_" },
		"double_blocks_17_": { "name": "double_blocks_17_" },
		"double_blocks_18_": { "name": "double_blocks_18_" },
		"single_blocks_0_": { "name": "single_blocks_0_" },
		"single_blocks_1_": { "name": "single_blocks_1_" },
		"single_blocks_2_": { "name": "single_blocks_2_" },
		"single_blocks_3_": { "name": "single_blocks_3_" },
		"single_blocks_4_": { "name": "single_blocks_4_" },
		"single_blocks_5_": { "name": "single_blocks_5_" },
		"single_blocks_6_": { "name": "single_blocks_6_" },
		"single_blocks_7_": { "name": "single_blocks_7_" },
		"single_blocks_8_": { "name": "single_blocks_8_" },
		"single_blocks_9_": { "name": "single_blocks_9_" },
		"single_blocks_10_": { "name": "single_blocks_10_" },
		"single_blocks_11_": { "name": "single_blocks_11_" },
		"single_blocks_12_": { "name": "single_blocks_12_" },
		"single_blocks_13_": { "name": "single_blocks_13_" },
		"single_blocks_14_": { "name": "single_blocks_14_" },
		"single_blocks_15_": { "name": "single_blocks_15_" },
		"single_blocks_16_": { "name": "single_blocks_16_" },
		"single_blocks_17_": { "name": "single_blocks_17_" },
		"single_blocks_18_": { "name": "single_blocks_18_" },
		"single_blocks_19_": { "name": "single_blocks_19_" },
		"single_blocks_20_": { "name": "single_blocks_20_" },
		"single_blocks_21_": { "name": "single_blocks_21_" },
		"single_blocks_22_": { "name": "single_blocks_22_" },
		"single_blocks_23_": { "name": "single_blocks_23_" },
		"single_blocks_24_": { "name": "single_blocks_24_" },
		"single_blocks_25_": { "name": "single_blocks_25_" },
		"single_blocks_26_": { "name": "single_blocks_26_" },
		"single_blocks_27_": { "name": "single_blocks_27_" },
		"single_blocks_28_": { "name": "single_blocks_28_" },
		"single_blocks_29_": { "name": "single_blocks_29_" },
		"single_blocks_30_": { "name": "single_blocks_30_" },
		"single_blocks_31_": { "name": "single_blocks_31_" },
		"single_blocks_32_": { "name": "single_blocks_32_" },
		"single_blocks_33_": { "name": "single_blocks_33_" },
		"single_blocks_34_": { "name": "single_blocks_34_" },
		"single_blocks_35_": { "name": "single_blocks_35_" },
		"single_blocks_36_": { "name": "single_blocks_36_" },
		"single_blocks_37_": { "name": "single_blocks_37_" },
		"final_layer_": { "name": "final_layer_" }
	}
};
var ModelMergeKrea2 = {
	"display_name": "Модель Об'єднати Krea",
	"inputs": {
		"model1": { "name": "model1" },
		"model2": { "name": "model2" },
		"first_": { "name": "first_" },
		"tmlp_": { "name": "tmlp_" },
		"txtmlp_": { "name": "txtmlp_" },
		"tproj_": { "name": "tproj_" },
		"txtfusion_layerwise_blocks_0_": { "name": "txtfusion_layerwise_blocks_0_" },
		"txtfusion_layerwise_blocks_1_": { "name": "txtfusion_layerwise_blocks_1_" },
		"txtfusion_projector_": { "name": "txtfusion_projector_" },
		"txtfusion_refiner_blocks_0_": { "name": "txtfusion_refiner_blocks_0_" },
		"txtfusion_refiner_blocks_1_": { "name": "txtfusion_refiner_blocks_1_" },
		"blocks_0_": { "name": "blocks_0_" },
		"blocks_1_": { "name": "blocks_1_" },
		"blocks_2_": { "name": "blocks_2_" },
		"blocks_3_": { "name": "blocks_3_" },
		"blocks_4_": { "name": "blocks_4_" },
		"blocks_5_": { "name": "blocks_5_" },
		"blocks_6_": { "name": "blocks_6_" },
		"blocks_7_": { "name": "blocks_7_" },
		"blocks_8_": { "name": "blocks_8_" },
		"blocks_9_": { "name": "blocks_9_" },
		"blocks_10_": { "name": "blocks_10_" },
		"blocks_11_": { "name": "blocks_11_" },
		"blocks_12_": { "name": "blocks_12_" },
		"blocks_13_": { "name": "blocks_13_" },
		"blocks_14_": { "name": "blocks_14_" },
		"blocks_15_": { "name": "blocks_15_" },
		"blocks_16_": { "name": "blocks_16_" },
		"blocks_17_": { "name": "blocks_17_" },
		"blocks_18_": { "name": "blocks_18_" },
		"blocks_19_": { "name": "blocks_19_" },
		"blocks_20_": { "name": "blocks_20_" },
		"blocks_21_": { "name": "blocks_21_" },
		"blocks_22_": { "name": "blocks_22_" },
		"blocks_23_": { "name": "blocks_23_" },
		"blocks_24_": { "name": "blocks_24_" },
		"blocks_25_": { "name": "blocks_25_" },
		"blocks_26_": { "name": "blocks_26_" },
		"blocks_27_": { "name": "blocks_27_" },
		"last_": { "name": "last_" }
	}
};
var ModelMergeLTXV = {
	"display_name": "Модель Об'єднати",
	"inputs": {
		"model1": { "name": "model1" },
		"model2": { "name": "model2" },
		"patchify_proj_": { "name": "patchify_proj_" },
		"adaln_single_": { "name": "adaln_single_" },
		"caption_projection_": { "name": "caption_projection_" },
		"transformer_blocks_0_": { "name": "transformer_blocks_0_" },
		"transformer_blocks_1_": { "name": "transformer_blocks_1_" },
		"transformer_blocks_2_": { "name": "transformer_blocks_2_" },
		"transformer_blocks_3_": { "name": "transformer_blocks_3_" },
		"transformer_blocks_4_": { "name": "transformer_blocks_4_" },
		"transformer_blocks_5_": { "name": "transformer_blocks_5_" },
		"transformer_blocks_6_": { "name": "transformer_blocks_6_" },
		"transformer_blocks_7_": { "name": "transformer_blocks_7_" },
		"transformer_blocks_8_": { "name": "transformer_blocks_8_" },
		"transformer_blocks_9_": { "name": "transformer_blocks_9_" },
		"transformer_blocks_10_": { "name": "transformer_blocks_10_" },
		"transformer_blocks_11_": { "name": "transformer_blocks_11_" },
		"transformer_blocks_12_": { "name": "transformer_blocks_12_" },
		"transformer_blocks_13_": { "name": "transformer_blocks_13_" },
		"transformer_blocks_14_": { "name": "transformer_blocks_14_" },
		"transformer_blocks_15_": { "name": "transformer_blocks_15_" },
		"transformer_blocks_16_": { "name": "transformer_blocks_16_" },
		"transformer_blocks_17_": { "name": "transformer_blocks_17_" },
		"transformer_blocks_18_": { "name": "transformer_blocks_18_" },
		"transformer_blocks_19_": { "name": "transformer_blocks_19_" },
		"transformer_blocks_20_": { "name": "transformer_blocks_20_" },
		"transformer_blocks_21_": { "name": "transformer_blocks_21_" },
		"transformer_blocks_22_": { "name": "transformer_blocks_22_" },
		"transformer_blocks_23_": { "name": "transformer_blocks_23_" },
		"transformer_blocks_24_": { "name": "transformer_blocks_24_" },
		"transformer_blocks_25_": { "name": "transformer_blocks_25_" },
		"transformer_blocks_26_": { "name": "transformer_blocks_26_" },
		"transformer_blocks_27_": { "name": "transformer_blocks_27_" },
		"scale_shift_table": { "name": "scale_shift_table" },
		"proj_out_": { "name": "proj_out_" }
	}
};
var ModelMergeMochiPreview = {
	"display_name": "Модель Об'єднати Mochi Попередній перегляд",
	"inputs": {
		"model1": { "name": "model1" },
		"model2": { "name": "model2" },
		"pos_frequencies_": { "name": "pos_frequencies_" },
		"t_embedder_": { "name": "t_embedder_" },
		"t5_y_embedder_": { "name": "t5_y_embedder_" },
		"t5_yproj_": { "name": "t5_yproj_" },
		"blocks_0_": { "name": "blocks_0_" },
		"blocks_1_": { "name": "blocks_1_" },
		"blocks_2_": { "name": "blocks_2_" },
		"blocks_3_": { "name": "blocks_3_" },
		"blocks_4_": { "name": "blocks_4_" },
		"blocks_5_": { "name": "blocks_5_" },
		"blocks_6_": { "name": "blocks_6_" },
		"blocks_7_": { "name": "blocks_7_" },
		"blocks_8_": { "name": "blocks_8_" },
		"blocks_9_": { "name": "blocks_9_" },
		"blocks_10_": { "name": "blocks_10_" },
		"blocks_11_": { "name": "blocks_11_" },
		"blocks_12_": { "name": "blocks_12_" },
		"blocks_13_": { "name": "blocks_13_" },
		"blocks_14_": { "name": "blocks_14_" },
		"blocks_15_": { "name": "blocks_15_" },
		"blocks_16_": { "name": "blocks_16_" },
		"blocks_17_": { "name": "blocks_17_" },
		"blocks_18_": { "name": "blocks_18_" },
		"blocks_19_": { "name": "blocks_19_" },
		"blocks_20_": { "name": "blocks_20_" },
		"blocks_21_": { "name": "blocks_21_" },
		"blocks_22_": { "name": "blocks_22_" },
		"blocks_23_": { "name": "blocks_23_" },
		"blocks_24_": { "name": "blocks_24_" },
		"blocks_25_": { "name": "blocks_25_" },
		"blocks_26_": { "name": "blocks_26_" },
		"blocks_27_": { "name": "blocks_27_" },
		"blocks_28_": { "name": "blocks_28_" },
		"blocks_29_": { "name": "blocks_29_" },
		"blocks_30_": { "name": "blocks_30_" },
		"blocks_31_": { "name": "blocks_31_" },
		"blocks_32_": { "name": "blocks_32_" },
		"blocks_33_": { "name": "blocks_33_" },
		"blocks_34_": { "name": "blocks_34_" },
		"blocks_35_": { "name": "blocks_35_" },
		"blocks_36_": { "name": "blocks_36_" },
		"blocks_37_": { "name": "blocks_37_" },
		"blocks_38_": { "name": "blocks_38_" },
		"blocks_39_": { "name": "blocks_39_" },
		"blocks_40_": { "name": "blocks_40_" },
		"blocks_41_": { "name": "blocks_41_" },
		"blocks_42_": { "name": "blocks_42_" },
		"blocks_43_": { "name": "blocks_43_" },
		"blocks_44_": { "name": "blocks_44_" },
		"blocks_45_": { "name": "blocks_45_" },
		"blocks_46_": { "name": "blocks_46_" },
		"blocks_47_": { "name": "blocks_47_" },
		"final_layer_": { "name": "final_layer_" }
	}
};
var ModelMergeQwenImage = {
	"display_name": "Модель Об'єднати Qwen Зображення",
	"inputs": {
		"model1": { "name": "model1" },
		"model2": { "name": "model2" },
		"pos_embeds_": { "name": "pos_embeds_" },
		"img_in_": { "name": "img_in_" },
		"txt_norm_": { "name": "txt_norm_" },
		"txt_in_": { "name": "txt_in_" },
		"time_text_embed_": { "name": "time_text_embed_" },
		"transformer_blocks_0_": { "name": "transformer_blocks_0_" },
		"transformer_blocks_1_": { "name": "transformer_blocks_1_" },
		"transformer_blocks_2_": { "name": "transformer_blocks_2_" },
		"transformer_blocks_3_": { "name": "transformer_blocks_3_" },
		"transformer_blocks_4_": { "name": "transformer_blocks_4_" },
		"transformer_blocks_5_": { "name": "transformer_blocks_5_" },
		"transformer_blocks_6_": { "name": "transformer_blocks_6_" },
		"transformer_blocks_7_": { "name": "transformer_blocks_7_" },
		"transformer_blocks_8_": { "name": "transformer_blocks_8_" },
		"transformer_blocks_9_": { "name": "transformer_blocks_9_" },
		"transformer_blocks_10_": { "name": "transformer_blocks_10_" },
		"transformer_blocks_11_": { "name": "transformer_blocks_11_" },
		"transformer_blocks_12_": { "name": "transformer_blocks_12_" },
		"transformer_blocks_13_": { "name": "transformer_blocks_13_" },
		"transformer_blocks_14_": { "name": "transformer_blocks_14_" },
		"transformer_blocks_15_": { "name": "transformer_blocks_15_" },
		"transformer_blocks_16_": { "name": "transformer_blocks_16_" },
		"transformer_blocks_17_": { "name": "transformer_blocks_17_" },
		"transformer_blocks_18_": { "name": "transformer_blocks_18_" },
		"transformer_blocks_19_": { "name": "transformer_blocks_19_" },
		"transformer_blocks_20_": { "name": "transformer_blocks_20_" },
		"transformer_blocks_21_": { "name": "transformer_blocks_21_" },
		"transformer_blocks_22_": { "name": "transformer_blocks_22_" },
		"transformer_blocks_23_": { "name": "transformer_blocks_23_" },
		"transformer_blocks_24_": { "name": "transformer_blocks_24_" },
		"transformer_blocks_25_": { "name": "transformer_blocks_25_" },
		"transformer_blocks_26_": { "name": "transformer_blocks_26_" },
		"transformer_blocks_27_": { "name": "transformer_blocks_27_" },
		"transformer_blocks_28_": { "name": "transformer_blocks_28_" },
		"transformer_blocks_29_": { "name": "transformer_blocks_29_" },
		"transformer_blocks_30_": { "name": "transformer_blocks_30_" },
		"transformer_blocks_31_": { "name": "transformer_blocks_31_" },
		"transformer_blocks_32_": { "name": "transformer_blocks_32_" },
		"transformer_blocks_33_": { "name": "transformer_blocks_33_" },
		"transformer_blocks_34_": { "name": "transformer_blocks_34_" },
		"transformer_blocks_35_": { "name": "transformer_blocks_35_" },
		"transformer_blocks_36_": { "name": "transformer_blocks_36_" },
		"transformer_blocks_37_": { "name": "transformer_blocks_37_" },
		"transformer_blocks_38_": { "name": "transformer_blocks_38_" },
		"transformer_blocks_39_": { "name": "transformer_blocks_39_" },
		"transformer_blocks_40_": { "name": "transformer_blocks_40_" },
		"transformer_blocks_41_": { "name": "transformer_blocks_41_" },
		"transformer_blocks_42_": { "name": "transformer_blocks_42_" },
		"transformer_blocks_43_": { "name": "transformer_blocks_43_" },
		"transformer_blocks_44_": { "name": "transformer_blocks_44_" },
		"transformer_blocks_45_": { "name": "transformer_blocks_45_" },
		"transformer_blocks_46_": { "name": "transformer_blocks_46_" },
		"transformer_blocks_47_": { "name": "transformer_blocks_47_" },
		"transformer_blocks_48_": { "name": "transformer_blocks_48_" },
		"transformer_blocks_49_": { "name": "transformer_blocks_49_" },
		"transformer_blocks_50_": { "name": "transformer_blocks_50_" },
		"transformer_blocks_51_": { "name": "transformer_blocks_51_" },
		"transformer_blocks_52_": { "name": "transformer_blocks_52_" },
		"transformer_blocks_53_": { "name": "transformer_blocks_53_" },
		"transformer_blocks_54_": { "name": "transformer_blocks_54_" },
		"transformer_blocks_55_": { "name": "transformer_blocks_55_" },
		"transformer_blocks_56_": { "name": "transformer_blocks_56_" },
		"transformer_blocks_57_": { "name": "transformer_blocks_57_" },
		"transformer_blocks_58_": { "name": "transformer_blocks_58_" },
		"transformer_blocks_59_": { "name": "transformer_blocks_59_" },
		"proj_out_": { "name": "proj_out_" }
	}
};
var ModelMergeSD1 = {
	"display_name": "Модель Об'єднати",
	"inputs": {
		"model1": { "name": "model1" },
		"model2": { "name": "model2" },
		"time_embed_": { "name": "time_embed_" },
		"label_emb_": { "name": "label_emb_" },
		"input_blocks_0_": { "name": "input_blocks_0_" },
		"input_blocks_1_": { "name": "input_blocks_1_" },
		"input_blocks_2_": { "name": "input_blocks_2_" },
		"input_blocks_3_": { "name": "input_blocks_3_" },
		"input_blocks_4_": { "name": "input_blocks_4_" },
		"input_blocks_5_": { "name": "input_blocks_5_" },
		"input_blocks_6_": { "name": "input_blocks_6_" },
		"input_blocks_7_": { "name": "input_blocks_7_" },
		"input_blocks_8_": { "name": "input_blocks_8_" },
		"input_blocks_9_": { "name": "input_blocks_9_" },
		"input_blocks_10_": { "name": "input_blocks_10_" },
		"input_blocks_11_": { "name": "input_blocks_11_" },
		"middle_block_0_": { "name": "middle_block_0_" },
		"middle_block_1_": { "name": "middle_block_1_" },
		"middle_block_2_": { "name": "middle_block_2_" },
		"output_blocks_0_": { "name": "output_blocks_0_" },
		"output_blocks_1_": { "name": "output_blocks_1_" },
		"output_blocks_2_": { "name": "output_blocks_2_" },
		"output_blocks_3_": { "name": "output_blocks_3_" },
		"output_blocks_4_": { "name": "output_blocks_4_" },
		"output_blocks_5_": { "name": "output_blocks_5_" },
		"output_blocks_6_": { "name": "output_blocks_6_" },
		"output_blocks_7_": { "name": "output_blocks_7_" },
		"output_blocks_8_": { "name": "output_blocks_8_" },
		"output_blocks_9_": { "name": "output_blocks_9_" },
		"output_blocks_10_": { "name": "output_blocks_10_" },
		"output_blocks_11_": { "name": "output_blocks_11_" },
		"out_": { "name": "out_" }
	}
};
var ModelMergeSD2 = {
	"display_name": "Модель Об'єднати",
	"inputs": {
		"model1": { "name": "model1" },
		"model2": { "name": "model2" },
		"time_embed_": { "name": "time_embed_" },
		"label_emb_": { "name": "label_emb_" },
		"input_blocks_0_": { "name": "input_blocks_0_" },
		"input_blocks_1_": { "name": "input_blocks_1_" },
		"input_blocks_2_": { "name": "input_blocks_2_" },
		"input_blocks_3_": { "name": "input_blocks_3_" },
		"input_blocks_4_": { "name": "input_blocks_4_" },
		"input_blocks_5_": { "name": "input_blocks_5_" },
		"input_blocks_6_": { "name": "input_blocks_6_" },
		"input_blocks_7_": { "name": "input_blocks_7_" },
		"input_blocks_8_": { "name": "input_blocks_8_" },
		"input_blocks_9_": { "name": "input_blocks_9_" },
		"input_blocks_10_": { "name": "input_blocks_10_" },
		"input_blocks_11_": { "name": "input_blocks_11_" },
		"middle_block_0_": { "name": "middle_block_0_" },
		"middle_block_1_": { "name": "middle_block_1_" },
		"middle_block_2_": { "name": "middle_block_2_" },
		"output_blocks_0_": { "name": "output_blocks_0_" },
		"output_blocks_1_": { "name": "output_blocks_1_" },
		"output_blocks_2_": { "name": "output_blocks_2_" },
		"output_blocks_3_": { "name": "output_blocks_3_" },
		"output_blocks_4_": { "name": "output_blocks_4_" },
		"output_blocks_5_": { "name": "output_blocks_5_" },
		"output_blocks_6_": { "name": "output_blocks_6_" },
		"output_blocks_7_": { "name": "output_blocks_7_" },
		"output_blocks_8_": { "name": "output_blocks_8_" },
		"output_blocks_9_": { "name": "output_blocks_9_" },
		"output_blocks_10_": { "name": "output_blocks_10_" },
		"output_blocks_11_": { "name": "output_blocks_11_" },
		"out_": { "name": "out_" }
	}
};
var ModelMergeSD3_2B = {
	"display_name": "Модель Об'єднати",
	"inputs": {
		"model1": { "name": "model1" },
		"model2": { "name": "model2" },
		"pos_embed_": { "name": "pos_embed_" },
		"x_embedder_": { "name": "x_embedder_" },
		"context_embedder_": { "name": "context_embedder_" },
		"y_embedder_": { "name": "y_embedder_" },
		"t_embedder_": { "name": "t_embedder_" },
		"joint_blocks_0_": { "name": "joint_blocks_0_" },
		"joint_blocks_1_": { "name": "joint_blocks_1_" },
		"joint_blocks_2_": { "name": "joint_blocks_2_" },
		"joint_blocks_3_": { "name": "joint_blocks_3_" },
		"joint_blocks_4_": { "name": "joint_blocks_4_" },
		"joint_blocks_5_": { "name": "joint_blocks_5_" },
		"joint_blocks_6_": { "name": "joint_blocks_6_" },
		"joint_blocks_7_": { "name": "joint_blocks_7_" },
		"joint_blocks_8_": { "name": "joint_blocks_8_" },
		"joint_blocks_9_": { "name": "joint_blocks_9_" },
		"joint_blocks_10_": { "name": "joint_blocks_10_" },
		"joint_blocks_11_": { "name": "joint_blocks_11_" },
		"joint_blocks_12_": { "name": "joint_blocks_12_" },
		"joint_blocks_13_": { "name": "joint_blocks_13_" },
		"joint_blocks_14_": { "name": "joint_blocks_14_" },
		"joint_blocks_15_": { "name": "joint_blocks_15_" },
		"joint_blocks_16_": { "name": "joint_blocks_16_" },
		"joint_blocks_17_": { "name": "joint_blocks_17_" },
		"joint_blocks_18_": { "name": "joint_blocks_18_" },
		"joint_blocks_19_": { "name": "joint_blocks_19_" },
		"joint_blocks_20_": { "name": "joint_blocks_20_" },
		"joint_blocks_21_": { "name": "joint_blocks_21_" },
		"joint_blocks_22_": { "name": "joint_blocks_22_" },
		"joint_blocks_23_": { "name": "joint_blocks_23_" },
		"final_layer_": { "name": "final_layer_" }
	}
};
var ModelMergeSD35_Large = {
	"display_name": "Модель Об'єднати Large",
	"inputs": {
		"model1": { "name": "model1" },
		"model2": { "name": "model2" },
		"pos_embed_": { "name": "pos_embed_" },
		"x_embedder_": { "name": "x_embedder_" },
		"context_embedder_": { "name": "context_embedder_" },
		"y_embedder_": { "name": "y_embedder_" },
		"t_embedder_": { "name": "t_embedder_" },
		"joint_blocks_0_": { "name": "joint_blocks_0_" },
		"joint_blocks_1_": { "name": "joint_blocks_1_" },
		"joint_blocks_2_": { "name": "joint_blocks_2_" },
		"joint_blocks_3_": { "name": "joint_blocks_3_" },
		"joint_blocks_4_": { "name": "joint_blocks_4_" },
		"joint_blocks_5_": { "name": "joint_blocks_5_" },
		"joint_blocks_6_": { "name": "joint_blocks_6_" },
		"joint_blocks_7_": { "name": "joint_blocks_7_" },
		"joint_blocks_8_": { "name": "joint_blocks_8_" },
		"joint_blocks_9_": { "name": "joint_blocks_9_" },
		"joint_blocks_10_": { "name": "joint_blocks_10_" },
		"joint_blocks_11_": { "name": "joint_blocks_11_" },
		"joint_blocks_12_": { "name": "joint_blocks_12_" },
		"joint_blocks_13_": { "name": "joint_blocks_13_" },
		"joint_blocks_14_": { "name": "joint_blocks_14_" },
		"joint_blocks_15_": { "name": "joint_blocks_15_" },
		"joint_blocks_16_": { "name": "joint_blocks_16_" },
		"joint_blocks_17_": { "name": "joint_blocks_17_" },
		"joint_blocks_18_": { "name": "joint_blocks_18_" },
		"joint_blocks_19_": { "name": "joint_blocks_19_" },
		"joint_blocks_20_": { "name": "joint_blocks_20_" },
		"joint_blocks_21_": { "name": "joint_blocks_21_" },
		"joint_blocks_22_": { "name": "joint_blocks_22_" },
		"joint_blocks_23_": { "name": "joint_blocks_23_" },
		"joint_blocks_24_": { "name": "joint_blocks_24_" },
		"joint_blocks_25_": { "name": "joint_blocks_25_" },
		"joint_blocks_26_": { "name": "joint_blocks_26_" },
		"joint_blocks_27_": { "name": "joint_blocks_27_" },
		"joint_blocks_28_": { "name": "joint_blocks_28_" },
		"joint_blocks_29_": { "name": "joint_blocks_29_" },
		"joint_blocks_30_": { "name": "joint_blocks_30_" },
		"joint_blocks_31_": { "name": "joint_blocks_31_" },
		"joint_blocks_32_": { "name": "joint_blocks_32_" },
		"joint_blocks_33_": { "name": "joint_blocks_33_" },
		"joint_blocks_34_": { "name": "joint_blocks_34_" },
		"joint_blocks_35_": { "name": "joint_blocks_35_" },
		"joint_blocks_36_": { "name": "joint_blocks_36_" },
		"joint_blocks_37_": { "name": "joint_blocks_37_" },
		"final_layer_": { "name": "final_layer_" }
	}
};
var ModelMergeSDXL = {
	"display_name": "Модель Об'єднати",
	"inputs": {
		"model1": { "name": "model1" },
		"model2": { "name": "model2" },
		"time_embed_": { "name": "time_embed_" },
		"label_emb_": { "name": "label_emb_" },
		"input_blocks_0": { "name": "input_blocks_0" },
		"input_blocks_1": { "name": "input_blocks_1" },
		"input_blocks_2": { "name": "input_blocks_2" },
		"input_blocks_3": { "name": "input_blocks_3" },
		"input_blocks_4": { "name": "input_blocks_4" },
		"input_blocks_5": { "name": "input_blocks_5" },
		"input_blocks_6": { "name": "input_blocks_6" },
		"input_blocks_7": { "name": "input_blocks_7" },
		"input_blocks_8": { "name": "input_blocks_8" },
		"middle_block_0": { "name": "middle_block_0" },
		"middle_block_1": { "name": "middle_block_1" },
		"middle_block_2": { "name": "middle_block_2" },
		"output_blocks_0": { "name": "output_blocks_0" },
		"output_blocks_1": { "name": "output_blocks_1" },
		"output_blocks_2": { "name": "output_blocks_2" },
		"output_blocks_3": { "name": "output_blocks_3" },
		"output_blocks_4": { "name": "output_blocks_4" },
		"output_blocks_5": { "name": "output_blocks_5" },
		"output_blocks_6": { "name": "output_blocks_6" },
		"output_blocks_7": { "name": "output_blocks_7" },
		"output_blocks_8": { "name": "output_blocks_8" },
		"out_": { "name": "out_" }
	}
};
var ModelMergeSimple = {
	"display_name": "Модель Об'єднати Simple",
	"inputs": {
		"model1": { "name": "model1" },
		"model2": { "name": "model2" },
		"ratio": { "name": "Відношення" }
	}
};
var ModelMergeSubtract = {
	"display_name": "Модель Об'єднати Subtract",
	"inputs": {
		"model1": { "name": "model1" },
		"model2": { "name": "model2" },
		"multiplier": { "name": "multiplier" }
	}
};
var ModelMergeWAN2_1 = {
	"display_name": "Модель Об'єднати",
	"inputs": {
		"model1": { "name": "model1" },
		"model2": { "name": "model2" },
		"patch_embedding_": { "name": "patch_embedding_" },
		"time_embedding_": { "name": "time_embedding_" },
		"time_projection_": { "name": "time_projection_" },
		"text_embedding_": { "name": "text_embedding_" },
		"img_emb_": { "name": "img_emb_" },
		"blocks_0_": { "name": "blocks_0_" },
		"blocks_1_": { "name": "blocks_1_" },
		"blocks_2_": { "name": "blocks_2_" },
		"blocks_3_": { "name": "blocks_3_" },
		"blocks_4_": { "name": "blocks_4_" },
		"blocks_5_": { "name": "blocks_5_" },
		"blocks_6_": { "name": "blocks_6_" },
		"blocks_7_": { "name": "blocks_7_" },
		"blocks_8_": { "name": "blocks_8_" },
		"blocks_9_": { "name": "blocks_9_" },
		"blocks_10_": { "name": "blocks_10_" },
		"blocks_11_": { "name": "blocks_11_" },
		"blocks_12_": { "name": "blocks_12_" },
		"blocks_13_": { "name": "blocks_13_" },
		"blocks_14_": { "name": "blocks_14_" },
		"blocks_15_": { "name": "blocks_15_" },
		"blocks_16_": { "name": "blocks_16_" },
		"blocks_17_": { "name": "blocks_17_" },
		"blocks_18_": { "name": "blocks_18_" },
		"blocks_19_": { "name": "blocks_19_" },
		"blocks_20_": { "name": "blocks_20_" },
		"blocks_21_": { "name": "blocks_21_" },
		"blocks_22_": { "name": "blocks_22_" },
		"blocks_23_": { "name": "blocks_23_" },
		"blocks_24_": { "name": "blocks_24_" },
		"blocks_25_": { "name": "blocks_25_" },
		"blocks_26_": { "name": "blocks_26_" },
		"blocks_27_": { "name": "blocks_27_" },
		"blocks_28_": { "name": "blocks_28_" },
		"blocks_29_": { "name": "blocks_29_" },
		"blocks_30_": { "name": "blocks_30_" },
		"blocks_31_": { "name": "blocks_31_" },
		"blocks_32_": { "name": "blocks_32_" },
		"blocks_33_": { "name": "blocks_33_" },
		"blocks_34_": { "name": "blocks_34_" },
		"blocks_35_": { "name": "blocks_35_" },
		"blocks_36_": { "name": "blocks_36_" },
		"blocks_37_": { "name": "blocks_37_" },
		"blocks_38_": { "name": "blocks_38_" },
		"blocks_39_": { "name": "blocks_39_" },
		"head_": { "name": "head_" }
	}
};
var ModelNoiseScale = {
	"display_name": "Модель Шум Масштаб",
	"inputs": {
		"model": { "name": "Модель" },
		"noise_scale": { "name": "Масштаб шуму" }
	}
};
var ModelPatchLoader = {
	"display_name": "Модель Patch Loader",
	"inputs": { "name": { "name": "Назва" } }
};
var ModelSamplingAuraFlow = {
	"display_name": "Модель Семплування Aura Потік",
	"inputs": {
		"model": { "name": "Модель" },
		"shift": { "name": "shift" }
	}
};
var ModelSamplingContinuousEDM = {
	"display_name": "Модель Семплування Continuous",
	"inputs": {
		"model": { "name": "Модель" },
		"sampling": { "name": "sampling" },
		"sigma_max": { "name": "sigma_max" },
		"sigma_min": { "name": "sigma_min" }
	}
};
var ModelSamplingContinuousV = {
	"display_name": "Модель Семплування Continuous",
	"inputs": {
		"model": { "name": "Модель" },
		"sampling": { "name": "sampling" },
		"sigma_max": { "name": "sigma_max" },
		"sigma_min": { "name": "sigma_min" }
	}
};
var ModelSamplingDiscrete = {
	"display_name": "Модель Семплування Discrete",
	"inputs": {
		"model": { "name": "Модель" },
		"sampling": { "name": "sampling" },
		"zsnr": { "name": "zsnr" }
	}
};
var ModelSamplingFlux = {
	"display_name": "Модель Семплування Flux",
	"inputs": {
		"model": { "name": "Модель" },
		"max_shift": { "name": "max_shift" },
		"base_shift": { "name": "base_shift" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" }
	}
};
var ModelSamplingLTXV = {
	"display_name": "Модель Семплування",
	"inputs": {
		"model": { "name": "Модель" },
		"max_shift": { "name": "max_shift" },
		"base_shift": { "name": "base_shift" },
		"latent": { "name": "Латент" }
	},
	"outputs": { "0": {} }
};
var ModelSamplingSD3 = {
	"display_name": "Модель Семплування",
	"inputs": {
		"model": { "name": "Модель" },
		"shift": { "name": "shift" }
	}
};
var ModelSamplingStableCascade = {
	"display_name": "Модель Семплування Stable Cascade",
	"inputs": {
		"model": { "name": "Модель" },
		"shift": { "name": "shift" }
	}
};
var ModelSave = {
	"display_name": "Модель Зберегти",
	"inputs": {
		"model": { "name": "Модель" },
		"filename_prefix": { "name": "filename_prefix" }
	}
};
var MoGeInference = {
	"display_name": "Mo Ge Inference",
	"inputs": {
		"moge_model": { "name": "moge_model" },
		"image": { "name": "Зображення" },
		"resolution_level": { "name": "resolution_level" },
		"fov_x_degrees": { "name": "fov_x_degrees" },
		"batch_size": { "name": "Розмір партії" },
		"force_projection": { "name": "force_projection" },
		"apply_mask": { "name": "apply_mask" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var MoGePanoramaInference = {
	"display_name": "Mo Ge Panorama Inference",
	"inputs": {
		"moge_model": { "name": "moge_model" },
		"image": { "name": "Зображення" },
		"resolution_level": { "name": "resolution_level" },
		"split_resolution": { "name": "split_resolution" },
		"merge_resolution": { "name": "merge_resolution" },
		"batch_size": { "name": "Розмір партії" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var MoGePointMapToMesh = {
	"display_name": "Mo Ge Точка Карта To Меш",
	"inputs": {
		"moge_geometry": { "name": "moge_geometry" },
		"batch_index": { "name": "batch_index" },
		"decimation": { "name": "decimation" },
		"discontinuity_threshold": { "name": "discontinuity_threshold" },
		"texture": { "name": "texture" }
	},
	"outputs": { "0": {} }
};
var MoGeRender = {
	"display_name": "Mo Ge Рендеринг",
	"inputs": {
		"moge_geometry": { "name": "moge_geometry" },
		"output": { "name": "Вихід" }
	},
	"outputs": { "0": {} }
};
var Morphology = {
	"display_name": "Morphology",
	"inputs": {
		"image": { "name": "Зображення" },
		"operation": { "name": "operation" },
		"kernel_size": { "name": "Розмір ядра" }
	},
	"outputs": { "0": {} }
};
var MultiGPU_WorkUnits = {
	"display_name": "Multi Work Units",
	"inputs": {
		"model": { "name": "Модель" },
		"max_gpus": { "name": "max_gpus" }
	},
	"outputs": { "0": {} }
};
var NAGuidance = {
	"display_name": "Guidance",
	"inputs": {
		"model": { "name": "Модель" },
		"nag_scale": { "name": "nag_scale" },
		"nag_alpha": { "name": "nag_alpha" },
		"nag_tau": { "name": "nag_tau" }
	},
	"outputs": { "0": {} }
};
var NormalizeImages = {
	"display_name": "Normalize Images",
	"inputs": {
		"images": { "name": "Зображення" },
		"mean": { "name": "mean" },
		"std": { "name": "std" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var NormalizeVideoLatentStart = {
	"display_name": "Normalize Відео Латент Почати",
	"inputs": {
		"latent": { "name": "Латент" },
		"start_frame_count": { "name": "start_frame_count" },
		"reference_frame_count": { "name": "reference_frame_count" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var OpenAIChatConfig = {
	"display_name": "Відкрити Chat Конфігурація",
	"inputs": {
		"truncation": { "name": "truncation" },
		"max_output_tokens": { "name": "max_output_tokens" },
		"instructions": { "name": "instructions" }
	},
	"outputs": { "0": {} }
};
var OpenAIChatNode = {
	"display_name": "Відкрити Chat Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"persist_context": { "name": "persist_context" },
		"model": { "name": "Модель" },
		"images": { "name": "Зображення" },
		"files": { "name": "files" },
		"advanced_options": { "name": "розширені" }
	},
	"outputs": { "0": {} }
};
var OpenAIDalle2 = {
	"display_name": "Відкрити Dalle",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"seed": { "name": "Сід" },
		"size": { "name": "Розмір" },
		"n": { "name": "n" },
		"image": { "name": "Зображення" },
		"mask": { "name": "Маска" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var OpenAIDalle3 = {
	"display_name": "Відкрити Dalle",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"seed": { "name": "Сід" },
		"quality": { "name": "quality" },
		"style": { "name": "style" },
		"size": { "name": "Розмір" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var OpenAIGPTImage1 = {
	"display_name": "Відкрити Зображення",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"seed": { "name": "Сід" },
		"quality": { "name": "quality" },
		"background": { "name": "background" },
		"size": { "name": "Розмір" },
		"n": { "name": "n" },
		"image": { "name": "Зображення" },
		"mask": { "name": "Маска" },
		"model": { "name": "Модель" },
		"custom_width": { "name": "custom_width" },
		"custom_height": { "name": "custom_height" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var OpenAIGPTImageNodeV2 = {
	"display_name": "Відкрити Зображення Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"model": { "name": "Модель" },
		"n": { "name": "n" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_background": { "name": "model_background" },
		"model_custom_height": { "name": "model_custom_height" },
		"model_custom_width": { "name": "model_custom_width" },
		"model_quality": { "name": "model_quality" },
		"model_size": { "name": "model_size" }
	},
	"outputs": { "0": {} }
};
var OpenAIInputFiles = {
	"display_name": "Відкрити Вхід Files",
	"inputs": {
		"file": { "name": "Файл" },
		"OPENAI_INPUT_FILES": { "name": "OPENAI_INPUT_FILES" }
	},
	"outputs": { "0": {} }
};
var OpenAIVideoSora2 = {
	"display_name": "Відкрити Відео Sora",
	"inputs": {
		"model": { "name": "Модель" },
		"prompt": { "name": "Промпт" },
		"size": { "name": "Розмір" },
		"duration": { "name": "Тривалість" },
		"image": { "name": "Зображення" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var OpenRouterLLMNode = {
	"display_name": "Відкрити Router Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"system_prompt": { "name": "system_prompt" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_reasoning_effort": { "name": "model_reasoning_effort" }
	},
	"outputs": { "0": {} }
};
var OpticalFlowLoader = {
	"display_name": "Optical Потік Loader",
	"inputs": { "model_name": { "name": "model_name" } },
	"outputs": { "0": {} }
};
var OptimalStepsScheduler = {
	"display_name": "Optimal Steps Scheduler",
	"inputs": {
		"model_type": { "name": "Тип моделі" },
		"steps": { "name": "Кроки" },
		"denoise": { "name": "Денойз" }
	},
	"outputs": { "0": {} }
};
var Painter = {
	"display_name": "Painter",
	"inputs": {
		"mask": { "name": "Маска" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"bg_color": { "name": "bg_color" },
		"image": { "name": "Зображення" }
	},
	"outputs": {
		"0": {},
		"1": {}
	}
};
var PairConditioningCombine = {
	"display_name": "Pair Кондиціювання Combine",
	"inputs": {
		"positive_A": { "name": "positive_A" },
		"negative_A": { "name": "negative_A" },
		"positive_B": { "name": "positive_B" },
		"negative_B": { "name": "negative_B" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var PairConditioningSetDefaultCombine = {
	"display_name": "Pair Кондиціювання Множина Default Combine",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"positive_DEFAULT": { "name": "positive_DEFAULT" },
		"negative_DEFAULT": { "name": "negative_DEFAULT" },
		"hooks": { "name": "hooks" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var PairConditioningSetProperties = {
	"display_name": "Pair Кондиціювання Множина Properties",
	"inputs": {
		"positive_NEW": { "name": "positive_NEW" },
		"negative_NEW": { "name": "negative_NEW" },
		"strength": { "name": "Сила" },
		"set_cond_area": { "name": "set_cond_area" },
		"mask": { "name": "Маска" },
		"hooks": { "name": "hooks" },
		"timesteps": { "name": "timesteps" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var PairConditioningSetPropertiesAndCombine = {
	"display_name": "Pair Кондиціювання Множина Properties And Combine",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"positive_NEW": { "name": "positive_NEW" },
		"negative_NEW": { "name": "negative_NEW" },
		"strength": { "name": "Сила" },
		"set_cond_area": { "name": "set_cond_area" },
		"mask": { "name": "Маска" },
		"hooks": { "name": "hooks" },
		"timesteps": { "name": "timesteps" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var PatchModelAddDownscale = {
	"display_name": "Patch Модель Додати Downscale",
	"inputs": {
		"model": { "name": "Модель" },
		"block_number": { "name": "block_number" },
		"downscale_factor": { "name": "downscale_factor" },
		"start_percent": { "name": "start_percent" },
		"end_percent": { "name": "end_percent" },
		"downscale_after_skip": { "name": "downscale_after_skip" },
		"downscale_method": { "name": "downscale_method" },
		"upscale_method": { "name": "upscale_method" }
	},
	"outputs": { "0": {} }
};
var PerpNeg = {
	"display_name": "Perp Neg",
	"inputs": {
		"model": { "name": "Модель" },
		"empty_conditioning": { "name": "empty_conditioning" },
		"neg_scale": { "name": "neg_scale" }
	},
	"outputs": { "0": {} }
};
var PerpNegGuider = {
	"display_name": "Perp Neg Guider",
	"inputs": {
		"model": { "name": "Модель" },
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"empty_conditioning": { "name": "empty_conditioning" },
		"cfg": { "name": "CFG" },
		"neg_scale": { "name": "neg_scale" }
	},
	"outputs": { "0": {} }
};
var PerturbedAttentionGuidance = {
	"display_name": "Perturbed Attention Guidance",
	"inputs": {
		"model": { "name": "Модель" },
		"scale": { "name": "Масштаб" }
	},
	"outputs": { "0": {} }
};
var PhotoMakerEncode = {
	"display_name": "Photo Maker Кодувати",
	"inputs": {
		"photomaker": { "name": "photomaker" },
		"image": { "name": "Зображення" },
		"clip": { "name": "CLIP" },
		"text": { "name": "Текст" }
	},
	"outputs": { "0": {} }
};
var PhotoMakerLoader = {
	"display_name": "Photo Maker Loader",
	"inputs": { "photomaker_model_name": { "name": "photomaker_model_name" } },
	"outputs": { "0": {} }
};
var PiDConditioning = {
	"display_name": "Pi Кондиціювання",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"latent": { "name": "Латент" },
		"latent_format": { "name": "Формат латенту" },
		"degrade_sigma": { "name": "degrade_sigma" }
	},
	"outputs": { "0": {} }
};
var PixverseImageToVideoNode = {
	"display_name": "Pixverse Зображення To Відео Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"prompt": { "name": "Промпт" },
		"quality": { "name": "quality" },
		"duration_seconds": { "name": "duration_seconds" },
		"motion_mode": { "name": "motion_mode" },
		"seed": { "name": "Сід" },
		"negative_prompt": { "name": "Негативний промпт" },
		"pixverse_template": { "name": "pixverse_template" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var PixverseTemplateNode = {
	"display_name": "Pixverse Template Node",
	"inputs": { "template": { "name": "template" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var PixverseTextToVideoNode = {
	"display_name": "Pixverse Текст To Відео Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"quality": { "name": "quality" },
		"duration_seconds": { "name": "duration_seconds" },
		"motion_mode": { "name": "motion_mode" },
		"seed": { "name": "Сід" },
		"negative_prompt": { "name": "Негативний промпт" },
		"pixverse_template": { "name": "pixverse_template" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var PixverseTransitionVideoNode = {
	"display_name": "Pixverse Transition Відео Node",
	"inputs": {
		"first_frame": { "name": "first_frame" },
		"last_frame": { "name": "last_frame" },
		"prompt": { "name": "Промпт" },
		"quality": { "name": "quality" },
		"duration_seconds": { "name": "duration_seconds" },
		"motion_mode": { "name": "motion_mode" },
		"seed": { "name": "Сід" },
		"negative_prompt": { "name": "Негативний промпт" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var PolyexponentialScheduler = {
	"display_name": "Polyexponential Scheduler",
	"inputs": {
		"steps": { "name": "Кроки" },
		"sigma_max": { "name": "sigma_max" },
		"sigma_min": { "name": "sigma_min" },
		"rho": { "name": "rho" }
	},
	"outputs": { "0": {} }
};
var PorterDuffImageComposite = {
	"display_name": "Porter Duff Зображення Composite",
	"inputs": {
		"source": { "name": "Джерело" },
		"source_alpha": { "name": "source_alpha" },
		"destination": { "name": "destination" },
		"destination_alpha": { "name": "destination_alpha" },
		"mode": { "name": "Режим" }
	},
	"outputs": {
		"0": {},
		"1": {}
	}
};
var Preview3D = {
	"display_name": "Попередній перегляд",
	"inputs": {
		"model_file": { "name": "model_file" },
		"camera_info": { "name": "camera_info" },
		"bg_image": { "name": "bg_image" },
		"image": { "name": "Зображення" }
	}
};
var Preview3DAdvanced = {
	"display_name": "Попередній перегляд Advanced",
	"inputs": {
		"model_3d": { "name": "model_3d" },
		"viewport_state": { "name": "viewport_state" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"model_3d_info": { "name": "model_3d_info" },
		"camera_info": { "name": "camera_info" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" },
		"4": { "name": "Вихід 4" }
	}
};
var PreviewAny = {
	"display_name": "Попередній перегляд Any",
	"inputs": {
		"source": { "name": "Джерело" },
		"preview_mode": {},
		"preview_text": {}
	}
};
var PreviewAudio = {
	"display_name": "Попередній перегляд Аудіо",
	"inputs": {
		"audio": { "name": "audio" },
		"audioUI": { "name": "audioUI" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var PreviewGaussianSplat = {
	"display_name": "Попередній перегляд Gaussian Splat",
	"inputs": {
		"model_3d": { "name": "model_3d" },
		"viewport_state": { "name": "viewport_state" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"model_3d_info": { "name": "model_3d_info" },
		"camera_info": { "name": "camera_info" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" },
		"4": { "name": "Вихід 4" }
	}
};
var PreviewImage = {
	"display_name": "Попередній перегляд Зображення",
	"inputs": { "images": { "name": "Зображення" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var PreviewPointCloud = {
	"display_name": "Попередній перегляд Точка Cloud",
	"inputs": {
		"model_3d": { "name": "model_3d" },
		"viewport_state": { "name": "viewport_state" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"model_3d_info": { "name": "model_3d_info" },
		"camera_info": { "name": "camera_info" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" },
		"4": { "name": "Вихід 4" }
	}
};
var PrimitiveBoolean = {
	"display_name": "Primitive Логічний",
	"inputs": { "value": { "name": "Значення" } },
	"outputs": { "0": {} }
};
var PrimitiveBoundingBox = {
	"display_name": "Primitive Bounding Box",
	"inputs": {
		"x": { "name": "x" },
		"y": { "name": "y" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" }
	},
	"outputs": { "0": {} }
};
var PrimitiveFloat = {
	"display_name": "Primitive Дробове число",
	"inputs": { "value": { "name": "Значення" } },
	"outputs": { "0": {} }
};
var PrimitiveInt = {
	"display_name": "Primitive Int",
	"inputs": {
		"value": { "name": "Значення" },
		"fixed": { "name": "fixed" }
	},
	"outputs": { "0": {} }
};
var PrimitiveString = {
	"display_name": "Primitive Рядок",
	"inputs": { "value": { "name": "Значення" } },
	"outputs": { "0": {} }
};
var PrimitiveStringMultiline = {
	"display_name": "Primitive Рядок Multiline",
	"inputs": { "value": { "name": "Значення" } },
	"outputs": { "0": {} }
};
var QuadrupleCLIPLoader = {
	"display_name": "Quadruple Loader",
	"inputs": {
		"clip_name1": { "name": "clip_name1" },
		"clip_name2": { "name": "clip_name2" },
		"clip_name3": { "name": "clip_name3" },
		"clip_name4": { "name": "clip_name4" }
	},
	"outputs": { "0": {} }
};
var QuiverImageToSVGNode = {
	"display_name": "Quiver Зображення To Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"auto_crop": { "name": "auto_crop" },
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_presence_penalty": { "name": "model_presence_penalty" },
		"model_target_size": { "name": "model_target_size" },
		"model_temperature": { "name": "model_temperature" },
		"model_top_p": { "name": "model_top_p" }
	},
	"outputs": { "0": {} }
};
var QuiverTextToSVGNode = {
	"display_name": "Quiver Текст To Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"instructions": { "name": "instructions" },
		"reference_images": { "name": "reference_images" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_presence_penalty": { "name": "model_presence_penalty" },
		"model_temperature": { "name": "model_temperature" },
		"model_top_p": { "name": "model_top_p" }
	},
	"outputs": { "0": {} }
};
var QwenImageDiffsynthControlnet = {
	"display_name": "Qwen Зображення Diffsynth Controlnet",
	"inputs": {
		"model": { "name": "Модель" },
		"model_patch": { "name": "model_patch" },
		"vae": { "name": "VAE" },
		"image": { "name": "Зображення" },
		"strength": { "name": "Сила" },
		"mask": { "name": "Маска" }
	}
};
var RandomCropImages = {
	"display_name": "Випадковий Обрізати Images",
	"inputs": {
		"images": { "name": "Зображення" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var RandomNoise = {
	"display_name": "Випадковий Шум",
	"inputs": {
		"noise_seed": { "name": "Сід шуму" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var RebatchImages = {
	"display_name": "Rebatch Images",
	"inputs": {
		"images": { "name": "Зображення" },
		"batch_size": { "name": "Розмір партії" }
	},
	"outputs": { "0": {} }
};
var RebatchLatents = {
	"display_name": "Rebatch Latents",
	"inputs": {
		"latents": { "name": "latents" },
		"batch_size": { "name": "Розмір партії" }
	},
	"outputs": { "0": {} }
};
var RecordAudio = {
	"display_name": "Записати Аудіо",
	"inputs": { "audio": { "name": "audio" } },
	"outputs": { "0": {} }
};
var RecraftColorRGB = {
	"display_name": "Recraft Колір",
	"inputs": {
		"r": { "name": "r" },
		"g": { "name": "g" },
		"b": { "name": "b" },
		"recraft_color": { "name": "recraft_color" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var RecraftControls = {
	"display_name": "Recraft Controls",
	"inputs": {
		"colors": { "name": "colors" },
		"background_color": { "name": "background_color" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var RecraftCreateStyleNode = {
	"display_name": "Recraft Створити Стиль Node",
	"inputs": {
		"style": { "name": "style" },
		"images": { "name": "Зображення" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var RecraftCreativeUpscaleNode = {
	"display_name": "Recraft Creative Upscale Node",
	"inputs": { "image": { "name": "Зображення" } },
	"outputs": { "0": {} }
};
var RecraftCrispUpscaleNode = {
	"display_name": "Recraft Crisp Upscale Node",
	"inputs": { "image": { "name": "Зображення" } },
	"outputs": { "0": {} }
};
var RecraftImageInpaintingNode = {
	"display_name": "Recraft Зображення Inpainting Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"mask": { "name": "Маска" },
		"prompt": { "name": "Промпт" },
		"n": { "name": "n" },
		"seed": { "name": "Сід" },
		"recraft_style": { "name": "recraft_style" },
		"negative_prompt": { "name": "Негативний промпт" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var RecraftImageToImageNode = {
	"display_name": "Recraft Зображення To Зображення Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"prompt": { "name": "Промпт" },
		"n": { "name": "n" },
		"strength": { "name": "Сила" },
		"seed": { "name": "Сід" },
		"recraft_style": { "name": "recraft_style" },
		"negative_prompt": { "name": "Негативний промпт" },
		"recraft_controls": { "name": "recraft_controls" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var RecraftRemoveBackgroundNode = {
	"display_name": "Recraft Видалити Фон Node",
	"inputs": { "image": { "name": "Зображення" } },
	"outputs": {
		"0": {},
		"1": {}
	}
};
var RecraftReplaceBackgroundNode = {
	"display_name": "Recraft Замінити Фон Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"prompt": { "name": "Промпт" },
		"n": { "name": "n" },
		"seed": { "name": "Сід" },
		"recraft_style": { "name": "recraft_style" },
		"negative_prompt": { "name": "Негативний промпт" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var RecraftStyleV3DigitalIllustration = {
	"display_name": "Recraft Стиль Digital Illustration",
	"inputs": { "substyle": { "name": "substyle" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var RecraftStyleV3InfiniteStyleLibrary = {
	"display_name": "Recraft Стиль Infinite Стиль Library",
	"inputs": { "style_id": { "name": "style_id" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var RecraftStyleV3LogoRaster = {
	"display_name": "Recraft Стиль Logo Raster",
	"inputs": { "substyle": { "name": "substyle" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var RecraftStyleV3RealisticImage = {
	"display_name": "Recraft Стиль Realistic Зображення",
	"inputs": { "substyle": { "name": "substyle" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var RecraftTextToImageNode = {
	"display_name": "Recraft Текст To Зображення Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"size": { "name": "Розмір" },
		"n": { "name": "n" },
		"seed": { "name": "Сід" },
		"recraft_style": { "name": "recraft_style" },
		"negative_prompt": { "name": "Негативний промпт" },
		"recraft_controls": { "name": "recraft_controls" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var RecraftTextToVectorNode = {
	"display_name": "Recraft Текст To Вектор Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"substyle": { "name": "substyle" },
		"size": { "name": "Розмір" },
		"n": { "name": "n" },
		"seed": { "name": "Сід" },
		"negative_prompt": { "name": "Негативний промпт" },
		"recraft_controls": { "name": "recraft_controls" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var RecraftV4TextToImageNode = {
	"display_name": "Recraft Текст To Зображення Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"negative_prompt": { "name": "Негативний промпт" },
		"model": { "name": "Модель" },
		"n": { "name": "n" },
		"seed": { "name": "Сід" },
		"recraft_controls": { "name": "recraft_controls" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_size": { "name": "model_size" }
	},
	"outputs": { "0": {} }
};
var RecraftV4TextToVectorNode = {
	"display_name": "Recraft Текст To Вектор Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"negative_prompt": { "name": "Негативний промпт" },
		"model": { "name": "Модель" },
		"n": { "name": "n" },
		"seed": { "name": "Сід" },
		"recraft_controls": { "name": "recraft_controls" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_size": { "name": "model_size" }
	},
	"outputs": { "0": {} }
};
var RecraftVectorizeImageNode = {
	"display_name": "Recraft Vectorize Зображення Node",
	"inputs": { "image": { "name": "Зображення" } },
	"outputs": { "0": {} }
};
var ReferenceLatent = {
	"display_name": "Reference Латент",
	"inputs": {
		"conditioning": { "name": "Кондиціювання" },
		"latent": { "name": "Латент" }
	},
	"outputs": { "0": {} }
};
var ReferenceTimbreAudio = {
	"display_name": "Reference Timbre Аудіо",
	"inputs": {
		"conditioning": { "name": "Кондиціювання" },
		"latent": { "name": "Латент" }
	},
	"outputs": { "0": {} }
};
var RegexExtract = {
	"display_name": "Regex Виділити",
	"inputs": {
		"string": { "name": "Рядок" },
		"regex_pattern": { "name": "regex_pattern" },
		"mode": { "name": "Режим" },
		"case_insensitive": { "name": "case_insensitive" },
		"multiline": { "name": "multiline" },
		"dotall": { "name": "dotall" },
		"group_index": { "name": "group_index" }
	},
	"outputs": { "0": {} }
};
var RegexMatch = {
	"display_name": "Regex Match",
	"inputs": {
		"string": { "name": "Рядок" },
		"regex_pattern": { "name": "regex_pattern" },
		"case_insensitive": { "name": "case_insensitive" },
		"multiline": { "name": "multiline" },
		"dotall": { "name": "dotall" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var RegexReplace = {
	"display_name": "Regex Замінити",
	"inputs": {
		"string": { "name": "Рядок" },
		"regex_pattern": { "name": "regex_pattern" },
		"replace": { "name": "Замінити" },
		"case_insensitive": { "name": "case_insensitive" },
		"multiline": { "name": "multiline" },
		"dotall": { "name": "dotall" },
		"count": { "name": "Кількість" }
	},
	"outputs": { "0": {} }
};
var RemoveBackground = {
	"display_name": "Видалити Фон",
	"inputs": {
		"bg_removal_model": { "name": "bg_removal_model" },
		"image": { "name": "Зображення" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var RenderSplat = {
	"display_name": "Рендеринг Splat",
	"inputs": {
		"splat": { "name": "splat" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"frames": { "name": "frames" },
		"splat_scale": { "name": "splat_scale" },
		"sharpen": { "name": "sharpen" },
		"headlight_shading": { "name": "headlight_shading" },
		"opacity_threshold": { "name": "opacity_threshold" },
		"render_style": { "name": "render_style" },
		"background": { "name": "background" },
		"bg_image": { "name": "bg_image" },
		"camera_info": { "name": "camera_info" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var RenormCFG = {
	"display_name": "Renorm",
	"inputs": {
		"model": { "name": "Модель" },
		"cfg_trunc": { "name": "cfg_trunc" },
		"renorm_cfg": { "name": "renorm_cfg" }
	},
	"outputs": { "0": {} }
};
var RepeatImageBatch = {
	"display_name": "Повторити Зображення Партія",
	"inputs": {
		"image": { "name": "Зображення" },
		"amount": { "name": "Сума" }
	},
	"outputs": { "0": {} }
};
var RepeatLatentBatch = {
	"display_name": "Повторити Латент Партія",
	"inputs": {
		"samples": { "name": "Семпли" },
		"amount": { "name": "Сума" }
	}
};
var ReplaceText = {
	"display_name": "Замінити Текст",
	"inputs": {
		"texts": { "name": "Тексти" },
		"find": { "name": "find" },
		"replace": { "name": "Замінити" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var ReplaceVideoLatentFrames = {
	"display_name": "Замінити Відео Латент Frames",
	"inputs": {
		"destination": { "name": "destination" },
		"index": { "name": "index" },
		"source": { "name": "Джерело" }
	},
	"outputs": { "0": {} }
};
var RescaleCFG = {
	"display_name": "Rescale",
	"inputs": {
		"model": { "name": "Модель" },
		"multiplier": { "name": "multiplier" }
	}
};
var ResizeAndPadImage = {
	"display_name": "Змінити розмір And Pad Зображення",
	"inputs": {
		"image": { "name": "Зображення" },
		"target_width": { "name": "target_width" },
		"target_height": { "name": "target_height" },
		"padding_color": { "name": "padding_color" },
		"interpolation": { "name": "interpolation" }
	},
	"outputs": { "0": {} }
};
var ResizeImageMaskNode = {
	"display_name": "Змінити розмір Зображення Маска Node",
	"inputs": {
		"input": { "name": "Вхід" },
		"resize_type": { "name": "resize_type" },
		"scale_method": { "name": "scale_method" },
		"resize_type_crop": { "name": "resize_type_crop" },
		"resize_type_height": { "name": "resize_type_height" },
		"resize_type_width": { "name": "resize_type_width" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var ResizeImagesByLongerEdge = {
	"display_name": "Змінити розмір Images By Longer Край",
	"inputs": {
		"images": { "name": "Зображення" },
		"longer_edge": { "name": "longer_edge" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var ResizeImagesByShorterEdge = {
	"display_name": "Змінити розмір Images By Shorter Край",
	"inputs": {
		"images": { "name": "Зображення" },
		"shorter_edge": { "name": "shorter_edge" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var ResolutionBucket = {
	"display_name": "Resolution Bucket",
	"inputs": {
		"latents": { "name": "latents" },
		"conditioning": { "name": "Кондиціювання" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var ResolutionSelector = {
	"display_name": "Resolution Selector",
	"inputs": {
		"aspect_ratio": { "name": "aspect_ratio" },
		"megapixels": { "name": "megapixels" },
		"multiple": { "name": "multiple" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var ReveImageCreateNode = {
	"display_name": "Reve Зображення Створити Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"model": { "name": "Модель" },
		"upscale": { "name": "upscale" },
		"remove_background": { "name": "remove_background" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_aspect_ratio": { "name": "model_aspect_ratio" },
		"model_test_time_scaling": { "name": "model_test_time_scaling" }
	},
	"outputs": { "0": {} }
};
var ReveImageEditNode = {
	"display_name": "Reve Зображення Редагувати Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"edit_instruction": { "name": "edit_instruction" },
		"model": { "name": "Модель" },
		"upscale": { "name": "upscale" },
		"remove_background": { "name": "remove_background" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_aspect_ratio": { "name": "model_aspect_ratio" },
		"model_test_time_scaling": { "name": "model_test_time_scaling" }
	},
	"outputs": { "0": {} }
};
var ReveImageRemixNode = {
	"display_name": "Reve Зображення Remix Node",
	"inputs": {
		"reference_images": { "name": "reference_images" },
		"prompt": { "name": "Промпт" },
		"model": { "name": "Модель" },
		"upscale": { "name": "upscale" },
		"remove_background": { "name": "remove_background" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_aspect_ratio": { "name": "model_aspect_ratio" },
		"model_test_time_scaling": { "name": "model_test_time_scaling" }
	},
	"outputs": { "0": {} }
};
var Rodin3D_Detail = {
	"display_name": "Rodin Detail",
	"inputs": {
		"Images": { "name": "Images" },
		"Seed": { "name": "Сід" },
		"Material_Type": { "name": "Material_Type" },
		"Polygon_count": { "name": "Polygon_count" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var Rodin3D_Gen2 = {
	"display_name": "Rodin Gen",
	"inputs": {
		"Images": { "name": "Images" },
		"TAPose": { "name": "TAPose" },
		"Seed": { "name": "Сід" },
		"Material_Type": { "name": "Material_Type" },
		"Polygon_count": { "name": "Polygon_count" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var Rodin3D_Gen25_Image = {
	"display_name": "Rodin Gen Зображення",
	"inputs": {
		"images": { "name": "Зображення" },
		"mode": { "name": "Режим" },
		"material": { "name": "material" },
		"geometry_file_format": { "name": "geometry_file_format" },
		"texture_mode": { "name": "texture_mode" },
		"seed": { "name": "Сід" },
		"TAPose": { "name": "TAPose" },
		"hd_texture": { "name": "hd_texture" },
		"texture_delight": { "name": "texture_delight" },
		"use_original_alpha": { "name": "use_original_alpha" },
		"addon_highpack": { "name": "addon_highpack" },
		"bbox_width": { "name": "bbox_width" },
		"bbox_height": { "name": "bbox_height" },
		"bbox_length": { "name": "bbox_length" },
		"height_cm": { "name": "height_cm" },
		"control_after_generate": { "name": "control_after_generate" },
		"mode_creative": { "name": "mode_creative" },
		"mode_polygon_count": { "name": "mode_polygon_count" },
		"mode_tier": { "name": "mode_tier" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var Rodin3D_Gen25_Text = {
	"display_name": "Rodin Gen Текст",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"mode": { "name": "Режим" },
		"material": { "name": "material" },
		"geometry_file_format": { "name": "geometry_file_format" },
		"texture_mode": { "name": "texture_mode" },
		"seed": { "name": "Сід" },
		"TAPose": { "name": "TAPose" },
		"hd_texture": { "name": "hd_texture" },
		"texture_delight": { "name": "texture_delight" },
		"addon_highpack": { "name": "addon_highpack" },
		"bbox_width": { "name": "bbox_width" },
		"bbox_height": { "name": "bbox_height" },
		"bbox_length": { "name": "bbox_length" },
		"height_cm": { "name": "height_cm" },
		"control_after_generate": { "name": "control_after_generate" },
		"mode_creative": { "name": "mode_creative" },
		"mode_polygon_count": { "name": "mode_polygon_count" },
		"mode_tier": { "name": "mode_tier" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var Rodin3D_Regular = {
	"display_name": "Rodin Regular",
	"inputs": {
		"Images": { "name": "Images" },
		"Seed": { "name": "Сід" },
		"Material_Type": { "name": "Material_Type" },
		"Polygon_count": { "name": "Polygon_count" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var Rodin3D_Sketch = {
	"display_name": "Rodin Ескіз",
	"inputs": {
		"Images": { "name": "Images" },
		"Seed": { "name": "Сід" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var Rodin3D_Smooth = {
	"display_name": "Rodin Smooth",
	"inputs": {
		"Images": { "name": "Images" },
		"Seed": { "name": "Сід" },
		"Material_Type": { "name": "Material_Type" },
		"Polygon_count": { "name": "Polygon_count" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var RTDETR_detect = {
	"display_name": "RTDETR_detect",
	"inputs": {
		"model": { "name": "Модель" },
		"image": { "name": "Зображення" },
		"threshold": { "name": "Поріг" },
		"class_name": { "name": "class_name" },
		"max_detections": { "name": "max_detections" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var RunwayAleph2KeyframeNode = {
	"display_name": "Runway Aleph Keyframe Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"timing": { "name": "timing" },
		"keyframes": { "name": "keyframes" },
		"timing_seconds": { "name": "timing_seconds" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var RunwayAleph2PromptImageNode = {
	"display_name": "Runway Aleph Промпт Зображення Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"position": { "name": "position" },
		"prompt_images": { "name": "prompt_images" },
		"position_seconds": { "name": "position_seconds" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var RunwayAleph2VideoToVideoNode = {
	"display_name": "Runway Aleph Відео To Відео Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"video": { "name": "video" },
		"seed": { "name": "Сід" },
		"public_figure_threshold": { "name": "public_figure_threshold" },
		"keyframes": { "name": "keyframes" },
		"prompt_images": { "name": "prompt_images" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var RunwayFirstLastFrameNode = {
	"display_name": "Runway Перший Останній Кадр Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"start_frame": { "name": "start_frame" },
		"end_frame": { "name": "end_frame" },
		"duration": { "name": "Тривалість" },
		"ratio": { "name": "Відношення" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var RunwayImageToVideoNodeGen3a = {
	"display_name": "Runway Зображення To Відео Node Gen",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"start_frame": { "name": "start_frame" },
		"duration": { "name": "Тривалість" },
		"ratio": { "name": "Відношення" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var RunwayImageToVideoNodeGen4 = {
	"display_name": "Runway Зображення To Відео Node Gen",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"start_frame": { "name": "start_frame" },
		"duration": { "name": "Тривалість" },
		"ratio": { "name": "Відношення" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var RunwayTextToImageNode = {
	"display_name": "Runway Текст To Зображення Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"ratio": { "name": "Відношення" },
		"reference_image": { "name": "reference_image" }
	},
	"outputs": { "0": {} }
};
var SAM3_Detect = {
	"display_name": "Detect",
	"inputs": {
		"model": { "name": "Модель" },
		"image": { "name": "Зображення" },
		"threshold": { "name": "Поріг" },
		"refine_iterations": { "name": "refine_iterations" },
		"individual_masks": { "name": "individual_masks" },
		"conditioning": { "name": "Кондиціювання" },
		"bboxes": { "name": "bboxes" },
		"positive_coords": { "name": "positive_coords" },
		"negative_coords": { "name": "negative_coords" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var SAM3_TrackPreview = {
	"display_name": "Трек Попередній перегляд",
	"inputs": {
		"track_data": { "name": "track_data" },
		"opacity": { "name": "opacity" },
		"fps": { "name": "fps" },
		"images": { "name": "Зображення" }
	}
};
var SAM3_TrackToMask = {
	"display_name": "Трек To Маска",
	"inputs": {
		"track_data": { "name": "track_data" },
		"object_indices": { "name": "object_indices" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var SAM3_VideoTrack = {
	"display_name": "Відео Трек",
	"inputs": {
		"images": { "name": "Зображення" },
		"model": { "name": "Модель" },
		"detection_threshold": { "name": "detection_threshold" },
		"max_objects": { "name": "max_objects" },
		"detect_interval": { "name": "detect_interval" },
		"initial_mask": { "name": "initial_mask" },
		"conditioning": { "name": "Кондиціювання" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var SamplerARVideo = {
	"display_name": "Семплер Відео",
	"inputs": { "num_frame_per_block": { "name": "num_frame_per_block" } },
	"outputs": { "0": {} }
};
var SamplerCustom = {
	"display_name": "Семплер Custom",
	"inputs": {
		"model": { "name": "Модель" },
		"add_noise": { "name": "add_noise" },
		"noise_seed": { "name": "Сід шуму" },
		"cfg": { "name": "CFG" },
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"sampler": { "name": "sampler" },
		"sigmas": { "name": "Сигми" },
		"latent_image": { "name": "Латентне зображення" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var SamplerCustomAdvanced = {
	"display_name": "Семплер Custom Advanced",
	"inputs": {
		"noise": { "name": "Шум" },
		"guider": { "name": "guider" },
		"sampler": { "name": "sampler" },
		"sigmas": { "name": "Сигми" },
		"latent_image": { "name": "Латентне зображення" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var SamplerDPMAdaptative = {
	"display_name": "Семплер Adaptative",
	"inputs": {
		"order": { "name": "order" },
		"rtol": { "name": "rtol" },
		"atol": { "name": "atol" },
		"h_init": { "name": "h_init" },
		"pcoeff": { "name": "pcoeff" },
		"icoeff": { "name": "icoeff" },
		"dcoeff": { "name": "dcoeff" },
		"accept_safety": { "name": "accept_safety" },
		"eta": { "name": "eta" },
		"s_noise": { "name": "s_noise" }
	},
	"outputs": { "0": {} }
};
var SamplerDPMPP_2M_SDE = {
	"display_name": "Семплер",
	"inputs": {
		"solver_type": { "name": "solver_type" },
		"eta": { "name": "eta" },
		"s_noise": { "name": "s_noise" },
		"noise_device": { "name": "noise_device" }
	},
	"outputs": { "0": {} }
};
var SamplerDPMPP_2S_Ancestral = {
	"display_name": "Семплер Ancestral",
	"inputs": {
		"eta": { "name": "eta" },
		"s_noise": { "name": "s_noise" }
	},
	"outputs": { "0": {} }
};
var SamplerDPMPP_3M_SDE = {
	"display_name": "Семплер",
	"inputs": {
		"eta": { "name": "eta" },
		"s_noise": { "name": "s_noise" },
		"noise_device": { "name": "noise_device" }
	},
	"outputs": { "0": {} }
};
var SamplerDPMPP_SDE = {
	"display_name": "Семплер",
	"inputs": {
		"eta": { "name": "eta" },
		"s_noise": { "name": "s_noise" },
		"r": { "name": "r" },
		"noise_device": { "name": "noise_device" }
	},
	"outputs": { "0": {} }
};
var SamplerER_SDE = {
	"display_name": "Семплер",
	"inputs": {
		"solver_type": { "name": "solver_type" },
		"max_stage": { "name": "max_stage" },
		"eta": { "name": "eta" },
		"s_noise": { "name": "s_noise" }
	},
	"outputs": { "0": {} }
};
var SamplerEulerAncestral = {
	"display_name": "Семплер Euler Ancestral",
	"inputs": {
		"eta": { "name": "eta" },
		"s_noise": { "name": "s_noise" }
	},
	"outputs": { "0": {} }
};
var SamplerEulerAncestralCFGPP = {
	"display_name": "Семплер Euler Ancestral",
	"inputs": {
		"eta": { "name": "eta" },
		"s_noise": { "name": "s_noise" }
	},
	"outputs": { "0": {} }
};
var SamplerEulerCFGpp = {
	"display_name": "Семплер Euler Gpp",
	"inputs": { "version": { "name": "version" } },
	"outputs": { "0": {} }
};
var SamplerLCM = {
	"display_name": "Семплер",
	"inputs": {
		"s_noise": { "name": "s_noise" },
		"s_noise_end": { "name": "s_noise_end" },
		"noise_clip_std": { "name": "noise_clip_std" }
	},
	"outputs": { "0": {} }
};
var SamplerLCMUpscale = {
	"display_name": "Семплер Upscale",
	"inputs": {
		"scale_ratio": { "name": "scale_ratio" },
		"scale_steps": { "name": "scale_steps" },
		"upscale_method": { "name": "upscale_method" }
	},
	"outputs": { "0": {} }
};
var SamplerLMS = {
	"display_name": "Семплер",
	"inputs": { "order": { "name": "order" } },
	"outputs": { "0": {} }
};
var SamplerSASolver = {
	"display_name": "Семплер Solver",
	"inputs": {
		"model": { "name": "Модель" },
		"eta": { "name": "eta" },
		"sde_start_percent": { "name": "sde_start_percent" },
		"sde_end_percent": { "name": "sde_end_percent" },
		"s_noise": { "name": "s_noise" },
		"predictor_order": { "name": "predictor_order" },
		"corrector_order": { "name": "corrector_order" },
		"use_pece": { "name": "use_pece" },
		"simple_order_2": { "name": "simple_order_2" }
	},
	"outputs": { "0": {} }
};
var SamplerSEEDS2 = {
	"display_name": "Семплер",
	"inputs": {
		"solver_type": { "name": "solver_type" },
		"eta": { "name": "eta" },
		"s_noise": { "name": "s_noise" },
		"r": { "name": "r" }
	},
	"outputs": { "0": {} }
};
var SamplingPercentToSigma = {
	"display_name": "Семплування Percent To Sigma",
	"inputs": {
		"model": { "name": "Модель" },
		"sampling_percent": { "name": "sampling_percent" },
		"return_actual_sigma": { "name": "return_actual_sigma" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var Save3DAdvanced = {
	"display_name": "Зберегти Advanced",
	"inputs": {
		"model_3d": { "name": "model_3d" },
		"filename_prefix": { "name": "filename_prefix" },
		"viewport_state": { "name": "viewport_state" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"model_3d_info": { "name": "model_3d_info" },
		"camera_info": { "name": "camera_info" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" },
		"4": { "name": "Вихід 4" }
	}
};
var SaveAnimatedPNG = {
	"display_name": "Зберегти Animated",
	"inputs": {
		"images": { "name": "Зображення" },
		"filename_prefix": { "name": "filename_prefix" },
		"fps": { "name": "fps" },
		"compress_level": { "name": "compress_level" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var SaveAnimatedWEBP = {
	"display_name": "Зберегти Animated",
	"inputs": {
		"images": { "name": "Зображення" },
		"filename_prefix": { "name": "filename_prefix" },
		"fps": { "name": "fps" },
		"lossless": { "name": "lossless" },
		"quality": { "name": "quality" },
		"method": { "name": "method" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var SaveAudio = {
	"display_name": "Зберегти Аудіо",
	"inputs": {
		"audio": { "name": "audio" },
		"filename_prefix": { "name": "filename_prefix" },
		"audioUI": { "name": "audioUI" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var SaveAudioAdvanced = {
	"display_name": "Зберегти Аудіо Advanced",
	"inputs": {
		"audio": { "name": "audio" },
		"filename_prefix": { "name": "filename_prefix" },
		"format": { "name": "format" },
		"audioUI": { "name": "audioUI" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var SaveAudioMP3 = {
	"display_name": "Зберегти Аудіо",
	"inputs": {
		"audio": { "name": "audio" },
		"filename_prefix": { "name": "filename_prefix" },
		"quality": { "name": "quality" },
		"audioUI": { "name": "audioUI" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var SaveAudioOpus = {
	"display_name": "Зберегти Аудіо Opus",
	"inputs": {
		"audio": { "name": "audio" },
		"filename_prefix": { "name": "filename_prefix" },
		"quality": { "name": "quality" },
		"audioUI": { "name": "audioUI" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var SaveGaussianSplat = {
	"display_name": "Зберегти Gaussian Splat",
	"inputs": {
		"model_3d": { "name": "model_3d" },
		"filename_prefix": { "name": "filename_prefix" },
		"viewport_state": { "name": "viewport_state" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"model_3d_info": { "name": "model_3d_info" },
		"camera_info": { "name": "camera_info" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" },
		"4": { "name": "Вихід 4" }
	}
};
var SaveGLB = {
	"display_name": "Зберегти",
	"inputs": {
		"mesh": { "name": "mesh" },
		"filename_prefix": { "name": "filename_prefix" },
		"image": { "name": "Зображення" }
	}
};
var SaveImage = {
	"display_name": "Зберегти Зображення",
	"inputs": {
		"images": { "name": "Зображення" },
		"filename_prefix": { "name": "filename_prefix" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var SaveImageAdvanced = {
	"display_name": "Зберегти Зображення Advanced",
	"inputs": {
		"images": { "name": "Зображення" },
		"filename_prefix": { "name": "filename_prefix" },
		"format": { "name": "format" },
		"format_bit_depth": { "name": "format_bit_depth" },
		"format_input_color_space": { "name": "format_input_color_space" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var SaveImageDataSetToFolder = {
	"display_name": "Зберегти Зображення Дані Множина To Folder",
	"inputs": {
		"images": { "name": "Зображення" },
		"folder_name": { "name": "folder_name" },
		"filename_prefix": { "name": "filename_prefix" },
		"mode": { "name": "Режим" }
	}
};
var SaveImageTextDataSetToFolder = {
	"display_name": "Зберегти Зображення Текст Дані Множина To Folder",
	"inputs": {
		"images": { "name": "Зображення" },
		"folder_name": { "name": "folder_name" },
		"filename_prefix": { "name": "filename_prefix" },
		"mode": { "name": "Режим" },
		"texts": { "name": "Тексти" }
	}
};
var SaveImageWebsocket = {
	"display_name": "Зберегти Зображення Websocket",
	"inputs": { "images": { "name": "Зображення" } }
};
var SaveLatent = {
	"display_name": "Зберегти Латент",
	"inputs": {
		"samples": { "name": "Семпли" },
		"filename_prefix": { "name": "filename_prefix" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var SaveLoRA = {
	"display_name": "Зберегти Lo",
	"inputs": {
		"lora": { "name": "lora" },
		"prefix": { "name": "Префікс" },
		"steps": { "name": "Кроки" }
	}
};
var SavePointCloud = {
	"display_name": "Зберегти Точка Cloud",
	"inputs": {
		"model_3d": { "name": "model_3d" },
		"filename_prefix": { "name": "filename_prefix" },
		"viewport_state": { "name": "viewport_state" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"model_3d_info": { "name": "model_3d_info" },
		"camera_info": { "name": "camera_info" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" },
		"4": { "name": "Вихід 4" }
	}
};
var SaveSVGNode = {
	"display_name": "Зберегти Node",
	"inputs": {
		"svg": { "name": "svg" },
		"filename_prefix": { "name": "filename_prefix" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var SaveText = {
	"display_name": "Зберегти Текст",
	"inputs": {
		"text": { "name": "Текст" },
		"filename_prefix": { "name": "filename_prefix" },
		"format": { "name": "format" },
		"preview_mode": {},
		"preview_text": {}
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var SaveTrainingDataset = {
	"display_name": "Зберегти Training Dataset",
	"inputs": {
		"latents": { "name": "latents" },
		"conditioning": { "name": "Кондиціювання" },
		"folder_name": { "name": "folder_name" },
		"shard_size": { "name": "shard_size" }
	}
};
var SaveVideo = {
	"display_name": "Зберегти Відео",
	"inputs": {
		"video": { "name": "video" },
		"filename_prefix": { "name": "filename_prefix" },
		"format": { "name": "format" },
		"codec": { "name": "codec" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var SaveWEBM = {
	"display_name": "Зберегти",
	"inputs": {
		"images": { "name": "Зображення" },
		"filename_prefix": { "name": "filename_prefix" },
		"codec": { "name": "codec" },
		"fps": { "name": "fps" },
		"crf": { "name": "crf" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var SCAIL2ColoredMask = {
	"display_name": "Colored Маска",
	"inputs": {
		"driving_track_data": { "name": "driving_track_data" },
		"object_indices": { "name": "object_indices" },
		"sort_by": { "name": "sort_by" },
		"replacement_mode": { "name": "replacement_mode" },
		"ref_track_data": { "name": "ref_track_data" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var ScaleROPE = {
	"display_name": "Масштаб",
	"inputs": {
		"model": { "name": "Модель" },
		"scale_x": { "name": "scale_x" },
		"shift_x": { "name": "shift_x" },
		"scale_y": { "name": "scale_y" },
		"shift_y": { "name": "shift_y" },
		"scale_t": { "name": "scale_t" },
		"shift_t": { "name": "shift_t" }
	},
	"outputs": { "0": {} }
};
var SD_4XUpscale_Conditioning = {
	"display_name": "Upscale Кондиціювання",
	"inputs": {
		"images": { "name": "Зображення" },
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"scale_ratio": { "name": "scale_ratio" },
		"noise_augmentation": { "name": "noise_augmentation" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var SDPoseDrawKeypoints = {
	"display_name": "Поза Малювання Keypoints",
	"inputs": {
		"keypoints": { "name": "keypoints" },
		"draw_body": { "name": "draw_body" },
		"draw_hands": { "name": "draw_hands" },
		"draw_face": { "name": "draw_face" },
		"draw_feet": { "name": "draw_feet" },
		"stick_width": { "name": "stick_width" },
		"face_point_size": { "name": "face_point_size" },
		"score_threshold": { "name": "score_threshold" },
		"draw_head": { "name": "draw_head" }
	},
	"outputs": { "0": {} }
};
var SDPoseFaceBBoxes = {
	"display_name": "Поза Face Boxes",
	"inputs": {
		"keypoints": { "name": "keypoints" },
		"scale": { "name": "Масштаб" },
		"force_square": { "name": "force_square" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var SDPoseKeypointExtractor = {
	"display_name": "Поза Keypoint Extractor",
	"inputs": {
		"model": { "name": "Модель" },
		"vae": { "name": "VAE" },
		"image": { "name": "Зображення" },
		"batch_size": { "name": "Розмір партії" },
		"bboxes": { "name": "bboxes" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var SDTurboScheduler = {
	"display_name": "Turbo Scheduler",
	"inputs": {
		"model": { "name": "Модель" },
		"steps": { "name": "Кроки" },
		"denoise": { "name": "Денойз" }
	},
	"outputs": { "0": {} }
};
var SeedNode = {
	"display_name": "Сід Node",
	"inputs": {
		"seed": { "name": "Сід" },
		"fixed": { "name": "fixed" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var SeedVR2Conditioning = {
	"display_name": "Сід Кондиціювання",
	"inputs": {
		"model": { "name": "Модель" },
		"vae_conditioning": { "name": "vae_conditioning" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var SeedVR2PostProcessing = {
	"display_name": "Сід Post Обробка",
	"inputs": {
		"images": { "name": "Зображення" },
		"original_resized_images": { "name": "original_resized_images" },
		"color_correction_method": { "name": "color_correction_method" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var SeedVR2Preprocess = {
	"display_name": "Сід Preprocess",
	"inputs": { "resized_images": { "name": "resized_images" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var SeedVR2TemporalChunk = {
	"display_name": "Сід Temporal Chunk",
	"inputs": {
		"latent": { "name": "Латент" },
		"temporal_overlap": { "name": "temporal_overlap" },
		"chunking_mode": { "name": "chunking_mode" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var SeedVR2TemporalMerge = {
	"display_name": "Сід Temporal Об'єднати",
	"inputs": {
		"latents": { "name": "latents" },
		"temporal_overlap": { "name": "temporal_overlap" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var SelectCLIPDevice = {
	"display_name": "Вибрати Device",
	"inputs": {
		"clip": { "name": "CLIP" },
		"device": { "name": "device" }
	},
	"outputs": { "0": {} }
};
var SelectModelDevice = {
	"display_name": "Вибрати Модель Device",
	"inputs": {
		"model": { "name": "Модель" },
		"device": { "name": "device" }
	},
	"outputs": { "0": {} }
};
var SelectVAEDevice = {
	"display_name": "Вибрати Device",
	"inputs": {
		"vae": { "name": "VAE" },
		"device": { "name": "device" }
	},
	"outputs": { "0": {} }
};
var SelfAttentionGuidance = {
	"display_name": "Self Attention Guidance",
	"inputs": {
		"model": { "name": "Модель" },
		"scale": { "name": "Масштаб" },
		"blur_sigma": { "name": "blur_sigma" }
	},
	"outputs": { "0": {} }
};
var SetClipHooks = {
	"display_name": "Множина Clip Hooks",
	"inputs": {
		"clip": { "name": "CLIP" },
		"apply_to_conds": { "name": "apply_to_conds" },
		"schedule_clip": { "name": "schedule_clip" },
		"hooks": { "name": "hooks" }
	}
};
var SetFirstSigma = {
	"display_name": "Множина Перший Sigma",
	"inputs": {
		"sigmas": { "name": "Сигми" },
		"sigma": { "name": "sigma" }
	},
	"outputs": { "0": {} }
};
var SetHookKeyframes = {
	"display_name": "Множина Hook Keyframes",
	"inputs": {
		"hooks": { "name": "hooks" },
		"hook_kf": { "name": "hook_kf" }
	}
};
var SetLatentNoiseMask = {
	"display_name": "Множина Латент Шум Маска",
	"inputs": {
		"samples": { "name": "Семпли" },
		"mask": { "name": "Маска" }
	}
};
var SetUnionControlNetType = {
	"display_name": "Множина Union Керувати Net Тип",
	"inputs": {
		"control_net": { "name": "ControlNet" },
		"type": { "name": "type" }
	},
	"outputs": { "0": {} }
};
var ShuffleDataset = {
	"display_name": "Перемішати Dataset",
	"inputs": {
		"images": { "name": "Зображення" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var ShuffleImageTextDataset = {
	"display_name": "Перемішати Зображення Текст Dataset",
	"inputs": {
		"images": { "name": "Зображення" },
		"texts": { "name": "Тексти" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var ShuffleVideoDataset = {
	"display_name": "Перемішати Відео Dataset",
	"inputs": {
		"videos": { "name": "videos" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var ShuffleVideoTextDataset = {
	"display_name": "Перемішати Відео Текст Dataset",
	"inputs": {
		"videos": { "name": "videos" },
		"texts": { "name": "Тексти" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var SkipLayerGuidanceDiT = {
	"display_name": "Пропустити Шар Guidance Di",
	"inputs": {
		"model": { "name": "Модель" },
		"double_layers": { "name": "double_layers" },
		"single_layers": { "name": "single_layers" },
		"scale": { "name": "Масштаб" },
		"start_percent": { "name": "start_percent" },
		"end_percent": { "name": "end_percent" },
		"rescaling_scale": { "name": "rescaling_scale" }
	},
	"outputs": { "0": {} }
};
var SkipLayerGuidanceDiTSimple = {
	"display_name": "Пропустити Шар Guidance Di Simple",
	"inputs": {
		"model": { "name": "Модель" },
		"double_layers": { "name": "double_layers" },
		"single_layers": { "name": "single_layers" },
		"start_percent": { "name": "start_percent" },
		"end_percent": { "name": "end_percent" }
	},
	"outputs": { "0": {} }
};
var SkipLayerGuidanceSD3 = {
	"display_name": "Пропустити Шар Guidance",
	"inputs": {
		"model": { "name": "Модель" },
		"layers": { "name": "layers" },
		"scale": { "name": "Масштаб" },
		"start_percent": { "name": "start_percent" },
		"end_percent": { "name": "end_percent" }
	},
	"outputs": { "0": {} }
};
var SolidMask = {
	"display_name": "Solid Маска",
	"inputs": {
		"value": { "name": "Значення" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" }
	},
	"outputs": { "0": {} }
};
var SoniloTextToMusic = {
	"display_name": "Sonilo Текст To Music",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"duration": { "name": "Тривалість" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var SoniloVideoToMusic = {
	"display_name": "Sonilo Відео To Music",
	"inputs": {
		"video": { "name": "video" },
		"prompt": { "name": "Промпт" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var SplatToFile3D = {
	"display_name": "Splat To File",
	"inputs": {
		"splat": { "name": "splat" },
		"format": { "name": "format" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var SplatToMesh = {
	"display_name": "Splat To Меш",
	"inputs": {
		"splat": { "name": "splat" },
		"resolution": { "name": "resolution" },
		"kernel": { "name": "kernel" },
		"smooth": { "name": "smooth" },
		"level": { "name": "level" },
		"min_component": { "name": "min_component" },
		"min_opacity": { "name": "min_opacity" },
		"color_sharpen": { "name": "color_sharpen" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var SplitAudioChannels = {
	"display_name": "Розділити Аудіо Channels",
	"inputs": { "audio": { "name": "audio" } },
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var SplitImageToTileList = {
	"display_name": "Розділити Зображення To Плитка Список",
	"inputs": {
		"image": { "name": "Зображення" },
		"tile_width": { "name": "tile_width" },
		"tile_height": { "name": "tile_height" },
		"overlap": { "name": "overlap" }
	},
	"outputs": { "0": {} }
};
var SplitImageWithAlpha = {
	"display_name": "Розділити Зображення With Альфа",
	"inputs": { "image": { "name": "Зображення" } },
	"outputs": {
		"0": {},
		"1": {}
	}
};
var SplitSigmas = {
	"display_name": "Розділити Sigmas",
	"inputs": {
		"sigmas": { "name": "Сигми" },
		"step": { "name": "step" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var SplitSigmasDenoise = {
	"display_name": "Розділити Sigmas Denoise",
	"inputs": {
		"sigmas": { "name": "Сигми" },
		"denoise": { "name": "Денойз" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var StableCascade_EmptyLatentImage = {
	"display_name": "Stable Cascade Empty Латент Зображення",
	"inputs": {
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"compression": { "name": "compression" },
		"batch_size": { "name": "Розмір партії" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var StableCascade_StageB_Conditioning = {
	"display_name": "Stable Cascade Stage Кондиціювання",
	"inputs": {
		"conditioning": { "name": "Кондиціювання" },
		"stage_c": { "name": "stage_c" }
	},
	"outputs": { "0": {} }
};
var StableCascade_StageC_VAEEncode = {
	"display_name": "Stable Cascade Stage Кодувати",
	"inputs": {
		"image": { "name": "Зображення" },
		"vae": { "name": "VAE" },
		"compression": { "name": "compression" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var StableCascade_SuperResolutionControlnet = {
	"display_name": "Stable Cascade Super Resolution Controlnet",
	"inputs": {
		"image": { "name": "Зображення" },
		"vae": { "name": "VAE" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var StableZero123_Conditioning = {
	"display_name": "Stable Zero Кондиціювання",
	"inputs": {
		"clip_vision": { "name": "clip_vision" },
		"init_image": { "name": "init_image" },
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"batch_size": { "name": "Розмір партії" },
		"elevation": { "name": "elevation" },
		"azimuth": { "name": "azimuth" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var StableZero123_Conditioning_Batched = {
	"display_name": "Stable Zero Кондиціювання Batched",
	"inputs": {
		"clip_vision": { "name": "clip_vision" },
		"init_image": { "name": "init_image" },
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"batch_size": { "name": "Розмір партії" },
		"elevation": { "name": "elevation" },
		"azimuth": { "name": "azimuth" },
		"elevation_batch_increment": { "name": "elevation_batch_increment" },
		"azimuth_batch_increment": { "name": "azimuth_batch_increment" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var StringCompare = {
	"display_name": "Рядок Compare",
	"inputs": {
		"string_a": { "name": "string_a" },
		"string_b": { "name": "string_b" },
		"mode": { "name": "Режим" },
		"case_sensitive": { "name": "case_sensitive" }
	},
	"outputs": { "0": {} }
};
var StringConcatenate = {
	"display_name": "Рядок Конкатенація",
	"inputs": {
		"string_a": { "name": "string_a" },
		"string_b": { "name": "string_b" },
		"delimiter": { "name": "delimiter" }
	},
	"outputs": { "0": {} }
};
var StringContains = {
	"display_name": "Рядок Contains",
	"inputs": {
		"string": { "name": "Рядок" },
		"substring": { "name": "substring" },
		"case_sensitive": { "name": "case_sensitive" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var StringFormat = {
	"display_name": "Рядок Format",
	"inputs": {
		"values": { "name": "values" },
		"f_string": { "name": "f_string" }
	},
	"outputs": { "0": {} }
};
var StringLength = {
	"display_name": "Рядок Довжина",
	"inputs": { "string": { "name": "Рядок" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var StringReplace = {
	"display_name": "Рядок Замінити",
	"inputs": {
		"string": { "name": "Рядок" },
		"find": { "name": "find" },
		"replace": { "name": "Замінити" }
	},
	"outputs": { "0": {} }
};
var StringSubstring = {
	"display_name": "Рядок Substring",
	"inputs": {
		"string": { "name": "Рядок" },
		"start": { "name": "Почати" },
		"end": { "name": "Кінець" }
	},
	"outputs": { "0": {} }
};
var StringTrim = {
	"display_name": "Рядок Trim",
	"inputs": {
		"string": { "name": "Рядок" },
		"mode": { "name": "Режим" }
	},
	"outputs": { "0": {} }
};
var StripWhitespace = {
	"display_name": "Strip Whitespace",
	"inputs": { "texts": { "name": "Тексти" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var StyleModelApply = {
	"display_name": "Стиль Модель Застосувати",
	"inputs": {
		"conditioning": { "name": "Кондиціювання" },
		"style_model": { "name": "style_model" },
		"clip_vision_output": { "name": "clip_vision_output" },
		"strength": { "name": "Сила" },
		"strength_type": { "name": "strength_type" }
	}
};
var StyleModelLoader = {
	"display_name": "Стиль Модель Loader",
	"inputs": { "style_model_name": { "name": "style_model_name" } }
};
var SUPIRApply = {
	"display_name": "Застосувати",
	"inputs": {
		"model": { "name": "Модель" },
		"model_patch": { "name": "model_patch" },
		"vae": { "name": "VAE" },
		"image": { "name": "Зображення" },
		"strength_start": { "name": "strength_start" },
		"strength_end": { "name": "strength_end" },
		"restore_cfg": { "name": "restore_cfg" },
		"restore_cfg_s_tmin": { "name": "restore_cfg_s_tmin" }
	},
	"outputs": { "0": {} }
};
var SV3D_Conditioning = {
	"display_name": "Кондиціювання",
	"inputs": {
		"clip_vision": { "name": "clip_vision" },
		"init_image": { "name": "init_image" },
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"video_frames": { "name": "video_frames" },
		"elevation": { "name": "elevation" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var SVD_img2vid_Conditioning = {
	"display_name": "Кондиціювання",
	"inputs": {
		"clip_vision": { "name": "clip_vision" },
		"init_image": { "name": "init_image" },
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"video_frames": { "name": "video_frames" },
		"motion_bucket_id": { "name": "motion_bucket_id" },
		"fps": { "name": "fps" },
		"augmentation_level": { "name": "augmentation_level" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var SyncLipSyncNode = {
	"display_name": "Синхронізувати Lip Синхронізувати Node",
	"inputs": {
		"video": { "name": "video" },
		"audio": { "name": "audio" },
		"seed": { "name": "Сід" },
		"model": { "name": "Модель" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_speaker_frame": { "name": "model_speaker_frame" },
		"model_speaker_selection": { "name": "model_speaker_selection" },
		"model_speaker_x": { "name": "model_speaker_x" },
		"model_speaker_y": { "name": "model_speaker_y" },
		"model_sync_mode": { "name": "model_sync_mode" }
	},
	"outputs": { "0": {} }
};
var SyncTalkingImageNode = {
	"display_name": "Синхронізувати Talking Зображення Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"audio": { "name": "audio" },
		"prompt": { "name": "Промпт" },
		"seed": { "name": "Сід" },
		"model": { "name": "Модель" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_auto_downscale": { "name": "model_auto_downscale" },
		"model_speaker_selection": { "name": "model_speaker_selection" },
		"model_speaker_x": { "name": "model_speaker_x" },
		"model_speaker_y": { "name": "model_speaker_y" }
	},
	"outputs": { "0": {} }
};
var T5TokenizerOptions = {
	"display_name": "Tokenizer Опції",
	"inputs": {
		"clip": { "name": "CLIP" },
		"min_padding": { "name": "min_padding" },
		"min_length": { "name": "min_length" }
	},
	"outputs": { "0": {} }
};
var TCFG = {
	"display_name": "TCFG",
	"inputs": { "model": { "name": "Модель" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var TemporalScoreRescaling = {
	"display_name": "Temporal Score Rescaling",
	"inputs": {
		"model": { "name": "Модель" },
		"tsr_k": { "name": "tsr_k" },
		"tsr_sigma": { "name": "tsr_sigma" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var Tencent3DPartNode = {
	"display_name": "Tencent Part Node",
	"inputs": {
		"model_3d": { "name": "model_3d" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var Tencent3DTextureEditNode = {
	"display_name": "Tencent Текстура Редагувати Node",
	"inputs": {
		"model_3d": { "name": "model_3d" },
		"prompt": { "name": "Промпт" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var TencentImageToModelNode = {
	"display_name": "Tencent Зображення To Модель Node",
	"inputs": {
		"model": { "name": "Модель" },
		"image": { "name": "Зображення" },
		"face_count": { "name": "face_count" },
		"generate_type": { "name": "generate_type" },
		"seed": { "name": "Сід" },
		"image_left": { "name": "Ліво зображень" },
		"image_right": { "name": "Право зображень" },
		"image_back": { "name": "image_back" },
		"control_after_generate": { "name": "control_after_generate" },
		"generate_type_pbr": { "name": "generate_type_pbr" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" },
		"4": { "name": "Вихід 4" },
		"5": { "name": "Вихід 5" },
		"6": { "name": "Вихід 6" }
	}
};
var TencentModelTo3DUVNode = {
	"display_name": "Tencent Модель To Node",
	"inputs": {
		"model_3d": { "name": "model_3d" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var TencentSmartTopologyNode = {
	"display_name": "Tencent Smart Topology Node",
	"inputs": {
		"model_3d": { "name": "model_3d" },
		"polygon_type": { "name": "polygon_type" },
		"face_level": { "name": "face_level" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var TencentTextToModelNode = {
	"display_name": "Tencent Текст To Модель Node",
	"inputs": {
		"model": { "name": "Модель" },
		"prompt": { "name": "Промпт" },
		"face_count": { "name": "face_count" },
		"generate_type": { "name": "generate_type" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"generate_type_pbr": { "name": "generate_type_pbr" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" }
	}
};
var TextEncodeAceStepAudio = {
	"display_name": "Текст Кодувати Ace Step Аудіо",
	"inputs": {
		"clip": { "name": "CLIP" },
		"tags": { "name": "tags" },
		"lyrics": { "name": "lyrics" },
		"lyrics_strength": { "name": "lyrics_strength" }
	},
	"outputs": { "0": {} }
};
var TextEncodeAceStepAudio1_5 = {
	"display_name": "Текст Кодувати Ace Step Аудіо",
	"inputs": {
		"clip": { "name": "CLIP" },
		"tags": { "name": "tags" },
		"lyrics": { "name": "lyrics" },
		"seed": { "name": "Сід" },
		"bpm": { "name": "bpm" },
		"duration": { "name": "Тривалість" },
		"timesignature": { "name": "timesignature" },
		"language": { "name": "language" },
		"keyscale": { "name": "keyscale" },
		"generate_audio_codes": { "name": "generate_audio_codes" },
		"cfg_scale": { "name": "cfg_scale" },
		"temperature": { "name": "temperature" },
		"top_p": { "name": "top_p" },
		"top_k": { "name": "top_k" },
		"min_p": { "name": "min_p" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var TextEncodeBooguEdit = {
	"display_name": "Текст Кодувати Boogu Редагувати",
	"inputs": {
		"clip": { "name": "CLIP" },
		"prompt": { "name": "Промпт" },
		"negative_prompt": { "name": "Негативний промпт" },
		"vae": { "name": "VAE" },
		"images": { "name": "Зображення" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var TextEncodeHunyuanVideo_ImageToVideo = {
	"display_name": "Текст Кодувати Hunyuan Відео Зображення To Відео",
	"inputs": {
		"clip": { "name": "CLIP" },
		"clip_vision_output": { "name": "clip_vision_output" },
		"prompt": { "name": "Промпт" },
		"image_interleave": { "name": "Чергування зображень" }
	},
	"outputs": { "0": {} }
};
var TextEncodeJoyImageEdit = {
	"display_name": "Текст Кодувати Joy Зображення Редагувати",
	"inputs": {
		"clip": { "name": "CLIP" },
		"prompt": { "name": "Промпт" },
		"vae": { "name": "VAE" },
		"images": { "name": "Зображення" }
	},
	"outputs": { "0": {} }
};
var TextEncodeMageFlowEdit = {
	"display_name": "Текст Кодувати Mage Потік Редагувати",
	"inputs": {
		"clip": { "name": "CLIP" },
		"prompt": { "name": "Промпт" },
		"negative_prompt": { "name": "Негативний промпт" },
		"images": { "name": "Зображення" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"batch_size": { "name": "Розмір партії" },
		"vae": { "name": "VAE" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var TextEncodeQwenImageEdit = {
	"display_name": "Текст Кодувати Qwen Зображення Редагувати",
	"inputs": {
		"clip": { "name": "CLIP" },
		"prompt": { "name": "Промпт" },
		"vae": { "name": "VAE" },
		"image": { "name": "Зображення" }
	},
	"outputs": { "0": {} }
};
var TextEncodeQwenImageEditPlus = {
	"display_name": "Текст Кодувати Qwen Зображення Редагувати Plus",
	"inputs": {
		"clip": { "name": "CLIP" },
		"prompt": { "name": "Промпт" },
		"vae": { "name": "VAE" },
		"image1": { "name": "image1" },
		"image2": { "name": "image2" },
		"image3": { "name": "image3" }
	},
	"outputs": { "0": {} }
};
var TextEncodeZImageOmni = {
	"display_name": "Текст Кодувати Зображення Omni",
	"inputs": {
		"clip": { "name": "CLIP" },
		"prompt": { "name": "Промпт" },
		"auto_resize_images": { "name": "auto_resize_images" },
		"image_encoder": { "name": "image_encoder" },
		"vae": { "name": "VAE" },
		"image1": { "name": "image1" },
		"image2": { "name": "image2" },
		"image3": { "name": "image3" }
	},
	"outputs": { "0": {} }
};
var TextGenerate = {
	"display_name": "Текст Генерувати",
	"inputs": {
		"clip": { "name": "CLIP" },
		"prompt": { "name": "Промпт" },
		"max_length": { "name": "max_length" },
		"sampling_mode": { "name": "sampling_mode" },
		"image": { "name": "Зображення" },
		"video": { "name": "video" },
		"audio": { "name": "audio" },
		"thinking": { "name": "thinking" },
		"use_default_template": { "name": "use_default_template" },
		"sampling_mode_min_p": { "name": "sampling_mode_min_p" },
		"sampling_mode_presence_penalty": { "name": "sampling_mode_presence_penalty" },
		"sampling_mode_repetition_penalty": { "name": "sampling_mode_repetition_penalty" },
		"sampling_mode_seed": { "name": "sampling_mode_seed" },
		"sampling_mode_temperature": { "name": "sampling_mode_temperature" },
		"sampling_mode_top_k": { "name": "sampling_mode_top_k" },
		"sampling_mode_top_p": { "name": "sampling_mode_top_p" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var TextGenerateLTX2Prompt = {
	"display_name": "Текст Генерувати Промпт",
	"inputs": {
		"clip": { "name": "CLIP" },
		"prompt": { "name": "Промпт" },
		"max_length": { "name": "max_length" },
		"sampling_mode": { "name": "sampling_mode" },
		"image": { "name": "Зображення" },
		"video": { "name": "video" },
		"audio": { "name": "audio" },
		"thinking": { "name": "thinking" },
		"use_default_template": { "name": "use_default_template" },
		"sampling_mode_min_p": { "name": "sampling_mode_min_p" },
		"sampling_mode_presence_penalty": { "name": "sampling_mode_presence_penalty" },
		"sampling_mode_repetition_penalty": { "name": "sampling_mode_repetition_penalty" },
		"sampling_mode_seed": { "name": "sampling_mode_seed" },
		"sampling_mode_temperature": { "name": "sampling_mode_temperature" },
		"sampling_mode_top_k": { "name": "sampling_mode_top_k" },
		"sampling_mode_top_p": { "name": "sampling_mode_top_p" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var TextOverlay = {
	"display_name": "Текст Overlay",
	"inputs": {
		"images": { "name": "Зображення" },
		"text": { "name": "Текст" },
		"font_size": { "name": "font_size" },
		"color": { "name": "color" },
		"position": { "name": "position" },
		"align": { "name": "align" },
		"outline": { "name": "outline" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var TextToLowercase = {
	"display_name": "Текст To Lowercase",
	"inputs": { "texts": { "name": "Тексти" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var TextToUppercase = {
	"display_name": "Текст To Uppercase",
	"inputs": { "texts": { "name": "Тексти" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var ThresholdMask = {
	"display_name": "Поріг Маска",
	"inputs": {
		"mask": { "name": "Маска" },
		"value": { "name": "Значення" }
	},
	"outputs": { "0": {} }
};
var TomePatchModel = {
	"display_name": "Tome Patch Модель",
	"inputs": {
		"model": { "name": "Модель" },
		"ratio": { "name": "Відношення" }
	},
	"outputs": { "0": {} }
};
var TopazImageEnhance = {
	"display_name": "Topaz Зображення Enhance",
	"inputs": {
		"model": { "name": "Модель" },
		"image": { "name": "Зображення" },
		"prompt": { "name": "Промпт" },
		"subject_detection": { "name": "subject_detection" },
		"face_enhancement": { "name": "face_enhancement" },
		"face_enhancement_creativity": { "name": "face_enhancement_creativity" },
		"face_enhancement_strength": { "name": "face_enhancement_strength" },
		"crop_to_fill": { "name": "crop_to_fill" },
		"output_width": { "name": "output_width" },
		"output_height": { "name": "output_height" },
		"creativity": { "name": "creativity" },
		"face_preservation": { "name": "face_preservation" },
		"color_preservation": { "name": "color_preservation" }
	},
	"outputs": { "0": {} }
};
var TopazVideoEnhance = {
	"display_name": "Topaz Відео Enhance",
	"inputs": {
		"video": { "name": "video" },
		"upscaler_enabled": { "name": "upscaler_enabled" },
		"upscaler_model": { "name": "upscaler_model" },
		"upscaler_resolution": { "name": "upscaler_resolution" },
		"upscaler_creativity": { "name": "upscaler_creativity" },
		"interpolation_enabled": { "name": "interpolation_enabled" },
		"interpolation_model": { "name": "interpolation_model" },
		"interpolation_slowmo": { "name": "interpolation_slowmo" },
		"interpolation_frame_rate": { "name": "interpolation_frame_rate" },
		"interpolation_duplicate": { "name": "interpolation_duplicate" },
		"interpolation_duplicate_threshold": { "name": "interpolation_duplicate_threshold" },
		"dynamic_compression_level": { "name": "dynamic_compression_level" }
	},
	"outputs": { "0": {} }
};
var TopazVideoEnhanceV2 = {
	"display_name": "Topaz Відео Enhance",
	"inputs": {
		"video": { "name": "video" },
		"upscaler_model": { "name": "upscaler_model" },
		"interpolation_model": { "name": "interpolation_model" },
		"dynamic_compression_level": { "name": "dynamic_compression_level" },
		"upscaler_model_creativity": { "name": "upscaler_model_creativity" },
		"upscaler_model_prompt": { "name": "upscaler_model_prompt" },
		"upscaler_model_realism": { "name": "upscaler_model_realism" },
		"upscaler_model_sharp": { "name": "upscaler_model_sharp" },
		"upscaler_model_upscaler_resolution": { "name": "upscaler_model_upscaler_resolution" }
	},
	"outputs": { "0": {} }
};
var TorchCompileModel = {
	"display_name": "Torch Компілювати Модель",
	"inputs": {
		"model": { "name": "Модель" },
		"backend": { "name": "backend" }
	},
	"outputs": { "0": {} }
};
var TrainLoraNode = {
	"display_name": "Train Lora Node",
	"inputs": {
		"model": { "name": "Модель" },
		"latents": { "name": "latents" },
		"positive": { "name": "Позитивне" },
		"batch_size": { "name": "Розмір партії" },
		"grad_accumulation_steps": { "name": "grad_accumulation_steps" },
		"steps": { "name": "Кроки" },
		"learning_rate": { "name": "Швидкість навчання" },
		"rank": { "name": "rank" },
		"optimizer": { "name": "optimizer" },
		"loss_function": { "name": "loss_function" },
		"seed": { "name": "Сід" },
		"training_dtype": { "name": "training_dtype" },
		"lora_dtype": { "name": "lora_dtype" },
		"quantized_backward": { "name": "quantized_backward" },
		"algorithm": { "name": "algorithm" },
		"gradient_checkpointing": { "name": "gradient_checkpointing" },
		"checkpoint_depth": { "name": "checkpoint_depth" },
		"offloading": { "name": "offloading" },
		"existing_lora": { "name": "existing_lora" },
		"bucket_mode": { "name": "bucket_mode" },
		"bypass_mode": { "name": "bypass_mode" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var TransformSplat = {
	"display_name": "Трансформувати Splat",
	"inputs": {
		"splat": { "name": "splat" },
		"translate_x": { "name": "translate_x" },
		"translate_y": { "name": "translate_y" },
		"translate_z": { "name": "translate_z" },
		"rotate_x": { "name": "rotate_x" },
		"rotate_y": { "name": "rotate_y" },
		"rotate_z": { "name": "rotate_z" },
		"scale_x": { "name": "scale_x" },
		"scale_y": { "name": "scale_y" },
		"scale_z": { "name": "scale_z" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var TrimAudioDuration = {
	"display_name": "Trim Аудіо Тривалість",
	"inputs": {
		"audio": { "name": "audio" },
		"start_index": { "name": "start_index" },
		"duration": { "name": "Тривалість" }
	},
	"outputs": { "0": {} }
};
var TrimVideoLatent = {
	"display_name": "Trim Відео Латент",
	"inputs": {
		"samples": { "name": "Семпли" },
		"trim_amount": { "name": "trim_amount" }
	},
	"outputs": { "0": {} }
};
var TripleCLIPLoader = {
	"display_name": "Triple Loader",
	"inputs": {
		"clip_name1": { "name": "clip_name1" },
		"clip_name2": { "name": "clip_name2" },
		"clip_name3": { "name": "clip_name3" }
	},
	"outputs": { "0": {} }
};
var TripoConversionNode = {
	"display_name": "Tripo Conversion Node",
	"inputs": {
		"original_model_task_id": { "name": "original_model_task_id" },
		"format": { "name": "format" },
		"quad": { "name": "quad" },
		"face_limit": { "name": "face_limit" },
		"texture_size": { "name": "texture_size" },
		"texture_format": { "name": "texture_format" },
		"force_symmetry": { "name": "force_symmetry" },
		"flatten_bottom": { "name": "flatten_bottom" },
		"flatten_bottom_threshold": { "name": "flatten_bottom_threshold" },
		"pivot_to_center_bottom": { "name": "pivot_to_center_bottom" },
		"scale_factor": { "name": "scale_factor" },
		"with_animation": { "name": "with_animation" },
		"pack_uv": { "name": "pack_uv" },
		"bake": { "name": "bake" },
		"part_names": { "name": "part_names" },
		"fbx_preset": { "name": "fbx_preset" },
		"export_vertex_colors": { "name": "export_vertex_colors" },
		"export_orientation": { "name": "export_orientation" },
		"animate_in_place": { "name": "animate_in_place" }
	}
};
var TripoImageToModelNode = {
	"display_name": "Tripo Зображення To Модель Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"model_version": { "name": "model_version" },
		"style": { "name": "style" },
		"texture": { "name": "texture" },
		"pbr": { "name": "pbr" },
		"model_seed": { "name": "model_seed" },
		"orientation": { "name": "orientation" },
		"texture_seed": { "name": "texture_seed" },
		"texture_quality": { "name": "texture_quality" },
		"texture_alignment": { "name": "texture_alignment" },
		"face_limit": { "name": "face_limit" },
		"quad": { "name": "quad" },
		"geometry_quality": { "name": "geometry_quality" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var TripoImportModelNode = {
	"display_name": "Tripo Імпорт Модель Node",
	"inputs": { "model_3d": { "name": "model_3d" } },
	"outputs": { "0": { "name": "Вихід 0" } }
};
var TripoMultiviewToModelNode = {
	"display_name": "Tripo Multiview To Модель Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"image_left": { "name": "Ліво зображень" },
		"image_back": { "name": "image_back" },
		"image_right": { "name": "Право зображень" },
		"model_version": { "name": "model_version" },
		"orientation": { "name": "orientation" },
		"texture": { "name": "texture" },
		"pbr": { "name": "pbr" },
		"model_seed": { "name": "model_seed" },
		"texture_seed": { "name": "texture_seed" },
		"texture_quality": { "name": "texture_quality" },
		"texture_alignment": { "name": "texture_alignment" },
		"face_limit": { "name": "face_limit" },
		"quad": { "name": "quad" },
		"geometry_quality": { "name": "geometry_quality" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var TripoP1ImageToModelNode = {
	"display_name": "Tripo Зображення To Модель Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"output_mode": { "name": "output_mode" },
		"enable_image_autofix": { "name": "enable_image_autofix" },
		"face_limit": { "name": "face_limit" },
		"model_seed": { "name": "model_seed" },
		"auto_size": { "name": "auto_size" },
		"export_uv": { "name": "export_uv" },
		"compress_geometry": { "name": "compress_geometry" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var TripoP1MultiviewToModelNode = {
	"display_name": "Tripo Multiview To Модель Node",
	"inputs": {
		"image": { "name": "Зображення" },
		"output_mode": { "name": "output_mode" },
		"image_left": { "name": "Ліво зображень" },
		"image_back": { "name": "image_back" },
		"image_right": { "name": "Право зображень" },
		"face_limit": { "name": "face_limit" },
		"model_seed": { "name": "model_seed" },
		"auto_size": { "name": "auto_size" },
		"export_uv": { "name": "export_uv" },
		"compress_geometry": { "name": "compress_geometry" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var TripoP1TextToModelNode = {
	"display_name": "Tripo Текст To Модель Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"output_mode": { "name": "output_mode" },
		"negative_prompt": { "name": "Негативний промпт" },
		"image_seed": { "name": "Сід зображень" },
		"face_limit": { "name": "face_limit" },
		"model_seed": { "name": "model_seed" },
		"auto_size": { "name": "auto_size" },
		"export_uv": { "name": "export_uv" },
		"compress_geometry": { "name": "compress_geometry" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var TripoRefineNode = {
	"display_name": "Tripo Refine Node",
	"inputs": { "model_task_id": { "name": "model_task_id" } },
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var TripoRetargetNode = {
	"display_name": "Tripo Retarget Node",
	"inputs": {
		"original_model_task_id": { "name": "original_model_task_id" },
		"animation": { "name": "animation" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var TripoRigNode = {
	"display_name": "Tripo Rig Node",
	"inputs": { "original_model_task_id": { "name": "original_model_task_id" } },
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var TripoSplatConditioning = {
	"display_name": "Tripo Splat Кондиціювання",
	"inputs": {
		"clip_vision": { "name": "clip_vision" },
		"vae": { "name": "VAE" },
		"image": { "name": "Зображення" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var TripoSplatPreprocessImage = {
	"display_name": "Tripo Splat Preprocess Зображення",
	"inputs": {
		"image": { "name": "Зображення" },
		"mask": { "name": "Маска" },
		"erode_radius": { "name": "erode_radius" },
		"size": { "name": "Розмір" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var TripoSplatSamplingPreview = {
	"display_name": "Tripo Splat Семплування Попередній перегляд",
	"inputs": {
		"model": { "name": "Модель" },
		"vae": { "name": "VAE" },
		"octree_level": { "name": "octree_level" },
		"num_gaussians": { "name": "num_gaussians" },
		"yaw": { "name": "yaw" },
		"pitch": { "name": "pitch" },
		"point_size": { "name": "point_size" }
	},
	"outputs": { "0": {} }
};
var TripoTextToModelNode = {
	"display_name": "Tripo Текст To Модель Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"negative_prompt": { "name": "Негативний промпт" },
		"model_version": { "name": "model_version" },
		"style": { "name": "style" },
		"texture": { "name": "texture" },
		"pbr": { "name": "pbr" },
		"image_seed": { "name": "Сід зображень" },
		"model_seed": { "name": "model_seed" },
		"texture_seed": { "name": "texture_seed" },
		"texture_quality": { "name": "texture_quality" },
		"face_limit": { "name": "face_limit" },
		"quad": { "name": "quad" },
		"geometry_quality": { "name": "geometry_quality" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var TripoTextureNode = {
	"display_name": "Tripo Текстура Node",
	"inputs": {
		"model_task_id": { "name": "model_task_id" },
		"texture": { "name": "texture" },
		"pbr": { "name": "pbr" },
		"texture_seed": { "name": "texture_seed" },
		"texture_quality": { "name": "texture_quality" },
		"texture_alignment": { "name": "texture_alignment" },
		"texture_prompt": { "name": "texture_prompt" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var TruncateText = {
	"display_name": "Truncate Текст",
	"inputs": {
		"texts": { "name": "Тексти" },
		"max_length": { "name": "max_length" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var unCLIPCheckpointLoader = {
	"display_name": "Checkpoint Loader",
	"inputs": { "ckpt_name": { "name": "ckpt_name" } }
};
var unCLIPConditioning = {
	"display_name": "Кондиціювання",
	"inputs": {
		"conditioning": { "name": "Кондиціювання" },
		"clip_vision_output": { "name": "clip_vision_output" },
		"strength": { "name": "Сила" },
		"noise_augmentation": { "name": "noise_augmentation" }
	}
};
var UNetCrossAttentionMultiply = {
	"display_name": "Net Cross Attention Multiply",
	"inputs": {
		"model": { "name": "Модель" },
		"q": { "name": "q" },
		"k": { "name": "k" },
		"v": { "name": "v" },
		"out": { "name": "out" }
	},
	"outputs": { "0": {} }
};
var UNETLoader = {
	"display_name": "Loader",
	"inputs": {
		"unet_name": { "name": "unet_name" },
		"weight_dtype": { "name": "weight_dtype" }
	}
};
var UNetSelfAttentionMultiply = {
	"display_name": "Net Self Attention Multiply",
	"inputs": {
		"model": { "name": "Модель" },
		"q": { "name": "q" },
		"k": { "name": "k" },
		"v": { "name": "v" },
		"out": { "name": "out" }
	},
	"outputs": { "0": {} }
};
var UNetTemporalAttentionMultiply = {
	"display_name": "Net Temporal Attention Multiply",
	"inputs": {
		"model": { "name": "Модель" },
		"self_structural": { "name": "self_structural" },
		"self_temporal": { "name": "self_temporal" },
		"cross_structural": { "name": "cross_structural" },
		"cross_temporal": { "name": "cross_temporal" }
	},
	"outputs": { "0": {} }
};
var UpscaleModelLoader = {
	"display_name": "Upscale Модель Loader",
	"inputs": { "model_name": { "name": "model_name" } },
	"outputs": { "0": {} }
};
var USOStyleReference = {
	"display_name": "Стиль Reference",
	"inputs": {
		"model": { "name": "Модель" },
		"model_patch": { "name": "model_patch" },
		"clip_vision_output": { "name": "clip_vision_output" }
	}
};
var VAEDecode = {
	"display_name": "Декодувати",
	"inputs": {
		"samples": { "name": "Семпли" },
		"vae": { "name": "VAE" }
	},
	"outputs": { "0": {} }
};
var VAEDecodeAudio = {
	"display_name": "Декодувати Аудіо",
	"inputs": {
		"samples": { "name": "Семпли" },
		"vae": { "name": "VAE" }
	},
	"outputs": { "0": {} }
};
var VAEDecodeAudioTiled = {
	"display_name": "Декодувати Аудіо Tiled",
	"inputs": {
		"samples": { "name": "Семпли" },
		"vae": { "name": "VAE" },
		"tile_size": { "name": "tile_size" },
		"overlap": { "name": "overlap" }
	},
	"outputs": { "0": {} }
};
var VAEDecodeHunyuan3D = {
	"display_name": "Декодувати Hunyuan",
	"inputs": {
		"samples": { "name": "Семпли" },
		"vae": { "name": "VAE" },
		"num_chunks": { "name": "num_chunks" },
		"octree_resolution": { "name": "octree_resolution" }
	},
	"outputs": { "0": {} }
};
var VAEDecodeTiled = {
	"display_name": "Декодувати Tiled",
	"inputs": {
		"samples": { "name": "Семпли" },
		"vae": { "name": "VAE" },
		"tile_size": { "name": "tile_size" },
		"overlap": { "name": "overlap" },
		"temporal_size": { "name": "temporal_size" },
		"temporal_overlap": { "name": "temporal_overlap" }
	}
};
var VAEDecodeTripoSplat = {
	"display_name": "Декодувати Tripo Splat",
	"inputs": {
		"samples": { "name": "Семпли" },
		"vae": { "name": "VAE" },
		"num_gaussians": { "name": "num_gaussians" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var VAEEncode = {
	"display_name": "Кодувати",
	"inputs": {
		"pixels": { "name": "pixels" },
		"vae": { "name": "VAE" }
	}
};
var VAEEncodeAudio = {
	"display_name": "Кодувати Аудіо",
	"inputs": {
		"audio": { "name": "audio" },
		"vae": { "name": "VAE" }
	},
	"outputs": { "0": {} }
};
var VAEEncodeForInpaint = {
	"display_name": "Кодувати For Інпейнтинг",
	"inputs": {
		"pixels": { "name": "pixels" },
		"vae": { "name": "VAE" },
		"mask": { "name": "Маска" },
		"grow_mask_by": { "name": "grow_mask_by" }
	}
};
var VAEEncodeTiled = {
	"display_name": "Кодувати Tiled",
	"inputs": {
		"pixels": { "name": "pixels" },
		"vae": { "name": "VAE" },
		"tile_size": { "name": "tile_size" },
		"overlap": { "name": "overlap" },
		"temporal_size": { "name": "temporal_size" },
		"temporal_overlap": { "name": "temporal_overlap" }
	}
};
var VAELoader = {
	"display_name": "Loader",
	"inputs": { "vae_name": { "name": "vae_name" } }
};
var VAESave = {
	"display_name": "Зберегти",
	"inputs": {
		"vae": { "name": "VAE" },
		"filename_prefix": { "name": "filename_prefix" }
	}
};
var Veo3FirstLastFrameNode = {
	"display_name": "Veo Перший Останній Кадр Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"negative_prompt": { "name": "Негативний промпт" },
		"resolution": { "name": "resolution" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"duration": { "name": "Тривалість" },
		"seed": { "name": "Сід" },
		"first_frame": { "name": "first_frame" },
		"last_frame": { "name": "last_frame" },
		"model": { "name": "Модель" },
		"generate_audio": { "name": "generate_audio" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var Veo3VideoGenerationNode = {
	"display_name": "Veo Відео Generation Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"resolution": { "name": "resolution" },
		"negative_prompt": { "name": "Негативний промпт" },
		"duration_seconds": { "name": "duration_seconds" },
		"enhance_prompt": { "name": "enhance_prompt" },
		"person_generation": { "name": "person_generation" },
		"seed": { "name": "Сід" },
		"image": { "name": "Зображення" },
		"model": { "name": "Модель" },
		"generate_audio": { "name": "generate_audio" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var VeoVideoGenerationNode = {
	"display_name": "Veo Відео Generation Node",
	"inputs": {
		"prompt": { "name": "Промпт" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"negative_prompt": { "name": "Негативний промпт" },
		"duration_seconds": { "name": "duration_seconds" },
		"enhance_prompt": { "name": "enhance_prompt" },
		"person_generation": { "name": "person_generation" },
		"seed": { "name": "Сід" },
		"image": { "name": "Зображення" },
		"model": { "name": "Модель" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var VideoFrameSample = {
	"display_name": "Відео Кадр Sample",
	"inputs": {
		"video": { "name": "video" },
		"num_frames": { "name": "num_frames" },
		"strategy": { "name": "strategy" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var VideoLinearCFGGuidance = {
	"display_name": "Відео Linear Guidance",
	"inputs": {
		"model": { "name": "Модель" },
		"min_cfg": { "name": "Мін CFG" }
	}
};
var VideoRandomTemporalCrop = {
	"display_name": "Відео Випадковий Temporal Обрізати",
	"inputs": {
		"video": { "name": "video" },
		"length": { "name": "length" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var VideoTemporalCrop = {
	"display_name": "Відео Temporal Обрізати",
	"inputs": {
		"video": { "name": "video" },
		"start_frame": { "name": "start_frame" },
		"length": { "name": "length" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var VideoTriangleCFGGuidance = {
	"display_name": "Відео Трикутник Guidance",
	"inputs": {
		"model": { "name": "Модель" },
		"min_cfg": { "name": "Мін CFG" }
	}
};
var Vidu2ImageToVideoNode = {
	"display_name": "Vidu Зображення To Відео Node",
	"inputs": {
		"model": { "name": "Модель" },
		"image": { "name": "Зображення" },
		"prompt": { "name": "Промпт" },
		"duration": { "name": "Тривалість" },
		"seed": { "name": "Сід" },
		"resolution": { "name": "resolution" },
		"movement_amplitude": { "name": "movement_amplitude" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var Vidu2ReferenceVideoNode = {
	"display_name": "Vidu Reference Відео Node",
	"inputs": {
		"model": { "name": "Модель" },
		"subjects": { "name": "subjects" },
		"prompt": { "name": "Промпт" },
		"audio": { "name": "audio" },
		"duration": { "name": "Тривалість" },
		"seed": { "name": "Сід" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"resolution": { "name": "resolution" },
		"movement_amplitude": { "name": "movement_amplitude" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var Vidu2StartEndToVideoNode = {
	"display_name": "Vidu Почати Кінець To Відео Node",
	"inputs": {
		"model": { "name": "Модель" },
		"first_frame": { "name": "first_frame" },
		"end_frame": { "name": "end_frame" },
		"prompt": { "name": "Промпт" },
		"duration": { "name": "Тривалість" },
		"seed": { "name": "Сід" },
		"resolution": { "name": "resolution" },
		"movement_amplitude": { "name": "movement_amplitude" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var Vidu2TextToVideoNode = {
	"display_name": "Vidu Текст To Відео Node",
	"inputs": {
		"model": { "name": "Модель" },
		"prompt": { "name": "Промпт" },
		"duration": { "name": "Тривалість" },
		"seed": { "name": "Сід" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"resolution": { "name": "resolution" },
		"background_music": { "name": "background_music" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var Vidu3ImageToVideoNode = {
	"display_name": "Vidu Зображення To Відео Node",
	"inputs": {
		"model": { "name": "Модель" },
		"image": { "name": "Зображення" },
		"prompt": { "name": "Промпт" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_audio": { "name": "model_audio" },
		"model_duration": { "name": "model_duration" },
		"model_resolution": { "name": "model_resolution" }
	},
	"outputs": { "0": {} }
};
var Vidu3StartEndToVideoNode = {
	"display_name": "Vidu Почати Кінець To Відео Node",
	"inputs": {
		"model": { "name": "Модель" },
		"first_frame": { "name": "first_frame" },
		"end_frame": { "name": "end_frame" },
		"prompt": { "name": "Промпт" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_audio": { "name": "model_audio" },
		"model_duration": { "name": "model_duration" },
		"model_resolution": { "name": "model_resolution" }
	},
	"outputs": { "0": {} }
};
var Vidu3TextToVideoNode = {
	"display_name": "Vidu Текст To Відео Node",
	"inputs": {
		"model": { "name": "Модель" },
		"prompt": { "name": "Промпт" },
		"seed": { "name": "Сід" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_aspect_ratio": { "name": "model_aspect_ratio" },
		"model_audio": { "name": "model_audio" },
		"model_duration": { "name": "model_duration" },
		"model_resolution": { "name": "model_resolution" }
	},
	"outputs": { "0": {} }
};
var ViduExtendVideoNode = {
	"display_name": "Vidu Extend Відео Node",
	"inputs": {
		"model": { "name": "Модель" },
		"video": { "name": "video" },
		"prompt": { "name": "Промпт" },
		"seed": { "name": "Сід" },
		"end_frame": { "name": "end_frame" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_duration": { "name": "model_duration" },
		"model_resolution": { "name": "model_resolution" }
	},
	"outputs": { "0": {} }
};
var ViduImageToVideoNode = {
	"display_name": "Vidu Зображення To Відео Node",
	"inputs": {
		"model": { "name": "Модель" },
		"image": { "name": "Зображення" },
		"prompt": { "name": "Промпт" },
		"duration": { "name": "Тривалість" },
		"seed": { "name": "Сід" },
		"resolution": { "name": "resolution" },
		"movement_amplitude": { "name": "movement_amplitude" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var ViduMultiFrameVideoNode = {
	"display_name": "Vidu Multi Кадр Відео Node",
	"inputs": {
		"model": { "name": "Модель" },
		"start_image": { "name": "start_image" },
		"seed": { "name": "Сід" },
		"resolution": { "name": "resolution" },
		"frames": { "name": "frames" },
		"control_after_generate": { "name": "control_after_generate" },
		"frames_duration1": { "name": "frames_duration1" },
		"frames_duration2": { "name": "frames_duration2" },
		"frames_prompt1": { "name": "frames_prompt1" },
		"frames_prompt2": { "name": "frames_prompt2" }
	},
	"outputs": { "0": {} }
};
var ViduReferenceVideoNode = {
	"display_name": "Vidu Reference Відео Node",
	"inputs": {
		"model": { "name": "Модель" },
		"images": { "name": "Зображення" },
		"prompt": { "name": "Промпт" },
		"duration": { "name": "Тривалість" },
		"seed": { "name": "Сід" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"resolution": { "name": "resolution" },
		"movement_amplitude": { "name": "movement_amplitude" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var ViduStartEndToVideoNode = {
	"display_name": "Vidu Почати Кінець To Відео Node",
	"inputs": {
		"model": { "name": "Модель" },
		"first_frame": { "name": "first_frame" },
		"end_frame": { "name": "end_frame" },
		"prompt": { "name": "Промпт" },
		"duration": { "name": "Тривалість" },
		"seed": { "name": "Сід" },
		"resolution": { "name": "resolution" },
		"movement_amplitude": { "name": "movement_amplitude" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var ViduTextToVideoNode = {
	"display_name": "Vidu Текст To Відео Node",
	"inputs": {
		"model": { "name": "Модель" },
		"prompt": { "name": "Промпт" },
		"duration": { "name": "Тривалість" },
		"seed": { "name": "Сід" },
		"aspect_ratio": { "name": "aspect_ratio" },
		"resolution": { "name": "resolution" },
		"movement_amplitude": { "name": "movement_amplitude" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var VOIDInpaintConditioning = {
	"display_name": "Інпейнтинг Кондиціювання",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"video": { "name": "video" },
		"quadmask": { "name": "quadmask" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var VOIDQuadmaskPreprocess = {
	"display_name": "Quadmask Preprocess",
	"inputs": {
		"mask": { "name": "Маска" },
		"dilate_width": { "name": "dilate_width" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var VOIDSampler = {
	"display_name": "Семплер",
	"outputs": { "0": {} }
};
var VOIDWarpedNoise = {
	"display_name": "Warped Шум",
	"inputs": {
		"optical_flow": { "name": "optical_flow" },
		"video": { "name": "video" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" }
	},
	"outputs": { "0": { "name": "Вихід 0" } }
};
var VOIDWarpedNoiseSource = {
	"display_name": "Warped Шум Джерело",
	"inputs": { "warped_noise": { "name": "warped_noise" } },
	"outputs": { "0": {} }
};
var VoxelToMesh = {
	"display_name": "Voxel To Меш",
	"inputs": {
		"voxel": { "name": "voxel" },
		"algorithm": { "name": "algorithm" },
		"threshold": { "name": "Поріг" }
	},
	"outputs": { "0": {} }
};
var VoxelToMeshBasic = {
	"display_name": "Voxel To Меш Basic",
	"inputs": {
		"voxel": { "name": "voxel" },
		"threshold": { "name": "Поріг" }
	},
	"outputs": { "0": {} }
};
var VPScheduler = {
	"display_name": "Scheduler",
	"inputs": {
		"steps": { "name": "Кроки" },
		"beta_d": { "name": "beta_d" },
		"beta_min": { "name": "beta_min" },
		"eps_s": { "name": "eps_s" }
	},
	"outputs": { "0": {} }
};
var Wan22FunControlToVideo = {
	"display_name": "Wan Fun Керувати To Відео",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" },
		"ref_image": { "name": "ref_image" },
		"control_video": { "name": "control_video" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var Wan22ImageToVideoLatent = {
	"display_name": "Wan Зображення To Відео Латент",
	"inputs": {
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" },
		"start_image": { "name": "start_image" }
	},
	"outputs": { "0": {} }
};
var Wan2ImageToVideoApi = {
	"display_name": "Wan Зображення To Відео Api",
	"inputs": {
		"model": { "name": "Модель" },
		"first_frame": { "name": "first_frame" },
		"seed": { "name": "Сід" },
		"prompt_extend": { "name": "prompt_extend" },
		"watermark": { "name": "watermark" },
		"last_frame": { "name": "last_frame" },
		"audio": { "name": "audio" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_duration": { "name": "model_duration" },
		"model_negative_prompt": { "name": "model_negative_prompt" },
		"model_prompt": { "name": "model_prompt" },
		"model_resolution": { "name": "model_resolution" }
	},
	"outputs": { "0": {} }
};
var Wan2ReferenceVideoApi = {
	"display_name": "Wan Reference Відео Api",
	"inputs": {
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"watermark": { "name": "watermark" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_duration": { "name": "model_duration" },
		"model_negative_prompt": { "name": "model_negative_prompt" },
		"model_prompt": { "name": "model_prompt" },
		"model_ratio": { "name": "model_ratio" },
		"model_resolution": { "name": "model_resolution" }
	},
	"outputs": { "0": {} }
};
var Wan2TextToVideoApi = {
	"display_name": "Wan Текст To Відео Api",
	"inputs": {
		"model": { "name": "Модель" },
		"seed": { "name": "Сід" },
		"prompt_extend": { "name": "prompt_extend" },
		"watermark": { "name": "watermark" },
		"audio": { "name": "audio" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_duration": { "name": "model_duration" },
		"model_negative_prompt": { "name": "model_negative_prompt" },
		"model_prompt": { "name": "model_prompt" },
		"model_ratio": { "name": "model_ratio" },
		"model_resolution": { "name": "model_resolution" }
	},
	"outputs": { "0": {} }
};
var Wan2VideoContinuationApi = {
	"display_name": "Wan Відео Continuation Api",
	"inputs": {
		"model": { "name": "Модель" },
		"first_clip": { "name": "first_clip" },
		"seed": { "name": "Сід" },
		"prompt_extend": { "name": "prompt_extend" },
		"watermark": { "name": "watermark" },
		"last_frame": { "name": "last_frame" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_duration": { "name": "model_duration" },
		"model_negative_prompt": { "name": "model_negative_prompt" },
		"model_prompt": { "name": "model_prompt" },
		"model_resolution": { "name": "model_resolution" }
	},
	"outputs": { "0": {} }
};
var Wan2VideoEditApi = {
	"display_name": "Wan Відео Редагувати Api",
	"inputs": {
		"model": { "name": "Модель" },
		"video": { "name": "video" },
		"seed": { "name": "Сід" },
		"audio_setting": { "name": "audio_setting" },
		"watermark": { "name": "watermark" },
		"control_after_generate": { "name": "control_after_generate" },
		"model_duration": { "name": "model_duration" },
		"model_prompt": { "name": "model_prompt" },
		"model_ratio": { "name": "model_ratio" },
		"model_resolution": { "name": "model_resolution" }
	},
	"outputs": { "0": {} }
};
var WanAnimateToVideo = {
	"display_name": "Wan Animate To Відео",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" },
		"continue_motion_max_frames": { "name": "continue_motion_max_frames" },
		"video_frame_offset": { "name": "video_frame_offset" },
		"clip_vision_output": { "name": "clip_vision_output" },
		"reference_image": { "name": "reference_image" },
		"face_video": { "name": "face_video" },
		"pose_video": { "name": "pose_video" },
		"background_video": { "name": "background_video" },
		"character_mask": { "name": "character_mask" },
		"continue_motion": { "name": "continue_motion" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" },
		"4": { "name": "Вихід 4" },
		"5": { "name": "Вихід 5" }
	}
};
var wanBlockSwap = {
	"display_name": "Block Swap",
	"inputs": { "model": { "name": "Модель" } },
	"outputs": { "0": {} }
};
var WanCameraEmbedding = {
	"display_name": "Wan Камера Embedding",
	"inputs": {
		"camera_pose": { "name": "camera_pose" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"speed": { "name": "speed" },
		"fx": { "name": "fx" },
		"fy": { "name": "fy" },
		"cx": { "name": "cx" },
		"cy": { "name": "cy" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" }
	}
};
var WanCameraImageToVideo = {
	"display_name": "Wan Камера Зображення To Відео",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" },
		"clip_vision_output": { "name": "clip_vision_output" },
		"start_image": { "name": "start_image" },
		"camera_conditions": { "name": "camera_conditions" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var WanContextWindowsManual = {
	"display_name": "Wan Context Windows Manual",
	"inputs": {
		"model": { "name": "Модель" },
		"context_length": { "name": "context_length" },
		"context_overlap": { "name": "context_overlap" },
		"context_schedule": { "name": "context_schedule" },
		"context_stride": { "name": "context_stride" },
		"closed_loop": { "name": "closed_loop" },
		"fuse_method": { "name": "fuse_method" },
		"freenoise": { "name": "freenoise" },
		"retain_first_frame": { "name": "retain_first_frame" },
		"split_conds_to_windows": { "name": "split_conds_to_windows" }
	},
	"outputs": { "0": {} }
};
var WanDancerEncodeAudio = {
	"display_name": "Wan Dancer Кодувати Аудіо",
	"inputs": {
		"audio": { "name": "audio" },
		"video_frames": { "name": "video_frames" },
		"audio_inject_scale": { "name": "audio_inject_scale" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" }
	}
};
var WanDancerPadKeyframes = {
	"display_name": "Wan Dancer Pad Keyframes",
	"inputs": {
		"images": { "name": "Зображення" },
		"segment_length": { "name": "segment_length" },
		"segment_index": { "name": "segment_index" },
		"audio": { "name": "audio" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var WanDancerPadKeyframesList = {
	"display_name": "Wan Dancer Pad Keyframes Список",
	"inputs": {
		"images": { "name": "Зображення" },
		"segment_length": { "name": "segment_length" },
		"num_segments": { "name": "num_segments" },
		"audio": { "name": "audio" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var WanDancerVideo = {
	"display_name": "Wan Dancer Відео",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"clip_vision_output": { "name": "clip_vision_output" },
		"clip_vision_output_ref": { "name": "clip_vision_output_ref" },
		"start_image": { "name": "start_image" },
		"mask": { "name": "Маска" },
		"audio_encoder_output": { "name": "audio_encoder_output" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var WanFirstLastFrameToVideo = {
	"display_name": "Wan Перший Останній Кадр To Відео",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" },
		"clip_vision_start_image": { "name": "clip_vision_start_image" },
		"clip_vision_end_image": { "name": "clip_vision_end_image" },
		"start_image": { "name": "start_image" },
		"end_image": { "name": "end_image" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var WanFunControlToVideo = {
	"display_name": "Wan Fun Керувати To Відео",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" },
		"clip_vision_output": { "name": "clip_vision_output" },
		"start_image": { "name": "start_image" },
		"control_video": { "name": "control_video" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var WanFunInpaintToVideo = {
	"display_name": "Wan Fun Інпейнтинг To Відео",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" },
		"clip_vision_output": { "name": "clip_vision_output" },
		"start_image": { "name": "start_image" },
		"end_image": { "name": "end_image" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var WanHuMoImageToVideo = {
	"display_name": "Wan Hu Mo Зображення To Відео",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" },
		"audio_encoder_output": { "name": "audio_encoder_output" },
		"ref_image": { "name": "ref_image" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var WanImageToImageApi = {
	"display_name": "Wan Зображення To Зображення Api",
	"inputs": {
		"model": { "name": "Модель" },
		"image": { "name": "Зображення" },
		"prompt": { "name": "Промпт" },
		"negative_prompt": { "name": "Негативний промпт" },
		"seed": { "name": "Сід" },
		"watermark": { "name": "watermark" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var WanImageToVideo = {
	"display_name": "Wan Зображення To Відео",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" },
		"clip_vision_output": { "name": "clip_vision_output" },
		"start_image": { "name": "start_image" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var WanImageToVideoApi = {
	"display_name": "Wan Зображення To Відео Api",
	"inputs": {
		"model": { "name": "Модель" },
		"image": { "name": "Зображення" },
		"prompt": { "name": "Промпт" },
		"negative_prompt": { "name": "Негативний промпт" },
		"resolution": { "name": "resolution" },
		"duration": { "name": "Тривалість" },
		"audio": { "name": "audio" },
		"seed": { "name": "Сід" },
		"generate_audio": { "name": "generate_audio" },
		"prompt_extend": { "name": "prompt_extend" },
		"watermark": { "name": "watermark" },
		"shot_type": { "name": "shot_type" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var WanInfiniteTalkToVideo = {
	"display_name": "Wan Infinite Talk To Відео",
	"inputs": {
		"mode": { "name": "Режим" },
		"model": { "name": "Модель" },
		"model_patch": { "name": "model_patch" },
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"audio_encoder_output_1": { "name": "audio_encoder_output_1" },
		"motion_frame_count": { "name": "motion_frame_count" },
		"audio_scale": { "name": "audio_scale" },
		"clip_vision_output": { "name": "clip_vision_output" },
		"start_image": { "name": "start_image" },
		"previous_frames": { "name": "previous_frames" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" },
		"4": { "name": "Вихід 4" }
	}
};
var WanMoveConcatTrack = {
	"display_name": "Wan Рухати Concat Трек",
	"inputs": {
		"tracks_1": { "name": "tracks_1" },
		"tracks_2": { "name": "tracks_2" }
	},
	"outputs": { "0": {} }
};
var WanMoveTracksFromCoords = {
	"display_name": "Wan Рухати Tracks From Coords",
	"inputs": {
		"track_coords": { "name": "track_coords" },
		"track_mask": { "name": "track_mask" }
	},
	"outputs": {
		"0": {},
		"1": { "name": "Вихід 1" }
	}
};
var WanMoveTrackToVideo = {
	"display_name": "Wan Рухати Трек To Відео",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"strength": { "name": "Сила" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" },
		"start_image": { "name": "start_image" },
		"tracks": { "name": "tracks" },
		"clip_vision_output": { "name": "clip_vision_output" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var WanMoveVisualizeTracks = {
	"display_name": "Wan Рухати Visualize Tracks",
	"inputs": {
		"images": { "name": "Зображення" },
		"line_resolution": { "name": "line_resolution" },
		"circle_size": { "name": "circle_size" },
		"opacity": { "name": "opacity" },
		"line_width": { "name": "line_width" },
		"tracks": { "name": "tracks" }
	},
	"outputs": { "0": {} }
};
var WanPhantomSubjectToVideo = {
	"display_name": "Wan Phantom Об'єкт To Відео",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" },
		"images": { "name": "Зображення" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" }
	}
};
var WanReferenceVideoApi = {
	"display_name": "Wan Reference Відео Api",
	"inputs": {
		"model": { "name": "Модель" },
		"prompt": { "name": "Промпт" },
		"negative_prompt": { "name": "Негативний промпт" },
		"reference_videos": { "name": "reference_videos" },
		"size": { "name": "Розмір" },
		"duration": { "name": "Тривалість" },
		"seed": { "name": "Сід" },
		"shot_type": { "name": "shot_type" },
		"watermark": { "name": "watermark" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var WanSCAILToVideo = {
	"display_name": "Wan To Відео",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" },
		"pose_strength": { "name": "pose_strength" },
		"pose_start": { "name": "pose_start" },
		"pose_end": { "name": "pose_end" },
		"video_frame_offset": { "name": "video_frame_offset" },
		"previous_frame_count": { "name": "previous_frame_count" },
		"pose_video": { "name": "pose_video" },
		"pose_video_mask": { "name": "pose_video_mask" },
		"replacement_mode": { "name": "replacement_mode" },
		"reference_image": { "name": "reference_image" },
		"reference_image_mask": { "name": "reference_image_mask" },
		"clip_vision_output": { "name": "clip_vision_output" },
		"previous_frames": { "name": "previous_frames" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" }
	}
};
var WanSoundImageToVideo = {
	"display_name": "Wan Sound Зображення To Відео",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" },
		"audio_encoder_output": { "name": "audio_encoder_output" },
		"ref_image": { "name": "ref_image" },
		"control_video": { "name": "control_video" },
		"ref_motion": { "name": "ref_motion" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var WanSoundImageToVideoExtend = {
	"display_name": "Wan Sound Зображення To Відео Extend",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"length": { "name": "length" },
		"video_latent": { "name": "video_latent" },
		"audio_encoder_output": { "name": "audio_encoder_output" },
		"ref_image": { "name": "ref_image" },
		"control_video": { "name": "control_video" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var WanTextToImageApi = {
	"display_name": "Wan Текст To Зображення Api",
	"inputs": {
		"model": { "name": "Модель" },
		"prompt": { "name": "Промпт" },
		"negative_prompt": { "name": "Негативний промпт" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"seed": { "name": "Сід" },
		"prompt_extend": { "name": "prompt_extend" },
		"watermark": { "name": "watermark" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var WanTextToVideoApi = {
	"display_name": "Wan Текст To Відео Api",
	"inputs": {
		"model": { "name": "Модель" },
		"prompt": { "name": "Промпт" },
		"negative_prompt": { "name": "Негативний промпт" },
		"size": { "name": "Розмір" },
		"duration": { "name": "Тривалість" },
		"audio": { "name": "audio" },
		"seed": { "name": "Сід" },
		"generate_audio": { "name": "generate_audio" },
		"prompt_extend": { "name": "prompt_extend" },
		"watermark": { "name": "watermark" },
		"shot_type": { "name": "shot_type" },
		"control_after_generate": { "name": "control_after_generate" }
	},
	"outputs": { "0": {} }
};
var WanTrackToVideo = {
	"display_name": "Wan Трек To Відео",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"tracks": { "name": "tracks" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" },
		"temperature": { "name": "temperature" },
		"topk": { "name": "topk" },
		"start_image": { "name": "start_image" },
		"clip_vision_output": { "name": "clip_vision_output" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" }
	}
};
var WanUni3CControlnetApply = {
	"display_name": "Wan Uni Controlnet Застосувати",
	"inputs": {
		"model": { "name": "Модель" },
		"model_patch": { "name": "model_patch" },
		"vae": { "name": "VAE" },
		"render_video": { "name": "render_video" },
		"strength": { "name": "Сила" },
		"start_percent": { "name": "start_percent" },
		"end_percent": { "name": "end_percent" }
	}
};
var WanVaceToVideo = {
	"display_name": "Wan Vace To Відео",
	"inputs": {
		"positive": { "name": "Позитивне" },
		"negative": { "name": "Негативне" },
		"vae": { "name": "VAE" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"length": { "name": "length" },
		"batch_size": { "name": "Розмір партії" },
		"strength": { "name": "Сила" },
		"control_video": { "name": "control_video" },
		"control_masks": { "name": "control_masks" },
		"reference_image": { "name": "reference_image" }
	},
	"outputs": {
		"0": { "name": "Вихід 0" },
		"1": { "name": "Вихід 1" },
		"2": { "name": "Вихід 2" },
		"3": { "name": "Вихід 3" }
	}
};
var WavespeedFlashVSRNode = {
	"display_name": "Wavespeed Flash Node",
	"inputs": {
		"video": { "name": "video" },
		"target_resolution": { "name": "target_resolution" }
	},
	"outputs": { "0": {} }
};
var WavespeedImageUpscaleNode = {
	"display_name": "Wavespeed Зображення Upscale Node",
	"inputs": {
		"model": { "name": "Модель" },
		"image": { "name": "Зображення" },
		"target_resolution": { "name": "target_resolution" }
	},
	"outputs": { "0": {} }
};
var WebcamCapture = {
	"display_name": "Webcam Захопити",
	"inputs": {
		"image": { "name": "Зображення" },
		"width": { "name": "Ширина" },
		"height": { "name": "Висота" },
		"capture_on_queue": { "name": "capture_on_queue" },
		"waiting for camera___": {}
	}
};
var ZImageFunControlnet = {
	"display_name": "Зображення Fun Controlnet",
	"inputs": {
		"model": { "name": "Модель" },
		"model_patch": { "name": "model_patch" },
		"vae": { "name": "VAE" },
		"strength": { "name": "Сила" },
		"image": { "name": "Зображення" },
		"inpaint_image": { "name": "inpaint_image" },
		"mask": { "name": "Маска" }
	}
};
var nodeDefs_default = {
	AddNoise,
	AddTextPrefix,
	AddTextSuffix,
	AdjustBrightness,
	AdjustContrast,
	AlignYourStepsScheduler,
	AnimaLLLiteApply,
	APG,
	ARVideoI2V,
	AudioAdjustVolume,
	AudioConcat,
	AudioEncoderEncode,
	AudioEncoderLoader,
	AudioEqualizer3Band,
	AudioMerge,
	BasicGuider,
	BasicScheduler,
	BatchImagesNode,
	BatchLatentsNode,
	BatchMasksNode,
	BeebleSwitchXImageEdit,
	BeebleSwitchXVideoEdit,
	BerniniConditioning,
	BetaSamplingScheduler,
	BriaImageEditNode,
	BriaRemoveImageBackground,
	BriaRemoveVideoBackground,
	BriaTransparentVideoBackground,
	BriaVideoGreenScreen,
	BriaVideoReplaceBackground,
	BuildJsonPromptIdeogram,
	ByteDance2FirstLastFrameNode,
	ByteDance2ReferenceNode,
	ByteDance2TextToVideoNode,
	ByteDanceCreateImageAsset,
	ByteDanceCreateVideoAsset,
	ByteDanceFirstLastFrameNode,
	ByteDanceImageNode,
	ByteDanceImageReferenceNode,
	ByteDanceImageToVideoNode,
	ByteDanceSeedAudio,
	ByteDanceSeedNode,
	ByteDanceSeedreamNode,
	ByteDanceSeedreamNodeV2,
	ByteDanceTextToVideoNode,
	Canny,
	CaseConverter,
	CenterCropImages,
	CFGGuider,
	CFGNorm,
	CFGOverride,
	CFGZeroStar,
	CheckpointLoader,
	CheckpointLoaderSimple,
	CheckpointSave,
	ChromaRadianceOptions,
	ClaudeNode,
	CLIPAttentionMultiply,
	CLIPLoader,
	CLIPMergeAdd,
	CLIPMergeSimple,
	CLIPMergeSubtract,
	CLIPSave,
	CLIPSetLastLayer,
	CLIPTextEncode,
	CLIPTextEncodeControlnet,
	CLIPTextEncodeFlux,
	CLIPTextEncodeHiDream,
	CLIPTextEncodeHunyuanDiT,
	CLIPTextEncodeKandinsky5,
	CLIPTextEncodeLumina2,
	CLIPTextEncodePixArtAlpha,
	CLIPTextEncodeSD3,
	CLIPTextEncodeSDXL,
	CLIPTextEncodeSDXLRefiner,
	CLIPVisionEncode,
	CLIPVisionLoader,
	ColorToRGBInt,
	ColorTransfer,
	CombineHooks2,
	CombineHooks4,
	CombineHooks8,
	ComfyAndNode,
	ComfyMathExpression,
	ComfyNotNode,
	ComfyNumberConvert,
	ComfyOrNode,
	ComfySwitchNode,
	ConditioningAverage,
	ConditioningCombine,
	ConditioningConcat,
	ConditioningMultiply,
	ConditioningSetArea,
	ConditioningSetAreaPercentage,
	ConditioningSetAreaPercentageVideo,
	ConditioningSetAreaStrength,
	ConditioningSetDefaultCombine,
	ConditioningSetMask,
	ConditioningSetProperties,
	ConditioningSetPropertiesAndCombine,
	ConditioningSetTimestepRange,
	ConditioningStableAudio,
	ConditioningTimestepsRange,
	ConditioningZeroOut,
	ContextWindowsManual,
	ControlNetApply,
	ControlNetApplyAdvanced,
	ControlNetApplySD3,
	ControlNetInpaintingAliMamaApply,
	ControlNetLoader,
	ConvertArrayToString,
	ConvertDictionaryToString,
	CosmosImageToVideoLatent,
	CosmosPredict2ImageToVideoLatent,
	CreateBoundingBoxes,
	CreateCameraInfo,
	CreateHookKeyframe,
	CreateHookKeyframesFromFloats,
	CreateHookKeyframesInterpolated,
	CreateHookLora,
	CreateHookLoraModelOnly,
	CreateHookModelAsLora,
	CreateHookModelAsLoraModelOnly,
	CreateList,
	CreateVideo,
	CropByBBoxes,
	CropMask,
	CurveEditor,
	CustomCombo,
	DA3GeometryToMesh,
	DA3Inference,
	DA3Render,
	DiffControlNetLoader,
	DifferentialDiffusion,
	DiffusersLoader,
	DisableNoise,
	DrawBBoxes,
	DualCFGGuider,
	DualCLIPLoader,
	DualModelGuider,
	EasyCache,
	ElevenLabsAudioIsolation,
	ElevenLabsInstantVoiceClone,
	ElevenLabsSpeechToSpeech,
	ElevenLabsSpeechToText,
	ElevenLabsTextToDialogue,
	ElevenLabsTextToSoundEffects,
	ElevenLabsTextToSpeech,
	ElevenLabsVoiceSelector,
	EmptyAceStep1_5LatentAudio,
	EmptyAceStepLatentAudio,
	EmptyARVideoLatent,
	EmptyAudio,
	EmptyChromaRadianceLatentImage,
	EmptyCosmosLatentVideo,
	EmptyFlux2LatentImage,
	EmptyHiDreamO1LatentImage,
	EmptyHunyuanImageLatent,
	EmptyHunyuanLatentVideo,
	EmptyHunyuanVideo15Latent,
	EmptyImage,
	EmptyLatentAudio,
	EmptyLatentHunyuan3Dv2,
	EmptyLatentImage,
	EmptyLTXVLatentVideo,
	EmptyMochiLatentVideo,
	EmptyQwenImageLayeredLatentImage,
	EmptySD3LatentImage,
	"Epsilon Scaling": {
		"display_name": "Epsilon Масштаб",
		"inputs": {
			"model": { "name": "Модель" },
			"scaling_factor": { "name": "scaling_factor" }
		},
		"outputs": { "0": {} }
	},
	ExponentialScheduler,
	ExtendIntermediateSigmas,
	FeatherMask,
	File3DToSplat,
	FlipSigmas,
	Flux2ImageNode,
	Flux2MaxImageNode,
	Flux2ProImageNode,
	Flux2Scheduler,
	FluxDisableGuidance,
	FluxEraseNode,
	FluxGuidance,
	FluxKontextImageScale,
	FluxKontextMaxImageNode,
	FluxKontextMultiReferenceLatentMethod,
	FluxKontextProImageNode,
	FluxKVCache,
	FluxProExpandNode,
	FluxProFillNode,
	FluxProUltraImageNode,
	FluxVTONode,
	FrameInterpolate,
	FrameInterpolationModelLoader,
	FreeU,
	FreeU_V2,
	FreSca,
	GeminiImage2Node,
	GeminiImageNode,
	GeminiInputFiles,
	GeminiNanoBanana2,
	GeminiNanoBanana2V2,
	GeminiNode,
	GeminiNodeV2,
	GeminiVideoOmni,
	GenerateTracks,
	GetICLoRAParameters,
	GetImageSize,
	GetSplatCount,
	GetVideoComponents,
	GITSScheduler,
	GLIGENLoader,
	GLIGENTextBoxApply,
	GLSLShader,
	GrokImageEditNode,
	GrokImageEditNodeV2,
	GrokImageNode,
	GrokVideoEditNode,
	GrokVideoExtendNode,
	GrokVideoNode,
	GrokVideoReferenceNode,
	GrowMask,
	HappyHorseImageToVideoApi,
	HappyHorseReferenceVideoApi,
	HappyHorseTextToVideoApi,
	HappyHorseVideoEditApi,
	HeyGenAvatarVideoNode,
	HeyGenCreateAvatarNode,
	HeyGenTalkingPhotoNode,
	HeyGenTextToSpeechNode,
	HeyGenVideoTranslateNode,
	HiDreamO1PatchSeamSmoothing,
	HiDreamO1ReferenceImages,
	HitPawGeneralImageEnhance,
	HitPawVideoEnhance,
	Hunyuan3Dv2Conditioning,
	Hunyuan3Dv2ConditioningMultiView,
	HunyuanImageToVideo,
	HunyuanRefinerLatent,
	HunyuanVideo15ImageToVideo,
	HunyuanVideo15LatentUpscaleWithModel,
	HunyuanVideo15SuperResolution,
	HypernetworkLoader,
	HyperTile,
	Ideogram4Scheduler,
	IdeogramV3,
	IdeogramV4,
	ImageAddNoise,
	ImageBatch,
	ImageBlend,
	ImageBlur,
	ImageColorToMask,
	ImageCompare,
	ImageCompositeMasked,
	ImageCrop,
	ImageCropV2,
	ImageDeduplication,
	ImageFlip,
	ImageFromBatch,
	ImageGrid,
	ImageHistogram,
	ImageInvert,
	ImageMergeTileList,
	ImageOnlyCheckpointLoader,
	ImageOnlyCheckpointSave,
	ImagePadForOutpaint,
	ImageQuantize,
	ImageRGBToYUV,
	ImageRotate,
	ImageScale,
	ImageScaleBy,
	ImageScaleToMaxDimension,
	ImageScaleToTotalPixels,
	ImageSharpen,
	ImageStitch,
	ImageToMask,
	ImageUpscaleWithModel,
	ImageYUVToRGB,
	InpaintModelConditioning,
	InstructPixToPixConditioning,
	InvertMask,
	JoinAudioChannels,
	JoinImageWithAlpha,
	JsonExtractString,
	Kandinsky5ImageToVideo,
	KarrasScheduler,
	KlingAvatarNode,
	KlingCameraControlI2VNode,
	KlingCameraControls,
	KlingCameraControlT2VNode,
	KlingDualCharacterVideoEffectNode,
	KlingFirstLastFrameNode,
	KlingImage2VideoNode,
	KlingImageGenerationNode,
	KlingImageToVideoWithAudio,
	KlingLipSyncAudioToVideoNode,
	KlingLipSyncTextToVideoNode,
	KlingMotionControl,
	KlingOmniProEditVideoNode,
	KlingOmniProFirstLastFrameNode,
	KlingOmniProImageNode,
	KlingOmniProImageToVideoNode,
	KlingOmniProTextToVideoNode,
	KlingOmniProVideoToVideoNode,
	KlingSingleImageVideoEffectNode,
	KlingStartEndFrameNode,
	KlingTextToVideoNode,
	KlingTextToVideoWithAudio,
	KlingVideoExtendNode,
	KlingVideoNode,
	KlingVirtualTryOnNode,
	Krea2ImageNode,
	Krea2StyleReferenceNode,
	KSampler,
	KSamplerAdvanced,
	KSamplerSelect,
	LaplaceScheduler,
	LatentAdd,
	LatentApplyOperation,
	LatentApplyOperationCFG,
	LatentBatch,
	LatentBatchSeedBehavior,
	LatentBlend,
	LatentComposite,
	LatentCompositeMasked,
	LatentConcat,
	LatentCrop,
	LatentCut,
	LatentCutToBatch,
	LatentFlip,
	LatentFromBatch,
	LatentInterpolate,
	LatentMultiply,
	LatentOperationSharpen,
	LatentOperationTonemapReinhard,
	LatentRotate,
	LatentSubtract,
	LatentUpscale,
	LatentUpscaleBy,
	LatentUpscaleModelLoader,
	LazyCache,
	Load3D,
	Load3DAdvanced,
	LoadAudio,
	LoadBackgroundRemovalModel,
	LoadDA3Model,
	LoadImage,
	LoadImageDataSetFromFolder,
	LoadImageMask,
	LoadImageOutput,
	LoadImageTextDataSetFromFolder,
	LoadLatent,
	LoadMediaPipeFaceLandmarker,
	LoadMoGeModel,
	LoadTrainingDataset,
	LoadVideo,
	LoadVideoDataSetFromFolder,
	LoadVideoTextDataSetFromFolder,
	LoraLoader,
	LoraLoaderBypass,
	LoraLoaderBypassModelOnly,
	LoraLoaderModelOnly,
	LoraModelLoader,
	LoraSave,
	LossGraphNode,
	LotusConditioning,
	LTXAVTextEncoderLoader,
	LTXVAddGuide,
	LtxvApiImageToVideo,
	LtxvApiTextToVideo,
	LTXVAudioVAEDecode,
	LTXVAudioVAEEncode,
	LTXVAudioVAELoader,
	LTXVConcatAVLatent,
	LTXVConditioning,
	LTXVContextWindows,
	LTXVCropGuides,
	LTXVEmptyLatentAudio,
	LTXVImgToVideo,
	LTXVImgToVideoInplace,
	LTXVLatentUpsampler,
	LTXVPreprocess,
	LTXVReferenceAudio,
	LTXVScheduler,
	LTXVSeparateAVLatent,
	LumaConceptsNode,
	LumaImageEditNode2,
	LumaImageModifyNode,
	LumaImageNode,
	LumaImageNode2,
	LumaImageToVideoNode,
	LumaRay32ExtendVideoNode,
	LumaRay32ImageToVideoNode,
	LumaRay32KeyframeNode,
	LumaRay32KeyframesToVideoNode,
	LumaRay32TextToVideoNode,
	LumaRay32VideoEditNode,
	LumaRay32VideoReframeNode,
	LumaReferenceNode,
	LumaVideoNode,
	MagnificImageRelightNode,
	MagnificImageSkinEnhancerNode,
	MagnificImageStyleTransferNode,
	MagnificImageUpscalerCreativeNode,
	MagnificImageUpscalerPreciseV2Node,
	Mahiro,
	MakeTrainingDataset,
	ManualSigmas,
	MaskComposite,
	MaskPreview,
	MaskToImage,
	MediaPipeFaceLandmarker,
	MediaPipeFaceMask,
	MediaPipeFaceMeshVisualize,
	MergeImageLists,
	MergeSplat,
	MergeTextLists,
	MeshyAnimateModelNode,
	MeshyImageToModelNode,
	MeshyMultiImageToModelNode,
	MeshyRefineNode,
	MeshyRigModelNode,
	MeshyTextToModelNode,
	MeshyTextureNode,
	MinimaxHailuoVideoNode,
	MinimaxImageToVideoNode,
	MinimaxTextToVideoNode,
	ModelComputeDtype,
	ModelMergeAdd,
	ModelMergeAuraflow,
	ModelMergeBlocks,
	ModelMergeCosmos14B,
	ModelMergeCosmos7B,
	ModelMergeCosmosPredict2_14B,
	ModelMergeCosmosPredict2_2B,
	ModelMergeFlux1,
	ModelMergeKrea2,
	ModelMergeLTXV,
	ModelMergeMochiPreview,
	ModelMergeQwenImage,
	ModelMergeSD1,
	ModelMergeSD2,
	ModelMergeSD3_2B,
	ModelMergeSD35_Large,
	ModelMergeSDXL,
	ModelMergeSimple,
	ModelMergeSubtract,
	ModelMergeWAN2_1,
	ModelNoiseScale,
	ModelPatchLoader,
	ModelSamplingAuraFlow,
	ModelSamplingContinuousEDM,
	ModelSamplingContinuousV,
	ModelSamplingDiscrete,
	ModelSamplingFlux,
	ModelSamplingLTXV,
	ModelSamplingSD3,
	ModelSamplingStableCascade,
	ModelSave,
	MoGeInference,
	MoGePanoramaInference,
	MoGePointMapToMesh,
	MoGeRender,
	Morphology,
	MultiGPU_WorkUnits,
	NAGuidance,
	NormalizeImages,
	NormalizeVideoLatentStart,
	OpenAIChatConfig,
	OpenAIChatNode,
	OpenAIDalle2,
	OpenAIDalle3,
	OpenAIGPTImage1,
	OpenAIGPTImageNodeV2,
	OpenAIInputFiles,
	OpenAIVideoSora2,
	OpenRouterLLMNode,
	OpticalFlowLoader,
	OptimalStepsScheduler,
	Painter,
	PairConditioningCombine,
	PairConditioningSetDefaultCombine,
	PairConditioningSetProperties,
	PairConditioningSetPropertiesAndCombine,
	PatchModelAddDownscale,
	PerpNeg,
	PerpNegGuider,
	PerturbedAttentionGuidance,
	PhotoMakerEncode,
	PhotoMakerLoader,
	PiDConditioning,
	PixverseImageToVideoNode,
	PixverseTemplateNode,
	PixverseTextToVideoNode,
	PixverseTransitionVideoNode,
	PolyexponentialScheduler,
	PorterDuffImageComposite,
	Preview3D,
	Preview3DAdvanced,
	PreviewAny,
	PreviewAudio,
	PreviewGaussianSplat,
	PreviewImage,
	PreviewPointCloud,
	PrimitiveBoolean,
	PrimitiveBoundingBox,
	PrimitiveFloat,
	PrimitiveInt,
	PrimitiveString,
	PrimitiveStringMultiline,
	QuadrupleCLIPLoader,
	QuiverImageToSVGNode,
	QuiverTextToSVGNode,
	QwenImageDiffsynthControlnet,
	RandomCropImages,
	RandomNoise,
	RebatchImages,
	RebatchLatents,
	RecordAudio,
	RecraftColorRGB,
	RecraftControls,
	RecraftCreateStyleNode,
	RecraftCreativeUpscaleNode,
	RecraftCrispUpscaleNode,
	RecraftImageInpaintingNode,
	RecraftImageToImageNode,
	RecraftRemoveBackgroundNode,
	RecraftReplaceBackgroundNode,
	RecraftStyleV3DigitalIllustration,
	RecraftStyleV3InfiniteStyleLibrary,
	RecraftStyleV3LogoRaster,
	RecraftStyleV3RealisticImage,
	RecraftTextToImageNode,
	RecraftTextToVectorNode,
	RecraftV4TextToImageNode,
	RecraftV4TextToVectorNode,
	RecraftVectorizeImageNode,
	ReferenceLatent,
	ReferenceTimbreAudio,
	RegexExtract,
	RegexMatch,
	RegexReplace,
	RemoveBackground,
	RenderSplat,
	RenormCFG,
	RepeatImageBatch,
	RepeatLatentBatch,
	ReplaceText,
	ReplaceVideoLatentFrames,
	RescaleCFG,
	ResizeAndPadImage,
	ResizeImageMaskNode,
	ResizeImagesByLongerEdge,
	ResizeImagesByShorterEdge,
	ResolutionBucket,
	ResolutionSelector,
	ReveImageCreateNode,
	ReveImageEditNode,
	ReveImageRemixNode,
	Rodin3D_Detail,
	Rodin3D_Gen2,
	Rodin3D_Gen25_Image,
	Rodin3D_Gen25_Text,
	Rodin3D_Regular,
	Rodin3D_Sketch,
	Rodin3D_Smooth,
	RTDETR_detect,
	RunwayAleph2KeyframeNode,
	RunwayAleph2PromptImageNode,
	RunwayAleph2VideoToVideoNode,
	RunwayFirstLastFrameNode,
	RunwayImageToVideoNodeGen3a,
	RunwayImageToVideoNodeGen4,
	RunwayTextToImageNode,
	SAM3_Detect,
	SAM3_TrackPreview,
	SAM3_TrackToMask,
	SAM3_VideoTrack,
	SamplerARVideo,
	SamplerCustom,
	SamplerCustomAdvanced,
	SamplerDPMAdaptative,
	SamplerDPMPP_2M_SDE,
	SamplerDPMPP_2S_Ancestral,
	SamplerDPMPP_3M_SDE,
	SamplerDPMPP_SDE,
	SamplerER_SDE,
	SamplerEulerAncestral,
	SamplerEulerAncestralCFGPP,
	SamplerEulerCFGpp,
	SamplerLCM,
	SamplerLCMUpscale,
	SamplerLMS,
	SamplerSASolver,
	SamplerSEEDS2,
	SamplingPercentToSigma,
	Save3DAdvanced,
	SaveAnimatedPNG,
	SaveAnimatedWEBP,
	SaveAudio,
	SaveAudioAdvanced,
	SaveAudioMP3,
	SaveAudioOpus,
	SaveGaussianSplat,
	SaveGLB,
	SaveImage,
	SaveImageAdvanced,
	SaveImageDataSetToFolder,
	SaveImageTextDataSetToFolder,
	SaveImageWebsocket,
	SaveLatent,
	SaveLoRA,
	SavePointCloud,
	SaveSVGNode,
	SaveText,
	SaveTrainingDataset,
	SaveVideo,
	SaveWEBM,
	SCAIL2ColoredMask,
	ScaleROPE,
	SD_4XUpscale_Conditioning,
	SDPoseDrawKeypoints,
	SDPoseFaceBBoxes,
	SDPoseKeypointExtractor,
	SDTurboScheduler,
	SeedNode,
	SeedVR2Conditioning,
	SeedVR2PostProcessing,
	SeedVR2Preprocess,
	SeedVR2TemporalChunk,
	SeedVR2TemporalMerge,
	SelectCLIPDevice,
	SelectModelDevice,
	SelectVAEDevice,
	SelfAttentionGuidance,
	SetClipHooks,
	SetFirstSigma,
	SetHookKeyframes,
	SetLatentNoiseMask,
	SetUnionControlNetType,
	ShuffleDataset,
	ShuffleImageTextDataset,
	ShuffleVideoDataset,
	ShuffleVideoTextDataset,
	SkipLayerGuidanceDiT,
	SkipLayerGuidanceDiTSimple,
	SkipLayerGuidanceSD3,
	SolidMask,
	SoniloTextToMusic,
	SoniloVideoToMusic,
	SplatToFile3D,
	SplatToMesh,
	SplitAudioChannels,
	SplitImageToTileList,
	SplitImageWithAlpha,
	SplitSigmas,
	SplitSigmasDenoise,
	StableCascade_EmptyLatentImage,
	StableCascade_StageB_Conditioning,
	StableCascade_StageC_VAEEncode,
	StableCascade_SuperResolutionControlnet,
	StableZero123_Conditioning,
	StableZero123_Conditioning_Batched,
	StringCompare,
	StringConcatenate,
	StringContains,
	StringFormat,
	StringLength,
	StringReplace,
	StringSubstring,
	StringTrim,
	StripWhitespace,
	StyleModelApply,
	StyleModelLoader,
	SUPIRApply,
	SV3D_Conditioning,
	SVD_img2vid_Conditioning,
	SyncLipSyncNode,
	SyncTalkingImageNode,
	T5TokenizerOptions,
	TCFG,
	TemporalScoreRescaling,
	Tencent3DPartNode,
	Tencent3DTextureEditNode,
	TencentImageToModelNode,
	TencentModelTo3DUVNode,
	TencentSmartTopologyNode,
	TencentTextToModelNode,
	TextEncodeAceStepAudio,
	TextEncodeAceStepAudio1_5,
	TextEncodeBooguEdit,
	TextEncodeHunyuanVideo_ImageToVideo,
	TextEncodeJoyImageEdit,
	TextEncodeMageFlowEdit,
	TextEncodeQwenImageEdit,
	TextEncodeQwenImageEditPlus,
	TextEncodeZImageOmni,
	TextGenerate,
	TextGenerateLTX2Prompt,
	TextOverlay,
	TextToLowercase,
	TextToUppercase,
	ThresholdMask,
	TomePatchModel,
	TopazImageEnhance,
	TopazVideoEnhance,
	TopazVideoEnhanceV2,
	TorchCompileModel,
	TrainLoraNode,
	TransformSplat,
	TrimAudioDuration,
	TrimVideoLatent,
	TripleCLIPLoader,
	TripoConversionNode,
	TripoImageToModelNode,
	TripoImportModelNode,
	TripoMultiviewToModelNode,
	TripoP1ImageToModelNode,
	TripoP1MultiviewToModelNode,
	TripoP1TextToModelNode,
	TripoRefineNode,
	TripoRetargetNode,
	TripoRigNode,
	TripoSplatConditioning,
	TripoSplatPreprocessImage,
	TripoSplatSamplingPreview,
	TripoTextToModelNode,
	TripoTextureNode,
	TruncateText,
	unCLIPCheckpointLoader,
	unCLIPConditioning,
	UNetCrossAttentionMultiply,
	UNETLoader,
	UNetSelfAttentionMultiply,
	UNetTemporalAttentionMultiply,
	UpscaleModelLoader,
	USOStyleReference,
	VAEDecode,
	VAEDecodeAudio,
	VAEDecodeAudioTiled,
	VAEDecodeHunyuan3D,
	VAEDecodeTiled,
	VAEDecodeTripoSplat,
	VAEEncode,
	VAEEncodeAudio,
	VAEEncodeForInpaint,
	VAEEncodeTiled,
	VAELoader,
	VAESave,
	Veo3FirstLastFrameNode,
	Veo3VideoGenerationNode,
	VeoVideoGenerationNode,
	"Video Slice": {
		"display_name": "Відео Slice",
		"inputs": {
			"video": { "name": "video" },
			"start_time": { "name": "start_time" },
			"duration": { "name": "Тривалість" },
			"strict_duration": { "name": "strict_duration" }
		},
		"outputs": { "0": {} }
	},
	VideoFrameSample,
	VideoLinearCFGGuidance,
	VideoRandomTemporalCrop,
	VideoTemporalCrop,
	VideoTriangleCFGGuidance,
	Vidu2ImageToVideoNode,
	Vidu2ReferenceVideoNode,
	Vidu2StartEndToVideoNode,
	Vidu2TextToVideoNode,
	Vidu3ImageToVideoNode,
	Vidu3StartEndToVideoNode,
	Vidu3TextToVideoNode,
	ViduExtendVideoNode,
	ViduImageToVideoNode,
	ViduMultiFrameVideoNode,
	ViduReferenceVideoNode,
	ViduStartEndToVideoNode,
	ViduTextToVideoNode,
	VOIDInpaintConditioning,
	VOIDQuadmaskPreprocess,
	VOIDSampler,
	VOIDWarpedNoise,
	VOIDWarpedNoiseSource,
	VoxelToMesh,
	VoxelToMeshBasic,
	VPScheduler,
	Wan22FunControlToVideo,
	Wan22ImageToVideoLatent,
	Wan2ImageToVideoApi,
	Wan2ReferenceVideoApi,
	Wan2TextToVideoApi,
	Wan2VideoContinuationApi,
	Wan2VideoEditApi,
	WanAnimateToVideo,
	wanBlockSwap,
	WanCameraEmbedding,
	WanCameraImageToVideo,
	WanContextWindowsManual,
	WanDancerEncodeAudio,
	WanDancerPadKeyframes,
	WanDancerPadKeyframesList,
	WanDancerVideo,
	WanFirstLastFrameToVideo,
	WanFunControlToVideo,
	WanFunInpaintToVideo,
	WanHuMoImageToVideo,
	WanImageToImageApi,
	WanImageToVideo,
	WanImageToVideoApi,
	WanInfiniteTalkToVideo,
	WanMoveConcatTrack,
	WanMoveTracksFromCoords,
	WanMoveTrackToVideo,
	WanMoveVisualizeTracks,
	WanPhantomSubjectToVideo,
	WanReferenceVideoApi,
	WanSCAILToVideo,
	WanSoundImageToVideo,
	WanSoundImageToVideoExtend,
	WanTextToImageApi,
	WanTextToVideoApi,
	WanTrackToVideo,
	WanUni3CControlnetApply,
	WanVaceToVideo,
	WavespeedFlashVSRNode,
	WavespeedImageUpscaleNode,
	WebcamCapture,
	ZImageFunControlnet
};
//#endregion
export { APG, ARVideoI2V, AddNoise, AddTextPrefix, AddTextSuffix, AdjustBrightness, AdjustContrast, AlignYourStepsScheduler, AnimaLLLiteApply, AudioAdjustVolume, AudioConcat, AudioEncoderEncode, AudioEncoderLoader, AudioEqualizer3Band, AudioMerge, BasicGuider, BasicScheduler, BatchImagesNode, BatchLatentsNode, BatchMasksNode, BeebleSwitchXImageEdit, BeebleSwitchXVideoEdit, BerniniConditioning, BetaSamplingScheduler, BriaImageEditNode, BriaRemoveImageBackground, BriaRemoveVideoBackground, BriaTransparentVideoBackground, BriaVideoGreenScreen, BriaVideoReplaceBackground, BuildJsonPromptIdeogram, ByteDance2FirstLastFrameNode, ByteDance2ReferenceNode, ByteDance2TextToVideoNode, ByteDanceCreateImageAsset, ByteDanceCreateVideoAsset, ByteDanceFirstLastFrameNode, ByteDanceImageNode, ByteDanceImageReferenceNode, ByteDanceImageToVideoNode, ByteDanceSeedAudio, ByteDanceSeedNode, ByteDanceSeedreamNode, ByteDanceSeedreamNodeV2, ByteDanceTextToVideoNode, CFGGuider, CFGNorm, CFGOverride, CFGZeroStar, CLIPAttentionMultiply, CLIPLoader, CLIPMergeAdd, CLIPMergeSimple, CLIPMergeSubtract, CLIPSave, CLIPSetLastLayer, CLIPTextEncode, CLIPTextEncodeControlnet, CLIPTextEncodeFlux, CLIPTextEncodeHiDream, CLIPTextEncodeHunyuanDiT, CLIPTextEncodeKandinsky5, CLIPTextEncodeLumina2, CLIPTextEncodePixArtAlpha, CLIPTextEncodeSD3, CLIPTextEncodeSDXL, CLIPTextEncodeSDXLRefiner, CLIPVisionEncode, CLIPVisionLoader, Canny, CaseConverter, CenterCropImages, CheckpointLoader, CheckpointLoaderSimple, CheckpointSave, ChromaRadianceOptions, ClaudeNode, ColorToRGBInt, ColorTransfer, CombineHooks2, CombineHooks4, CombineHooks8, ComfyAndNode, ComfyMathExpression, ComfyNotNode, ComfyNumberConvert, ComfyOrNode, ComfySwitchNode, ConditioningAverage, ConditioningCombine, ConditioningConcat, ConditioningMultiply, ConditioningSetArea, ConditioningSetAreaPercentage, ConditioningSetAreaPercentageVideo, ConditioningSetAreaStrength, ConditioningSetDefaultCombine, ConditioningSetMask, ConditioningSetProperties, ConditioningSetPropertiesAndCombine, ConditioningSetTimestepRange, ConditioningStableAudio, ConditioningTimestepsRange, ConditioningZeroOut, ContextWindowsManual, ControlNetApply, ControlNetApplyAdvanced, ControlNetApplySD3, ControlNetInpaintingAliMamaApply, ControlNetLoader, ConvertArrayToString, ConvertDictionaryToString, CosmosImageToVideoLatent, CosmosPredict2ImageToVideoLatent, CreateBoundingBoxes, CreateCameraInfo, CreateHookKeyframe, CreateHookKeyframesFromFloats, CreateHookKeyframesInterpolated, CreateHookLora, CreateHookLoraModelOnly, CreateHookModelAsLora, CreateHookModelAsLoraModelOnly, CreateList, CreateVideo, CropByBBoxes, CropMask, CurveEditor, CustomCombo, DA3GeometryToMesh, DA3Inference, DA3Render, DiffControlNetLoader, DifferentialDiffusion, DiffusersLoader, DisableNoise, DrawBBoxes, DualCFGGuider, DualCLIPLoader, DualModelGuider, EasyCache, ElevenLabsAudioIsolation, ElevenLabsInstantVoiceClone, ElevenLabsSpeechToSpeech, ElevenLabsSpeechToText, ElevenLabsTextToDialogue, ElevenLabsTextToSoundEffects, ElevenLabsTextToSpeech, ElevenLabsVoiceSelector, EmptyARVideoLatent, EmptyAceStep1_5LatentAudio, EmptyAceStepLatentAudio, EmptyAudio, EmptyChromaRadianceLatentImage, EmptyCosmosLatentVideo, EmptyFlux2LatentImage, EmptyHiDreamO1LatentImage, EmptyHunyuanImageLatent, EmptyHunyuanLatentVideo, EmptyHunyuanVideo15Latent, EmptyImage, EmptyLTXVLatentVideo, EmptyLatentAudio, EmptyLatentHunyuan3Dv2, EmptyLatentImage, EmptyMochiLatentVideo, EmptyQwenImageLayeredLatentImage, EmptySD3LatentImage, ExponentialScheduler, ExtendIntermediateSigmas, FeatherMask, File3DToSplat, FlipSigmas, Flux2ImageNode, Flux2MaxImageNode, Flux2ProImageNode, Flux2Scheduler, FluxDisableGuidance, FluxEraseNode, FluxGuidance, FluxKVCache, FluxKontextImageScale, FluxKontextMaxImageNode, FluxKontextMultiReferenceLatentMethod, FluxKontextProImageNode, FluxProExpandNode, FluxProFillNode, FluxProUltraImageNode, FluxVTONode, FrameInterpolate, FrameInterpolationModelLoader, FreSca, FreeU, FreeU_V2, GITSScheduler, GLIGENLoader, GLIGENTextBoxApply, GLSLShader, GeminiImage2Node, GeminiImageNode, GeminiInputFiles, GeminiNanoBanana2, GeminiNanoBanana2V2, GeminiNode, GeminiNodeV2, GeminiVideoOmni, GenerateTracks, GetICLoRAParameters, GetImageSize, GetSplatCount, GetVideoComponents, GrokImageEditNode, GrokImageEditNodeV2, GrokImageNode, GrokVideoEditNode, GrokVideoExtendNode, GrokVideoNode, GrokVideoReferenceNode, GrowMask, HappyHorseImageToVideoApi, HappyHorseReferenceVideoApi, HappyHorseTextToVideoApi, HappyHorseVideoEditApi, HeyGenAvatarVideoNode, HeyGenCreateAvatarNode, HeyGenTalkingPhotoNode, HeyGenTextToSpeechNode, HeyGenVideoTranslateNode, HiDreamO1PatchSeamSmoothing, HiDreamO1ReferenceImages, HitPawGeneralImageEnhance, HitPawVideoEnhance, Hunyuan3Dv2Conditioning, Hunyuan3Dv2ConditioningMultiView, HunyuanImageToVideo, HunyuanRefinerLatent, HunyuanVideo15ImageToVideo, HunyuanVideo15LatentUpscaleWithModel, HunyuanVideo15SuperResolution, HyperTile, HypernetworkLoader, Ideogram4Scheduler, IdeogramV3, IdeogramV4, ImageAddNoise, ImageBatch, ImageBlend, ImageBlur, ImageColorToMask, ImageCompare, ImageCompositeMasked, ImageCrop, ImageCropV2, ImageDeduplication, ImageFlip, ImageFromBatch, ImageGrid, ImageHistogram, ImageInvert, ImageMergeTileList, ImageOnlyCheckpointLoader, ImageOnlyCheckpointSave, ImagePadForOutpaint, ImageQuantize, ImageRGBToYUV, ImageRotate, ImageScale, ImageScaleBy, ImageScaleToMaxDimension, ImageScaleToTotalPixels, ImageSharpen, ImageStitch, ImageToMask, ImageUpscaleWithModel, ImageYUVToRGB, InpaintModelConditioning, InstructPixToPixConditioning, InvertMask, JoinAudioChannels, JoinImageWithAlpha, JsonExtractString, KSampler, KSamplerAdvanced, KSamplerSelect, Kandinsky5ImageToVideo, KarrasScheduler, KlingAvatarNode, KlingCameraControlI2VNode, KlingCameraControlT2VNode, KlingCameraControls, KlingDualCharacterVideoEffectNode, KlingFirstLastFrameNode, KlingImage2VideoNode, KlingImageGenerationNode, KlingImageToVideoWithAudio, KlingLipSyncAudioToVideoNode, KlingLipSyncTextToVideoNode, KlingMotionControl, KlingOmniProEditVideoNode, KlingOmniProFirstLastFrameNode, KlingOmniProImageNode, KlingOmniProImageToVideoNode, KlingOmniProTextToVideoNode, KlingOmniProVideoToVideoNode, KlingSingleImageVideoEffectNode, KlingStartEndFrameNode, KlingTextToVideoNode, KlingTextToVideoWithAudio, KlingVideoExtendNode, KlingVideoNode, KlingVirtualTryOnNode, Krea2ImageNode, Krea2StyleReferenceNode, LTXAVTextEncoderLoader, LTXVAddGuide, LTXVAudioVAEDecode, LTXVAudioVAEEncode, LTXVAudioVAELoader, LTXVConcatAVLatent, LTXVConditioning, LTXVContextWindows, LTXVCropGuides, LTXVEmptyLatentAudio, LTXVImgToVideo, LTXVImgToVideoInplace, LTXVLatentUpsampler, LTXVPreprocess, LTXVReferenceAudio, LTXVScheduler, LTXVSeparateAVLatent, LaplaceScheduler, LatentAdd, LatentApplyOperation, LatentApplyOperationCFG, LatentBatch, LatentBatchSeedBehavior, LatentBlend, LatentComposite, LatentCompositeMasked, LatentConcat, LatentCrop, LatentCut, LatentCutToBatch, LatentFlip, LatentFromBatch, LatentInterpolate, LatentMultiply, LatentOperationSharpen, LatentOperationTonemapReinhard, LatentRotate, LatentSubtract, LatentUpscale, LatentUpscaleBy, LatentUpscaleModelLoader, LazyCache, Load3D, Load3DAdvanced, LoadAudio, LoadBackgroundRemovalModel, LoadDA3Model, LoadImage, LoadImageDataSetFromFolder, LoadImageMask, LoadImageOutput, LoadImageTextDataSetFromFolder, LoadLatent, LoadMediaPipeFaceLandmarker, LoadMoGeModel, LoadTrainingDataset, LoadVideo, LoadVideoDataSetFromFolder, LoadVideoTextDataSetFromFolder, LoraLoader, LoraLoaderBypass, LoraLoaderBypassModelOnly, LoraLoaderModelOnly, LoraModelLoader, LoraSave, LossGraphNode, LotusConditioning, LtxvApiImageToVideo, LtxvApiTextToVideo, LumaConceptsNode, LumaImageEditNode2, LumaImageModifyNode, LumaImageNode, LumaImageNode2, LumaImageToVideoNode, LumaRay32ExtendVideoNode, LumaRay32ImageToVideoNode, LumaRay32KeyframeNode, LumaRay32KeyframesToVideoNode, LumaRay32TextToVideoNode, LumaRay32VideoEditNode, LumaRay32VideoReframeNode, LumaReferenceNode, LumaVideoNode, MagnificImageRelightNode, MagnificImageSkinEnhancerNode, MagnificImageStyleTransferNode, MagnificImageUpscalerCreativeNode, MagnificImageUpscalerPreciseV2Node, Mahiro, MakeTrainingDataset, ManualSigmas, MaskComposite, MaskPreview, MaskToImage, MediaPipeFaceLandmarker, MediaPipeFaceMask, MediaPipeFaceMeshVisualize, MergeImageLists, MergeSplat, MergeTextLists, MeshyAnimateModelNode, MeshyImageToModelNode, MeshyMultiImageToModelNode, MeshyRefineNode, MeshyRigModelNode, MeshyTextToModelNode, MeshyTextureNode, MinimaxHailuoVideoNode, MinimaxImageToVideoNode, MinimaxTextToVideoNode, MoGeInference, MoGePanoramaInference, MoGePointMapToMesh, MoGeRender, ModelComputeDtype, ModelMergeAdd, ModelMergeAuraflow, ModelMergeBlocks, ModelMergeCosmos14B, ModelMergeCosmos7B, ModelMergeCosmosPredict2_14B, ModelMergeCosmosPredict2_2B, ModelMergeFlux1, ModelMergeKrea2, ModelMergeLTXV, ModelMergeMochiPreview, ModelMergeQwenImage, ModelMergeSD1, ModelMergeSD2, ModelMergeSD35_Large, ModelMergeSD3_2B, ModelMergeSDXL, ModelMergeSimple, ModelMergeSubtract, ModelMergeWAN2_1, ModelNoiseScale, ModelPatchLoader, ModelSamplingAuraFlow, ModelSamplingContinuousEDM, ModelSamplingContinuousV, ModelSamplingDiscrete, ModelSamplingFlux, ModelSamplingLTXV, ModelSamplingSD3, ModelSamplingStableCascade, ModelSave, Morphology, MultiGPU_WorkUnits, NAGuidance, NormalizeImages, NormalizeVideoLatentStart, OpenAIChatConfig, OpenAIChatNode, OpenAIDalle2, OpenAIDalle3, OpenAIGPTImage1, OpenAIGPTImageNodeV2, OpenAIInputFiles, OpenAIVideoSora2, OpenRouterLLMNode, OpticalFlowLoader, OptimalStepsScheduler, Painter, PairConditioningCombine, PairConditioningSetDefaultCombine, PairConditioningSetProperties, PairConditioningSetPropertiesAndCombine, PatchModelAddDownscale, PerpNeg, PerpNegGuider, PerturbedAttentionGuidance, PhotoMakerEncode, PhotoMakerLoader, PiDConditioning, PixverseImageToVideoNode, PixverseTemplateNode, PixverseTextToVideoNode, PixverseTransitionVideoNode, PolyexponentialScheduler, PorterDuffImageComposite, Preview3D, Preview3DAdvanced, PreviewAny, PreviewAudio, PreviewGaussianSplat, PreviewImage, PreviewPointCloud, PrimitiveBoolean, PrimitiveBoundingBox, PrimitiveFloat, PrimitiveInt, PrimitiveString, PrimitiveStringMultiline, QuadrupleCLIPLoader, QuiverImageToSVGNode, QuiverTextToSVGNode, QwenImageDiffsynthControlnet, RTDETR_detect, RandomCropImages, RandomNoise, RebatchImages, RebatchLatents, RecordAudio, RecraftColorRGB, RecraftControls, RecraftCreateStyleNode, RecraftCreativeUpscaleNode, RecraftCrispUpscaleNode, RecraftImageInpaintingNode, RecraftImageToImageNode, RecraftRemoveBackgroundNode, RecraftReplaceBackgroundNode, RecraftStyleV3DigitalIllustration, RecraftStyleV3InfiniteStyleLibrary, RecraftStyleV3LogoRaster, RecraftStyleV3RealisticImage, RecraftTextToImageNode, RecraftTextToVectorNode, RecraftV4TextToImageNode, RecraftV4TextToVectorNode, RecraftVectorizeImageNode, ReferenceLatent, ReferenceTimbreAudio, RegexExtract, RegexMatch, RegexReplace, RemoveBackground, RenderSplat, RenormCFG, RepeatImageBatch, RepeatLatentBatch, ReplaceText, ReplaceVideoLatentFrames, RescaleCFG, ResizeAndPadImage, ResizeImageMaskNode, ResizeImagesByLongerEdge, ResizeImagesByShorterEdge, ResolutionBucket, ResolutionSelector, ReveImageCreateNode, ReveImageEditNode, ReveImageRemixNode, Rodin3D_Detail, Rodin3D_Gen2, Rodin3D_Gen25_Image, Rodin3D_Gen25_Text, Rodin3D_Regular, Rodin3D_Sketch, Rodin3D_Smooth, RunwayAleph2KeyframeNode, RunwayAleph2PromptImageNode, RunwayAleph2VideoToVideoNode, RunwayFirstLastFrameNode, RunwayImageToVideoNodeGen3a, RunwayImageToVideoNodeGen4, RunwayTextToImageNode, SAM3_Detect, SAM3_TrackPreview, SAM3_TrackToMask, SAM3_VideoTrack, SCAIL2ColoredMask, SDPoseDrawKeypoints, SDPoseFaceBBoxes, SDPoseKeypointExtractor, SDTurboScheduler, SD_4XUpscale_Conditioning, SUPIRApply, SV3D_Conditioning, SVD_img2vid_Conditioning, SamplerARVideo, SamplerCustom, SamplerCustomAdvanced, SamplerDPMAdaptative, SamplerDPMPP_2M_SDE, SamplerDPMPP_2S_Ancestral, SamplerDPMPP_3M_SDE, SamplerDPMPP_SDE, SamplerER_SDE, SamplerEulerAncestral, SamplerEulerAncestralCFGPP, SamplerEulerCFGpp, SamplerLCM, SamplerLCMUpscale, SamplerLMS, SamplerSASolver, SamplerSEEDS2, SamplingPercentToSigma, Save3DAdvanced, SaveAnimatedPNG, SaveAnimatedWEBP, SaveAudio, SaveAudioAdvanced, SaveAudioMP3, SaveAudioOpus, SaveGLB, SaveGaussianSplat, SaveImage, SaveImageAdvanced, SaveImageDataSetToFolder, SaveImageTextDataSetToFolder, SaveImageWebsocket, SaveLatent, SaveLoRA, SavePointCloud, SaveSVGNode, SaveText, SaveTrainingDataset, SaveVideo, SaveWEBM, ScaleROPE, SeedNode, SeedVR2Conditioning, SeedVR2PostProcessing, SeedVR2Preprocess, SeedVR2TemporalChunk, SeedVR2TemporalMerge, SelectCLIPDevice, SelectModelDevice, SelectVAEDevice, SelfAttentionGuidance, SetClipHooks, SetFirstSigma, SetHookKeyframes, SetLatentNoiseMask, SetUnionControlNetType, ShuffleDataset, ShuffleImageTextDataset, ShuffleVideoDataset, ShuffleVideoTextDataset, SkipLayerGuidanceDiT, SkipLayerGuidanceDiTSimple, SkipLayerGuidanceSD3, SolidMask, SoniloTextToMusic, SoniloVideoToMusic, SplatToFile3D, SplatToMesh, SplitAudioChannels, SplitImageToTileList, SplitImageWithAlpha, SplitSigmas, SplitSigmasDenoise, StableCascade_EmptyLatentImage, StableCascade_StageB_Conditioning, StableCascade_StageC_VAEEncode, StableCascade_SuperResolutionControlnet, StableZero123_Conditioning, StableZero123_Conditioning_Batched, StringCompare, StringConcatenate, StringContains, StringFormat, StringLength, StringReplace, StringSubstring, StringTrim, StripWhitespace, StyleModelApply, StyleModelLoader, SyncLipSyncNode, SyncTalkingImageNode, T5TokenizerOptions, TCFG, TemporalScoreRescaling, Tencent3DPartNode, Tencent3DTextureEditNode, TencentImageToModelNode, TencentModelTo3DUVNode, TencentSmartTopologyNode, TencentTextToModelNode, TextEncodeAceStepAudio, TextEncodeAceStepAudio1_5, TextEncodeBooguEdit, TextEncodeHunyuanVideo_ImageToVideo, TextEncodeJoyImageEdit, TextEncodeMageFlowEdit, TextEncodeQwenImageEdit, TextEncodeQwenImageEditPlus, TextEncodeZImageOmni, TextGenerate, TextGenerateLTX2Prompt, TextOverlay, TextToLowercase, TextToUppercase, ThresholdMask, TomePatchModel, TopazImageEnhance, TopazVideoEnhance, TopazVideoEnhanceV2, TorchCompileModel, TrainLoraNode, TransformSplat, TrimAudioDuration, TrimVideoLatent, TripleCLIPLoader, TripoConversionNode, TripoImageToModelNode, TripoImportModelNode, TripoMultiviewToModelNode, TripoP1ImageToModelNode, TripoP1MultiviewToModelNode, TripoP1TextToModelNode, TripoRefineNode, TripoRetargetNode, TripoRigNode, TripoSplatConditioning, TripoSplatPreprocessImage, TripoSplatSamplingPreview, TripoTextToModelNode, TripoTextureNode, TruncateText, UNETLoader, UNetCrossAttentionMultiply, UNetSelfAttentionMultiply, UNetTemporalAttentionMultiply, USOStyleReference, UpscaleModelLoader, VAEDecode, VAEDecodeAudio, VAEDecodeAudioTiled, VAEDecodeHunyuan3D, VAEDecodeTiled, VAEDecodeTripoSplat, VAEEncode, VAEEncodeAudio, VAEEncodeForInpaint, VAEEncodeTiled, VAELoader, VAESave, VOIDInpaintConditioning, VOIDQuadmaskPreprocess, VOIDSampler, VOIDWarpedNoise, VOIDWarpedNoiseSource, VPScheduler, Veo3FirstLastFrameNode, Veo3VideoGenerationNode, VeoVideoGenerationNode, VideoFrameSample, VideoLinearCFGGuidance, VideoRandomTemporalCrop, VideoTemporalCrop, VideoTriangleCFGGuidance, Vidu2ImageToVideoNode, Vidu2ReferenceVideoNode, Vidu2StartEndToVideoNode, Vidu2TextToVideoNode, Vidu3ImageToVideoNode, Vidu3StartEndToVideoNode, Vidu3TextToVideoNode, ViduExtendVideoNode, ViduImageToVideoNode, ViduMultiFrameVideoNode, ViduReferenceVideoNode, ViduStartEndToVideoNode, ViduTextToVideoNode, VoxelToMesh, VoxelToMeshBasic, Wan22FunControlToVideo, Wan22ImageToVideoLatent, Wan2ImageToVideoApi, Wan2ReferenceVideoApi, Wan2TextToVideoApi, Wan2VideoContinuationApi, Wan2VideoEditApi, WanAnimateToVideo, WanCameraEmbedding, WanCameraImageToVideo, WanContextWindowsManual, WanDancerEncodeAudio, WanDancerPadKeyframes, WanDancerPadKeyframesList, WanDancerVideo, WanFirstLastFrameToVideo, WanFunControlToVideo, WanFunInpaintToVideo, WanHuMoImageToVideo, WanImageToImageApi, WanImageToVideo, WanImageToVideoApi, WanInfiniteTalkToVideo, WanMoveConcatTrack, WanMoveTrackToVideo, WanMoveTracksFromCoords, WanMoveVisualizeTracks, WanPhantomSubjectToVideo, WanReferenceVideoApi, WanSCAILToVideo, WanSoundImageToVideo, WanSoundImageToVideoExtend, WanTextToImageApi, WanTextToVideoApi, WanTrackToVideo, WanUni3CControlnetApply, WanVaceToVideo, WavespeedFlashVSRNode, WavespeedImageUpscaleNode, WebcamCapture, ZImageFunControlnet, nodeDefs_default as default, unCLIPCheckpointLoader, unCLIPConditioning, wanBlockSwap };

//# sourceMappingURL=nodeDefs-6_OSqomM.js.map