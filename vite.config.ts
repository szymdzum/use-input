import path from 'node:path';
import { reactRouter } from '@react-router/dev/vite';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ isSsrBuild, command }) => ({
  resolve: {
    alias: {
      '@types': path.resolve(__dirname, 'app/types')
    }
  },
  build: {
    rollupOptions: isSsrBuild
      ? {
          input: './server/app.ts',
        }
      : undefined,
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  ssr: {
    noExternal: command === 'build' ? true : undefined,
  },
  plugins: [reactRouter(), tsconfigPaths()],
}));
