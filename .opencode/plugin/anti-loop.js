// .opencode/plugin/anti-loop.js

import { spawn } from "node:child_process"

export default async function AntiLoop() {
  return {
    "tool.execute.after": async () => {
      try {
        await new Promise((resolve) => {
          const child = spawn(
            "python",
            ["D:/ComfyUI-Ukrainian/.github/hooks/anti_loop.py"],
            {
              cwd: "D:/ComfyUI-Ukrainian",
              stdio: "ignore", // не засмічуємо чат
              windowsHide: true,
            }
          )

          child.on("close", () => resolve())
          child.on("error", () => resolve()) // не падаємо, якщо скрипт недоступний
        })
      } catch {
        // ігноруємо помилки, щоб не ламати агента
      }
    },
  }
}