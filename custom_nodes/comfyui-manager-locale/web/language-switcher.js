// language-switcher.js – динамічно підключає перекладний скрипт за заданою мовою
// Працює разом з manager-locale-uk.js, manager-locale-en.js тощо

(function () {
  'use strict';

  // Отримуємо мову з window.currentLanguage (задано в language-switcher.js після завантаження)
  const lang = (window.currentLanguage || 'uk');

  // Формируємо шлях до потрібного файлу перекладу
  // Файли називаються manager-locale-{lang}.js (напр. manager-locale-uk.js)
  const scriptSrc = `/extensions/comfyui-manager-locale/manager-locale-${lang}.js`;

  // Створюємо <script> тег
  const script = document.createElement('script');
  script.src = scriptSrc;
  script.type = 'text/javascript';
  script.charset = 'utf-8';

  script.onload = function () {
    console.log('[Manager Locale UA] ✅ Перекладний скрипт ' + scriptSrc + ' завантажено');
  };

  script.onerror = function (e) {
    console.error('[Manager Locale UA] ❌ Помилка завантаження скрипту ' + scriptSrc + ':', e);
  };

  // Додаємо скрипт у <head>
  document.head.appendChild(script);
})();