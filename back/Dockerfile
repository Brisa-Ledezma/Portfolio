# syntax=docker/dockerfile:1

FROM node:24-alpine AS base
WORKDIR /app
COPY package.json package-lock.json ./

# Desarrollo: NestJS en modo watch. El código se monta como volumen.
FROM base AS dev
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start:dev"]

FROM base AS build
RUN npm ci
COPY . .
RUN npm run build

# Producción: solo dependencias de ejecución y usuario sin privilegios.
FROM base AS prod
ENV NODE_ENV=production
RUN npm ci --omit=dev && npm cache clean --force
COPY --from=build /app/dist ./dist
USER node
EXPOSE 3000
CMD ["node", "dist/main"]
