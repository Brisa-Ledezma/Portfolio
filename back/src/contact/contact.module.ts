import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { ContactGateway } from './contact.gateway.js';
import { CONTACT_NOTIFIER, CONTACT_RATE_LIMITER, CONTACT_REPOSITORY } from './contact.ports.js';
import { ContactService } from './contact.service.js';
import { MailContactNotifier } from './mail-contact.notifier.js';
import { PrismaContactRepository } from './prisma-contact.repository.js';
import { RateLimiter } from './rate-limiter.js';

// Hasta 3 mensajes cada 10 minutos por IP.
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000;

@Module({
  providers: [
    PrismaService,
    ContactService,
    ContactGateway,
    { provide: CONTACT_REPOSITORY, useClass: PrismaContactRepository },
    { provide: CONTACT_NOTIFIER, useClass: MailContactNotifier },
    { provide: CONTACT_RATE_LIMITER, useFactory: () => new RateLimiter(RATE_LIMIT, RATE_WINDOW_MS) },
  ],
})
export class ContactModule {}
