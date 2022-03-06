import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  logLevel: 'info',
  build: {
    minify: true,
    polyfillModulePreload: true,
    target: 'es6',
  },
});
