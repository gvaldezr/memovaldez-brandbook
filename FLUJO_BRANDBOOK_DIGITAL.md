# 🎨 Flujo Estructurado: Brandbook para Producción Digital

> **Plantilla reutilizable** para generar un brandbook completo orientado a producción digital (web, app, redes sociales) con alineación a tendencias actuales de diseño, UI y UX. **Aplicable a:** Empresas, instituciones educativas, marcas personales, startups, proyectos digitales **Agentes involucrados:** 7 agentes especializados + Kiro (implementación) **Fases:** 7 fases (6 definición + 1 implementación, con paralelismo en Fases 3 y 4) **Fecha:** Septiembre 2026

---

## 📋 Visión General del Pipeline

```
┌──────────────┐   ┌──────────────┐   ┌───────────────────────┐
│  FASE 1      │──▶│  FASE 2      │──▶│  FASE 3               │
│  Descubri-   │   │  Estrategia  │   │  Sistema Visual       │
│  miento &    │   │  de Marca    │   │  (3 agentes paralelo) │
│  Análisis    │   │              │   │                       │
└──────────────┘   └──────────────┘   └───────────────────────┘
                                               │
                                               ▼
┌──────────────┐   ┌──────────────┐   ┌───────────────────────┐
│  FASE 6      │◀──│  FASE 5      │◀──│  FASE 4               │
│  Revisión    │   │  Compilación │   │  Componentes UI &     │
│  & QA        │   │  del         │   │  Interacción          │
│  de Marca    │   │  Brandbook   │   │  (3 agentes paralelo) │
└──────────────┘   └──────────────┘   └───────────────────────┘

```

---

## 📦 Prerrequisitos

Antes de iniciar, necesitas:

1. **Briefing del cliente** — Descripción de la empresa/persona, sector, objetivos del proyecto digital
2. **Assets existentes** (si los hay) — Logo actual, materiales de marca, sitio web, redes sociales
3. **Referentes visuales** (opcionales) — Marcas o sitios que el cliente admira o quiere emular
4. **Alcance digital** — Canales donde se usará el brandbook (web, app, redes, email, etc.)

---

## 🔍 Fase 1: Descubrimiento & Análisis de la Marca

**Agente:** UX Researcher **Input:** Briefing del cliente + assets existentes + URL del sitio web (si existe) **Output:** `descubrimiento_{marca}/`

### Tareas

| Agente | Tarea |
| --- | --- |
| **UX Researcher** | Investigar la empresa/persona: historia, misión, visión, valores declarados, mercado objetivo, modelo de negocio, diferenciadores. Si existe sitio web, analizar con `url_fetch` o `browser` para extraer identidad actual |
| **UX Researcher** | Crear personas de audiencia target: perfil demográfico, psicográfico, expectativas visuales, nivel de sofisticación digital, dispositivos predominantes |
| **UX Researcher** | Benchmarking competitivo visual: analizar 3-5 competidores directos con `web_search` + `browser`. Capturar paletas de color, tipografía, estilo visual, tono, componentes UI recurrentes |
| **UX Researcher** | Auditoría de assets existentes: evaluar logo, colores, tipografía, materiales impresos/digitales actuales. Calificar consistencia, modernidad, alineación con tendencias |
| **UX Researcher** | Mapeo de tendencias de diseño: investigar con `web_search` las tendencias UI/UX/branding vigentes (2025-2026) relevantes al sector del cliente |

### Entregables

```
descubrimiento_{marca}/
├── research_brief.md              ← Hallazgos clave de la investigación
├── personas_audiencia.md          ← 2-3 personas del público target
├── benchmark_competitivo.md       ← Análisis visual de 3-5 competidores con screenshots
├── audit_assets_existentes.md     ← Inventario y evaluación de materiales actuales
└── tendencias_sector.md           ← Tendencias UI/UX/diseño relevantes al sector

```

### Prompt clave

