# Arquitectura CSS — Memo Valdez

> **Fase:** 4 · Componentes de Implementación  
> **Fecha:** 22 de septiembre de 2026  
> **Versión:** 1.0  
> **Construido sobre:** Design Tokens v1.0, Visual Narrative v1.0, Brand Foundation v1.0  
> **Prefijo CSS:** `.mv-` (clases) · `--mv-` (custom properties)

---

## Filosofía de Implementación

> **"La partitura como código."** — Cada archivo CSS es un instrumento en el ensamble. Cada clase tiene su lugar en la partitura. El grid es el compás. El whitespace es el silencio entre las notas.

### Principios de Arquitectura

1. **Mobile-first** — Los estilos base son mobile. Se escala hacia arriba con `min-width`.
2. **Token-driven** — Ningún valor mágico. Todo sale de `--mv-*` custom properties.
3. **Prefijo `.mv-`** — Evita colisiones con cualquier framework o CMS.
4. **BEM para componentes** — `.mv-card`, `.mv-card__header`, `.mv-card--elevated`.
5. **Utilities para layout** — `.mv-p-4`, `.mv-text-lg`, `.mv-flex`.
6. **Dark mode por defecto** — `[data-theme="dark"]` es el estado default (82% de usuarios lo prefieren).
7. **Accesibilidad como fundamento** — WCAG AA mínimo en toda combinación funcional.

---

## 1. Variables CSS Completas

### 1.1 Light Mode — `:root`

```css
/* ================================================================
   MEMO VALDEZ — CSS Design System v1.0
   "Minimalismo con alma"
   
   Prefijo: --mv-
   Base: 16px = 1rem
   Grid: 4px
   Dark mode cálido = default
   ================================================================ */

:root {
  /* ---------------------------------------------------------------
     COLOR: Primary — Terracota Cálido (Humanismo)
     "La tierra, las manos que dirigen, la arcilla que conecta."
     --------------------------------------------------------------- */
  --mv-primary: #B85C38;
  --mv-primary-light: #D4845E;
  --mv-primary-dark: #8E3F22;

  /* ---------------------------------------------------------------
     COLOR: Secondary — Dorado / Ochre (Sofisticación)
     "El bronce de los instrumentos, la miel de la luz en Mérida."
     --------------------------------------------------------------- */
  --mv-secondary: #C8A96E;
  --mv-secondary-light: #DBBF8A;
  --mv-secondary-dark: #A68B4B;

  /* ---------------------------------------------------------------
     COLOR: Tertiary — Slate Azul Profundo (Tecnología)
     "El azul del código, sereno no frío. Tech al servicio del arte."
     --------------------------------------------------------------- */
  --mv-tertiary: #3D5A73;
  --mv-tertiary-light: #5A7A96;
  --mv-tertiary-dark: #2A3F52;

  /* ---------------------------------------------------------------
     COLOR: Semantic
     --------------------------------------------------------------- */
  --mv-success: #4A7C59;
  --mv-warning: #D4A843;
  --mv-error: #C44B4B;
  --mv-error-dark: #A83838;
  --mv-info: #4A6FA5;

  /* ---------------------------------------------------------------
     COLOR: Neutrals — Warm Gray Scale
     Matiz cálido ≈30–36° HSL. Nunca grises puros.
     --------------------------------------------------------------- */
  --mv-neutral-50: #FEFEFE;
  --mv-neutral-100: #F5F0EB;
  --mv-neutral-200: #E8E1D9;
  --mv-neutral-300: #D4CBC0;
  --mv-neutral-400: #B8ADA0;
  --mv-neutral-500: #968A7D;
  --mv-neutral-600: #756A5E;
  --mv-neutral-700: #574E44;
  --mv-neutral-800: #3A342D;
  --mv-neutral-900: #231F1B;
  --mv-neutral-950: #161310;

  /* ---------------------------------------------------------------
     COLOR: Surfaces
     --------------------------------------------------------------- */
  --mv-bg: #FEFEFE;
  --mv-surface: #F5F0EB;
  --mv-surface-elevated: #FFFFFF;
  --mv-overlay: rgba(35, 31, 27, 0.60);

  /* ---------------------------------------------------------------
     COLOR: Text
     --------------------------------------------------------------- */
  --mv-text-primary: #231F1B;
  --mv-text-secondary: #574E44;
  --mv-text-tertiary: #968A7D;
  --mv-text-inverse: #FEFEFE;

  /* ---------------------------------------------------------------
     TYPOGRAPHY: Families
     --------------------------------------------------------------- */
  --mv-font-display: 'Instrument Sans', 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;
  --mv-font-body: 'Inter', system-ui, -apple-system, sans-serif;
  --mv-font-serif: 'Bodoni Moda', 'Playfair Display', Georgia, serif;
  --mv-font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', monospace;

  /* ---------------------------------------------------------------
     TYPOGRAPHY: Size Scale (Major Third ≈1.25)
     --------------------------------------------------------------- */
  --mv-text-xs: 0.75rem;      /* 12px */
  --mv-text-sm: 0.875rem;     /* 14px */
  --mv-text-base: 1rem;       /* 16px */
  --mv-text-lg: 1.125rem;     /* 18px */
  --mv-text-xl: 1.25rem;      /* 20px */
  --mv-text-2xl: 1.5rem;      /* 24px */
  --mv-text-3xl: 1.875rem;    /* 30px */
  --mv-text-4xl: 2.5rem;      /* 40px */
  --mv-text-5xl: 3.5rem;      /* 56px */

  /* ---------------------------------------------------------------
     TYPOGRAPHY: Weights
     --------------------------------------------------------------- */
  --mv-font-light: 300;
  --mv-font-regular: 400;
  --mv-font-medium: 500;
  --mv-font-semibold: 600;
  --mv-font-bold: 700;

  /* ---------------------------------------------------------------
     TYPOGRAPHY: Line Heights
     --------------------------------------------------------------- */
  --mv-leading-tight: 1.2;
  --mv-leading-normal: 1.5;
  --mv-leading-relaxed: 1.7;

  /* ---------------------------------------------------------------
     TYPOGRAPHY: Letter Spacing
     --------------------------------------------------------------- */
  --mv-tracking-tight: -0.02em;
  --mv-tracking-normal: 0em;
  --mv-tracking-wide: 0.05em;
  --mv-tracking-widest: 0.1em;

  /* ---------------------------------------------------------------
     SPACING: Base 4px System
     "Como un compás musical — cada pulso es múltiplo de la unidad."
     --------------------------------------------------------------- */
  --mv-space-0: 0;
  --mv-space-0-5: 0.125rem;   /* 2px  */
  --mv-space-1: 0.25rem;      /* 4px  */
  --mv-space-2: 0.5rem;       /* 8px  */
  --mv-space-3: 0.75rem;      /* 12px */
  --mv-space-4: 1rem;         /* 16px */
  --mv-space-5: 1.25rem;      /* 20px */
  --mv-space-6: 1.5rem;       /* 24px */
  --mv-space-8: 2rem;         /* 32px */
  --mv-space-10: 2.5rem;      /* 40px */
  --mv-space-12: 3rem;        /* 48px */
  --mv-space-16: 4rem;        /* 64px */
  --mv-space-20: 5rem;        /* 80px */
  --mv-space-24: 6rem;        /* 96px */

  /* ---------------------------------------------------------------
     SHADOWS: Light Mode (warm tint, never pure black)
     --------------------------------------------------------------- */
  --mv-shadow-sm: 0 1px 2px 0 rgba(35, 31, 27, 0.05);
  --mv-shadow-md: 0 4px 6px -1px rgba(35, 31, 27, 0.08),
                  0 2px 4px -2px rgba(35, 31, 27, 0.05);
  --mv-shadow-lg: 0 10px 15px -3px rgba(35, 31, 27, 0.10),
                  0 4px 6px -4px rgba(35, 31, 27, 0.06);
  --mv-shadow-xl: 0 20px 25px -5px rgba(35, 31, 27, 0.12),
                  0 8px 10px -6px rgba(35, 31, 27, 0.06);

  /* ---------------------------------------------------------------
     BORDER RADIUS
     "Esquinas de piano de cola — precisas pero con curva elegante."
     --------------------------------------------------------------- */
  --mv-radius-sm: 4px;
  --mv-radius-md: 8px;
  --mv-radius-lg: 16px;
  --mv-radius-xl: 24px;
  --mv-radius-full: 9999px;

  /* ---------------------------------------------------------------
     BREAKPOINTS (reference only — use media queries)
     --------------------------------------------------------------- */
  --mv-screen-sm: 640px;
  --mv-screen-md: 768px;
  --mv-screen-lg: 1024px;
  --mv-screen-xl: 1280px;
  --mv-screen-2xl: 1536px;

  /* ---------------------------------------------------------------
     TRANSITIONS: Durations
     "Las dinámicas de la interfaz — piano, forte, crescendo."
     --------------------------------------------------------------- */
  --mv-duration-fast: 150ms;
  --mv-duration-normal: 300ms;
  --mv-duration-slow: 500ms;
  --mv-duration-dramatic: 800ms;

  /* ---------------------------------------------------------------
     TRANSITIONS: Easings
     --------------------------------------------------------------- */
  --mv-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --mv-ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --mv-ease-gentle: cubic-bezier(0.4, 0, 0.2, 1);
  --mv-ease-linear: linear;

  /* ---------------------------------------------------------------
     TRANSITIONS: Shortcuts
     --------------------------------------------------------------- */
  --mv-transition-fast: all 150ms cubic-bezier(0.16, 1, 0.3, 1);
  --mv-transition-normal: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
  --mv-transition-slow: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  --mv-transition-dramatic: all 800ms cubic-bezier(0.4, 0, 0.2, 1);

  /* ---------------------------------------------------------------
     FOCUS
     --------------------------------------------------------------- */
  --mv-focus-ring: 0 0 0 2px var(--mv-bg), 0 0 0 4px var(--mv-primary);
  --mv-focus-ring-offset: 2px;

  /* ---------------------------------------------------------------
     Z-INDEX SCALE
     --------------------------------------------------------------- */
  --mv-z-dropdown: 10;
  --mv-z-sticky: 20;
  --mv-z-fixed: 30;
  --mv-z-modal-backdrop: 40;
  --mv-z-modal: 50;
  --mv-z-popover: 60;
  --mv-z-tooltip: 70;
}
```

