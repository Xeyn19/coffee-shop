import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), tailwindcss()],
    server: {
      port: 3000,
    },
    base: mode === 'production'
      ? process.env.VITE_BASE_PATH || '/coffee-shop' 
      : '/', 
  };
});
