"""
Запустити один раз з папки ComfyUI_windows_portable:
.\python_embeded\python.exe disable_cnr_patch.py
"""
import os
import shutil
import glob

def find_cnr_utils():
    """Шукає cnr_utils.py у всіх можливих місцях"""
    search_paths = [
        r"python_embeded\Lib\site-packages\comfyui_manager\common\cnr_utils.py",
        r"ComfyUI\custom_nodes\ComfyUI-Manager\comfyui_manager\common\cnr_utils.py",
    ]
    for p in search_paths:
        full = os.path.join(os.getcwd(), p)
        if os.path.exists(full):
            return full
    # Широкий пошук
    for root, dirs, files in os.walk(os.getcwd()):
        for f in files:
            if f == "cnr_utils.py":
                return os.path.join(root, f)
    return None

def find_manager_core():
    """Шукає manager_core.py"""
    for root, dirs, files in os.walk(os.getcwd()):
        for f in files:
            if f == "manager_core.py" and "comfyui_manager" in root:
                return os.path.join(root, f)
    return None

# --- Патч 1: cnr_utils.py ---
cnr_path = find_cnr_utils()
if cnr_path:
    print(f"[FOUND] cnr_utils.py: {cnr_path}")
    with open(cnr_path, "r", encoding="utf-8") as f:
        content = f.read()

    if "# [CNR_PATCHED_V2]" in content:
        print("[OK] cnr_utils.py вже пропатчено (v2)")
    else:
        # Відновлюємо з backup якщо є попередній патч
        backup = cnr_path + ".backup"
        if os.path.exists(backup):
            shutil.copy2(backup, cnr_path)
            with open(cnr_path, "r", encoding="utf-8") as f:
                content = f.read()
            print("[RESTORE] Відновлено з backup")
        else:
            shutil.copy2(cnr_path, backup)
            print(f"[BACKUP] Збережено: {backup}")

        # Знаходимо і замінюємо fetch_all
        lines = content.split('\n')
        new_lines = []
        i = 0
        patched = False
        while i < len(lines):
            line = lines[i]
            if 'async def fetch_all(' in line:
                # Пропускаємо все тіло функції
                new_lines.append('# [CNR_PATCHED_V2]')
                new_lines.append('async def fetch_all(session, urls):')
                new_lines.append('    """Patched: returns empty dicts to prevent aiohttp crashes."""')
                new_lines.append('    return [{} for _ in urls]')
                new_lines.append('')
                i += 1
                # Пропускаємо старе тіло (з відступом)
                while i < len(lines):
                    next_line = lines[i]
                    if next_line and not next_line.startswith(' ') and not next_line.startswith('\t') and not next_line.startswith('#'):
                        break
                    i += 1
                patched = True
                continue
            new_lines.append(line)
            i += 1

        if patched:
            with open(cnr_path, "w", encoding="utf-8") as f:
                f.write('\n'.join(new_lines))
            print("[PATCHED] cnr_utils.py успішно пропатчено")
        else:
            print("[WARN] fetch_all не знайдено в cnr_utils.py — показую вміст:")
            # Показуємо функції у файлі
            for j, l in enumerate(lines):
                if 'def ' in l:
                    print(f"  {j}: {l}")
else:
    print("[ERROR] cnr_utils.py не знайдено!")

# --- Патч 2: manager_core.py - патчимо reload щоб не падав на None ---
core_path = find_manager_core()
if core_path:
    print(f"\n[FOUND] manager_core.py: {core_path}")
    with open(core_path, "r", encoding="utf-8") as f:
        content = f.read()

    if "# [CORE_PATCHED]" in content:
        print("[OK] manager_core.py вже пропатчено")
    else:
        backup = core_path + ".backup"
        if not os.path.exists(backup):
            shutil.copy2(core_path, backup)
            print(f"[BACKUP] Збережено: {backup}")

        # Патчимо рядок "for x in cnrs:" щоб не падав на None
        new_content = content.replace(
            'for x in cnrs:',
            'for x in (cnrs or []):  # [CORE_PATCHED]'
        )
        if new_content != content:
            with open(core_path, "w", encoding="utf-8") as f:
                f.write(new_content)
            print("[PATCHED] manager_core.py успішно пропатчено")
        else:
            print("[WARN] 'for x in cnrs:' не знайдено в manager_core.py")

print("\n[DONE] Запускайте run_gpu0.bat")