### 1.2 Dark Mode — `[data-theme="dark"]`

```css
[data-theme="dark"] {
  /* ---------------------------------------------------------------
     COLOR: Primary — Terracota Elevado
     Iluminado para mantener contraste sin perder calidez.
     --------------------------------------------------------------- */
  --mv-primary: #D4845E;
  --mv-primary-light: #E8A882;
  --mv-primary-dark: #B85C38;

  /* ---------------------------------------------------------------
     COLOR: Secondary — Dorado Luminoso
     --------------------------------------------------------------- */
  --mv-secondary: #DBBF8A;
  --mv-secondary-light: #EAD5A8;
  --mv-secondary-dark: #C8A96E;

  /* ---------------------------------------------------------------
     COLOR: Tertiary — Slate Azul Iluminado
     --------------------------------------------------------------- */
  --mv-tertiary: #6B9DBF;
  --mv-tertiary-light: #8BB8D4;
  --mv-tertiary-dark: #4A7999;

  /* ---------------------------------------------------------------
     COLOR: Semantic (Dark Mode)
     Saturación reducida ~10-15%, luminosidad elevada.
     --------------------------------------------------------------- */
  --mv-success: #6BAF7B;
  --mv-warning: #E4BF5A;
  --mv-error: #E07070;
  --mv-error-dark: #C44B4B;
  --mv-info: #6B93CC;

  /* ---------------------------------------------------------------
     COLOR: Neutrals — Inverted Warm Scale
     50 = más oscuro, 950 = más claro (conceptualmente invertido).
     --------------------------------------------------------------- */
  --mv-neutral-50: #161310;
  --mv-neutral-100: #1C1916;
  --mv-neutral-200: #28231E;
  --mv-neutral-300: #3A342D;
  --mv-neutral-400: #574E44;
  --mv-neutral-500: #756A5E;
  --mv-neutral-600: #968A7D;
  --mv-neutral-700: #B8ADA0;
  --mv-neutral-800: #D4CBC0;
  --mv-neutral-900: #E8E1D9;
  --mv-neutral-950: #F5F0EB;

  /* ---------------------------------------------------------------
     COLOR: Surfaces (Dark)
     Elevación = superficies más claras, no sombras.
     --------------------------------------------------------------- */
  --mv-bg: #131110;
  --mv-surface: #1C1916;
  --mv-surface-elevated: #28231E;
  --mv-overlay: rgba(0, 0, 0, 0.70);

  /* ---------------------------------------------------------------
     COLOR: Text (Dark)
     --------------------------------------------------------------- */
  --mv-text-primary: #F0EBE5;
  --mv-text-secondary: #B8ADA0;
  --mv-text-tertiary: #756A5E;
  --mv-text-inverse: #231F1B;

  /* ---------------------------------------------------------------
     SHADOWS: Dark Mode
     --------------------------------------------------------------- */
  --mv-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.20);
  --mv-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.30),
                  0 2px 4px -2px rgba(0, 0, 0, 0.20);
  --mv-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.40),
                  0 4px 6px -4px rgba(0, 0, 0, 0.25);
  --mv-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.50),
                  0 8px 10px -6px rgba(0, 0, 0, 0.30);

  /* ---------------------------------------------------------------
     FOCUS (Dark)
     --------------------------------------------------------------- */
  --mv-focus-ring: 0 0 0 2px var(--mv-bg), 0 0 0 4px var(--mv-primary);

  /* ---------------------------------------------------------------
     TYPOGRAPHY: Weight Compensation (Dark thinning)
     Texto se ve más delgado en fondos oscuros — compensar.
     --------------------------------------------------------------- */
  --mv-font-light: 350;
  --mv-font-regular: 420;
}
```

### 1.3 System Preference Auto-Detect

```css
/* Aplica dark mode cuando el sistema lo prefiere
   y el usuario NO ha elegido explícitamente light */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --mv-primary: #D4845E;
    --mv-primary-light: #E8A882;
    --mv-primary-dark: #B85C38;
    --mv-secondary: #DBBF8A;
    --mv-secondary-light: #EAD5A8;
    --mv-secondary-dark: #C8A96E;
    --mv-tertiary: #6B9DBF;
    --mv-tertiary-light: #8BB8D4;
    --mv-tertiary-dark: #4A7999;
    --mv-success: #6BAF7B;
    --mv-warning: #E4BF5A;
    --mv-error: #E07070;
    --mv-error-dark: #C44B4B;
    --mv-info: #6B93CC;
    --mv-neutral-50: #161310;
    --mv-neutral-100: #1C1916;
    --mv-neutral-200: #28231E;
    --mv-neutral-300: #3A342D;
    --mv-neutral-400: #574E44;
    --mv-neutral-500: #756A5E;
    --mv-neutral-600: #968A7D;
    --mv-neutral-700: #B8ADA0;
    --mv-neutral-800: #D4CBC0;
    --mv-neutral-900: #E8E1D9;
    --mv-neutral-950: #F5F0EB;
    --mv-bg: #131110;
    --mv-surface: #1C1916;
    --mv-surface-elevated: #28231E;
    --mv-overlay: rgba(0, 0, 0, 0.70);
    --mv-text-primary: #F0EBE5;
    --mv-text-secondary: #B8ADA0;
    --mv-text-tertiary: #756A5E;
    --mv-text-inverse: #231F1B;
    --mv-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.20);
    --mv-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.30),
                    0 2px 4px -2px rgba(0, 0, 0, 0.20);
    --mv-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.40),
                    0 4px 6px -4px rgba(0, 0, 0, 0.25);
    --mv-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.50),
                    0 8px 10px -6px rgba(0, 0, 0, 0.30);
    --mv-focus-ring: 0 0 0 2px var(--mv-bg), 0 0 0 4px var(--mv-primary);
    --mv-font-light: 350;
    --mv-font-regular: 420;
  }
}
```

### 1.4 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  :root {
    --mv-duration-fast: 0ms;
    --mv-duration-normal: 0ms;
    --mv-duration-slow: 0ms;
    --mv-duration-dramatic: 0ms;
    --mv-transition-fast: none;
    --mv-transition-normal: none;
    --mv-transition-slow: none;
    --mv-transition-dramatic: none;
  }
}
```

---

## 2. Reset / Normalize Base

```css
/* ================================================================
   reset.css — Memo Valdez
   Box model, margin reset, font smoothing, scroll behavior.
   ================================================================ */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  /* Suavizar transición de tema */
  transition: background-color var(--mv-duration-normal) var(--mv-ease-gentle),
              color 200ms var(--mv-ease-gentle);
}

