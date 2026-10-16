#!/bin/sh
# Aplica las migraciones pendientes antes de arrancar, solo si hay base configurada.
set -e
if [ -n "$DATABASE_URL" ]; then
  npx prisma migrate deploy
fi
exec node dist/main
