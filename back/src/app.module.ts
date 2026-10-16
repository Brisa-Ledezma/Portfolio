import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module.js';
import { ContactModule } from './contact/contact.module.js';
import { HealthModule } from './health/health.module.js';
import { RootController } from './root/root.controller.js';

@Module({
  imports: [ConfigModule, HealthModule, ContactModule],
  controllers: [RootController],
})
export class AppModule {}
