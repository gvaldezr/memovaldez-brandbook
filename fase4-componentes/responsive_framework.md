# Responsive Framework — Memo Valdez

> **Fase:** 4 · Componentes de Implementación  
> **Fecha:** 22 de septiembre de 2026  
> **Versión:** 1.0  
> **Construido sobre:** CSS Architecture v1.0, Design Tokens v1.0, Visual Narrative v1.0  
> **Estrategia:** Mobile-first · 82% de usuarios en dark mode son mobile

---

## Filosofía Responsive

> **"La experiencia en teléfono es tan importante como en desktop."** — Como un ensamble que suena bien en una sala íntima de 50 personas y también en un auditorio de 2,000. La música es la misma. El espacio cambia. La adaptación es natural.

### Principios

1. **Mobile-first** — Los estilos base son mobile. Se escala hacia arriba.
2. **Content-driven** — Los breakpoints sirven al contenido, no al revés.
3. **Touch-native** — Targets de 44×44px mínimo. Gestos naturales.
4. **Progressive enhancement** — Cada breakpoint agrega, nunca quita funcionalidad core.
5. **"El espacio entre las notas"** — En mobile, el whitespace se reduce proporcionalmente pero nunca desaparece.

---

## 1. Breakpoints Definidos

### 1.1 Tabla de Breakpoints

| Token | Min-width | Nombre | Rango típico | Container max-width | Columnas grid |
|-------|-----------|--------|--------------|---------------------|---------------|
| (base) | 0–639px | **Mobile** | iPhone SE → iPhone Pro Max | 100% (padding: 20px) | 1 (máx 2) |
| `sm` | 640px | **Mobile Landscape / Tablet Small** | Landscape phones, tablets pequeños | 100% (padding: 24px) | 2 |
| `md` | 768px | **Tablet Portrait** | iPad Mini, iPad | 720px (padding: 24px) | 2–3 |
| `lg` | 1024px | **Desktop** | Laptops, iPad Landscape | 960px (padding: 32px) | 3–4 |
| `xl` | 1280px | **Desktop Wide** | Monitores estándar | 1140px (padding: 32px) | 3–4 |
| `2xl` | 1536px | **Ultra-wide** | Monitores grandes | 1320px (padding: 32px) | 4+ |

### 1.2 Media Queries — Copy-Paste Ready

```css
/* ================================================================
   BREAKPOINTS — Mobile First
   Base styles = mobile (0–639px)
   ================================================================ */

/* Small: Mobile landscape / Tablet small */
@media (min-width: 640px) { /* sm */ }

/* Medium: Tablet portrait */
@media (min-width: 768px) { /* md */ }

/* Large: Desktop */
@media (min-width: 1024px) { /* lg */ }

/* Extra Large: Wide desktop */
@media (min-width: 1280px) { /* xl */ }

/* 2X Large: Ultra-wide */
@media (min-width: 1536px) { /* 2xl */ }

/* ================================================================
   SPECIAL QUERIES
   ================================================================ */

/* Touch devices */
@media (hover: none) and (pointer: coarse) {
  /* Increase touch targets, remove hover-dependent interactions */
}

/* Mouse/trackpad devices */
@media (hover: hover) and (pointer: fine) {
  /* Enable hover effects, smaller click targets OK */
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  /* Disable animations and transitions */
}

/* Dark mode system preference */
@media (prefers-color-scheme: dark) {
  /* Auto-apply dark theme when no explicit choice */
}

/* High contrast */
@media (prefers-contrast: high) {
  /* Increase borders, remove subtle shadows */
}

/* Print */
@media print {
  /* Simplify layout, force light mode, hide nav/footer */
}
```

---

## 2. Comportamiento por Componente

### 2.1 Navbar

```
┌──────────────────────────────────────────────────────────────────┐
│  MOBILE (< 768px)                                                │
│                                                                  │
│  ┌──────────────────────────────────────┐                       │
│  │  MEMO VALDEZ          [☰] [🌙]     │  ← Fixed top           │
│  └──────────────────────────────────────┘                       │
│       │                                                          │
│       ▼ (on hamburger tap)                                       │
│  ┌──────────────────────────────────────┐                       │
│  │  Música                              │  ← Full-width drawer  │
│  │  Tecnología                          │    Slide down          │
│  │  Sobre mí                            │    Links: 48px height  │
│  │  Blog                                │    Font: text-lg       │
│  │  Contacto                            │                       │
│  └──────────────────────────────────────┘                       │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  DESKTOP (≥ 1024px)                                              │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  MEMO VALDEZ    Música  Tech  Sobre mí  Blog    [🌙]   │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  Horizontal nav · Links inline · Theme toggle visible            │
│  Hamburger hidden · Sticky on scroll                             │
└──────────────────────────────────────────────────────────────────┘
```

