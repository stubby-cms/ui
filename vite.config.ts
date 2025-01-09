import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { peerDependencies } from './package.json';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import preserveDirectives from 'rollup-preserve-directives';

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
    preserveDirectives(),
  ],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    copyPublicDir: false,
    lib: {
      entry: {
        index: 'lib/index.ts',
        callout: 'lib/Callout/Callout.tsx',
        image: 'lib/Image/ImageZoom.tsx',
        code: 'lib/Code/Code.Server.tsx',
        codeClient: 'lib/Code/Code.Client.tsx',
        accordion: 'lib/Accordion/Accordion.tsx',
        typography: 'lib/Typography/Typography.tsx',
        utils: 'lib/utils.ts',
        steps: 'lib/Steps/Steps.tsx',
        tabs: 'lib/Tabs/Tabs.tsx',
      },
    },
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        'shiki',
        'hast-util-to-jsx-runtime',
        /^shiki\/.*/,
        ...Object.keys(peerDependencies),
      ],
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
