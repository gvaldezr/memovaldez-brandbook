# Design Tokens — Memo Valdez

> **Fase:** 3 · Sistema Visual  
> **Fecha:** 22 de septiembre de 2026  
> **Versión:** 1.0  
> **Construido sobre:** Brand Foundation, Posicionamiento, Benchmark Competitivo, Tendencias 2025–2026  
> **Prefijo CSS:** `--mv-` (Memo Valdez)

---

## Filosofía del Sistema

> **"Minimalismo con alma"** — Cada token existe porque cumple un propósito emocional o funcional. La paleta comunica calidez latina en contenedor Apple. El dark mode cálido es el modo por defecto (82% de usuarios lo prefieren). Los colores nunca son fríos puros — siempre llevan un matiz cálido que dice: "aquí hay una persona."

### Principios de diseño

1. **Carbón cálido, no negro puro** — Los fondos oscuros siempre tienen un tinte marrón/ámbar (≈30° HSL)
2. **Color con intención** — El terracota es humanismo, el dorado es sofisticación, el slate-azul es tecnología
3. **Espacio como lujo** — Los tokens de spacing generosos reflejan el valor de marca "Claridad"
4. **Convergencia visual** — Los tres mundos (música, tech, personas) se expresan a través de los tres colores de marca
5. **Accesibilidad como fundamento** — WCAG AA mínimo en todas las combinaciones de texto funcional

---

## 1. Paleta de Colores — Light Mode

### 1.1 Color Primario — Terracota Cálido (Humanismo)

> El color de la tierra, de las manos que dirigen, de la arcilla que conecta con lo ancestral. Es el color de marca más reconocible.

| Token | Hex | HSL | Uso recomendado |
|---|---|---|---|
| `--mv-primary` | `#B85C38` | `hsl(17, 53%, 47%)` | Botones principales, enlaces, acentos de marca. ⚠️ Solo texto grande (≥18px) sobre fondos claros. |
| `--mv-primary-light` | `#D4845E` | `hsl(19, 58%, 60%)` | Hover states, fondos de badge suave, decoración |
| `--mv-primary-dark` | `#8E3F22` | `hsl(16, 61%, 35%)` | Texto de enlace sobre fondos claros (pasa AA a 6.87:1), botones activos |

### 1.2 Color Secundario — Dorado/Ochre (Sofisticación)

> El bronce de los instrumentos, la miel de la luz de atardecer en Mérida. Comunica valor, calidez y permanencia.

| Token | Hex | HSL | Uso recomendado |
|---|---|---|---|
| `--mv-secondary` | `#C8A96E` | `hsl(39, 45%, 61%)` | Acentos decorativos, iconos, badges, bordes highlight |
| `--mv-secondary-light` | `#DBBF8A` | `hsl(39, 53%, 70%)` | Fondos de tarjetas destacadas, hover suave |
| `--mv-secondary-dark` | `#A68B4B` | `hsl(42, 38%, 47%)` | Texto decorativo sobre blanco (solo grande, 3.09:1) |

### 1.3 Color Terciario — Slate Azul Profundo (Tecnología)

> El azul del código, de las pantallas, del pensamiento lógico. Sereno, no frío. Es tecnología al servicio del arte.

| Token | Hex | HSL | Uso recomendado |
|---|---|---|---|
| `--mv-tertiary` | `#3D5A73` | `hsl(208, 31%, 35%)` | Links secundarios, secciones tech, etiquetas de código. Pasa AA (6.81:1 sobre fondo). |
| `--mv-tertiary-light` | `#5A7A96` | `hsl(208, 25%, 47%)` | Iconos, bordes informativos, hover tech |
| `--mv-tertiary-dark` | `#2A3F52` | `hsl(209, 32%, 24%)` | Texto tech sobre fondo claro (10.26:1, pasa AAA) |

### 1.4 Colores Semánticos

> Señales claras e independientes del color de marca. El error nunca es terracota — porque el terracota es identidad, no alarma.

| Token | Hex | HSL | Contraste sobre `#FEFEFE` | Uso |
|---|---|---|---|---|
| `--mv-success` | `#4A7C59` | `hsl(138, 25%, 39%)` | 4.59:1 ✅ AA | Confirmaciones, mensajes positivos, checks |
| `--mv-warning` | `#D4A843` | `hsl(42, 63%, 55%)` | 2.09:1 ⚠️ Solo icono/fondo | Alertas moderadas (usar texto oscuro encima: 7.39:1) |
| `--mv-error` | `#C44B4B` | `hsl(0, 51%, 53%)` | 4.45:1 ✅ AA Large (3:1) | Errores, validación negativa. Para texto pequeño usar `--mv-error-dark` |
| `--mv-error-dark` | `#A83838` | `hsl(0, 49%, 44%)` | 6.03:1 ✅ AA | Texto de error sobre fondos claros |
| `--mv-info` | `#4A6FA5` | `hsl(216, 38%, 47%)` | 4.82:1 ✅ AA | Información contextual, tooltips, notas |

