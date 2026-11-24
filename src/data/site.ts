export type Lang = 'es' | 'ca';

export const contact = {
  phone: '613 00 16 09',
  phoneHref: 'tel:+34613001609',
  whatsapp: {
    es: 'https://wa.me/34613001609?text=Hola%20Maite%2C%20quer%C3%ADa%20pedir%20informaci%C3%B3n%20sobre%20una%20sesi%C3%B3n',
    ca: 'https://wa.me/34613001609?text=Hola%20Maite%2C%20voldria%20informaci%C3%B3%20sobre%20una%20sessi%C3%B3',
  },
  email: 'hola@maitepsicologa.com',
  whatsappPadres: {
    es: 'https://wa.me/34613001609?text=Hola%20Maite%2C%20soy%20madre%2Fpadre%20y%20querr%C3%ADa%20consultarte%20antes%20de%20pedir%20cita',
    ca: 'https://wa.me/34613001609?text=Hola%20Maite%2C%20s%C3%B3c%20mare%2Fpare%20i%20voldria%20consultar-te%20abans%20de%20demanar%20cita',
  },
  setmore: 'https://maitevicente.setmore.com/',
  instagram: 'https://www.instagram.com/maite_vicente_psicologa/',
  address: {
    es: ['Carrer de Roger de Flor, 63, 1º 2ª', '08401 Granollers (Barcelona)'],
    ca: ['Carrer de Roger de Flor, 63, 1r 2a', '08401 Granollers (Barcelona)'],
  },
  hours: {
    es: ['Lunes a viernes, de 10:00 a 21:00', 'Sábados, de 10:00 a 13:00'],
    ca: ['De dilluns a divendres, de 10:00 a 21:00', 'Dissabtes, de 10:00 a 13:00'],
  },
  colegiada: '28300',
  colegiadaMartina: '37523',
};

export const pages = [
  { key: 'inicio', es: { slug: '', label: 'Inicio' }, ca: { slug: '', label: 'Inici' } },
  { key: 'adultos', es: { slug: 'terapia-adultos', label: 'Adultos' }, ca: { slug: 'terapia-adults', label: 'Adults' } },
  { key: 'infantil', es: { slug: 'terapia-adolescentes-infantil', label: 'Niños y adolescentes' }, ca: { slug: 'terapia-adolescents-infantil', label: 'Infants i adolescents' } },
  { key: 'pareja', es: { slug: 'terapia-pareja-familia', label: 'Pareja y familia' }, ca: { slug: 'terapia-parella-familia', label: 'Parella i família' } },
  { key: 'online', es: { slug: 'sesiones-online', label: 'Online' }, ca: { slug: 'sessions-online', label: 'Online' } },
  { key: 'talleres', es: { slug: 'talleres', label: 'Talleres' }, ca: { slug: 'tallers', label: 'Tallers' } },
  { key: 'nosotras', es: { slug: 'sobre-nosotras', label: 'Sobre nosotras' }, ca: { slug: 'sobre-nosaltres', label: 'Sobre nosaltres' } },
  { key: 'tarifas', es: { slug: 'tarifas', label: 'Tarifas' }, ca: { slug: 'tarifes', label: 'Tarifes' } },
  { key: 'contacto', es: { slug: 'contacto', label: 'Contacto' }, ca: { slug: 'contacte', label: 'Contacte' } },
  { key: 'articulos', es: { slug: 'articulos', label: 'Artículos' }, ca: { slug: 'articles', label: 'Articles' } },
  { key: 'legal', es: { slug: 'aviso-legal', label: 'Aviso legal' }, ca: { slug: 'avis-legal', label: 'Avís legal' } },
  { key: 'privacidad', es: { slug: 'politica-privacidad', label: 'Privacidad' }, ca: { slug: 'politica-privacitat', label: 'Privacitat' } },
  { key: 'cookies', es: { slug: 'politica-cookies', label: 'Cookies' }, ca: { slug: 'politica-galetes', label: 'Galetes' } },
] as const;

export type PageKey = (typeof pages)[number]['key'];

export const navKeys: PageKey[] = ['adultos', 'infantil', 'pareja', 'online', 'talleres', 'nosotras', 'tarifas', 'contacto'];

export function href(lang: Lang, key: PageKey) {
  const slug = pages.find((p) => p.key === key)![lang].slug;
  const path = lang === 'ca' ? (slug ? `ca/${slug}` : 'ca') : slug;
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return path ? `${base}${path}/` : base;
}

export function label(lang: Lang, key: PageKey) {
  return pages.find((p) => p.key === key)![lang].label;
}

export const ui = {
  es: {
    brandLine: 'Consulta de psicología',
    cta: 'Pedir primera sesión',
    ctaCorto: 'Pedir cita',
    call: 'Llamar',
    callFull: `Llamar al ${contact.phone}`,
    whatsapp: 'WhatsApp',
    whatsappFull: 'Escribir por WhatsApp',
    menu: 'Menú',
    close: 'Cerrar',
    skip: 'Saltar al contenido',
    otherLang: 'Català',
    otherLangShort: 'CA',
    soon: 'Estamos preparando esta página.',
    legal: 'Aviso legal',
    privacy: 'Privacidad',
    cookies: 'Cookies',
    where: 'Dónde estamos',
    when: 'Horario',
    talk: 'Contacto',
    colegiada: `Colegiada nº ${contact.colegiada}`,
    colegiadaMartina: `Colegiada nº ${contact.colegiadaMartina}`,
  },
  ca: {
    brandLine: 'Consulta de psicologia',
    cta: 'Demanar primera sessió',
    ctaCorto: 'Demanar cita',
    call: 'Trucar',
    callFull: `Trucar al ${contact.phone}`,
    whatsapp: 'WhatsApp',
    whatsappFull: 'Escriure per WhatsApp',
    menu: 'Menú',
    close: 'Tancar',
    skip: 'Salta al contingut',
    otherLang: 'Castellano',
    otherLangShort: 'ES',
    soon: 'Estem preparant aquesta pàgina.',
    legal: 'Avís legal',
    privacy: 'Privacitat',
    cookies: 'Galetes',
    where: 'On som',
    when: 'Horari',
    talk: 'Contacte',
    colegiada: `Col·legiada núm. ${contact.colegiada}`,
    colegiadaMartina: `Col·legiada núm. ${contact.colegiadaMartina}`,
  },
} as const;

