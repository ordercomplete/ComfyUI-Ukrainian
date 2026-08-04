#!/usr/bin/env python3
import json
import sys

# Set UTF-8 encoding for output
sys.stdout.reconfigure(encoding='utf-8')

data = json.load(open('custom_nodes/tts_audio_suite/locales/en/nodeDefs.json', 'r', encoding='utf-8'))
node = data.get('ChatterboxEngineNode')
if node:
    print("Display:", repr(node['display_name'][:50]))
    print("Inputs count:", len(node['inputs']))
    print("Outputs count:", len(node['outputs']))
else:
    print("Node not found")
