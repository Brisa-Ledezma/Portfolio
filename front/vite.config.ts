import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  // Ruta base del sitio. En GitHub Pages de proyecto es /<repo>/; el pipeline la define.
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  server: {
    // Necesario para que el servidor sea accesible desde fuera del contenedor.
    host: true,
    port: 5173,
    watch: { usePolling: process.env.VITE_USE_POLLING === 'true' },
  },
})
