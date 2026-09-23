# Component Library — Memo Valdez

> **Fase:** 4 · Componentes UI  
> **Fecha:** 22 de septiembre de 2026  
> **Versión:** 1.0  
> **Construido sobre:** Design Tokens v1.0, Narrativa Visual, Brand Foundation  
> **Prefijo CSS:** `--mv-*`  
> **Modo default:** Dark mode cálido

---

## Filosofía de Componentes

> **"Cada componente es un instrumento en el ensamble."** — Ninguno existe aislado. Todos comparten la misma afinación (tokens), el mismo tempo (transiciones), y la misma dinámica (estados). Cuando se tocan juntos, suenan como una sola marca.

### Principios de construcción

1. **Token-first** — Ningún valor hardcodeado. Todo padding, color, radio y tipografía referencia un token `--mv-*`.
2. **Dark mode como partitura principal** — Los componentes se diseñan primero para dark mode cálido (`#131110`). Light mode es la transposición.
3. **Accesibilidad en la raíz** — WCAG AA mínimo. Focus visible siempre. Contraste verificado.
4. **Estados como dinámicas** — Default es *mezzo piano*. Hover es *mezzo forte*. Active es *forte*. Disabled es *silencio*.
5. **Espacio como instrumento** — El padding interno es generoso. "El espacio entre las notas" vive dentro de cada componente.

### Convenciones de este documento

- **Clase CSS:** `.mv-{componente}` + `.mv-{componente}--{variante}`
- **Tokens:** Siempre `var(--mv-*)` — nunca valores crudos
- **Tamaños:** `sm` (compacto), `md` (estándar), `lg` (prominente)
- **Modo:** Specs en dark mode. Light mode hereda tokens automáticamente vía CSS custom properties.

---

---

# 1. BOTONES

> *"El gesto mínimo con máximo impacto"* — Un botón bien diseñado es como la entrada del director: preciso, con intención, imposible de ignorar.

---

## 1.1 Tabla de Tamaños (aplica a todas las variantes)

| Tamaño | Clase | Padding | Font-size | Line-height | Min-height | Icon size |
|--------|-------|---------|-----------|-------------|------------|-----------|
| **sm** | `.mv-btn--sm` | `var(--mv-space-2) var(--mv-space-4)` | `var(--mv-text-sm)` | `var(--mv-leading-normal)` | 32px | 16px |
| **md** | `.mv-btn--md` | `var(--mv-space-3) var(--mv-space-6)` | `var(--mv-text-sm)` | `var(--mv-leading-normal)` | 40px | 18px |
| **lg** | `.mv-btn--lg` | `var(--mv-space-4) var(--mv-space-8)` | `var(--mv-text-base)` | `var(--mv-leading-normal)` | 48px | 20px |

### Propiedades compartidas (todas las variantes)

```css
.mv-btn {
  font-family: var(--mv-font-body);
  font-weight: var(--mv-font-semibold);
  letter-spacing: var(--mv-tracking-wide);
  border-radius: var(--mv-radius-md);        /* 8px */
  transition: var(--mv-transition-fast);       /* 150ms ease-out */
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--mv-space-2);                      /* 8px entre icono y texto */
  border: 1.5px solid transparent;
  text-decoration: none;
  white-space: nowrap;
}

.mv-btn:focus-visible {
  outline: none;
  box-shadow: var(--mv-focus-ring);            /* 2px bg + 4px primary */
}

.mv-btn:disabled,
.mv-btn--disabled {
  cursor: not-allowed;
  opacity: 1; /* No opacity — colores explícitos */
}
```

---

## 1.2 Primary — Terracota (CTA principal)

> El botón que dice: *"Da el paso."* Es la acción más importante en cualquier pantalla. El terracota cálido sobre dark mode es una llama que guía.

### Anatomía

```
┌─────────────────────────────────────┐
│  [icono]  Texto del botón           │
│                                     │
│  ← padding-x →      ← padding-x →  │
└─────────────────────────────────────┘
     ↑ padding-y                ↑ padding-y
```

**Partes:** Contenedor → Icono (opcional, izquierda) → Label → Spinner (estado loading)

### Estados

| Estado | Background | Color texto | Border | Shadow | Otros |
|--------|-----------|-------------|--------|--------|-------|
| **Default** | `var(--mv-primary)` | `var(--mv-text-inverse)` | `transparent` | `var(--mv-shadow-sm)` | — |
| **Hover** | `var(--mv-primary-light)` | `var(--mv-text-inverse)` | `transparent` | `var(--mv-shadow-md)` | `transform: translateY(-1px)` |
| **Focus** | `var(--mv-primary)` | `var(--mv-text-inverse)` | `transparent` | `var(--mv-focus-ring)` | — |
| **Active** | `var(--mv-primary-dark)` | `var(--mv-text-inverse)` | `transparent` | `none` | `transform: translateY(0)` |
| **Disabled** | `var(--mv-neutral-300)` | `var(--mv-neutral-500)` | `transparent` | `none` | — |
| **Loading** | `var(--mv-primary)` | `var(--mv-text-inverse)` | `transparent` | `var(--mv-shadow-sm)` | Label oculto, spinner visible, `pointer-events: none` |

### CSS

```css
.mv-btn--primary {
  background: var(--mv-primary);
  color: var(--mv-text-inverse);
  box-shadow: var(--mv-shadow-sm);
}

.mv-btn--primary:hover:not(:disabled) {
  background: var(--mv-primary-light);
  box-shadow: var(--mv-shadow-md);
  transform: translateY(-1px);
}

.mv-btn--primary:active:not(:disabled) {
  background: var(--mv-primary-dark);
  box-shadow: none;
  transform: translateY(0);
}

.mv-btn--primary:disabled {
  background: var(--mv-neutral-300);
  color: var(--mv-neutral-500);
  box-shadow: none;
}

.mv-btn--primary.is-loading {
  pointer-events: none;
}

.mv-btn--primary.is-loading .mv-btn__label {
  visibility: hidden;
}

.mv-btn--primary.is-loading .mv-btn__spinner {
  position: absolute;
  width: 18px;
  height: 18px;
  border: 2px solid var(--mv-text-inverse);
  border-top-color: transparent;
  border-radius: var(--mv-radius-full);
  animation: mv-spin 600ms var(--mv-ease-linear) infinite;
}
```

### Ejemplo de uso

- **CTA de hero:** "Escucha el próximo concierto" en la landing principal
- **Newsletter:** "Suscríbete" al final de un artículo
- **Formulario:** "Enviar mensaje" en la página de contacto

---

## 1.3 Secondary — Outline (Acciones secundarias)

> El segundo instrumento del ensamble. Importante, pero no compite con el solista. Borde visible, interior transparente — presencia sin imposición.

### Estados

| Estado | Background | Color texto | Border | Shadow |
|--------|-----------|-------------|--------|--------|
| **Default** | `transparent` | `var(--mv-primary)` | `1.5px solid var(--mv-primary)` | `none` |
| **Hover** | `rgba(var(--mv-primary-rgb), 0.08)` | `var(--mv-primary-light)` | `1.5px solid var(--mv-primary-light)` | `var(--mv-shadow-sm)` |
| **Focus** | `transparent` | `var(--mv-primary)` | `1.5px solid var(--mv-primary)` | `var(--mv-focus-ring)` |
| **Active** | `rgba(var(--mv-primary-rgb), 0.12)` | `var(--mv-primary-dark)` | `1.5px solid var(--mv-primary-dark)` | `none` |
| **Disabled** | `transparent` | `var(--mv-neutral-500)` | `1.5px solid var(--mv-neutral-400)` | `none` |
| **Loading** | `transparent` | `var(--mv-primary)` | `1.5px solid var(--mv-primary)` | `none` |

### CSS

```css
.mv-btn--secondary {
  background: transparent;
  color: var(--mv-primary);
  border: 1.5px solid var(--mv-primary);
}

.mv-btn--secondary:hover:not(:disabled) {
  background: color-mix(in srgb, var(--mv-primary) 8%, transparent);
  color: var(--mv-primary-light);
  border-color: var(--mv-primary-light);
  box-shadow: var(--mv-shadow-sm);
}

.mv-btn--secondary:active:not(:disabled) {
  background: color-mix(in srgb, var(--mv-primary) 12%, transparent);
  color: var(--mv-primary-dark);
  border-color: var(--mv-primary-dark);
}

.mv-btn--secondary:disabled {
  color: var(--mv-neutral-500);
  border-color: var(--mv-neutral-400);
}
```

### Ejemplo de uso

- **Card de evento:** "Ver detalles" junto al CTA primario "Reservar lugar"
- **Perfil:** "Descargar CV" cuando el CTA es "Contactar"
- **Blog:** "Leer más" en una lista de artículos

---

## 1.4 Ghost — Solo texto (Navegación)

> El pianissimo de los botones. Apenas visible hasta que lo necesitas. Para acciones de navegación donde el contexto ya comunica la intención.

### Estados

| Estado | Background | Color texto | Border | Shadow |
|--------|-----------|-------------|--------|--------|
| **Default** | `transparent` | `var(--mv-text-secondary)` | `none` | `none` |
| **Hover** | `color-mix(in srgb, var(--mv-text-primary) 6%, transparent)` | `var(--mv-text-primary)` | `none` | `none` |
| **Focus** | `transparent` | `var(--mv-text-primary)` | `none` | `var(--mv-focus-ring)` |
| **Active** | `color-mix(in srgb, var(--mv-text-primary) 10%, transparent)` | `var(--mv-text-primary)` | `none` | `none` |
| **Disabled** | `transparent` | `var(--mv-neutral-500)` | `none` | `none` |
| **Loading** | `transparent` | `var(--mv-text-secondary)` | `none` | `none` |

### CSS

```css
.mv-btn--ghost {
  background: transparent;
  color: var(--mv-text-secondary);
  border: none;
  padding: var(--mv-space-2) var(--mv-space-3);
}

.mv-btn--ghost:hover:not(:disabled) {
  background: color-mix(in srgb, var(--mv-text-primary) 6%, transparent);
  color: var(--mv-text-primary);
}

.mv-btn--ghost:active:not(:disabled) {
  background: color-mix(in srgb, var(--mv-text-primary) 10%, transparent);
}

.mv-btn--ghost:disabled {
  color: var(--mv-neutral-500);
}
```

### Ejemplo de uso

- **Navbar:** "Inicio", "Sobre mí", "Contacto" como links de navegación
- **Breadcrumbs:** Cada segmento es un ghost button
- **Modal:** "Cancelar" junto al botón primario "Confirmar"

---

## 1.5 Tertiary — Slate Azul (Acciones tech)

> El color de la tecnología al servicio del arte. Para acciones relacionadas con funcionalidades digitales, código, herramientas IA, descarga de recursos técnicos.

### Estados

| Estado | Background | Color texto | Border | Shadow |
|--------|-----------|-------------|--------|--------|
| **Default** | `var(--mv-tertiary)` | `var(--mv-text-inverse)` | `transparent` | `var(--mv-shadow-sm)` |
| **Hover** | `var(--mv-tertiary-light)` | `var(--mv-text-inverse)` | `transparent` | `var(--mv-shadow-md)` |
| **Focus** | `var(--mv-tertiary)` | `var(--mv-text-inverse)` | `transparent` | `0 0 0 2px var(--mv-bg), 0 0 0 4px var(--mv-tertiary)` |
| **Active** | `var(--mv-tertiary-dark)` | `var(--mv-text-inverse)` | `transparent` | `none` |
| **Disabled** | `var(--mv-neutral-300)` | `var(--mv-neutral-500)` | `transparent` | `none` |
| **Loading** | `var(--mv-tertiary)` | `var(--mv-text-inverse)` | `transparent` | `var(--mv-shadow-sm)` |

### CSS

```css
.mv-btn--tertiary {
  background: var(--mv-tertiary);
  color: var(--mv-text-inverse);
  box-shadow: var(--mv-shadow-sm);
}

.mv-btn--tertiary:hover:not(:disabled) {
  background: var(--mv-tertiary-light);
  box-shadow: var(--mv-shadow-md);
  transform: translateY(-1px);
}

.mv-btn--tertiary:active:not(:disabled) {
  background: var(--mv-tertiary-dark);
  box-shadow: none;
  transform: translateY(0);
}

.mv-btn--tertiary:disabled {
  background: var(--mv-neutral-300);
  color: var(--mv-neutral-500);
  box-shadow: none;
}
```

### Ejemplo de uso

- **Sección tech:** "Probar herramienta" en un artículo sobre IA
- **Recursos:** "Descargar plantilla de IA" en la biblioteca de recursos
- **Blog tech:** "Ver código fuente" en un tutorial

---

## 1.6 Destructive — Error (Acciones irreversibles)

> La nota que no se puede deshacer. Rojo semántico que alerta sin romper la estética cálida. Reservado exclusivamente para acciones que destruyen datos o cancelan compromisos.

### Estados

| Estado | Background | Color texto | Border | Shadow |
|--------|-----------|-------------|--------|--------|
| **Default** | `var(--mv-error)` | `var(--mv-text-inverse)` | `transparent` | `var(--mv-shadow-sm)` |
| **Hover** | `var(--mv-error-dark)` | `var(--mv-text-inverse)` | `transparent` | `var(--mv-shadow-md)` |
| **Focus** | `var(--mv-error)` | `var(--mv-text-inverse)` | `transparent` | `0 0 0 2px var(--mv-bg), 0 0 0 4px var(--mv-error)` |
| **Active** | color-mix más oscuro que error-dark | `var(--mv-text-inverse)` | `transparent` | `none` |
| **Disabled** | `var(--mv-neutral-300)` | `var(--mv-neutral-500)` | `transparent` | `none` |
| **Loading** | `var(--mv-error)` | `var(--mv-text-inverse)` | `transparent` | `var(--mv-shadow-sm)` |

