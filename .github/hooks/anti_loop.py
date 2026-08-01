#!/usr/bin/env python3
"""
Universal Anti-Loop Hook for VS Code Local Agent
Detects: exact repeats, same-target, oscillation, tool-flood, no-progress
"""

import json
import sys
import os
import hashlib
import time
from collections import deque
from pathlib import Path

# ====================== CONFIG ======================
STATE_FILE = Path(os.environ.get("TMPDIR", "/tmp")) / "vscode_agent_anti_loop_state.json"
WINDOW_SIZE = 24          # скільки останніх викликів тримати (збільшено для small-steps)
EXACT_REPEAT_LIMIT = 5    # точний повтор (tool + input) — збільшено, щоб дрібні кроки не блокувались
SAME_TARGET_LIMIT = 7     # той самий tool на той самий файл — збільшено для read→edit→verify
OSCILLATION_LIMIT = 6     # A-B-A-B патерн — збільшено
TOOL_FLOOD_LIMIT = 10     # один тип tool підряд / в вікні — збільшено для small-steps підходу
READ_TOOL_FLOOD_LIMIT = 15  # виняток для read_file: дослідження кодової бази ≠ цикл
NO_PROGRESS_WINDOW = 12   # якщо за N викликів майже нічого нового — збільшено
MAX_AGE_SECONDS = 1800    # 30 хв — скидаємо старий state
RESET_ON_LOOP = True      # при циклі: скинути recent calls і дозволити продовжити (замість deny)

# Автоматичний запис циклів у error-log.md
ERROR_LOG_PATH = Path(os.environ.get("WORKSPACE_ROOT", "")) / "memories" / "errors" / "error-log.md"
LOOP_COUNT_FILE = Path(os.environ.get("TMPDIR", "/tmp")) / "vscode_agent_loop_count.json"

# ====================================================

def load_state():
    if not STATE_FILE.exists():
        return {"calls": [], "last_ts": time.time()}
    try:
        data = json.loads(STATE_FILE.read_text(encoding="utf-8"))
        if time.time() - data.get("last_ts", 0) > MAX_AGE_SECONDS:
            return {"calls": [], "last_ts": time.time()}
        return data
    except Exception:
        return {"calls": [], "last_ts": time.time()}

def save_state(state):
    state["last_ts"] = time.time()
    try:
        STATE_FILE.write_text(json.dumps(state, ensure_ascii=False), encoding="utf-8")
    except Exception:
        pass

def signature(tool_name: str, tool_input: dict) -> str:
    """Стабільний хеш виклику"""
    # Нормалізуємо input (сортуємо ключі)
    normalized = json.dumps(tool_input, sort_keys=True, ensure_ascii=False, default=str)
    raw = f"{tool_name}::{normalized}"
    return hashlib.sha256(raw.encode()).hexdigest()[:16]

def extract_target(tool_name: str, tool_input: dict) -> str | None:
    """Витягуємо «ціль» (файл/шлях/команду) для same-target детекції"""
    candidates = [
        "path", "file", "file_path", "filepath", "filename",
        "target", "uri", "command", "query", "pattern"
    ]
    for key in candidates:
        if key in tool_input and tool_input[key]:
            val = str(tool_input[key]).strip()
            if val:
                return f"{tool_name}:{val}"
    return None

