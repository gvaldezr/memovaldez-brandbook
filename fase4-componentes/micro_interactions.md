# Micro-Interacciones — Memo Valdez

> **Fase:** 4 · Componentes de Interfaz  
> **Fecha:** 22 de septiembre de 2026  
> **Versión:** 1.0  
> **Construido sobre:** Design Tokens, Narrativa Visual, Brand Foundation, Brand Voice  
> **Nivel de whimsy:** 3/10 — *pianissimo expresivo*

---

*"Un gran director no necesita movimientos grandiosos — un levantamiento de ceja puede pedir un diminuendo. El gesto mínimo es el más poderoso cuando hay confianza."*

— Narrativa Visual, Metáfora 5

---

## Filosofía de Movimiento

La interfaz de Memo Valdez se mueve como él dirige: con intención, con economía, con un ritmo que respeta el tempo del usuario. Cada animación existe porque cumple un propósito emocional o funcional — nunca porque "se ve bonito". El movimiento aquí es un *pianissimo* — perceptible solo para quien presta atención, pero transformador para quien lo nota.

Las micro-interacciones no buscan impresionar. Buscan **acompañar**. Un hover que dice "estoy aquí". Un loading que dice "un momento, ya voy". Un empty state que dice "tranquilo, todo bien". Son la personalidad de la marca traducida a milisegundos y píxeles.

### Tokens de referencia rápida

```css
/* Duraciones */
--mv-duration-fast:     150ms;   /* Staccato — hover, toggle, color */
--mv-duration-normal:   300ms;   /* Pulso natural — menú, tab, fade */
--mv-duration-slow:     500ms;   /* Respiro largo — secciones, collapses */
--mv-duration-dramatic: 800ms;   /* Crescendo — hero, transiciones mayores */

/* Curvas de easing */
--mv-ease-out:    cubic-bezier(0.16, 1, 0.3, 1);     /* Default — aterrizaje suave */
--mv-ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);  /* Rebote orgánico */
--mv-ease-gentle: cubic-bezier(0.4, 0, 0.2, 1);       /* Diminuendo visual */
--mv-ease-linear: linear;                              /* Progreso continuo */

/* Shortcuts compuestos */
--mv-transition-fast:     all 150ms var(--mv-ease-out);
--mv-transition-normal:   all 300ms var(--mv-ease-out);
--mv-transition-slow:     all 500ms var(--mv-ease-gentle);
--mv-transition-dramatic: all 800ms var(--mv-ease-gentle);

/* Sombras (light mode) */
--mv-shadow-sm: 0 1px 2px 0 rgba(35, 31, 27, 0.05);
--mv-shadow-md: 0 4px 6px -1px rgba(35, 31, 27, 0.08), 0 2px 4px -2px rgba(35, 31, 27, 0.05);
--mv-shadow-lg: 0 10px 15px -3px rgba(35, 31, 27, 0.10), 0 4px 6px -4px rgba(35, 31, 27, 0.06);
```

---

## 1. Hover Effects

### 1.1 Botón Primary — Elevación sutil

**Descripción:** Al pasar el cursor, el botón se eleva imperceptiblemente (-2px en Y) y su sombra crece de `sm` a `md`. El color de fondo transiciona de `--mv-primary` a `--mv-primary-light`. Es la mano del director que levanta un milímetro la batuta — el gesto mínimo que prepara la entrada.

**Timing:** 150ms · `--mv-ease-out` — `cubic-bezier(0.16, 1, 0.3, 1)`

**Contexto de uso:** Todos los botones con clase primary: CTAs, enviar formulario, confirmar acción. Aplica en desktop únicamente (hover no existe en mobile).

```css
.mv-btn-primary {
  background-color: var(--mv-primary);
  color: var(--mv-text-inverse);
  border: none;
  border-radius: var(--mv-radius-md);
  padding: var(--mv-space-3) var(--mv-space-6);
  font-weight: var(--mv-font-semibold);
  box-shadow: var(--mv-shadow-sm);
  transition:
    transform 150ms var(--mv-ease-out),
    box-shadow 150ms var(--mv-ease-out),
    background-color 150ms var(--mv-ease-out);
}

.mv-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--mv-shadow-md);
  background-color: var(--mv-primary-light);
}

.mv-btn-primary:focus-visible {
  outline: 2px solid var(--mv-primary);
  outline-offset: 2px;
}
```

**`prefers-reduced-motion`:** Se elimina el `transform`. El cambio de color y sombra se mantiene (no es movimiento, es estado visual).

```css
@media (prefers-reduced-motion: reduce) {
  .mv-btn-primary {
    transition: background-color 150ms var(--mv-ease-out),
                box-shadow 150ms var(--mv-ease-out);
  }
  .mv-btn-primary:hover {
    transform: none;
  }
}
```

---

### 1.2 Card — Elevación + micro-desplazamiento

**Descripción:** La card se desplaza 2px hacia arriba y la sombra crece de `md` a `lg`. Es un levantamiento sutil — como cuando una partitura se eleva ligeramente del atril al pasar la página. No se agranda, no cambia de color. Solo *respira* hacia arriba.

**Timing:** 150ms · `--mv-ease-out`

**Contexto de uso:** Cards de eventos, cards de contenido, cards de portfolio. Solo en desktop. En mobile, el feedback es el tap (ver sección 2).

```css
.mv-card {
  background-color: var(--mv-surface);
  border-radius: var(--mv-radius-lg);
  box-shadow: var(--mv-shadow-md);
  transition:
    transform 150ms var(--mv-ease-out),
    box-shadow 150ms var(--mv-ease-out);
}

.mv-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--mv-shadow-lg);
}
```

**`prefers-reduced-motion`:** Solo cambia la sombra, sin desplazamiento.

```css
@media (prefers-reduced-motion: reduce) {
  .mv-card {
    transition: box-shadow 150ms var(--mv-ease-out);
  }
  .mv-card:hover {
    transform: none;
  }
}
```