### CSS

```css
.mv-btn--destructive {
  background: var(--mv-error);
  color: var(--mv-text-inverse);
  box-shadow: var(--mv-shadow-sm);
}

.mv-btn--destructive:hover:not(:disabled) {
  background: var(--mv-error-dark);
  box-shadow: var(--mv-shadow-md);
}

.mv-btn--destructive:active:not(:disabled) {
  background: color-mix(in srgb, var(--mv-error-dark) 85%, black);
  box-shadow: none;
}

.mv-btn--destructive:disabled {
  background: var(--mv-neutral-300);
  color: var(--mv-neutral-500);
  box-shadow: none;
}
```

### Ejemplo de uso

- **Dialog:** "Eliminar cuenta" en configuración
- **Admin:** "Cancelar evento" en el panel de gestión
- **Modal:** "Eliminar permanentemente" con texto de confirmación

---

## 1.7 Animación de Loading (compartida)

```css
@keyframes mv-spin {
  to { transform: rotate(360deg); }
}

.mv-btn__spinner {
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: var(--mv-radius-full);
  animation: mv-spin 600ms var(--mv-ease-linear) infinite;
}
```

---

---

# 2. INPUTS

> *"La partitura en blanco esperando las notas"* — Los inputs son los espacios donde el usuario escribe su parte. Deben sentirse acogedores como una sala de ensayo: claros en su estructura, cálidos en su presencia.

---

## 2.0 Propiedades Compartidas (todos los inputs)

### Anatomía general de un campo de formulario

```
┌─ Label ──────────────────────────────────────┐
│  Label text *                                 │
├──────────────────────────────────────────────┤
│  ┌────────────────────────────────────────┐  │
│  │ [icono-izq]  Placeholder / Value  [✕]  │  │
│  └────────────────────────────────────────┘  │
├──────────────────────────────────────────────┤
│  Helper text / Error message                  │
└──────────────────────────────────────────────┘
```

**Partes:**
1. **Label** — Siempre visible (nunca solo placeholder). Font: `var(--mv-font-body)`, `var(--mv-text-sm)`, `var(--mv-font-medium)`, color `var(--mv-text-secondary)`.
2. **Campo** — El contenedor del input propiamente.
3. **Icono izquierdo** (opcional) — 18px, color `var(--mv-text-tertiary)`.
4. **Icono derecho / acción** (opcional) — Clear, toggle password, dropdown arrow.
5. **Helper text** — Debajo del campo. `var(--mv-text-xs)`, `var(--mv-text-tertiary)`.
6. **Error message** — Reemplaza al helper text. `var(--mv-text-xs)`, `var(--mv-error)`.
7. **Indicador requerido** — Asterisco `*` en `var(--mv-error)` junto al label.

### Specs base del label

```css
.mv-field__label {
  display: block;
  font-family: var(--mv-font-body);
  font-size: var(--mv-text-sm);
  font-weight: var(--mv-font-medium);
  color: var(--mv-text-secondary);
  margin-bottom: var(--mv-space-1);           /* 4px */
  letter-spacing: var(--mv-tracking-normal);
}

.mv-field__label--required::after {
  content: " *";
  color: var(--mv-error);
}
```

### Specs base del helper / error

```css
.mv-field__helper {
  display: block;
  font-family: var(--mv-font-body);
  font-size: var(--mv-text-xs);
  color: var(--mv-text-tertiary);
  margin-top: var(--mv-space-1);              /* 4px */
  line-height: var(--mv-leading-normal);
}

.mv-field__error {
  display: block;
  font-family: var(--mv-font-body);
  font-size: var(--mv-text-xs);
  color: var(--mv-error);
  margin-top: var(--mv-space-1);
  line-height: var(--mv-leading-normal);
}
```

### Espaciado entre campos en un formulario

```css
.mv-form > * + * {
  margin-top: var(--mv-space-5);              /* 20px */
}
```

---

## 2.1 Text Input

### Variantes de tamaño

| Tamaño | Padding | Font-size | Min-height |
|--------|---------|-----------|------------|
| **sm** | `var(--mv-space-2) var(--mv-space-3)` | `var(--mv-text-sm)` | 36px |
| **md** | `var(--mv-space-3) var(--mv-space-4)` | `var(--mv-text-base)` | 44px |
| **lg** | `var(--mv-space-4) var(--mv-space-5)` | `var(--mv-text-base)` | 52px |

### Estados

| Estado | Background | Border | Texto | Shadow |
|--------|-----------|--------|-------|--------|
| **Default** | `var(--mv-surface)` | `1px solid var(--mv-neutral-400)` | `var(--mv-text-primary)` | `none` |
| **Hover** | `var(--mv-surface)` | `1px solid var(--mv-neutral-600)` | `var(--mv-text-primary)` | `none` |
| **Focus** | `var(--mv-surface-elevated)` | `1.5px solid var(--mv-primary)` | `var(--mv-text-primary)` | `var(--mv-focus-ring)` |
| **Filled** | `var(--mv-surface)` | `1px solid var(--mv-neutral-400)` | `var(--mv-text-primary)` | `none` |
| **Error** | `var(--mv-surface)` | `1.5px solid var(--mv-error)` | `var(--mv-text-primary)` | `0 0 0 2px var(--mv-bg), 0 0 0 4px var(--mv-error)` (solo con focus) |
| **Disabled** | `var(--mv-neutral-200)` | `1px solid var(--mv-neutral-300)` | `var(--mv-neutral-500)` | `none` |

### CSS

```css
.mv-input {
  width: 100%;
  background: var(--mv-surface);
  color: var(--mv-text-primary);
  font-family: var(--mv-font-body);
  font-size: var(--mv-text-base);
  font-weight: var(--mv-font-regular);
  padding: var(--mv-space-3) var(--mv-space-4);
  border: 1px solid var(--mv-neutral-400);
  border-radius: var(--mv-radius-sm);         /* 4px */
  transition: var(--mv-transition-fast);
  line-height: var(--mv-leading-normal);
}

.mv-input::placeholder {
  color: var(--mv-text-tertiary);
  font-weight: var(--mv-font-regular);
}

.mv-input:hover:not(:focus):not(:disabled):not(.is-error) {
  border-color: var(--mv-neutral-600);
}

.mv-input:focus {
  outline: none;
  background: var(--mv-surface-elevated);
  border-color: var(--mv-primary);
  border-width: 1.5px;
  box-shadow: var(--mv-focus-ring);
}

.mv-input.is-error {
  border-color: var(--mv-error);
  border-width: 1.5px;
}

.mv-input.is-error:focus {
  box-shadow: 0 0 0 2px var(--mv-bg), 0 0 0 4px var(--mv-error);
}

.mv-input:disabled {
  background: var(--mv-neutral-200);
  border-color: var(--mv-neutral-300);
  color: var(--mv-neutral-500);
  cursor: not-allowed;
}
```

### Ejemplo de uso

- **Contacto:** Campo "Nombre completo" y "Email" en el formulario de contacto
- **Newsletter:** Campo "Tu correo electrónico" para suscripción
- **Inscripción a taller:** Nombre del participante

---

## 2.2 Textarea

### Anatomía

Igual que Text Input pero con altura variable. Incluye un resize handle vertical.

### Specs adicionales

| Propiedad | Valor |
|-----------|-------|
| Min-height | `120px` (≈ 5 líneas) |
| Max-height | `320px` (scroll interno después) |
| Resize | `vertical` |
| Padding | `var(--mv-space-3) var(--mv-space-4)` |
| Line-height | `var(--mv-leading-relaxed)` — 1.7 para lectura cómoda |

### CSS

```css
.mv-textarea {
  /* Hereda todas las propiedades de .mv-input */
  min-height: 120px;
  max-height: 320px;
  resize: vertical;
  line-height: var(--mv-leading-relaxed);
}

.mv-textarea--autosize {
  resize: none;
  overflow: hidden;
  /* JS ajusta height automáticamente */
}
```

### Ejemplo de uso

- **Contacto:** "¿En qué puedo ayudarte?" — campo de mensaje libre
- **Testimonial:** "Cuéntanos tu experiencia en el ensamble"
- **Feedback post-concierto:** Comentarios del asistente

---

## 2.3 Select / Dropdown

### Anatomía

```
┌──────────────────────────────────────────┐
│  Opción seleccionada            ▼ (chevron) │
└──────────────────────────────────────────┘
┌──────────────────────────────────────────┐ ← Dropdown panel
│  ○ Opción 1                              │
│  ● Opción 2 (seleccionada)    ✓          │
│  ○ Opción 3                              │
│  ○ Opción 4                              │
└──────────────────────────────────────────┘
```

**Partes:**
1. **Trigger** — Misma apariencia que text input + chevron derecho
2. **Dropdown panel** — Lista de opciones flotante
3. **Opción** — Texto + checkmark cuando seleccionada
4. **Separador** (opcional) — Para agrupar opciones

### Specs del trigger

Idénticas al text input con padding-right extra para el chevron:
- Padding derecho: `var(--mv-space-10)` (40px — espacio para icono chevron de 18px + padding)
- Chevron: 18px, color `var(--mv-text-tertiary)`, rotación 180° cuando abierto con `transition: var(--mv-transition-fast)`

### Specs del dropdown panel

| Propiedad | Valor |
|-----------|-------|
| Background | `var(--mv-surface-elevated)` |
| Border | `1px solid var(--mv-neutral-400)` |
| Border-radius | `var(--mv-radius-md)` |
| Shadow | `var(--mv-shadow-lg)` |
| Max-height | `240px` (scroll interno) |
| Padding | `var(--mv-space-1) 0` |
| Z-index | `var(--mv-z-dropdown)` |
| Margin-top | `var(--mv-space-1)` |

### Specs de cada opción

| Propiedad | Valor |
|-----------|-------|
| Padding | `var(--mv-space-3) var(--mv-space-4)` |
| Font-size | `var(--mv-text-base)` |
| Color default | `var(--mv-text-primary)` |
| Color hover bg | `color-mix(in srgb, var(--mv-primary) 8%, transparent)` |
| Color seleccionado | `var(--mv-primary)` con `font-weight: var(--mv-font-medium)` |
| Checkmark | 16px, `var(--mv-primary)`, alineado a la derecha |

### CSS

```css
.mv-select__trigger {
  /* Hereda .mv-input */
  padding-right: var(--mv-space-10);
  cursor: pointer;
  user-select: none;
}

.mv-select__chevron {
  position: absolute;
  right: var(--mv-space-4);
  width: 18px;
  height: 18px;
  color: var(--mv-text-tertiary);
  transition: transform var(--mv-duration-fast) var(--mv-ease-out);
}

.mv-select.is-open .mv-select__chevron {
  transform: rotate(180deg);
}

.mv-select__panel {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: var(--mv-space-1);
  background: var(--mv-surface-elevated);
  border: 1px solid var(--mv-neutral-400);
  border-radius: var(--mv-radius-md);
  box-shadow: var(--mv-shadow-lg);
  max-height: 240px;
  overflow-y: auto;
  z-index: var(--mv-z-dropdown);
  padding: var(--mv-space-1) 0;
}

.mv-select__option {
  padding: var(--mv-space-3) var(--mv-space-4);
  font-size: var(--mv-text-base);
  color: var(--mv-text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: var(--mv-transition-fast);
}

.mv-select__option:hover {
  background: color-mix(in srgb, var(--mv-primary) 8%, transparent);
}

.mv-select__option.is-selected {
  color: var(--mv-primary);
  font-weight: var(--mv-font-medium);
}
```

### Ejemplo de uso

- **Inscripción:** "¿A qué ensamble te gustaría unirte?" (Coro, Orquesta de cámara, Ensamble de percusiones)
- **Contacto:** "Tipo de consulta" (Concierto, Taller, Conferencia, Colaboración)
- **Filtro de blog:** Seleccionar categoría (Música, Tecnología, Personas)

---

## 2.4 Checkbox

### Anatomía

```
┌──┐
│ ✓│  Label del checkbox
└──┘
 ↑ 20×20px box    ↑ gap: 8px
```

**Partes:** Caja (20×20px) → Checkmark (icono SVG animado) → Label

### Specs

| Propiedad | Valor |
|-----------|-------|
| Caja - tamaño | 20px × 20px |
| Caja - border-radius | `var(--mv-radius-sm)` (4px) |
| Caja - border (unchecked) | `1.5px solid var(--mv-neutral-400)` |
| Caja - background (unchecked) | `transparent` |
| Caja - background (checked) | `var(--mv-primary)` |
| Caja - border (checked) | `1.5px solid var(--mv-primary)` |
| Checkmark | SVG path stroke, 2px, `var(--mv-text-inverse)` |
| Gap caja-label | `var(--mv-space-2)` (8px) |
| Label font | `var(--mv-text-base)`, `var(--mv-font-regular)`, `var(--mv-text-primary)` |

### Estados

| Estado | Caja | Checkmark | Label |
|--------|------|-----------|-------|
| **Default (unchecked)** | Border `var(--mv-neutral-400)`, bg `transparent` | Hidden | `var(--mv-text-primary)` |
| **Hover** | Border `var(--mv-neutral-600)` | Hidden | `var(--mv-text-primary)` |
| **Focus** | `var(--mv-focus-ring)` | — | — |
| **Checked** | Bg `var(--mv-primary)`, border `var(--mv-primary)` | Visible, animado (scale 0→1, 150ms) | `var(--mv-text-primary)` |
| **Checked + Hover** | Bg `var(--mv-primary-light)` | Visible | `var(--mv-text-primary)` |
| **Disabled** | Border `var(--mv-neutral-300)`, bg `var(--mv-neutral-200)` | Si checked: `var(--mv-neutral-500)` | `var(--mv-neutral-500)` |
| **Error** | Border `var(--mv-error)` | — | — |

