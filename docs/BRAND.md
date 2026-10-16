# Guía de marca

## Logo

El monograma **LB** está dibujado a medida, inspirado en los monogramas editoriales de alto contraste:

- **La L** tiene un fuste grueso, remate superior y pie fino.
- **La B** nace con un trazo fino apoyado sobre el pie de la L. Su panza superior queda arriba de ese pie y la inferior, con el lado izquierdo en diagonal, cuelga por debajo: las dos letras se encastran en una sola figura.
- **Color:** letras en dorado con degradé sobre un cuadrado bordó, los dos colores principales de la marca.

| Archivo | Uso |
|---|---|
| [front/public/favicon.svg](../front/public/favicon.svg) | Ícono de la pestaña del navegador (trazos finos un poco engrosados para que se lean en 16 px) |
| [front/src/components/brand/Logo.tsx](../front/src/components/brand/Logo.tsx) | Logo dentro del sitio (encabezado y pie) |

### Versiones

- **Con fondo** (cuadrado bordó con esquinas redondeadas): la versión principal. Es la que se usa en el sitio y como avatar.
- **Sin fondo**: solo las letras doradas, sobre fondos oscuros (`#121113` o bordó). Sobre fondo claro, usar las letras en bordó.

### Reglas

- Tamaño mínimo: 16 px con fondo, 32 px sin fondo.
- Margen libre alrededor: al menos un cuarto del ancho del logo.
- No rotar, deformar, cambiar colores ni agregar sombras o destellos.

## Colores

| Nombre | Hex | Rol |
|---|---|---|
| Bordó | `#6e1f2b` | Color principal: fondo del logo, botones y énfasis en tema claro |
| Bordó oscuro | `#4c1220` | Fin del degradé del logo |
| Dorado | `#c9a66b` | Detalles, líneas, la L del logo; énfasis en tema oscuro |
| Dorado claro | `#ead1a0` | Inicio del degradé dorado |
| Beige papel | `#f2ece0` | Fondo del tema claro, la B del logo |
| Casi negro | `#121113` | Fondo del tema oscuro |
| Oliva | `#5c6140` | Detalles secundarios, solo en tema claro |

Sin colores saturados. El detalle de cómo se aplican en cada tema está en [DESIGN.md](DESIGN.md).

## Tipografías

| Rol | Fuente |
|---|---|
| Títulos y nombre | Bricolage Grotesque |
| Texto | Geist |
| Etiquetas y datos | Geist Mono |

## Separador

El destello ✦ dorado se usa como separador entre elementos (roles, enlaces). No forma parte del logo.
