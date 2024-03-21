/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy'
import yaml from '@modyfi/vite-plugin-yaml';
import { visualizer } from 'rollup-plugin-visualizer';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    yaml(),
    visualizer({}),
    dts({
      outDir: 'dist/types',
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/styles/*',
          dest: 'styles'
        },
        {
          src: 'src/fonts/*',
          dest: 'fonts'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    // This is not needed but can be customized if needed
    // extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      name: 'ReactComponentLibTemplate',
      formats: ['es', 'umd'],
      fileName: (format) => `react-components-lib-template.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});
