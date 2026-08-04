#!/usr/bin/env python3
"""
Extract node definitions from Python node files for TTS Audio Suite.
Creates comprehensive nodeDefs.json files for Ukrainian and English locales.
"""

import os
import re
import json
from pathlib import Path

# Define paths
NODES_DIR = r"D:\ComfyUI-Ukrainian\custom_nodes\tts_audio_suite\nodes"
LOCALES_DIR = r"D:\ComfyUI-Ukrainian\custom_nodes\tts_audio_suite\locales"

def extract_input_types(content):
    """Extract INPUT_TYPES() method content from node file."""
    # Find the return dictionary - look for pattern: return {\n"required": {
    match = re.search(r'return\s*\{([\s\S]*)^\s*\}\s*$', content, re.MULTILINE)
    
    if not match:
        return {}
    
    input_str = match.group(1)
    inputs = {}
    
    # Parse required and optional sections
    inputs.update(parse_section(input_str, 'required'))
    inputs.update(parse_section(input_str, 'optional'))
    
    return inputs

def parse_section(section_content, section_type):
    """Parse a single input section (required/optional)."""
    inputs = {}
    
    # Find the section with proper regex that handles nested dicts
    # Match: "section_name": { ... }
    pattern = rf'["\']{section_type}["\']\s*:\s*\{{(.+?)^\s*\}}'
    match = re.search(pattern, section_content, re.MULTILINE | re.DOTALL)
    
    if not match:
        return inputs
    
    section_body = match.group(1)
    
    # Find all input definitions - handle both simple and complex cases
    # Pattern: "input_name": (type_or_list, {options}) or just ("type", {"tooltip": ...})
    # Handle dynamic lists like (available_languages, {...})
    input_pattern = r'["\']([^"\']+)["\']\s*:\s*\(([^,)]+)(?:,\s*\{([\s\S]*?)\})?\)'
    
    for match in re.finditer(input_pattern, section_body):
        input_name = match.group(1)
        type_or_list = match.group(2).strip()
        options_str = match.group(3) if len(match.groups()) > 2 else ""
        
        tooltip = extract_tooltip(options_str)
        
        inputs[input_name] = {
            "name": convert_input_name(input_name),
            "tooltip": tooltip
        }
    
    return inputs

def extract_tooltip(options_str):
    """Extract tooltip from input options."""
    if not options_str:
        return ""
    
    # Find tooltip field - handle both single and double quotes, with potential escapes
    tooltip_match = re.search(r'"tooltip"\s*:\s*"((?:[^"\\]|\\.)*)"', options_str)
    if tooltip_match:
        text = tooltip_match.group(1).replace('\\"', '"').replace('\\\\', '\\')
        return clean_text(text)
    
    # Try single quotes
    tooltip_match = re.search(r"'tooltip'\s*:\s*'((?:[^'\\\\]|\\\\.)*)'", options_str)
    if tooltip_match:
        text = tooltip_match.group(1).replace("\\'", "'").replace('\\\\', '\\')
        return clean_text(text)
    
    return ""

def extract_return_types(content):
    """Extract RETURN_TYPES and RETURN_NAMES from node file."""
    # Find RETURN_TYPES
    types_match = re.search(r'RETURN_TYPES\s*=\s*\(([^)]+)\)', content)
    names_match = re.search(r'RETURN_NAMES\s*=\s*\(([^)]+)\)', content)
    
    if not types_match:
        return {}
    
    types = [t.strip().strip('"\'') for t in types_match.group(1).split(',')]
    
    if names_match:
        names = [n.strip().strip('"\'') for n in names_match.group(1).split(',')]
    else:
        # Generate default names
        names = [f"output_{i}" for i in range(len(types))]
    
    result = {}
    for i, (t, n) in enumerate(zip(types, names)):
        result[str(i)] = {"name": clean_text(n)}
    
    return result

def extract_display_name(content):
    """Extract display name from NAME() method or class."""
    # Try to find NAME() classmethod with double quotes
    name_match = re.search(r'@classmethod\s+def NAME\(cls\):\s*\n\s*return\s*"([^"]+)"', content)
    if name_match:
        return clean_text(name_match.group(1))
    
    # Try single quotes
    name_match = re.search(r'@classmethod\s+def NAME\(cls\):\s*\n\s*return\s*\'([^\']+)\'', content)
    if name_match:
        return clean_text(name_match.group(1))
    
    # Fall back to class name with underscores converted to spaces
    class_match = re.search(r'class\s+(\w+)\(', content)
    if class_match:
        return class_match.group(1).replace('_', ' ')
    
    return ""

def convert_input_name(input_name):
    """Convert snake_case input names to Title Case."""
    words = input_name.replace('_', ' ').split()
    return ' '.join(word.capitalize() for word in words)

def clean_text(text):
    """Clean up text by removing extra whitespace and newlines."""
    if not text:
        return ""
    
    # Replace multiple spaces with single space
    text = re.sub(r'\s+', ' ', text)
    # Remove leading/trailing whitespace
    text = text.strip()
    return text

