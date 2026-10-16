import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import type { ContactMessage, ContactRepository } from './contact.ports.js';

// Guarda los mensajes en PostgreSQL. Prisma usa consultas parametrizadas,
// así que el contenido nunca se interpreta como SQL.
@Injectable()
export class PrismaContactRepository implements ContactRepository {
  constructor(private readonly prisma: PrismaService) {}

  get enabled(): boolean {
    return this.prisma.client !== null;
  }

  async save(message: ContactMessage): Promise<void> {
    if (!this.prisma.client) throw new Error('Base de datos no configurada');
    await this.prisma.client.contactMessage.create({ data: message });
  }
}
