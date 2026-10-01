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
| Infraestructura | Docker, Docker Compose, GitHub Actions |
| Hosting | Cloudflare Pages (front), Render (back), Neon (base de datos) |

## Requisitos

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) 28 o superior
- [Git](https://git-scm.com/)

No hace falta instalar Node ni PostgreSQL: corren dentro de los contenedores.

## Documentación

| Documento | Contenido |
|---|---|
| [docs/PLAN.md](docs/PLAN.md) | Fases de implementación y secciones del sitio |
| [docs/BRANCHING.md](docs/BRANCHING.md) | Flujo de ramas y convención de commits |
| [docs/SECURITY.md](docs/SECURITY.md) | Controles de seguridad según OWASP Top 10 |

## Autora

**Brisa Ledezma** — [GitHub](https://github.com/Brisa-Ledezma) · [LinkedIn](https://www.linkedin.com/in/brisa-ledezma)
