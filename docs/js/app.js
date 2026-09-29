/* ================================================================
   MEMO VALDEZ — App
   Nav activo · Hash routing suave · Scroll reveal · Menú móvil
   · Validación de formulario · Header scrolled · Año dinámico
   ================================================================ */
(function () {
  'use strict';

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 1. Año dinámico en el footer ─────────────────────────── */
  function setYear() {
    var el = document.querySelector('[data-year]');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ── 2. Header: sombra/blur al hacer scroll ───────────────── */
  function initHeaderScroll() {
    var header = document.querySelector('[data-header]');
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── 3. Menú móvil ────────────────────────────────────────── */
  function initMobileNav() {
    var toggle = document.querySelector('[data-nav-toggle]');
    var nav = document.querySelector('[data-nav]');
    if (!toggle || !nav) return;

    var close = function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    };
    var open = function () {
      nav.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('nav-open');
    };

    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      expanded ? close() : open();
    });

    // Cerrar al elegir un enlace o presionar Escape
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  /* ── 4. Smooth scroll + hash routing para enlaces internos ── */
  function initSmoothNav() {
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href^="#"]');
      if (!link) return;
      var id = link.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({
        behavior: prefersReduced ? 'auto' : 'smooth',
        block: 'start'
      });
      // Actualiza el hash sin salto adicional
      if (history.pushState) history.pushState(null, '', id);
      else window.location.hash = id;

      // Enfoca la sección para lectores de pantalla
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  }

  /* ── 5. Nav activo según sección visible (scroll spy) ─────── */
  function initScrollSpy() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll('[data-nav] a[href^="#"]')
    );
    if (!links.length) return;

    var map = {};
    var sections = [];
    links.forEach(function (link) {
      var id = link.getAttribute('href').slice(1);
      var section = document.getElementById(id);
      if (section) { map[id] = link; sections.push(section); }
    });

    var setActive = function (id) {
      links.forEach(function (l) {
        var active = l.getAttribute('href') === '#' + id;
        l.classList.toggle('is-active', active);
        if (active) l.setAttribute('aria-current', 'true');
        else l.removeAttribute('aria-current');
      });
    };

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ── 6. Scroll reveal (respeta reduced-motion) ────────────── */
  function initReveal() {
    var items = Array.prototype.slice.call(
      document.querySelectorAll('[data-reveal]')
    );
    if (!items.length) return;

    if (prefersReduced || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ── 7. Validación de formulario de contacto ──────────────── */
  function initContactForm() {
    var form = document.querySelector('[data-contact-form]');
    if (!form) return;

    var status = form.querySelector('[data-form-status]');

    var setError = function (field, message) {
      var errEl = form.querySelector('#' + field.id + '-error');
      field.setAttribute('aria-invalid', message ? 'true' : 'false');
      if (errEl) errEl.textContent = message || '';
      return !message;
    };

    var validators = {
      nombre: function (v) {
        return v.trim().length >= 2 ? '' : 'Necesito al menos tu nombre.';
      },
      email: function (v) {
        var ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
        return ok ? '' : 'Escribe un correo válido, por ejemplo hola@ejemplo.com.';
      },
      mensaje: function (v) {
        return v.trim().length >= 10 ? '' : 'Cuéntame un poco más, ¿va?';
      }
    };

    // Validación en vivo (blur) una vez tocado el campo
    Object.keys(validators).forEach(function (name) {
      var field = form.elements[name];
      if (!field) return;
      field.addEventListener('blur', function () {
        setError(field, validators[name](field.value));
      });
      field.addEventListener('input', function () {
        if (field.getAttribute('aria-invalid') === 'true') {
          setError(field, validators[name](field.value));
        }
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstInvalid = null;
      var allValid = true;

      Object.keys(validators).forEach(function (name) {
        var field = form.elements[name];
        if (!field) return;
        var msg = validators[name](field.value);
        var valid = setError(field, msg);
        if (!valid) {
          allValid = false;
          if (!firstInvalid) firstInvalid = field;
        }
      });

      if (!allValid) {
        if (status) {
          status.textContent = 'Parece que falta algo — revisa antes de enviar.';
          status.className = 'form-status is-error';
        }
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Sin backend: simulación de envío exitoso (placeholder).
      if (status) {
        status.textContent = 'Gracias por escribir. Te respondo pronto — Memo.';
        status.className = 'form-status is-success';
      }
      form.reset();
    });
  }

  function init() {
    setYear();
    initHeaderScroll();
    initMobileNav();
    initSmoothNav();
    initScrollSpy();
    initReveal();
    initContactForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
