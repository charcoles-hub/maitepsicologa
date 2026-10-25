const fs = require('fs');
const path = require('path');

const x = fs.readFileSync(process.argv[2], 'utf8');
const destino = path.resolve(__dirname, '../src/data/articulos.json');
const ent = (s) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'");
const esc = (t) => t.replace(/\.\.\./g, '…').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const parrafos = x.split('</w:p>').map((p) => {
  const estilo = (p.match(/<w:pStyle w:val="([^"]+)"/) || [])[1] || '';
  const runs = [...p.matchAll(/<w:r[ >][\s\S]*?<\/w:r>/g)].map(([r]) => ({
    b: /<w:b\/>/.test(r.split('</w:rPr>')[0]),
    t: [...r.matchAll(/<w:t(?: [^>]*)?>([^<]*)<\/w:t>/g)].map((a) => ent(a[1])).join(''),
  })).filter((r) => r.t);
  const t = runs.map((r) => r.t).join('').trim();
  const negrita = runs.length > 0 && runs.every((r) => r.b);
  const h = runs.map((r) => (r.b ? `<strong>${esc(r.t)}</strong>` : esc(r.t))).join('').replace(/<\/strong><strong>/g, '').trim();
  return { estilo, t, negrita, h };
}).filter((p) => p.t);

const campos = { 'Keyword principal': 'keyword', 'Slug recomendado': 'slug', 'Meta title': 'metaTitle', 'Meta description': 'metaDescription' };
const crudos = [];
let art = null;
let modo = null;
let campo = null;

for (const p of parrafos) {
  if (p.estilo === 'Heading1' && /^Bibliografía/.test(p.t)) break;
  if (p.negrita && /^ARTÍCULO \d+$/.test(p.t)) {
    art = { titulo: '', seo: {}, bloques: [], faq: [], enlaces: '' };
    crudos.push(art);
    modo = 'titulo';
    continue;
  }
  if (!art) continue;
  if (p.estilo === 'Heading1') { art.titulo = p.t; continue; }
  if (p.estilo === 'Heading2' && p.t === 'Ficha SEO') { modo = 'seo'; continue; }
  if (p.estilo === 'Heading2' && p.t === 'Preguntas frecuentes') { modo = 'faq'; continue; }
  if (p.estilo === 'Heading2' && /^Enlaces internos/.test(p.t)) { modo = 'enlaces'; continue; }
  if (p.negrita && /^CTA final/.test(p.t)) { modo = 'fin'; continue; }
  if (modo === 'fin') continue;
  if (modo === 'enlaces') { art.enlaces = p.t; continue; }
  if (modo === 'seo') {
    if (p.negrita) { campo = campos[p.t]; if (p.t === 'Intención de búsqueda') modo = 'intencion'; continue; }
    if (campo) art.seo[campo] = p.t;
    campo = null;
    continue;
  }
  if (modo === 'intencion') { modo = 'cuerpo'; continue; }
  if (modo === 'faq') {
    if (p.negrita) art.faq.push([p.t, '']);
    else art.faq[art.faq.length - 1][1] = p.t;
    continue;
  }
  if (p.estilo === 'Heading2') { art.bloques.push({ t: 'h2', h: esc(p.t) }); continue; }
  if (p.estilo === 'Heading3') { art.bloques.push({ t: 'h3', h: esc(p.t) }); continue; }
  if (p.estilo === 'ListBullet') {
    const ult = art.bloques[art.bloques.length - 1];
    if (ult && ult.t === 'ul') ult.items.push(p.h);
    else art.bloques.push({ t: 'ul', items: [p.h] });
    continue;
  }
  if (/^[“"«]/.test(p.t) && /[”"»][.,]?$/.test(p.t) && p.t.length < 90) { art.bloques.push({ t: 'cita', h: p.h }); continue; }
  art.bloques.push({ t: 'p', h: p.h });
}

const existentes = JSON.parse(fs.readFileSync(destino, 'utf8')).filter((a) => a.grupo !== 'pareja');
const slugDe = (re) => existentes.find((a) => a.grupo === 'adultos' && re.test(a.slug))?.slug;
const temas = [
  [/Comunicación/, () => crudos[0].seo.slug],
  [/Carga mental/, () => crudos[4].seo.slug],
  [/Pareja después de tener hijos/, () => crudos[6].seo.slug],
  [/Terapia familiar/, () => crudos[7].seo.slug],
  [/Dependencia emocional/, () => slugDe(/^dependencia-emocional/)],
  [/Gestión emocional/, () => slugDe(/^gestion-emocional/)],
  [/Autoestima/, () => slugDe(/^baja-autoestima-como/)],
];
const metaTitulos = { 'cuando-ir-terapia-pareja': '¿Cuándo ir a terapia de pareja? Sin esperar a romper' };
const palabras = (t) => t.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length;

const nuevos = crudos.map((a, i) => {
  const corte = a.bloques.findIndex((b) => b.t === 'h2');
  const relacionados = [];
  for (const [re, slug] of temas) if (re.test(a.enlaces) && slug() !== a.seo.slug && !relacionados.includes(slug())) relacionados.push(slug());
  for (let k = 1; relacionados.length < 3; k++) {
    const s = crudos[(i + k) % crudos.length].seo.slug;
    if (!relacionados.includes(s)) relacionados.push(s);
  }
  const total = palabras(a.titulo) + a.bloques.reduce((n, b) => n + (b.items ? b.items.reduce((m, y) => m + palabras(y), 0) : palabras(b.h)), 0) + a.faq.reduce((n, f) => n + palabras(f.join(' ')), 0);
  return {
    slug: a.seo.slug,
    grupo: 'pareja',
    titulo: a.titulo,
    metaTitle: metaTitulos[a.seo.slug] ?? a.seo.metaTitle,
    metaDescription: a.seo.metaDescription,
    keyword: a.seo.keyword,
    minutos: Math.max(3, Math.round(total / 200)),
    urgencias: false,
    intro: a.bloques.slice(0, corte),
    cuerpo: a.bloques.slice(corte),
    faq: a.faq,
    relacionados: relacionados.slice(0, 3),
  };
});

fs.writeFileSync(destino, JSON.stringify([...existentes, ...nuevos], null, 1) + '\n');
nuevos.forEach((a) => console.log(a.minutos, a.slug, a.intro.length, a.cuerpo.length, a.faq.length, '|', a.metaTitle, '|', a.relacionados.join(', ')));
