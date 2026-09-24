import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served from the root of embersociety.la
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
