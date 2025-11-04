// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://www.alefyxavier.com.br',
      routes: ['/', '/skills', '/experience', '/work', '/contact', '/hero'],
    }),
  ],
  build: {
    // Aumenta o limite do aviso (padrão é 500 kB)
    chunkSizeWarningLimit: 1500,

    // Ajuda a separar libs grandes em chunks próprios
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          gsap: ['gsap', 'gsap/ScrollTrigger'],
        },
      },
    },
  },
})
