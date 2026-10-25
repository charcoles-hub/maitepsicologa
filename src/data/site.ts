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
};

export const pages = [
  { key: 'inicio', es: { slug: '', label: 'Inicio' }, ca: { slug: '', label: 'Inici' } },
  { key: 'adultos', es: { slug: 'terapia-adultos', label: 'Adultos' }, ca: { slug: 'terapia-adults', label: 'Adults' } },
  { key: 'infantil', es: { slug: 'terapia-adolescentes-infantil', label: 'Niños y adolescentes' }, ca: { slug: 'terapia-adolescents-infantil', label: 'Infants i adolescents' } },
  { key: 'pareja', es: { slug: 'terapia-pareja-familia', label: 'Pareja y familia' }, ca: { slug: 'terapia-parella-familia', label: 'Parella i família' } },
  { key: 'online', es: { slug: 'sesiones-online', label: 'Online' }, ca: { slug: 'sessions-online', label: 'Online' } },
  { key: 'nosotras', es: { slug: 'sobre-nosotras', label: 'Sobre nosotras' }, ca: { slug: 'sobre-nosaltres', label: 'Sobre nosaltres' } },
  { key: 'tarifas', es: { slug: 'tarifas', label: 'Tarifas' }, ca: { slug: 'tarifes', label: 'Tarifes' } },
  { key: 'contacto', es: { slug: 'contacto', label: 'Contacto' }, ca: { slug: 'contacte', label: 'Contacte' } },
  { key: 'articulos', es: { slug: 'articulos', label: 'Artículos' }, ca: { slug: 'articles', label: 'Articles' } },
] as const;

export type PageKey = (typeof pages)[number]['key'];

export const navKeys: PageKey[] = ['adultos', 'infantil', 'pareja', 'online', 'nosotras', 'tarifas', 'contacto'];

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
  },
} as const;

export const reviews = [
  {
    name: 'Monica C.',
    date: '2023-11-22',
    lang: 'es',
    text: 'Una gran profesional, muy cercana, estoy encantada con ella. Sin ninguna duda la mejor decision que he tomado ha sido venir a terapia con ella',
  },
  {
    name: 'Aleix D.',
    date: '2023-10-13',
    lang: 'ca',
    text: "100% recomanable. Com a persona és un encant i com a professional excel·lent. Gràcies a les xerrades a les sessions i aplicant els consells, realment m'ha canviat la vida a millor sens dubte.",
  },
  {
    name: 'Miguel P.',
    date: '2023-03-10',
    lang: 'es',
    text: 'Sus sesiones me han ayudado mucho, es de agradecer su cercanía y profesionalidad!!',
  },
] as const;
