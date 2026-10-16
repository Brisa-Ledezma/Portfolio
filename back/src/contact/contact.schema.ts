import { z } from 'zod';

// Reglas del formulario de contacto. Los límites de largo evitan abusos y
// coinciden con las columnas de la base.
export const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.email().max(254),
  message: z.string().trim().min(10).max(2000),
  // Campo trampa: invisible para las personas, los bots lo completan.
  website: z.string().max(200).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
