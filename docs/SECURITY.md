# Seguridad

El proyecto toma como referencia el [OWASP Top 10:2025](https://owasp.org/Top10/). Esta tabla indica qué control cubre cada riesgo. La columna "Estado" se actualiza a medida que cada control se implementa.

| Riesgo | Control en este proyecto | Estado |
|---|---|---|
| **A01 Broken Access Control** | La API no expone lectura de datos: el único endpoint de escritura es el de contacto. No hay panel de administración. CORS limitado al dominio del front. | Pendiente |
| **A02 Security Misconfiguration** | Headers seguros con Helmet y Content Security Policy. Swagger deshabilitado en producción. Contenedores sin usuario root. Configuración validada al arrancar. | Pendiente |
| **A03 Software Supply Chain Failures** | `package-lock.json` versionado e instalación con `npm ci`. `npm audit` antes de cada versión. Imágenes base de Docker con versión fija. | Pendiente |
| **A04 Cryptographic Failures** | HTTPS obligatorio en producción. Conexión a la base de datos con TLS. Secretos solo por variables de entorno, nunca en el repositorio. | Pendiente |
| **A05 Injection** | Consultas siempre parametrizadas a través del ORM. Validación y lista blanca de campos en cada DTO. React escapa el contenido por defecto; no se usa `dangerouslySetInnerHTML`. | Pendiente |
| **A06 Insecure Design** | Rate limiting global y más estricto en el formulario de contacto. Límites de tamaño en cada campo y en el cuerpo de la petición. Honeypot anti-spam. | Pendiente |
| **A07 Authentication Failures** | El sitio no tiene inicio de sesión ni cuentas de usuario, por lo que no hay credenciales que proteger. Si se agrega autenticación, este control se redefine antes de implementarla. | Pendiente |
| **A08 Software or Data Integrity Failures** | Despliegue solo desde `main`. Sin scripts de terceros cargados desde CDN. | Pendiente |
| **A09 Security Logging and Alerting Failures** | Logs estructurados con identificador por petición. Se registran rechazos de validación, de rate limit y de autenticación. Nunca se registran datos personales ni secretos. | Pendiente |
| **A10 Mishandling of Exceptional Conditions** | Filtro global de excepciones: el cliente recibe un mensaje genérico, el detalle queda en el log. Falla cerrada ante errores. Timeouts en llamadas externas. | Pendiente |

## Manejo de secretos

- Los valores reales viven en `.env` (ignorado por Git) en desarrollo y en el panel del proveedor de hosting en producción.
- `.env.example` documenta qué variables existen, sin valores reales.

## Reportar una vulnerabilidad

Escribir a brisaledezma000@gmail.com. No abrir un issue público.