body {
  font-family: var(--mv-font-body);
  font-size: var(--mv-text-base);
  font-weight: var(--mv-font-regular);
  line-height: var(--mv-leading-normal);
  color: var(--mv-text-primary);
  background-color: var(--mv-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  min-height: 100vh;
  overflow-x: hidden;
}

/* Selection — Terracota cálido como highlight */
::selection {
  background-color: var(--mv-primary);
  color: var(--mv-text-inverse);
}

::-moz-selection {
  background-color: var(--mv-primary);
  color: var(--mv-text-inverse);
}

/* Focus visible — accesibilidad primero */
:focus-visible {
  outline: none;
  box-shadow: var(--mv-focus-ring);
}

:focus:not(:focus-visible) {
  outline: none;
}

/* Media defaults */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
  height: auto;
}

/* Form element inheritance */
input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

/* Remove list styles */
ul,
ol {
  list-style: none;
}

/* Link reset */
a {
  color: var(--mv-primary);
  text-decoration: none;
  transition: var(--mv-transition-fast);
}

a:hover {
  color: var(--mv-primary-dark);
}

/* Heading margin reset (applied via typography classes) */
h1, h2, h3, h4, h5, h6 {
  font-weight: var(--mv-font-bold);
  line-height: var(--mv-leading-tight);
  letter-spacing: var(--mv-tracking-tight);
}

/* Smooth scrollbar in dark mode */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    color-scheme: dark;
  }
}

[data-theme="dark"] {
  color-scheme: dark;
}

/* Transition suave entre temas para TODOS los elementos */
*,
*::before,
*::after {
  transition: background-color var(--mv-duration-normal) var(--mv-ease-gentle),
              color 200ms var(--mv-ease-gentle),
              border-color var(--mv-duration-normal) var(--mv-ease-gentle),
              box-shadow var(--mv-duration-normal) var(--mv-ease-gentle);
}
```

---

## 3. Layout System

### 3.1 Container

```css
/* ================================================================
   layout.css — Container System
   Mobile-first. Full-width base → constrained at breakpoints.
   ================================================================ */

.mv-container {
  width: 100%;
  margin-inline: auto;
  padding-inline: var(--mv-space-5); /* 20px mobile */
}

@media (min-width: 640px) {
  .mv-container {
    padding-inline: var(--mv-space-6); /* 24px */
  }
}

@media (min-width: 768px) {
  .mv-container {
    max-width: 720px;
    padding-inline: var(--mv-space-6); /* 24px */
  }
}

@media (min-width: 1024px) {
  .mv-container {
    max-width: 960px;
    padding-inline: var(--mv-space-8); /* 32px */
  }
}

@media (min-width: 1280px) {
  .mv-container {
    max-width: 1140px;
  }
}

@media (min-width: 1536px) {
  .mv-container {
    max-width: 1320px;
  }
}

/* Variantes de container */
.mv-container--narrow {
  max-width: 680px; /* Lectura: blog, artículos */
}

.mv-container--wide {
  max-width: 1440px; /* Portfolio, galerías */
}

.mv-container--full {
  max-width: none; /* Hero sections, edge-to-edge */
  padding-inline: 0;
}
```

### 3.2 Grid — 12 Columnas

```css
/* ================================================================
   layout.css — Grid System (12 columns)
   ================================================================ */

.mv-grid {
  display: grid;
  gap: var(--mv-space-6); /* 24px default gap */
}

/* Column count utilities */
.mv-grid-cols-1  { grid-template-columns: repeat(1, 1fr); }
.mv-grid-cols-2  { grid-template-columns: repeat(2, 1fr); }
.mv-grid-cols-3  { grid-template-columns: repeat(3, 1fr); }
.mv-grid-cols-4  { grid-template-columns: repeat(4, 1fr); }
.mv-grid-cols-6  { grid-template-columns: repeat(6, 1fr); }
.mv-grid-cols-12 { grid-template-columns: repeat(12, 1fr); }

