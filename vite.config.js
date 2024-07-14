// e-plantShopping/vite.config.js?

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'development' ? '/' : '/shoppingreact/',
  build: {
    outDir: 'dist',
  },
}));
