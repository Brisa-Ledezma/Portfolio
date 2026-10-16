# Seguridad

El proyecto toma como referencia el [OWASP Top 10:2025](https://owasp.org/Top10/). Esta tabla indica qué control cubre cada riesgo. La columna "Estado" se actualiza a medida que cada control se implementa.

| Riesgo | Control en este proyecto | Estado |
|---|---|---|
| **A01 Broken Access Control** | La API no expone lectura de datos: el único punto de escritura es el envío de contacto por WebSocket. No hay panel de administración. CORS y WebSocket limitados al dominio del front (el origen se valida en cada conexión). | Hecho |
| **A02 Security Misconfiguration** | Headers seguros con Helmet. Contenedores sin usuario root. Configuración validada al arrancar con zod: si algo falta o es inválido, la API no inicia. | Hecho |
| **A03 Software Supply Chain Failures** | `package-lock.json` versionado e instalación con `npm ci`. `npm audit` antes de cada versión. Acciones de GitHub fijadas por versión mayor. Imágenes base de Docker con versión fija. | Hecho |
| **A04 Cryptographic Failures** | HTTPS en GitHub Pages y Render. Conexión a la base de datos con TLS (Neon lo exige). Secretos solo por variables de entorno, nunca en el repositorio; la contraseña de Gmail es una contraseña de aplicación revocable. | Hecho |
| **A05 Injection** | Consultas parametrizadas a través de Prisma. Validación con lista blanca de campos y largos máximos en cada mensaje. El mail de aviso es texto plano y el asunto elimina saltos de línea (sin inyección de encabezados). React escapa el contenido por defecto; no se usa `dangerouslySetInnerHTML`. | Hecho |
| **A06 Insecure Design** | Límite de 3 mensajes cada 10 minutos por IP (tomando la IP que agrega el proxy, no la que puede inventar el cliente). Tamaño máximo de 10 KB por mensaje de WebSocket. Campo trampa anti-spam. | Hecho |
| **A07 Authentication Failures** | El sitio no tiene inicio de sesión ni cuentas de usuario, por lo que no hay credenciales que proteger. Si se agrega autenticación, este control se redefine antes de implementarla. | No aplica |
| **A08 Software or Data Integrity Failures** | Despliegue solo por GitHub Actions y solo si pasan lint, tipos y tests. Secretos de despliegue guardados como GitHub Secrets. Sin scripts de terceros cargados desde CDN. | Hecho |
| **A09 Security Logging and Alerting Failures** | Se registran los rechazos por validación, por límite de envíos y por campo trampa, y los fallos al guardar o enviar. Los logs nunca incluyen datos de quien escribe ni secretos. | Hecho |
| **A10 Mishandling of Exceptional Conditions** | Falla cerrada: una configuración inválida impide arrancar. Si falla un destino del mensaje (base o mail), el otro igual lo entrega; si fallan los dos, la persona recibe un error genérico y el detalle queda en el log. Timeouts en la conexión SMTP y en el envío desde el front. | Hecho |

## Manejo de secretos

- Los valores reales viven en `.env` (ignorado por Git) en desarrollo y en el panel del proveedor de hosting en producción.
- `.env.example` documenta qué variables existen, sin valores reales.

## Reportar una vulnerabilidad

Escribir a brisaledezma000@gmail.com. No abrir un issue público.