### 1.5 Escala de Neutrales Cálidos

> Toda la escala comparte un matiz cálido ≈30–36° HSL. Nunca grises puros. Son el "carbón cálido" que fundamenta la marca.

| Token | Hex | HSL | Luminosidad | Uso recomendado |
|---|---|---|---|---|
| `--mv-neutral-50` | `#FEFEFE` | `hsl(36, 33%, 97%)` | 97% | Fondo de página principal |
| `--mv-neutral-100` | `#F5F0EB` | `hsl(30, 33%, 94%)` | 94% | Superficies, cards, secciones alternas |
| `--mv-neutral-200` | `#E8E1D9` | `hsl(32, 25%, 88%)` | 88% | Bordes, separadores, fondos de input |
| `--mv-neutral-300` | `#D4CBC0` | `hsl(33, 19%, 79%)` | 79% | Bordes activos, placeholders de imagen |
| `--mv-neutral-400` | `#B8ADA0` | `hsl(33, 14%, 67%)` | 67% | Texto placeholder, iconos deshabilitados |
| `--mv-neutral-500` | `#968A7D` | `hsl(31, 11%, 54%)` | 54% | Texto de ayuda (solo grande), captions |
| `--mv-neutral-600` | `#756A5E` | `hsl(31, 11%, 41%)` | 41% | Texto secundario, etiquetas |
| `--mv-neutral-700` | `#574E44` | `hsl(32, 12%, 30%)` | 30% | Texto principal (alt), subtítulos |
| `--mv-neutral-800` | `#3A342D` | `hsl(32, 13%, 20%)` | 20% | Texto enfatizado, headings |
| `--mv-neutral-900` | `#231F1B` | `hsl(30, 13%, 12%)` | 12% | Texto principal, máximo contraste |
| `--mv-neutral-950` | `#161310` | `hsl(30, 16%, 7%)` | 7% | Fondo dark mode base |

### 1.6 Superficies (Light Mode)

| Token | Hex | HSL | Uso |
|---|---|---|---|
| `--mv-bg` | `#FEFEFE` | `hsl(36, 33%, 97%)` | Fondo de página — la "partitura" en blanco cálido |
| `--mv-surface` | `#F5F0EB` | `hsl(30, 33%, 94%)` | Cards, sidebars, secciones alternas |
| `--mv-surface-elevated` | `#FFFFFF` | `hsl(0, 0%, 100%)` | Modales, dropdowns, cards flotantes |
| `--mv-overlay` | `#231F1B` | `hsl(30, 13%, 12%)` | Overlay detrás de modales (al 60% opacidad) |

### 1.7 Texto (Light Mode)

| Token | Hex | HSL | Contraste sobre fondo | Uso |
|---|---|---|---|---|
| `--mv-text-primary` | `#231F1B` | `hsl(30, 13%, 12%)` | 15.44:1 ✅ AAA | Cuerpo de texto, headings — siempre legible |
| `--mv-text-secondary` | `#574E44` | `hsl(32, 12%, 30%)` | 7.68:1 ✅ AAA | Párrafos secundarios, descripciones, timestamps |
| `--mv-text-tertiary` | `#968A7D` | `hsl(31, 11%, 54%)` | 3.18:1 ✅ AA Large | Placeholders, captions, hints — solo texto ≥18px o icónico |
| `--mv-text-inverse` | `#FEFEFE` | `hsl(36, 33%, 97%)` | — | Texto sobre fondos oscuros/coloreados |

---

## 2. Paleta de Colores — Dark Mode (Cálido)

> **No es una inversión — es un rediseño.** El dark mode de Memo Valdez es como la sala de conciertos antes de que empiece la música: oscuro, cálido, lleno de anticipación. Fondo `#131110` (no negro puro) con un tinte marrón que mantiene la personalidad latina.

### 2.1 Color Primario — Terracota Elevado

> En dark mode, el terracota se ilumina ligeramente para mantener contraste sin perder calidez.

| Token | Hex | HSL | Contraste sobre `#131110` | Uso |
|---|---|---|---|---|
| `--mv-primary` | `#D4845E` | `hsl(19, 58%, 60%)` | 6.51:1 ✅ AA | Botones, enlaces, acentos principales |
| `--mv-primary-light` | `#E8A882` | `hsl(22, 69%, 71%)` | — | Hover states, decoración |
| `--mv-primary-dark` | `#B85C38` | `hsl(17, 53%, 47%)` | — | Pressed states, bordes activos |

### 2.2 Color Secundario — Dorado Luminoso

| Token | Hex | HSL | Contraste sobre `#131110` | Uso |
|---|---|---|---|---|
| `--mv-secondary` | `#DBBF8A` | `hsl(39, 53%, 70%)` | 10.61:1 ✅ AAA | Acentos decorativos, texto destacado |
| `--mv-secondary-light` | `#EAD5A8` | `hsl(41, 61%, 79%)` | — | Hover, ornamental |
| `--mv-secondary-dark` | `#C8A96E` | `hsl(39, 45%, 61%)` | — | Bordes, iconos sutiles |

