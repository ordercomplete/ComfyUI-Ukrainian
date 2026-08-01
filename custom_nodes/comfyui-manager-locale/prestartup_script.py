"""
ComfyUI Manager Ukrainian Locale - Prestartup Script
1. Реєструє extension в EXTENSION_WEB_DIRS
2. Застосовує патч до index.html (ін'єкція скрипта перекладу)
3. Реєструє API для отримання uk.js
"""

import os

# ============================================================================
# КРОК 1: Реєстрація extension
# ============================================================================
try:
    import nodes
    locale_dir = os.path.join(os.path.dirname(__file__), "web")
    nodes.EXTENSION_WEB_DIRS["comfyui-manager-locale"] = locale_dir
    print("[Manager Locale UA] ✅ Extension зареєстровано в EXTENSION_WEB_DIRS")
except Exception as e:
    print(f"[Manager Locale UA] ❌ Помилка реєстрації: {e}")

# ============================================================================
# КРОК 2: Застосування патчу до index.html
# ============================================================================
def apply_html_patch():
    """Додає <script> для перекладу в index.html ComfyUI"""
    index_html = os.path.join(
        os.path.dirname(os.path.dirname(__file__)),
        "comfyui_frontend_package",
        "static",
        "index.html"
    )
    
    if not os.path.exists(index_html):
        print(f"[Manager Locale UA] ⚠️ index.html не знайдено: {index_html}")
        return
    
    with open(index_html, "r", encoding="utf-8") as f:
        content = f.read()
    
    if "/comfyui-manager-locale/uk.js" in content:
        print("[Manager Locale UA] ✅ Патч вже застосований")
        return
    
    script_tag = '<script src="/comfyui-manager-locale/uk.js"></script>'
    patched = content.replace("</head>", script_tag + "\n</head>")
    
    if patched == content:
        print("[Manager Locale UA] ⚠️ </head> не знайдено в index.html")
        return
    
    with open(index_html, "w", encoding="utf-8") as f:
        f.write(patched)
    
    print("[Manager Locale UA] ✅ Патч застосовано до index.html")

apply_html_patch()

# ============================================================================
# КРОК 3: Реєстрація API для uk.js
# ============================================================================
SCRIPT_PATH = os.path.join(os.path.dirname(__file__), "web", "manager-locale-loader.js")
with open(SCRIPT_PATH, "r", encoding="utf-8") as f:
    SCRIPT_CONTENT = f.read()

def inject_locale_script():
    """Реєструє API для отримання uk.js"""
    try:
        from fastapi import Response
        from fastapi.responses import PlainTextResponse
        from server import PromptServer
        
        @PromptServer.instance.routes.get("/comfyui-manager-locale/uk.js")
        async def get_locale_script():
            return PlainTextResponse(SCRIPT_CONTENT, media_type="application/javascript")
        
        print("[Manager Locale UA] ✅ API /comfyui-manager-locale/uk.js підключено")
    except Exception as e:
        print(f"[Manager Locale UA] ❌ Помилка API: {e}")

inject_locale_script()
