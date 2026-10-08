import { Controller, Get } from '@nestjs/common';

// Respuesta de la raíz: identifica el servicio y lista los endpoints públicos,
// en lugar de devolver 404 a quien abra la URL de la API en el navegador.
@Controller()
export class RootController {
  @Get()
  info(): { name: string; status: 'ok'; endpoints: string[] } {
    return {
      name: 'portfolio-api',
      status: 'ok',
      endpoints: ['GET /health'],
    };
  }
}
