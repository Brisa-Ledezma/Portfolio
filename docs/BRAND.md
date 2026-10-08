# Guía de marca

## Logo

El monograma **BL** combina dos trazos:

- **La L**, dorada, fina y alta. Enmarca a la B y su pie funciona como línea de base de todo el signo.
- **La B**, en beige y con trazo grueso. Las esquinas de sus curvas están cortadas a 45°, como las pistas de un circuito impreso: mantiene la forma clásica de la letra y suma un guiño técnico, sin llegar a lo pixelado.

El contraste entre un trazo fino y uno grueso viene de los monogramas tradicionales; el corte en chaflán lo lleva a la tecnología.

| Archivo | Uso |
|---|---|
| [front/public/favicon.svg](../front/public/favicon.svg) | Ícono de la pestaña del navegador |
| [front/src/components/brand/Logo.tsx](../front/src/components/brand/Logo.tsx) | Logo dentro del sitio (encabezado y pie) |

### Versiones

- **Con fondo** (cuadrado bordó con esquinas redondeadas): la versión principal. Es la que se usa en el sitio y como avatar.
- **Sin fondo**: solo los trazos, sobre fondos oscuros (`#121113` o bordó). No usar sobre fondos claros sin el cuadrado, porque la B beige pierde contraste.

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