---

### 1.3 Link — Underline que crece de izquierda a derecha

**Descripción:** Los enlaces de texto no tienen underline estático. Al hacer hover, una línea fina en `--mv-primary` se dibuja de izquierda a derecha, como la línea del hilo conductor de la marca — un trazo continuo que conecta. Es sutil, es musical (tiene dirección temporal), y es más elegante que el underline convencional.

**Timing:** 300ms · `--mv-ease-out`

**Contexto de uso:** Enlaces inline en párrafos, enlaces de navegación secundaria, enlaces en footer. No aplica a botones ni a elementos de navegación principal.

```css
.mv-link {
  color: var(--mv-primary-dark);
  text-decoration: none;
  position: relative;
  display: inline;
}

.mv-link::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 0;
  height: 1.5px;
  background-color: var(--mv-primary);
  transition: width 300ms var(--mv-ease-out);
}

.mv-link:hover::after {
  width: 100%;
}

.mv-link:focus-visible {
  outline: 2px solid var(--mv-primary);
  outline-offset: 3px;
  border-radius: 2px;
}
```

**`prefers-reduced-motion`:** La línea aparece inmediatamente en lugar de animarse.

```css
@media (prefers-reduced-motion: reduce) {
  .mv-link::after {
    transition: none;
  }
  .mv-link:hover::after {
    width: 100%;
  }
}
```

---

### 1.4 Avatar / Imagen — Scale sutil + sombra

**Descripción:** Las imágenes de perfil y fotos en tarjetas se escalan a 1.02 con una sombra que crece ligeramente. El efecto es casi subliminal — como cuando en una foto de grupo te inclinas imperceptiblemente para ver mejor un rostro. Un 2% de escala es el equivalente visual de entrecerrar los ojos con curiosidad.

**Timing:** 150ms · `--mv-ease-out`

**Contexto de uso:** Avatares en listas de equipo, fotos de galería, miniaturas de contenido. No aplica a hero images (esas son estáticas por diseño).

```css
.mv-avatar,
.mv-thumbnail {
  border-radius: var(--mv-radius-full);  /* full para avatares */
  overflow: hidden;
  transition:
    transform 150ms var(--mv-ease-out),
    box-shadow 150ms var(--mv-ease-out);
}

.mv-thumbnail {
  border-radius: var(--mv-radius-lg);  /* lg para thumbnails */
}

.mv-avatar:hover,
.mv-thumbnail:hover {
  transform: scale(1.02);
  box-shadow: var(--mv-shadow-md);
}
```

**`prefers-reduced-motion`:** Sin escala. Solo cambio de sombra.

```css
@media (prefers-reduced-motion: reduce) {
  .mv-avatar:hover,
  .mv-thumbnail:hover {
    transform: none;
  }
}
```

---

### 1.5 Icono de navegación — Cambio de peso visual

**Descripción:** Los iconos de navegación (Lucide, stroke 1.5px) transicionan de outline a un stroke ligeramente más grueso al hacer hover, además de cambiar su color de `--mv-text-secondary` a `--mv-primary`. No rotan, no se agrandan. Cambian de *peso* — como la diferencia entre un *piano* y un *mezzo piano*. Es el cambio dinámico más pequeño posible que todavía se siente.

**Timing:** 150ms · `--mv-ease-out`

**Contexto de uso:** Iconos del menú de navegación principal, iconos de sidebar, iconos de acción en toolbars.

```css
.mv-nav-icon {
  color: var(--mv-text-secondary);
  stroke-width: 1.5;
  transition:
    color 150ms var(--mv-ease-out),
    stroke-width 150ms var(--mv-ease-out);
}

.mv-nav-icon:hover {
  color: var(--mv-primary);
  stroke-width: 1.75;
}

.mv-nav-icon[aria-current="page"] {
  color: var(--mv-primary);
  stroke-width: 2;
}
```

**`prefers-reduced-motion`:** Sin cambio. La transición de color no es movimiento, se mantiene.

```css
@media (prefers-reduced-motion: reduce) {
  .mv-nav-icon {
    transition: color 150ms var(--mv-ease-out);
  }
}
```

---

## 2. Click / Tap Feedback

### 2.1 Botón — Scale down + ripple terracota

**Descripción:** Al presionar, el botón se comprime un 3% (`scale(0.97)`) y un ripple circular en terracota translúcido se expande desde el punto de contacto. El ripple es contenido — no explosivo. Es el equivalente visual de presionar una tecla de piano: hay una respuesta táctil clara, pero no es un golpe de platillo. El scale regresa con un ligero rebote usando `--mv-ease-spring`.

**Timing:** Scale down: 80ms `--mv-ease-out` · Regreso: 150ms `--mv-ease-spring` · Ripple: 400ms `--mv-ease-gentle`

**Contexto de uso:** Todos los botones interactivos (primary, secondary, ghost). El ripple requiere JS para posicionar desde el punto de click.

```css
.mv-btn-primary:active {
  transform: translateY(0) scale(0.97);
  box-shadow: var(--mv-shadow-sm);
  transition:
    transform 80ms var(--mv-ease-out),
    box-shadow 80ms var(--mv-ease-out);
}

/* Ripple — requiere un span.mv-ripple inyectado por JS */
.mv-btn-primary {
  position: relative;
  overflow: hidden;
}

.mv-ripple {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(184, 92, 56, 0.15); /* --mv-primary al 15% */
  transform: scale(0);
  animation: mv-ripple-expand 400ms var(--mv-ease-gentle) forwards;
  pointer-events: none;
}

@keyframes mv-ripple-expand {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
```

```javascript
// Ripple positioning — vanilla JS
document.querySelectorAll('.mv-btn-primary').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    ripple.classList.add('mv-ripple');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    this.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
});
```

**`prefers-reduced-motion`:** Sin ripple, sin scale. Solo cambio de color de fondo como feedback.

