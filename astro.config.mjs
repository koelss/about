import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://koels.site',
  integrations: [tailwind()],
  output: 'static',
  build: { assets: '_assets' },
});
