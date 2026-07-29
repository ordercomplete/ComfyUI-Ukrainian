@echo off
REM ComfyUI запуск з новою версією UI (без legacy)
REM GPU 1 (з монітором) використовується як основний, GPU 2 - другий, GPU 0 - третій
REM Фізичні GPU: 1->cuda:0, 2->cuda:1, 0->cuda:2
REM
REM --disable-api-nodes: Вимикає API-ноди (Flux, Gemini, Kling тощо) та додає
REM                      Content-Security-Policy заголовки, що блокують зовнішні
REM                      запити з браузера. Manager продовжує працювати.
REM
REM --enable-manager-legacy-ui: Використовує стару версію Manager UI, яка має
REM                              менш суворі вимоги безпеки для кнопок Fix.

set CUDA_VISIBLE_DEVICES=1,2,0
"D:\GEN\ComfyUI\python_embeded\python.exe" "D:\GEN\ComfyUI\ComfyUI\main.py" --enable-manager --enable-manager-legacy-ui --disable-api-nodes

pause

REM ============================================================
REM ІНСТРУКЦІЯ:
REM 
REM ПРОБЛЕМА: Кнопка оновлення ComfyUI не працює через помилку:
REM AttributeError: 'NoneType' object has no attribute 'content_type'
REM
REM ПРИЧИНА: У файлі comfyui_manager/legacy/manager_server.py рядок 787
REM мав код: await update_comfyui(None)
REM але функція update_comfyui очікує request: web.Request
REM
REM РІШЕННЯ: Патч вже застосовано до файлу:
REM D:\GEN\ComfyUI\python_embeded\Lib\site-packages\comfyui_manager\legacy\manager_server.py
REM
REM Резервна копія оригіналу:
REM D:\GEN\ComfyUI\ComfyUI\manager_server.py.backup
REM
REM Щоб відновити оригінал, виконайте:
REM copy "D:\GEN\ComfyUI\ComfyUI\manager_server.py.backup" "D:\GEN\ComfyUI\python_embeded\Lib\site-packages\comfyui_manager\legacy\manager_server.py"
REM ============================================================