```css
@media (prefers-reduced-motion: reduce) {
  .mv-btn-primary:active {
    transform: none;
    background-color: var(--mv-primary-dark);
  }
  .mv-ripple {
    display: none;
  }
}
```

---

### 2.2 Card clickable — Feedback de presión

**Descripción:** Las cards con acción (enlace o botón) se comprimen ligeramente al ser presionadas (`scale(0.98)`), como el gesto de alguien que aprieta suavemente un libro antes de abrirlo. La sombra se reduce de `md` a `sm`, reforzando la sensación de "hundimiento". La transición de regreso usa `--mv-ease-spring` para un retorno orgánico.

**Timing:** Presión: 80ms `--mv-ease-out` · Regreso: 200ms `--mv-ease-spring`

**Contexto de uso:** Cards de eventos, cards de artículos, cualquier card con `role="link"` o que funcione como navegación.

```css
.mv-card[role="link"],
.mv-card--clickable {
  cursor: pointer;
}

.mv-card[role="link"]:active,
.mv-card--clickable:active {
  transform: scale(0.98);
  box-shadow: var(--mv-shadow-sm);
  transition:
    transform 80ms var(--mv-ease-out),
    box-shadow 80ms var(--mv-ease-out);
}
```

**`prefers-reduced-motion`:** Cambio de borde en lugar de scale.

```css
@media (prefers-reduced-motion: reduce) {
  .mv-card[role="link"]:active,
  .mv-card--clickable:active {
    transform: none;
    border-color: var(--mv-primary);
  }
}
```

---

### 2.3 Toggle — Transición suave con bounce leve

**Descripción:** El thumb del toggle se desliza de una posición a otra con un rebote contenido al final — `--mv-ease-spring`. El fondo transiciona de `--mv-neutral-300` a `--mv-primary`. Es como el cambio entre una negra y un silencio de negra: claro, definido, con un pequeño *settling* al llegar a su posición. El bounce es mínimo (un 2-3% de overshoot), suficiente para que se sienta vivo sin ser juguetón.

**Timing:** Thumb: 200ms `--mv-ease-spring` · Fondo: 150ms `--mv-ease-out`

**Contexto de uso:** Toggles de configuración, toggle dark/light mode, toggles de preferencia.

```css
.mv-toggle {
  width: 44px;
  height: 24px;
  border-radius: var(--mv-radius-full);
  background-color: var(--mv-neutral-300);
  position: relative;
  cursor: pointer;
  transition: background-color 150ms var(--mv-ease-out);
  border: none;
  padding: 2px;
}

.mv-toggle::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--mv-surface-elevated);
  top: 2px;
  left: 2px;
  box-shadow: var(--mv-shadow-sm);
  transition: transform 200ms var(--mv-ease-spring);
}

.mv-toggle[aria-checked="true"] {
  background-color: var(--mv-primary);
}

.mv-toggle[aria-checked="true"]::after {
  transform: translateX(20px);
}

.mv-toggle:focus-visible {
  outline: 2px solid var(--mv-primary);
  outline-offset: 2px;
}
```

**`prefers-reduced-motion`:** Thumb se mueve sin bounce (easing lineal, instantáneo).

```css
@media (prefers-reduced-motion: reduce) {
  .mv-toggle::after {
    transition: transform 0ms;
  }
}
```

---

## 3. Loading States

### 3.1 Skeleton Loader — Shimmer cálido

**Descripción:** Los placeholders de carga usan un gradiente shimmer en la escala de neutrales cálidos (`neutral-200` → `neutral-100` → `neutral-200`). Nunca gris frío. El shimmer se desplaza de izquierda a derecha en un ciclo continuo, como la luz de la mañana que cruza lentamente una sala de ensayo. La velocidad es pausada — un ciclo completo dura 1.5s. No hay prisa.

**Timing:** 1500ms por ciclo · `--mv-ease-linear` · Loop infinito

**Contexto de uso:** Cualquier área de contenido durante carga (cards, listas, textos, imágenes). Se reemplaza por contenido real con un fade de 300ms.

```css
.mv-skeleton {
  background-color: var(--mv-neutral-200);
  border-radius: var(--mv-radius-md);
  position: relative;
  overflow: hidden;
}

.mv-skeleton::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--mv-neutral-100) 50%,
    transparent 100%
  );
  animation: mv-shimmer 1500ms linear infinite;
}

@keyframes mv-shimmer {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Variantes de forma */
.mv-skeleton--text {
  height: 1em;
  margin-bottom: var(--mv-space-2);
}

.mv-skeleton--title {
  height: 1.5em;
  width: 60%;
  margin-bottom: var(--mv-space-3);
}

.mv-skeleton--avatar {
  width: 48px;
  height: 48px;
  border-radius: var(--mv-radius-full);
}

.mv-skeleton--image {
  width: 100%;
  aspect-ratio: 3 / 2;
  border-radius: var(--mv-radius-lg);
}
```

**`prefers-reduced-motion`:** Sin shimmer. Se muestra el color sólido `neutral-200` como placeholder estático.

```css
@media (prefers-reduced-motion: reduce) {
  .mv-skeleton::after {
    animation: none;
    display: none;
  }
}
```

---

### 3.2 Botón Loading — Spinner minimal + "Un momento..."

**Descripción:** Cuando un botón entra en estado de carga, el texto original se reemplaza por "Un momento..." y un spinner de línea aparece a la izquierda. El spinner es un arco simple (no dots, no puntos animados) que rota una vez cada 800ms. El texto "Un momento..." es la voz epistolar de Memo — no dice "Cargando..." (genérico), ni "Loading..." (anglicismo). Dice lo que Memo diría: *un momento, ya voy*.

**Timing:** Spinner: 800ms `--mv-ease-linear` rotación continua · Transición de texto: 150ms `--mv-ease-out`

**Contexto de uso:** Botones de envío de formulario, botones de acción que requieren espera del servidor.

