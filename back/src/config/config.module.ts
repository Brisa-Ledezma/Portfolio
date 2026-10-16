import { Global, Module } from '@nestjs/common';
import { ENV, loadEnv } from './env.js';

// Expone la configuración validada al resto de la aplicación por inyección.
@Global()
@Module({
  providers: [{ provide: ENV, useFactory: () => loadEnv() }],
  exports: [ENV],
})
export class ConfigModule {}
