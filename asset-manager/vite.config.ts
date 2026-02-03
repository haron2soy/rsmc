import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
import path from "path";
import { metaImagesPlugin } from "./vite-plugin-meta-images"; // optional


export default defineConfig({
  root: path.resolve(__dirname, "client"), // <- folder containing index.html
  plugins: [
    react(),
    metaImagesPlugin(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  css: {
    postcss: {
      
      plugins: [],
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    host: true, // allows Windows browser access from WSL
    fs: {
      strict: true,
    },
  },
});