```css
.mv-btn-primary--loading {
  pointer-events: none;
  opacity: 0.85;
}

.mv-btn-primary--loading .mv-btn-label {
  visibility: hidden;
}

.mv-btn-primary--loading::after {
  content: 'Un momento...';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: var(--mv-text-sm);
  font-weight: var(--mv-font-medium);
  letter-spacing: var(--mv-tracking-normal);
}

.mv-btn-primary--loading::before {
  content: '';
  position: absolute;
  left: var(--mv-space-3);
  top: 50%;
  width: 16px;
  height: 16px;
  margin-top: -8px;
  border: 2px solid rgba(250, 248, 245, 0.3);  /* --mv-text-inverse al 30% */
  border-top-color: var(--mv-text-inverse);
  border-radius: 50%;
  animation: mv-spin 800ms linear infinite;
}

@keyframes mv-spin {
  to { transform: rotate(360deg); }
}
```

**`prefers-reduced-motion`:** Sin rotación del spinner. Se muestra un indicador estático (punto pulsante).

```css
@media (prefers-reduced-motion: reduce) {
  .mv-btn-primary--loading::before {
    animation: none;
    border: 2px solid var(--mv-text-inverse);
    opacity: 0.5;
  }
}
```

---

### 3.3 Page Transition — Fade suave

**Descripción:** Al cargar una nueva página o vista, el contenido aparece con un fade de opacidad (0 → 1) durante 400ms. Es el telón que se abre suavemente en una sala de conciertos — nunca de golpe, nunca con drama. El fade usa `--mv-ease-gentle` para un crescendo visual que se siente natural.

**Timing:** 400ms · `--mv-ease-gentle` — `cubic-bezier(0.4, 0, 0.2, 1)`

**Contexto de uso:** Transición entre páginas (si SPA), carga inicial de página, cambio de vista principal.

```css
.mv-page-enter {
  opacity: 0;
}

.mv-page-enter-active {
  opacity: 1;
  transition: opacity 400ms var(--mv-ease-gentle);
}

/* Si se usa con frameworks (React, Vue, etc.) */
.mv-page-exit {
  opacity: 1;
}

.mv-page-exit-active {
  opacity: 0;
  transition: opacity 200ms var(--mv-ease-gentle);
}
```

**`prefers-reduced-motion`:** Sin transición. Aparición instantánea.

```css
@media (prefers-reduced-motion: reduce) {
  .mv-page-enter-active,
  .mv-page-exit-active {
    transition: none;
  }
}
```

---

### 3.4 Content Loading — Revelación progresiva (stagger)

**Descripción:** Los elementos de una lista o grid aparecen secuencialmente con un intervalo de 80ms entre cada uno — un *stagger* que evoca la entrada escalonada de las voces en un canon. Cada elemento hace fade-in + slide-up de 12px. El efecto completo se resuelve en menos de 1 segundo (para listas de hasta 8-10 elementos visibles), así que nunca se siente lento.

**Timing:** 300ms por elemento · `--mv-ease-out` · Stagger: 80ms entre cada uno

**Contexto de uso:** Listas de resultados de búsqueda, grid de cards al cargar, items de navegación en sidebar.

```css
.mv-stagger-item {
  opacity: 0;
  transform: translateY(12px);
  animation: mv-stagger-in 300ms var(--mv-ease-out) forwards;
}

@keyframes mv-stagger-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stagger delays — se aplican con custom property o nth-child */
.mv-stagger-item:nth-child(1) { animation-delay: 0ms; }
.mv-stagger-item:nth-child(2) { animation-delay: 80ms; }
.mv-stagger-item:nth-child(3) { animation-delay: 160ms; }
.mv-stagger-item:nth-child(4) { animation-delay: 240ms; }
.mv-stagger-item:nth-child(5) { animation-delay: 320ms; }
.mv-stagger-item:nth-child(6) { animation-delay: 400ms; }
.mv-stagger-item:nth-child(7) { animation-delay: 480ms; }
.mv-stagger-item:nth-child(8) { animation-delay: 560ms; }

/* Alternativa con custom property (más flexible) */
.mv-stagger-item {
  animation-delay: calc(var(--mv-stagger-index, 0) * 80ms);
}
```

```javascript
// Asignar índice de stagger dinámicamente
document.querySelectorAll('.mv-stagger-item').forEach((el, i) => {
  el.style.setProperty('--mv-stagger-index', i);
});
```

**`prefers-reduced-motion`:** Todos los elementos aparecen simultáneamente, sin slide, sin stagger.

```css
@media (prefers-reduced-motion: reduce) {
  .mv-stagger-item {
    opacity: 1;
    transform: none;
    animation: none;
  }
}
```

---

## 4. Empty States con Personalidad

> *La voz de los empty states es la misma voz epistolar-cercana de Memo: humor sutil, calidez, una invitación a seguir explorando. Nunca un error. Nunca un regaño. Siempre una puerta abierta.*

---

### 4.1 Sin resultados de búsqueda

**Texto:** *"Hmm, aquí no hay nada todavía. ¿Exploramos por otro lado?"*

**Microilustración:** Un atril vacío con una partitura en blanco — line art orgánico en `--mv-neutral-400` sobre fondo `--mv-surface`. Una sola línea de pentagrama sin notas, como esperando a ser escrita. El atril tiene una ligera inclinación (5°) que le da carácter humano.

**Implementación visual:**
```css
.mv-empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--mv-space-16) var(--mv-space-8);
  text-align: center;
  gap: var(--mv-space-4);
}

.mv-empty-state__illustration {
  width: 120px;
  height: 120px;
  opacity: 0.5;
  /* SVG inline o como background-image */
}

.mv-empty-state__title {
  font-family: var(--mv-font-body);
  font-size: var(--mv-text-lg);
  font-weight: var(--mv-font-medium);
  color: var(--mv-text-secondary);
  max-width: 320px;
}

.mv-empty-state__action {
  margin-top: var(--mv-space-2);
}
```

---

### 4.2 Lista vacía (eventos)

**Texto:** *"Por ahora, silencio. Pero los mejores conciertos empiezan así."*