### CSS

```css
.mv-checkbox {
  display: inline-flex;
  align-items: flex-start;
  gap: var(--mv-space-2);
  cursor: pointer;
}

.mv-checkbox__box {
  width: 20px;
  height: 20px;
  min-width: 20px;
  border: 1.5px solid var(--mv-neutral-400);
  border-radius: var(--mv-radius-sm);
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--mv-transition-fast);
}

.mv-checkbox:hover .mv-checkbox__box {
  border-color: var(--mv-neutral-600);
}

.mv-checkbox.is-checked .mv-checkbox__box {
  background: var(--mv-primary);
  border-color: var(--mv-primary);
}

.mv-checkbox__check {
  width: 12px;
  height: 12px;
  stroke: var(--mv-text-inverse);
  stroke-width: 2px;
  transform: scale(0);
  transition: transform var(--mv-duration-fast) var(--mv-ease-spring);
}

.mv-checkbox.is-checked .mv-checkbox__check {
  transform: scale(1);
}

.mv-checkbox__label {
  font-family: var(--mv-font-body);
  font-size: var(--mv-text-base);
  color: var(--mv-text-primary);
  line-height: var(--mv-leading-normal);
  padding-top: 1px; /* alineación óptica */
}
```

### Ejemplo de uso

- **Inscripción:** "Acepto los términos y condiciones"
- **Preferencias de newsletter:** "Quiero recibir contenido sobre: ☐ Música ☐ Tecnología ☐ Educación"
- **Filtros:** Selección múltiple de categorías en blog

---

## 2.5 Radio

### Anatomía

```
(●)  Label del radio
 ↑ 20×20px circle    ↑ gap: 8px
```

**Partes:** Círculo exterior (20×20px) → Dot interior (10px, animado) → Label

### Specs

| Propiedad | Valor |
|-----------|-------|
| Círculo - tamaño | 20px × 20px |
| Círculo - border-radius | `var(--mv-radius-full)` |
| Círculo - border | `1.5px solid var(--mv-neutral-400)` |
| Dot interior (checked) | 10px diámetro, `var(--mv-primary)`, `border-radius: var(--mv-radius-full)` |
| Gap círculo-label | `var(--mv-space-2)` |
| Gap entre opciones | `var(--mv-space-3)` (12px) |

### Estados

| Estado | Círculo exterior | Dot interior |
|--------|-----------------|--------------|
| **Default** | Border `var(--mv-neutral-400)` | Hidden (`scale(0)`) |
| **Hover** | Border `var(--mv-primary-light)` | — |
| **Focus** | `var(--mv-focus-ring)` | — |
| **Selected** | Border `var(--mv-primary)` | `var(--mv-primary)`, `scale(1)`, transition `var(--mv-ease-spring)` 150ms |
| **Disabled** | Border `var(--mv-neutral-300)`, bg `var(--mv-neutral-200)` | Si selected: `var(--mv-neutral-500)` |

### CSS

```css
.mv-radio {
  display: inline-flex;
  align-items: flex-start;
  gap: var(--mv-space-2);
  cursor: pointer;
}

.mv-radio__circle {
  width: 20px;
  height: 20px;
  min-width: 20px;
  border: 1.5px solid var(--mv-neutral-400);
  border-radius: var(--mv-radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--mv-transition-fast);
}

.mv-radio:hover .mv-radio__circle {
  border-color: var(--mv-primary-light);
}

.mv-radio.is-selected .mv-radio__circle {
  border-color: var(--mv-primary);
}

.mv-radio__dot {
  width: 10px;
  height: 10px;
  border-radius: var(--mv-radius-full);
  background: var(--mv-primary);
  transform: scale(0);
  transition: transform var(--mv-duration-fast) var(--mv-ease-spring);
}

.mv-radio.is-selected .mv-radio__dot {
  transform: scale(1);
}

.mv-radio-group {
  display: flex;
  flex-direction: column;
  gap: var(--mv-space-3);
}
```

### Ejemplo de uso

- **Inscripción a evento:** "¿Cómo te enteraste?" (Redes sociales, Newsletter, Referido, Otro)
- **Configuración:** "Modo de color preferido" (Claro, Oscuro, Sistema)
- **Encuesta post-concierto:** "¿Cómo calificarías la experiencia?" (Excelente, Buena, Regular)

---

## 2.6 Toggle Switch

### Anatomía

```
┌──────────────────┐
│  ○               │  OFF — Track gris
└──────────────────┘

┌──────────────────┐
│               ●  │  ON — Track terracota
└──────────────────┘
   ↑ 44×24px track   ↑ 20px thumb (circle)
```

**Partes:** Track (contenedor pill) → Thumb (círculo deslizante) → Label (a la derecha)

### Specs

| Propiedad | Valor |
|-----------|-------|
| Track - tamaño | 44px × 24px |
| Track - border-radius | `var(--mv-radius-full)` |
| Track - bg OFF | `var(--mv-neutral-400)` |
| Track - bg ON | `var(--mv-primary)` |
| Thumb - tamaño | 20px × 20px |
| Thumb - border-radius | `var(--mv-radius-full)` |
| Thumb - color | `var(--mv-surface-elevated)` |
| Thumb - shadow | `var(--mv-shadow-sm)` |
| Thumb - posición OFF | `2px` desde la izquierda |
| Thumb - posición ON | `22px` desde la izquierda |
| Thumb - transition | `var(--mv-duration-fast)` con `var(--mv-ease-spring)` |
| Gap toggle-label | `var(--mv-space-3)` |

### Estados

| Estado | Track bg | Thumb | Transition |
|--------|---------|-------|------------|
| **OFF** | `var(--mv-neutral-400)` | Izquierda (2px) | — |
| **OFF + Hover** | `var(--mv-neutral-500)` | Izquierda, scale 1.05 | `var(--mv-ease-spring)` |
| **ON** | `var(--mv-primary)` | Derecha (22px) | `var(--mv-ease-spring)` |
| **ON + Hover** | `var(--mv-primary-light)` | Derecha, scale 1.05 | — |
| **Focus** | — | — | `var(--mv-focus-ring)` en el track |
| **Disabled OFF** | `var(--mv-neutral-300)` | `var(--mv-neutral-200)` | — |
| **Disabled ON** | `var(--mv-neutral-400)` | `var(--mv-neutral-200)` | — |

### CSS

```css
.mv-toggle {
  display: inline-flex;
  align-items: center;
  gap: var(--mv-space-3);
  cursor: pointer;
}

.mv-toggle__track {
  width: 44px;
  height: 24px;
  border-radius: var(--mv-radius-full);
  background: var(--mv-neutral-400);
  position: relative;
  transition: background var(--mv-duration-fast) var(--mv-ease-out);
}

.mv-toggle.is-on .mv-toggle__track {
  background: var(--mv-primary);
}

.mv-toggle__thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  border-radius: var(--mv-radius-full);
  background: var(--mv-surface-elevated);
  box-shadow: var(--mv-shadow-sm);
  transition: transform var(--mv-duration-fast) var(--mv-ease-spring);
}

.mv-toggle.is-on .mv-toggle__thumb {
  transform: translateX(20px);
}

.mv-toggle:hover .mv-toggle__thumb {
  transform: scale(1.05);
}

.mv-toggle.is-on:hover .mv-toggle__thumb {
  transform: translateX(20px) scale(1.05);
}

.mv-toggle:focus-within .mv-toggle__track {
  box-shadow: var(--mv-focus-ring);
}
```

### Ejemplo de uso

- **Configuración:** "Modo oscuro" toggle (activado por default)
- **Newsletter:** "Recibir notificaciones de nuevos conciertos"
- **Perfil:** "Hacer público mi perfil de corista"

---

## 2.7 Search Input

### Anatomía

```
┌───────────────────────────────────────────────┐
│  🔍  Buscar conciertos, artículos...    [✕]   │
└───────────────────────────────────────────────┘
      ↑ icono fijo                     ↑ clear button (aparece con texto)
```

**Partes:** Icono lupa (izq, fijo) → Campo de texto → Botón clear (der, condicional) → Sugerencias dropdown (opcional)

### Specs adicionales vs Text Input

| Propiedad | Valor |
|-----------|-------|
| Icono lupa | 18px, `var(--mv-text-tertiary)`, posición izquierda |
| Padding-left | `var(--mv-space-10)` (para acomodar icono) |
| Padding-right | `var(--mv-space-10)` (para acomodar clear) |
| Border-radius | `var(--mv-radius-full)` — pill shape para diferenciarse de text inputs |
| Clear button | 18px, `var(--mv-text-tertiary)`, hover: `var(--mv-text-primary)`, aparece solo cuando hay texto |
| Transition clear | `opacity var(--mv-duration-fast) var(--mv-ease-out)` |

### CSS

```css
.mv-search {
  position: relative;
}

.mv-search__input {
  /* Hereda .mv-input */
  padding-left: var(--mv-space-10);
  padding-right: var(--mv-space-10);
  border-radius: var(--mv-radius-full);
}

.mv-search__icon {
  position: absolute;
  left: var(--mv-space-4);
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: var(--mv-text-tertiary);
  pointer-events: none;
}

.mv-search__clear {
  position: absolute;
  right: var(--mv-space-3);
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: var(--mv-text-tertiary);
  cursor: pointer;
  opacity: 0;
  transition: opacity var(--mv-duration-fast) var(--mv-ease-out);
  background: none;
  border: none;
  padding: var(--mv-space-1);
  border-radius: var(--mv-radius-full);
}

.mv-search__clear:hover {
  color: var(--mv-text-primary);
}

.mv-search.has-value .mv-search__clear {
  opacity: 1;
}
```

### Ejemplo de uso

- **Navbar:** Buscador global del sitio — "Buscar conciertos, artículos, recursos..."
- **Blog:** Búsqueda dentro de artículos
- **Biblioteca de recursos:** Buscar herramientas, plantillas, guías

---

---

# 3. CARDS

> *"Cada card es una página de la partitura — contiene un pensamiento completo, con su propio ritmo y respiración."* Las cards son los contenedores principales de información. Border-radius generoso (`--mv-radius-lg`), sombras sutiles, y el espacio interior refleja el principio de "whitespace como instrumento".

---

## 3.0 Propiedades Compartidas

```css
.mv-card {
  background: var(--mv-surface);
  border-radius: var(--mv-radius-lg);         /* 16px */
  padding: var(--mv-space-6);                  /* 24px */
  box-shadow: var(--mv-shadow-sm);
  transition: var(--mv-transition-normal);     /* 300ms */
  border: 1px solid var(--mv-neutral-300);
  overflow: hidden;
}

.mv-card:hover {
  box-shadow: var(--mv-shadow-md);
  transform: translateY(-2px);
  border-color: var(--mv-neutral-400);
}

.mv-card:focus-within {
  box-shadow: var(--mv-focus-ring);
}
```

---

## 3.1 Content Card (Blog, artículo)

### Anatomía

```
┌──────────────────────────────────────────────┐
│  ┌──────────────────────────────────────┐    │
│  │                                      │    │
│  │         Imagen / Cover               │    │  ← aspect-ratio: 16/9
│  │                                      │    │
│  └──────────────────────────────────────┘    │
│                                              │
│  MÚSICA · TECNOLOGÍA          ← tags/badge   │
│                                              │
│  Título del artículo           ← H3          │
│                                              │
│  Extracto del contenido que    ← párrafo     │
│  invita a seguir leyendo...                  │
│                                              │
│  ┌──────┐                                    │
│  │ (MV) │  Memo Valdez · 15 sept 2026       │
│  └──────┘  ← avatar + meta                  │
└──────────────────────────────────────────────┘
```

**Partes:**
1. **Imagen cover** — aspect-ratio 16/9, border-radius top heredado, object-fit cover
2. **Tags** — Badges de categoría (ver componente Badge)
3. **Título** — H3 con 2 líneas máximo (line-clamp)
4. **Extracto** — 3 líneas máx con line-clamp
5. **Meta** — Avatar miniatura + nombre + fecha

### Specs

| Parte | Propiedad | Valor |
|-------|-----------|-------|
| Imagen | Aspect-ratio | `16 / 9` |
| Imagen | Border-radius | `var(--mv-radius-lg) var(--mv-radius-lg) 0 0` (solo top) |
| Imagen | Object-fit | `cover` |
| Tags | Margin-top | `var(--mv-space-4)` |
| Tags | Gap | `var(--mv-space-2)` |
| Título | Font | `var(--mv-font-display)`, `var(--mv-text-xl)`, `var(--mv-font-semibold)` |
| Título | Color | `var(--mv-text-primary)` |
| Título | Margin-top | `var(--mv-space-3)` |
| Título | Line-clamp | 2 |
| Extracto | Font | `var(--mv-font-body)`, `var(--mv-text-base)`, `var(--mv-font-regular)` |
| Extracto | Color | `var(--mv-text-secondary)` |
| Extracto | Margin-top | `var(--mv-space-2)` |
| Extracto | Line-height | `var(--mv-leading-relaxed)` |
| Extracto | Line-clamp | 3 |
| Meta | Margin-top | `var(--mv-space-4)` |
| Meta | Font | `var(--mv-text-sm)`, `var(--mv-text-tertiary)` |
| Meta avatar | 32px × 32px, `border-radius: var(--mv-radius-full)` |
| Padding body | `var(--mv-space-5)` (sin imagen la card tiene padding completo `var(--mv-space-6)`) |

### CSS

