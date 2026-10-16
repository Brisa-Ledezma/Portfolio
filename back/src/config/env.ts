import { z } from 'zod';

// Variables de entorno validadas al arrancar: si falta algo obligatorio o tiene
// un formato inválido, la API no inicia (falla cerrada en vez de a medias).
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().positive().default(3000),

  // Orígenes permitidos para CORS y WebSocket, separados por coma.
  CORS_ORIGIN: z
    .string()
    .default('http://localhost:5173')
    .transform((value) =>
      value
        .split(',')
        .map((origin) => origin.trim())
        .filter(Boolean),
    ),

  // Opcional: sin base de datos, los mensajes solo se envían por mail.
  DATABASE_URL: z.url().optional(),

  // Opcional: sin SMTP, los mensajes solo se guardan en la base.
  SMTP_HOST: z.string().default('smtp.gmail.com'),
  SMTP_PORT: z.coerce.number().int().positive().default(465),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  MAIL_TO: z.email().optional(),
});

export type Env = z.infer<typeof envSchema>;

export function loadEnv(source: NodeJS.ProcessEnv = process.env): Env {
  const result = envSchema.safeParse(source);
  if (!result.success) {
    const fields = result.error.issues.map((issue) => issue.path.join('.')).join(', ');
    throw new Error(`Configuración inválida en: ${fields}`);
  }
  return result.data;
}

export const ENV = Symbol('ENV');
