const fs = require('fs');
const crudos = require(require('path').resolve(process.argv[3]));
const destino = process.argv[2];
const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const titulos = {
  1: 'Ataques de pánico: por qué ocurren y cómo dejar de tener miedo a que vuelvan',
  2: 'Gestión emocional: aprender a regular lo que sentimos sin intentar controlarlo todo',
  3: 'TOC y pensamientos obsesivos: por qué intentar controlarlos puede hacerlos más fuertes',
  5: 'Baja autoestima: por qué “tienes que quererte más” no suele ser suficiente',
  6: 'Dependencia emocional: cómo saber si el miedo a perder a alguien está dirigiendo tu vida',
  7: 'Burnout y estrés laboral: cuando descansar el fin de semana ya no es suficiente',
  8: 'Duelo: ¿cuánto dura y cuándo puede ser recomendable pedir ayuda?',
  9: 'TDAH en adultos: procrastinación, organización y sensación de no llegar a todo',
  10: 'Ansiedad en niños y adolescentes: señales que no siempre parecen ansiedad',
  11: 'Ansiedad social en adolescentes: cuando hablar, salir o ir al instituto se convierte en una amenaza',
  12: 'TDAH en niños y adolescentes: cuando saber lo que hay que hacer no significa poder hacerlo',
  13: 'Gestión emocional en niños mayores y adolescentes: cuando el enfado parece ocuparlo todo',
  14: 'Baja autoestima en adolescentes: cómo ayudar sin limitarse a decir “eres genial”',
  15: 'Depresión en adolescentes: cuando el malestar no siempre parece tristeza',
  16: 'Autolesiones en adolescentes: por qué pueden aparecer y cómo actuar',
  17: 'Bullying y acoso escolar: cómo detectarlo y qué hacer si tu hijo no quiere hablar',
  18: 'TCA en adolescentes: primeras señales que conviene observar',
  19: 'TOC en niños y adolescentes: cuando las dudas y rituales empiezan a controlar su día',
};

const seoNuevo = {
  0: { slug: 'como-saber-si-tengo-ansiedad-sintomas', keyword: 'síntomas de ansiedad', metaTitle: '¿Cómo saber si tengo ansiedad? Síntomas y señales', metaDescription: 'La ansiedad no siempre se nota como nervios: también aparece en el cuerpo, en los pensamientos y en lo que evitamos. Señales y cuándo pedir ayuda.' },
  1: { slug: 'ataques-de-panico-por-que-ocurren', keyword: 'ataques de pánico', metaTitle: 'Ataques de pánico: por qué ocurren y cómo dejar de temerlos', metaDescription: 'Qué pasa en el cuerpo durante un ataque de pánico, por qué aparece el miedo a que vuelva y cómo se trabaja en terapia.' },
  2: { slug: 'gestion-emocional-regular-emociones', keyword: 'gestión emocional', metaTitle: 'Gestión emocional: regular lo que sentimos sin controlarlo todo', metaDescription: 'Las emociones no se apagan con un interruptor. Cuatro pasos para empezar a regularlas y cómo se trabaja la gestión emocional en terapia.' },
  3: { slug: 'toc-pensamientos-obsesivos-adultos', keyword: 'TOC pensamientos obsesivos', metaTitle: 'TOC y pensamientos obsesivos: por qué controlarlos los refuerza', metaDescription: 'Obsesiones, compulsiones y búsqueda de certeza: cómo funciona el círculo del TOC y qué tratamiento psicológico tiene más respaldo.' },
};

const metaTitulos = {
  13: 'Gestión emocional en adolescentes: enfado e impulsividad',
  17: 'Bullying: señales de acoso escolar y qué pueden hacer los padres',
};

const arreglos = [
  ['manteniendo el problema evitar', 'manteniendo el problema: evitar'],
  ['sesión ordinaria es necesario', 'sesión ordinaria: es necesario'],
  ['empeoran el problema discutir', 'empeoran el problema: discutir'],
  ['Sí pueden existir', 'Sí, pueden existir'],
  ['Un error frecuente decirle', 'Un error frecuente: decirle'],
];
const arreglar = (t) => arreglos.reduce((s, [a, b]) => s.split(a).join(b), t);

const temas = {
  adultos: [[/ansiedad/i, 0], [/pánico|miedos/i, 1], [/gesti[oó]n emocional/i, 2], [/TOC|obsesiv/i, 3], [/depresi/i, 4], [/autoestima/i, 5], [/dependencia/i, 6], [/estr[eé]s|burnout/i, 7], [/duelo/i, 8], [/TDAH/i, 9]],
  infantil: [[/ansiedad/i, 10], [/TDAH/i, 12], [/gesti[oó]n emocional/i, 13], [/autoestima/i, 14], [/depresi/i, 15], [/autolesi/i, 16], [/bullying/i, 17], [/TCA/i, 18], [/TOC/i, 19]],
};
const urgencias = new Set([4, 8, 15, 16]);
const palabras = (t) => t.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length;

