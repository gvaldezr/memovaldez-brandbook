/* ================================================================
   MEMO VALDEZ — Theme Manager
   Tri-estado: light · dark · system (default)
   - Persiste la elección en localStorage.
   - "system" respeta prefers-color-scheme (dark cálido por defecto).
   - Actualiza <meta name="theme-color"> y estados ARIA del toggle.
   ================================================================ */
(function () {
  'use strict';

  var STORAGE_KEY = 'mv-theme';
  var MODES = ['light', 'dark', 'system'];
  var root = document.documentElement;
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  // theme-color por tema (coincide con --mv-bg de tokens.css)
  var THEME_COLOR = { light: '#FEFEFE', dark: '#131110' };

  function getStored() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      return MODES.indexOf(v) !== -1 ? v : 'system';
    } catch (e) {
      return 'system';
    }
  }

  function store(mode) {
    try { localStorage.setItem(STORAGE_KEY, mode); } catch (e) {}
  }

  // Tema efectivo (resuelve "system" a light/dark real)
  function effective(mode) {
    if (mode === 'system') return media.matches ? 'dark' : 'light';
    return mode;
  }

  function apply(mode) {
    if (mode === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', mode);
    }

    var eff = effective(mode);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', THEME_COLOR[eff]);

    root.style.colorScheme = eff;
    updateControls(mode, eff);
  }

  function updateControls(mode, eff) {
    var buttons = document.querySelectorAll('[data-theme-option]');
    buttons.forEach(function (btn) {
      var isActive = btn.getAttribute('data-theme-option') === mode;
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      btn.classList.toggle('is-active', isActive);
    });

    // Toggle cíclico (si existe un botón único)
    var cycle = document.querySelector('[data-theme-toggle]');
    if (cycle) {
      var label = 'Tema: ' + labelFor(mode) +
        (mode === 'system' ? ' (' + labelFor(eff) + ')' : '');
      cycle.setAttribute('aria-label', label);
      cycle.setAttribute('title', label);
      cycle.setAttribute('data-current', mode);
    }
  }

  function labelFor(mode) {
    return { light: 'claro', dark: 'oscuro', system: 'sistema' }[mode] || mode;
  }

  var api = {
    get: getStored,
    set: function (mode) {
      if (MODES.indexOf(mode) === -1) mode = 'system';
      store(mode);
      apply(mode);
    },
    cycle: function () {
      var next = MODES[(MODES.indexOf(getStored()) + 1) % MODES.length];
      this.set(next);
      return next;
    }
  };
  window.MVTheme = api;

  // Reaccionar a cambios del sistema solo cuando el modo es "system"
  var onSystemChange = function () {
    if (getStored() === 'system') apply('system');
  };
  if (media.addEventListener) media.addEventListener('change', onSystemChange);
  else if (media.addListener) media.addListener(onSystemChange);

  // Aplicar en cuanto el DOM de controles esté disponible
  function init() {
    apply(getStored());

    document.querySelectorAll('[data-theme-option]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        api.set(btn.getAttribute('data-theme-option'));
      });
    });

    var cycle = document.querySelector('[data-theme-toggle]');
    if (cycle) {
      cycle.addEventListener('click', function () { api.cycle(); });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
