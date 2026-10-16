import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module.js';
import { ENV, type Env } from './config/env.js';
import { SecureIoAdapter } from './ws/socket-io.adapter.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const env = app.get<Env>(ENV);

  app.use(helmet());
  app.enableCors({ origin: env.CORS_ORIGIN, methods: ['GET'] });
  app.useWebSocketAdapter(new SecureIoAdapter(app, env.CORS_ORIGIN));
  app.enableShutdownHooks();

  // 0.0.0.0 para que la API sea accesible desde fuera del contenedor.
  await app.listen(env.PORT, '0.0.0.0');
}
await bootstrap();
