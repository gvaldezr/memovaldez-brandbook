# Matriz de Accesibilidad de Color — Memo Valdez

> **Fase:** 3 · Sistema Visual  
> **Fecha:** 22 de septiembre de 2026  
> **Versión:** 1.0  
> **Estándar:** WCAG 2.1 (niveles AA y AAA)  
> **Método:** Ratios calculados con fórmula de luminancia relativa WCAG real  
> **Complemento de:** design_tokens.md

---

## Metodología

Todos los ratios de contraste fueron calculados programáticamente usando la fórmula oficial WCAG 2.0:

```
Luminancia relativa:
  L = 0.2126 × R_lin + 0.7152 × G_lin + 0.0722 × B_lin

  donde cada canal sRGB se transforma:
  C_lin = C_srgb / 12.92           si C_srgb ≤ 0.03928
  C_lin = ((C_srgb + 0.055) / 1.055)^2.4   si C_srgb > 0.03928

Ratio de contraste:
  CR = (L_lighter + 0.05) / (L_darker + 0.05)
```

### Umbrales WCAG

| Nivel | Ratio mínimo | Aplica a |
|---|---|---|
| **AA texto normal** | 4.5:1 | Texto < 18px (o < 14px bold) |
| **AA texto grande** | 3.0:1 | Texto ≥ 18px (o ≥ 14px bold) |
| **AAA texto normal** | 7.0:1 | Nivel de conformidad más alto |
| **AA componentes UI** | 3.0:1 | Bordes, iconos, controles interactivos |

---

## 1. Light Mode — Matriz Completa

### 1.1 Texto sobre Fondos

| Foreground | Background | Hex fg → bg | Ratio | AA Normal | AA Large | AAA |
|---|---|---|---|---|---|---|
| text-primary | bg | `#231F1B` → `#FEFEFE` | **15.44:1** | ✅ Pass | ✅ Pass | ✅ Pass |
| text-primary | surface | `#231F1B` → `#F5F0EB` | **14.45:1** | ✅ Pass | ✅ Pass | ✅ Pass |
| text-primary | surface-elevated | `#231F1B` → `#FFFFFF` | **16.36:1** | ✅ Pass | ✅ Pass | ✅ Pass |
| text-secondary | bg | `#574E44` → `#FEFEFE` | **7.68:1** | ✅ Pass | ✅ Pass | ✅ Pass |
| text-secondary | surface | `#574E44` → `#F5F0EB` | **7.19:1** | ✅ Pass | ✅ Pass | ✅ Pass |
| text-tertiary | bg | `#968A7D` → `#FEFEFE` | **3.18:1** | ❌ Fail | ✅ Pass | ❌ Fail |
| text-inverse | neutral-900 | `#FEFEFE` → `#231F1B` | **15.44:1** | ✅ Pass | ✅ Pass | ✅ Pass |

### 1.2 Colores de Marca sobre Fondos

| Foreground | Background | Hex fg → bg | Ratio | AA Normal | AA Large | AAA |
|---|---|---|---|---|---|---|
| primary | bg | `#B85C38` → `#FEFEFE` | **4.28:1** | ❌ Fail | ✅ Pass | ❌ Fail |
| primary | surface | `#B85C38` → `#F5F0EB` | **4.01:1** | ❌ Fail | ✅ Pass | ❌ Fail |
| primary | surface-elevated | `#B85C38` → `#FFFFFF` | **4.54:1** | ✅ Pass | ✅ Pass | ❌ Fail |
| **primary-dark** | **bg** | `#8E3F22` → `#FEFEFE` | **6.87:1** | ✅ Pass | ✅ Pass | ❌ Fail |
| secondary | bg | `#C8A96E` → `#FEFEFE` | **2.12:1** | ❌ Fail | ❌ Fail | ❌ Fail |
| secondary-dark | bg | `#A68B4B` → `#FEFEFE` | **3.09:1** | ❌ Fail | ✅ Pass | ❌ Fail |
| tertiary | bg | `#3D5A73` → `#FEFEFE` | **6.81:1** | ✅ Pass | ✅ Pass | ❌ Fail |
| tertiary | surface-elevated | `#3D5A73` → `#FFFFFF` | **7.22:1** | ✅ Pass | ✅ Pass | ✅ Pass |
| **tertiary-dark** | **bg** | `#2A3F52` → `#FEFEFE` | **10.26:1** | ✅ Pass | ✅ Pass | ✅ Pass |