### 2.3 Color Terciario — Slate Azul Iluminado

| Token | Hex | HSL | Contraste sobre `#131110` | Uso |
|---|---|---|---|---|
| `--mv-tertiary` | `#6B9DBF` | `hsl(204, 40%, 58%)` | 6.46:1 ✅ AA | Links tech, tags, code syntax highlighting |
| `--mv-tertiary-light` | `#8BB8D4` | `hsl(203, 46%, 69%)` | — | Hover, bordes informativos |
| `--mv-tertiary-dark` | `#4A7999` | `hsl(204, 35%, 45%)` | — | Pressed states |

### 2.4 Colores Semánticos (Dark Mode)

> Saturación reducida ~10-15% y luminosidad elevada respecto a light mode, para evitar "brillo excesivo" en fondos oscuros.

| Token | Hex | HSL | Contraste sobre `#131110` | Uso |
|---|---|---|---|---|
| `--mv-success` | `#6BAF7B` | `hsl(134, 30%, 55%)` | 7.21:1 ✅ AAA | Confirmaciones |
| `--mv-warning` | `#E4BF5A` | `hsl(44, 72%, 62%)` | 10.67:1 ✅ AAA | Alertas (usa texto oscuro encima) |
| `--mv-error` | `#E07070` | `hsl(0, 64%, 66%)` | 6.03:1 ✅ AA | Errores, validación |
| `--mv-info` | `#6B93CC` | `hsl(215, 49%, 61%)` | 5.98:1 ✅ AA | Información contextual |

### 2.5 Neutrales Cálidos (Dark Mode)

> La escala se invierte conceptualmente pero mantiene el matiz cálido. 50 es lo más oscuro, 950 lo más claro.

| Token | Hex | HSL | Luminosidad | Uso en dark mode |
|---|---|---|---|---|
| `--mv-neutral-50` | `#161310` | `hsl(30, 16%, 7%)` | 7% | Base más profunda |
| `--mv-neutral-100` | `#1C1916` | `hsl(30, 12%, 10%)` | 10% | Superficie principal |
| `--mv-neutral-200` | `#28231E` | `hsl(30, 14%, 14%)` | 14% | Cards, paneles elevados |
| `--mv-neutral-300` | `#3A342D` | `hsl(32, 13%, 20%)` | 20% | Bordes sutiles |
| `--mv-neutral-400` | `#574E44` | `hsl(32, 12%, 30%)` | 30% | Bordes visibles, separadores |
| `--mv-neutral-500` | `#756A5E` | `hsl(31, 11%, 41%)` | 41% | Iconos deshabilitados |
| `--mv-neutral-600` | `#968A7D` | `hsl(31, 11%, 54%)` | 54% | Texto terciario, hints |
| `--mv-neutral-700` | `#B8ADA0` | `hsl(33, 14%, 67%)` | 67% | Texto secundario |
| `--mv-neutral-800` | `#D4CBC0` | `hsl(33, 19%, 79%)` | 79% | Texto principal alternativo |
| `--mv-neutral-900` | `#E8E1D9` | `hsl(32, 25%, 88%)` | 88% | Texto enfatizado |
| `--mv-neutral-950` | `#F5F0EB` | `hsl(30, 33%, 94%)` | 94% | Máxima claridad |

### 2.6 Superficies (Dark Mode)

> Elevación en dark mode se expresa con superficies progresivamente más claras, no con sombras.

| Token | Hex | HSL | Uso |
|---|---|---|---|
| `--mv-bg` | `#131110` | `hsl(20, 9%, 7%)` | Fondo de página — "la sala oscura antes del concierto" |
| `--mv-surface` | `#1C1916` | `hsl(30, 12%, 10%)` | Cards, sidebars, secciones |
| `--mv-surface-elevated` | `#28231E` | `hsl(30, 14%, 14%)` | Modales, dropdowns, popovers |
| `--mv-overlay` | `#000000` | `hsl(0, 0%, 0%)` | Overlay detrás de modales (al 70% opacidad) |

### 2.7 Texto (Dark Mode)

| Token | Hex | HSL | Contraste sobre bg | Uso |
|---|---|---|---|---|
| `--mv-text-primary` | `#F0EBE5` | `hsl(33, 27%, 92%)` | 15.89:1 ✅ AAA | Headings, cuerpo principal |
| `--mv-text-secondary` | `#B8ADA0` | `hsl(33, 14%, 67%)` | 8.54:1 ✅ AAA | Descripciones, metadata |
| `--mv-text-tertiary` | `#756A5E` | `hsl(31, 11%, 41%)` | 3.57:1 ✅ AA Large | Hints, placeholders — solo texto ≥18px |
| `--mv-text-inverse` | `#231F1B` | `hsl(30, 13%, 12%)` | — | Texto sobre fondos claros/botones primarios |

---

## 3. Tipografía

> **Tres voces como tres instrumentos en un ensamble:** Display canta la melodía principal, Body sostiene la armonía, Mono marca el ritmo del código.

