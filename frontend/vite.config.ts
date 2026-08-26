import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { generateSitemapAndRobots } from './scripts/generate-seo.js'

function autoSeoPlugin(): Plugin {
  return {
    name: 'auto-seo-generator',
    buildStart() {
      try {
        generateSitemapAndRobots()
      } catch (err) {
        console.warn('Could not auto-generate sitemap during buildStart:', err)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), autoSeoPlugin()],
})
