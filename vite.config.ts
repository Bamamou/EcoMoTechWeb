import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from 'vite-plugin-pwa';
import { visualizer } from 'rollup-plugin-visualizer';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({

  preview: {
    port: 8080,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,gif,webp,woff,woff2}'],
        maximumFileSizeToCacheInBytes: 8000000, // 8MB limit
        globIgnores: [
          '**/images/News/team.jpg',
          '**/images/Services/*.png',
          '**/images/Services/*.jpg'
        ]
      },
      manifest: {
        name: 'EcoMoTech - Sustainable Energy Solutions',
        short_name: 'EcoMoTech',
        description: 'Leading provider of solar PV systems, electric mobility solutions, and sustainable energy technologies in West Africa',
        theme_color: '#38b635',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'images/log.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'images/log.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
    visualizer({
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    })
  ],
  base: '/',  // Changed from '/EcoMoTechWeb/' to '/' for subdomain deployment
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      }
    }
  },
  resolve: {  
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 3000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-components': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-tabs',
            '@radix-ui/react-tooltip'
          ],
          'chart-vendor': ['recharts'],
          'utils-vendor': ['date-fns', 'clsx', 'tailwind-merge'],
          'form-vendor': ['@tanstack/react-query', 'zod']
        }
      }
    },
    // Ensure .htaccess and other static files are copied
    copyPublicDir: true
  }
});
