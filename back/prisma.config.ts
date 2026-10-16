import { defineConfig } from 'prisma/config';

// Configuración del CLI de Prisma (migraciones y generación del cliente).
// La URL de la base llega por variable de entorno; sin ella, `prisma generate`
// funciona igual porque no necesita conectarse.
export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
