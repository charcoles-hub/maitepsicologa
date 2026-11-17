import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { redirecciones } from './redirecciones.mjs';

const base = '/maitepsicologa';
const prefijo = base === '/' ? '' : base;

export default defineConfig({
  site: 'https://sergiogarciaweb.com',
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
  redirects: Object.fromEntries(Object.entries(redirecciones).map(([origen, destino]) => [origen, prefijo + destino])),
});
