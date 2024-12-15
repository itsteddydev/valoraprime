import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    // devOptions: {
    //   enabled: true
    // },
    // injectRegister: 'auto',
    // includeAssets: ['vite.svg'],
    workbox: {
      globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
    },
    manifest: {
      name: "ValoraPrime",
      short_name: "ValoraPrime",
      description: "Tu herramienta fundamental para valorar y gestionar tus finanzas personales de manera profesional",
      theme_color: '#ffffff',
      icons: [
        {
          src: './public/vite.svg',
          sizes: '192x192',
          type: 'image/svg+xml'
        },
      ]
    }
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