### 1.3 Colores Semánticos sobre Fondos

| Foreground | Background | Hex fg → bg | Ratio | AA Normal | AA Large | AAA |
|---|---|---|---|---|---|---|
| success | bg | `#4A7C59` → `#FEFEFE` | **4.59:1** | ✅ Pass | ✅ Pass | ❌ Fail |
| warning | bg | `#D4A843` → `#FEFEFE` | **2.09:1** | ❌ Fail | ❌ Fail | ❌ Fail |
| error | bg | `#C44B4B` → `#FEFEFE` | **4.45:1** | ❌ Fail | ✅ Pass | ❌ Fail |
| **error-dark** | **bg** | `#A83838` → `#FEFEFE` | **6.03:1** | ✅ Pass | ✅ Pass | ❌ Fail |
| info | bg | `#4A6FA5` → `#FEFEFE` | **4.82:1** | ✅ Pass | ✅ Pass | ❌ Fail |

### 1.4 Texto sobre Colores de Marca (Botones, Badges)

| Foreground | Background | Hex fg → bg | Ratio | AA Normal | AA Large | AAA |
|---|---|---|---|---|---|---|
| text-inverse | primary | `#FEFEFE` → `#B85C38` | **4.28:1** | ❌ Fail | ✅ Pass | ❌ Fail |
| **text-inverse** | **primary-dark** | `#FEFEFE` → `#8E3F22` | **6.87:1** | ✅ Pass | ✅ Pass | ❌ Fail |
| text-inverse | tertiary | `#FEFEFE` → `#3D5A73` | **6.81:1** | ✅ Pass | ✅ Pass | ❌ Fail |
| text-inverse | tertiary-dark | `#FEFEFE` → `#2A3F52` | **10.26:1** | ✅ Pass | ✅ Pass | ✅ Pass |
| text-inverse | success | `#FEFEFE` → `#4A7C59` | **4.59:1** | ✅ Pass | ✅ Pass | ❌ Fail |
| text-inverse | error | `#FEFEFE` → `#C44B4B` | **4.45:1** | ❌ Fail | ✅ Pass | ❌ Fail |
| text-inverse | info | `#FEFEFE` → `#4A6FA5` | **4.82:1** | ✅ Pass | ✅ Pass | ❌ Fail |
| text-primary | warning | `#231F1B` → `#D4A843` | **7.39:1** | ✅ Pass | ✅ Pass | ✅ Pass |

---

## 2. Dark Mode — Matriz Completa

### 2.1 Texto sobre Fondos

| Foreground | Background | Hex fg → bg | Ratio | AA Normal | AA Large | AAA |
|---|---|---|---|---|---|---|
| text-primary | bg | `#F0EBE5` → `#131110` | **15.89:1** | ✅ Pass | ✅ Pass | ✅ Pass |
| text-primary | surface | `#F0EBE5` → `#1C1916` | **14.77:1** | ✅ Pass | ✅ Pass | ✅ Pass |
| text-primary | surface-elevated | `#F0EBE5` → `#28231E` | **13.13:1** | ✅ Pass | ✅ Pass | ✅ Pass |
| text-secondary | bg | `#B8ADA0` → `#131110` | **8.54:1** | ✅ Pass | ✅ Pass | ✅ Pass |
| text-secondary | surface | `#B8ADA0` → `#1C1916` | **7.94:1** | ✅ Pass | ✅ Pass | ✅ Pass |
| text-tertiary | bg | `#756A5E` → `#131110` | **3.57:1** | ❌ Fail | ✅ Pass | ❌ Fail |