> "Investiga a fondo la marca [NOMBRE]. Analiza su sitio web [URL], sus redes sociales y su presencia digital. Crea personas de su audiencia target. Haz benchmarking visual de 3-5 competidores directos en [SECTOR]. Identifica tendencias de diseño UI/UX 2025-2026 relevantes para este tipo de marca. Audita los assets existentes y califica su consistencia."

### Reglas críticas

⚠️ **TODAS las URLs de competidores y tendencias se verifican con **`url_fetch`** o **`browser`**.** No se permite ninguna URL generada por LLM sin verificación.

⚠️ **Screenshots de competidores:** usar `browser` para capturar evidencia visual real cuando sea posible.

### Gate de salida

✅ Brief de descubrimiento revisado y aprobado por el cliente. Sin validación del análisis no se avanza a Fase 2.

---

## 🧭 Fase 2: Estrategia de Marca

**Agente:** Brand Guardian **Input:** Descubrimiento aprobado (Fase 1) **Output:** `estrategia_{marca}/`

### Tareas

| Agente | Tarea |
| --- | --- |
| **Brand Guardian** | Definir Brand Foundation: propósito (por qué existe la marca más allá del profit), visión (estado aspiracional futuro), misión (qué hace y para quién), valores (3-5 principios rectores con manifestación conductual) |
| **Brand Guardian** | Establecer Brand Personality: 3-5 rasgos humanos que definen el carácter de marca (ej. audaz, confiable, innovadora). Incluir espectro de personalidad por contexto (profesional vs. casual vs. error vs. éxito) |
| **Brand Guardian** | Definir posicionamiento: statement de posicionamiento, diferenciación vs. competencia (del benchmark Fase 1), Brand Pillars (3-5 temas centrales), target audience statement |
| **Brand Guardian** | Crear Brand Voice & Tone: características de voz (3-5 traits), variaciones de tono por contexto (profesional, conversacional, soporte, celebración), messaging architecture (tagline, value proposition, key messages por audiencia) |
| **Brand Guardian** | Establecer Brand Promise: compromiso con clientes y stakeholders, experiencia esperada en cada touchpoint digital |

### Entregables

```
estrategia_{marca}/
├── brand_foundation.md        ← Propósito, visión, misión, valores, personalidad
├── posicionamiento.md         ← Positioning statement, diferenciación, pillars
├── brand_voice.md             ← Voz, tono, variaciones por contexto
├── messaging_framework.md     ← Tagline, value props, key messages por audiencia
└── brand_promise.md           ← Compromiso de marca y experiencia esperada

```

### Prompt clave

> "Con base en el descubrimiento de marca de [NOMBRE] (adjunto), define la fundación estratégica completa: propósito, visión, misión, valores con manifestación conductual, personalidad de marca (5 rasgos). Establece posicionamiento vs. competencia, crea el framework de messaging (tagline + value props + key messages), y define la voz y tono con variaciones por contexto (profesional, casual, soporte, celebración, error)."

### Gate de salida

✅ Fundamentos estratégicos aprobados por el cliente. **Sin esto, la identidad visual no tiene ancla.** Si la estrategia no está clara, la identidad visual será decorativa, no significativa.

---

## 🎨 Fase 3: Sistema Visual (Equipo Creativo en Paralelo)

**Agentes:** UI Designer + Brand Guardian + Visual Storyteller (3 tareas en paralelo) **Input:** Estrategia aprobada (Fase 2) + Tendencias (Fase 1) **Output:** `sistema_visual_{marca}/`

### Tareas en paralelo