**Microilustración:** Una sala de conciertos minimalista vista desde la perspectiva del público — line art en `--mv-neutral-400`. Tres filas de butacas vacías sugeridas con líneas horizontales, un escenario vacío al frente, y un único reflector apagado arriba. La composición es horizontal, con mucho espacio negativo — como la metáfora del "espacio entre las notas".

---

### 4.3 Inbox vacío

**Texto:** *"Todo al día. Buen momento para escuchar algo de música."*

**Microilustración:** Un sobre abierto del que emerge una onda sonora sutil (la onda reemplaza la carta) — line art en `--mv-neutral-400` con un toque de `--mv-primary` al 30% opacidad en la onda. Es el ícono híbrido del "Newsletter" descrito en la Narrativa Visual: la carta que es música.

---

### 4.4 Sin conexión

**Texto:** *"Parece que nos quedamos sin señal. La música, por suerte, no necesita WiFi."*

**Microilustración:** Una clave de sol estilizada donde la parte inferior se desvanece en líneas discontinuas (la señal perdida) — line art en `--mv-neutral-400`. La parte superior de la clave está intacta y sólida: la música sigue ahí. Debajo, un botón ghost de "Reintentar".

---

### 4.5 Notas de implementación para todos los empty states

```css
/* Animación de entrada del empty state */
.mv-empty-state {
  opacity: 0;
  transform: translateY(8px);
  animation: mv-empty-appear 500ms var(--mv-ease-gentle) 200ms forwards;
}

@keyframes mv-empty-appear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .mv-empty-state {
    opacity: 1;
    transform: none;
    animation: none;
  }
}
```

---

## 5. Scroll Animations

### 5.1 Secciones — Fade-in + slide-up

**Descripción:** Las secciones de contenido aparecen con un fade-in combinado con un desplazamiento vertical de 20px al entrar en el viewport. Es el "crescendo visual" de la narrativa de marca: la información se construye progresivamente, como los movimientos de una sinfonía que se revelan uno a uno. El trigger es cuando el elemento entra al 15% del viewport inferior.

**Timing:** 500ms · `--mv-ease-out`

**Contexto de uso:** Secciones principales de landing page, bloques de contenido en páginas internas, secciones de about.

```css
.mv-scroll-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 500ms var(--mv-ease-out),
    transform 500ms var(--mv-ease-out);
}

.mv-scroll-reveal--visible {
  opacity: 1;
  transform: translateY(0);
}
```

```javascript
// Intersection Observer para scroll reveal
const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('mv-scroll-reveal--visible');
        scrollObserver.unobserve(entry.target); // Solo una vez
      }
    });
  },
  {
    threshold: 0.15,          // 15% visible
    rootMargin: '0px 0px -50px 0px'  // Trigger ligeramente antes
  }
);

document.querySelectorAll('.mv-scroll-reveal').forEach(el => {
  scrollObserver.observe(el);
});
```

**`prefers-reduced-motion`:** Elementos visibles desde el inicio, sin animación.

```css
@media (prefers-reduced-motion: reduce) {
  .mv-scroll-reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

---

### 5.2 Estadísticas / números — Count-up

**Descripción:** Los números estadísticos (años de experiencia, coristas dirigidos, etc.) cuentan de 0 al valor final cuando el elemento entra al viewport. El conteo dura 1200ms con easing de desaceleración — empieza rápido y se ralentiza hacia el final, como un ritardando natural. Cada dígito se muestra en `--mv-font-display` para máximo impacto visual.

**Timing:** 1200ms · Easing custom (desaceleración progresiva)

**Contexto de uso:** Sección de estadísticas, métricas en about page, contadores de logros.

```javascript
// Count-up con easing de desaceleración
function countUp(element, target, duration = 1200) {
  const start = performance.now();
  const initial = 0;

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function update(currentTime) {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuart(progress);
    const current = Math.round(initial + (target - initial) * easedProgress);

    element.textContent = current.toLocaleString('es-MX');

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// Integración con Intersection Observer
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.dataset.countTarget, 10);
      // Respetar prefers-reduced-motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        entry.target.textContent = target.toLocaleString('es-MX');
      } else {
        countUp(entry.target, target);
      }
      countObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count-target]').forEach(el => {
  countObserver.observe(el);
});
```

```html
<!-- Uso -->
<span class="mv-stat-number" data-count-target="47">0</span>
```

**`prefers-reduced-motion`:** El número aparece directamente en su valor final, sin conteo.

---

### 5.3 Imágenes — Reveal progresivo

**Descripción:** Las imágenes se revelan con un `clip-path` que se expande de abajo hacia arriba, como un telón que se levanta. La imagen ya está cargada detrás — el reveal es puramente visual. Simultáneamente, la imagen hace un ligero zoom-out de `scale(1.05)` a `scale(1)`, creando la sensación de que la imagen "se asienta" en su lugar.

**Timing:** 800ms · `--mv-ease-gentle`

**Contexto de uso:** Imágenes en galería, fotos de sección, imágenes editoriales. No aplica a avatares ni thumbnails pequeños.

```css
.mv-image-reveal {
  overflow: hidden;
  border-radius: var(--mv-radius-lg);
}

.mv-image-reveal img {
  clip-path: inset(100% 0 0 0);
  transform: scale(1.05);
  transition:
    clip-path 800ms var(--mv-ease-gentle),
    transform 800ms var(--mv-ease-gentle);
}

