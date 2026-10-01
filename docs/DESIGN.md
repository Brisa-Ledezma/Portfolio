# Sistema de diseño

## Dirección

Portfolio editorial y cálido: tipografía grande como protagonista, una paleta apagada de bordó, beige y oliva, y movimiento lento y continuo. Sin colores saturados.

## Colores

Los colores son variables CSS definidas en [front/src/index.css](../front/src/index.css) y expuestas a Tailwind como `bg-bg`, `text-ink`, `text-accent`, etc. Cada tema redefine las mismas variables, por lo que los componentes no necesitan clases distintas por tema.

| Token | Uso | Claro | Oscuro |
|---|---|---|---|
| `bg` | Fondo de página | `#f2ece0` beige papel | `#170e10` bordó casi negro |
| `surface` | Bloques y tarjetas | `#e7decd` | `#23151a` |
| `ink` | Texto principal | `#2a1a1c` | `#ede4d3` |
| `ink-muted` | Texto secundario | `#65544f` | `#ab9c8e` |
| `accent` | Énfasis y botón principal | `#6e1f2b` bordó | `#c9a66b` dorado apagado |
| `on-accent` | Texto sobre el acento | `#f6f0e4` | `#1d1113` |
| `olive` | Detalles secundarios | `#5c6140` | `#9aa076` |
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
