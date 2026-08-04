#!/usr/bin/env python3
import re

# Read ChatterBox engine node to understand the pattern
with open('custom_nodes/tts_audio_suite/nodes/engines/chatterbox_engine_node.py', 'r') as f:
    content = f.read()

# Find INPUT_TYPES method
pattern = r'@classmethod\s+def INPUT_TYPES\(cls\):'
match = re.search(pattern, content)

if match:
    # Get the content from this point
    start_pos = match.start()
    
    # Find the return statement and its closing brace
    return_pattern = r'return\s*\{([\s\S]*?)^\s*\}'
    match2 = re.search(return_pattern, content[start_pos:], re.MULTILINE)
    
    if match2:
        print("Found INPUT_TYPES return block")
        print("=" * 60)
        
        # Now find individual input definitions
        input_def_pattern = r'"([^"]+)"\s*:\s*\(([^)]+)\)'
        for m in re.finditer(input_def_pattern, match2.group(1)):
            print(f"Input: {m.group(1)}")
            print(f"  Type: {m.group(2)[:50]}...")
    else:
        print("Could not find return statement")