| Agente | Entregable | Contenido |
| --- | --- | --- |
| **UI Designer** | `design_tokens.md` | Paleta de colores completa: primarios, secundarios, acentos, semánticos (error, success, warning, info), neutros (escala de grises). Incluir variantes para Dark Mode. Escala tipográfica: familias (display, body, mono), tamaños (xs → 4xl), pesos, line-heights, letter-spacing. Sistema de spacing (base 4px u 8px, escala de 4px a 64px). Sombras (sm, md, lg, xl). Border radius (sm, md, lg, full). Breakpoints responsive (mobile, tablet, desktop, wide). Transiciones (fast, normal, slow con easing curves) |
| **Brand Guardian** | `logo_guidelines.md` | Sistema de logo: versión primaria, horizontal, stacked, icono/isotipo. Clear space (zona de respeto). Tamaños mínimos por medio (pantalla, impresión). Variantes por fondo (claro, oscuro, sobre imagen). Do's & Don'ts con ejemplos. Reglas de co-branding. Si no hay logo existente, definir brief para su creación |
| **Visual Storyteller** | `visual_narrative.md` | Dirección de arte: estilo fotográfico (mood, iluminación, filtros, sujetos), estilo de ilustración (si aplica), iconografía (style guide para iconos custom vs. librería), metáforas visuales recurrentes, mood board con referencias verificadas, patrones y texturas de marca, dirección de video/motion (si aplica) |

### Tarea adicional (derivada)

| Agente | Entregable | Contenido |
| --- | --- | --- |
| **UI Designer** | `color_accessibility.md` | Matriz de combinaciones de color con ratios de contraste WCAG AA (4.5:1 texto normal, 3:1 texto grande) y AAA (7:1). Validar TODAS las combinaciones foreground/background del sistema. Señalar combinaciones prohibidas. Incluir recomendaciones para daltonismo (no depender solo del color) |

### Entregables

```
sistema_visual_{marca}/
├── design_tokens.md           ← Tokens completos: color, tipografía, spacing, shadows, radius, transitions
├── logo_guidelines.md         ← Sistema de logo con variaciones y reglas de uso
├── visual_narrative.md        ← Dirección de arte, mood board, iconografía, estilo visual
└── color_accessibility.md     ← Matriz de contraste WCAG AA/AAA validada

```

### Prompt clave (UI Designer)

> "Diseña el sistema completo de design tokens para [NOMBRE] basado en la estrategia de marca aprobada y las tendencias 2025-2026. Incluye: paleta de colores (primarios, secundarios, semánticos, neutros) con variantes Dark Mode, escala tipográfica completa (2 familias: display + body), sistema de spacing base 4px, sombras en 4 niveles, border radius, breakpoints responsive. Genera las variables CSS con prefijo `--{marca}-`. Valida accesibilidad WCAG AA en todas las combinaciones foreground/background."

### Prompt clave (Brand Guardian)

> "Define las directrices completas del logo de [NOMBRE] para producción digital. Incluye: variaciones (primario, horizontal, stacked, icono), clear space, tamaños mínimos para pantalla, reglas sobre fondos claros/oscuros/imagen, do's & don'ts con ejemplos concretos. Si no hay logo existente, genera un brief detallado para su diseño."

### Prompt clave (Visual Storyteller)

> "Crea la dirección de arte de [NOMBRE] para canales digitales. Define: estilo fotográfico (mood, iluminación, sujetos, filtros), estilo de iconografía, metáforas visuales de la marca, mood board con al menos 6 referencias verificadas. Alinea todo con la personalidad de marca definida en la estrategia. El estilo visual debe reflejar las tendencias 2025-2026 identificadas en el descubrimiento."

### Regla crítica

⚠️ **Los tokens de color del UI Designer DEBEN validarse contra la matriz de accesibilidad ANTES de considerarse finales.** Si una combinación no pasa WCAG AA, se ajusta el token — no se ignora el resultado de accesibilidad.

---

## 🧩 Fase 4: Componentes UI & Interacción (Equipo Técnico en Paralelo)

**Agentes:** UI Designer + ArchitectUX + Whimsy Injector (3 tareas en paralelo) **Input:** Sistema visual (Fase 3) + Estrategia de marca (Fase 2) **Output:** `componentes_{marca}/`

### Tareas en paralelo

