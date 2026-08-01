"""ComfyUI Frontend Package with Ukrainian localization."""

import importlib.resources

__version__ = "1.44.19"


def get_frontend_path() -> str:
    """Return the path to the frontend static files."""
    return str(importlib.resources.files(__name__) / "static")