def process_node_file(file_path, class_name):
    """Process a single node file to extract definitions."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        inputs = extract_input_types(content)
        outputs = extract_return_types(content)
        display_name = extract_display_name(content)
        
        # If no display name found in file, use class name
        if not display_name or "class" in display_name.lower():
            display_name = class_name.replace('_', ' ')
        
        return {
            "display_name": display_name,
            "inputs": inputs,
            "outputs": outputs
        }
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        import traceback
        traceback.print_exc()
        return None

def get_node_files():
    """Get list of node files in priority order."""
    # Priority order based on nodes.py registration
    priority_order = [
        # Engine nodes (highest priority)
        ('engines', 'chatterbox_engine_node.py'),
        ('engines', 'f5tts_engine_node.py'),
        ('engines', 'higgs_audio_engine_node.py'),
        ('engines', 'step_audio_editx_engine_node.py'),
        ('engines', 'vibevoice_engine_node.py'),
        ('engines', 'qwen3_tts_engine_node.py'),
        ('engines', 'moss_tts_engine_node.py'),
        ('engines', 'granite_asr_engine_node.py'),
        ('engines', 'echo_tts_engine_node.py'),
        ('engines', 'chatterbox_official_23lang_engine_node.py'),
        ('engines', 'index_tts_engine_node.py'),
        ('engines', 'cosyvoice_engine_node.py'),
        ('engines', 'rvc_engine_node.py'),
        ('engines', 'index_tts_emotion_options_node.py'),
        
        # Unified nodes
        ('unified', 'tts_text_node.py'),
        ('unified', 'tts_srt_node.py'),
        ('unified', 'voice_changer_node.py'),
        ('unified', 'asr_transcribe_node.py'),
        
        # Shared nodes
        ('shared', 'character_voices_node.py'),
        ('shared', 'refresh_voice_cache_node.py'),
        
        # Audio nodes
        ('audio', 'recorder_node.py'),
        ('audio', 'analyzer_node.py'),
        ('audio', 'analyzer_options_node.py'),
        ('audio', 'vocal_removal_node.py'),
        ('audio', 'merge_audio_node.py'),
        ('audio', 'voice_fixer_node.py'),
        ('audio', 'rvc_pitch_options_node.py'),
    ]
    
    return priority_order

def create_ukrainian_translation(english_name):
    """Create Ukrainian translation for display names."""
    translations = {
        "ChatterBox Engine": "Двигун ChatterBox",
        "F5 TTS Engine": "Двигун F5 TTS",
        "Higgs Audio 2 Engine": "Двигун Higgs Audio 2",
        "Step Audio EditX Engine": "Двигун Step Audio EditX",
        "VibeVoice Engine": "Двигун VibeVoice",
        "Qwen3-TTS Engine": "Двигун Qwen3-TTS",
        "MOSS-TTS Engine": "Двигун MOSS-TTS",
        "Granite ASR Engine": "Двигун Granite ASR",
        "Echo-TTS Engine": "Двигун Echo-TTS",
        "ChatterBox Official 23-Lang Engine": "Двигун ChatterBox Офіційний 23-мовний",
        "IndexTTS-2 Engine": "Двигун IndexTTS-2",
        "CosyVoice3 Engine": "Двигун CosyVoice3",
        "RVC Engine": "Двигун RVC",
        
        "TTS Text": "Текст TTS",
        "TTS SRT": "SRT TTS",
        "Voice Changer": "Зміна голосу",
        "ASR Transcribe": "Транскрипція ASR",
        
        "Character Voices": "Голоси персонажів",
        "Refresh Voice Cache": "Оновити кеш голосів",
        
        "Voice Capture": "Захоплення голосу",
        "Audio Wave Analyzer": "Аналізатор аудіохвиль",
        "Audio Analyzer Options": "Параметри аналізатора аудіо",
        
        "ChatterBox Voice Capture (diogod)": "Захоплення голосу ChatterBox (diogod)",
    }
    
    return translations.get(english_name, english_name)

def main():
    """Main function to process all nodes and create JSON files."""
    # Get node files
    node_files = get_node_files()
    
    # Store all node definitions
    node_defs_uk = {}
    node_defs_en = {}
    
    processed_count = 0
    total_nodes = 0
    
    print("Processing node files...")
    print("-" * 60)
    
    for category, filename in node_files:
        file_path = os.path.join(NODES_DIR, category, filename)
        
        if not os.path.exists(file_path):
            print(f"[FAIL] File not found: {file_path}")
            continue
        
        # Extract class name from filename
        class_name = filename.replace('.py', '').replace('_', ' ').title().replace(' ', '')
        
        # Process the node file
        node_def = process_node_file(file_path, class_name)
        
        if node_def:
            total_nodes += 1
            
            # Create Ukrainian version
            node_defs_uk[class_name] = {
                "display_name": create_ukrainian_translation(node_def["display_name"]),
                "inputs": node_def["inputs"],
                "outputs": node_def["outputs"]
            }
            
            # Create English version
            node_defs_en[class_name] = node_def
            
            processed_count += 1
            print(f"[OK] {class_name} - Inputs: {len(node_def['inputs'])}, Outputs: {len(node_def['outputs'])}")
        else:
            print(f"[WARN] Failed to process: {file_path}")
    
    # Write JSON files
    uk_file = os.path.join(LOCALES_DIR, 'uk', 'nodeDefs.json')
    en_file = os.path.join(LOCALES_DIR, 'en', 'nodeDefs.json')
    
    with open(uk_file, 'w', encoding='utf-8') as f:
        json.dump(node_defs_uk, f, ensure_ascii=False, indent=2)
    
    with open(en_file, 'w', encoding='utf-8') as f:
        json.dump(node_defs_en, f, ensure_ascii=False, indent=2)
    
    print("-" * 60)
    print(f"\n[OK] Successfully processed {processed_count}/{total_nodes} node files")
    print(f"[OK] Created: {uk_file}")
    print(f"[OK] Created: {en_file}")

if __name__ == "__main__":
    main()
