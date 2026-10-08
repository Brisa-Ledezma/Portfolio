# Plan de implementación

## Objetivo

Un portfolio que se sienta actual y con identidad propia: tipografía protagonista, animaciones con intención y pocas secciones con profundidad. Detrás, un proyecto full stack con el nivel de orden, seguridad y documentación de un producto profesional.

## Fases

| # | Fase | Rama | Resultado | Estado |
|---|---|---|---|---|
| 1 | Base del repositorio | `main`, `docs/project-foundations` | Git, convenciones y documentación inicial | Hecho |
| 2 | Estructura de las aplicaciones | `chore/front-scaffold`, `chore/back-scaffold` | Front y back arrancan con su configuración base | Hecho |
| 3 | Docker | `chore/docker-setup` | `docker compose up` levanta front, back y base de datos | Hecho |
| 4 | Dirección de diseño | `feature/design-system` | Paleta, tipografías, tokens y lenguaje de movimiento | Pendiente |
| 5 | API de contacto | `feature/contact-api` | El formulario envía el mensaje por WebSocket; la API lo valida, lo guarda con Prisma y avisa por mail | Pendiente |
| 6 | Seguridad | `feature/security-hardening` | Controles de [SECURITY.md](SECURITY.md) implementados | Pendiente |
| 7 | Secciones del front | una rama `feature/` por sección | Sitio completo en español e inglés, responsive y accesible | Pendiente |
| 8 | Despliegue continuo | `chore/deploy-pipeline` | Push a `test` verifica y despliega front y API con GitHub Actions | En curso |

## Secciones del sitio

| Sección | Contenido |
|---|---|
| Hero | Nombre, rol y una frase de presentación con tipografía animada |
| Sobre mí | Quién soy, qué busco y cómo trabajo |
| Proyectos | Casos de estudio: problema, solución, tecnologías y resultado |
| Experiencia y formación | Línea de tiempo de trabajo, carrera y cursos |
| Stack | Tecnologías agrupadas por área |
| Contacto | Formulario y enlaces a GitHub y LinkedIn |

## Criterios de calidad

- **Rendimiento:** Lighthouse 90 o más en las cuatro categorías.
- **Accesibilidad:** navegación por teclado, contraste AA y respeto de `prefers-reduced-motion`.
- **Responsive:** diseñado desde 360 px de ancho.
- **Seguridad:** todos los controles de [SECURITY.md](SECURITY.md) en estado "Hecho" antes del despliegue.
- **Historial:** ramas y commits según [BRANCHING.md](BRANCHING.md).

## Hosting

| Parte | Servicio | Límite del plan gratuito |
|---|---|---|
| Front | GitHub Pages | Sitio estático, sin suspensión |
| API | Render (imagen Docker) | 512 MB de RAM; se suspende tras 15 minutos sin uso, mitigado con un keep-alive |
| Imagen de la API | GitHub Container Registry | Gratis para paquetes públicos |
| Base de datos | Neon (PostgreSQL) | 0,5 GB de almacenamiento |

Detalle del despliegue en [DEPLOY.md](DEPLOY.md).
