// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap' // <- import default

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://www.alefyxavier.com.br', // sem barra no final
      routes: [
        '/',
        '/skills',
        '/experience',
        '/work',
        '/contact',
        '/hero',
      ],
      // opcional:
      // changefreq: 'weekly',
      // priority: 1,
      // dest: 'public', // se quiser gerar em /public em vez de /dist
    }),
  ],
})