.mv-image-reveal--visible img {
  clip-path: inset(0 0 0 0);
  transform: scale(1);
}
```

**`prefers-reduced-motion`:** Imagen visible desde el inicio, sin clip-path ni zoom.

```css
@media (prefers-reduced-motion: reduce) {
  .mv-image-reveal img {
    clip-path: none;
    transform: none;
    transition: none;
  }
}
```

---

### 5.4 Parallax sutil en hero — Solo desktop

**Descripción:** La imagen de fondo del hero se desplaza a una velocidad ligeramente menor que el scroll (parallax ratio ~0.3), creando una profundidad sutil. El desplazamiento máximo es de **30px** — nunca más. Es como la diferencia de profundidad entre la primera fila y la última fila de un coro: perceptible, pero no desorientadora. Solo en desktop (≥1024px) porque el parallax en mobile consume batería y puede causar náuseas en algunos usuarios.

**Timing:** 60fps, ligado al scroll · Máximo 30px de offset

**Contexto de uso:** Hero section de la landing page. Máximo 1 elemento parallax por página.

```javascript
// Parallax simple y performante con requestAnimationFrame
function initHeroParallax() {
  const hero = document.querySelector('.mv-hero-parallax');
  if (!hero) return;

  // Solo desktop y solo si no prefiere reduced motion
  const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!isDesktop || prefersReducedMotion) return;

  const maxOffset = 30; // px — nunca más
  let ticking = false;

  function updateParallax() {
    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight;

    if (scrollY <= heroHeight) {
      const offset = Math.min(scrollY * 0.3, maxOffset);
      hero.style.transform = `translateY(${offset}px)`;
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });
}

initHeroParallax();
```

```css
.mv-hero-parallax {
  will-change: transform;  /* Hint al browser para composición en GPU */
}

@media (prefers-reduced-motion: reduce) {
  .mv-hero-parallax {
    transform: none !important;
    will-change: auto;
  }
}
```

---

## 6. Transiciones de Página / Sección

### 6.1 Page Load — Fade-in del contenido

**Descripción:** El contenido principal de la página aparece con un fade-in de 300ms al completar la carga. No hay splash screen, no hay loader de página completa — el contenido simplemente *nace*, como el primer sonido de un ensayo cuando el director da la entrada.

**Timing:** 300ms · `--mv-ease-out`

```css
.mv-page-content {
  animation: mv-page-fade-in 300ms var(--mv-ease-out);
}

@keyframes mv-page-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .mv-page-content {
    animation: none;
  }
}
```

---

### 6.2 Tab Switch — Crossfade

**Descripción:** Al cambiar de tab, el panel activo sale con fade-out y el nuevo entra con fade-in. Ambos se superponen brevemente (crossfade) durante 200ms. No hay slide — el cambio es como un fundido entre escenas de un documental: suave, sin dirección espacial implícita.

**Timing:** 200ms · `--mv-ease-gentle`

```css
.mv-tab-panel {
  opacity: 0;
  transition: opacity 200ms var(--mv-ease-gentle);
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.mv-tab-panel[aria-selected="true"],
.mv-tab-panel--active {
  opacity: 1;
  position: relative;
  pointer-events: auto;
}

@media (prefers-reduced-motion: reduce) {
  .mv-tab-panel {
    transition: none;
  }
}
```

---

### 6.3 Modal Open — Scale + fade

**Descripción:** El modal aparece escalando de 0.95 a 1 con un fade-in simultáneo. El `--mv-ease-spring` le da un ligero overshoot al final — el modal "aterriza" con un bounce imperceptible que lo hace sentir físico, no digital. El overlay de fondo aparece con un fade independiente de 200ms.

**Timing:** Modal: 250ms `--mv-ease-spring` · Overlay: 200ms `--mv-ease-gentle`

```css
/* Overlay */
.mv-modal-overlay {
  position: fixed;
  inset: 0;
  background-color: var(--mv-overlay);
  opacity: 0;
  transition: opacity 200ms var(--mv-ease-gentle);
  z-index: 100;
}

.mv-modal-overlay--visible {
  opacity: 1;
}

/* Modal */
.mv-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.95);
  opacity: 0;
  background-color: var(--mv-surface-elevated);
  border-radius: var(--mv-radius-lg);
  box-shadow: var(--mv-shadow-xl);
  z-index: 101;
  transition:
    transform 250ms var(--mv-ease-spring),
    opacity 250ms var(--mv-ease-spring);
  max-width: 560px;
  width: calc(100% - var(--mv-space-8));
}

.mv-modal--visible {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}
```

---

### 6.4 Modal Close — Fade out + scale

**Descripción:** El cierre es más rápido que la apertura (200ms vs 250ms) y sin bounce — usa `--mv-ease-gentle`. Un modal se cierra con decisión, como un director que baja los brazos al final de una pieza: el gesto es claro y no se prolonga.

**Timing:** 200ms · `--mv-ease-gentle`

```css
.mv-modal--closing {
  transform: translate(-50%, -50%) scale(0.95);
  opacity: 0;
  transition:
    transform 200ms var(--mv-ease-gentle),
    opacity 200ms var(--mv-ease-gentle);
}

@media (prefers-reduced-motion: reduce) {
  .mv-modal,
  .mv-modal--closing,
  .mv-modal-overlay {
    transition: none;
  }
}
```

---

### 6.5 Drawer — Slide from right

**Descripción:** El drawer lateral se desliza desde la derecha con `--mv-ease-out`, que da un arranque decidido y un aterrizaje suave. Es como un músico que entra al escenario: camina con propósito y se detiene con gracia.

**Timing:** 300ms · `--mv-ease-out`

```css
.mv-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(400px, 85vw);
  background-color: var(--mv-surface-elevated);
  box-shadow: var(--mv-shadow-xl);
  transform: translateX(100%);
  transition: transform 300ms var(--mv-ease-out);
  z-index: 101;
  overflow-y: auto;
}

.mv-drawer--open {
  transform: translateX(0);
}