```css
/* --- Navbar Responsive --- */
.mv-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--mv-z-fixed);
  background: var(--mv-bg);
  border-bottom: 1px solid var(--mv-neutral-200);
  padding: var(--mv-space-3) var(--mv-space-5);
}

.mv-nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1140px;
  margin-inline: auto;
}

.mv-nav__brand {
  font-family: var(--mv-font-display);
  font-size: var(--mv-text-lg);
  font-weight: var(--mv-font-bold);
  color: var(--mv-text-primary);
  letter-spacing: var(--mv-tracking-wide);
}

/* Mobile: hamburger visible, links hidden */
.mv-nav__toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  color: var(--mv-text-primary);
  cursor: pointer;
}

.mv-nav__list {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--mv-bg);
  border-bottom: 1px solid var(--mv-neutral-200);
  padding: var(--mv-space-4) var(--mv-space-5);
  flex-direction: column;
  gap: var(--mv-space-1);
}

.mv-nav.is-open .mv-nav__list {
  display: flex;
}

.mv-nav__link {
  display: flex;
  align-items: center;
  height: 48px; /* Touch target */
  font-size: var(--mv-text-lg);
  color: var(--mv-text-secondary);
  padding: var(--mv-space-2) var(--mv-space-3);
  border-radius: var(--mv-radius-md);
  transition: var(--mv-transition-fast);
}

.mv-nav__link:hover,
.mv-nav__link.is-active {
  color: var(--mv-primary);
  background: var(--mv-surface);
}

/* Desktop: inline nav, no hamburger */
@media (min-width: 1024px) {
  .mv-nav {
    padding: var(--mv-space-4) var(--mv-space-8);
  }

  .mv-nav__toggle {
    display: none;
  }

  .mv-nav__list {
    display: flex;
    position: static;
    flex-direction: row;
    align-items: center;
    gap: var(--mv-space-1);
    background: transparent;
    border: none;
    padding: 0;
  }

  .mv-nav__link {
    height: auto;
    font-size: var(--mv-text-sm);
    font-weight: var(--mv-font-medium);
    padding: var(--mv-space-2) var(--mv-space-3);
  }
}
```

### 2.2 Cards Grid

```
┌──────────────────────────────────────────────────────────────────┐
│  MOBILE (< 640px)         — 1 column stack                      │
│                                                                  │
│  ┌──────────────────────────┐                                   │
│  │         Card 1           │                                   │
│  └──────────────────────────┘                                   │
│  ┌──────────────────────────┐                                   │
│  │         Card 2           │                                   │
│  └──────────────────────────┘                                   │
│  ┌──────────────────────────┐                                   │
│  │         Card 3           │                                   │
│  └──────────────────────────┘                                   │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  TABLET (768px–1023px)     — 2 columns                          │
│                                                                  │
│  ┌────────────┐  ┌────────────┐                                 │
│  │   Card 1   │  │   Card 2   │                                 │
│  └────────────┘  └────────────┘                                 │
│  ┌────────────┐  ┌────────────┐                                 │
│  │   Card 3   │  │   Card 4   │                                 │
│  └────────────┘  └────────────┘                                 │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  DESKTOP (≥ 1024px)        — 3 columns                          │
│                                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                      │
│  │  Card 1  │  │  Card 2  │  │  Card 3  │                      │
│  └──────────┘  └──────────┘  └──────────┘                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                      │
│  │  Card 4  │  │  Card 5  │  │  Card 6  │                      │
│  └──────────┘  └──────────┘  └──────────┘                      │
└──────────────────────────────────────────────────────────────────┘
```

```css
/* --- Cards Grid Responsive --- */
.mv-card-grid {
  display: grid;
  grid-template-columns: 1fr; /* Mobile: 1 col */
  gap: var(--mv-space-6);
}

@media (min-width: 640px) {
  .mv-card-grid {
    grid-template-columns: repeat(2, 1fr); /* sm: 2 col */
  }
}

@media (min-width: 1024px) {
  .mv-card-grid {
    grid-template-columns: repeat(3, 1fr); /* lg: 3 col */
    gap: var(--mv-space-8);
  }
}

/* Featured card: span 2 columns on tablet+ */
.mv-card-grid .mv-card--featured {
  grid-column: 1 / -1;
}

@media (min-width: 768px) {
  .mv-card-grid .mv-card--featured {
    grid-column: span 2;
  }
}

/* Card padding scales */
.mv-card {
  padding: var(--mv-space-5); /* Mobile: 20px */
}

@media (min-width: 768px) {
  .mv-card {
    padding: var(--mv-space-6); /* Tablet: 24px */
  }
}

@media (min-width: 1024px) {
  .mv-card {
    padding: var(--mv-space-8); /* Desktop: 32px */
  }
}
```

### 2.3 Typography Scale-Down

| Element | Desktop (≥1024px) | Tablet (768–1023px) | Mobile (< 768px) |
|---------|-------------------|---------------------|-------------------|
| `.mv-display` | 3.5rem (56px) | 2.5rem (40px) | 2rem (32px) |
| `.mv-h1` | 2.5rem (40px) | 2rem (32px) | 1.875rem (30px) |
| `.mv-h2` | 1.875rem (30px) | 1.5rem (24px) | 1.5rem (24px) |
| `.mv-h3` | 1.5rem (24px) | 1.25rem (20px) | 1.25rem (20px) |
| `.mv-h4` | 1.25rem (20px) | 1.125rem (18px) | 1.125rem (18px) |
| `.mv-text-base` | 1rem (16px) | 1rem (16px) | 1rem (16px) |
| `.mv-text-sm` | 0.875rem (14px) | 0.875rem (14px) | 0.875rem (14px) |

```css
/* --- Typography Responsive Scale --- */

/* Base = mobile */
.mv-display { font-size: 2rem; }      /* 32px mobile */
.mv-h1      { font-size: 1.875rem; }  /* 30px mobile */
.mv-h2      { font-size: 1.5rem; }    /* 24px mobile */
.mv-h3      { font-size: 1.25rem; }   /* 20px mobile */
.mv-h4      { font-size: 1.125rem; }  /* 18px mobile */

@media (min-width: 768px) {
  .mv-display { font-size: 2.5rem; }    /* 40px tablet */
  .mv-h1      { font-size: 2rem; }      /* 32px tablet */
  .mv-h2      { font-size: 1.5rem; }    /* 24px tablet */
  .mv-h3      { font-size: 1.25rem; }   /* 20px tablet */
  .mv-h4      { font-size: 1.125rem; }  /* 18px tablet */
}

@media (min-width: 1024px) {
  .mv-display { font-size: var(--mv-text-5xl); }  /* 56px desktop */
  .mv-h1      { font-size: var(--mv-text-4xl); }  /* 40px desktop */
  .mv-h2      { font-size: var(--mv-text-3xl); }  /* 30px desktop */
  .mv-h3      { font-size: var(--mv-text-2xl); }  /* 24px desktop */
  .mv-h4      { font-size: var(--mv-text-xl); }   /* 20px desktop */
}

/* Body text: consistent across breakpoints (no scale-down needed) */
/* The base 16px is optimized for readability at all sizes */

/* Long-form prose: constrain width for optimal line length */
.mv-prose {
  max-width: 100%; /* Mobile: full width */
}

@media (min-width: 768px) {
  .mv-prose {
    max-width: 680px; /* ~65-75 chars per line — optimal readability */
  }
}
```

