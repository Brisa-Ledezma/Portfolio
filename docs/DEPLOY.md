# Despliegue

## Cómo funciona

Hacer push a la rama `test` despliega todo automáticamente. No hace falta compilar, construir imágenes ni subir nada a mano.

```
push a test
   │
   ├─ Front: lint → tipos → build ──────────────► GitHub Pages
   │
   └─ Back: lint → tests → build → imagen Docker ─► GitHub Container Registry ─► Render
```

El avance se ve en la pestaña **Actions** del repositorio, en el workflow **Deploy test**. Cada paso tiene su propio check: si algo falla (un test, el lint, el build), no se despliega nada de esa parte.

| Parte | Dónde vive | Dirección |
|---|---|---|
| Front | GitHub Pages | [brisa-ledezma.github.io/Portfolio](https://brisa-ledezma.github.io/Portfolio/) |
| API | Render (plan gratuito, imagen Docker) | la que asigna Render, por ejemplo `https://portfolio-api.onrender.com` |
| Imagen de la API | GitHub Container Registry | `ghcr.io/brisa-ledezma/portfolio-api` |

Workflows:

| Archivo | Qué hace |
|---|---|
| [.github/workflows/deploy-test.yml](../.github/workflows/deploy-test.yml) | Verifica, construye y despliega front y API en cada push a `test` |
| [.github/workflows/keep-api-awake.yml](../.github/workflows/keep-api-awake.yml) | Consulta la API cada 10 minutos para que no se duerma |

## Publicar un cambio

```bash
git switch test
git merge develop      # o los cambios que quieras probar
git push
```

## Configuración inicial (una sola vez)

### 1. GitHub Pages

1. En el repositorio: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. **Settings → Environments → github-pages → Deployment branches and tags**: agregar la rama `test`. Por defecto GitHub solo deja desplegar Pages desde la rama principal.

### 2. Render (API)

1. Crear una cuenta en [render.com](https://render.com) entrando con GitHub.
2. Hacer un primer push a `test` para que exista la imagen. Después, en GitHub, ir a **Packages → portfolio-api → Package settings** y cambiar la visibilidad a **Public**, para que Render pueda descargarla.
3. En Render: **New → Web Service → Existing image**, con la imagen `ghcr.io/brisa-ledezma/portfolio-api:test` y el plan **Free**.
4. En el servicio: **Settings → Deploy Hook**, copiar la URL.

### 3. Datos para el pipeline

En GitHub, **Settings → Secrets and variables → Actions**:

| Tipo | Nombre | Valor |
|---|---|---|
| Secret | `RENDER_DEPLOY_HOOK_URL` | La URL del deploy hook de Render |
| Variable | `API_URL` | La dirección pública de la API, sin barra final |

Mientras falte el deploy hook, el pipeline igual verifica todo, publica la imagen y despliega el front; solo deja un aviso de que la API no se desplegó.

## Por qué la API casi no se duerme

El plan gratuito de Render apaga la API tras 15 minutos sin tráfico y tarda cerca de un minuto en encenderla. Hay dos medidas:

1. **Mantener despierta:** `keep-api-awake.yml` la consulta cada 10 minutos. Con un solo servicio, las 750 horas mensuales gratuitas alcanzan para todo el mes.
2. **Despertar anticipado:** el front le envía un pedido apenas se abre el sitio ([front/src/lib/api.ts](../front/src/lib/api.ts)). Si estaba dormida, despierta mientras la persona recorre la página.

Límites a tener en cuenta:

- GitHub ejecuta los workflows programados solo desde la rama por defecto del repositorio (`main`): el keep-alive empieza a funcionar cuando ese archivo llega a `main`.
- GitHub puede demorar algunos minutos las ejecuciones programadas, así que puede haber dormidas ocasionales.
- Si Render cambia las condiciones de su plan gratuito, la alternativa es un servicio de cron externo (por ejemplo cron-job.org) apuntando a `/health`.