### 3.1 Familias Tipográficas

| Rol | Familia primaria | Alternativa Google Fonts (gratuita) | Estilo | Uso |
|---|---|---|---|---|
| **Display** | Söhne (Klim Type Foundry) | **Instrument Sans** ó **Plus Jakarta Sans** | Neo-grotesca con sensibilidad analógica | Headlines, título del sitio, hero statements, navegación |
| **Body** | Inter (Open Source) | **Inter** (ya es Google Fonts) | Sans-serif técnica y legible | Cuerpo de texto, párrafos, UI, formularios |
| **Serif (Acento)** | Bodoni Moda (Google Fonts) | **Bodoni Moda** | Serif de alto contraste, editorial | Citas, nombres de piezas musicales, accentos editoriales |
| **Mono** | JetBrains Mono (Open Source) | **JetBrains Mono** (Google Fonts) | Monoespaciada moderna | Bloques de código, datos técnicos, secciones IA/tech |

### 3.2 Escala de Tamaños

> Sistema modular con ratio ~1.25 (Major Third). Base: 16px = 1rem.

| Token | px | rem | Uso típico |
|---|---|---|---|
| `--mv-text-xs` | 12px | 0.75rem | Footnotes, legal, captions pequeños |
| `--mv-text-sm` | 14px | 0.875rem | Labels, metadata, timestamps, badges |
| `--mv-text-base` | 16px | 1rem | Cuerpo de texto, párrafos, UI general |
| `--mv-text-lg` | 18px | 1.125rem | Lead paragraphs, subtítulos de sección |
| `--mv-text-xl` | 20px | 1.25rem | H4, títulos de card, subtítulos |
| `--mv-text-2xl` | 24px | 1.5rem | H3, títulos de sección |
| `--mv-text-3xl` | 30px | 1.875rem | H2, títulos de página internos |
| `--mv-text-4xl` | 40px | 2.5rem | H1, hero headlines, statement principal |
| `--mv-text-5xl` | 56px | 3.5rem | Display, nombre "MEMO VALDEZ" en hero |

### 3.3 Pesos Tipográficos

| Token | Weight | Uso |
|---|---|---|
| `--mv-font-light` | 300 | Texto display grande (hero, splash), decorativo. En dark mode, usar 350 para compensar thinning. |
| `--mv-font-regular` | 400 | Cuerpo de texto, párrafos, UI. En dark mode, usar 420 para compensar thinning. |
| `--mv-font-medium` | 500 | Labels, navegación activa, subtítulos inline |
| `--mv-font-semibold` | 600 | Headings H3-H4, nombres propios, botones |
| `--mv-font-bold` | 700 | Headings H1-H2, hero statements, énfasis fuerte |

### 3.4 Line Heights

| Token | Valor | Uso |
|---|---|---|
| `--mv-leading-tight` | 1.2 | Headlines, display text — la tipografía respira menos para crear impacto |
| `--mv-leading-normal` | 1.5 | Cuerpo de texto, párrafos — legibilidad óptima |
| `--mv-leading-relaxed` | 1.7 | Long-form reading, newsletters, bloques de texto extenso — como un adagio |

### 3.5 Letter Spacing

| Token | Valor | Uso |
|---|---|---|
| `--mv-tracking-tight` | -0.02em | Headlines grandes (≥2xl), display text — compacta la presencia visual |
| `--mv-tracking-normal` | 0 | Cuerpo de texto, UI general |
| `--mv-tracking-wide` | 0.05em | All-caps labels, overlines, subtítulos decorativos, navegación. Máx 0.1em. |
| `--mv-tracking-widest` | 0.1em | Marcas de sección "MÚSICA · TECNOLOGÍA · PERSONAS", overlines de hero |

---

## 4. Spacing

> **Sistema base 4px.** Como un compás musical donde cada pulso es un múltiplo de la unidad base. El espaciado generoso refleja el valor de marca "Claridad" — todo elemento visible se gana su lugar.

| Token | px | rem | Uso recomendado |
|---|---|---|---|
| `--mv-space-0` | 0px | 0 | Reset explícito |
| `--mv-space-0.5` | 2px | 0.125rem | Micro-ajustes: bordes, outlines |
| `--mv-space-1` | 4px | 0.25rem | Padding inline de badges, gap mínimo entre iconos y texto |
| `--mv-space-2` | 8px | 0.5rem | Padding interno de chips/tags, gap de inputs inline |
| `--mv-space-3` | 12px | 0.75rem | Padding interno de botones compactos, gap entre items de lista |
| `--mv-space-4` | 16px | 1rem | Padding estándar de cards, margen entre párrafos, gap de form fields |
| `--mv-space-5` | 20px | 1.25rem | Padding lateral de contenido mobile, gap de grid pequeño |
| `--mv-space-6` | 24px | 1.5rem | Padding de cards generosas, separación entre secciones menores |
| `--mv-space-8` | 32px | 2rem | Margen entre componentes, padding de secciones en mobile |
| `--mv-space-10` | 40px | 2.5rem | Gap de grid principal, separación media entre bloques |
| `--mv-space-12` | 48px | 3rem | Padding de secciones desktop, espacio vertical entre módulos |
| `--mv-space-16` | 64px | 4rem | Separación entre secciones principales de página |
| `--mv-space-20` | 80px | 5rem | Padding vertical de hero sections, separadores de secciones mayores |
| `--mv-space-24` | 96px | 6rem | Espacio máximo entre secciones de landing page |