### 2.4 Spacing Scale-Down

| Contexto | Desktop | Tablet | Mobile | Ratio |
|----------|---------|--------|--------|-------|
| **Section padding (block)** | 96px (`--mv-space-24`) | 80px (`--mv-space-20`) | 64px (`--mv-space-16`) | 1.0 → 0.83 → 0.67 |
| **Container padding (inline)** | 32px (`--mv-space-8`) | 24px (`--mv-space-6`) | 20px (`--mv-space-5`) | – |
| **Card grid gap** | 32px (`--mv-space-8`) | 24px (`--mv-space-6`) | 24px (`--mv-space-6`) | – |
| **Card internal padding** | 32px (`--mv-space-8`) | 24px (`--mv-space-6`) | 20px (`--mv-space-5`) | – |
| **Heading margin-top** | 48px (`--mv-space-12`) | 40px (`--mv-space-10`) | 32px (`--mv-space-8`) | – |
| **Paragraph spacing** | 16px (`--mv-space-4`) | 16px (`--mv-space-4`) | 16px (`--mv-space-4`) | No change |

```css
/* --- Section spacing responsive --- */
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

/* --- Hero section: extra generous --- */
.mv-hero {
  padding-block: var(--mv-space-20); /* 80px mobile */
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 768px) {
  .mv-hero {
    padding-block: var(--mv-space-24); /* 96px tablet */
    min-height: 70vh;
  }
}

@media (min-width: 1024px) {
  .mv-hero {
    min-height: 80vh;
  }
}
```

### 2.5 Footer

```
┌──────────────────────────────────────────────────────────────────┐
│  MOBILE (< 768px) — Stacked vertical                            │
│                                                                  │
│  ┌──────────────────────────┐                                   │
│  │  MEMO VALDEZ             │                                   │
│  │  Músico · Tech · Mentor  │                                   │
│  │                          │                                   │
│  │  Navegación              │                                   │
│  │  ─────────               │                                   │
│  │  Música                  │                                   │
│  │  Tecnología              │                                   │
│  │  Sobre mí                │                                   │
│  │  Blog                    │                                   │
│  │                          │                                   │
│  │  Contacto                │                                   │
│  │  ─────────               │                                   │
│  │  email@memo.com          │                                   │
│  │  LinkedIn · Instagram    │                                   │
│  │                          │                                   │
│  │  ──────────────────────  │                                   │
│  │  © 2026 Memo Valdez      │                                   │
│  └──────────────────────────┘                                   │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  DESKTOP (≥ 1024px) — Multi-column                               │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  MEMO VALDEZ        Navegación    Contenido    Contacto  │   │
│  │  Músico · Tech ·    Música        Blog         Email     │   │
│  │  Mentor             Tecnología    Newsletter   LinkedIn  │   │
│  │                     Sobre mí      Podcast      Instagram │   │
│  │                     Portfolio                   YouTube   │   │
│  │                                                          │   │
│  │  ─────────────────────────────────────────────────────── │   │
│  │  © 2026 Memo Valdez                    Mérida, Yucatán  │   │
│  └──────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────┘
```

```css
/* --- Footer Responsive --- */
.mv-footer {
  background: var(--mv-surface);
  border-top: 1px solid var(--mv-neutral-200);
  padding: var(--mv-space-12) var(--mv-space-5); /* Mobile */
}

.mv-footer__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--mv-space-8);
}

@media (min-width: 640px) {
  .mv-footer__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .mv-footer {
    padding: var(--mv-space-16) var(--mv-space-8);
  }

  .mv-footer__grid {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: var(--mv-space-10);
  }
}

.mv-footer__brand {
  font-family: var(--mv-font-display);
  font-size: var(--mv-text-lg);
  font-weight: var(--mv-font-bold);
  margin-bottom: var(--mv-space-2);
}

.mv-footer__tagline {
  font-size: var(--mv-text-sm);
  color: var(--mv-text-secondary);
}

.mv-footer__heading {
  font-size: var(--mv-text-sm);
  font-weight: var(--mv-font-semibold);
  color: var(--mv-text-primary);
  margin-bottom: var(--mv-space-3);
  letter-spacing: var(--mv-tracking-wide);
  text-transform: uppercase;
}

.mv-footer__link {
  display: block;
  font-size: var(--mv-text-sm);
  color: var(--mv-text-secondary);
  padding: var(--mv-space-1) 0;
  min-height: 44px; /* Touch target on mobile */
  display: flex;
  align-items: center;
}

@media (min-width: 1024px) {
  .mv-footer__link {
    min-height: auto; /* Relaxed on desktop */
  }
}

.mv-footer__link:hover {
  color: var(--mv-primary);
}

.mv-footer__bottom {
  margin-top: var(--mv-space-8);
  padding-top: var(--mv-space-6);
  border-top: 1px solid var(--mv-neutral-200);
  font-size: var(--mv-text-xs);
  color: var(--mv-text-tertiary);
}

@media (min-width: 1024px) {
  .mv-footer__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
```

