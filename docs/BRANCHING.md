# Flujo de ramas y commits

## Ramas

| Rama | Propósito | Se crea desde | Se integra en |
|---|---|---|---|
| `main` | Lo que está en producción. Cada commit es desplegable. | — | — |
| `develop` | Integración del trabajo terminado. | `main` | `test` y `main` |
| `test` | Entorno de pruebas publicado. Cada push se despliega solo (ver [DEPLOY.md](DEPLOY.md)). | `develop` | `main` (al publicar una versión) |
| `feature/<nombre>` | Una funcionalidad nueva. | `develop` | `develop` |
| `fix/<nombre>` | Corrección de un error. | `develop` | `develop` |
| `docs/<nombre>` | Solo documentación. | `develop` | `develop` |
| `chore/<nombre>` | Configuración, dependencias, infraestructura. | `develop` | `develop` |
| `hotfix/<nombre>` | Corrección urgente en producción. | `main` | `main` y `develop` |

Reglas:

- Nunca se trabaja directo sobre `main` ni `develop`.
- Una rama, una funcionalidad. Nombres en minúscula y con guiones: `feature/contact-form`.
- La integración se hace con merge sin fast-forward (`git merge --no-ff`), para que cada funcionalidad quede visible como unidad en el historial.
- La rama se borra una vez integrada.

## Ciclo de una funcionalidad

```bash
git switch develop
git pull
git switch -c feature/contact-form

# ... commits ...

git switch develop
git merge --no-ff feature/contact-form
git push origin develop
git branch -d feature/contact-form
```

## Probar en el entorno publicado

```bash
git switch test
git merge --no-ff develop
git push origin test      # GitHub Actions verifica y despliega
```

## Publicar una versión

```bash
git switch main
git merge --no-ff develop
git tag -a v0.1.0 -m "v0.1.0"
git push origin main --tags
```

Las versiones siguen [Semantic Versioning](https://semver.org/lang/es/).

## Commits

Se usa [Conventional Commits](https://www.conventionalcommits.org/es/):

```
<tipo>(<alcance>): <descripción en imperativo, minúscula, sin punto final>
```

| Tipo | Uso |
|---|---|
| `feat` | Funcionalidad nueva |
| `fix` | Corrección de un error |
| `docs` | Documentación |
| `style` | Formato, sin cambios de lógica |
| `refactor` | Cambio interno que no altera el comportamiento |
| `test` | Tests |
| `chore` | Configuración, dependencias, tareas de mantenimiento |
| `ci` | Workflows de integración y despliegue |
| `perf` | Mejora de rendimiento |

Alcances: `front`, `back`, `docker`, `repo`, `deploy`.

Ejemplos:

```
feat(front): add animated hero section
fix(back): reject contact messages over the length limit
chore(docker): add postgres service with persistent volume
```

Cada commit contiene un solo cambio lógico y deja el proyecto en un estado que compila.
