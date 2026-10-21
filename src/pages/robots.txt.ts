import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const publica = ['www.maitepsicologa.com', 'maitepsicologa.com'].includes(site?.hostname ?? '');
  const mapa = new URL(`${import.meta.env.BASE_URL.replace(/\/?$/, '/')}sitemap-index.xml`, site);
  const reglas = publica ? 'Allow: /' : 'Disallow: /';
  return new Response(`User-agent: *\n${reglas}\n\nSitemap: ${mapa.href}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