/* Responsive grid columns */
@media (min-width: 640px) {
  .mv-sm\:grid-cols-2  { grid-template-columns: repeat(2, 1fr); }
  .mv-sm\:grid-cols-3  { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 768px) {
  .mv-md\:grid-cols-2  { grid-template-columns: repeat(2, 1fr); }
  .mv-md\:grid-cols-3  { grid-template-columns: repeat(3, 1fr); }
  .mv-md\:grid-cols-4  { grid-template-columns: repeat(4, 1fr); }
  .mv-md\:grid-cols-6  { grid-template-columns: repeat(6, 1fr); }
  .mv-md\:grid-cols-12 { grid-template-columns: repeat(12, 1fr); }
}

@media (min-width: 1024px) {
  .mv-lg\:grid-cols-2  { grid-template-columns: repeat(2, 1fr); }
  .mv-lg\:grid-cols-3  { grid-template-columns: repeat(3, 1fr); }
  .mv-lg\:grid-cols-4  { grid-template-columns: repeat(4, 1fr); }
  .mv-lg\:grid-cols-6  { grid-template-columns: repeat(6, 1fr); }
  .mv-lg\:grid-cols-12 { grid-template-columns: repeat(12, 1fr); }
}

@media (min-width: 1280px) {
  .mv-xl\:grid-cols-3  { grid-template-columns: repeat(3, 1fr); }
  .mv-xl\:grid-cols-4  { grid-template-columns: repeat(4, 1fr); }
}

/* Column span utilities */
.mv-col-span-1  { grid-column: span 1; }
.mv-col-span-2  { grid-column: span 2; }
.mv-col-span-3  { grid-column: span 3; }
.mv-col-span-4  { grid-column: span 4; }
.mv-col-span-6  { grid-column: span 6; }
.mv-col-span-8  { grid-column: span 8; }
.mv-col-span-12 { grid-column: span 12; }
.mv-col-span-full { grid-column: 1 / -1; }

@media (min-width: 768px) {
  .mv-md\:col-span-4  { grid-column: span 4; }
  .mv-md\:col-span-6  { grid-column: span 6; }
  .mv-md\:col-span-8  { grid-column: span 8; }
}

@media (min-width: 1024px) {
  .mv-lg\:col-span-3  { grid-column: span 3; }
  .mv-lg\:col-span-4  { grid-column: span 4; }
  .mv-lg\:col-span-6  { grid-column: span 6; }
  .mv-lg\:col-span-8  { grid-column: span 8; }
  .mv-lg\:col-span-9  { grid-column: span 9; }
}

/* Gap system */
.mv-gap-0  { gap: 0; }
.mv-gap-1  { gap: var(--mv-space-1); }
.mv-gap-2  { gap: var(--mv-space-2); }
.mv-gap-3  { gap: var(--mv-space-3); }
.mv-gap-4  { gap: var(--mv-space-4); }
.mv-gap-5  { gap: var(--mv-space-5); }
.mv-gap-6  { gap: var(--mv-space-6); }
.mv-gap-8  { gap: var(--mv-space-8); }
.mv-gap-10 { gap: var(--mv-space-10); }
.mv-gap-12 { gap: var(--mv-space-12); }

/* Responsive gaps */
@media (min-width: 768px) {
  .mv-md\:gap-6  { gap: var(--mv-space-6); }
  .mv-md\:gap-8  { gap: var(--mv-space-8); }
  .mv-md\:gap-10 { gap: var(--mv-space-10); }
}

@media (min-width: 1024px) {
  .mv-lg\:gap-8  { gap: var(--mv-space-8); }
  .mv-lg\:gap-10 { gap: var(--mv-space-10); }
  .mv-lg\:gap-12 { gap: var(--mv-space-12); }
}
```

### 3.3 Flexbox Utilities

```css
/* ================================================================
   layout.css — Flexbox Utilities
   ================================================================ */

.mv-flex           { display: flex; }
.mv-inline-flex    { display: inline-flex; }
.mv-flex-col       { flex-direction: column; }
.mv-flex-row       { flex-direction: row; }
.mv-flex-wrap      { flex-wrap: wrap; }
.mv-flex-nowrap    { flex-wrap: nowrap; }

/* Alignment */
.mv-items-start    { align-items: flex-start; }
.mv-items-center   { align-items: center; }
.mv-items-end      { align-items: flex-end; }
.mv-items-stretch  { align-items: stretch; }
.mv-items-baseline { align-items: baseline; }

/* Justification */
.mv-justify-start   { justify-content: flex-start; }
.mv-justify-center  { justify-content: center; }
.mv-justify-end     { justify-content: flex-end; }
.mv-justify-between { justify-content: space-between; }
.mv-justify-around  { justify-content: space-around; }
.mv-justify-evenly  { justify-content: space-evenly; }

/* Flex item sizing */
.mv-flex-1      { flex: 1 1 0%; }
.mv-flex-auto   { flex: 1 1 auto; }
.mv-flex-none   { flex: none; }
.mv-flex-grow   { flex-grow: 1; }
.mv-flex-shrink-0 { flex-shrink: 0; }

/* Self alignment */
.mv-self-start  { align-self: flex-start; }
.mv-self-center { align-self: center; }
.mv-self-end    { align-self: flex-end; }

/* Responsive flex direction */
@media (min-width: 768px) {
  .mv-md\:flex-row { flex-direction: row; }
  .mv-md\:flex-col { flex-direction: column; }
}

@media (min-width: 1024px) {
  .mv-lg\:flex-row { flex-direction: row; }
}
```

### 3.4 Common Layout Patterns

```css
/* ================================================================
   layout.css — Pre-built Layout Patterns
   ================================================================ */

/* --- Stack: Vertical rhythm --- */
.mv-stack {
  display: flex;
  flex-direction: column;
}

.mv-stack > * + * {
  margin-top: var(--mv-space-4);
}

.mv-stack--sm > * + * { margin-top: var(--mv-space-2); }
.mv-stack--md > * + * { margin-top: var(--mv-space-4); }
.mv-stack--lg > * + * { margin-top: var(--mv-space-8); }
.mv-stack--xl > * + * { margin-top: var(--mv-space-12); }

/* --- Cluster: Horizontal wrap with gap --- */
.mv-cluster {
  display: flex;
  flex-wrap: wrap;
  gap: var(--mv-space-3);
  align-items: center;
}

/* --- Sidebar layout: Main + aside --- */
.mv-with-sidebar {
  display: flex;
  flex-wrap: wrap;
  gap: var(--mv-space-8);
}

.mv-with-sidebar > :first-child {
  flex: 1;
  min-width: 60%;
}

.mv-with-sidebar > :last-child {
  flex: 0 0 280px;
}

/* --- Center: Max-width + centered --- */
.mv-center {
  max-width: var(--mv-center-width, 680px);
  margin-inline: auto;
  padding-inline: var(--mv-space-5);
}

/* --- Section spacing --- */
.mv-section {
  padding-block: var(--mv-space-16); /* 64px mobile */
}

@media (min-width: 768px) {
  .mv-section {
    padding-block: var(--mv-space-20); /* 80px tablet */
  }
}

@media (min-width: 1024px) {
  .mv-section {
    padding-block: var(--mv-space-24); /* 96px desktop */
  }
}
```

---

## 4. Typography Utilities

```css
/* ================================================================
   typography.css — Memo Valdez Typography System
   ================================================================ */

/* --- Font Family Classes --- */
.mv-font-display { font-family: var(--mv-font-display); }
.mv-font-body    { font-family: var(--mv-font-body); }
.mv-font-serif   { font-family: var(--mv-font-serif); }
.mv-font-mono    { font-family: var(--mv-font-mono); }

/* --- Font Weight Classes --- */
.mv-font-light    { font-weight: var(--mv-font-light); }
.mv-font-regular  { font-weight: var(--mv-font-regular); }
.mv-font-medium   { font-weight: var(--mv-font-medium); }
.mv-font-semibold { font-weight: var(--mv-font-semibold); }
.mv-font-bold     { font-weight: var(--mv-font-bold); }

/* --- Font Size Classes --- */
.mv-text-xs   { font-size: var(--mv-text-xs);   line-height: var(--mv-leading-normal); }
.mv-text-sm   { font-size: var(--mv-text-sm);   line-height: var(--mv-leading-normal); }
.mv-text-base { font-size: var(--mv-text-base); line-height: var(--mv-leading-normal); }
.mv-text-lg   { font-size: var(--mv-text-lg);   line-height: var(--mv-leading-normal); }
.mv-text-xl   { font-size: var(--mv-text-xl);   line-height: var(--mv-leading-normal); }
.mv-text-2xl  { font-size: var(--mv-text-2xl);  line-height: var(--mv-leading-tight); }
.mv-text-3xl  { font-size: var(--mv-text-3xl);  line-height: var(--mv-leading-tight); }
.mv-text-4xl  { font-size: var(--mv-text-4xl);  line-height: var(--mv-leading-tight); }
.mv-text-5xl  { font-size: var(--mv-text-5xl);  line-height: 1.1; }

/* --- Line Height Overrides --- */
.mv-leading-tight   { line-height: var(--mv-leading-tight); }
.mv-leading-normal  { line-height: var(--mv-leading-normal); }
.mv-leading-relaxed { line-height: var(--mv-leading-relaxed); }

/* --- Letter Spacing --- */
.mv-tracking-tight   { letter-spacing: var(--mv-tracking-tight); }
.mv-tracking-normal  { letter-spacing: var(--mv-tracking-normal); }
.mv-tracking-wide    { letter-spacing: var(--mv-tracking-wide); }
.mv-tracking-widest  { letter-spacing: var(--mv-tracking-widest); }

/* --- Text Color --- */
.mv-text-color-primary   { color: var(--mv-text-primary); }
.mv-text-color-secondary { color: var(--mv-text-secondary); }
.mv-text-color-tertiary  { color: var(--mv-text-tertiary); }
.mv-text-color-inverse   { color: var(--mv-text-inverse); }
.mv-text-color-brand     { color: var(--mv-primary); }
.mv-text-color-gold      { color: var(--mv-secondary); }
.mv-text-color-tech      { color: var(--mv-tertiary); }

/* --- Text Alignment --- */
.mv-text-left   { text-align: left; }
.mv-text-center { text-align: center; }
.mv-text-right  { text-align: right; }

@media (min-width: 768px) {
  .mv-md\:text-left   { text-align: left; }
  .mv-md\:text-center { text-align: center; }
}

/* --- Text Transform --- */
.mv-uppercase  { text-transform: uppercase; }
.mv-lowercase  { text-transform: lowercase; }
.mv-capitalize { text-transform: capitalize; }
.mv-normal-case { text-transform: none; }

/* --- Overline (label / category indicator) --- */
.mv-overline {
  font-family: var(--mv-font-display);
  font-size: var(--mv-text-xs);
  font-weight: var(--mv-font-semibold);
  letter-spacing: var(--mv-tracking-widest);
  text-transform: uppercase;
  color: var(--mv-text-tertiary);
}

/* --- Prose (long-form text) --- */
.mv-prose {
  font-family: var(--mv-font-body);
  font-size: var(--mv-text-base);
  font-weight: var(--mv-font-regular);
  line-height: var(--mv-leading-relaxed);
  color: var(--mv-text-primary);
  max-width: 680px;
}

.mv-prose > * + * {
  margin-top: var(--mv-space-4);
}

.mv-prose h2 {
  font-family: var(--mv-font-display);
  font-size: var(--mv-text-2xl);
  font-weight: var(--mv-font-bold);
  margin-top: var(--mv-space-12);
  margin-bottom: var(--mv-space-4);
}

.mv-prose h3 {
  font-family: var(--mv-font-display);
  font-size: var(--mv-text-xl);
  font-weight: var(--mv-font-semibold);
  margin-top: var(--mv-space-8);
  margin-bottom: var(--mv-space-3);
}

.mv-prose a {
  color: var(--mv-primary);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.mv-prose a:hover {
  color: var(--mv-primary-dark);
}

.mv-prose blockquote {
  border-left: 3px solid var(--mv-secondary);
  padding-left: var(--mv-space-6);
  font-family: var(--mv-font-serif);
  font-style: italic;
  color: var(--mv-text-secondary);
}

.mv-prose code {
  font-family: var(--mv-font-mono);
  font-size: 0.9em;
  background: var(--mv-neutral-100);
  padding: var(--mv-space-0-5) var(--mv-space-1);
  border-radius: var(--mv-radius-sm);
}

.mv-prose pre {
  background: var(--mv-neutral-900);
  color: var(--mv-neutral-100);
  padding: var(--mv-space-6);
  border-radius: var(--mv-radius-md);
  overflow-x: auto;
  font-family: var(--mv-font-mono);
  font-size: var(--mv-text-sm);
  line-height: var(--mv-leading-relaxed);
}

.mv-prose pre code {
  background: transparent;
  padding: 0;
}

/* --- Heading presets --- */
.mv-h1 {
  font-family: var(--mv-font-display);
  font-size: var(--mv-text-4xl);
  font-weight: var(--mv-font-bold);
  line-height: var(--mv-leading-tight);
  letter-spacing: var(--mv-tracking-tight);
}

.mv-h2 {
  font-family: var(--mv-font-display);
  font-size: var(--mv-text-3xl);
  font-weight: var(--mv-font-bold);
  line-height: var(--mv-leading-tight);
  letter-spacing: var(--mv-tracking-tight);
}

.mv-h3 {
  font-family: var(--mv-font-display);
  font-size: var(--mv-text-2xl);
  font-weight: var(--mv-font-semibold);
  line-height: var(--mv-leading-tight);
}

.mv-h4 {
  font-family: var(--mv-font-display);
  font-size: var(--mv-text-xl);
  font-weight: var(--mv-font-semibold);
  line-height: var(--mv-leading-tight);
}

.mv-display {
  font-family: var(--mv-font-display);
  font-size: var(--mv-text-5xl);
  font-weight: var(--mv-font-bold);
  line-height: 1.1;
  letter-spacing: var(--mv-tracking-tight);
}

/* Responsive type scaling */
@media (max-width: 767px) {
  .mv-h1      { font-size: var(--mv-text-3xl); }
  .mv-h2      { font-size: var(--mv-text-2xl); }
  .mv-h3      { font-size: var(--mv-text-xl); }
  .mv-display { font-size: var(--mv-text-4xl); }
}
```

---

## 5. Spacing Utilities

```css
/* ================================================================
   utilities.css — Spacing (Padding, Margin, Gap)
   
   Convention:  .mv-{property}-{scale}
   Properties:  p (padding), m (margin), gap
   Directions:  t(top), r(right), b(bottom), l(left),
                x(inline), y(block)
   Scale:       0, 0-5, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24
   ================================================================ */

/* --- Padding: All sides --- */
.mv-p-0    { padding: 0; }
.mv-p-1    { padding: var(--mv-space-1); }
.mv-p-2    { padding: var(--mv-space-2); }
.mv-p-3    { padding: var(--mv-space-3); }
.mv-p-4    { padding: var(--mv-space-4); }
.mv-p-5    { padding: var(--mv-space-5); }
.mv-p-6    { padding: var(--mv-space-6); }
.mv-p-8    { padding: var(--mv-space-8); }
.mv-p-10   { padding: var(--mv-space-10); }
.mv-p-12   { padding: var(--mv-space-12); }
.mv-p-16   { padding: var(--mv-space-16); }

/* --- Padding: X-axis (inline) --- */
.mv-px-0   { padding-inline: 0; }
.mv-px-1   { padding-inline: var(--mv-space-1); }
.mv-px-2   { padding-inline: var(--mv-space-2); }
.mv-px-3   { padding-inline: var(--mv-space-3); }
.mv-px-4   { padding-inline: var(--mv-space-4); }
.mv-px-5   { padding-inline: var(--mv-space-5); }
.mv-px-6   { padding-inline: var(--mv-space-6); }
.mv-px-8   { padding-inline: var(--mv-space-8); }

/* --- Padding: Y-axis (block) --- */
.mv-py-0   { padding-block: 0; }
.mv-py-1   { padding-block: var(--mv-space-1); }
.mv-py-2   { padding-block: var(--mv-space-2); }
.mv-py-3   { padding-block: var(--mv-space-3); }
.mv-py-4   { padding-block: var(--mv-space-4); }
.mv-py-5   { padding-block: var(--mv-space-5); }
.mv-py-6   { padding-block: var(--mv-space-6); }
.mv-py-8   { padding-block: var(--mv-space-8); }
.mv-py-10  { padding-block: var(--mv-space-10); }
.mv-py-12  { padding-block: var(--mv-space-12); }
.mv-py-16  { padding-block: var(--mv-space-16); }
.mv-py-20  { padding-block: var(--mv-space-20); }
.mv-py-24  { padding-block: var(--mv-space-24); }

/* --- Padding: Individual sides --- */
.mv-pt-0   { padding-top: 0; }
.mv-pt-4   { padding-top: var(--mv-space-4); }
.mv-pt-6   { padding-top: var(--mv-space-6); }
.mv-pt-8   { padding-top: var(--mv-space-8); }
.mv-pt-12  { padding-top: var(--mv-space-12); }
.mv-pt-16  { padding-top: var(--mv-space-16); }
.mv-pb-0   { padding-bottom: 0; }
.mv-pb-4   { padding-bottom: var(--mv-space-4); }
.mv-pb-6   { padding-bottom: var(--mv-space-6); }
.mv-pb-8   { padding-bottom: var(--mv-space-8); }
.mv-pb-12  { padding-bottom: var(--mv-space-12); }
.mv-pb-16  { padding-bottom: var(--mv-space-16); }

/* --- Margin: All sides --- */
.mv-m-0    { margin: 0; }
.mv-m-1    { margin: var(--mv-space-1); }
.mv-m-2    { margin: var(--mv-space-2); }
.mv-m-3    { margin: var(--mv-space-3); }
.mv-m-4    { margin: var(--mv-space-4); }
.mv-m-5    { margin: var(--mv-space-5); }
.mv-m-6    { margin: var(--mv-space-6); }
.mv-m-8    { margin: var(--mv-space-8); }
.mv-m-10   { margin: var(--mv-space-10); }
.mv-m-12   { margin: var(--mv-space-12); }
.mv-m-16   { margin: var(--mv-space-16); }
.mv-m-auto { margin: auto; }

/* --- Margin: X-axis (inline centering) --- */
.mv-mx-0    { margin-inline: 0; }
.mv-mx-auto { margin-inline: auto; }
.mv-mx-4    { margin-inline: var(--mv-space-4); }
.mv-mx-6    { margin-inline: var(--mv-space-6); }

/* --- Margin: Y-axis (block) --- */
.mv-my-0   { margin-block: 0; }
.mv-my-2   { margin-block: var(--mv-space-2); }
.mv-my-4   { margin-block: var(--mv-space-4); }
.mv-my-6   { margin-block: var(--mv-space-6); }
.mv-my-8   { margin-block: var(--mv-space-8); }
.mv-my-10  { margin-block: var(--mv-space-10); }
.mv-my-12  { margin-block: var(--mv-space-12); }
.mv-my-16  { margin-block: var(--mv-space-16); }

/* --- Margin: Individual sides --- */
.mv-mt-0   { margin-top: 0; }
.mv-mt-2   { margin-top: var(--mv-space-2); }
.mv-mt-4   { margin-top: var(--mv-space-4); }
.mv-mt-6   { margin-top: var(--mv-space-6); }
.mv-mt-8   { margin-top: var(--mv-space-8); }
.mv-mt-12  { margin-top: var(--mv-space-12); }
.mv-mt-16  { margin-top: var(--mv-space-16); }
.mv-mt-auto { margin-top: auto; }
.mv-mb-0   { margin-bottom: 0; }
.mv-mb-2   { margin-bottom: var(--mv-space-2); }
.mv-mb-4   { margin-bottom: var(--mv-space-4); }
.mv-mb-6   { margin-bottom: var(--mv-space-6); }
.mv-mb-8   { margin-bottom: var(--mv-space-8); }
.mv-mb-12  { margin-bottom: var(--mv-space-12); }
.mv-mb-16  { margin-bottom: var(--mv-space-16); }
.mv-ml-auto { margin-left: auto; }

/* ---------------------------------------------------------------
   Responsive Padding
   --------------------------------------------------------------- */
@media (min-width: 768px) {
  .mv-md\:p-4  { padding: var(--mv-space-4); }
  .mv-md\:p-6  { padding: var(--mv-space-6); }
  .mv-md\:p-8  { padding: var(--mv-space-8); }
  .mv-md\:p-10 { padding: var(--mv-space-10); }
  .mv-md\:p-12 { padding: var(--mv-space-12); }
  .mv-md\:px-6 { padding-inline: var(--mv-space-6); }
  .mv-md\:px-8 { padding-inline: var(--mv-space-8); }
  .mv-md\:py-8  { padding-block: var(--mv-space-8); }
  .mv-md\:py-10 { padding-block: var(--mv-space-10); }
  .mv-md\:py-12 { padding-block: var(--mv-space-12); }
  .mv-md\:py-16 { padding-block: var(--mv-space-16); }
  .mv-md\:py-20 { padding-block: var(--mv-space-20); }
}

@media (min-width: 1024px) {
  .mv-lg\:p-6  { padding: var(--mv-space-6); }
  .mv-lg\:p-8  { padding: var(--mv-space-8); }
  .mv-lg\:p-10 { padding: var(--mv-space-10); }
  .mv-lg\:p-12 { padding: var(--mv-space-12); }
  .mv-lg\:p-16 { padding: var(--mv-space-16); }
  .mv-lg\:px-8  { padding-inline: var(--mv-space-8); }
  .mv-lg\:px-12 { padding-inline: var(--mv-space-12); }
  .mv-lg\:py-12 { padding-block: var(--mv-space-12); }
  .mv-lg\:py-16 { padding-block: var(--mv-space-16); }
  .mv-lg\:py-20 { padding-block: var(--mv-space-20); }
  .mv-lg\:py-24 { padding-block: var(--mv-space-24); }
}

/* ---------------------------------------------------------------
   Responsive Margin
   --------------------------------------------------------------- */
@media (min-width: 768px) {
  .mv-md\:mt-8  { margin-top: var(--mv-space-8); }
  .mv-md\:mt-12 { margin-top: var(--mv-space-12); }
  .mv-md\:mb-8  { margin-bottom: var(--mv-space-8); }
  .mv-md\:mb-12 { margin-bottom: var(--mv-space-12); }
  .mv-md\:my-8  { margin-block: var(--mv-space-8); }
  .mv-md\:my-12 { margin-block: var(--mv-space-12); }
}

@media (min-width: 1024px) {
  .mv-lg\:mt-12 { margin-top: var(--mv-space-12); }
  .mv-lg\:mt-16 { margin-top: var(--mv-space-16); }
  .mv-lg\:mb-12 { margin-bottom: var(--mv-space-12); }
  .mv-lg\:mb-16 { margin-bottom: var(--mv-space-16); }
  .mv-lg\:my-16 { margin-block: var(--mv-space-16); }
}
```

---

## 6. Display & Miscellaneous Utilities

```css
/* ================================================================
   utilities.css — Display, Position, Sizing, Misc
   ================================================================ */

/* --- Display --- */
.mv-block        { display: block; }
.mv-inline-block { display: inline-block; }
.mv-inline       { display: inline; }
.mv-hidden       { display: none; }

/* --- Position --- */
.mv-relative { position: relative; }
.mv-absolute { position: absolute; }
.mv-fixed    { position: fixed; }
.mv-sticky   { position: sticky; top: 0; }

/* --- Width & Height --- */
.mv-w-full   { width: 100%; }
.mv-w-auto   { width: auto; }
.mv-h-full   { height: 100%; }
.mv-h-screen { height: 100vh; }
.mv-min-h-screen { min-height: 100vh; }

/* --- Overflow --- */
.mv-overflow-hidden { overflow: hidden; }
.mv-overflow-auto   { overflow: auto; }
.mv-overflow-x-auto { overflow-x: auto; }

/* --- Border Radius --- */
.mv-rounded-sm   { border-radius: var(--mv-radius-sm); }
.mv-rounded-md   { border-radius: var(--mv-radius-md); }
.mv-rounded-lg   { border-radius: var(--mv-radius-lg); }
.mv-rounded-xl   { border-radius: var(--mv-radius-xl); }
.mv-rounded-full { border-radius: var(--mv-radius-full); }

/* --- Shadows --- */
.mv-shadow-sm { box-shadow: var(--mv-shadow-sm); }
.mv-shadow-md { box-shadow: var(--mv-shadow-md); }
.mv-shadow-lg { box-shadow: var(--mv-shadow-lg); }
.mv-shadow-xl { box-shadow: var(--mv-shadow-xl); }
.mv-shadow-none { box-shadow: none; }

/* --- Background Colors --- */
.mv-bg-primary         { background-color: var(--mv-bg); }
.mv-bg-surface         { background-color: var(--mv-surface); }
.mv-bg-surface-elevated { background-color: var(--mv-surface-elevated); }
.mv-bg-brand           { background-color: var(--mv-primary); }
.mv-bg-brand-light     { background-color: var(--mv-primary-light); }
.mv-bg-gold            { background-color: var(--mv-secondary); }
.mv-bg-tech            { background-color: var(--mv-tertiary); }

/* --- Border --- */
.mv-border     { border: 1px solid var(--mv-neutral-200); }
.mv-border-t   { border-top: 1px solid var(--mv-neutral-200); }
.mv-border-b   { border-bottom: 1px solid var(--mv-neutral-200); }

/* --- Cursor --- */
.mv-cursor-pointer { cursor: pointer; }
.mv-cursor-not-allowed { cursor: not-allowed; }

/* --- SR Only (screen reader) --- */
.mv-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

## 7. Theme Toggle System

### 7.1 JavaScript — ThemeManager Class

```javascript
/* ================================================================
   theme-manager.js — Memo Valdez
   
   Manages light / dark / system theme with:
   - localStorage persistence
   - prefers-color-scheme detection
   - Smooth transitions between themes
   - Accessible toggle UI
   ================================================================ */

class ThemeManager {
  constructor() {
    this.STORAGE_KEY = 'mv-theme';
    this.THEMES = ['light', 'dark', 'system'];
    this.currentTheme = this.getStoredTheme() || 'system';
    
    // Apply theme immediately (before DOM ready to prevent flash)
    this.applyTheme(this.currentTheme);
    
    // Listen for system theme changes
    this.systemMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.systemMediaQuery.addEventListener('change', () => {
      if (this.currentTheme === 'system') {
        this.applyTheme('system');
      }
    });
  }

  /**
   * Get the stored theme preference from localStorage.
   * @returns {string|null} 'light', 'dark', 'system', or null
   */
  getStoredTheme() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return this.THEMES.includes(stored) ? stored : null;
    } catch {
      return null;
    }
  }

  /**
   * Resolve what the effective theme should be.
   * @param {string} theme - 'light', 'dark', or 'system'
   * @returns {string} 'light' or 'dark'
   */
  resolveTheme(theme) {
    if (theme === 'system') {
      return this.systemMediaQuery.matches ? 'dark' : 'light';
    }
    return theme;
  }

  /**
   * Apply theme to the document.
   * @param {string} theme - 'light', 'dark', or 'system'
   */
  applyTheme(theme) {
    this.currentTheme = theme;
    const resolved = this.resolveTheme(theme);
    
    // Set data-theme attribute on <html>
    document.documentElement.setAttribute('data-theme', resolved);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        resolved === 'dark' ? '#131110' : '#FEFEFE'
      );
    }

    // Persist choice
    try {
      localStorage.setItem(this.STORAGE_KEY, theme);
    } catch {
      // localStorage unavailable — fail silently
    }

    // Update toggle UI active states
    this.updateToggleUI(theme);
    
    // Dispatch custom event for other components
    window.dispatchEvent(
      new CustomEvent('mv-theme-change', {
        detail: { theme, resolved }
      })
    );
  }

  /**
   * Cycle to the next theme: light → dark → system → light
   */
  toggle() {
    const index = this.THEMES.indexOf(this.currentTheme);
    const next = this.THEMES[(index + 1) % this.THEMES.length];
    this.applyTheme(next);
  }

  /**
   * Set a specific theme.
   * @param {string} theme - 'light', 'dark', or 'system'
   */
  setTheme(theme) {
    if (this.THEMES.includes(theme)) {
      this.applyTheme(theme);
    }
  }

  /**
   * Update toggle button active states.
   * @param {string} activeTheme - Currently active theme
   */
  updateToggleUI(activeTheme) {
    const buttons = document.querySelectorAll('[data-mv-theme]');
    buttons.forEach(btn => {
      const isActive = btn.getAttribute('data-mv-theme') === activeTheme;
      btn.classList.toggle('mv-theme-toggle__btn--active', isActive);
      btn.setAttribute('aria-checked', isActive ? 'true' : 'false');
    });
  }

  /**
   * Get current theme info.
   * @returns {{ theme: string, resolved: string }}
   */
  getTheme() {
    return {
      theme: this.currentTheme,
      resolved: this.resolveTheme(this.currentTheme)
    };
  }
}

// ----------------------------------------------------------------
// Initialize on load
// ----------------------------------------------------------------
const themeManager = new ThemeManager();

// Bind click handlers when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-mv-theme]').forEach(btn => {
    btn.addEventListener('click', () => {
      themeManager.setTheme(btn.getAttribute('data-mv-theme'));
    });
  });
});
```

### 7.2 HTML — Toggle Markup

```html
<!-- Meta tag for mobile browser chrome -->
<meta name="theme-color" content="#131110">

<!-- 
  Theme Toggle — Accessible Radio Group
  Place in navbar or settings panel.
-->
<div
  class="mv-theme-toggle"
  role="radiogroup"
  aria-label="Seleccionar tema de color"
>
  <button
    class="mv-theme-toggle__btn"
    data-mv-theme="light"
    role="radio"
    aria-checked="false"
    aria-label="Tema claro"
    title="Tema claro"
  >
    <!-- Sun icon (Lucide) -->
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
         stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2"/>
      <path d="M12 20v2"/>
      <path d="m4.93 4.93 1.41 1.41"/>
      <path d="m17.66 17.66 1.41 1.41"/>
      <path d="M2 12h2"/>
      <path d="M20 12h2"/>
      <path d="m6.34 17.66-1.41 1.41"/>
      <path d="m19.07 4.93-1.41 1.41"/>
    </svg>
  </button>

  <button
    class="mv-theme-toggle__btn"
    data-mv-theme="system"
    role="radio"
    aria-checked="false"
    aria-label="Tema del sistema"
    title="Seguir preferencia del sistema"
  >
    <!-- Monitor icon (Lucide) -->
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
         stroke-linejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8"/>
      <path d="M12 17v4"/>
    </svg>
  </button>

  <button
    class="mv-theme-toggle__btn mv-theme-toggle__btn--active"
    data-mv-theme="dark"
    role="radio"
    aria-checked="true"
    aria-label="Tema oscuro"
    title="Tema oscuro"
  >
    <!-- Moon icon (Lucide) -->
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
         stroke-linejoin="round" aria-hidden="true">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
    </svg>
  </button>
</div>
```

### 7.3 CSS — Toggle Component Styles

```css
/* ================================================================
   components.css — Theme Toggle
   ================================================================ */

.mv-theme-toggle {
  display: inline-flex;
  align-items: center;
  gap: var(--mv-space-1);
  background: var(--mv-surface);
  border-radius: var(--mv-radius-full);
  padding: var(--mv-space-1);
  border: 1px solid var(--mv-neutral-200);
}

.mv-theme-toggle__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: var(--mv-radius-full);
  background: transparent;
  color: var(--mv-text-tertiary);
  cursor: pointer;
  transition: var(--mv-transition-fast);
}

.mv-theme-toggle__btn:hover {
  color: var(--mv-text-primary);
  background: var(--mv-neutral-100);
}

.mv-theme-toggle__btn--active {
  color: var(--mv-primary);
  background: var(--mv-surface-elevated);
  box-shadow: var(--mv-shadow-sm);
}

.mv-theme-toggle__btn:focus-visible {
  box-shadow: var(--mv-focus-ring);
  outline: none;
}

/* --- Inline Script for Flash Prevention --- */
/*
  Add this <script> in <head> BEFORE any CSS:
  
  <script>
    (function(){
      var t = localStorage.getItem('mv-theme');
      if (t === 'dark' || t === 'light') {
        document.documentElement.setAttribute('data-theme', t);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    })();
  </script>
*/
```

---

## 8. Naming Conventions

### 8.1 Class Naming Rules

| Tipo | Pattern | Ejemplo |
|------|---------|---------|
| **Component** | `.mv-{component}` | `.mv-card`, `.mv-btn`, `.mv-nav` |
| **Component element** (BEM) | `.mv-{component}__{element}` | `.mv-card__header`, `.mv-nav__link` |
| **Component modifier** (BEM) | `.mv-{component}--{modifier}` | `.mv-card--elevated`, `.mv-btn--outline` |
| **Utility** | `.mv-{property}-{value}` | `.mv-p-4`, `.mv-text-lg`, `.mv-flex` |
| **Responsive utility** | `.mv-{breakpoint}\:{utility}` | `.mv-md\:p-8`, `.mv-lg\:grid-cols-3` |
| **State** | `.mv-{component}.is-{state}` | `.mv-nav.is-open`, `.mv-input.is-error` |

### 8.2 Component BEM Examples

```css
/* Card */
.mv-card { }
.mv-card__header { }
.mv-card__body { }
.mv-card__footer { }
.mv-card__image { }
.mv-card__title { }
.mv-card__meta { }
.mv-card--elevated { }
.mv-card--horizontal { }
.mv-card--featured { }

/* Button */
.mv-btn { }
.mv-btn__icon { }
.mv-btn__label { }
.mv-btn--primary { }
.mv-btn--secondary { }
.mv-btn--outline { }
.mv-btn--ghost { }
.mv-btn--sm { }
.mv-btn--lg { }

/* Navigation */
.mv-nav { }
.mv-nav__list { }
.mv-nav__item { }
.mv-nav__link { }
.mv-nav__toggle { }
.mv-nav--mobile { }
.mv-nav.is-open { }

/* Badge */
.mv-badge { }
.mv-badge--success { }
.mv-badge--warning { }
.mv-badge--info { }
.mv-badge--tech { }
.mv-badge--music { }
```

### 8.3 Custom Property Naming

```
--mv-{category}-{property}[-{variant}]

Examples:
  --mv-primary              (color)
  --mv-primary-light        (color variant)
  --mv-text-xl              (typography size)
  --mv-font-bold            (typography weight)
  --mv-space-8              (spacing)
  --mv-shadow-lg            (elevation)
  --mv-radius-md            (shape)
  --mv-duration-normal      (motion)
  --mv-ease-spring          (motion curve)
  --mv-z-modal              (z-index)
```

---

## 9. Estructura de Archivos Recomendada

```
memo-valdez-css/
│
├── css/
│   ├── tokens.css              ← Variables :root y [data-theme="dark"]
│   │                              Incluye: colores, tipografía, spacing,
│   │                              sombras, radii, breakpoints, transiciones,
│   │                              z-index, focus ring
│   │
│   ├── reset.css               ← Normalize + base styles
│   │                              Incluye: box-sizing, margin reset,
│   │                              font smoothing, ::selection (terracota),
│   │                              scroll-behavior, color-scheme,
│   │                              theme transition global
│   │
│   ├── layout.css              ← Grid, container, flex, layout patterns
│   │                              Incluye: .mv-container (+narrow/wide/full),
│   │                              .mv-grid (12col), .mv-flex, .mv-stack,
│   │                              .mv-cluster, .mv-with-sidebar, .mv-section
│   │
│   ├── typography.css          ← Clases de texto
│   │                              Incluye: .mv-text-{size}, .mv-font-{family},
│   │                              .mv-font-{weight}, .mv-h1–h4, .mv-display,
│   │                              .mv-overline, .mv-prose, .mv-tracking-*,
│   │                              .mv-leading-*
│   │
│   ├── utilities.css           ← Spacing, display, visibility, misc
│   │                              Incluye: .mv-p-*, .mv-m-*, .mv-gap-*,
│   │                              responsive variants (.mv-md:*, .mv-lg:*),
│   │                              display, position, rounded, shadow,
│   │                              bg colors, borders, .mv-sr-only
│   │
│   ├── components.css          ← Componentes UI
│   │                              Incluye: .mv-btn, .mv-card, .mv-nav,
│   │                              .mv-input, .mv-badge, .mv-theme-toggle,
│   │                              (expandir según necesidades del proyecto)
│   │
│   └── main.css                ← Import hub + project overrides
│                                  @import todos los anteriores en orden
│
├── js/
│   └── theme-manager.js        ← ThemeManager class
│                                  localStorage, prefers-color-scheme,
│                                  light/dark/system toggle
│
└── index.html                  ← Template base con:
                                   Google Fonts link, meta theme-color,
                                   flash-prevention script, toggle markup
```

### 9.1 `main.css` — Import Order

```css
/* ================================================================
   main.css — Memo Valdez CSS Architecture
   
   Import order matters:
   1. Tokens first (variables available to all)
   2. Reset (normalize browser defaults)
   3. Layout (structural patterns)
   4. Typography (text system)
   5. Utilities (atomic helpers)
   6. Components (UI components — can use all above)
   ================================================================ */

@import 'tokens.css';
@import 'reset.css';
@import 'layout.css';
@import 'typography.css';
@import 'utilities.css';
@import 'components.css';

/* ---------------------------------------------------------------
   PROJECT OVERRIDES
   Add project-specific styles below this line.
   --------------------------------------------------------------- */
```

### 9.2 Google Fonts — `<head>` Implementation

```html
<!DOCTYPE html>
<html lang="es" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#131110">
  
  <!-- Flash prevention: set theme before paint -->
  <script>
    (function(){
      var t = localStorage.getItem('mv-theme');
      if (t === 'dark' || t === 'light') {
        document.documentElement.setAttribute('data-theme', t);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    })();
  </script>
  
  <!-- Google Fonts: Display + Body + Serif + Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,700;1,6..96,400&family=Instrument+Sans:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet">
  
  <!-- CSS Architecture -->
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <!-- Theme Toggle in navbar -->
  <!-- ... content ... -->
  
  <!-- Theme Manager -->
  <script src="js/theme-manager.js"></script>
</body>
</html>
```

---

## 10. Referencia Rápida — Componentes Base

### 10.1 Botón Primario

```css
.mv-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--mv-space-2);
  font-family: var(--mv-font-body);
  font-size: var(--mv-text-sm);
  font-weight: var(--mv-font-semibold);
  line-height: 1;
  padding: var(--mv-space-3) var(--mv-space-6);
  border: 2px solid transparent;
  border-radius: var(--mv-radius-md);
  cursor: pointer;
  transition: var(--mv-transition-fast);
  text-decoration: none;
  /* Touch target: mínimo 44×44px */
  min-height: 44px;
  min-width: 44px;
}

.mv-btn--primary {
  background: var(--mv-primary);
  color: var(--mv-text-inverse);
  box-shadow: var(--mv-shadow-sm);
}

.mv-btn--primary:hover {
  background: var(--mv-primary-dark);
  box-shadow: var(--mv-shadow-md);
  transform: translateY(-1px);
}

.mv-btn--primary:active {
  transform: translateY(0);
  box-shadow: var(--mv-shadow-sm);
}

.mv-btn--primary:focus-visible {
  box-shadow: var(--mv-focus-ring);
  outline: none;
}

.mv-btn--primary:disabled {
  background: var(--mv-neutral-300);
  color: var(--mv-neutral-500);
  box-shadow: none;
  cursor: not-allowed;
  transform: none;
}

/* Outline variant */
.mv-btn--outline {
  background: transparent;
  color: var(--mv-primary);
  border-color: var(--mv-primary);
}

.mv-btn--outline:hover {
  background: var(--mv-primary);
  color: var(--mv-text-inverse);
}

/* Ghost variant */
.mv-btn--ghost {
  background: transparent;
  color: var(--mv-text-primary);
}

.mv-btn--ghost:hover {
  background: var(--mv-neutral-100);
}

/* Size variants */
.mv-btn--sm {
  font-size: var(--mv-text-xs);
  padding: var(--mv-space-2) var(--mv-space-4);
  min-height: 36px;
}

.mv-btn--lg {
  font-size: var(--mv-text-base);
  padding: var(--mv-space-4) var(--mv-space-8);
  min-height: 52px;
}
```

### 10.2 Card

```css
.mv-card {
  background: var(--mv-surface);
  border-radius: var(--mv-radius-lg);
  padding: var(--mv-space-6);
  box-shadow: var(--mv-shadow-sm);
  transition: var(--mv-transition-normal);
  overflow: hidden;
}

.mv-card:hover {
  box-shadow: var(--mv-shadow-md);
  transform: translateY(-2px);
}

.mv-card--elevated {
  background: var(--mv-surface-elevated);
  box-shadow: var(--mv-shadow-md);
}

.mv-card--elevated:hover {
  box-shadow: var(--mv-shadow-lg);
}

.mv-card__image {
  margin: calc(-1 * var(--mv-space-6));
  margin-bottom: var(--mv-space-4);
}

.mv-card__image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.mv-card__header {
  margin-bottom: var(--mv-space-3);
}

.mv-card__title {
  font-family: var(--mv-font-display);
  font-size: var(--mv-text-xl);
  font-weight: var(--mv-font-semibold);
  color: var(--mv-text-primary);
}

.mv-card__meta {
  font-size: var(--mv-text-sm);
  color: var(--mv-text-tertiary);
  margin-top: var(--mv-space-1);
}

.mv-card__body {
  font-size: var(--mv-text-base);
  color: var(--mv-text-secondary);
  line-height: var(--mv-leading-normal);
}

.mv-card__footer {
  margin-top: var(--mv-space-4);
  padding-top: var(--mv-space-4);
  border-top: 1px solid var(--mv-neutral-200);
}
```

### 10.3 Input

```css
.mv-input {
  width: 100%;
  background: var(--mv-surface-elevated);
  color: var(--mv-text-primary);
  font-family: var(--mv-font-body);
  font-size: var(--mv-text-base);
  padding: var(--mv-space-3) var(--mv-space-4);
  border: 1px solid var(--mv-neutral-300);
  border-radius: var(--mv-radius-sm);
  transition: var(--mv-transition-fast);
  min-height: 44px; /* Touch target */
}

.mv-input:hover {
  border-color: var(--mv-neutral-400);
}

.mv-input:focus {
  border-color: var(--mv-primary);
  box-shadow: var(--mv-focus-ring);
  outline: none;
}

.mv-input::placeholder {
  color: var(--mv-text-tertiary);
}

.mv-input.is-error {
  border-color: var(--mv-error);
}

.mv-input.is-error:focus {
  box-shadow: 0 0 0 2px var(--mv-bg), 0 0 0 4px var(--mv-error);
}

/* Label */
.mv-label {
  display: block;
  font-size: var(--mv-text-sm);
  font-weight: var(--mv-font-medium);
  color: var(--mv-text-secondary);
  margin-bottom: var(--mv-space-2);
}

/* Help text */
.mv-help-text {
  font-size: var(--mv-text-xs);
  color: var(--mv-text-tertiary);
  margin-top: var(--mv-space-1);
}

.mv-help-text.is-error {
  color: var(--mv-error-dark);
}
```

### 10.4 Badge

```css
.mv-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--mv-space-1);
  font-family: var(--mv-font-body);
  font-size: var(--mv-text-xs);
  font-weight: var(--mv-font-medium);
  padding: var(--mv-space-1) var(--mv-space-2);
  border-radius: var(--mv-radius-sm);
  line-height: 1;
  white-space: nowrap;
}

.mv-badge--music {
  background: rgba(184, 92, 56, 0.12);
  color: var(--mv-primary);
}

.mv-badge--tech {
  background: rgba(61, 90, 115, 0.12);
  color: var(--mv-tertiary);
}

.mv-badge--success {
  background: rgba(74, 124, 89, 0.12);
  color: var(--mv-success);
}

.mv-badge--warning {
  background: rgba(212, 168, 67, 0.12);
  color: var(--mv-warning);
}

.mv-badge--info {
  background: rgba(74, 111, 165, 0.12);
  color: var(--mv-info);
}
```

---

## Apéndice: Accessibility Checklist

| Criterio | Implementación |
|----------|----------------|
| **Color contrast** | WCAG AA mínimo en todas las combinaciones funcionales. AAA en texto primario. |
| **Focus visible** | `--mv-focus-ring` aplicado via `:focus-visible` en todos los elementos interactivos. |
| **Touch targets** | Mínimo 44×44px en todos los botones, links e inputs en mobile. |
| **Reduced motion** | `prefers-reduced-motion: reduce` elimina todas las transiciones. |
| **Color scheme** | `color-scheme: dark` declarado para scrollbars y form controls nativos. |
| **Screen reader** | `.mv-sr-only` disponible para texto solo de asistencia. |
| **Theme toggle** | `role="radiogroup"`, `aria-label`, `aria-checked` en toggle de tema. |
| **Selection** | `::selection` con colores de marca para retroalimentación visual. |

---

*Documento generado como Fase 4 del pipeline de brandbook para la marca personal "Memo Valdez".*  
*Siguiente fase: Prototipo de landing page con esta arquitectura CSS.*