```css
.mv-card--content {
  padding: 0;
}

.mv-card--content .mv-card__image {
  aspect-ratio: 16 / 9;
  width: 100%;
  object-fit: cover;
}

.mv-card--content .mv-card__body {
  padding: var(--mv-space-5);
}

.mv-card--content .mv-card__title {
  font-family: var(--mv-font-display);
  font-size: var(--mv-text-xl);
  font-weight: var(--mv-font-semibold);
  color: var(--mv-text-primary);
  line-height: var(--mv-leading-tight);
  margin-top: var(--mv-space-3);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.mv-card--content .mv-card__excerpt {
  font-family: var(--mv-font-body);
  font-size: var(--mv-text-base);
  color: var(--mv-text-secondary);
  line-height: var(--mv-leading-relaxed);
  margin-top: var(--mv-space-2);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.mv-card--content .mv-card__meta {
  display: flex;
  align-items: center;
  gap: var(--mv-space-3);
  margin-top: var(--mv-space-4);
  font-size: var(--mv-text-sm);
  color: var(--mv-text-tertiary);
}
```

### Ejemplo de uso

- **Blog:** Grilla de artículos en la sección "Notas de ensayo"
- **Recursos:** Listado de guías y herramientas descargables
- **Newsletter archive:** Cada edición pasada como content card

---

## 3.2 Media Card (Video de concierto, Reel)

### Anatomía

```
┌──────────────────────────────────────────────┐
│  ┌──────────────────────────────────────┐    │
│  │                                      │    │
│  │         Video thumbnail              │    │  ← aspect-ratio: 16/9
│  │            ▶ (play)                  │    │
│  │                                      │    │
│  │                          03:42  ──── │    │  ← duración
│  └──────────────────────────────────────┘    │
│                                              │
│  Título del video                            │
│  2,340 vistas · Hace 3 días                  │
└──────────────────────────────────────────────┘
```

**Partes:**
1. **Thumbnail** — aspect-ratio 16/9 con overlay oscuro sutil al hover
2. **Play button** — Círculo 56px centrado, bg `rgba(0,0,0,0.6)`, icono play blanco
3. **Duración badge** — Esquina inferior derecha sobre thumbnail
4. **Título** — 2 líneas máx
5. **Stats** — Vistas + tiempo relativo

### Specs

| Parte | Propiedad | Valor |
|-------|-----------|-------|
| Thumbnail overlay (hover) | Background | `rgba(0, 0, 0, 0.2)` con `transition: var(--mv-transition-normal)` |
| Play button | Tamaño | 56px × 56px |
| Play button | Background | `rgba(0, 0, 0, 0.60)` → hover: `var(--mv-primary)` |
| Play button | Border-radius | `var(--mv-radius-full)` |
| Play button | Transition | `var(--mv-transition-fast)` con `var(--mv-ease-spring)` |
| Play icono | 24px, `var(--mv-text-inverse)` |
| Duration badge | Bg `rgba(0, 0, 0, 0.75)`, padding `var(--mv-space-1) var(--mv-space-2)` |
| Duration badge | Font | `var(--mv-font-mono)`, `var(--mv-text-xs)`, `var(--mv-text-inverse)` |
| Duration badge | Border-radius | `var(--mv-radius-sm)` |
| Duration badge | Posición | `bottom: var(--mv-space-2); right: var(--mv-space-2)` |
| Título | Font | `var(--mv-font-display)`, `var(--mv-text-lg)`, `var(--mv-font-medium)` |
| Stats | Font | `var(--mv-text-sm)`, `var(--mv-text-tertiary)` |

### CSS

```css
.mv-card--media {
  padding: 0;
}

.mv-card--media .mv-card__thumbnail {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.mv-card--media .mv-card__thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--mv-duration-slow) var(--mv-ease-gentle);
}

.mv-card--media:hover .mv-card__thumbnail img {
  transform: scale(1.03);
}

.mv-card--media .mv-card__play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  border-radius: var(--mv-radius-full);
  background: rgba(0, 0, 0, 0.60);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--mv-transition-fast);
}

.mv-card--media:hover .mv-card__play {
  background: var(--mv-primary);
  transform: translate(-50%, -50%) scale(1.08);
}

.mv-card--media .mv-card__duration {
  position: absolute;
  bottom: var(--mv-space-2);
  right: var(--mv-space-2);
  background: rgba(0, 0, 0, 0.75);
  color: var(--mv-text-inverse);
  font-family: var(--mv-font-mono);
  font-size: var(--mv-text-xs);
  padding: var(--mv-space-1) var(--mv-space-2);
  border-radius: var(--mv-radius-sm);
}

.mv-card--media .mv-card__body {
  padding: var(--mv-space-4) var(--mv-space-5);
}
```

### Ejemplo de uso

- **Portafolio:** Grilla de videos de conciertos y presentaciones
- **Redes embebidas:** Reels del ensamble en la sección de media
- **Canal de YouTube:** Preview de los últimos videos

---

## 3.3 Event Card (Concierto, taller, charla)

### Anatomía

```
┌──────────────────────────────────────────────┐
│  ┌────┐                                      │
│  │ 15 │  SEP 2026                ← date      │
│  │ SÁB│                                      │
│  └────┘                                      │
│                                              │
│  Concierto: Voces del Equinoccio  ← título   │
│                                              │
│  📍 Auditorio Universidad Anáhuac            │
│  🕐 19:00 hrs                    ← meta      │
│  👥 Ensamble Coral + Orquesta de cámara      │
│                                              │
│  ┌──────────────┐  ┌──────────────────┐      │
│  │  Ver detalles │  │  Reservar lugar  │      │
│  └──────────────┘  └──────────────────┘      │
│   secondary btn      primary btn              │
└──────────────────────────────────────────────┘
```

**Partes:**
1. **Date block** — Día (grande) + mes abreviado + día de la semana
2. **Título del evento** — H3
3. **Meta** — Icono + lugar, hora, participantes
4. **Estado badge** (opcional) — "Próximamente", "Últimos lugares", "Agotado"
5. **Acciones** — Par de botones

### Specs

| Parte | Propiedad | Valor |
|-------|-----------|-------|
| Date block | Tamaño | 64px × 64px |
| Date block | Background | `var(--mv-primary)` → con estado "agotado": `var(--mv-neutral-400)` |
| Date block | Border-radius | `var(--mv-radius-md)` |
| Date block | Día (número) | `var(--mv-font-display)`, `var(--mv-text-2xl)`, `var(--mv-font-bold)`, `var(--mv-text-inverse)` |
| Date block | Día (nombre) | `var(--mv-text-xs)`, `var(--mv-font-medium)`, `var(--mv-text-inverse)`, `text-transform: uppercase`, `var(--mv-tracking-wide)` |
| Título | `var(--mv-font-display)`, `var(--mv-text-xl)`, `var(--mv-font-semibold)` |
| Meta items | Font | `var(--mv-text-sm)`, `var(--mv-text-secondary)` |
| Meta items | Gap | `var(--mv-space-2)` entre items |
| Meta icono | 16px, `var(--mv-text-tertiary)` |
| Acciones | Gap | `var(--mv-space-3)` |
| Acciones | Margin-top | `var(--mv-space-5)` |
| Estado badge "Últimos lugares" | Bg `color-mix(in srgb, var(--mv-warning) 15%, transparent)`, color `var(--mv-warning)` |
| Estado badge "Agotado" | Bg `var(--mv-neutral-300)`, color `var(--mv-neutral-600)` |

### Ejemplo de uso

- **Agenda:** Listado de próximos conciertos y talleres
- **Landing de evento:** Card destacada con imagen de fondo para el próximo concierto
- **Sidebar:** "Próximos eventos" en el blog

---

## 3.4 Testimonial Card (Quote de corista/alumno)

### Anatomía

```
┌──────────────────────────────────────────────┐
│                                              │
│  "Cantar en el ensamble de Memo             │
│   cambió mi forma de entender               │
│   lo que significa hacer música              │
│   con otros."                                │
│                                              │  ← quote en serif
│  ┌──────┐                                    │
│  │ (SL) │  Sofía Lara                       │
│  └──────┘  Soprano · Ensamble Coral 2025    │
│             ← avatar + nombre + contexto     │
│                                              │
│  ★★★★★                          ← rating    │
│                                              │
└──────────────────────────────────────────────┘
```

**Partes:**
1. **Comillas decorativas** — Carácter `"` grande en `var(--mv-secondary)` como acento visual
2. **Quote text** — Tipografía serif, itálica, tamaño generoso
3. **Atribución** — Avatar + nombre + contexto (rol, ensamble, año)
4. **Rating** (opcional) — 5 estrellas en `var(--mv-secondary)`

### Specs

| Parte | Propiedad | Valor |
|-------|-----------|-------|
| Comilla decorativa | Font | `var(--mv-font-serif)`, `var(--mv-text-5xl)`, `var(--mv-font-bold)` |
| Comilla decorativa | Color | `var(--mv-secondary)` |
| Comilla decorativa | Posición | Top-left, `line-height: 0.8` para compensar |
| Quote text | Font | `var(--mv-font-serif)`, `var(--mv-text-lg)`, `font-style: italic` |
| Quote text | Color | `var(--mv-text-primary)` |
| Quote text | Line-height | `var(--mv-leading-relaxed)` |
| Avatar | 40px × 40px, `border-radius: var(--mv-radius-full)` |
| Nombre | `var(--mv-font-body)`, `var(--mv-text-base)`, `var(--mv-font-semibold)`, `var(--mv-text-primary)` |
| Contexto | `var(--mv-text-sm)`, `var(--mv-text-tertiary)` |
| Rating star activa | `var(--mv-secondary)` |
| Rating star inactiva | `var(--mv-neutral-400)` |
| Card border-left | `3px solid var(--mv-secondary)` — acento lateral dorado |
| Card padding | `var(--mv-space-6) var(--mv-space-6) var(--mv-space-6) var(--mv-space-8)` (extra izquierda para el acento) |

### CSS

```css
.mv-card--testimonial {
  border-left: 3px solid var(--mv-secondary);
  padding: var(--mv-space-6) var(--mv-space-6) var(--mv-space-6) var(--mv-space-8);
  position: relative;
}

.mv-card--testimonial .mv-card__quote-mark {
  font-family: var(--mv-font-serif);
  font-size: var(--mv-text-5xl);
  font-weight: var(--mv-font-bold);
  color: var(--mv-secondary);
  line-height: 0.8;
  position: absolute;
  top: var(--mv-space-4);
  left: var(--mv-space-4);
  opacity: 0.4;
}

.mv-card--testimonial .mv-card__quote {
  font-family: var(--mv-font-serif);
  font-size: var(--mv-text-lg);
  font-style: italic;
  color: var(--mv-text-primary);
  line-height: var(--mv-leading-relaxed);
}

.mv-card--testimonial .mv-card__attribution {
  display: flex;
  align-items: center;
  gap: var(--mv-space-3);
  margin-top: var(--mv-space-5);
}

.mv-card--testimonial .mv-card__author-name {
  font-family: var(--mv-font-body);
  font-size: var(--mv-text-base);
  font-weight: var(--mv-font-semibold);
  color: var(--mv-text-primary);
}

.mv-card--testimonial .mv-card__author-role {
  font-size: var(--mv-text-sm);
  color: var(--mv-text-tertiary);
}
```

### Ejemplo de uso

- **Landing:** Carrusel de testimonios de coristas y alumnos
- **Página "Sobre mí":** Sección de voces que avalan el trabajo
- **Página de evento:** Testimonios de ediciones anteriores

---

---

# 4. NAVIGATION

> *"La navegación es el tempo de la experiencia — guía el ritmo con el que el usuario se mueve a través del contenido."* Invisible cuando funciona bien. Notable solo cuando falla.

---

## 4.1 Navbar (Desktop + Mobile)

### Anatomía — Desktop

```
┌──────────────────────────────────────────────────────────────────────┐
│  MEMO VALDEZ    Inicio  Música  Tech  Sobre mí  Contacto    [🔍]   │
│  ← logo         ← nav links (ghost buttons)               ← search │
└──────────────────────────────────────────────────────────────────────┘
```

### Anatomía — Mobile

```
┌──────────────────────────────────────────────┐
│  MEMO VALDEZ                        [☰]      │
│  ← logo                         ← hamburger  │
└──────────────────────────────────────────────┘
```

**Partes:**
1. **Logo / Wordmark** — "MEMO VALDEZ" en `var(--mv-font-display)`
2. **Nav links** — Ghost buttons con estado activo
3. **Search trigger** — Icono de búsqueda (abre search expandido o overlay)
4. **Hamburger** (mobile) — 3 líneas → animación a ✕ cuando abierto
5. **Mobile menu** — Drawer lateral (ver componente Drawer)

### Specs

| Propiedad | Valor |
|-----------|-------|
| Height | 64px (mobile), 72px (desktop) |
| Background | `var(--mv-bg)` con `backdrop-filter: blur(12px)` y `background: color-mix(in srgb, var(--mv-bg) 85%, transparent)` |
| Border-bottom | `1px solid var(--mv-neutral-300)` |
| Position | `sticky`, `top: 0` |
| Z-index | `var(--mv-z-sticky)` |
| Padding-inline | `var(--mv-space-5)` (mobile), `var(--mv-space-8)` (desktop) |
| Logo font | `var(--mv-font-display)`, `var(--mv-text-lg)`, `var(--mv-font-bold)`, `var(--mv-tracking-widest)`, `text-transform: uppercase` |
| Logo color | `var(--mv-text-primary)` |
| Nav link font | `var(--mv-font-body)`, `var(--mv-text-sm)`, `var(--mv-font-medium)` |
| Nav link color | `var(--mv-text-secondary)` → hover: `var(--mv-text-primary)` → active: `var(--mv-primary)` |
| Nav link gap | `var(--mv-space-1)` (padding como ghost buttons) |
| Active indicator | `2px solid var(--mv-primary)` como `border-bottom`, offset `var(--mv-space-2)` debajo del texto |
| Hamburger | 24px, 3 líneas de 2px, gap 5px, color `var(--mv-text-primary)` |
| Transition hamburger → ✕ | `var(--mv-duration-normal)` con `var(--mv-ease-out)` |