| Agente | Entregable | Contenido |
| --- | --- | --- |
| **UI Designer** | `component_library.md` | Catálogo completo de componentes base: Botones (primary, secondary, outline, ghost, destructive — con estados hover, focus, active, disabled, loading). Inputs (text, textarea, select, checkbox, radio, toggle, date picker — con estados default, focus, filled, error, disabled). Cards (content card, media card, pricing card, testimonial card). Navigation (navbar, sidebar, breadcrumbs, tabs, pagination, mobile bottom nav). Modals & Overlays (modal, dialog, drawer, tooltip, popover, toast/snackbar). Data Display (tables, lists, badges, tags, avatars, progress bars, stats). Feedback (alerts, empty states, loading skeletons, error pages). Cada componente incluye: anatomía, variantes, estados, specs de spacing/sizing, ejemplo de uso |
| **ArchitectUX** | `css_architecture.md` | Variables CSS implementables listas para copiar a un proyecto. Sistema de layout: container widths, grid columns (12-col), gap system. Framework responsive: mobile-first con breakpoints definidos en Fase 3. Naming conventions (BEM o utility-first según preferencia). Estructura de archivos CSS recomendada. Theme toggle (light/dark/system) con `prefers-color-scheme`. Reset/normalize base. Typography utility classes. Spacing utility classes |
| **Whimsy Injector** | `micro_interactions.md` | Personalidad de la interfaz: animaciones de botón (hover, click, loading), transiciones de página/sección, feedback visual (success, error, loading), estados de carga creativos (skeleton + microcopy), estados vacíos con personalidad, scroll-triggered animations, hover effects en cards/links. Easter eggs opcionales (si la personalidad de marca lo permite). Cada interacción con: descripción, timing (duration + easing), contexto de uso, CSS/JS snippet implementable. Respetar `prefers-reduced-motion` |

### Tarea adicional (derivada)

| Agente | Entregable | Contenido |
| --- | --- | --- |
| **ArchitectUX** | `responsive_framework.md` | Comportamiento de cada componente en cada breakpoint. Patrones de layout por tipo de página (landing, blog, dashboard, formulario, e-commerce). Reglas de visibilidad (qué se oculta/muestra en mobile). Touch targets mínimos (44×44px en mobile). Stack order en mobile |

### Entregables

```
componentes_{marca}/
├── component_library.md       ← Catálogo completo de componentes con estados
├── css_architecture.md        ← Variables CSS, layout, grid, utilities, theme toggle
├── micro_interactions.md      ← Animaciones, transiciones, personalidad UI
└── responsive_framework.md    ← Comportamiento responsive por componente

```

### Prompt clave (UI Designer)

> "Diseña la librería completa de componentes UI para [NOMBRE] usando los design tokens de la Fase 3. Para cada componente incluye: anatomía visual, todas las variantes, todos los estados (hover, focus, active, disabled, error, loading), specs de spacing y sizing en tokens, y ejemplo de uso. Componentes requeridos: botones (5 variantes), inputs (7 tipos), cards (4 tipos), navigation (6 componentes), modals & overlays (6 tipos), data display (7 componentes), feedback (4 tipos)."

### Prompt clave (ArchitectUX)

> "Genera la arquitectura CSS implementable para [NOMBRE] basada en los design tokens de la Fase 3. Incluye: todas las variables CSS con prefijo `--{marca}-`, sistema de grid 12 columnas, container widths, utility classes para spacing y tipografía, theme toggle light/dark/system, estructura de archivos CSS recomendada, y naming conventions BEM. Todo debe ser copy-paste ready para un proyecto web."

### Prompt clave (Whimsy Injector)

> "Diseña las micro-interacciones y elementos de personalidad para [NOMBRE] alineados a su brand personality. Para cada interacción: descripción del efecto, timing (duration + easing), contexto de uso, y snippet CSS/JS implementable. Incluir: hover effects, click feedback, loading states con microcopy, empty states con personalidad, transiciones de página, y scroll animations. Respetar `prefers-reduced-motion`. Calibrar el nivel de whimsy según la personalidad de marca (formal → sutil, playful → expresivo)."

---

## 📖 Fase 5: Compilación del Brandbook

**Agente:** Designer Skills (como integrador/compilador) **Input:** Todas las salidas de Fases 1-4 **Output:** `brandbook_{marca}/`

