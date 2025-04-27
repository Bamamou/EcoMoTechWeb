import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: true,
    port: 8080,
    open: true, // Automatically open the app in the browser
  },
  plugins: [react()],
  base: '/EcoMoTechWeb/', // Replace <repository-name> with your GitHub repository name
  resolve: {  
    alias: {
      "@": path.resolve(__dirname, "./src"),
      crypto: "crypto-browserify",
    },
  },
  define: {
    global: {},
    "process.env": {},
  },
}));
