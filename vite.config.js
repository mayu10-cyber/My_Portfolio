import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/My_Portfolio/' : '/',
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    open: true,
    strictPort: false
  },
  preview: {
    port: 3000,
    host: true,
    open: true
  }
}));