### Tareas

| Agente | Tarea |
| --- | --- |
| **Designer Skills** | Integrar TODOS los entregables en un documento maestro unificado con estructura coherente y navegable. Validar que no haya contradicciones entre secciones (ej. tokens de color vs. componentes, voice vs. micro-interactions). Resolver inconsistencias |
| **Designer Skills** | Generar **Brandbook completo en Markdown** — documento maestro con todas las secciones, organizado por capítulos |
| **Designer Skills** | Generar **Brandbook interactivo en HTML** — versión navegable con sidebar, live preview de componentes, swatches de color interactivos, toggle dark mode, y copiar-al-portapapeles en tokens CSS |
| **Designer Skills** | Crear **Quick Reference Card** — resumen de 1 página con: colores principales (hex), tipografías, spacing base, botón primario, logo, voz en 1 oración. Para referencia rápida del equipo |
| **Designer Skills** | Exportar **production_tokens.css** — archivo CSS listo para importar en cualquier proyecto, con TODAS las custom properties organizadas por categoría |

### Entregables

```
brandbook_{marca}/
├── BRANDBOOK_COMPLETO.md            ← Documento maestro (~50-80 páginas)
├── brandbook_interactivo.html       ← Versión navegable con live preview
├── quick_reference_card.md          ← Resumen ejecutivo de 1 página
├── production_tokens.css            ← Variables CSS listas para producción
├── production_tokens_dark.css       ← Override de tokens para Dark Mode
└── assets/
    ├── logo_primary.svg             ← Logo versión principal
    ├── logo_icon.svg                ← Isotipo/icono
    ├── color_palette.svg            ← Visualización de la paleta
    └── type_specimen.svg            ← Muestra tipográfica

```

### Estructura del Brandbook Completo

```markdown
# {Marca} — Digital Brand Book

## 1. Fundación de Marca
   1.1 Propósito
   1.2 Visión
   1.3 Misión
   1.4 Valores
   1.5 Personalidad
   1.6 Brand Promise

## 2. Posicionamiento
   2.1 Audiencia Target (Personas)
   2.2 Positioning Statement
   2.3 Diferenciación Competitiva
   2.4 Brand Pillars

## 3. Voz & Tono
   3.1 Características de Voz
   3.2 Variaciones de Tono por Contexto
   3.3 Messaging Framework
   3.4 Ejemplos de Copywriting (Do's & Don'ts)

## 4. Sistema Visual
   4.1 Paleta de Colores (Light + Dark)
   4.2 Tipografía
   4.3 Spacing & Layout
   4.4 Sombras & Elevación
   4.5 Border Radius
   4.6 Dirección de Arte
   4.7 Iconografía
   4.8 Fotografía & Ilustración

## 5. Logo
   5.1 Versiones del Logo
   5.2 Clear Space & Tamaños Mínimos
   5.3 Uso sobre Fondos
   5.4 Do's & Don'ts

## 6. Componentes UI
   6.1 Botones
   6.2 Inputs & Formularios
   6.3 Cards
   6.4 Navegación
   6.5 Modals & Overlays
   6.6 Data Display
   6.7 Feedback & Estados

## 7. Interacción & Movimiento
   7.1 Principios de Animación
   7.2 Micro-interacciones
   7.3 Transiciones
   7.4 Loading States
   7.5 Empty States

## 8. Responsive & Accesibilidad
   8.1 Breakpoints
   8.2 Comportamiento Responsive
   8.3 Accesibilidad (WCAG AA)
   8.4 Contraste de Color
   8.5 Reduced Motion

## 9. Implementación
   9.1 Arquitectura CSS
   9.2 Tokens de Producción
   9.3 Naming Conventions
   9.4 Estructura de Archivos

## 10. Quick Reference Card

```

### Prompt clave

