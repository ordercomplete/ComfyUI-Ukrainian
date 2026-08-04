#!/usr/bin/env python3
import json

with open('custom_nodes/tts_audio_suite/locales/uk/nodeDefs.json', 'r', encoding='utf-8') as f:
    uk_data = json.load(f)

with open('custom_nodes/tts_audio_suite/locales/en/nodeDefs.json', 'r', encoding='utf-8') as f:
    en_data = json.load(f)

print('=== Ukrainian Display Names ===')
for i, (key, value) in enumerate(list(uk_data.items())[:10]):
    print(str(i+1) + '. ' + value["display_name"])

print()
print('=== English Display Names ===')  
for i, (key, value) in enumerate(list(en_data.items())[:10]):
    print(str(i+1) + '. ' + value["display_name"])

print()
print(f'Total nodes in UK: {len(uk_data)}')
print(f'Total nodes in EN: {len(en_data)}')

# Check a few specific ones
print()
print('=== Sample Node (ChatterBox) ===')
if 'ChatterBoxEngineNode' in uk_data:
    print(f"UK Inputs: {len(uk_data['ChatterBoxEngineNode']['inputs'])} inputs")
    print(f"EN Inputs: {len(en_data['ChatterBoxEngineNode']['inputs'])} inputs")
