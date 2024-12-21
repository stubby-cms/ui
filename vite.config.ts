import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { peerDependencies } from './package.json';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      rollupTypes: true,
      include: ['lib'],
    }), // Output .d.ts files
  ],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    copyPublicDir: false,
    lib: {
      entry: {
        callout: 'lib/Callout/Callout.tsx',
        code: 'lib/Code/Code.tsx',
        image: 'lib/Image/ImageZoom.tsx',
        article: 'lib/Article/Article.tsx',
        accordion: 'lib/Accordion/Accordion.tsx',
        typography: 'lib/Typography/Typography.tsx',
        utils: 'lib/utils.ts',
      },
    },
    rollupOptions: {
      external: ['react/jsx-runtime', ...Object.keys(peerDependencies)],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or "modern", "legacy"
      },
    },
  },
});