def detect_loops(calls: list[dict], current: dict) -> str | None:
    """
    Повертає текст причини, якщо виявлено цикл, інакше None
    """
    if not calls:
        return None

    recent = calls[-WINDOW_SIZE:]
    sigs = [c["sig"] for c in recent]
    tools = [c["tool"] for c in recent]
    targets = [c.get("target") for c in recent]

    current_sig = current["sig"]
    current_tool = current["tool"]
    current_target = current.get("target")

    # 1. Exact repeat
    exact_count = sigs.count(current_sig) + 1
    if exact_count >= EXACT_REPEAT_LIMIT:
        return (
            f"EXACT REPEAT detected: identical tool call already happened "
            f"{exact_count-1} times in recent history.\n"
            f"Tool: {current_tool}\n"
            f"Stop repeating the same action. Summarize what you tried and change approach."
        )

    # 2. Same target (той самий файл / шлях)
    if current_target:
        same_target_count = sum(1 for t in targets if t == current_target) + 1
        if same_target_count >= SAME_TARGET_LIMIT:
            return (
                f"SAME TARGET loop: tool '{current_tool}' is being applied to the same "
                f"target too many times ({same_target_count}).\n"
                f"Target: {current_target}\n"
                f"This is not producing progress. Try a different strategy or file."
            )

    # 3. Oscillation (A-B-A-B)
    if len(sigs) >= 3:
        last_four = (sigs + [current_sig])[-4:]
        if len(last_four) == 4 and last_four[0] == last_four[2] and last_four[1] == last_four[3] and last_four[0] != last_four[1]:
            return (
                "OSCILLATION detected: you are alternating between two actions "
                "(A → B → A → B).\n"
                "This usually means the approach is stuck. Stop, summarize, and pick a new plan."
            )

    # 4. Tool flood (один тип tool домінує) — виняток для read_file (дослідження коду)
    tool_count = tools.count(current_tool) + 1
    flood_limit = READ_TOOL_FLOOD_LIMIT if current_tool == "read_file" else TOOL_FLOOD_LIMIT
    if tool_count >= flood_limit:
        return (
            f"TOOL FLOOD: '{current_tool}' has been used {tool_count} times recently.\n"
            f"You are over-using this tool without clear progress. "
            f"Switch to a different tool or stop and reassess."
        )

    # 5. No-progress (дуже багато викликів, але мало унікальних сигнатур)
    if len(recent) >= NO_PROGRESS_WINDOW:
        unique_sigs = len(set(sigs + [current_sig]))
        if unique_sigs <= max(3, NO_PROGRESS_WINDOW // 3):
            return (
                f"NO PROGRESS window: in the last {len(recent)+1} actions there are "
                f"only {unique_sigs} unique operations.\n"
                f"You are spinning. Summarize current state and change strategy."
            )

    return None

def load_loop_count():
    """Завантажує лічильник циклів"""
    try:
        if LOOP_COUNT_FILE.exists():
            return int(json.loads(LOOP_COUNT_FILE.read_text(encoding="utf-8")))
    except Exception:
        pass
    return 0

def save_loop_count(count):
    """Зберігає лічильник циклів"""
    try:
        LOOP_COUNT_FILE.write_text(str(count), encoding="utf-8")
    except Exception:
        pass

def extract_tool_info(current: dict) -> str:
    """Витягуємо інформацію про tool для логування"""
    return current.get("tool", "unknown")

def write_error_log(reason: str, tool_name: str, target: str | None):
    """Автоматично записує цикл у error-log.md"""
    try:
        if not ERROR_LOG_PATH.exists():
            # Створюємо файл, якщо не існує
            ERROR_LOG_PATH.parent.mkdir(parents=True, exist_ok=True)
            ERROR_LOG_PATH.write_text("# Журнал помилок та циклів\n\n", encoding="utf-8")
        
        loop_count = load_loop_count() + 1
        save_loop_count(loop_count)
        
        timestamp = time.strftime("%Y-%m-%d %H:%M:%S")
        
        # Формуємо запис про цикл
        entry = f"""
### 🔴 Цикл #{loop_count} — {reason.split(chr(10))[0]}
**Час:** {timestamp}
**Tool:** {tool_name}
**Ціль:** {target or 'N/A'}

**Причина:** {reason}

**Дія:** recent calls очищено, tool call дозволено (allow + reset)

---
"""
        # Додаємо на початок файлу (найновіші зверху)
        existing = ERROR_LOG_PATH.read_text(encoding="utf-8")
        ERROR_LOG_PATH.write_text(entry + existing, encoding="utf-8")
        
    except Exception as e:
        # Не ламаємо агента, якщо не вийшло записати
        pass

def main():
    try:
        raw = sys.stdin.read()
        data = json.loads(raw) if raw.strip() else {}
    except Exception:
        # Якщо не можемо прочитати — пропускаємо (не ламаємо агента)
        sys.exit(0)

    tool_name = data.get("tool_name") or data.get("tool") or "unknown"
    tool_input = data.get("tool_input") or data.get("input") or {}

    if not isinstance(tool_input, dict):
        tool_input = {"raw": str(tool_input)}

    current = {
        "tool": tool_name,
        "sig": signature(tool_name, tool_input),
        "target": extract_target(tool_name, tool_input),
        "ts": time.time()
    }

    state = load_state()
    calls = state.get("calls", [])

    reason = detect_loops(calls, current)

    # Додаємо поточний виклик у історію (навіть якщо блокуємо)
    calls.append(current)
    
    if reason and RESET_ON_LOOP:
        # Зберігаємо короткий список "що вже пробували" (без великих input)
        last_attempts = [
            {"tool": c["tool"], "target": c.get("target")}
            for c in calls[-5:]
        ]

        # Скидаємо recent calls — цикл знято, дозволяємо продовжити з іншим методом
        state["calls"] = []  # очищаємо історію циклу
        state["last_attempts"] = last_attempts  # щоб агент бачив, що вже пробував
        save_state(state)
        
        # Автоматично записуємо цикл у error-log.md
        write_error_log(reason, current["tool"], current.get("target"))
        
        # Дозволяємо tool call + повідомляємо причину скидання
        attempts_summary = ", ".join(
            f"{a['tool']}({a.get('target') or 'N/A'})" for a in last_attempts
        ) or "none"
        output = {
            "hookSpecificOutput": {
                "hookEventName": "PreToolUse",
                "permissionDecision": "allow",
                "loopResetReason": reason,
                "message": f"Loop detected and reset. Previous attempts: {attempts_summary}. Try a different approach."
            }
        }
        print(json.dumps(output, ensure_ascii=False))
    else:
        # Тримаємо тільки останні N (без скидання)
        state["calls"] = calls[-WINDOW_SIZE * 2 :]
        save_state(state)
        
        if reason:
            # Без RESET_ON_LOOP — традиційний deny
            output = {
                "hookSpecificOutput": {
                    "hookEventName": "PreToolUse",
                    "permissionDecision": "deny",
                    "permissionDecisionReason": reason
                }
            }
            print(json.dumps(output, ensure_ascii=False))
        else:
            # Дозволяємо — нічого не виводимо
            sys.exit(0)

if __name__ == "__main__":
    main()