---

## 5. Sombras

> Sombras cálidas en light mode (nunca negro puro). En dark mode, la elevación se expresa con superficies más claras + sombra sutil contra el fondo profundo.

### 5.1 Light Mode

| Token | CSS | Uso |
|---|---|---|
| `--mv-shadow-sm` | `0 1px 2px 0 rgba(35, 31, 27, 0.05)` | Botones, inputs, tooltips — elevación mínima |
| `--mv-shadow-md` | `0 4px 6px -1px rgba(35, 31, 27, 0.08), 0 2px 4px -2px rgba(35, 31, 27, 0.05)` | Cards, dropdowns — elevación media |
| `--mv-shadow-lg` | `0 10px 15px -3px rgba(35, 31, 27, 0.10), 0 4px 6px -4px rgba(35, 31, 27, 0.06)` | Modales, popovers, tarjetas flotantes |
| `--mv-shadow-xl` | `0 20px 25px -5px rgba(35, 31, 27, 0.12), 0 8px 10px -6px rgba(35, 31, 27, 0.06)` | Hero cards, overlays principales |

### 5.2 Dark Mode

| Token | CSS | Uso |
|---|---|---|
| `--mv-shadow-sm` | `0 1px 2px 0 rgba(0, 0, 0, 0.20)` | Elevación mínima sobre superficie dark |
| `--mv-shadow-md` | `0 4px 6px -1px rgba(0, 0, 0, 0.30), 0 2px 4px -2px rgba(0, 0, 0, 0.20)` | Cards sobre fondo oscuro |
| `--mv-shadow-lg` | `0 10px 15px -3px rgba(0, 0, 0, 0.40), 0 4px 6px -4px rgba(0, 0, 0, 0.25)` | Modales dark |
| `--mv-shadow-xl` | `0 20px 25px -5px rgba(0, 0, 0, 0.50), 0 8px 10px -6px rgba(0, 0, 0, 0.30)` | Elementos flotantes principales |

> **Nota dark mode:** Además de sombra, los elementos elevados usan `--mv-surface-elevated` (`#28231E`) como fondo, creando un "brillo suave" que comunica profundidad.

---

## 6. Border Radius

> Bordes suaves pero contenidos — ni sharp ni burbuja. Como las esquinas de un piano de cola: precisas pero con una curva elegante.

| Token | Valor | Uso |
|---|---|---|
| `--mv-radius-sm` | 4px | Inputs, badges, chips, tags — elementos compactos |
| `--mv-radius-md` | 8px | Botones, cards, dropdowns — componentes estándar |
| `--mv-radius-lg` | 16px | Cards destacadas, modales, contenedores de sección |
| `--mv-radius-xl` | 24px | Cards de hero, contenedores de imagen, banners |
| `--mv-radius-full` | 9999px | Avatares, pills, toggles, indicadores de estado |

### Uso por componente

| Componente | Radius recomendado |
|---|---|
| Botones | `--mv-radius-md` (8px) |
| Inputs / Selects | `--mv-radius-sm` (4px) |
| Cards | `--mv-radius-lg` (16px) |
| Modales | `--mv-radius-lg` (16px) |
| Tooltips | `--mv-radius-md` (8px) |
| Avatares | `--mv-radius-full` |
| Badges / Tags | `--mv-radius-sm` (4px) |
| Pills de navegación | `--mv-radius-full` |
| Imágenes hero | `--mv-radius-xl` (24px) |

---

## 7. Breakpoints

> Mobile-first. La experiencia en teléfono es tan importante como en desktop — el 82% de los usuarios de dark mode son mobile.

| Token | Min-width | Rango | Container max-width |
|---|---|---|---|
| `--mv-screen-sm` | 640px | Mobile landscape / Tablet pequeño | 100% (padding: 20px) |
| `--mv-screen-md` | 768px | Tablet portrait | 720px |
| `--mv-screen-lg` | 1024px | Desktop | 960px |
| `--mv-screen-xl` | 1280px | Desktop ancho | 1140px |
| `--mv-screen-2xl` | 1536px | Pantalla ultra-ancha | 1320px |

### Media queries

```css
/* Mobile first — base styles are mobile */
@media (min-width: 640px) { /* sm: tablet/landscape */ }
@media (min-width: 768px) { /* md: tablet portrait */ }
@media (min-width: 1024px) { /* lg: desktop */ }
@media (min-width: 1280px) { /* xl: wide desktop */ }
@media (min-width: 1536px) { /* 2xl: ultra-wide */ }
```

### Contenedores

