import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import Unfonts from 'unplugin-fonts/vite';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    Unfonts({
      google: { families: [{ name: 'Inter' }, { name: 'Noto Sans JP' }] },
    }),
  ],
});
