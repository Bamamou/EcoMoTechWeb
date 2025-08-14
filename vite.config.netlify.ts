import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Netlify-specific configuration
export default defineConfig({
  preview: {
    port: 8080,
  },
  plugins: [react()],
  base: '/',  // Root path for Netlify (different from GitHub Pages)
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
    chunkSizeWarningLimit: 1000,
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
    }
  }
});