### CSS

```css
.mv-navbar {
  position: sticky;
  top: 0;
  z-index: var(--mv-z-sticky);
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: var(--mv-space-5);
  background: color-mix(in srgb, var(--mv-bg) 85%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--mv-neutral-300);
}

@media (min-width: 1024px) {
  .mv-navbar {
    height: 72px;
    padding-inline: var(--mv-space-8);
  }
}

.mv-navbar__logo {
  font-family: var(--mv-font-display);
  font-size: var(--mv-text-lg);
  font-weight: var(--mv-font-bold);
  letter-spacing: var(--mv-tracking-widest);
  text-transform: uppercase;
  color: var(--mv-text-primary);
  text-decoration: none;
}

.mv-navbar__link {
  font-family: var(--mv-font-body);
  font-size: var(--mv-text-sm);
  font-weight: var(--mv-font-medium);
  color: var(--mv-text-secondary);
  text-decoration: none;
  padding: var(--mv-space-2) var(--mv-space-3);
  border-radius: var(--mv-radius-md);
  transition: var(--mv-transition-fast);
  position: relative;
}

.mv-navbar__link:hover {
  color: var(--mv-text-primary);
  background: color-mix(in srgb, var(--mv-text-primary) 6%, transparent);
}

.mv-navbar__link.is-active {
  color: var(--mv-primary);
}

.mv-navbar__link.is-active::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: var(--mv-space-3);
  right: var(--mv-space-3);
  height: 2px;
  background: var(--mv-primary);
  border-radius: 1px;
}
```

### Ejemplo de uso

- **Todas las páginas:** Navbar fijo con glassmorphism sutil
- **Blog:** Links activos resaltando la sección actual
- **Mobile:** Hamburger que abre drawer con navegación completa

---

## 4.2 Footer

### Anatomía

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│  MEMO VALDEZ                                                         │
│  Música · Tecnología · Personas                                      │
│                                                                      │
│  ─────────────────── (separador en terracota sutil) ──────────────   │
│                                                                      │
│  Navegación        Contenido         Conecta                         │
│  · Inicio          · Blog            · Instagram                     │
│  · Sobre mí        · Newsletter      · LinkedIn                      │
│  · Contacto        · Recursos        · YouTube                       │
│  · Eventos         · Podcast         · Email                         │
│                                                                      │
│  ─────────────────── (separador neutral) ─────────────────────────   │
│                                                                      │
│  © 2026 Memo Valdez · Mérida, Yucatán             Privacidad        │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### Specs

| Propiedad | Valor |
|-----------|-------|
| Background | `var(--mv-neutral-100)` (un paso más oscuro que `--mv-bg` en dark mode) |
| Padding | `var(--mv-space-16) var(--mv-space-8) var(--mv-space-8)` |
| Separador principal | `1px solid var(--mv-primary)` al 20% opacidad |
| Separador secundario | `1px solid var(--mv-neutral-300)` |
| Logo footer | `var(--mv-font-display)`, `var(--mv-text-2xl)`, `var(--mv-font-bold)`, `var(--mv-tracking-widest)` |
| Tagline | `var(--mv-text-sm)`, `var(--mv-text-tertiary)`, `var(--mv-tracking-wide)`, `text-transform: uppercase` |
| Column heading | `var(--mv-text-sm)`, `var(--mv-font-semibold)`, `var(--mv-text-secondary)`, `text-transform: uppercase`, `var(--mv-tracking-wide)` |
| Column links | `var(--mv-text-sm)`, `var(--mv-text-tertiary)` → hover: `var(--mv-primary)` |
| Link gap | `var(--mv-space-3)` |
| Column gap | `var(--mv-space-10)` (desktop grid) |
| Copyright | `var(--mv-text-xs)`, `var(--mv-text-tertiary)` |
| Grid | 4 columnas desktop, 2 columnas tablet, stack mobile |

---

## 4.3 Breadcrumbs

### Anatomía

```
Inicio  /  Blog  /  Música y tecnología  /  Título del artículo
  ↑ link    ↑ link   ↑ link                 ↑ current (no-link)
        ↑ separador
```

### Specs

| Propiedad | Valor |
|-----------|-------|
| Font | `var(--mv-font-body)`, `var(--mv-text-sm)`, `var(--mv-font-regular)` |
| Color links | `var(--mv-text-tertiary)` → hover: `var(--mv-primary)` |
| Color current | `var(--mv-text-secondary)`, `var(--mv-font-medium)` |
| Separador | `/` en `var(--mv-neutral-400)`, padding `0 var(--mv-space-2)` |
| Margin-bottom | `var(--mv-space-4)` |
| Overflow | Truncar items intermedios en mobile con `...` |

### CSS

```css
.mv-breadcrumbs {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0;
  font-family: var(--mv-font-body);
  font-size: var(--mv-text-sm);
  margin-bottom: var(--mv-space-4);
}

.mv-breadcrumbs__item {
  color: var(--mv-text-tertiary);
  text-decoration: none;
  transition: color var(--mv-duration-fast) var(--mv-ease-out);
}

.mv-breadcrumbs__item:hover {
  color: var(--mv-primary);
}

.mv-breadcrumbs__separator {
  color: var(--mv-neutral-400);
  padding: 0 var(--mv-space-2);
  user-select: none;
}

.mv-breadcrumbs__current {
  color: var(--mv-text-secondary);
  font-weight: var(--mv-font-medium);
}
```

---

## 4.4 Tabs

### Anatomía

```
┌─────────┐  ┌─────────┐  ┌─────────┐
│  Música  │  │  Tech   │  │ Personas│     ← tab items
├─────────┘  └─────────┘  └─────────┘
│▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔│     ← line con indicator
│                                     │
│  Contenido del tab activo           │     ← tab panel
│                                     │
└─────────────────────────────────────┘
```

### Specs

| Propiedad | Valor |
|-----------|-------|
| Tab item font | `var(--mv-font-body)`, `var(--mv-text-sm)`, `var(--mv-font-medium)` |
| Tab item padding | `var(--mv-space-3) var(--mv-space-4)` |
| Tab item color | `var(--mv-text-tertiary)` → hover: `var(--mv-text-primary)` → active: `var(--mv-primary)` |
| Active indicator | `2px solid var(--mv-primary)`, bottom, ancho del tab |
| Indicator transition | `width` y `left` animados con `var(--mv-duration-normal)` `var(--mv-ease-out)` (sliding) |
| Tab bar border-bottom | `1px solid var(--mv-neutral-300)` |
| Tab panel padding-top | `var(--mv-space-6)` |
| Gap entre tabs | `0` (los paddings crean separación visual) |

### CSS

```css
.mv-tabs {
  width: 100%;
}

.mv-tabs__list {
  display: flex;
  border-bottom: 1px solid var(--mv-neutral-300);
  position: relative;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.mv-tabs__tab {
  font-family: var(--mv-font-body);
  font-size: var(--mv-text-sm);
  font-weight: var(--mv-font-medium);
  color: var(--mv-text-tertiary);
  padding: var(--mv-space-3) var(--mv-space-4);
  border: none;
  background: none;
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  transition: color var(--mv-duration-fast) var(--mv-ease-out);
}

.mv-tabs__tab:hover {
  color: var(--mv-text-primary);
}

.mv-tabs__tab.is-active {
  color: var(--mv-primary);
}

.mv-tabs__tab.is-active::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--mv-primary);
}

.mv-tabs__panel {
  padding-top: var(--mv-space-6);
}
```

### Ejemplo de uso

- **Portafolio:** Tabs "Conciertos", "Talleres", "Conferencias"
- **Blog:** Tabs de filtro por categoría
- **Perfil:** "Bio", "Trayectoria", "Prensa"

---

## 4.5 Pagination

### Anatomía

```
←  1  2  [3]  4  5  ...  12  →
↑      ↑  ↑ current           ↑
prev   pages                  next
```

### Specs

| Propiedad | Valor |
|-----------|-------|
| Button size | 40px × 40px (md), 36px × 36px (sm) |
| Button border-radius | `var(--mv-radius-md)` |
| Font | `var(--mv-font-body)`, `var(--mv-text-sm)`, `var(--mv-font-medium)` |
| Color default | `var(--mv-text-secondary)` |
| Color hover | `var(--mv-text-primary)`, bg `color-mix(in srgb, var(--mv-text-primary) 6%, transparent)` |
| Color active/current | `var(--mv-text-inverse)`, bg `var(--mv-primary)` |
| Color disabled (prev/next) | `var(--mv-neutral-500)`, `cursor: not-allowed` |
| Gap | `var(--mv-space-1)` |
| Ellipsis | `...` en `var(--mv-text-tertiary)`, no clickeable |
| Prev/Next arrows | 18px, chevron icons |

---

## 4.6 Mobile Bottom Nav

### Anatomía

```
┌──────────────────────────────────────────────┐
│   🏠        🎵        📝        👤           │
│  Inicio    Música    Blog     Perfil         │
└──────────────────────────────────────────────┘
    ↑ active (primary)    ↑ inactive (tertiary)
```

### Specs

| Propiedad | Valor |
|-----------|-------|
| Height | 64px + safe-area-inset-bottom |
| Background | `var(--mv-surface)` con `backdrop-filter: blur(12px)` |
| Border-top | `1px solid var(--mv-neutral-300)` |
| Position | `fixed`, `bottom: 0` |
| Z-index | `var(--mv-z-fixed)` |
| Items | 4–5 máximo |
| Item icon | 24px |
| Item label | `var(--mv-text-xs)`, `var(--mv-font-medium)` |
| Item color inactive | `var(--mv-text-tertiary)` |
| Item color active | `var(--mv-primary)` |
| Item active indicator | Dot de 4px, `var(--mv-primary)`, centrado sobre el icono |
| Gap icono-label | `var(--mv-space-1)` |
| Safe area | `padding-bottom: env(safe-area-inset-bottom)` |
| Visibility | Solo visible bajo `var(--mv-screen-md)` (768px) |

### CSS

```css
.mv-bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: calc(64px + env(safe-area-inset-bottom));
  padding-bottom: env(safe-area-inset-bottom);
  background: color-mix(in srgb, var(--mv-surface) 90%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid var(--mv-neutral-300);
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: var(--mv-z-fixed);
}

@media (min-width: 768px) {
  .mv-bottom-nav { display: none; }
}

.mv-bottom-nav__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--mv-space-1);
  color: var(--mv-text-tertiary);
  font-size: var(--mv-text-xs);
  font-weight: var(--mv-font-medium);
  text-decoration: none;
  padding: var(--mv-space-2);
  transition: color var(--mv-duration-fast) var(--mv-ease-out);
}

.mv-bottom-nav__item.is-active {
  color: var(--mv-primary);
}
```

---

---

# 5. MODALS & OVERLAYS

> *"Como el momento antes de que empiece la música — el overlay oscurece todo lo demás para que solo quede lo esencial."*

---

## 5.1 Modal (Genérico)

### Anatomía

```
╔══════════════ OVERLAY ═══════════════════════╗
║                                              ║
║   ┌──────────────────────────────────┐       ║
║   │  Título del modal           [✕]  │       ║  ← header
║   ├──────────────────────────────────┤       ║
║   │                                  │       ║
║   │  Contenido del modal.            │       ║  ← body (scrollable)
║   │  Puede ser texto, formularios,   │       ║
║   │  imágenes, cualquier cosa.       │       ║
║   │                                  │       ║
║   ├──────────────────────────────────┤       ║
║   │           [Cancelar] [Confirmar] │       ║  ← footer (acciones)
║   └──────────────────────────────────┘       ║
║                                              ║
╚══════════════════════════════════════════════╝
```

**Partes:**
1. **Overlay** — Fondo oscuro que bloquea interacción con lo de atrás
2. **Container** — La caja del modal centrada
3. **Header** — Título + botón close
4. **Body** — Contenido principal (scrollable si excede max-height)
5. **Footer** — Botones de acción alineados a la derecha

### Specs

| Propiedad | Valor |
|-----------|-------|
| **Overlay** | |
| Background | `var(--mv-overlay)` — dark mode: `rgba(0, 0, 0, 0.70)` |
| Z-index | `var(--mv-z-modal-backdrop)` |
| Transition | `opacity var(--mv-duration-normal) var(--mv-ease-gentle)` |
| **Container** | |
| Background | `var(--mv-surface-elevated)` |
| Border-radius | `var(--mv-radius-lg)` |
| Shadow | `var(--mv-shadow-xl)` |
| Width | `min(90vw, 560px)` — sm: 400px, lg: 720px |
| Max-height | `min(85vh, 640px)` |
| Z-index | `var(--mv-z-modal)` |
| Border | `1px solid var(--mv-neutral-300)` |
| Animation entrada | `scale(0.95)` → `scale(1)` + `opacity 0→1`, `var(--mv-duration-normal)` `var(--mv-ease-out)` |
| **Header** | |
| Padding | `var(--mv-space-5) var(--mv-space-6)` |
| Border-bottom | `1px solid var(--mv-neutral-300)` |
| Title font | `var(--mv-font-display)`, `var(--mv-text-xl)`, `var(--mv-font-semibold)` |
| Close button | 24px icon, `var(--mv-text-tertiary)` → hover: `var(--mv-text-primary)`, padding `var(--mv-space-2)` |
| **Body** | |
| Padding | `var(--mv-space-6)` |
| Overflow-y | `auto` |
| Font | `var(--mv-font-body)`, `var(--mv-text-base)`, `var(--mv-leading-relaxed)` |
| **Footer** | |
| Padding | `var(--mv-space-4) var(--mv-space-6)` |
| Border-top | `1px solid var(--mv-neutral-300)` |
| Display | `flex`, `justify-content: flex-end`, `gap: var(--mv-space-3)` |

