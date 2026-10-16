import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import type { Socket } from 'socket.io';
import { ContactService, type ContactResult } from './contact.service.js';

// Recibe los mensajes del formulario por WebSocket. La respuesta viaja en el
// acknowledgement del mismo evento, así el front sabe enseguida cómo terminó.
// CORS y tamaño máximo del mensaje se configuran en el adaptador (main.ts).
@WebSocketGateway()
export class ContactGateway {
  constructor(private readonly contact: ContactService) {}

  @SubscribeMessage('contact:send')
  handleSend(@MessageBody() payload: unknown, @ConnectedSocket() client: Socket): Promise<ContactResult> {
    return this.contact.send(payload, clientIp(client));
  }
}

// Detrás del proxy del hosting, la IP real llega en X-Forwarded-For. Se toma la
// ÚLTIMA entrada, que es la que agrega el proxy: las anteriores las puede inventar
// el cliente para esquivar el límite de envíos.
function clientIp(client: Socket): string {
  const forwarded = client.handshake.headers['x-forwarded-for'];
  const last = (Array.isArray(forwarded) ? forwarded.at(-1) : forwarded)?.split(',').at(-1)?.trim();
  return last || client.handshake.address;
}
