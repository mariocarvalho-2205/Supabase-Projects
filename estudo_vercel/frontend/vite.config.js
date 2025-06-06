import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/user": {
        target: "https://meu-backend.vercel.app", // Backend no Vercel
        changeOrigin: true,
      }
    }
  }
});