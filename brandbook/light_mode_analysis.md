# Análisis de Light Mode — Memo Valdez

> **Fase:** 5.1 · Revisión de Paleta
> **Fecha:** 23 de septiembre de 2026
> **Skill aplicado:** Frontend Design (self-critique against AI-generated tells)
> **Alcance:** Solo light mode. Dark mode está APROBADO y no se modifica.

---

## 1. Diagnóstico — ¿Qué tan "AI-tell" se ve nuestra paleta actual?

Analizamos la paleta light mode actual (`bg: #FAF8F5` + `primary: #B85C38`) contra los 5 AI-generated tells definidos por el skill Frontend Design.

### Score por tell

| # | AI-Generated Tell | Nuestra paleta actual | Score (1=limpio, 10=flagrante) | Veredicto |
|---|---|---|---|---|
| **1** | **Warm cream + terracotta** | `#FAF8F5` (crema 36° HSL) + `#B85C38` (terracota 17° HSL) | **7/10** | ⚠️ **Este es el problema.** Aunque nuestro hex difiere del genérico (`#F4F1EA` + `#D97757`), el *patrón perceptual* es idéntico: fondo cálido claro + acento clay/terracotta. Un diseñador experimentado lo identificaría. |
| **2** | **Near-black + acid-green** | No aplica (nuestro dark usa terracota, no ácido) | **1/10** | ✅ Limpio |
| **3** | **Broadsheet layout** | Nuestro layout es single-column con whitespace | **2/10** | ✅ Limpio |
| **4** | **SaaS-card kit** | Cards con radius variado, no uniformes | **3/10** | ✅ Aceptable |
| **5** | **Template chrome** | Wordmark en versales con tracking amplio podría parecer template | **4/10** | ⚠️ Menor — se justifica por la referencia a Ólafur Arnalds, pero hay que ser conscientes |

### Diagnóstico general

**El light mode tiene un AI-tell score combinado de 7/10 en el tell #1** — el más reconocible de todos. El resto de la paleta (dark mode, tipografía, layout) es genuino y diferenciado.

**Lo que importa:** no es si *nosotros* podemos justificarlo — es si *alguien que ve el sitio por primera vez* piensa "esto lo generó una IA". La respuesta honesta para el light mode actual es: probablemente sí.

### Lo que funciona y NO se toca
- ✅ Dark mode (`#131110` + terracota iluminado) — no cae en ningún tell
- ✅ La paleta terracota/dorado/slate en sí — los colores son buenos, el problema es el *fondo*
- ✅ Neutrales cálidos — bien calibrados
- ✅ Tipografía — no es serif de alto contraste (que sería el combo completo del tell)

---

## 2. Propuestas de Light Mode Alternativo

### Propuesta A — "Blanco Claro" (Recomendada ⭐)

**Fondo:** `#FEFEFE` (casi blanco puro, 0° hue, 99.6% luminance)

**Concepto:** El fondo desaparece completamente — como la sala de conciertos con luces encendidas. El terracota deja de sentirse "crema + clay" y se convierte en un *acento que respira* contra un canvas neutral. Es la estrategia Apple: el fondo no tiene opinión, el contenido tiene todo el protagonismo.

**Por qué rompe el AI-tell:** El tell #1 es específicamente *warm cream* + terracotta. Blanco puro no es cream. La combinación se lee como "marca con acento cálido sobre canvas limpio" — que es lo que hacen marcas como Stripe, Linear, o el propio Apple.

```
┌─────────────────────────────────────────────────────────┐
│  #FEFEFE (casi blanco)                                  │
│                                                         │
│     M E M O   V A L D E Z                               │
│     Acompañar. Dirigir. Explorar.                       │
│                                                         │
│  ┌────────────────────────────────────────────────┐     │
│  │                                                │     │
│  │  "Donde la música y la tecnología             │     │
│  │   se encuentran, las personas                  │     │
│  │   se encuentran a sí mismas."                  │     │
│  │                                                │     │
│  │         [Escucha el ensamble]  ← #B85C38       │     │
│  │                                                │     │
│  └────────────────────────────────────────────────┘     │
│                                                         │
│  ─── Línea divisoria #E8E1D9 ────────────────────────   │
│                                                         │
│  Sección tech        │  Sección música                  │
│  (slate #3D5A73)     │  (terracota #B85C38)             │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Ratios de contraste WCAG (calculados):**

| Foreground | Ratio | AA Normal | AA Large | AAA |
|---|---|---|---|---|
| text-primary `#231F1B` | **16.36** | ✅ | ✅ | ✅ |
| text-secondary `#574E44` | **8.14** | ✅ | ✅ | ✅ |
| primary `#B85C38` | **4.54** | ✅ | ✅ | ❌ |
| primary-dark `#8E3F22` | **7.28** | ✅ | ✅ | ✅ |
| tertiary `#3D5A73` | **7.22** | ✅ | ✅ | ✅ |
| secondary `#C8A96E` | **2.24** | ❌ | ❌ | ❌ |