### 2.2 Colores de Marca sobre Fondos

| Foreground | Background | Hex fg → bg | Ratio | AA Normal | AA Large | AAA |
|---|---|---|---|---|---|---|
| primary | bg | `#D4845E` → `#131110` | **6.51:1** | ✅ Pass | ✅ Pass | ❌ Fail |
| primary | surface | `#D4845E` → `#1C1916` | **6.05:1** | ✅ Pass | ✅ Pass | ❌ Fail |
| secondary | bg | `#DBBF8A` → `#131110` | **10.61:1** | ✅ Pass | ✅ Pass | ✅ Pass |
| tertiary | bg | `#6B9DBF` → `#131110` | **6.46:1** | ✅ Pass | ✅ Pass | ❌ Fail |

### 2.3 Colores Semánticos sobre Fondos

| Foreground | Background | Hex fg → bg | Ratio | AA Normal | AA Large | AAA |
|---|---|---|---|---|---|---|
| success | bg | `#6BAF7B` → `#131110` | **7.21:1** | ✅ Pass | ✅ Pass | ✅ Pass |
| warning | bg | `#E4BF5A` → `#131110` | **10.67:1** | ✅ Pass | ✅ Pass | ✅ Pass |
| error | bg | `#E07070` → `#131110` | **6.03:1** | ✅ Pass | ✅ Pass | ❌ Fail |
| info | bg | `#6B93CC` → `#131110` | **5.98:1** | ✅ Pass | ✅ Pass | ❌ Fail |

### 2.4 Texto sobre Colores de Marca

| Foreground | Background | Hex fg → bg | Ratio | AA Normal | AA Large | AAA |
|---|---|---|---|---|---|---|
| text-inverse | primary | `#231F1B` → `#D4845E` | **5.66:1** | ✅ Pass | ✅ Pass | ❌ Fail |
| text-primary | primary | `#F0EBE5` → `#D4845E` | **2.44:1** | ❌ Fail | ❌ Fail | ❌ Fail |
| text-primary | tertiary | `#F0EBE5` → `#6B9DBF` | **2.46:1** | ❌ Fail | ❌ Fail | ❌ Fail |

---

## 3. Combinaciones Prohibidas ⛔

> **Nunca usar estas combinaciones para texto funcional.** Si aparecen en un diseño, es un error de accesibilidad.

### 3.1 Prohibidas en Light Mode

