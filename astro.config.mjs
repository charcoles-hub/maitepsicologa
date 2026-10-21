import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://charcoles-hub.github.io',
  base: '/maitepsicologa',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