> "Integra todos los entregables del brandbook de [NOMBRE] (adjuntos: estrategia, tokens, logo, narrativa visual, componentes, arquitectura CSS, micro-interacciones, responsive, accesibilidad) en un documento maestro unificado. Valida consistencia cross-sección: que los hex en componentes coincidan con los tokens, que el tono del microcopy coincida con el voice framework, que las animaciones respeten los timing tokens. Genera el Markdown del brandbook completo siguiendo la estructura de 10 capítulos."

---

## ✅ Fase 6: Revisión & QA de Marca

**Agentes:** Brand Guardian (modo auditor) + Designer Skills (`/visual-critique:critique-ux`) **Input:** Brandbook compilado (Fase 5) **Output:** `qa_{marca}/`

### Tareas

| Agente | Tarea |
| --- | --- |
| **Brand Guardian** | Auditoría de consistencia interna: verificar que CADA elemento del brandbook sea coherente con la estrategia definida en Fase 2. Checklist: ¿Los colores reflejan la personalidad? ¿La tipografía comunica el tono correcto? ¿Los componentes son consistentes entre sí? ¿El logo funciona en todos los contextos definidos? |
| **Brand Guardian** | Verificar alineación con tendencias: ¿El sistema visual se siente contemporáneo (2025-2026)? ¿Incorpora tendencias relevantes sin ser efímero? ¿Tiene longevidad proyectada de 3-5 años? |
| **Designer Skills** | Critique visual del HTML interactivo: usar `/visual-critique:critique-screen` para evaluar la versión interactiva del brandbook. Verificar jerarquía visual, consistencia, composición, tipografía, uso del color, densidad de información |
| **Designer Skills** | Validación técnica: verificar que `production_tokens.css` compile sin errores, que TODAS las variables estén definidas y usadas, que Dark Mode funcione correctamente, que no haya tokens huérfanos o duplicados |
| **Brand Guardian** | Generar reporte de conformidad final con checklist de aprobación punto por punto |

### Checklist de QA

```markdown
## Checklist de Aprobación del Brandbook

### Estrategia
- [ ] Propósito, visión, misión claros y diferenciados
- [ ] Valores con manifestación conductual (no genéricos)
- [ ] Personalidad definida con espectro por contexto
- [ ] Positioning statement específico y defendible

### Voz & Tono
- [ ] Voice traits alineados con personalidad
- [ ] Variaciones de tono para ≥4 contextos
- [ ] Messaging framework con tagline + value props
- [ ] Ejemplos Do's & Don'ts de copywriting

### Sistema Visual
- [ ] Paleta de colores completa (primary, secondary, semantic, neutral)
- [ ] Dark Mode definido y funcional
- [ ] TODAS las combinaciones pasan WCAG AA (4.5:1 texto, 3:1 UI)
- [ ] Escala tipográfica con ≥2 familias (display + body)
- [ ] Sistema de spacing consistente (base 4px o 8px)
- [ ] Sombras definidas en ≥3 niveles
- [ ] Border radius estandarizado

### Logo
- [ ] ≥3 variantes de logo (primary, horizontal, icon)
- [ ] Clear space definido
- [ ] Tamaños mínimos para pantalla
- [ ] Reglas sobre fondos claros, oscuros y sobre imagen
- [ ] Do's & Don'ts con ejemplos visuales

### Componentes UI
- [ ] ≥20 componentes documentados
- [ ] Cada componente con TODOS los estados (hover, focus, active, disabled, error)
- [ ] Specs en tokens (no valores hardcoded)
- [ ] Responsive behavior definido

### Interacción
- [ ] Principios de animación definidos
- [ ] Timing tokens (duration + easing)
- [ ] prefers-reduced-motion contemplado
- [ ] Loading/empty states con personalidad

### Accesibilidad
- [ ] Matriz de contraste completa
- [ ] Focus visible en TODOS los interactivos
- [ ] Touch targets ≥44×44px en mobile
- [ ] No dependencia exclusiva del color

### Implementación
- [ ] production_tokens.css válido y completo
- [ ] Naming conventions documentadas
- [ ] Estructura de archivos definida
- [ ] Theme toggle light/dark/system funcional

```

### Entregables