**Pros:**
- Máximo contraste en todos los colores de texto — superior a todas las demás opciones
- El `primary #B85C38` **pasa AA normal** sobre blanco puro (4.54:1) — no pasaba sobre crema (4.28:1)
- Transición dark↔light dramática y memorable — se siente como encender/apagar las luces de la sala
- El terracota se lee como acento intencional, no como "AI default palette"
- Referente real: Apple, Stripe, Linear — marcas que Memo admira

**Contras:**
- Pierde la calidez del fondo actual — el "alma" del minimalismo necesita venir de otros elementos (fotografía, tipografía serif, micro-interacciones)
- Blanco puro (#FFFFFF) puede sentirse hospitalario en pantallas grandes — `#FEFEFE` mitiga esto marginalmente
- Las surfaces y cards necesitan un tinte sutil para diferenciarse del fondo

**¿Pasa el Chanel test?** Sí — es el más elegante con menos elementos. El fondo no dice nada; la marca dice todo.

---

### Propuesta B — "Gris Cálido Claro"

**Fondo:** `#F0EDEA` (gris con undertone cálido sutil, 30° hue, 85% luminance)

**Concepto:** Mantiene la calidez pero baja la saturación lo suficiente para que no se lea como "crema". Es como la diferencia entre papel color crema (→ AI tell) y papel algodón de gramaje alto (→ artesanal). El matiz cálido sigue ahí pero es un susurro, no una declaración.

```
┌─────────────────────────────────────────────────────────┐
│  #F0EDEA (gris cálido claro)                            │
│                                                         │
│     M E M O   V A L D E Z                               │
│     ─────────────────────                               │
│                                                         │
│  "La música y la tecnología existen                     │
│   para acercar a las personas."                         │
│                                                         │
│  [Escucha el ensamble]  ← #8E3F22 (primary-dark)       │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │  Card 1  │  │  Card 2  │  │  Card 3  │              │
│  │  #FEFEFE │  │  #FEFEFE │  │  #FEFEFE │              │
│  └──────────┘  └──────────┘  └──────────┘              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Ratios de contraste WCAG:**

| Foreground | Ratio | AA Normal | AA Large |
|---|---|---|---|
| text-primary | **14.03** | ✅ | ✅ |
| primary `#B85C38` | **3.89** | ❌ | ✅ |
| primary-dark `#8E3F22` | **6.24** | ✅ | ✅ |
| tertiary `#3D5A73` | **6.19** | ✅ | ✅ |

**Pros:**
- Mantiene la calidez sin ser "crema" — se siente más como lino que como mantequilla
- Las cards blancas (#FEFEFE) sobre fondo gris cálido crean buena jerarquía de elevación
- Todavía se diferencia del dark mode de forma natural

**Contras:**
- ⚠️ El `primary #B85C38` **no pasa AA normal** (3.89:1) — obligatorio usar `primary-dark` para todo texto
- Menor contraste general que las opciones A y C — pierde legibilidad
- El matiz cálido 30° todavía huele a "warm cream" aunque menos saturado
- Para un ojo entrenado, sigue siendo una variante del tell #1

**¿Pasa el Chanel test?** Parcialmente — es elegante pero no toma un riesgo. Es una versión tímida de la paleta actual.

---

### Propuesta C — "Undertone Azul Frío"

**Fondo:** `#F5F7FA` (blanco con undertone azul sutil, 216° hue, 93% luminance)

**Concepto:** Un giro inesperado: el fondo light tiene un tinte *frío* sutil que contrasta con la calidez del terracota. Es como la mañana fría antes de un ensayo — serena, limpia, con la promesa de la calidez que viene cuando la música empieza. El contraste temperatura fría (fondo) vs. temperatura cálida (terracota) crea tensión visual que se siente intencional, no genérica.

```
┌─────────────────────────────────────────────────────────┐
│  #F5F7FA (blanco azulado sutil)                         │
│                                                         │
│     M E M O   V A L D E Z                               │
│                                                         │
│  ┌─────────────────────────────────────────────────┐    │
│  │  #FFFFFF card surface                           │    │
│  │                                                 │    │
│  │  "Cada voz importa — incluso                   │    │
│  │   la que todavía no suena."                     │    │
│  │                                                 │    │
│  │  Terracota #B85C38 ← CONTRASTA con el fondo    │    │
│  │  porque es cálido sobre frío                    │    │
│  └─────────────────────────────────────────────────┘    │
│                                                         │
│  Tech section uses #3D5A73 — se siente natural aquí    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Ratios de contraste WCAG:**

| Foreground | Ratio | AA Normal | AA Large |
|---|---|---|---|
| text-primary | **15.25** | ✅ | ✅ |
| primary `#B85C38` | **4.23** | ❌ | ✅ |
| primary-dark `#8E3F22` | **6.78** | ✅ | ✅ |
| tertiary `#3D5A73` | **6.73** | ✅ | ✅ |

**Pros:**
- **Rompe el tell completamente** — warm terracotta sobre fondo frío es lo opuesto del AI pattern
- El slate azul `#3D5A73` se siente nativo en este fondo — las secciones tech se integran mejor
- Crea una narrativa visual interesante: "el frío de la mañana se calienta con la música" (light → interaction)
- Excelente contraste de texto — solo marginalmente menor que blanco puro
- Referencia real: Linear, Notion, Arc Browser — interfaces tech contemporáneas

**Contras:**
- El `primary #B85C38` sigue sin pasar AA normal como texto (4.23:1) — usar `primary-dark` para texto
- Puede sentirse ligeramente "tech" en exceso si no se balancea con la fotografía cálida
- La calidez latina que el brief pide tiene que venir del contenido (fotos, tipografía serif), no del fondo
- Transición dark → light puede sentirse como "cambio de app" en lugar de "misma marca, diferente luz"

**¿Pasa el Chanel test?** Sí — es la propuesta más inesperada y la que más toma un riesgo justificado.

---

### Propuesta D — "Neutral Verdoso"

**Fondo:** `#F4F5F0` (blanco con undertone sage/verdoso, 72° hue, 91% luminance)

**Concepto:** Un fondo con un tinte orgánico verdoso — como las hojas de una partitura envejecida o la luz que entra por la ventana del salón de ensayo a través de los árboles. Es cálido sin ser crema, orgánico sin ser tropical.

**Ratios de contraste WCAG:**

| Foreground | Ratio | AA Normal | AA Large |
|---|---|---|---|
| text-primary | **14.93** | ✅ | ✅ |
| primary `#B85C38` | **4.14** | ❌ | ✅ |
| primary-dark `#8E3F22` | **6.64** | ✅ | ✅ |
| tertiary `#3D5A73` | **6.59** | ✅ | ✅ |

**Pros:**
- Orgánico y cálido sin ser crema — rompe el tell #1
- Tono "sage" está en tendencia 2025-2026 (verificado: earthy tones con shift verde)
- Conecta con la naturaleza y lo orgánico — refuerza "humanismo"

**Contras:**
- El verdoso puede sentirse más "wellness spa" que "músico director"
- Menor contraste que A o C
- Puede confundir la identidad si la marca no tiene verde en su vocabulario
- No es lo suficientemente diferente del crema como para resolver el problema perceptual

**¿Pasa el Chanel test?** No del todo — el verde añade un matiz que no está en el brief y no se gana su lugar.

---

## 3. Recomendación Final

### ⭐ Propuesta A: "Blanco Claro" (`#FEFEFE`)

**Justificación en 5 ejes:**

| Criterio | Score | Razón |
|---|---|---|
| **Anti AI-tell** | ✅✅✅ | Rompe el tell #1 completamente. Blanco ≠ cream. |
| **Consistencia con dark mode** | ✅✅✅ | La transición dark (`#131110`) ↔ light (`#FEFEFE`) es dramática e intencional — como apagar/encender las luces de la sala de concierto. |
| **WCAG AA** | ✅✅✅ | Mejor contraste de todas las opciones. El `primary #B85C38` **pasa AA normal** (4.54:1). |
| **"Minimalismo con alma"** | ✅✅ | El minimalismo viene del fondo neutral. El "alma" se inyecta vía: fotografía cálida, tipografía serif (Bodoni Moda), micro-interacciones, microcopy epistolar. |
| **Chanel test** | ✅✅✅ | Máxima elegancia con mínimos elementos. El fondo se retira para que el contenido brille. |

**¿Por qué no C (Undertone Azul)?**
La Propuesta C es la segunda mejor y la más *arriesgada* — que es positivo desde el Frontend Design skill. Sin embargo:
- Añade una temperatura fría que el brief no pide (la marca es "calidez latina")
- El dark mode tiene undertone cálido; un light mode frío crea una discontinuidad perceptual
- A es igualmente efectiva contra el AI-tell pero más consistente con la personalidad de marca

**La calidez en "Blanco Claro" viene de:**
1. Fotografía — grain cálido, iluminación dorada, rostros humanos
2. Tipografía — Bodoni Moda en citas y nombres de piezas musicales
3. Terracota — se vuelve más protagonista como acento sobre canvas neutral
4. Dorado — decoraciones y badges siguen aportando calidez
5. Microcopy — el tono epistolar y humor sutil son cálidos independientemente del fondo
6. Surfaces — las cards y paneles usan neutrales cálidos (`#F5F0EB` para surface)

---

## 4. Tabla de Tokens Actualizados (Light Mode)

Solo cambian los tokens marcados con 🔄. El resto se mantiene idéntico.

| Token | Valor ACTUAL | Valor NUEVO | Cambio |
|---|---|---|---|
| `--mv-bg` | `#FAF8F5` | `#FEFEFE` | 🔄 Crema → blanco puro |
| `--mv-surface` | `#F5F0EB` | `#F5F0EB` | ✅ Se mantiene — ahora crea jerarquía visible contra el fondo |
| `--mv-surface-elevated` | `#FFFFFF` | `#FFFFFF` | ✅ Se mantiene |
| `--mv-neutral-50` | `#FAF8F5` | `#FEFEFE` | 🔄 Alineado con bg |
| `--mv-neutral-100` | `#F5F0EB` | `#F5F0EB` | ✅ Se mantiene |
| `--mv-overlay` | `rgba(35,31,27,0.60)` | `rgba(35,31,27,0.60)` | ✅ Se mantiene |
| `--mv-text-primary` | `#231F1B` | `#231F1B` | ✅ Se mantiene (16.36:1 sobre nuevo bg) |
| `--mv-text-inverse` | `#FAF8F5` | `#FEFEFE` | 🔄 Alineado con bg |
| Todos los demás tokens | — | — | ✅ Sin cambios |

**Cambios mínimos:** Solo 3 tokens cambian de valor. El impacto es máximo con mínima intervención.

### CSS diff

```css
/* ANTES */
:root {
  --mv-bg: #FAF8F5;
  --mv-neutral-50: #FAF8F5;
  --mv-text-inverse: #FAF8F5;
}

/* DESPUÉS */
:root {
  --mv-bg: #FEFEFE;
  --mv-neutral-50: #FEFEFE;
  --mv-text-inverse: #FEFEFE;
}
```

### Efecto cascada
Al cambiar solo `--mv-bg` y `--mv-neutral-50`, todos los componentes que referencian estos tokens se actualizan automáticamente. No hay que tocar ningún archivo de componentes, micro-interacciones, ni responsive framework. El sistema de tokens funciona exactamente como debe.

---

## 5. Nota sobre el Dark Mode

El dark mode NO se toca. Su `--mv-bg: #131110` con undertone cálido y terracota iluminado `#D4845E` es genuino, diferenciado, y no cae en ningún AI-tell. La transición `#131110` ↔ `#FEFEFE` es ahora más dramática y memorable — como la diferencia entre un escenario a oscuras y la misma sala con todas las luces encendidas.