---

## 3. Touch Targets

### 3.1 Minimum Size Rules

| Element | Mínimo | Recomendado | Notas |
|---------|--------|-------------|-------|
| Botones | 44×44px | 48×48px | WCAG 2.5.8 Level AAA |
| Links en navegación | 44×44px | 48×48px | Padding para aumentar hit area |
| Inputs / Selects | 44px height | 48px height | Full width en mobile |
| Checkboxes / Radios | 44×44px | — | Incluir label como parte del target |
| Icons interactivos | 44×44px | — | Padding invisible alrededor del SVG |
| Cards interactivas | N/A | — | Toda la card es clickeable |
| Close buttons | 44×44px | — | Esquinas de modal/drawer |

### 3.2 Touch Target CSS

```css
/* --- Touch Targets: Base --- */
@media (hover: none) and (pointer: coarse) {
  /* Increase all interactive element targets on touch devices */
  
  .mv-btn {
    min-height: 48px;
    min-width: 48px;
  }

  .mv-nav__link {
    min-height: 48px;
    padding: var(--mv-space-3) var(--mv-space-4);
  }

  .mv-input,
  .mv-select,
  .mv-textarea {
    min-height: 48px;
  }

  /* Icon buttons: add padding for touch area */
  .mv-btn-icon {
    position: relative;
  }

  .mv-btn-icon::before {
    content: '';
    position: absolute;
    inset: -8px; /* Extend touch area by 8px on each side */
  }
}

/* --- Touch-friendly spacing between inline links --- */
.mv-link-group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--mv-space-2);
}

.mv-link-group a {
  padding: var(--mv-space-2) var(--mv-space-3);
  min-height: 44px;
  display: inline-flex;
  align-items: center;
}
```

---

## 4. Patrones de Layout por Tipo de Página

### 4.1 Landing Page

```
MOBILE                              DESKTOP (≥ 1024px)
─────────────────────               ──────────────────────────────────

┌─────────────────┐                ┌──────────────────────────────┐
│     NAVBAR      │                │           NAVBAR             │
├─────────────────┤                ├──────────────────────────────┤
│                 │                │                              │
│   HERO          │                │    ┌──────────┐  ┌───────┐  │
│   [Full width]  │                │    │ TEXT     │  │ IMAGE │  │
│                 │                │    │ + CTA    │  │       │  │
│   Heading       │                │    └──────────┘  └───────┘  │
│   Subheading    │                │         60%          40%    │
│   [CTA Button]  │                │                              │
│                 │                ├──────────────────────────────┤
├─────────────────┤                │                              │
│                 │                │   ┌──────┐ ┌──────┐ ┌──────┐│
│  CONVERGENCIA   │                │   │Música│ │ Tech │ │Human.││
│  (Stacked)      │                │   └──────┘ └──────┘ └──────┘│
│  [🎵 Música]    │                │         3 columns            │
│  [💻 Tech]      │                ├──────────────────────────────┤
│  [❤️ Personas]  │                │                              │
│                 │                │   PORTFOLIO / HIGHLIGHTS     │
├─────────────────┤                │   3-column card grid         │
│                 │                │                              │
│  PORTFOLIO      │                ├──────────────────────────────┤
│  (1-col stack)  │                │                              │
│  [Card 1]       │                │   TESTIMONIALS               │
│  [Card 2]       │                │   (Quote carousel or grid)   │
│  [Card 3]       │                │                              │
│                 │                ├──────────────────────────────┤
├─────────────────┤                │                              │
│  TESTIMONIALS   │                │   CTA SECTION                │
│  (Carousel)     │                │   (Centered, max-width 680)  │
│                 │                │                              │
├─────────────────┤                ├──────────────────────────────┤
│  CTA SECTION    │                │         FOOTER               │
│  (Centered)     │                │    (4-column layout)         │
├─────────────────┤                └──────────────────────────────┘
│    FOOTER       │
│   (Stacked)     │
└─────────────────┘
```

```css
/* --- Landing Page: Hero --- */
.mv-hero-landing {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--mv-space-20) var(--mv-space-5);
  min-height: 80vh;
  justify-content: center;
}

@media (min-width: 1024px) {
  .mv-hero-landing {
    flex-direction: row;
    text-align: left;
    gap: var(--mv-space-12);
    padding: var(--mv-space-24) var(--mv-space-8);
  }

  .mv-hero-landing__content {
    flex: 3; /* 60% */
  }

  .mv-hero-landing__media {
    flex: 2; /* 40% */
  }
}

/* --- Landing Page: Section with alternating bg --- */
.mv-section--alt {
  background: var(--mv-surface);
}

/* --- Landing Page: CTA Section --- */
.mv-cta-section {
  text-align: center;
  max-width: 680px;
  margin-inline: auto;
  padding: var(--mv-space-16) var(--mv-space-5);
}

@media (min-width: 1024px) {
  .mv-cta-section {
    padding: var(--mv-space-24) var(--mv-space-8);
  }
}
```

### 4.2 Blog / Artículo