```
qa_{marca}/
├── reporte_auditoria_marca.md     ← Hallazgos del Brand Guardian
├── critique_visual.md             ← Evaluación del Designer Skills
├── validacion_tecnica.md          ← Resultado de pruebas CSS/tokens
├── checklist_aprobacion.md        ← Checklist completado ✅/❌
└── correcciones_requeridas.md     ← Lista priorizada de fixes (si aplica)

```

### Gate de salida

✅ Brandbook aprobado con checklist 100% completado. Si hay correcciones, se itera sobre las fases correspondientes hasta pasar QA.

---

## 👥 Resumen de Agentes y Roles

| Agente | Fase(s) | Rol en el Pipeline |
| --- | --- | --- |
| **UX Researcher** | 1 | Investigación de marca, personas, benchmark competitivo, tendencias UI/UX |
| **Brand Guardian** | 2, 3, 6 | Estrategia de marca, logo guidelines, auditoría de consistencia final |
| **UI Designer** | 3, 4 | Design tokens, componentes UI, accesibilidad de color |
| **Visual Storyteller** | 3 | Dirección de arte, mood board, iconografía, estilo visual |
| **ArchitectUX** | 4 | Arquitectura CSS implementable, framework responsive, theme system |
| **Whimsy Injector** | 4 | Micro-interacciones, personalidad UI, animaciones, estados creativos |
| **Designer Skills** | 5, 6 | Integración/compilación del brandbook, critique visual, validación técnica |

---

## ⏱️ Estimación de Esfuerzo por Fase

| Fase | Agente(s) | Complejidad | Estimación |
| --- | --- | --- | --- |
| 1. Descubrimiento | UX Researcher | Alta (investigación + browser) | 1-2 sesiones |
| 2. Estrategia | Brand Guardian | Media-Alta | 1 sesión |
| 3. Sistema Visual | 3 agentes (paralelo) | Alta | 1-2 sesiones |
| 4. Componentes | 3 agentes (paralelo) | Alta | 1-2 sesiones |
| 5. Compilación | Designer Skills | Media | 1 sesión |
| 6. QA | Brand Guardian + Designer Skills | Media | 1 sesión |
| **Total** |  |  | **6-10 sesiones** |

---

## 🔄 Iteración y Mantenimiento

### Cuándo re-ejecutar el pipeline completo

- Rebranding total de la marca
- Cambio de mercado/audiencia objetivo
- Pivote de modelo de negocio

### Cuándo ejecutar fases específicas

- **Solo Fase 3-4:** Cuando se necesita un refresh visual manteniendo la estrategia
- **Solo Fase 4:** Cuando se agregan nuevos componentes o canales digitales
- **Solo Fase 6:** Auditoría periódica de consistencia (recomendado cada 6 meses)

---

## 🚀 Fase 7: Implementación con Kiro + UI UX Pro Max

**Agente:** Kiro (ACP coding agent) con skill UI UX Pro Max v2.0 **Input:** `production_tokens.css` + specs del brandbook (Fase 5) + QA aprobado (Fase 6) **Output:** Sitio web / landing page / componentes vivos implementados

### Prerrequisitos

1. **Kiro configurado** con ACP (Agent Client Protocol) en Amazon Quick
2. **Skill UI UX Pro Max** instalado en Kiro (192 paletas, 74 font pairings, 119 UX guidelines)
3. **Brandbook QA aprobado** (Fase 6 completada con checklist 100%)

### Tareas

| Tarea | Detalle |
| --- | --- |
| **Recibir tokens** | Enviar `production_tokens.css` + `production_tokens_dark.css` a Kiro en bloques (evitar truncamiento). Incluir la quick reference card como contexto rápido |
| **Generar Design System en Kiro** | Kiro usa UI UX Pro Max Design System Generator para validar los tokens contra sus 192 paletas y 119 UX guidelines. Detectar anti-patterns |
| **Implementar Landing Page** | Construir la landing page principal de la marca usando los tokens, componentes y narrative visual del brandbook. Mobile-first, WCAG AA |
| **Implementar Componentes** | Crear componentes reutilizables (botones, cards, nav, etc.) basados en `component_library.md` de la Fase 4 |
| **Validar contra UX Guidelines** | Verificar el output contra el pre-delivery checklist de UI UX Pro Max: contraste 4.5:1, focus states, cursor-pointer, prefers-reduced-motion, responsive en 4 breakpoints |
| **Deploy** | Publicar en GitHub Pages o plataforma destino |