### CSS

```css
.mv-modal-overlay {
  position: fixed;
  inset: 0;
  background: var(--mv-overlay);
  z-index: var(--mv-z-modal-backdrop);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--mv-space-5);
  opacity: 0;
  transition: opacity var(--mv-duration-normal) var(--mv-ease-gentle);
}

.mv-modal-overlay.is-open { opacity: 1; }

.mv-modal {
  background: var(--mv-surface-elevated);
  border-radius: var(--mv-radius-lg);
  box-shadow: var(--mv-shadow-xl);
  border: 1px solid var(--mv-neutral-300);
  width: min(90vw, 560px);
  max-height: min(85vh, 640px);
  display: flex;
  flex-direction: column;
  z-index: var(--mv-z-modal);
  transform: scale(0.95);
  opacity: 0;
  transition: transform var(--mv-duration-normal) var(--mv-ease-out),
              opacity var(--mv-duration-normal) var(--mv-ease-out);
}

.mv-modal-overlay.is-open .mv-modal {
  transform: scale(1);
  opacity: 1;
}

.mv-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--mv-space-5) var(--mv-space-6);
  border-bottom: 1px solid var(--mv-neutral-300);
}

.mv-modal__title {
  font-family: var(--mv-font-display);
  font-size: var(--mv-text-xl);
  font-weight: var(--mv-font-semibold);
  color: var(--mv-text-primary);
}

.mv-modal__body {
  padding: var(--mv-space-6);
  overflow-y: auto;
  flex: 1;
}

.mv-modal__footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--mv-space-3);
  padding: var(--mv-space-4) var(--mv-space-6);
  border-top: 1px solid var(--mv-neutral-300);
}
```

### Ejemplo de uso

- **Inscripción:** Modal con formulario de registro a un evento
- **Galería:** Modal de imagen expandida de concierto
- **Newsletter:** Modal de confirmación de suscripción

---

## 5.2 Dialog (Confirmación)

### Anatomía

```
╔══════════════ OVERLAY ══════════════════╗
║                                        ║
║   ┌────────────────────────────┐       ║
║   │  ⚠️                       │       ║  ← icono semántico
║   │                            │       ║
║   │  ¿Eliminar este evento?    │       ║  ← título
║   │                            │       ║
║   │  Esta acción no se puede   │       ║  ← descripción
║   │  deshacer.                 │       ║
║   │                            │       ║
║   │  [Cancelar]  [Eliminar]    │       ║  ← acciones
║   └────────────────────────────┘       ║
║                                        ║
╚════════════════════════════════════════╝
```

Versión simplificada del Modal. Sin header separado ni scroll. Centrado verticalmente.

### Specs

| Propiedad | Valor |
|-----------|-------|
| Width | `min(90vw, 400px)` |
| Padding | `var(--mv-space-8)` |
| Text-align | `center` |
| Icono | 48px, color semántico (warning: `var(--mv-warning)`, error: `var(--mv-error)`, info: `var(--mv-info)`) |
| Título | `var(--mv-font-display)`, `var(--mv-text-xl)`, `var(--mv-font-semibold)`, margin-top `var(--mv-space-4)` |
| Descripción | `var(--mv-text-base)`, `var(--mv-text-secondary)`, margin-top `var(--mv-space-2)` |
| Acciones | `margin-top: var(--mv-space-6)`, `display: flex`, `gap: var(--mv-space-3)`, `justify-content: center` |
| Acción destructiva | Botón destructive a la derecha |
| Acción cancel | Botón ghost o secondary |

---

## 5.3 Drawer (Sidebar, Mobile menu)

### Anatomía

```
╔═══════════════════════════════════════════════════╗
║  ┌──────────────────┐                             ║
║  │  MEMO VALDEZ [✕] │                             ║
║  ├──────────────────┤                             ║
║  │  · Inicio        │                             ║
║  │  · Música        │          OVERLAY            ║
║  │  · Tech          │                             ║
║  │  · Sobre mí      │                             ║
║  │  · Contacto      │                             ║
║  │                  │                             ║
║  │  ────────────    │                             ║
║  │                  │                             ║
║  │  🌙 Modo oscuro  │                             ║
║  │  [toggle]        │                             ║
║  │                  │                             ║
║  │  IG · LI · YT    │                             ║
║  └──────────────────┘                             ║
╚═══════════════════════════════════════════════════╝
   ← drawer (desde izq)            ← overlay
```

### Specs

| Propiedad | Valor |
|-----------|-------|
| Width | `min(85vw, 320px)` |
| Height | `100vh` (+ safe areas) |
| Background | `var(--mv-surface)` |
| Position | `fixed`, `left: 0`, `top: 0` |
| Z-index | `var(--mv-z-modal)` |
| Shadow | `var(--mv-shadow-xl)` |
| Border-right | `1px solid var(--mv-neutral-300)` |
| Animation | `translateX(-100%)` → `translateX(0)`, `var(--mv-duration-normal)` `var(--mv-ease-out)` |
| Header padding | `var(--mv-space-5)` |
| Nav item padding | `var(--mv-space-4) var(--mv-space-5)` |
| Nav item font | `var(--mv-text-lg)`, `var(--mv-font-medium)` |
| Nav item active | Color `var(--mv-primary)`, bg `color-mix(in srgb, var(--mv-primary) 8%, transparent)` |
| Separador | `1px solid var(--mv-neutral-300)`, margin `var(--mv-space-4) var(--mv-space-5)` |

---

## 5.4 Tooltip

### Anatomía

```
          ┌─────────────────────────┐
          │  Texto del tooltip      │
          └───────────┬─────────────┘
                      ▼
               [Elemento trigger]
```

### Specs

| Propiedad | Valor |
|-----------|-------|
| Background | `var(--mv-neutral-800)` (dark: `var(--mv-neutral-200)`) |
| Color | `var(--mv-text-inverse)` (dark: `var(--mv-text-primary)`) |
| Font | `var(--mv-font-body)`, `var(--mv-text-xs)`, `var(--mv-font-regular)` |
| Padding | `var(--mv-space-2) var(--mv-space-3)` |
| Border-radius | `var(--mv-radius-md)` |
| Shadow | `var(--mv-shadow-md)` |
| Max-width | `240px` |
| Z-index | `var(--mv-z-tooltip)` |
| Arrow | 6px × 6px, mismo color que background, rotado 45° |
| Animation | `opacity 0→1` + `translateY(4px→0)`, `var(--mv-duration-fast)` |
| Delay appear | `300ms` (evita flickers en hover rápido) |
| Delay disappear | `0ms` |
| Posiciones | `top` (default), `bottom`, `left`, `right` — auto-flip si no cabe |

---

## 5.5 Toast / Snackbar (Notificaciones)

### Anatomía

```
┌──────────────────────────────────────────────┐
│  ✓  Inscripción confirmada             [✕]   │
│     Te enviamos un correo de confirmación.   │
└──────────────────────────────────────────────┘
  ↑ icono semántico   ↑ título + descripción   ↑ dismiss
```

### Variantes semánticas

| Variante | Icono | Color acento | Border-left |
|----------|-------|-------------|-------------|
| **Success** | ✓ checkmark | `var(--mv-success)` | `3px solid var(--mv-success)` |
| **Error** | ✕ circle | `var(--mv-error)` | `3px solid var(--mv-error)` |
| **Warning** | ⚠ triangle | `var(--mv-warning)` | `3px solid var(--mv-warning)` |
| **Info** | ℹ circle | `var(--mv-info)` | `3px solid var(--mv-info)` |

### Specs

| Propiedad | Valor |
|-----------|-------|
| Position | `fixed`, `bottom: var(--mv-space-6)`, `right: var(--mv-space-6)` — mobile: full width bottom |
| Width | `min(90vw, 400px)` |
| Background | `var(--mv-surface-elevated)` |
| Border | `1px solid var(--mv-neutral-300)` |
| Border-left | `3px solid {color semántico}` |
| Border-radius | `var(--mv-radius-md)` |
| Shadow | `var(--mv-shadow-lg)` |
| Padding | `var(--mv-space-4) var(--mv-space-5)` |
| Z-index | `var(--mv-z-tooltip)` (sobre todo) |
| Icono | 20px, color semántico |
| Título | `var(--mv-text-sm)`, `var(--mv-font-semibold)`, `var(--mv-text-primary)` |
| Descripción | `var(--mv-text-sm)`, `var(--mv-text-secondary)` |
| Dismiss button | 16px, `var(--mv-text-tertiary)` → hover: `var(--mv-text-primary)` |
| Auto-dismiss | 5 segundos (con progress bar sutil en la base) |
| Animation entrada | `translateY(16px)` → `translateY(0)` + `opacity 0→1`, `var(--mv-duration-normal)` `var(--mv-ease-out)` |
| Animation salida | `translateX(100%)` + `opacity 0`, `var(--mv-duration-fast)` |
| Stacking | Máximo 3 toasts visibles, apilados con `var(--mv-space-2)` gap |

### CSS

```css
.mv-toast {
  position: fixed;
  bottom: var(--mv-space-6);
  right: var(--mv-space-6);
  width: min(90vw, 400px);
  background: var(--mv-surface-elevated);
  border: 1px solid var(--mv-neutral-300);
  border-radius: var(--mv-radius-md);
  box-shadow: var(--mv-shadow-lg);
  padding: var(--mv-space-4) var(--mv-space-5);
  z-index: var(--mv-z-tooltip);
  display: flex;
  align-items: flex-start;
  gap: var(--mv-space-3);
  transform: translateY(16px);
  opacity: 0;
  transition: transform var(--mv-duration-normal) var(--mv-ease-out),
              opacity var(--mv-duration-normal) var(--mv-ease-out);
}

.mv-toast.is-visible {
  transform: translateY(0);
  opacity: 1;
}

.mv-toast--success { border-left: 3px solid var(--mv-success); }
.mv-toast--error   { border-left: 3px solid var(--mv-error); }
.mv-toast--warning { border-left: 3px solid var(--mv-warning); }
.mv-toast--info    { border-left: 3px solid var(--mv-info); }

.mv-toast__icon { min-width: 20px; }
.mv-toast--success .mv-toast__icon { color: var(--mv-success); }
.mv-toast--error   .mv-toast__icon { color: var(--mv-error); }
.mv-toast--warning .mv-toast__icon { color: var(--mv-warning); }
.mv-toast--info    .mv-toast__icon { color: var(--mv-info); }
```

### Ejemplo de uso

- **Success:** "¡Inscripción confirmada! Te enviamos un correo."
- **Info:** "Nuevo artículo publicado: 'IA en el ensayo coral'"
- **Warning:** "Solo quedan 5 lugares para el taller"
- **Error:** "No se pudo procesar el pago. Intenta de nuevo."

---

---

# 6. DATA DISPLAY

> *"Los datos son las notas en la partitura — necesitan estructura para tener sentido, pero el sentido solo emerge cuando se leen en conjunto."*

---

## 6.1 Table (Responsive)

### Anatomía

```
┌──────────────┬───────────┬────────────┬──────────┐
│  Evento      │  Fecha    │  Lugar     │  Estado  │  ← header
├──────────────┼───────────┼────────────┼──────────┤
│  Concierto…  │  15 sep   │  Auditorio │  ● Conf. │  ← row
├──────────────┼───────────┼────────────┼──────────┤
│  Taller…     │  22 sep   │  Aula 3    │  ○ Pend. │  ← row
├──────────────┼───────────┼────────────┼──────────┤
│  Charla…     │  29 sep   │  Online    │  ● Conf. │  ← row (hover)
└──────────────┴───────────┴────────────┴──────────┘
```

### Specs

| Parte | Propiedad | Valor |
|-------|-----------|-------|
| Container | Border | `1px solid var(--mv-neutral-300)` |
| Container | Border-radius | `var(--mv-radius-lg)` |
| Container | Overflow | `hidden` (para radius) + `overflow-x: auto` |
| Header bg | `var(--mv-neutral-100)` |
| Header font | `var(--mv-text-xs)`, `var(--mv-font-semibold)`, `text-transform: uppercase`, `var(--mv-tracking-wide)` |
| Header color | `var(--mv-text-tertiary)` |
| Header padding | `var(--mv-space-3) var(--mv-space-4)` |
| Row bg | `transparent` → hover: `color-mix(in srgb, var(--mv-primary) 4%, transparent)` |
| Row padding | `var(--mv-space-4)` |
| Row border | `1px solid var(--mv-neutral-200)` (entre rows) |
| Cell font | `var(--mv-text-sm)`, `var(--mv-font-regular)`, `var(--mv-text-primary)` |
| Mobile behavior | Stack: cada row se convierte en una card con label:value pairs |

### CSS

```css
.mv-table {
  width: 100%;
  border-collapse: collapse;
}

.mv-table__wrapper {
  border: 1px solid var(--mv-neutral-300);
  border-radius: var(--mv-radius-lg);
  overflow: hidden;
  overflow-x: auto;
}

.mv-table th {
  background: var(--mv-neutral-100);
  font-size: var(--mv-text-xs);
  font-weight: var(--mv-font-semibold);
  text-transform: uppercase;
  letter-spacing: var(--mv-tracking-wide);
  color: var(--mv-text-tertiary);
  padding: var(--mv-space-3) var(--mv-space-4);
  text-align: left;
  white-space: nowrap;
}

.mv-table td {
  font-size: var(--mv-text-sm);
  color: var(--mv-text-primary);
  padding: var(--mv-space-4);
  border-top: 1px solid var(--mv-neutral-200);
}

.mv-table tbody tr {
  transition: background var(--mv-duration-fast) var(--mv-ease-out);
}

.mv-table tbody tr:hover {
  background: color-mix(in srgb, var(--mv-primary) 4%, transparent);
}
```