```
MOBILE                              DESKTOP (≥ 1024px)
─────────────────────               ──────────────────────────────────

┌─────────────────┐                ┌──────────────────────────────┐
│     NAVBAR      │                │           NAVBAR             │
├─────────────────┤                ├──────────────────────────────┤
│                 │                │                              │
│  ARTICLE HEADER │                │   ARTICLE HEADER             │
│  [Category tag] │                │   (Centered, max-width 680)  │
│  Título del     │                │                              │
│  artículo       │                │   [Category] · [Date]        │
│  Fecha · 5 min  │                │   Gran Título del Artículo   │
│                 │                │   By Memo Valdez · 5 min     │
├─────────────────┤                │                              │
│                 │                ├──────────────────────────────┤
│  HERO IMAGE     │                │                              │
│  [Full bleed]   │                │   HERO IMAGE (constrained)   │
│                 │                │                              │
├─────────────────┤                ├──────────────────────────────┤
│                 │                │                              │
│  ARTICLE BODY   │                │  ┌───────────────┐ ┌──────┐ │
│  (Full width    │                │  │               │ │      │ │
│   with padding) │                │  │  ARTICLE BODY │ │ASIDE │ │
│                 │                │  │  (max 680px)  │ │      │ │
│  p, p, p...     │                │  │               │ │ TOC  │ │
│                 │                │  │  p, p, p...   │ │ Tags │ │
│  [Blockquote]   │                │  │               │ │ Share│ │
│                 │                │  │  [Blockquote] │ │      │ │
│  p, p, p...     │                │  │               │ │      │ │
│                 │                │  │  p, p, p...   │ │      │ │
│                 │                │  └───────────────┘ └──────┘ │
│  SIDEBAR        │                │       65%           35%     │
│  (below article │                │                              │
│   on mobile)    │                ├──────────────────────────────┤
│                 │                │                              │
├─────────────────┤                │   RELATED POSTS (3-col)      │
│  RELATED POSTS  │                │                              │
│  (1-col stack)  │                ├──────────────────────────────┤
├─────────────────┤                │         FOOTER               │
│    FOOTER       │                └──────────────────────────────┘
└─────────────────┘
```

```css
/* --- Article Layout --- */
.mv-article-layout {
  display: flex;
  flex-direction: column;
  gap: var(--mv-space-8);
}

@media (min-width: 1024px) {
  .mv-article-layout {
    flex-direction: row;
    gap: var(--mv-space-12);
    max-width: 1060px;
    margin-inline: auto;
  }
}

.mv-article-layout__main {
  flex: 1;
  min-width: 0; /* Prevent flex overflow */
}

.mv-article-layout__aside {
  order: 2; /* Below content on mobile */
}

@media (min-width: 1024px) {
  .mv-article-layout__aside {
    flex: 0 0 280px;
    position: sticky;
    top: calc(var(--mv-space-20)); /* Below navbar */
    align-self: flex-start;
  }
}

/* --- Article header --- */
.mv-article-header {
  text-align: center;
  max-width: 680px;
  margin-inline: auto;
  padding: var(--mv-space-12) var(--mv-space-5) var(--mv-space-8);
}

@media (min-width: 1024px) {
  .mv-article-header {
    padding: var(--mv-space-16) var(--mv-space-8) var(--mv-space-12);
  }
}

/* --- Article prose --- */
.mv-article-body {
  max-width: 680px;
}

.mv-article-body > * + * {
  margin-top: var(--mv-space-4);
}
```

### 4.3 Portfolio / Galería

```
MOBILE                              DESKTOP (≥ 1024px)
─────────────────────               ──────────────────────────────────

┌─────────────────┐                ┌──────────────────────────────┐
│     NAVBAR      │                │           NAVBAR             │
├─────────────────┤                ├──────────────────────────────┤
│                 │                │                              │
│  SECTION HEADER │                │   SECTION HEADER             │
│  Portfolio      │                │   "Portfolio" — centered     │
│                 │                │                              │
├─────────────────┤                ├──────────────────────────────┤
│  FILTERS        │                │   FILTERS (inline pills)     │
│  [Horizontal    │                │   [Todo] [Música] [Tech]     │
│   scroll pills] │                │   [Educación] [Contenido]    │
│                 │                │                              │
├─────────────────┤                ├──────────────────────────────┤
│                 │                │                              │
│  ┌────────────┐ │                │   ┌───────┐ ┌───────┐       │
│  │  Project 1 │ │                │   │Proj 1 │ │Proj 2 │       │
│  │  [Image]   │ │                │   │ tall  │ │       │       │
│  │  Title     │ │                │   │       │ ├───────┤       │
│  └────────────┘ │                │   │       │ │Proj 3 │       │
│  ┌────────────┐ │                │   ├───────┤ │       │       │
│  │  Project 2 │ │                │   │Proj 4 │ ├───────┤       │
│  │  [Image]   │ │                │   │       │ │Proj 5 │       │
│  │  Title     │ │                │   └───────┘ └───────┘       │
│  └────────────┘ │                │                              │
│  ┌────────────┐ │                │   Masonry-style grid         │
│  │  Project 3 │ │                │   2-3 columns                │
│  └────────────┘ │                │                              │
└─────────────────┘                └──────────────────────────────┘
```

```css
/* --- Portfolio Grid --- */
.mv-portfolio-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--mv-space-5);
}

@media (min-width: 640px) {
  .mv-portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--mv-space-6);
  }
}

@media (min-width: 1024px) {
  .mv-portfolio-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--mv-space-6);
  }
}

/* Auto-fit variant: fills available space */
.mv-portfolio-grid--auto {
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

/* Masonry approximation with CSS columns */
.mv-portfolio-masonry {
  columns: 1;
  column-gap: var(--mv-space-6);
}

@media (min-width: 640px) {
  .mv-portfolio-masonry {
    columns: 2;
  }
}

@media (min-width: 1024px) {
  .mv-portfolio-masonry {
    columns: 3;
  }
}

.mv-portfolio-masonry > * {
  break-inside: avoid;
  margin-bottom: var(--mv-space-6);
}

/* Filter pills: horizontal scroll on mobile */
.mv-filter-pills {
  display: flex;
  gap: var(--mv-space-2);
  overflow-x: auto;
  padding-bottom: var(--mv-space-2);
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
}

.mv-filter-pills::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}

.mv-filter-pill {
  flex-shrink: 0;
  padding: var(--mv-space-2) var(--mv-space-4);
  border-radius: var(--mv-radius-full);
  font-size: var(--mv-text-sm);
  font-weight: var(--mv-font-medium);
  background: var(--mv-surface);
  color: var(--mv-text-secondary);
  border: 1px solid var(--mv-neutral-200);
  cursor: pointer;
  transition: var(--mv-transition-fast);
  white-space: nowrap;
  min-height: 44px; /* Touch target */
  display: inline-flex;
  align-items: center;
}

.mv-filter-pill.is-active,
.mv-filter-pill:hover {
  background: var(--mv-primary);
  color: var(--mv-text-inverse);
  border-color: var(--mv-primary);
}
```

