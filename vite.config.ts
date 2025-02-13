import path from 'node:path';
import { reactRouter } from '@react-router/dev/vite';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ isSsrBuild, command }) => ({
  resolve: {
    alias: {
      '@types': path.resolve(__dirname, 'app/types'),
      '~': path.resolve(__dirname, './app'),
    },
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
    modules: {
      localsConvention: 'camelCase',
    },
  },
  ssr: {
    noExternal: command === 'build' ? true : undefined,
  },
  plugins: [reactRouter(), tsconfigPaths()],
  server: {
    allowedHosts: [
      '2jk8sj-3000.csb.app',
    ],
  },
}));
