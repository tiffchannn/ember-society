import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Served from the root of embersociety.la
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      // second entry so /waiver/ resolves without client-side routing
      input: {
        main: resolve(__dirname, 'index.html'),
        waiver: resolve(__dirname, 'waiver/index.html'),
        privacy: resolve(__dirname, 'privacy/index.html'),
      },
    },
  },
})
