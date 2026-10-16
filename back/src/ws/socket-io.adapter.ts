import type { INestApplicationContext } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
import type { Server, ServerOptions } from 'socket.io';

// Adaptador de Socket.IO con las reglas de seguridad del proyecto:
// solo acepta conexiones de los orígenes permitidos y mensajes chicos.
export class SecureIoAdapter extends IoAdapter {
  constructor(
    app: INestApplicationContext,
    private readonly origins: string[],
  ) {
    super(app);
  }

  override createIOServer(port: number, options?: ServerOptions): Server {
    const secured: Partial<ServerOptions> = {
      ...options,
      cors: { origin: this.origins, methods: ['GET', 'POST'] },
      // 10 KB alcanzan de sobra para un mensaje de 2000 caracteres.
      maxHttpBufferSize: 10_000,
      // CORS no aplica a WebSocket en el navegador: el origen se valida acá.
      allowRequest: (request, callback) => {
        callback(null, this.origins.includes(request.headers.origin ?? ''));
      },
    };
    return super.createIOServer(port, secured as ServerOptions);
  }
}