### 4.4 Contacto / Booking

```
MOBILE                              DESKTOP (≥ 1024px)
─────────────────────               ──────────────────────────────────

┌─────────────────┐                ┌──────────────────────────────┐
│     NAVBAR      │                │           NAVBAR             │
├─────────────────┤                ├──────────────────────────────┤
│                 │                │                              │
│  HEADER         │                │  ┌───────────┐ ┌──────────┐ │
│  "Hablemos"     │                │  │ CONTACT   │ │ FORM     │ │
│                 │                │  │ INFO      │ │          │ │
│  CONTACT INFO   │                │  │           │ │ Name     │ │
│  email          │                │  │ email     │ │ Email    │ │
│  location       │                │  │ location  │ │ Subject  │ │
│  social links   │                │  │ social    │ │ Message  │ │
│                 │                │  │           │ │          │ │
├─────────────────┤                │  │ Booking   │ │ [Send]   │ │
│                 │                │  │ info      │ │          │ │
│  FORM           │                │  │           │ │          │ │
│  [Full width]   │                │  └───────────┘ └──────────┘ │
│                 │                │       40%          60%       │
│  Nombre         │                │                              │
│  Email          │                ├──────────────────────────────┤
│  Asunto (select)│                │         FOOTER               │
│  Mensaje        │                └──────────────────────────────┘
│  [Enviar]       │
│                 │
├─────────────────┤
│    FOOTER       │
└─────────────────┘
```

```css
/* --- Contact Layout --- */
.mv-contact-layout {
  display: flex;
  flex-direction: column;
  gap: var(--mv-space-10);
}

@media (min-width: 1024px) {
  .mv-contact-layout {
    flex-direction: row;
    gap: var(--mv-space-16);
  }

  .mv-contact-layout__info {
    flex: 0 0 35%;
  }

  .mv-contact-layout__form {
    flex: 1;
  }
}

/* --- Form responsive --- */
.mv-form {
  display: flex;
  flex-direction: column;
  gap: var(--mv-space-5);
}

.mv-form__row {
  display: flex;
  flex-direction: column;
  gap: var(--mv-space-5);
}

@media (min-width: 640px) {
  .mv-form__row {
    flex-direction: row;
    gap: var(--mv-space-4);
  }

  .mv-form__row > * {
    flex: 1;
  }
}

/* Full-width inputs on mobile */
.mv-form .mv-input,
.mv-form .mv-select,
.mv-form .mv-textarea {
  width: 100%;
  min-height: 48px; /* Touch-friendly */
}

.mv-textarea {
  min-height: 160px;
  resize: vertical;
}

/* Submit button: full width on mobile */
.mv-form .mv-btn--submit {
  width: 100%;
}

@media (min-width: 640px) {
  .mv-form .mv-btn--submit {
    width: auto;
    align-self: flex-end;
  }
}
```

---

## 5. Stack Order en Mobile

### 5.1 Orden de elementos (top → bottom)

La prioridad en mobile sigue el principio de "personas primero, contenido después, navegación auxiliar al final":

| Orden | Elemento | Razón |
|-------|----------|-------|
| 1 | **Navbar** (fixed top) | Orientación constante — "¿dónde estoy?" |
| 2 | **Hero / Header** | Primer impacto — comunica qué es esta página |
| 3 | **Contenido principal** | El valor — artículo, portfolio, servicios |
| 4 | **CTA primario** | La acción — siempre visible sin scroll excesivo |
| 5 | **Contenido secundario** | Testimonios, features adicionales |
| 6 | **Sidebar content** | TOC, tags, related — debajo del artículo |
| 7 | **CTA secundario** | Newsletter signup, contacto |
| 8 | **Footer** | Navegación completa, legal, redes sociales |

### 5.2 Qué se oculta en mobile

| Elemento | ¿Se oculta? | Alternativa |
|----------|-------------|-------------|
| Nav links | Sí → hamburger | Full-screen drawer on tap |
| Sidebar/TOC | Reubicado → debajo del contenido | Collapsible accordion |
| Breadcrumbs | Ocultar (solo "← Volver") | Back link |
| Secondary CTAs | Simplificar a 1 | Conservar solo el principal |
| Decorative images | Ocultar o reducir | Solo hero image visible |
| Table of Contents | Ocultar | Sticky "jump to section" button |
| Social proof counter | Simplificar | Texto en lugar de grid visual |
| Multi-column footer | Stack vertical | Una columna con accordions |

### 5.3 CSS Order Utilities

```css
/* --- Mobile-first reorder --- */
.mv-order-first { order: -1; }
.mv-order-last  { order: 999; }
.mv-order-1     { order: 1; }
.mv-order-2     { order: 2; }
.mv-order-3     { order: 3; }

@media (min-width: 768px) {
  .mv-md\:order-first { order: -1; }
  .mv-md\:order-last  { order: 999; }
  .mv-md\:order-1     { order: 1; }
  .mv-md\:order-2     { order: 2; }
}

@media (min-width: 1024px) {
  .mv-lg\:order-first { order: -1; }
  .mv-lg\:order-last  { order: 999; }
  .mv-lg\:order-1     { order: 1; }
  .mv-lg\:order-2     { order: 2; }
}
```