const salida = crudos.map((a, i) => {
  const titulo = titulos[i] ?? a.titulo.trim();
  const seo = { ...a.seo, ...(seoNuevo[i] ?? {}) };
  const prefijo = titulo.split(':')[0];
  let metaTitle = metaTitulos[i] ?? seo.metaTitle;
  if (!titulos[i] || seoNuevo[i] || metaTitulos[i]) metaTitle = metaTitle;
  else if (metaTitle.startsWith(prefijo + ' ')) metaTitle = prefijo + ':' + metaTitle.slice(prefijo.length);

  const bloques = a.bloques.map((b, j) => {
    if (b.t === 'ul') return { t: 'ul', items: b.x.map((x) => esc(arreglar(x.trim()))) };
    let h = b.h ?? esc(b.x.trim());
    h = arreglar(h);
    const siguiente = a.bloques[j + 1];
    const plano = h.replace(/<[^>]*>/g, '');
    if ((b.t === 'p' || b.t === 'destacado') && siguiente && !/[.?!:…”»)]$/.test(plano) && !['en', 'que'].includes(plano)) h += ':';
    return { t: b.t, h };
  });
  const plano = (b) => (b.h ?? '').replace(/<[^>]*>/g, '');
  const linea = (b) => b && b.t === 'p' && plano(b).length <= 75 && /\.$/.test(plano(b)) && !/, /.test(plano(b)) && !/^[“"«]/.test(plano(b)) && !/^(Pero|Sin embargo|Aunque|Por eso|Por ello|Esto|Así|Eso|Ese|Esa|Esta|Este|Estas|Estos|Ninguno|Ninguna|Todo|Cuando|Si |No todas|Es |Nada|La persona|El objetivo|Normalmente|Precisamente|Se |También|Dos |Desde|Debemos|Hay |Lo |El adolescente|El objetivo|Los |La |En terapia|Siempre|Las |No debemos|No buscamos|No hace|No necesitamos|No pretendemos|No significa|No es )/.test(plano(b));
  for (let j = 0; j < bloques.length; j++) {
    const b = bloques[j];
    if (!(b.t === 'p' || b.t === 'destacado') || !/:$/.test(plano(b))) continue;
    let k = j + 1;
    while (linea(bloques[k])) k++;
    if (k - (j + 1) >= 2) bloques.splice(j + 1, k - (j + 1), { t: 'ul', items: bloques.slice(j + 1, k).map((x) => x.h) });
  }
  const corta = (b) => b && b.t === 'p' && plano(b).length <= 40;
  bloques.forEach((b, j) => { if (corta(b) && (corta(bloques[j - 1]) || corta(bloques[j + 1]))) b.corta = true; });
  const corte = bloques.findIndex((b) => b.t === 'h2');
  const intro = bloques.slice(0, corte);
  const cuerpo = bloques.slice(corte);

  const relacionados = [];
  for (const [re, k] of temas[a.grupo]) if (re.test(a.enlaces) && k !== i && !relacionados.includes(k)) relacionados.push(k);
  for (const [, k] of temas[a.grupo]) if (relacionados.length < 3 && k !== i && !relacionados.includes(k)) relacionados.push(k);

  const total = palabras(titulo) + bloques.reduce((n, b) => n + (b.items ? b.items.reduce((m, x) => m + palabras(x), 0) : palabras(b.h)), 0) + a.faq.reduce((n, f) => n + palabras(f.q + ' ' + f.a), 0);

  return {
    slug: seo.slug,
    grupo: a.grupo,
    titulo,
    metaTitle,
    metaDescription: seo.metaDescription,
    keyword: seo.keyword,
    minutos: Math.max(3, Math.round(total / 200)),
    urgencias: urgencias.has(i),
    intro,
    cuerpo,
    faq: a.faq.map((f) => [f.q.trim(), arreglar(f.a.trim())]),
    relacionados: relacionados.slice(0, 3),
  };
});
salida.forEach((a) => { a.relacionados = a.relacionados.map((k) => salida[k].slug); });

fs.writeFileSync(destino, JSON.stringify(salida, null, 1) + '\n');
salida.forEach((a) => console.log(a.minutos, a.slug, '|', a.metaTitle, '|', a.relacionados.join(', ')));
