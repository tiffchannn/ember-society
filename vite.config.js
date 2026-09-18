import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base must match the GitHub Pages repo name (https://<user>.github.io/ember-society/)
export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/ember-society/' : '/',
  plugins: [react(), tailwindcss()],
})