---

## 6. Visibility Utilities

### 6.1 Breakpoint-Based Visibility

```css
/* ================================================================
   Visibility Utilities — Show/Hide by Breakpoint
   
   Convention:
   .mv-hidden            → hidden always
   .mv-hidden-mobile     → hidden < 768px
   .mv-hidden-tablet     → hidden 768px–1023px
   .mv-hidden-desktop    → hidden ≥ 1024px
   .mv-visible-mobile    → visible only < 768px
   .mv-visible-tablet    → visible only 768px–1023px
   .mv-visible-desktop   → visible only ≥ 1024px
   ================================================================ */

/* Always hidden */
.mv-hidden {
  display: none !important;
}

/* --- Hidden at specific breakpoints --- */

/* Hidden on mobile (< 768px), visible on tablet+ */
.mv-hidden-mobile {
  display: none !important;
}

@media (min-width: 768px) {
  .mv-hidden-mobile {
    display: revert !important;
  }
}

/* Hidden on tablet (768px–1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .mv-hidden-tablet {
    display: none !important;
  }
}

/* Hidden on desktop (≥ 1024px) */
@media (min-width: 1024px) {
  .mv-hidden-desktop {
    display: none !important;
  }
}

/* --- Visible ONLY at specific breakpoints --- */

/* Visible only on mobile (< 768px) */
.mv-visible-mobile {
  display: block;
}

@media (min-width: 768px) {
  .mv-visible-mobile {
    display: none !important;
  }
}

/* Visible only on tablet (768px–1023px) */
.mv-visible-tablet {
  display: none !important;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .mv-visible-tablet {
    display: block !important;
  }
}

/* Visible only on desktop (≥ 1024px) */
.mv-visible-desktop {
  display: none !important;
}

@media (min-width: 1024px) {
  .mv-visible-desktop {
    display: block !important;
  }
}

/* --- Flex variants (for flex containers) --- */

@media (min-width: 768px) {
  .mv-hidden-mobile.mv-flex,
  .mv-hidden-mobile.mv-inline-flex {
    display: flex !important;
  }
}

@media (min-width: 1024px) {
  .mv-visible-desktop.mv-flex {
    display: flex !important;
  }
}
```

### 6.2 Interaction-Based Visibility

```css
/* --- Hover-only content (desktop only) --- */
@media (hover: hover) {
  .mv-show-on-hover {
    opacity: 0;
    transition: opacity var(--mv-duration-fast) var(--mv-ease-out);
  }

  *:hover > .mv-show-on-hover {
    opacity: 1;
  }
}

/* On touch devices: always visible */
@media (hover: none) {
  .mv-show-on-hover {
    opacity: 1;
  }
}

/* --- Print visibility --- */
@media print {
  .mv-hidden-print {
    display: none !important;
  }

  .mv-visible-print {
    display: block !important;
  }

  /* Force light mode for printing */
  * {
    color: #231F1B !important;
    background: white !important;
    box-shadow: none !important;
  }

  /* Remove nav and footer */
  .mv-nav,
  .mv-footer,
  .mv-theme-toggle {
    display: none !important;
  }
}
```

---

## 7. Comportamiento Responsive Completo — Tabla Maestra

| Componente | Mobile (< 768px) | Tablet (768–1023px) | Desktop (≥ 1024px) |
|------------|-------------------|---------------------|---------------------|
| **Container** | 100%, pad 20px | max 720px, pad 24px | max 960–1140px, pad 32px |
| **Navbar** | Fixed. Logo + hamburger + theme. Drawer vertical. | Fixed. Logo + hamburger + theme. | Fixed. Logo + inline links + theme. |
| **Hero** | Stack vertical. Text → Image. 80vh. Centered text. | Stack vertical. 70vh. | Horizontal 60/40. 80vh. Left-aligned text. |
| **Card grid** | 1 column, gap 24px | 2 columns, gap 24px | 3 columns, gap 32px |
| **Card** | Padding 20px. Full-width image. | Padding 24px. | Padding 32px. Hover lift effect. |
| **Typography Display** | 32px (2rem) | 40px (2.5rem) | 56px (3.5rem) |
| **Typography H1** | 30px (1.875rem) | 32px (2rem) | 40px (2.5rem) |
| **Typography H2** | 24px (1.5rem) | 24px (1.5rem) | 30px (1.875rem) |
| **Section padding** | 64px block | 80px block | 96px block |
| **Article** | Single column, full width | Single column, max 680px | Main 680px + sidebar 280px |
| **Sidebar** | Below content (reordered) | Below content | Sticky right column |
| **Portfolio grid** | 1 column | 2 columns | 3 columns (or masonry) |
| **Footer** | Stacked 1-column | 2-column grid | 4-column grid |
| **Filters** | Horizontal scroll pills | Inline wrap | Inline wrap |
| **Contact form** | Full-width stacked inputs | 2-col rows for name/email | Info sidebar 35% + form 65% |
| **Buttons** | Full-width, 48px height | Auto-width, 44px height | Auto-width, 44px height |
| **Touch targets** | 48×48px minimum | 44×44px minimum | 44×44px (mouse OK smaller) |
| **Hover effects** | Disabled (touch) | Mixed | Full hover: lift, glow, color |
| **Breadcrumbs** | Hidden → "← Volver" | Visible | Visible |
| **TOC** | Hidden or collapsible | Collapsible | Sticky sidebar |
| **Social links** | Icon-only, horizontal | Icon + label | Icon + label |
| **Decorative images** | Reduced or hidden | Shown | Shown with parallax option |

