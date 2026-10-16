import type { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { io, type Socket } from 'socket.io-client';
import { AppModule } from '../src/app.module.js';
import {
  CONTACT_NOTIFIER,
  CONTACT_REPOSITORY,
  type ContactMessage,
} from '../src/contact/contact.ports.js';
import { SecureIoAdapter } from '../src/ws/socket-io.adapter.js';

const ORIGIN = 'http://allowed.test';

describe('Contact (e2e)', () => {
  let app: INestApplication;
  let url: string;
  const saved: ContactMessage[] = [];
  const sent: ContactMessage[] = [];

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({ imports: [AppModule] })
      .overrideProvider(CONTACT_REPOSITORY)
      .useValue({ enabled: true, save: (m: ContactMessage) => (saved.push(m), Promise.resolve()) })
      .overrideProvider(CONTACT_NOTIFIER)
      .useValue({ enabled: true, notify: (m: ContactMessage) => (sent.push(m), Promise.resolve()) })
      .compile();

    app = moduleRef.createNestApplication();
    app.useWebSocketAdapter(new SecureIoAdapter(app, [ORIGIN]));
    await app.listen(0, '127.0.0.1');
    url = await app.getUrl();
  });

  afterAll(async () => {
    await app.close();
  });

  const connect = (origin = ORIGIN): Socket =>
    io(url, { transports: ['websocket'], extraHeaders: { origin }, reconnection: false });

  it('accepts a valid message over WebSocket and answers in the acknowledgement', async () => {
    const socket = connect();
    const result = await socket.timeout(5000).emitWithAck('contact:send', {
      name: 'Ana Pérez',
      email: 'ana@example.com',
      message: 'Hola, quería consultarte por un puesto.',
    });
    socket.disconnect();

    expect(result).toEqual({ ok: true });
    expect(saved).toHaveLength(1);
    expect(sent).toHaveLength(1);
  });

  it('refuses connections from origins that are not allowed', async () => {
    const socket = connect('http://evil.test');
    const error = await new Promise<Error>((resolve) => socket.on('connect_error', resolve));
    socket.disconnect();

    expect(error).toBeInstanceOf(Error);
  });

  it('rejects invalid payloads', async () => {
    const socket = connect();
    const result = await socket.timeout(5000).emitWithAck('contact:send', { name: 'x' });
    socket.disconnect();

    expect(result).toEqual({ ok: false, error: 'invalid' });
  });
});