---

## 6.2 List (Simple + Complex)

### Simple list

```
·  Calentamiento vocal — 10 min
·  Lectura a primera vista — 15 min
·  Ensayo por secciones — 25 min
·  Pasada general — 20 min
```

### Complex list

```
┌──────────────────────────────────────────────┐
│  ┌──────┐  Título del item                   │
│  │ icon │  Descripción secundaria breve      │
│  └──────┘                          [acción]  │
├──────────────────────────────────────────────┤
│  ┌──────┐  Título del item                   │
│  │ icon │  Descripción secundaria breve      │
│  └──────┘                          [acción]  │
└──────────────────────────────────────────────┘
```

### Specs — Simple

| Propiedad | Valor |
|-----------|-------|
| Bullet | `4px` circle, `var(--mv-primary)`, margin-right `var(--mv-space-3)` |
| Item font | `var(--mv-text-base)`, `var(--mv-font-regular)`, `var(--mv-text-primary)` |
| Item gap | `var(--mv-space-3)` |
| Padding | `0` |

### Specs — Complex

| Propiedad | Valor |
|-----------|-------|
| Item padding | `var(--mv-space-4)` |
| Item border-bottom | `1px solid var(--mv-neutral-200)` |
| Item hover | `background: color-mix(in srgb, var(--mv-primary) 4%, transparent)` |
| Icon container | 40px × 40px, `border-radius: var(--mv-radius-md)`, bg `var(--mv-neutral-200)` |
| Title | `var(--mv-text-base)`, `var(--mv-font-medium)`, `var(--mv-text-primary)` |
| Description | `var(--mv-text-sm)`, `var(--mv-text-secondary)` |
| Action | Ghost button o icono 18px |
| Gap icono-texto | `var(--mv-space-3)` |

---

## 6.3 Badge / Tag

### Anatomía

```
┌─────────────┐
│  Música      │     ← badge/tag
└─────────────┘
```

### Variantes

| Variante | Background | Color | Border | Uso |
|----------|-----------|-------|--------|-----|
| **Primary** | `color-mix(in srgb, var(--mv-primary) 12%, transparent)` | `var(--mv-primary)` | `none` | Categoría "Música", "Personas" |
| **Secondary** | `color-mix(in srgb, var(--mv-secondary) 12%, transparent)` | `var(--mv-secondary)` | `none` | Tags destacados, "Nuevo", "Destacado" |
| **Tertiary** | `color-mix(in srgb, var(--mv-tertiary) 12%, transparent)` | `var(--mv-tertiary)` | `none` | Tags tech: "IA", "Código", "Herramienta" |
| **Neutral** | `var(--mv-neutral-200)` | `var(--mv-text-secondary)` | `none` | Tags genéricos, metadata |
| **Outline** | `transparent` | `var(--mv-text-secondary)` | `1px solid var(--mv-neutral-400)` | Tags removibles |
| **Success** | `color-mix(in srgb, var(--mv-success) 12%, transparent)` | `var(--mv-success)` | `none` | "Confirmado", "Activo" |
| **Error** | `color-mix(in srgb, var(--mv-error) 12%, transparent)` | `var(--mv-error)` | `none` | "Agotado", "Cancelado" |
| **Warning** | `color-mix(in srgb, var(--mv-warning) 12%, transparent)` | `var(--mv-warning)` | `none` | "Últimos lugares" |

### Specs

| Propiedad | Valor |
|-----------|-------|
| Padding | `var(--mv-space-1) var(--mv-space-2)` (sm), `var(--mv-space-1) var(--mv-space-3)` (md) |
| Font | `var(--mv-text-xs)`, `var(--mv-font-semibold)` |
| Letter-spacing | `var(--mv-tracking-wide)` |
| Text-transform | `uppercase` |
| Border-radius | `var(--mv-radius-sm)` |
| Line-height | `var(--mv-leading-normal)` |
| Dot indicator (opcional) | `6px` circle antes del texto, mismo color |

### CSS

```css
.mv-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--mv-space-1);
  padding: var(--mv-space-1) var(--mv-space-3);
  font-family: var(--mv-font-body);
  font-size: var(--mv-text-xs);
  font-weight: var(--mv-font-semibold);
  letter-spacing: var(--mv-tracking-wide);
  text-transform: uppercase;
  border-radius: var(--mv-radius-sm);
  white-space: nowrap;
  line-height: var(--mv-leading-normal);
}

.mv-badge--primary {
  background: color-mix(in srgb, var(--mv-primary) 12%, transparent);
  color: var(--mv-primary);
}

.mv-badge--secondary {
  background: color-mix(in srgb, var(--mv-secondary) 12%, transparent);
  color: var(--mv-secondary);
}

.mv-badge--tertiary {
  background: color-mix(in srgb, var(--mv-tertiary) 12%, transparent);
  color: var(--mv-tertiary);
}

.mv-badge--success {
  background: color-mix(in srgb, var(--mv-success) 12%, transparent);
  color: var(--mv-success);
}

.mv-badge--error {
  background: color-mix(in srgb, var(--mv-error) 12%, transparent);
  color: var(--mv-error);
}
```

### Ejemplo de uso

- **Blog cards:** Tags de categoría (MÚSICA, TECH, PERSONAS)
- **Eventos:** Estado badge ("CONFIRMADO", "AGOTADO")
- **Portafolio:** Skills tags ("Dirección coral", "IA generativa", "Educación musical")

---

## 6.4 Avatar

### Anatomía

```
┌───┐       ┌───┐       ┌───┐
│ 📷│       │ MV│       │ 👤│
└───┘       └───┘       └───┘
 foto      iniciales   fallback icon
```

### Variantes de tamaño

| Tamaño | Clase | Dimensiones | Font-size (iniciales) |
|--------|-------|-------------|----------------------|
| **xs** | `.mv-avatar--xs` | 24px | `var(--mv-text-xs)` |
| **sm** | `.mv-avatar--sm` | 32px | `var(--mv-text-sm)` |
| **md** | `.mv-avatar--md` | 40px | `var(--mv-text-base)` |
| **lg** | `.mv-avatar--lg` | 56px | `var(--mv-text-xl)` |
| **xl** | `.mv-avatar--xl` | 80px | `var(--mv-text-2xl)` |

### Specs

| Propiedad | Valor |
|-----------|-------|
| Border-radius | `var(--mv-radius-full)` |
| Fallback bg (iniciales) | `var(--mv-primary)` |
| Fallback color (iniciales) | `var(--mv-text-inverse)` |
| Fallback font-weight | `var(--mv-font-semibold)` |
| Fallback icon bg | `var(--mv-neutral-300)` |
| Fallback icon color | `var(--mv-neutral-600)` |
| Imagen | `object-fit: cover` |
| Border (opcional, con status) | `2px solid var(--mv-bg)` + `2px solid {status-color}` |
| Status dot | 25% del tamaño del avatar, posición bottom-right |
| Status online | `var(--mv-success)` |
| Status offline | `var(--mv-neutral-400)` |

### CSS

```css
.mv-avatar {
  border-radius: var(--mv-radius-full);
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.mv-avatar--md {
  width: 40px;
  height: 40px;
}

.mv-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mv-avatar__initials {
  background: var(--mv-primary);
  color: var(--mv-text-inverse);
  font-family: var(--mv-font-body);
  font-weight: var(--mv-font-semibold);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mv-avatar__fallback {
  background: var(--mv-neutral-300);
  color: var(--mv-neutral-600);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Ejemplo de uso

- **Testimonials:** Avatar del corista junto a su quote
- **Blog meta:** Avatar de Memo junto a la fecha
- **Lista de ensamble:** Avatares de todos los miembros
- **Navbar:** Avatar pequeño (xs) si el usuario tiene sesión

---

## 6.5 Progress Bar

### Anatomía

```
Calentamiento vocal
┌──────────────────────────────────────┐
│ ████████████░░░░░░░░░░░░░░░░░░░░░░░ │  65%
└──────────────────────────────────────┘
  ↑ fill (primary)   ↑ track (neutral)
```

### Specs

| Propiedad | Valor |
|-----------|-------|
| Track height | 8px (sm), 12px (md), 16px (lg) |
| Track bg | `var(--mv-neutral-300)` |
| Track border-radius | `var(--mv-radius-full)` |
| Fill bg | `var(--mv-primary)` — o semántico: success/warning/error |
| Fill border-radius | `var(--mv-radius-full)` |
| Fill transition | `width var(--mv-duration-slow) var(--mv-ease-out)` |
| Label (opcional) | `var(--mv-text-sm)`, `var(--mv-font-medium)`, `var(--mv-text-secondary)` |
| Percentage (opcional) | `var(--mv-text-sm)`, `var(--mv-font-semibold)`, `var(--mv-text-primary)` |

### CSS

```css
.mv-progress {
  width: 100%;
}

.mv-progress__track {
  width: 100%;
  height: 8px;
  background: var(--mv-neutral-300);
  border-radius: var(--mv-radius-full);
  overflow: hidden;
}

.mv-progress__fill {
  height: 100%;
  background: var(--mv-primary);
  border-radius: var(--mv-radius-full);
  transition: width var(--mv-duration-slow) var(--mv-ease-out);
}

.mv-progress__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--mv-space-2);
}

.mv-progress__label {
  font-size: var(--mv-text-sm);
  font-weight: var(--mv-font-medium);
  color: var(--mv-text-secondary);
}

.mv-progress__value {
  font-size: var(--mv-text-sm);
  font-weight: var(--mv-font-semibold);
  color: var(--mv-text-primary);
}
```

### Ejemplo de uso

- **Taller:** Progreso del programa "Módulo 3 de 5 — 60%"
- **Fundraising:** Meta de donaciones para el concierto benéfico
- **Loading:** Progreso de carga de video de concierto

---

## 6.6 Stat / KPI Card

### Anatomía

```
┌──────────────────────────┐
│  ↑ 12%                   │  ← trend (opcional)
│                          │
│  2,340                   │  ← valor principal
│                          │
│  Asistentes al           │  ← label
│  último concierto        │
│                          │
│  ████████████░░░░░░ 78%  │  ← mini progress (opcional)
└──────────────────────────┘
```

### Specs

| Parte | Propiedad | Valor |
|-------|-----------|-------|
| Card | Hereda `.mv-card` base |
| Card padding | `var(--mv-space-6)` |
| Valor | `var(--mv-font-display)`, `var(--mv-text-4xl)`, `var(--mv-font-bold)`, `var(--mv-text-primary)`, `var(--mv-tracking-tight)` |
| Label | `var(--mv-text-sm)`, `var(--mv-font-regular)`, `var(--mv-text-secondary)`, margin-top `var(--mv-space-1)` |
| Trend positivo | `var(--mv-success)`, `var(--mv-text-sm)`, `var(--mv-font-semibold)`, icono ↑ 14px |
| Trend negativo | `var(--mv-error)`, `var(--mv-text-sm)`, `var(--mv-font-semibold)`, icono ↓ 14px |
| Trend neutro | `var(--mv-text-tertiary)` |
| Mini progress | Height 4px, margin-top `var(--mv-space-4)` |
| Icono decorativo (opcional) | 24px en esquina top-right, `var(--mv-neutral-400)` al 50% opacidad |

### Ejemplo de uso

- **Dashboard privado:** "348 suscriptores del newsletter", "12 conciertos este año"
- **Página de evento post:** KPIs del concierto (asistentes, piezas interpretadas, minutos de música)
- **Portfolio:** "50+ obras dirigidas", "15 años de experiencia"

---

---

# 7. FEEDBACK

> *"El feedback en la interfaz es como la dinámica en la música — dice 'fuerte aquí, suave allá, cuidado con esto, celebra aquello'."*

---

## 7.1 Alert (Info, Success, Warning, Error)

### Anatomía

```
┌──────────────────────────────────────────────┐
│  ℹ️  Título del alert (opcional)        [✕]  │
│      Descripción o mensaje detallado del      │
│      alert con información relevante.         │
│                                              │
│      [Acción secundaria]  [Acción primaria]  │  ← acciones (opcionales)
└──────────────────────────────────────────────┘
```

### Variantes

| Variante | Border-left | Icono bg | Icono color | Background |
|----------|-------------|----------|-------------|------------|
| **Info** | `3px solid var(--mv-info)` | `color-mix(in srgb, var(--mv-info) 10%, transparent)` | `var(--mv-info)` | `color-mix(in srgb, var(--mv-info) 5%, var(--mv-surface))` |
| **Success** | `3px solid var(--mv-success)` | `color-mix(in srgb, var(--mv-success) 10%, transparent)` | `var(--mv-success)` | `color-mix(in srgb, var(--mv-success) 5%, var(--mv-surface))` |
| **Warning** | `3px solid var(--mv-warning)` | `color-mix(in srgb, var(--mv-warning) 10%, transparent)` | `var(--mv-warning)` | `color-mix(in srgb, var(--mv-warning) 5%, var(--mv-surface))` |
| **Error** | `3px solid var(--mv-error)` | `color-mix(in srgb, var(--mv-error) 10%, transparent)` | `var(--mv-error)` | `color-mix(in srgb, var(--mv-error) 5%, var(--mv-surface))` |

### Specs

| Propiedad | Valor |
|-----------|-------|
| Border-radius | `var(--mv-radius-md)` |
| Padding | `var(--mv-space-4) var(--mv-space-5)` |
| Icono | 20px |
| Título | `var(--mv-text-sm)`, `var(--mv-font-semibold)`, `var(--mv-text-primary)` |
| Descripción | `var(--mv-text-sm)`, `var(--mv-font-regular)`, `var(--mv-text-secondary)` |
| Gap icono-contenido | `var(--mv-space-3)` |
| Dismiss button | 16px, `var(--mv-text-tertiary)` → hover: `var(--mv-text-primary)` |
| Acciones margin-top | `var(--mv-space-3)` |

### CSS

```css
.mv-alert {
  display: flex;
  gap: var(--mv-space-3);
  padding: var(--mv-space-4) var(--mv-space-5);
  border-radius: var(--mv-radius-md);
  border-left-width: 3px;
  border-left-style: solid;
}