@media (prefers-reduced-motion: reduce) {
  .mv-drawer {
    transition: none;
  }
}
```

---

## 7. Easter Eggs

> *El whimsy nivel 3/10 significa: no vamos a soltar confetti. Pero quien busque con curiosidad — esa curiosidad que define la personalidad de Memo — encontrará pequeños detalles que le sacarán una sonrisa. Como una anotación manuscrita al margen de una partitura que dice "¡ojo!" — no es parte de la música, pero le da vida.*

---

### 7.1 Konami Code → Acorde coral

**Descripción:** La secuencia clásica (↑↑↓↓←→←→BA) reproduce un acorde coral corto de ~3 segundos — voces humanas, un acorde mayor abierto que se expande y se desvanece. Sin feedback visual excepto un `console.log` discreto: `♫ "Donde la música y la tecnología se encuentran..."`. El audio debe ser grabado por el ensamble real de Memo — no sintetizado.

**Contexto:** Global, en cualquier página. No interrumpe la experiencia.

```javascript
// Konami Code listener
const konamiSequence = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA'
];

let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
  if (e.code === konamiSequence[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiSequence.length) {
      playChoralChord();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

function playChoralChord() {
  const audio = new Audio('/assets/audio/easter-egg-chord.mp3');
  audio.volume = 0.4;  // Suave — pianissimo
  audio.play().catch(() => {});  // Silenciar error si autoplay está bloqueado
  console.log('♫ "Donde la música y la tecnología se encuentran..."');
}
```

---

### 7.2 Triple click en logo → Tagline variante

**Descripción:** Al hacer click 3 veces rápidas en el logotipo, el tagline cambia a una variante aleatoria, con un fade sutil de 300ms. Después de 5 segundos, regresa al original. Las variantes son líneas que suenan a Memo — humor sutil, siempre en marca.

**Variantes de tagline:**
- *"Música × Tecnología × Café frío"*
- *"Director de ensambles y de demasiadas pestañas abiertas"*
- *"Explorando la frontera entre el coro y el código"*
- *"Las personas siempre van primero. El WiFi, segundo."*
- *"Donde el pianissimo es un superpoder"*

```javascript
const taglineVariants = [
  'Música × Tecnología × Café frío',
  'Director de ensambles y de demasiadas pestañas abiertas',
  'Explorando la frontera entre el coro y el código',
  'Las personas siempre van primero. El WiFi, segundo.',
  'Donde el pianissimo es un superpoder',
];

let clickCount = 0;
let clickTimer = null;

document.querySelector('.mv-logo').addEventListener('click', () => {
  clickCount++;
  clearTimeout(clickTimer);

  clickTimer = setTimeout(() => { clickCount = 0; }, 400);

  if (clickCount === 3) {
    clickCount = 0;
    const tagline = document.querySelector('.mv-tagline');
    const original = tagline.textContent;
    const variant = taglineVariants[Math.floor(Math.random() * taglineVariants.length)];

    tagline.style.transition = 'opacity 300ms var(--mv-ease-gentle)';
    tagline.style.opacity = '0';

    setTimeout(() => {
      tagline.textContent = variant;
      tagline.style.opacity = '1';
    }, 300);

    setTimeout(() => {
      tagline.style.opacity = '0';
      setTimeout(() => {
        tagline.textContent = original;
        tagline.style.opacity = '1';
      }, 300);
    }, 5000);
  }
});
```

---

### 7.3 Scroll al final → Nota musical flotante

**Descripción:** Cuando el usuario llega al final absoluto de la página (scrolled to bottom), una pequeña nota musical (♪) aparece en la esquina inferior derecha, flota hacia arriba unos 40px y se desvanece en 2 segundos. Aparece solo una vez por sesión de página. Es como el último sonido de un concierto que todavía vibra en la sala después de que terminó.

```javascript
let bottomNoteShown = false;

window.addEventListener('scroll', () => {
  if (bottomNoteShown) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const scrolledToBottom =
    (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50);

  if (scrolledToBottom) {
    bottomNoteShown = true;
    showFloatingNote();
  }
}, { passive: true });

function showFloatingNote() {
  const note = document.createElement('div');
  note.textContent = '♪';
  note.setAttribute('aria-hidden', 'true');
  Object.assign(note.style, {
    position: 'fixed',
    bottom: '32px',
    right: '32px',
    fontSize: '24px',
    color: 'var(--mv-primary)',
    opacity: '0',
    pointerEvents: 'none',
    transition: 'opacity 600ms var(--mv-ease-gentle), transform 2000ms var(--mv-ease-gentle)',
    zIndex: '50',
  });
  document.body.appendChild(note);

  requestAnimationFrame(() => {
    note.style.opacity = '0.6';
    note.style.transform = 'translateY(-40px)';
  });

  setTimeout(() => {
    note.style.opacity = '0';
    setTimeout(() => note.remove(), 600);
  }, 1500);
}
```

---

### 7.4 Long-press en dark mode toggle → Transición dramática

**Descripción:** Al mantener presionado el toggle de dark/light mode por más de 800ms, en lugar de la transición normal (150ms), se ejecuta una versión "dramática" de 800ms con un resplandor terracota (glow) que se expande brevemente desde el toggle. Es como cuando un director pide un *fortissimo subito* — el cambio es el mismo, pero el gesto lo transforma en un evento. Solo se activa con long-press intencional.

**Timing:** 800ms · `--mv-ease-gentle` · Glow: 400ms

```javascript
let pressTimer = null;

document.querySelector('.mv-theme-toggle').addEventListener('pointerdown', (e) => {
  pressTimer = setTimeout(() => {
    e.target.dataset.dramatic = 'true';
  }, 800);
});

document.querySelector('.mv-theme-toggle').addEventListener('pointerup', () => {
  clearTimeout(pressTimer);
  const toggle = document.querySelector('.mv-theme-toggle');

  if (toggle.dataset.dramatic === 'true') {
    document.documentElement.classList.add('mv-theme-transition-dramatic');

    // Glow terracota
    const glow = document.createElement('div');
    glow.classList.add('mv-theme-glow');
    toggle.appendChild(glow);

    setTimeout(() => {
      document.documentElement.classList.remove('mv-theme-transition-dramatic');
      glow.remove();
      toggle.dataset.dramatic = 'false';
    }, 800);
  }
});
```

```css
.mv-theme-transition-dramatic * {
  transition-duration: 800ms !important;
  transition-timing-function: var(--mv-ease-gentle) !important;
}

.mv-theme-glow {
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(184, 92, 56, 0.3) 0%,
    transparent 70%
  );
  animation: mv-glow-pulse 400ms var(--mv-ease-gentle) forwards;
  pointer-events: none;
}

@keyframes mv-glow-pulse {
  0%   { transform: scale(0.5); opacity: 0; }
  50%  { opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .mv-theme-transition-dramatic * {
    transition-duration: 0ms !important;
  }
  .mv-theme-glow {
    display: none;
  }
}
```

---

## 8. Principios de Animación de Memo Valdez

> *Estas 8 reglas gobiernan todo movimiento en la interfaz. Si una animación las viola, se revisa o se elimina. Son el equivalente de la marca de tempo al inicio de una partitura: definen cómo se interpreta todo lo que sigue.*

---

### I. *"Como el tempo de una pieza: nunca apresures una transición que necesita respirar."*

Las duraciones existen por una razón. Un fade de página necesita 300ms porque el ojo necesita registrar el cambio. Un hover necesita 150ms porque la respuesta debe sentirse inmediata. Respetar los tokens de duración no es rigidez — es ritmo.

---

### II. *"El motion es un pianissimo — perceptible solo para quien presta atención."*

Si la animación llama la atención sobre sí misma, está demasiado fuerte. El usuario no debería pensar "qué bonita animación" — debería sentir que la interfaz es agradable sin saber exactamente por qué. Los mejores detalles son los que extrañas cuando desaparecen.

---

### III. *"Cada movimiento tiene propósito, como cada gesto del director."*

No existe animación decorativa. Un hover eleva porque comunica "soy interactivo". Un stagger revela porque reduce la carga cognitiva. Un bounce en el toggle confirma porque da feedback físico. Si no puedes explicar *por qué* se mueve algo, no debería moverse.

---

### IV. *"La salida es más rápida que la entrada — como un aplauso que llega después del silencio."*

Las animaciones de apertura/entrada duran más que las de cierre/salida. Un modal se abre en 250ms pero se cierra en 200ms. Un tooltip aparece en 200ms pero desaparece en 150ms. La razón es atencional: el usuario necesita tiempo para registrar algo nuevo, pero quiere que lo que ya no necesita salga del camino rápido.

---

### V. *"Respeta el silencio del usuario — si pidió menos movimiento, dáselo."*

`prefers-reduced-motion` no es opcional. Cada interacción tiene una alternativa que elimina el movimiento pero preserva el feedback visual (cambio de color, cambio de borde, cambio de opacidad instantáneo). El acceso a la información nunca depende de una animación.

---

### VI. *"El easing es la expresión — linear es para máquinas, spring es para personas."*

El easing `linear` solo se usa para barras de progreso y spinners. Todo lo demás usa curvas orgánicas: `ease-out` para la mayoría de interacciones (aterrizaje suave), `ease-spring` para feedback táctil (rebote vivo), `ease-gentle` para fades y apariciones (diminuendo visual). El easing es lo que separa una interfaz que *funciona* de una que *se siente*.

---

### VII. *"Máximo una animación protagonista por viewport."*

Si dos elementos se animan simultáneamente en el mismo viewport y ambos piden atención, uno sobra. El stagger resuelve esto: los elementos entran secuencialmente, nunca en competencia. En un viewport dado, solo un elemento debería estar haciendo algo que el usuario necesite notar.

---

### VIII. *"La marca se reconoce en los detalles que otros omiten."*

El shimmer usa neutrales cálidos, no grises. El botón de loading dice "Un momento...", no "Cargando". El empty state habla con la voz de Memo, no con el tono genérico de un framework. Son decisiones de milisegundos y micro-textos que, acumuladas, construyen la sensación de que esta interfaz fue hecha *por alguien* — no generada por un template.

---

## Apéndice: Tabla de Referencia Rápida

| Interacción | Duración | Easing | Token compuesto |
|---|---|---|---|
| Hover (botón, card, avatar) | 150ms | `--mv-ease-out` | `--mv-transition-fast` |
| Link underline | 300ms | `--mv-ease-out` | `--mv-transition-normal` |
| Click scale down | 80ms | `--mv-ease-out` | — (custom) |
| Click scale return | 150ms | `--mv-ease-spring` | — (custom) |
| Ripple expand | 400ms | `--mv-ease-gentle` | — (keyframe) |
| Toggle thumb | 200ms | `--mv-ease-spring` | — (custom) |
| Skeleton shimmer | 1500ms | `linear` | — (keyframe) |
| Button spinner | 800ms | `linear` | — (keyframe) |
| Page fade-in | 300–400ms | `--mv-ease-out` / `--mv-ease-gentle` | `--mv-transition-normal` |
| Tab crossfade | 200ms | `--mv-ease-gentle` | — (custom) |
| Modal open | 250ms | `--mv-ease-spring` | — (custom) |
| Modal close | 200ms | `--mv-ease-gentle` | — (custom) |
| Drawer slide | 300ms | `--mv-ease-out` | `--mv-transition-normal` |
| Scroll reveal | 500ms | `--mv-ease-out` | `--mv-transition-slow` |
| Count-up | 1200ms | easeOutQuart | — (JS) |
| Image reveal | 800ms | `--mv-ease-gentle` | `--mv-transition-dramatic` |
| Parallax (hero) | 60fps | — | — (JS, max 30px) |
| Stagger delay | 80ms/item | — | — (per-item) |
| Empty state appear | 500ms | `--mv-ease-gentle` | — (keyframe) |
| Easter egg glow | 400ms | `--mv-ease-gentle` | — (keyframe) |

---

*"La personalidad de una interfaz no vive en los features que gritan — vive en los detalles que susurran."*

— Documento generado como Fase 4 del pipeline de brandbook para la marca personal "Memo Valdez".
*Siguiente paso: Integración en guía de componentes y prototipo interactivo.*
