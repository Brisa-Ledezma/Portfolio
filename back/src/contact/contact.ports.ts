import type { ContactInput } from './contact.schema.js';

export type ContactMessage = Omit<ContactInput, 'website'>;

// Dónde se guardan los mensajes. La implementación real usa Prisma;
// los tests usan una en memoria.
export interface ContactRepository {
  readonly enabled: boolean;
  save(message: ContactMessage): Promise<void>;
}

// Cómo se avisa de un mensaje nuevo. La implementación real envía un mail.
export interface ContactNotifier {
  readonly enabled: boolean;
  notify(message: ContactMessage): Promise<void>;
}

export const CONTACT_REPOSITORY = Symbol('CONTACT_REPOSITORY');
export const CONTACT_NOTIFIER = Symbol('CONTACT_NOTIFIER');
export const CONTACT_RATE_LIMITER = Symbol('CONTACT_RATE_LIMITER');
