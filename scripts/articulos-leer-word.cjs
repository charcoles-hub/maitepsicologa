const fs = require('fs');
const x = fs.readFileSync(process.argv[2], 'utf8');
const ps = x.split('</w:p>').map((p) => p.slice(p.lastIndexOf('<w:p ')));
const ent = (s) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'");
const residuo = /\s*(Nice|Organización Mundial de la Salud|nhs\.uk|Psiquiatría|Maite Vicente)\s*$/;

const runs = (p) => {
  const out = [];
  const re = /<w:r[ >][\s\S]*?<\/w:r>/g;
  let m;
  while ((m = re.exec(p))) {
    const r = m[0];
    const b = /<w:b\/>/.test(r.split('</w:rPr>')[0]);
    const parts = r.split(/<w:br\/>/);
    parts.forEach((part, i) => {
      if (i > 0) out.push({ br: true });
      const t = [...part.matchAll(/<w:t(?: [^>]*)?>([^<]*)<\/w:t>/g)].map((a) => ent(a[1])).join('');
      if (t) out.push({ t, b });
    });
  }
  return out;
};
const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const html = (rs) => rs.filter((r) => !r.br).map((r) => (r.b ? `<strong>${esc(r.t)}</strong>` : esc(r.t))).join('').replace(/<\/strong><strong>/g, '').trim();
const plano = (rs) => rs.map((r) => (r.br ? '\n' : r.t)).join('').trim();

const articulos = [];
let art = null;
let notas = false;
let modo = 'cuerpo';
let grupo = null;

for (const p of ps) {
  const rs = runs(p);
  const t = plano(rs);
  if (!t) continue;
  const lv = (p.match(/<w:outlineLvl w:val="(\d)"/) || [])[1];
  const lista = /<w:numPr>/.test(p);

  if (lv === '0' && /— ARTÍCULO/.test(t)) {
    grupo = /NIÑOS/.test(t) ? 'infantil' : 'adultos';
    art = { grupo, titulo: null, seo: {}, bloques: [], faq: [], enlaces: '' };
    articulos.push(art);
    notas = false;
    modo = 'cuerpo';
    continue;
  }
  if (lv === '0' && /Estructura SEO|Cómo organizaría/.test(t)) { notas = true; art = null; continue; }
  if (notas || !grupo) continue;
  if (lv === '0') {
    if (art && art.titulo) {
      art = { grupo, titulo: null, seo: {}, bloques: [], faq: [], enlaces: '' };
      articulos.push(art);
      modo = 'cuerpo';
    }
    art.titulo = t;
    continue;
  }
  if (!art) continue;
  if (t === 'SEO') continue;
  if (/^Keyword/.test(t)) {
    const etiquetas = { Keyword: 'keyword', 'Keyword principal': 'keyword', Secundarias: 'secundarias', Slug: 'slug', 'Meta title': 'metaTitle', 'Meta description': 'metaDescription' };
    let actual = null;
    for (const r of rs) {
      if (r.br) continue;
      if (r.b && etiquetas[r.t.trim()]) { actual = etiquetas[r.t.trim()]; art.seo[actual] = ''; continue; }
      if (actual) art.seo[actual] += r.t;
    }
    for (const k in art.seo) art.seo[k] = art.seo[k].trim();
    continue;
  }
  if (/^Enlaces/.test(t)) { art.enlaces = t.replace(/^Enlaces( internos)?( recomendados)?\s*/, ''); continue; }
  if (/^(Preguntas frecuentes|FAQ)$/.test(t)) { modo = 'faq'; continue; }
  if (modo === 'faq') {
    const i = rs.findIndex((r) => r.br);
    if (i > 0) {
      art.faq.push({ q: plano(rs.slice(0, i)), a: plano(rs.slice(i + 1)).replace(residuo, '') });
      continue;
    }
    modo = 'cuerpo';
  }
  if (lv === '1') { art.bloques.push({ t: 'h2', x: t }); continue; }
  if (lv === '2') { art.bloques.push({ t: 'h3', x: t }); continue; }
  const limpio = t.replace(residuo, '');
  if (lista) {
    const ult = art.bloques[art.bloques.length - 1];
    if (ult && ult.t === 'ul') ult.x.push(limpio);
    else art.bloques.push({ t: 'ul', x: [limpio] });
    continue;
  }
  if (/^[“"«]/.test(limpio) && /[”"»][.,]?$/.test(limpio)) { art.bloques.push({ t: 'cita', x: limpio }); continue; }
  const negrita = rs.some((r) => r.b) && !rs.every((r) => r.br || r.b);
  art.bloques.push({ t: rs.every((r) => r.br || r.b) ? 'destacado' : 'p', x: limpio, h: negrita ? html(rs).replace(/\s*(Nice|Organización Mundial de la Salud|nhs\.uk|Psiquiatría|Maite Vicente)\s*(<\/strong>)?$/, '$2') : undefined });
}

fs.writeFileSync(process.argv[3], JSON.stringify(articulos, null, 1));
console.log(articulos.length);
articulos.forEach((a, i) => console.log(i, a.grupo, a.bloques.length, a.faq.length, a.seo.slug || '-', '|', a.titulo));
