import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import pkg from './package.json';

// https://vitejs.dev/config/

export default defineConfig({
  build: {
    // prevents copying all files from public to output
    copyPublicDir: true,
    target: 'esnext',
    minify: false,
    sourcemap: true,
    emptyOutDir: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: {
        index: path.resolve(__dirname, 'src/index.js'),
      },
      formats: ['es', 'umd'],
      name: 'sap-threekit-module',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ['react', 'react-dom', 'react/jsx-runtime'].concat(
        Object.keys(pkg.peerDependencies || {}),
        Object.keys(pkg.devDependencies || {}),
        Object.keys(pkg.dependencies || {})
      ),

      output: {
        globals: {
          react: 'React',
          next: 'next',
          'react/jsx-runtime': 'react/jsx-runtime',
          'react-dom': 'ReactDOM',
        },
      },

      onwarn(warning, defaultHandler) {
        if (warning.code === 'SOURCEMAP_ERROR') {
          return;
        }
        defaultHandler(warning);
      },
    },
  },
  plugins: [react()],
});
