import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// for remove service worker use this settings
/**
 *     
  filename: "m-service-worker.js", // use exact file name as previous
  selfDestroying: true,
  manifest: false,
  registerType: "autoUpdate"
 */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    filename: "m-service-worker.js",
    selfDestroying: true,
    // injectRegister: 'auto',
    manifest: {
      name: "my pwa",
      short_name: "a short name",
      description: "a pwa web app",
      theme_color: "#1a1a1a",
      background_color: "#1a1a1a",
      categories: ["test"],
      icons: [
        {
          src: 'logo.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'logo-512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    registerType: 'autoUpdate',
    strategies: "injectManifest",
    workbox: {
      skipWaiting: true
    }
  })]
})