.mv-alert--info {
  border-left-color: var(--mv-info);
  background: color-mix(in srgb, var(--mv-info) 5%, var(--mv-surface));
}

.mv-alert--success {
  border-left-color: var(--mv-success);
  background: color-mix(in srgb, var(--mv-success) 5%, var(--mv-surface));
}

.mv-alert--warning {
  border-left-color: var(--mv-warning);
  background: color-mix(in srgb, var(--mv-warning) 5%, var(--mv-surface));
}

.mv-alert--error {
  border-left-color: var(--mv-error);
  background: color-mix(in srgb, var(--mv-error) 5%, var(--mv-surface));
}

.mv-alert__title {
  font-size: var(--mv-text-sm);
  font-weight: var(--mv-font-semibold);
  color: var(--mv-text-primary);
}

.mv-alert__description {
  font-size: var(--mv-text-sm);
  color: var(--mv-text-secondary);
  margin-top: var(--mv-space-1);
  line-height: var(--mv-leading-relaxed);
}
```

### Ejemplo de uso

- **Info:** "El próximo ensayo será en el Auditorio B por mantenimiento del salón habitual."
- **Success:** "¡Tu inscripción al taller fue confirmada! Revisa tu correo."
- **Warning:** "Solo quedan 3 lugares disponibles para este evento."
- **Error:** "No pudimos procesar tu pago. Verifica los datos e intenta de nuevo."

---

## 7.2 Empty State

> Los empty states de Memo Valdez tienen personalidad — no son cajas grises con "No hay datos". Son momentos para conectar con la voz de la marca.

### Anatomía

```
┌──────────────────────────────────────────────┐
│                                              │
│              ┌─────────────┐                 │
│              │  ilustración │                │
│              │  o icono     │                │
│              └─────────────┘                 │
│                                              │
│         Aquí todavía no hay notas.           │  ← título con personalidad
│                                              │
│     Pero cada partitura empieza en blanco.   │  ← descripción con voz de marca
│     ¿Qué te gustaría explorar primero?       │
│                                              │
│            [Explorar contenido]              │  ← CTA
│                                              │
└──────────────────────────────────────────────┘
```

### Specs

| Propiedad | Valor |
|-----------|-------|
| Container | `text-align: center`, padding `var(--mv-space-16) var(--mv-space-8)` |
| Ilustración / Icono | 80px–120px, `var(--mv-neutral-400)` al 40% opacidad, o line-art con acento `var(--mv-secondary)` |
| Título | `var(--mv-font-display)`, `var(--mv-text-xl)`, `var(--mv-font-semibold)`, `var(--mv-text-primary)` |
| Descripción | `var(--mv-text-base)`, `var(--mv-text-secondary)`, `var(--mv-leading-relaxed)`, max-width `400px`, margin-inline `auto` |
| CTA | Botón primary o secondary, margin-top `var(--mv-space-6)` |
| Margin entre partes | `var(--mv-space-4)` |

### Ejemplos con voz de marca

| Contexto | Título | Descripción |
|----------|--------|-------------|
| **Blog sin artículos** | "El pentagrama está en blanco." | "Pronto habrá notas aquí. Mientras tanto, ¿te suscribes al newsletter para ser el primero en leer?" |
| **Búsqueda sin resultados** | "Silencio… no encontramos nada." | "Prueba con otras palabras. A veces las mejores melodías vienen de un segundo intento." |
| **Eventos vacíos** | "Todavía no hay conciertos programados." | "Pero la sala de ensayo ya está sonando. Suscríbete para enterarte primero." |
| **Lista de favoritos vacía** | "Tu playlist está vacía." | "Explora el contenido y guarda lo que resuene contigo." |

---

## 7.3 Loading Skeleton

### Anatomía

```
┌──────────────────────────────────────────────┐
│  ┌──────────────────────────────────────┐    │
│  │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │    │  ← imagen placeholder
│  │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │    │
│  └──────────────────────────────────────┘    │
│                                              │
│  ░░░░░░░░░░  ░░░░░░                         │  ← badges
│                                              │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░                  │  ← título
│                                              │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░         │  ← texto línea 1
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░                │  ← texto línea 2
│                                              │
│  ░░ ░░░░░░░░░░  ░░░░░░░                     │  ← meta
└──────────────────────────────────────────────┘
```

### Specs

| Propiedad | Valor |
|-----------|-------|
| Placeholder bg | `var(--mv-neutral-200)` |
| Placeholder border-radius | `var(--mv-radius-sm)` (text), `var(--mv-radius-md)` (imagen) |
| Animación | Shimmer: gradiente linear de `var(--mv-neutral-200)` → `var(--mv-neutral-300)` → `var(--mv-neutral-200)` |
| Shimmer direction | Izquierda a derecha, `2s` duración, `var(--mv-ease-linear)`, `infinite` |
| Shimmer angle | `-20deg` para efecto de barrido diagonal |
| Text line height | 16px (sm), 20px (md), 28px (lg) |
| Text line width | Varía (100%, 80%, 65%) para parecer texto natural |
| Gap entre lines | `var(--mv-space-2)` |

### CSS

```css
@keyframes mv-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.mv-skeleton {
  background: linear-gradient(
    -20deg,
    var(--mv-neutral-200) 25%,
    var(--mv-neutral-300) 50%,
    var(--mv-neutral-200) 75%
  );
  background-size: 200% 100%;
  animation: mv-shimmer 2s var(--mv-ease-linear) infinite;
  border-radius: var(--mv-radius-sm);
}

.mv-skeleton--text {
  height: 16px;
  margin-bottom: var(--mv-space-2);
}

.mv-skeleton--text:last-child {
  width: 65%;
}

.mv-skeleton--heading {
  height: 28px;
  width: 80%;
  margin-bottom: var(--mv-space-3);
}

.mv-skeleton--image {
  aspect-ratio: 16 / 9;
  border-radius: var(--mv-radius-md);
  margin-bottom: var(--mv-space-4);
}

.mv-skeleton--avatar {
  width: 40px;
  height: 40px;
  border-radius: var(--mv-radius-full);
}
```

### Uso

El skeleton replica la estructura del componente que va a reemplazar. Un skeleton de Content Card tiene las mismas proporciones que una Content Card real. Un skeleton de tabla tiene los mismos anchos de columna.

---

## 7.4 Error Page (404, 500)

> Las páginas de error son momentos para mostrar humanidad. En la marca Memo Valdez, un error no es un callejón sin salida — es una pausa inesperada en la partitura.

### 404 — Página no encontrada

```
┌──────────────────────────────────────────────────┐
│                                                  │
│                   ♪ ♩ ♫                          │
│                (line art musical)                 │
│                                                  │
│              Silencio inesperado.                 │
│                                                  │
│    Esa página se fue como una nota al viento.    │
│    Pero tranquilo — la partitura sigue.          │
│                                                  │
│          [Volver al inicio]                      │
│                                                  │
│    O busca lo que necesitas:                     │
│    ┌──────────────────────────────────┐          │
│    │ 🔍  Buscar...                    │          │
│    └──────────────────────────────────┘          │
│                                                  │
└──────────────────────────────────────────────────┘
```

### 500 — Error del servidor

```
┌──────────────────────────────────────────────────┐
│                                                  │
│                   ⚡ 🎹                           │
│              (piano con relámpago)               │
│                                                  │
│          Se desafinó algo por aquí.              │
│                                                  │
│    Estamos afinando de nuevo. Como en todo       │
│    buen ensayo, a veces hay que parar            │
│    y empezar de nuevo.                           │
│                                                  │
│    [Intentar de nuevo]   [Ir al inicio]          │
│                                                  │
│    Si el problema persiste, escríbeme:           │
│    contacto@memovaldez.com                       │
│                                                  │
└──────────────────────────────────────────────────┘
```

### Specs generales para error pages

| Propiedad | Valor |
|-----------|-------|
| Layout | Centrado vertical y horizontal, `min-height: 100vh` |
| Max-width contenido | `480px` |
| Padding | `var(--mv-space-8)` |
| Ilustración | Line art minimalista en `var(--mv-neutral-400)` con un acento en `var(--mv-secondary)`, 120px–160px |
| Código de error (opcional) | `var(--mv-font-mono)`, `var(--mv-text-sm)`, `var(--mv-text-tertiary)` — discreto, no prominente |
| Título | `var(--mv-font-display)`, `var(--mv-text-3xl)`, `var(--mv-font-bold)`, `var(--mv-text-primary)` |
| Descripción | `var(--mv-font-body)`, `var(--mv-text-lg)`, `var(--mv-text-secondary)`, `var(--mv-leading-relaxed)` |
| CTA | Botón primary, margin-top `var(--mv-space-6)` |
| Search (404) | Search input con margin-top `var(--mv-space-6)` |
| Contacto (500) | `var(--mv-text-sm)`, link en `var(--mv-primary)` |

---

---

# Apéndice A: Resumen de Componentes por Categoría

| # | Categoría | Componentes | Cantidad |
|---|-----------|-------------|----------|
| 1 | **Botones** | Primary, Secondary, Ghost, Tertiary, Destructive (×3 tamaños, ×6 estados) | 5 variantes |
| 2 | **Inputs** | Text, Textarea, Select, Checkbox, Radio, Toggle, Search | 7 tipos |
| 3 | **Cards** | Content, Media, Event, Testimonial | 4 tipos |
| 4 | **Navigation** | Navbar, Footer, Breadcrumbs, Tabs, Pagination, Mobile Bottom Nav | 6 componentes |
| 5 | **Modals & Overlays** | Modal, Dialog, Drawer, Tooltip, Toast/Snackbar | 5 tipos |
| 6 | **Data Display** | Table, List, Badge/Tag, Avatar, Progress Bar, Stat/KPI Card | 6 componentes |
| 7 | **Feedback** | Alert, Empty State, Loading Skeleton, Error Page | 4 tipos |
| | **TOTAL** | | **37 componentes** |

---

# Apéndice B: Tokens Más Usados — Quick Reference

| Contexto | Token |
|----------|-------|
| Fondo de componente | `var(--mv-surface)` |
| Fondo de modal/dropdown | `var(--mv-surface-elevated)` |
| Texto principal | `var(--mv-text-primary)` |
| Texto secundario | `var(--mv-text-secondary)` |
| Texto sobre color | `var(--mv-text-inverse)` |
| Borde sutil | `var(--mv-neutral-300)` |
| Borde visible | `var(--mv-neutral-400)` |
| Color de acción principal | `var(--mv-primary)` |
| Color de acción tech | `var(--mv-tertiary)` |
| Color decorativo | `var(--mv-secondary)` |
| Padding estándar | `var(--mv-space-4)` — `var(--mv-space-6)` |
| Border-radius botón | `var(--mv-radius-md)` |
| Border-radius card | `var(--mv-radius-lg)` |
| Border-radius input | `var(--mv-radius-sm)` |
| Border-radius avatar/pill | `var(--mv-radius-full)` |
| Transición rápida (hover) | `var(--mv-transition-fast)` |
| Transición estándar | `var(--mv-transition-normal)` |
| Focus ring | `var(--mv-focus-ring)` |

---

# Apéndice C: Reglas de Accesibilidad por Componente

| Regla | Componentes afectados | Implementación |
|-------|----------------------|----------------|
| **Focus visible** | Todos los interactivos | `box-shadow: var(--mv-focus-ring)` en `:focus-visible` |
| **Contraste AA** | Todo texto funcional | Verificado en design_tokens.md — mínimo 4.5:1 |
| **Contraste AA Large** | Texto ≥18px o ≥14px bold | Mínimo 3:1 (para `--mv-text-tertiary`) |
| **Touch target** | Botones, checkboxes, radios, toggles | Mínimo 44px × 44px (incluye padding) |
| **aria-label** | Iconos sin texto, close buttons | Siempre presente |
| **aria-expanded** | Dropdowns, modals, drawer | Toggle con JS |
| **aria-live** | Toasts, alerts dinámicos | `aria-live="polite"` para toasts, `"assertive"` para errores |
| **role** | Tabs (`tablist`, `tab`, `tabpanel`), dialogs (`dialog`) | Roles ARIA correctos |
| **Reduced motion** | Todas las animaciones | `@media (prefers-reduced-motion: reduce)` → durations a `0ms` |
| **Keyboard nav** | Toda la interfaz | Tab order lógico, Escape cierra modals/drawers/dropdowns |

---

*"37 componentes. Una sola voz. Como un ensamble donde cada instrumento conoce su parte — y juntos, suenan como algo que ninguno podría lograr solo."*

— Component Library, Marca Memo Valdez · Septiembre 2026

---

*Documento generado como Fase 4 del pipeline de brandbook para la marca personal "Memo Valdez".*  
*Siguiente paso: Prototipo de landing page y pruebas de implementación.*
