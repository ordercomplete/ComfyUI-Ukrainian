// Manager V4.2.1 Ukrainian Locale Loader
// Підключає файл перекладу без змін у основному коді Manager
// Завантажується автоматично після ComfyUI-Manager

(function() {
  'use strict';

  // === ДІАГНОСТИКА ===
  console.log('[Manager Locale UA] === LOADER START ===');
  console.log('[Manager Locale UA] document.readyState:', document.readyState);
  console.log('[Manager Locale UA] window.comfyApp:', !!window.comfyApp);
  console.log('[Manager Locale UA] window.app:', !!window.app);
  console.log('[Manager Locale UA] window.location.origin:', window.location.origin);
  console.log('[Manager Locale UA] URL:', window.location.href);

  function loadScript(url) {
    console.log('[Manager Locale UA] Завантаження скрипту:', url);
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.async = false;
      script.onload = () => {
        console.log('[Manager Locale UA] ✅ Скрипт завантажено успішно:', url);
        resolve();
      };
      script.onerror = (e) => {
        console.error('[Manager Locale UA] ❌ Помилка завантаження скрипту:', url);
        console.error('[Manager Locale UA] Помилка:', e);
        reject(e);
      };
      document.head.appendChild(script);
    });
  }

  async function init() {
    console.log('[Manager Locale UA] === init() START ===');
    
    // Чекаємо поки Manager завантажиться
    let attempts = 0;
    const maxAttempts = 100; // 10 секунд

    while (attempts < maxAttempts) {
      const dialog = document.getElementById('cm-manager-dialog');
      const hasApp = window.comfyApp || window.app;
      
      console.log(`[Manager Locale UA] Перевірка #${attempts + 1}: dialog=${!!dialog}, app=${hasApp}`);
      
      if (dialog || hasApp) {
        console.log('[Manager Locale UA] ✅ Manager знайдено!');
        break;
      }
      await new Promise(r => setTimeout(r, 100));
      attempts++;
    }

    if (attempts >= maxAttempts) {
      console.error('[Manager Locale UA] ❌ Таймаут: Manager не знайдено за 10 сек');
      return;
    }

    // Завантажуємо файл перекладу через API
    try {
      const scriptUrl = '/comfyui-manager-locale/uk.js';
      console.log('[Manager Locale UA] Спроба підключення через API:', scriptUrl);
      await loadScript(scriptUrl);
      console.log('[Manager Locale UA] ✅ Переклад Manager V4.2.1 підключено');
    } catch (e) {
      console.error('[Manager Locale UA] ❌ Помилка підключення перекладу:', e);
      console.error('[Manager Locale UA] Спробуйте підключити вручну: <script src="/comfyui-manager-locale/uk.js"></script>');
    }
  }

  // Запускаємо після завантаження сторінки
  if (document.readyState === 'loading') {
    console.log('[Manager Locale UA] Чекаємо DOMContentLoaded...');
    document.addEventListener('DOMContentLoaded', init);
  } else {
    console.log('[Manager Locale UA] DOM вже завантажено, запускаємо init()');
    init();
  }
})();