---

## 8. Performance Considerations

### 8.1 Image Responsive Strategy

```html
<!-- Hero image: responsive with art direction -->
<picture>
  <!-- Mobile: cropped, smaller file -->
  <source
    media="(max-width: 767px)"
    srcset="hero-mobile.webp 640w"
    sizes="100vw"
  >
  <!-- Tablet: medium crop -->
  <source
    media="(max-width: 1023px)"
    srcset="hero-tablet.webp 1024w"
    sizes="100vw"
  >
  <!-- Desktop: full image -->
  <source
    srcset="hero-desktop.webp 1920w, hero-desktop-2x.webp 2560w"
    sizes="(min-width: 1280px) 1140px, 100vw"
  >
  <!-- Fallback -->
  <img
    src="hero-desktop.jpg"
    alt="Memo Valdez dirigiendo un ensamble coral"
    width="1920"
    height="1080"
    loading="eager"
    decoding="async"
  >
</picture>

<!-- Regular content images: lazy loaded -->
<img
  src="placeholder.svg"
  data-src="photo.webp"
  alt="Descripción"
  width="800"
  height="600"
  loading="lazy"
  decoding="async"
>
```

### 8.2 Font Loading Strategy

```html
<!-- Preconnect to Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Critical fonts first (display + body) -->
<link
  rel="preload"
  href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;600;700&family=Inter:wght@400;500;600&display=swap"
  as="style"
>

<!-- Non-critical fonts deferred (serif + mono) -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;1,6..96,400&family=JetBrains+Mono:wght@400&display=swap"
  media="print"
  onload="this.media='all'"
>
```

### 8.3 CSS Loading

```html
<!-- Critical CSS: inlined in <head> for above-the-fold -->
<style>
  /* tokens.css + reset.css + critical layout */
  /* ~3-5KB when minified */
</style>

<!-- Full CSS: loaded async -->
<link
  rel="preload"
  href="css/main.css"
  as="style"
  onload="this.onload=null;this.rel='stylesheet'"
>
<noscript>
  <link rel="stylesheet" href="css/main.css">
</noscript>
```

---

## 9. Testing Checklist

### 9.1 Device Testing Matrix

| Dispositivo | Viewport | Densidad | Prioridad |
|-------------|----------|----------|-----------|
| iPhone SE (3rd gen) | 375×667 | 2x | 🔴 Alta |
| iPhone 15 Pro | 393×852 | 3x | 🔴 Alta |
| iPhone 15 Pro Max | 430×932 | 3x | 🟡 Media |
| Samsung Galaxy S24 | 360×780 | 3x | 🟡 Media |
| iPad Mini (6th) | 744×1133 | 2x | 🔴 Alta |
| iPad Air (5th) | 820×1180 | 2x | 🟡 Media |
| MacBook Air 13" | 1280×800 | 2x | 🔴 Alta |
| Desktop 1920×1080 | 1920×1080 | 1x | 🔴 Alta |
| Ultrawide 2560×1440 | 2560×1440 | 1x | 🟢 Baja |

### 9.2 Responsive QA Checklist

- [ ] **375px** — Todos los textos legibles, nada se sale del viewport
- [ ] **375px** — Touch targets ≥ 44×44px en todos los interactivos
- [ ] **375px** — Cards en 1 columna, spacing correcto
- [ ] **375px** — Hamburger menu funciona, drawer se abre/cierra
- [ ] **375px** — Forms full-width, inputs con min-height 48px
- [ ] **375px** — Hero text legible, no se desborda
- [ ] **768px** — Container se centra con max-width 720px
- [ ] **768px** — Cards cambian a 2 columnas
- [ ] **768px** — Typography escala correctamente
- [ ] **1024px** — Nav links aparecen inline, hamburger desaparece
- [ ] **1024px** — Cards en 3 columnas
- [ ] **1024px** — Sidebar aparece junto al contenido
- [ ] **1024px** — Footer en multi-column layout
- [ ] **1280px** — Container max-width 1140px
- [ ] **Dark mode** — Todas las combinaciones de color pasan WCAG AA
- [ ] **Theme toggle** — Funciona: light → dark → system
- [ ] **Theme persistence** — Recarga preserva la elección
- [ ] **Reduced motion** — Todas las animaciones se desactivan
- [ ] **Keyboard nav** — Tab order lógico, focus visible
- [ ] **Screen reader** — Landmarks, headings, aria-labels correctos
- [ ] **Print** — Layout simplificado, light mode forzado, nav/footer ocultos

---

## Apéndice: Responsive CSS Variables Override Pattern

Para casos donde necesites sobrescribir spacing/sizing por breakpoint en componentes específicos, usa este patrón con custom properties locales:

```css
/* Componente con spacing responsive vía custom properties */
.mv-feature-section {
  --_padding: var(--mv-space-8);
  --_gap: var(--mv-space-6);
  --_columns: 1;
  
  display: grid;
  grid-template-columns: repeat(var(--_columns), 1fr);
  gap: var(--_gap);
  padding: var(--_padding);
}

@media (min-width: 768px) {
  .mv-feature-section {
    --_padding: var(--mv-space-12);
    --_gap: var(--mv-space-8);
    --_columns: 2;
  }
}

@media (min-width: 1024px) {
  .mv-feature-section {
    --_padding: var(--mv-space-16);
    --_gap: var(--mv-space-10);
    --_columns: 3;
  }
}
```

Este patrón mantiene la media query limpia y hace explícito qué cambia en cada breakpoint.

---

*Documento generado como Fase 4 del pipeline de brandbook para la marca personal "Memo Valdez".*  
*Siguiente fase: Prototipo de landing page implementando esta arquitectura responsive.*
