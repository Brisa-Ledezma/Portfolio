import { Inject, Injectable, Logger } from '@nestjs/common';
import {
  CONTACT_NOTIFIER,
  CONTACT_RATE_LIMITER,
  CONTACT_REPOSITORY,
  type ContactNotifier,
  type ContactRepository,
} from './contact.ports.js';
import { contactSchema } from './contact.schema.js';
import type { RateLimiter } from './rate-limiter.js';

function errorName(reason: unknown): string {
  return reason instanceof Error ? reason.name : 'UnknownError';
}

export type ContactResult =
  | { ok: true }
  | { ok: false; error: 'invalid' | 'rate_limited' | 'unavailable' };

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);

  constructor(
    @Inject(CONTACT_REPOSITORY) private readonly repository: ContactRepository,
    @Inject(CONTACT_NOTIFIER) private readonly notifier: ContactNotifier,
    @Inject(CONTACT_RATE_LIMITER) private readonly rateLimiter: RateLimiter,
  ) {}

  async send(payload: unknown, clientKey: string): Promise<ContactResult> {
    if (!this.rateLimiter.tryConsume(clientKey)) {
      this.logger.warn('Mensaje rechazado por límite de envíos');
      return { ok: false, error: 'rate_limited' };
    }

    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      this.logger.warn('Mensaje rechazado por datos inválidos');
      return { ok: false, error: 'invalid' };
    }

    const { website, ...message } = parsed.data;

    // Un bot completó el campo trampa: se responde como si se hubiera enviado,
    // para no darle pistas, pero no se guarda ni se avisa.
    if (website) {
      this.logger.warn('Mensaje descartado por el campo trampa');
      return { ok: true };
    }

    if (!this.repository.enabled && !this.notifier.enabled) {
      this.logger.error('Contacto sin destino: falta configurar base de datos y mail');
      return { ok: false, error: 'unavailable' };
    }

    // Se guarda y se avisa en paralelo. Si uno de los dos destinos falla pero el
    // otro funciona, el mensaje no se pierde y la persona recibe confirmación.
    const tasks: Promise<void>[] = [];
    if (this.repository.enabled) tasks.push(this.repository.save(message));
    if (this.notifier.enabled) tasks.push(this.notifier.notify(message));

    const results = await Promise.allSettled(tasks);
    for (const result of results) {
      if (result.status === 'rejected') {
        // Solo el tipo de error: nunca datos de la persona que escribió.
        this.logger.error(`Fallo al procesar un mensaje de contacto: ${errorName(result.reason)}`);
      }
    }

    return results.some((result) => result.status === 'fulfilled')
      ? { ok: true }
      : { ok: false, error: 'unavailable' };
  }
}
