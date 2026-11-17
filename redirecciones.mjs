const adultos = '/terapia-adultos/';
const infantil = '/terapia-adolescentes-infantil/';
const pareja = '/terapia-pareja-familia/';
const articulo = (slug) => `/articulos/${slug}/`;

export const redirecciones = {
  '/tdah/': infantil,
  '/dificultades-aprendizaje/': infantil,
  '/alteraciones-de-conducta/': infantil,
  '/infantil-psicologo-granollers/': infantil,
  '/bullying/': articulo('bullying-acoso-escolar-senales-que-hacer'),

  '/ansiedad-depresion/': adultos,
  '/ansiedad-depresion-2/': adultos,
  '/miedos-fobias/': adultos,
  '/adultos-psicologo-granollers/': adultos,
  '/duelo/': articulo('duelo-cuanto-dura-cuando-pedir-ayuda'),
  '/duelo-muerte/': articulo('duelo-cuanto-dura-cuando-pedir-ayuda'),
  '/dependencia-emocional/': articulo('dependencia-emocional-senales-pareja'),
  '/gestion-emocional/': articulo('gestion-emocional-regular-emociones'),
  '/mobing/': articulo('burnout-estres-laboral-sintomas'),
  '/trastorno-obsesivo-compulsivo-toc/': articulo('toc-pensamientos-obsesivos-adultos'),

  '/rupturas-celos/': articulo('celos-pareja-cuando-son-problema'),
  '/terapia-de-pareja-psicologo-granollers/': pareja,

  '/tarifas-psicologo-granollers/': '/tarifas/',
  '/promocion-de-este-mes/': '/tarifas/',
  '/donde-estamos/': '/contacto/',
  '/sobre-mi-psicologo-granollers/': '/sobre-nosotras/',
  '/blog-terapia-psicologa-online-presencial/': '/articulos/',

  '/services/coaching-2/': adultos,
  '/services/psicoterapia-psicologo-granollers/': adultos,
  '/services/guia-psicologo-granollers/': adultos,
  '/services/conversacion-psicologo-granollers/': adultos,
  '/services/ellas-psicologo-granollers/': adultos,
  '/services/ellos-psicologo-granollers/': adultos,
  '/services/pareja-psicologo-granollers/': pareja,
  '/services/pareja-familia-psicologo-granollers/': pareja,

  '/tag/infantil/': infantil,
  '/tag/psicologia-infantil/': infantil,
  '/tag/psicologia/': '/articulos/',
  '/services_group/about-services/': '/',
  '/services_group/counseling/': '/',
  '/services_group/practice/': '/',
};