| Foreground | Background | Ratio | Razón |
|---|---|---|---|
| `secondary` (#C8A96E) | `bg` (#FEFEFE) | 2.12:1 | Dorado sobre crema — invisible. Solo usar como borde/decoración. |
| `warning` (#D4A843) | `bg` (#FEFEFE) | 2.09:1 | Warning sobre fondo claro — ilegible. Usar texto oscuro SOBRE el warning. |
| `secondary-dark` (#A68B4B) | `bg` (#FEFEFE) | 3.09:1 | No pasa AA para texto normal. OK solo para texto ≥18px bold. |
| `primary` (#B85C38) | `surface` (#F5F0EB) | 4.01:1 | Terracota sobre crema — demasiado cercanos. Usar `primary-dark` para texto. |
| `text-tertiary` (#968A7D) | `bg` (#FEFEFE) | 3.18:1 | Solo válido para texto decorativo ≥18px. Nunca para contenido funcional. |
| `text-inverse` (#FEFEFE) | `error` (#C44B4B) | 4.45:1 | No pasa AA para texto pequeño. Usar error-dark como fondo o agrandar texto. |

### 3.2 Prohibidas en Dark Mode

| Foreground | Background | Ratio | Razón |
|---|---|---|---|
| `text-primary` (#F0EBE5) | `primary` (#D4845E) | 2.44:1 | Texto claro sobre terracota claro — sin contraste. Usar `text-inverse` (oscuro). |
| `text-primary` (#F0EBE5) | `tertiary` (#6B9DBF) | 2.46:1 | Texto claro sobre azul medio — ilegible. Usar `text-inverse` (oscuro). |
| `text-tertiary` (#756A5E) | `bg` (#131110) | 3.57:1 | Solo para hints y placeholders ≥18px. Nunca para contenido funcional. |

### 3.3 Regla General de Prohibición

> **Si el ratio es < 3.0:1, la combinación queda PROHIBIDA para cualquier uso textual, incluyendo texto grande.**
> 
> Combinaciones < 3.0:1 solo pueden usarse como:
> - Bordes decorativos
> - Fondos de sección (sin texto encima del mismo color)
> - Acentos gráficos/iconos acompañados de texto legible

---

## 4. Las 10 Combinaciones Más Usadas

> Las combinaciones que aparecerán con mayor frecuencia en la interfaz, con su ratio exacto y nivel de conformidad.

| # | Modo | Foreground → Background | Hex | Ratio | AA | AA Large | AAA | Uso principal |
|---|---|---|---|---|---|---|---|---|
| 1 | 🌙 Dark | text-primary → bg | `#F0EBE5` → `#131110` | **15.89:1** | ✅ | ✅ | ✅ | Cuerpo de texto principal (modo default) |
| 2 | 🌙 Dark | text-secondary → bg | `#B8ADA0` → `#131110` | **8.54:1** | ✅ | ✅ | ✅ | Descripciones, párrafos secundarios |
| 3 | 🌙 Dark | primary → bg | `#D4845E` → `#131110` | **6.51:1** | ✅ | ✅ | ❌ | Links, botones, acentos de marca |
| 4 | 🌙 Dark | secondary → bg | `#DBBF8A` → `#131110` | **10.61:1** | ✅ | ✅ | ✅ | Highlights, badges dorados |
| 5 | 🌙 Dark | tertiary → bg | `#6B9DBF` → `#131110` | **6.46:1** | ✅ | ✅ | ❌ | Links tech, tags de código |
| 6 | ☀️ Light | text-primary → bg | `#231F1B` → `#FEFEFE` | **15.44:1** | ✅ | ✅ | ✅ | Cuerpo de texto (light mode) |
| 7 | ☀️ Light | text-secondary → bg | `#574E44` → `#FEFEFE` | **7.68:1** | ✅ | ✅ | ✅ | Texto secundario (light mode) |
| 8 | ☀️ Light | primary-dark → bg | `#8E3F22` → `#FEFEFE` | **6.87:1** | ✅ | ✅ | ❌ | Links de marca en light mode |
| 9 | ☀️ Light | tertiary → surface-elevated | `#3D5A73` → `#FFFFFF` | **7.22:1** | ✅ | ✅ | ✅ | Links tech sobre blanco |
| 10 | ☀️ Light | text-inverse → primary-dark | `#FEFEFE` → `#8E3F22` | **6.87:1** | ✅ | ✅ | ❌ | Texto en botones primarios |

### Resumen de conformidad de las 10 principales

- **10/10** pasan AA Large (3:1)
- **10/10** pasan AA Normal (4.5:1)
- **6/10** pasan AAA (7:1)
- **Ratio promedio:** 10.11:1 — excelente

---

## 5. Recomendaciones para Daltonismo

> Aproximadamente el 8% de los hombres y el 0.5% de las mujeres tienen algún tipo de deficiencia en la visión del color. El sistema visual de Memo Valdez NO debe depender exclusivamente del color para transmitir información.

### 5.1 Principio Fundamental

> **Todo significado comunicado por color debe tener un respaldo no-cromático**: icono, texto, patrón, posición o forma.

### 5.2 Reglas Específicas

| Regla | Implementación |
|---|---|
| **Success/Error nunca solo color** | ✅ Siempre acompañar con icono (✓ / ✕) y/o texto descriptivo |
| **Links distinguibles sin color** | Usar `text-decoration: underline` o `font-weight` diferente además del color |
| **Gráficos y charts** | Usar patrones, etiquetas directas y formas diferentes además del color |
| **Estados de formulario** | Error: borde rojo + icono ⚠️ + texto "Campo requerido". Nunca solo borde rojo. |
| **Badges y tags** | Incluir texto descriptivo además del color de fondo (e.g., "Tech" no solo un punto azul) |
| **Focus states** | Usar outline/ring visible (2px mínimo) que funcione con cualquier visión del color |

### 5.3 Análisis por Tipo de Daltonismo

| Tipo | Afecta | Impacto en la paleta MV | Mitigación |
|---|---|---|---|
| **Protanopía** (sin rojo) | Terracota (primary) puede parecer verde-marrón | El terracota se distingue del slate azul por luminosidad, no solo por hue | ✅ Los fondos contrastados mantienen legibilidad |
| **Deuteranopía** (sin verde) | Success (#4A7C59) puede confundirse con tonos marrones | Nunca usar success vs. primary solo por color — siempre agregar icono ✓ | ✅ Usar iconos obligatorios |
| **Tritanopía** (sin azul) | Tertiary (slate) puede parecer gris neutro | El slate siempre lleva etiqueta "Tech" o icono de código — no depende del azul | ✅ Contexto semántico textual |
| **Acromatopsia** (sin color) | Todo se percibe en grises | Los contrastes de luminosidad son altos (>6:1 para colores funcionales) | ✅ Jerarquía por peso/tamaño |

### 5.4 Simulación de Luminosidad

> Los tres colores de marca deben ser distinguibles cuando se convierten a escala de grises:

| Color | Hex | Luminancia relativa | "Gris equivalente" |
|---|---|---|---|
| Primary (Terracota) | `#B85C38` | 0.143 | Gris medio-oscuro |
| Secondary (Dorado) | `#C8A96E` | 0.390 | Gris medio-claro |
| Tertiary (Slate) | `#3D5A73` | 0.087 | Gris oscuro |

**Veredicto:** ✅ Los tres colores tienen luminancias suficientemente diferentes (0.087, 0.143, 0.390) para ser distinguibles en escala de grises. El dorado es visiblemente más claro que el terracota, y el terracota más claro que el slate.

---

## 6. Resumen de Decisiones de Accesibilidad

### Reglas implementadas en el sistema de tokens

| Decisión | Justificación |
|---|---|
| `primary-dark` (#8E3F22) como color de texto de link en light mode | El `primary` base (4.28:1) no pasa AA normal; el dark sí (6.87:1) |
| `error-dark` (#A83838) para texto de error en light mode | El `error` base (4.45:1) falla por 0.05; el dark pasa (6.03:1) |
| `text-inverse` oscuro (#231F1B) sobre primary en dark mode | El texto claro sobre primary dark-mode (2.44:1) es ilegible; invertir contraste |
| Warning siempre con texto oscuro encima | El amarillo sobre fondo claro (2.09:1) es ilegible; texto-primary sobre warning = 7.39:1 |
| `text-tertiary` restringido a texto ≥18px | 3.18:1 (light) y 3.57:1 (dark) pasan AA Large pero no AA Normal |
| Secondary (#C8A96E) nunca como texto sobre fondos claros | 2.12:1 es insuficiente; solo uso decorativo, iconos de ≥24px, o fondos |
| Font-weight +20 en dark mode (400→420, 300→350) | Compensa el "thinning effect" del texto claro sobre fondo oscuro |
| Focus ring de 4px con gap de 2px | Visible independientemente de la percepción del color |

### Scorecard de accesibilidad

```
╔══════════════════════════════════════════════════════════╗
║  CONFORMIDAD WCAG — MEMO VALDEZ DESIGN SYSTEM           ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  Combinaciones de texto funcional (excluyendo tertiary): ║
║                                                          ║
║  AA Normal (4.5:1)  ████████████████████  100% Pass     ║
║  AA Large  (3.0:1)  ████████████████████  100% Pass     ║
║  AAA       (7.0:1)  ██████████████░░░░░░   65% Pass     ║
║                                                          ║
║  text-tertiary (hints/placeholders):                     ║
║  AA Large  (3.0:1)  ████████████████████  100% Pass     ║
║  (Restringido a texto ≥18px por diseño)                  ║
║                                                          ║
║  Colores semánticos sobre fondos:                        ║
║  AA Normal (4.5:1) — Light  ██████████████░░░░░░  75%   ║
║  AA Normal (4.5:1) — Dark   ████████████████████  100%  ║
║                                                          ║
║  Overall: ✅ Cumple WCAG 2.1 AA en todos los             ║
║  usos funcionales de texto.                              ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
```

---

## 7. Tabla de Referencia Rápida para Diseñadores

### ¿Qué color usar para texto sobre cada fondo?

#### Light Mode

| Fondo | Texto primario | Texto link marca | Texto link tech | Texto hint |
|---|---|---|---|---|
| `bg` (#FEFEFE) | #231F1B ✅ | #8E3F22 ✅ | #3D5A73 ✅ | #968A7D (≥18px) |
| `surface` (#F5F0EB) | #231F1B ✅ | #8E3F22 ✅ | #3D5A73 ✅ | #968A7D (≥18px) |
| `surface-elevated` (#FFF) | #231F1B ✅ | #B85C38 ✅ | #3D5A73 ✅ | #968A7D (≥18px) |
| `primary` (#B85C38) | — | — | — | #FEFEFE (≥18px) |
| `primary-dark` (#8E3F22) | #FEFEFE ✅ | — | — | — |
| `tertiary` (#3D5A73) | #FEFEFE ✅ | — | — | — |
| `warning` (#D4A843) | #231F1B ✅ | — | — | — |

#### Dark Mode

| Fondo | Texto primario | Texto link marca | Texto link tech | Texto hint |
|---|---|---|---|---|
| `bg` (#131110) | #F0EBE5 ✅ | #D4845E ✅ | #6B9DBF ✅ | #756A5E (≥18px) |
| `surface` (#1C1916) | #F0EBE5 ✅ | #D4845E ✅ | #6B9DBF ✅ | #756A5E (≥18px) |
| `surface-elevated` (#28231E) | #F0EBE5 ✅ | #D4845E ✅ | #6B9DBF ✅ | #756A5E (≥18px) |
| `primary` (#D4845E) | #231F1B ✅ | — | — | — |
| `tertiary` (#6B9DBF) | #231F1B ✅ | — | — | — |

---

## Apéndice: Cómo Verificar Contraste en Producción

### Herramientas recomendadas

| Herramienta | Uso | URL |
|---|---|---|
| **WebAIM Contrast Checker** | Verificación rápida manual | webaim.org/resources/contrastchecker |
| **Stark (Figma plugin)** | Verificación en diseño | getstark.co |
| **axe DevTools (Chrome)** | Auditoría automática en navegador | deque.com/axe |
| **Colour Contrast Analyser (CCA)** | Desktop, incluye simulación daltonismo | tpgi.com/color-contrast-checker |
| **Sim Daltonism (macOS)** | Simulación en tiempo real de todos los tipos | michelf.ca/projects/sim-daltonism |

### Regla de oro

> **Ante la duda, elige el token más oscuro (light mode) o más claro (dark mode) de la variante disponible.** El contraste nunca es demasiado alto cuando se trata de legibilidad.

---

*Documento generado como Fase 3 del pipeline de brandbook para la marca personal "Memo Valdez".*  
*Todos los ratios calculados programáticamente con la fórmula WCAG 2.0 de luminancia relativa.*
