import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    filename: "m-service-worker.js",
    selfDestroying: true,
    manifest: {
      background_color: "red",
      categories: ["test"],
      description: "a pwa web app",
      name: "my pwa"
    },
    registerType: 'autoUpdate'
  })]
})
