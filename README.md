# Portfolio — Brisa Ledezma

Portfolio personal full stack: un front animado y con identidad propia, y una API que le sirve el contenido y recibe los mensajes de contacto. Todo el proyecto corre en Docker.

> Estado: en construcción. El avance por fases está en [docs/PLAN.md](docs/PLAN.md).

## Estructura

```
Portfolio/
├── front/   Aplicación web (Vite + React + TypeScript + Tailwind CSS)
├── back/    API REST (NestJS + TypeScript + PostgreSQL)
└── docs/    Plan, flujo de ramas y seguridad
```

## Stack

| Capa | Tecnologías |
|---|---|
| Front | Vite, React, TypeScript, Tailwind CSS, GSAP, Motion, Lenis |
| Back | NestJS, TypeScript, PostgreSQL |
| Infraestructura | Docker, Docker Compose |
| Hosting (propuesto, a confirmar) | Cloudflare Pages (front), Render (back), Neon (base de datos) |

## Requisitos

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) 28 o superior
- [Git](https://git-scm.com/)

No hace falta instalar Node ni PostgreSQL: corren dentro de los contenedores.

## Cómo levantarlo

```bash
git clone https://github.com/Brisa-Ledezma/Portfolio.git
cd Portfolio
cp .env.example .env        # y completar la clave de la base de datos
docker compose up --build
```

| Servicio | URL |
|---|---|
| Front | http://localhost:5173 |
| API | http://localhost:3000/health |
| PostgreSQL | `localhost:5432` (solo desde esta máquina) |

Los cambios en `front/` y `back/` se recargan solos. Para detener todo: `docker compose down`. Los datos de la base quedan guardados en el volumen `db_data`; para borrarlos también, `docker compose down -v`.

### Imágenes de producción

```bash
docker build --target prod -t portfolio-front ./front
docker build --target prod -t portfolio-back ./back
```

## Documentación

| Documento | Contenido |
|---|---|
| [docs/PLAN.md](docs/PLAN.md) | Fases de implementación y secciones del sitio |
| [docs/BRANCHING.md](docs/BRANCHING.md) | Flujo de ramas y convención de commits |
| [docs/SECURITY.md](docs/SECURITY.md) | Controles de seguridad según OWASP Top 10 |

## Autora

**Brisa Ledezma** — [GitHub](https://github.com/Brisa-Ledezma) · [LinkedIn](https://www.linkedin.com/in/brisa-ledezma)
