import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sergiogarciaweb.com',
  base: '/maitepsicologa',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