```css
.mv-container {
  width: 100%;
  margin-inline: auto;
  padding-inline: var(--mv-space-5); /* 20px mobile */
}

@media (min-width: 768px) {
  .mv-container { max-width: 720px; padding-inline: var(--mv-space-6); }
}
@media (min-width: 1024px) {
  .mv-container { max-width: 960px; padding-inline: var(--mv-space-8); }
}
@media (min-width: 1280px) {
  .mv-container { max-width: 1140px; }
}
@media (min-width: 1536px) {
  .mv-container { max-width: 1320px; }
}
```

---

## 8. Transitions

> Las transiciones son las dinámicas de la interfaz — piano, forte, crescendo. Cada movimiento tiene un ritmo que refleja la naturaleza musical de la marca.

### 8.1 Duraciones

| Token | Valor | Uso |
|---|---|---|
| `--mv-duration-fast` | 150ms | Hover states, toggles, color changes — respuesta inmediata, como un staccato |
| `--mv-duration-normal` | 300ms | Transiciones estándar: apertura de menú, cambio de tab, fade in — un pulso natural |
| `--mv-duration-slow` | 500ms | Apariciones de sección, transiciones de página, collapses — un respiro largo |
| `--mv-duration-dramatic` | 800ms | Hero animations al cargar, transiciones entre secciones mayores — el crescendo |

### 8.2 Curvas de Easing

| Token | Valor | Carácter |
|---|---|---|
| `--mv-ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | **Default.** Arranque rápido, aterrizaje suave. Como un director que da la entrada con decisión y deja que el sonido se asiente. |
| `--mv-ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | **Interacciones.** Ligero rebote orgánico. Para botones, toggles, elementos que responden al tacto. |
| `--mv-ease-gentle` | `cubic-bezier(0.4, 0, 0.2, 1)` | **Fades.** Transición suave y contenida. Para apariciones y desapariciones — un diminuendo visual. |
| `--mv-ease-linear` | `linear` | **Progreso.** Barras de carga, animaciones continuas. |

### 8.3 Shortcuts compuestos

```css
--mv-transition-fast: all var(--mv-duration-fast) var(--mv-ease-out);
--mv-transition-normal: all var(--mv-duration-normal) var(--mv-ease-out);
--mv-transition-slow: all var(--mv-duration-slow) var(--mv-ease-gentle);
--mv-transition-dramatic: all var(--mv-duration-dramatic) var(--mv-ease-gentle);
```

---

## 9. Variables CSS Completas

### 9.1 Light Mode (`:root`)

