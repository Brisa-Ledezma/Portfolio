import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module.js';
import { RootController } from './root/root.controller.js';

@Module({
  imports: [HealthModule],
  controllers: [RootController],
})
export class AppModule {}