export type Review = {
  name: string;
  lang: 'es' | 'ca';
  text: string;
  source: 'google' | 'setmore';
  date?: string;
  year?: string;
  portada?: boolean;
};

export const reviews: Review[] = [
  {
    name: 'Monica C.',
    date: '2023-11-22',
    lang: 'es',
    source: 'google',
    portada: true,
    text: 'Una gran profesional, muy cercana, estoy encantada con ella. Sin ninguna duda la mejor decision que he tomado ha sido venir a terapia con ella',
  },
  {
    name: 'Aleix D.',
    date: '2023-10-13',
    lang: 'ca',
    source: 'google',
    portada: true,
    text: "100% recomanable. Com a persona és un encant i com a professional excel·lent. Gràcies a les xerrades a les sessions i aplicant els consells, realment m'ha canviat la vida a millor sens dubte.",
  },
  {
    name: 'Miguel P.',
    date: '2023-03-10',
    lang: 'es',
    source: 'google',
    text: 'Sus sesiones me han ayudado mucho, es de agradecer su cercanía y profesionalidad!!',
  },
  {
    name: 'Natalia C.',
    year: '2026',
    lang: 'es',
    source: 'setmore',
    portada: true,
    text: 'Maite es increíble. La conozco desde hace 3 años y no la cambiaría por nada en este mundo. Atenta, natural, empatica, cercana, etc. Te da herramientas para que puedas lidiar con los problemas, ejercicios para que puedas reflexionar sobre la conducta, etc. Muy contenta, siempre la recomiendo a todo el mundo.',
  },
  {
    name: 'Cristina M.',
    year: '2026',
    lang: 'es',
    source: 'setmore',
    portada: true,
    text: 'Hoy he entrado en consulta con mucha ansiedad y preocupación y he salido mucho más calmada. Muy bien.',
  },
  {
    name: 'Corinna Z.',
    year: '2025',
    lang: 'es',
    source: 'setmore',
    portada: true,
    text: 'Llevo un tiempo con Maite, sin duda es una gran profesional una mujer muy cercana que sabe escuchar y dar esas herramientas que tanto necesitamos. Te hace sentir segura, en un espacio muy cómodo y sobretodo lo hace todo muy fácil y también que te sientas super cómoda 👏😻',
  },
  {
    name: 'Gloria',
    year: '2026',
    lang: 'es',
    source: 'setmore',
    text: 'Siempre tiene una opción y una salida para los problemas',
  },
  {
    name: 'Carmen C.',
    year: '2026',
    lang: 'es',
    source: 'google',
    text: 'Totalmente recomendable. Estamos toda la familia muy contenta con su trabajo, su atención y su normalidad para hacernos sentir seguros y orientados. La consulta está muy bien decorada y es muy cómoda, tanto la sala de espera como la consulta, en la que te sientes relajado y cómodo.',
  },
  {
    name: 'María R.',
    year: '2026',
    lang: 'es',
    source: 'setmore',
    text: 'Muy buena profesional',
  },
  {
    name: 'Isabel',
    year: '2026',
    lang: 'es',
    source: 'setmore',
    text: 'Un 100 de 100. Súper agradecida con todo lo que haces. Eres una gran profesional y estoy convencida que conseguirás que mi hijo mejore cada día. Muchísimas gracias por todo!!',
  },
  {
    name: 'Sara M.',
    year: '2026',
    lang: 'es',
    source: 'setmore',
    text: 'Volcada en su trabajo como en casa sesión. Gracias Maite',
  },
  {
    name: 'Francisco Javier',
    year: '2025',
    lang: 'es',
    source: 'google',
    text: 'Buena experiencia y personalización de terapias, y posibilidad de hacerla online, que los que tenemos turno partido nos ayuda muchísimo.',
  },
  {
    name: 'Rosa R.',
    year: '2025',
    lang: 'es',
    source: 'setmore',
    text: 'Me he llevado una muy buena impresión, he estado muy agusto, he podido hablar con mucha tranquilidad, me he sentido escuchada, comprendida y para nada juzgada. Gracias Maite.',
  },
  {
    name: 'Dani E.',
    year: '2025',
    lang: 'es',
    source: 'setmore',
    text: 'Llevo tiempo trabajando con Maite en mi evolución personal y no puedo estar más que agradecido a todo lo que me aporta, las charlas que tenemos y como echo la vista atrás... Veo dónde estaba y veo dónde estoy!',
  },
];

export const reviewWhen = (r: Review, lang: Lang) =>
  r.date
    ? new Intl.DateTimeFormat(lang === 'ca' ? 'ca-ES' : 'es-ES', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(r.date))
    : (r.year ?? '');

export const reviewIso = (r: Review) => r.date ?? r.year ?? '';

export const reviewSource = (r: Review, lang: Lang) =>
  `${lang === 'ca' ? 'a' : 'en'} ${r.source === 'google' ? 'Google' : 'Setmore'}`;
