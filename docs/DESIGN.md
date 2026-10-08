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
| `gold` | Líneas, destellos ✦ y detalles de marca | `#87672b` | `#c9a66b` |
| `detail` | Etiquetas, fechas y roles | `#5c6140` oliva | `#c9a66b` dorado |
| `line` | Bordes y divisores | tinta al 14 % | beige al 14 % |

Reglas:

- Un solo color de acento por tema, usado siempre para lo mismo.
- Todo par texto/fondo cumple contraste WCAG AA.
- El tema inicial sigue la preferencia del sistema; la elección de la persona se guarda en el navegador.

## Marca

El logo es el monograma "BL": la B en beige, la L con el pie dorado y el destello ✦ dorado de la marca, sobre un cuadrado bordó con degradé. Está en [front/public/favicon.svg](../front/public/favicon.svg) (ícono de la pestaña) y como componente en [front/src/components/brand/Logo.tsx](../front/src/components/brand/Logo.tsx). Aparece en el encabezado y en el pie, que es compacto: logo, nombre y enlaces. El destello ✦ dorado es el separador de la marca.

## Zoom y tamaños de pantalla

- Los contenidos usan el contenedor fluido `container-page` (hasta 1760 px de ancho, márgenes proporcionales), para que la página acompañe el ancho de la ventana al acercar o alejar.
- Los títulos grandes combinan `rem` y `vw` en `clamp()`, así responden tanto al tamaño de la ventana como al zoom del navegador.
- El menú completo aparece desde 1024 px; por debajo (o con mucho zoom) se usa el menú desplegable.

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
