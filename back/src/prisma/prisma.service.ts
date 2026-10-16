import { Inject, Injectable, type OnModuleDestroy } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { ENV, type Env } from '../config/env.js';
import { PrismaClient } from '../generated/prisma/client.js';

// Cliente de Prisma compartido. Solo se crea si hay DATABASE_URL: la API puede
// funcionar sin base (por ejemplo, solo enviando mails).
@Injectable()
export class PrismaService implements OnModuleDestroy {
  readonly client: PrismaClient | null;

  constructor(@Inject(ENV) env: Env) {
    this.client = env.DATABASE_URL
      ? new PrismaClient({ adapter: new PrismaPg({ connectionString: env.DATABASE_URL }) })
      : null;
  }

  async onModuleDestroy(): Promise<void> {
    await this.client?.$disconnect();
  }
}
