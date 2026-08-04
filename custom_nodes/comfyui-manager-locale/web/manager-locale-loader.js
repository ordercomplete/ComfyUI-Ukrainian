// Manager V4.2.1 Ukrainian Locale Loader
// Простий підключувач — додає <script> тег для manager-locale-uk.js
// Статичний routing через EXTENSION_WEB_DIRS працює напряму

(function() {
  'use strict';

  console.log('[Manager Locale UA] === LOADER START ===');

  // Додаємо <script> тег напряму — static routing через /extensions/ працює
  var script = document.createElement('script');
  script.src = '/extensions/comfyui-manager-locale/manager-locale-uk.js';
  script.type = 'text/javascript';
  script.charset = 'utf-8';
  
  script.onload = function() {
    console.log('[Manager Locale UA] ✅ manager-locale-uk.js завантажено');
  };
  script.onerror = function(e) {
    console.error('[Manager Locale UA] ❌ Помилка завантаження:', e);
  };

  document.head.appendChild(script);
})();