```css
:root {
  /* ================================================
     MEMO VALDEZ — Design Tokens v1.0
     "Minimalismo con alma"
     Prefijo: --mv-
     ================================================ */

  /* --- Color: Primary (Terracota — Humanismo) --- */
  --mv-primary: #B85C38;
  --mv-primary-light: #D4845E;
  --mv-primary-dark: #8E3F22;

  /* --- Color: Secondary (Dorado/Ochre — Sofisticación) --- */
  --mv-secondary: #C8A96E;
  --mv-secondary-light: #DBBF8A;
  --mv-secondary-dark: #A68B4B;

  /* --- Color: Tertiary (Slate Azul — Tecnología) --- */
  --mv-tertiary: #3D5A73;
  --mv-tertiary-light: #5A7A96;
  --mv-tertiary-dark: #2A3F52;

  /* --- Color: Semantic --- */
  --mv-success: #4A7C59;
  --mv-warning: #D4A843;
  --mv-error: #C44B4B;
  --mv-error-dark: #A83838;
  --mv-info: #4A6FA5;

  /* --- Color: Neutrals (Warm Gray Scale) --- */
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

  /* --- Color: Surfaces --- */
  --mv-bg: #FEFEFE;
  --mv-surface: #F5F0EB;
  --mv-surface-elevated: #FFFFFF;
  --mv-overlay: rgba(35, 31, 27, 0.60);

  /* --- Color: Text --- */
  --mv-text-primary: #231F1B;
  --mv-text-secondary: #574E44;
  --mv-text-tertiary: #968A7D;
  --mv-text-inverse: #FEFEFE;

  /* --- Typography: Families --- */
  --mv-font-display: 'Instrument Sans', 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;
  --mv-font-body: 'Inter', system-ui, -apple-system, sans-serif;
  --mv-font-serif: 'Bodoni Moda', 'Playfair Display', Georgia, serif;
  --mv-font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', monospace;

  /* --- Typography: Size Scale --- */
  --mv-text-xs: 0.75rem;     /* 12px */
  --mv-text-sm: 0.875rem;    /* 14px */
  --mv-text-base: 1rem;      /* 16px */
  --mv-text-lg: 1.125rem;    /* 18px */
  --mv-text-xl: 1.25rem;     /* 20px */
  --mv-text-2xl: 1.5rem;     /* 24px */
  --mv-text-3xl: 1.875rem;   /* 30px */
  --mv-text-4xl: 2.5rem;     /* 40px */
  --mv-text-5xl: 3.5rem;     /* 56px */

  /* --- Typography: Weights --- */
  --mv-font-light: 300;
  --mv-font-regular: 400;
  --mv-font-medium: 500;
  --mv-font-semibold: 600;
  --mv-font-bold: 700;

  /* --- Typography: Line Heights --- */
  --mv-leading-tight: 1.2;
  --mv-leading-normal: 1.5;
  --mv-leading-relaxed: 1.7;

  /* --- Typography: Letter Spacing --- */
  --mv-tracking-tight: -0.02em;
  --mv-tracking-normal: 0em;
  --mv-tracking-wide: 0.05em;
  --mv-tracking-widest: 0.1em;

  /* --- Spacing (4px base) --- */
  --mv-space-0: 0;
  --mv-space-0-5: 0.125rem;  /* 2px */
  --mv-space-1: 0.25rem;     /* 4px */
  --mv-space-2: 0.5rem;      /* 8px */
  --mv-space-3: 0.75rem;     /* 12px */
  --mv-space-4: 1rem;        /* 16px */
  --mv-space-5: 1.25rem;     /* 20px */
  --mv-space-6: 1.5rem;      /* 24px */
  --mv-space-8: 2rem;        /* 32px */
  --mv-space-10: 2.5rem;     /* 40px */
  --mv-space-12: 3rem;       /* 48px */
  --mv-space-16: 4rem;       /* 64px */
  --mv-space-20: 5rem;       /* 80px */
  --mv-space-24: 6rem;       /* 96px */

  /* --- Shadows (Light Mode) --- */
  --mv-shadow-sm: 0 1px 2px 0 rgba(35, 31, 27, 0.05);
  --mv-shadow-md: 0 4px 6px -1px rgba(35, 31, 27, 0.08), 0 2px 4px -2px rgba(35, 31, 27, 0.05);
  --mv-shadow-lg: 0 10px 15px -3px rgba(35, 31, 27, 0.10), 0 4px 6px -4px rgba(35, 31, 27, 0.06);
  --mv-shadow-xl: 0 20px 25px -5px rgba(35, 31, 27, 0.12), 0 8px 10px -6px rgba(35, 31, 27, 0.06);

  /* --- Border Radius --- */
  --mv-radius-sm: 4px;
  --mv-radius-md: 8px;
  --mv-radius-lg: 16px;
  --mv-radius-xl: 24px;
  --mv-radius-full: 9999px;

  /* --- Breakpoints (for reference, use media queries) --- */
  --mv-screen-sm: 640px;
  --mv-screen-md: 768px;
  --mv-screen-lg: 1024px;
  --mv-screen-xl: 1280px;
  --mv-screen-2xl: 1536px;

  /* --- Transitions: Durations --- */
  --mv-duration-fast: 150ms;
  --mv-duration-normal: 300ms;
  --mv-duration-slow: 500ms;
  --mv-duration-dramatic: 800ms;

  /* --- Transitions: Easings --- */
  --mv-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --mv-ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --mv-ease-gentle: cubic-bezier(0.4, 0, 0.2, 1);
  --mv-ease-linear: linear;

  /* --- Transitions: Shortcuts --- */
  --mv-transition-fast: all 150ms cubic-bezier(0.16, 1, 0.3, 1);
  --mv-transition-normal: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
  --mv-transition-slow: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  --mv-transition-dramatic: all 800ms cubic-bezier(0.4, 0, 0.2, 1);

  /* --- Focus --- */
  --mv-focus-ring: 0 0 0 2px var(--mv-bg), 0 0 0 4px var(--mv-primary);
  --mv-focus-ring-offset: 2px;

  /* --- Z-Index Scale --- */
  --mv-z-dropdown: 10;
  --mv-z-sticky: 20;
  --mv-z-fixed: 30;
  --mv-z-modal-backdrop: 40;
  --mv-z-modal: 50;
  --mv-z-popover: 60;
  --mv-z-tooltip: 70;
}
```

### 9.2 Dark Mode (`[data-theme="dark"]`)

