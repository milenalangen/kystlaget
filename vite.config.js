import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ["**/*"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/www\.yr\.no\/api\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'yr-api-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 // 24 hours
              }
            }
          }
        ]
      },
      includeAssets: ["**/*"],
      manifest: {
        name: 'Kystlaget Trondhjem',
        short_name: 'Kystlaget',
        description: 'Boat booking and key management system',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
    }),
  ],
  server: {
    proxy: {
      "/locations": {
        target: "https://www.yr.no/api/v0",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
      "/api": {
        target: "https://depositbox.api.narverk.no",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
      "/tide": {
        target: "https://api.stormglass.io/v2",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
