"""
ComfyUI Manager Ukrainian Locale Pack
Пакет перекладу Manager V4.2.1 українською мовою
Не змінює основний код Manager - використовує перехоплювач
"""

WEB_DIRECTORY = "web"

NODE_CLASS_MAPPINGS = {
    "ComfyUIManagerLocaleLoader": {
        "mappings": {},
        "name": "ComfyUI Manager Locale Loader (hidden)"
    }
}
NODE_DISPLAY_NAME_MAPPINGS = {}

__all__ = ['NODE_CLASS_MAPPINGS', 'NODE_DISPLAY_NAME_MAPPINGS']


def _setup():
    """Реєструє прихований вузол для завантаження JS"""
    class ComfyUIManagerLocaleLoader:
        """Hidden node to trigger JS loading for ComfyUI Manager Ukrainian locale"""
        @classmethod
        def IS_CHANGED(cls, **kwargs):
            return True
        
        @classmethod
        def INPUT_TYPES(cls):
            return {"required": {}}
    
    # Замінюємо mappings
    NODE_CLASS_MAPPINGS["ComfyUIManagerLocaleLoader"] = ComfyUIManagerLocaleLoader
    NODE_DISPLAY_NAME_MAPPINGS["ComfyUIManagerLocaleLoader"] = "Locale Loader (hidden)"


_setup()
del _setup
