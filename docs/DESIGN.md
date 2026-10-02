# Sistema de diseño

## Dirección

Portfolio editorial y cálido: tipografía grande como protagonista, una paleta apagada y movimiento lento y continuo. Sin colores saturados. El tema claro combina beige, bordó y oliva; el oscuro, un casi negro neutro con bordó y dorado, sin oliva.

## Colores

Los colores son variables CSS definidas en [front/src/index.css](../front/src/index.css) y expuestas a Tailwind como `bg-bg`, `text-ink`, `text-accent`, etc. Cada tema redefine las mismas variables, por lo que los componentes no necesitan clases distintas por tema.

| Token | Uso | Claro | Oscuro |
|---|---|---|---|
| `bg` | Fondo de página | `#f2ece0` beige papel | `#121113` casi negro neutro |
| `surface` | Bloques y tarjetas | `#e7decd` | `#1b1a1d` |
| `ink` | Texto principal | `#2a1a1c` | `#ece7dd` |
| `ink-muted` | Texto secundario | `#65544f` | `#a29c94` |
| `accent` | Énfasis y botón principal | `#6e1f2b` bordó | `#c9a66b` dorado apagado |
| `on-accent` | Texto sobre el acento | `#f6f0e4` | `#151315` |
| `secondary` | Detalles secundarios | `#5c6140` oliva | `#8f3345` bordó claro |
| `block` | Bloque destacado de contacto | `#6e1f2b` bordó | `#5a1a26` bordó |
| `on-block` | Texto sobre el bloque | `#f6f0e4` | `#f2ece0` |
| `line` | Bordes y divisores | tinta al 14 % | beige al 14 % |

Reglas:

- Un solo color de acento por tema, usado siempre para lo mismo.
- Todo par texto/fondo cumple contraste WCAG AA.
- El tema inicial sigue la preferencia del sistema; la elección de la persona se guarda en el navegador.

## Tipografías

Las tres son fuentes variables servidas desde el propio sitio (paquetes Fontsource), sin pedidos a terceros.

| Rol | Fuente | Clase |
|---|---|---|
| Títulos | Bricolage Grotesque | `font-display` |
| Texto | Geist | `font-sans` |
| Etiquetas y datos | Geist Mono | `font-mono` |

## Movimiento

| Herramienta | Para qué |
|---|---|
| GSAP | Secuencias de entrada y animaciones atadas al scroll |
| Motion | Cambios de estado de componentes y respuesta al puntero |
| Lenis | Scroll suave, sincronizado con GSAP |

Reglas:

- Cada animación comunica algo (jerarquía, entrada, respuesta); ninguna es solo decorativa en bucle sobre contenido.
- Solo se animan `transform` y `opacity`.
- Con `prefers-reduced-motion` activo, las animaciones se desactivan y el contenido se muestra directo.

## Idiomas

Todo el texto visible vive en [front/src/content/index.ts](../front/src/content/index.ts), en español e inglés. El idioma inicial sigue al navegador y el selector guarda la elección.

## Páginas

El sitio no es una landing de una sola pantalla: tiene cuatro páginas con transición entre ellas.

| Ruta | Página | Contenido |
|---|---|---|
| `/` | Inicio | Hero animado, lista de proyectos, presentación breve y bloque de contacto |
| `/projects` | Proyectos | Cada proyecto con qué resuelve, qué parte hice y con qué tecnologías |
| `/about` | Sobre mí | Presentación, experiencia, formación y stack |
| `/contact` | Contacto | Mail, LinkedIn y GitHub |

Las rutas se definen en [front/src/App.tsx](../front/src/App.tsx) y la estructura común (encabezado, transición, pie) en [front/src/components/layout/Layout.tsx](../front/src/components/layout/Layout.tsx).
