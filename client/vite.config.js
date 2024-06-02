import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // custom port 
    open: true, // Optional: Automatically open the app in the browser
  },
  build: {
    outDir: 'dist',
  },
  proxy: {
    '/graphql': {
      target: 'http://localhost:3001',
      secure: false,
      changeOrigin: true,
    },
  },
});