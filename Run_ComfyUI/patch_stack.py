"""
Патч для збільшення розміру стека Python на Windows.
Розмістити у папці ComfyUI\ (поряд з main.py).
Запускати через bat замість main.py.
"""
import sys
import threading

# Збільшуємо розмір стека до 64MB (замість ~1MB за замовчуванням)
threading.stack_size(64 * 1024 * 1024)

def main():
    # Завантажуємо оригінальний main.py ComfyUI в новому потоці з великим стеком
    import runpy
    runpy.run_path("ComfyUI/main.py", run_name="__main__")

# Запускаємо в окремому потоці з збільшеним стеком
t = threading.Thread(target=main)
t.start()
t.join()