```css
[data-theme="dark"] {
  /* --- Color: Primary (Terracota Elevado) --- */
  --mv-primary: #D4845E;
  --mv-primary-light: #E8A882;
  --mv-primary-dark: #B85C38;

  /* --- Color: Secondary (Dorado Luminoso) --- */
  --mv-secondary: #DBBF8A;
  --mv-secondary-light: #EAD5A8;
  --mv-secondary-dark: #C8A96E;

  /* --- Color: Tertiary (Slate Azul Iluminado) --- */
  --mv-tertiary: #6B9DBF;
  --mv-tertiary-light: #8BB8D4;
  --mv-tertiary-dark: #4A7999;

  /* --- Color: Semantic (Dark Mode) --- */
  --mv-success: #6BAF7B;
  --mv-warning: #E4BF5A;
  --mv-error: #E07070;
  --mv-error-dark: #C44B4B;
  --mv-info: #6B93CC;

  /* --- Color: Neutrals (Inverted warm scale) --- */
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

  /* --- Color: Surfaces (Dark) --- */
  --mv-bg: #131110;
  --mv-surface: #1C1916;
  --mv-surface-elevated: #28231E;
  --mv-overlay: rgba(0, 0, 0, 0.70);

  /* --- Color: Text (Dark) --- */
  --mv-text-primary: #F0EBE5;
  --mv-text-secondary: #B8ADA0;
  --mv-text-tertiary: #756A5E;
  --mv-text-inverse: #231F1B;

  /* --- Shadows (Dark Mode) --- */
  --mv-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.20);
  --mv-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.30), 0 2px 4px -2px rgba(0, 0, 0, 0.20);
  --mv-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.40), 0 4px 6px -4px rgba(0, 0, 0, 0.25);
  --mv-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.50), 0 8px 10px -6px rgba(0, 0, 0, 0.30);

  /* --- Focus (Dark) --- */
  --mv-focus-ring: 0 0 0 2px var(--mv-bg), 0 0 0 4px var(--mv-primary);

  /* --- Typography: Weight Compensation (Dark thinning) --- */
  --mv-font-light: 350;
  --mv-font-regular: 420;
}

/* --- System preference auto-detect --- */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    /* Same overrides as [data-theme="dark"] above */
    /* Apply when user hasn't explicitly chosen light mode */
  }
}

/* --- Reduced Motion --- */
@media (prefers-reduced-motion: reduce) {
  :root {
    --mv-duration-fast: 0ms;
    --mv-duration-normal: 0ms;
    --mv-duration-slow: 0ms;
    --mv-duration-dramatic: 0ms;
  }
}
```

---

## 10. Componentes Base — Referencia Rápida

> Guía de aplicación de tokens a los componentes fundamentales.

### 10.1 Botón Primario

```css
.mv-btn-primary {
  background: var(--mv-primary);
  color: var(--mv-text-inverse);
  font-family: var(--mv-font-body);
  font-size: var(--mv-text-sm);
  font-weight: var(--mv-font-semibold);
  padding: var(--mv-space-3) var(--mv-space-6);
  border-radius: var(--mv-radius-md);
  transition: var(--mv-transition-fast);
  box-shadow: var(--mv-shadow-sm);
}

.mv-btn-primary:hover {
  background: var(--mv-primary-dark);
  box-shadow: var(--mv-shadow-md);
}

.mv-btn-primary:focus-visible {
  box-shadow: var(--mv-focus-ring);
  outline: none;
}

.mv-btn-primary:disabled {
  background: var(--mv-neutral-300);
  color: var(--mv-neutral-500);
  box-shadow: none;
  cursor: not-allowed;
}
```

### 10.2 Input Field

```css
.mv-input {
  background: var(--mv-surface-elevated);
  color: var(--mv-text-primary);
  font-family: var(--mv-font-body);
  font-size: var(--mv-text-base);
  padding: var(--mv-space-3) var(--mv-space-4);
  border: 1px solid var(--mv-neutral-300);
  border-radius: var(--mv-radius-sm);
  transition: var(--mv-transition-fast);
}

.mv-input:focus {
  border-color: var(--mv-primary);
  box-shadow: var(--mv-focus-ring);
  outline: none;
}

.mv-input::placeholder {
  color: var(--mv-text-tertiary);
}
```

### 10.3 Card

```css
.mv-card {
  background: var(--mv-surface);
  border-radius: var(--mv-radius-lg);
  padding: var(--mv-space-6);
  box-shadow: var(--mv-shadow-sm);
  transition: var(--mv-transition-normal);
}

.mv-card:hover {
  box-shadow: var(--mv-shadow-md);
  transform: translateY(-2px);
}
```

---

## Apéndice A: Google Fonts — Implementación Gratuita

```html
<!-- Instrument Sans (Display) + Inter (Body) + Bodoni Moda (Serif) + JetBrains Mono -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,700;1,6..96,400&family=Instrument+Sans:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet">
```

**Alternativa si se adquiere licencia Klim Type Foundry:**
Reemplazar `Instrument Sans` por `Söhne` en `--mv-font-display`. Los pesos y tamaños se mantienen.

---

## Apéndice B: Resumen Narrativo de la Paleta

```
La paleta de Memo Valdez cuenta una historia en tres actos:

🟤 TERRACOTA (#B85C38) — La tierra
    La arcilla de las manos que dirigen. La calidez del humanismo.
    El color que dice: "aquí hay una persona real."

🟡 DORADO (#C8A96E) — La luz
    El bronce de un instrumento. La hora dorada en Mérida.
    La sofisticación que no necesita gritar.

🔵 SLATE (#3D5A73) — La profundidad
    El azul de una pantalla a medianoche. La serenidad del pensamiento.
    La tecnología que sirve, no que domina.

Sobre un fondo de CARBÓN CÁLIDO (#131110) en dark mode
o CREMA (#FEFEFE) en light mode —
como una partitura esperando las notas.
```

---

*Documento generado como Fase 3 del pipeline de brandbook para la marca personal "Memo Valdez".*  
*Siguiente paso: Brand Voice Guidelines y prototipo de landing page.*
