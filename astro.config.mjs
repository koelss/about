import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://koels.site',
  trailingSlash: 'never',
  output: 'static',
  build: { assets: '_assets', format: 'file' },
});
