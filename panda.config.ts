import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  exclude: [],
  theme: {
    extend: {},
  },
  jsxFramework: 'react',
  syntax: 'template-literal',
  outdir: 'styled-system',
});