### Entregables

```
implementacion_{marca}/
├── index.html                 ← Landing page principal
├── css/
│   ├── tokens.css             ← Design tokens de producción
│   ├── tokens-dark.css        ← Override dark mode
│   ├── components.css         ← Estilos de componentes
│   └── utilities.css          ← Clases utilitarias
├── js/
│   ├── theme-manager.js       ← Toggle light/dark/system
│   └── app.js                 ← Interacciones
└── assets/
    ├── logo/                  ← SVGs del logo
    └── images/                ← Fotografía de marca

```

### Regla crítica

⚠️ **Enviar información a Kiro en bloques pequeños** (máximo ~2000 chars por mensaje). Kiro trunca mensajes largos. Secuencia recomendada:

1. Primero: tokens CSS (variables)
2. Segundo: estructura de página + componentes
3. Tercero: interacciones + dark mode
4. Cuarto: contenido (textos, bios, messaging)

### Prompt clave (primer mensaje a Kiro)

> "Vamos a implementar el sitio web de la marca personal Memo Valdez. Te voy a enviar el design system en partes. Usa el skill UI UX Pro Max para validar cada bloque. Primero van los tokens CSS (colores + tipografía + spacing). Estilo: minimalismo cálido, dark mode como default, mobile-first, WCAG AA."

### Gate de salida

✅ Sitio web publicado, responsive en 4 breakpoints, dark mode funcional, WCAG AA validado, todos los componentes del brandbook implementados.

### Extensiones del brandbook

El pipeline puede extenderse con fases adicionales según necesidad:

- **Fase 7: Social Media Kit** — Plantillas para redes sociales alineadas al brandbook
- **Fase 8: Email Design System** — Templates de email marketing con los tokens
- **Fase 9: Presentation Theme** — Template de PowerPoint/Google Slides (usar skill `presentation-theme-creator`)

---

## 📎 Dependencias con Otros Pipelines

| Pipeline | Relación |
| --- | --- |
| **Flujo de Mini Sitio Educativo** | El brandbook alimenta la Fase 3 (Brand Guardian + UI + Storyteller + Whimsy) |
| **Flujo de Producción de Cursos** | El brandbook alimenta la Fase 6 (Construcción de Assets) |
| **Brand Guardian Anáhuac Mayab** | Ejemplo de brandbook ya implementado como agente guardián específico |

---

## 💡 Notas de Implementación

1. **Paralelismo:** Las Fases 3 y 4 están diseñadas para ejecutarse con `start_task` en paralelo (3 agentes simultáneos cada una), reduciendo el tiempo total significativamente.
2. **Brand Guardian como ejemplo:** El agente "Brand Guardian Anáhuac Mayab" es un ejemplo real de cómo el output de este pipeline se convierte en un agente guardián específico — con tokens CSS, reglas de color, tipografía y tono ya codificados en sus instrucciones.
3. **Tendencias 2025-2026 a considerar:**- Bento grids y layouts asimétricos

- Tipografía variable y oversized
- Glassmorphism evolucionado (blur + transparencia)
- Paletas con colores saturados + neutros cálidos
- Dark mode como first-class citizen
- Micro-animaciones con purpose
- Diseño inclusivo y accesibilidad nativa
- AI-native interfaces (ej. campos de prompt, streaming text)
- Neubrutalism selectivo (bordes, sombras duras)

1. **Output final como agente:** Al terminar el pipeline, el brandbook puede transformarse en un agente "Brand Guardian {Marca}" que audite automáticamente cualquier interfaz contra las reglas definidas — igual que el Brand Guardian Anáhuac Mayab.

