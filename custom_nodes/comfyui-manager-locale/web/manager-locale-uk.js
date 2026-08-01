// Manager V4.2.1 Ukrainian Localization Interceptor
// Перекладає діалог Manager без змін у основному коді
// Використовує MutationObserver для перехоплення рендеру

(function() {
  'use strict';

  // ==========================================
  // Словник перекладів Manager V4.2.1
  // ==========================================
  const managerTranslations = {
    // === Заголовок діалогу ===
    'Close': 'Закрити',

    // === Menu Column 1 - Налаштування ===

    // DB (Database)
    'Channel (1day cache)': 'Канал (кеш 1 день)',
    'Local': 'Локально',
    'Channel (remote)': 'Канал (віддалено)',

    // Channel
    'default': 'типовий',
    'recent': 'останні',
    'legacy': 'застарілий',
    'forked': 'форк',
    'dev': 'розробка',
    'tutorial': 'навчання',

    // Share
    'Share': 'Поділитися',
    'None': 'Не обрано',
    'OpenArt AI': 'OpenArt AI',
    'YouML': 'YouML',
    'Matrix Server': 'Matrix Server',
    'ComfyWorkflows': 'ComfyWorkflows',
    'Copus': 'Copus',
    'All': 'Усі',

    // Update
    'Update': 'Оновлення',
    'ComfyUI Stable Version': 'Стабільна версія ComfyUI',
    'ComfyUI Nightly Version': 'Нічна версія ComfyUI',

    // EXPERIMENTAL
    'EXPERIMENTAL': 'ЕКСПЕРИМЕНТАЛЬНЕ',
    'Snapshot Manager': 'Менеджер знімків',
    'Install PIP packages': 'Встановити PIP пакунки',

    // === Menu Column 2 - Основні кнопки ===
    'Custom Nodes Manager': 'Менеджер кастомних нод',
    'Install Missing Custom Nodes': 'Встановити відсутні кастомні ноди',
    'Custom Nodes In Workflow': 'Кастомні ноди у воркфлоу',
    'Model Manager': 'Менеджер моделей',
    'Install via Git URL': 'Встановити через Git URL',
    'Update All': 'Оновити все',
    'Update ComfyUI': 'Оновити ComfyUI',
    'Switch ComfyUI': 'Перемкнути ComfyUI',
    'Restart': 'Перезапустити',

    // === Menu Column 3 - Інформація ===
    'Community Manual': 'Спільнота — Посібник',
    'Workflow Gallery': 'Галерея воркфлоу',
    'none selected': 'не обрано',
    'Nodes Info': 'Інформація про ноди',

    // === Notice Board ===
    'Keywords: security': 'Ключові слова: безпека',
    'Issue News:': 'Новини проблем:',
    'Features/Updates News:': 'Новини функцій/оновлень:',
    'Manager: V4.2.1': 'Менеджер: V4.2.1',

    // === Security News (litellm) ===
    '[security] Compromised litellm PyPI packages (v1.82.7, v1.82.8) have been added to ComfyUI-Manager\'s security scanner blacklist. These packages were part of a supply chain attack that harvests credentials and exfiltrates them to an attacker-controlled server. If you have litellm installed, ComfyUI will block startup and display remediation steps. Please update ComfyUI-Manager to the latest version.':
      '[безпека] Зламані пакунки litellm PyPI (v1.82.7, v1.82.8) додано до чорного списку сканера безпеки ComfyUI-Manager. Ці пакунки були частиною атаки на ланцюжок постачання, яка збирає облікові дані та передає їх на сервер атакуючого. Якщо у вас встановлено litellm, ComfyUI заблокує запуск та відобразить кроки виправлення. Будь ласка, оновіть ComfyUI-Manager до останньої версії.',

    // === Footer ===
    'ComfyUI v0.18.2 is released': 'Випущено ComfyUI v0.18.2',
    'ComfyUI:': 'ComfyUI:',
  };

  // ==========================================
  // Tooltip переклади
  // ==========================================
  const tooltipTranslations = {
    'Configure where to retrieve node/model information. If set to \'local\', the channel is ignored, and if set to \'channel (remote),\' it fetches the latest information each time the list is opened.':
      'Налаштуйте, де отримувати інформацію про ноди/моделі. Якщо встановлено "Локально", канал ігнорується. Якщо "Канал (віддалено)" — отримує останню інформацію кожного відкриття списку.',

    'Configure the channel for retrieving data from the Custom Node list (including missing nodes) or the Model list.':
      'Налаштуйте канал для отримання даних зі списку кастомних нод (включно з відсутніми) або списку моделей.',

    'Hide the share button in the main menu or set the default action upon clicking it. Additionally, configure the default share site when sharing via the context menu\'s share button.':
      'Сховати кнопку "Поділитися" в головному меню або встановити дію за замовчуванням. Також налаштувати сайт за замовчуванням при поширенні через контекстне меню.',

    'Sets the policy to be applied when performing an update.':
      'Встановлює політику, яка застосовується під час оновлення.',
  };

  // ==========================================
  // Функція перекладу одного елемента
  // ==========================================
  function translateElement(el) {
    if (!el || !el.textContent) return;

    const text = el.textContent.trim();

    // Переклад тексту
    if (managerTranslations[text]) {
      el.textContent = managerTranslations[text];
    }

    // Переклад tooltip
    if (el.getAttribute('title') && tooltipTranslations[el.getAttribute('title')]) {
      el.setAttribute('title', tooltipTranslations[el.getAttribute('title')]);
    }
  }

  // ==========================================
  // Перекласти весь діалог Manager
  // ==========================================
  function translateManagerDialog() {
    const dialog = document.getElementById('cm-manager-dialog');
    if (!dialog) return;

    // Перекласти всі текстові вузли
    const elements = dialog.querySelectorAll('span, button, option, p, b, legend, h2');
    elements.forEach(translateElement);

    // Перекласти option елементи в select
    const options = dialog.querySelectorAll('option');
    options.forEach(opt => {
      if (opt.textContent && managerTranslations[opt.textContent]) {
        opt.textContent = managerTranslations[opt.textContent];
      }
    });

    // Перекласти legend (EXPERIMENTAL)
    const legends = dialog.querySelectorAll('legend');
    legends.forEach(legend => {
      if (legend.textContent && managerTranslations[legend.textContent]) {
        legend.textContent = managerTranslations[legend.textContent];
      }
    });
  }

  // ==========================================
  // MutationObserver — спостерігає за появою діалогу
  // ==========================================
  function initObserver() {
    const dialog = document.getElementById('cm-manager-dialog');

    if (dialog) {
      // Діалог вже існує — перекласти одразу
      translateManagerDialog();
    }

    // Спостерігач за змінами DOM
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.addedNodes.length) {
          for (const node of mutation.addedNodes) {
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
              // Перевірити, чи доданий елемент — це діалог
              if (node.id === 'cm-manager-dialog') {
                translateManagerDialog();
              }
              // Або перевірити, чи діалог всередині доданого елемента
              const dialog = node.querySelector('#cm-manager-dialog');
              if (dialog) {
                translateManagerDialog();
              }
            }
          }
        }
      }
    });

    // Спостерігати за body
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Також спостерігати за змінами тексту (на випадок асинхронного рендеру)
    let lastDialogContent = '';
    const checkInterval = setInterval(() => {
      const currentDialog = document.getElementById('cm-manager-dialog');
      if (currentDialog) {
        const content = currentDialog.innerHTML;
        if (content !== lastDialogContent) {
          lastDialogContent = content;
          translateManagerDialog();
        }
      }
    }, 1000);

    // Зупинити інтервал через 30 секунд після ініціалізації
    setTimeout(() => {
      clearInterval(checkInterval);
    }, 30000);
  }

  // ==========================================
  // Ініціалізувати після завантаження ComfyUI
  // ==========================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initObserver);
  } else {
    initObserver();
  }

  // Також спробувати при появі app object
  const checkApp = setInterval(() => {
    if (window.comfyApp || window.app) {
      clearInterval(checkApp);
      initObserver();
    }
  }, 500);

  // Таймаут перевірки
  setTimeout(() => clearInterval(checkApp), 10000);

})();
