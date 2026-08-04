#!/usr/bin/env python3
import json

with open('custom_nodes/tts_audio_suite/locales/en/nodeDefs.json', 'r', encoding='utf-8') as f:
    en_data = json.load(f)

with open('custom_nodes/tts_audio_suite/locales/uk/nodeDefs.json', 'r', encoding='utf-8') as f:
    uk_data = json.load(f)

print('English: {} nodes'.format(len(en_data)))
print('Ukrainian: {} nodes'.format(len(uk_data)))

# Check if they have the same keys
en_keys = set(en_data.keys())
uk_keys = set(uk_data.keys())

if en_keys == uk_keys:
    print('Both files have identical node keys')
else:
    print('Keys differ!')
    
# Show display names (use repr to avoid emoji issues)
for name in sorted(en_keys)[:5]:
    node = en_data[name]
    print('EN: {}'.format(repr(node['display_name'][:40])))
    
for name in sorted(uk_keys)[:5]:
    node = uk_data[name]
    print('UK: {}'.format(repr(node['display_name'][:40])))
