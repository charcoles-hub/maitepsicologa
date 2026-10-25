---
version: 2
name: maitepsicologa
description: Consulta de psicología en Granollers y online. Concepto «Del ruido a la calma»: la portada abre al alba, con los pensamientos que no dejan dormir, y al bajar se ordenan en «¿Qué te trae?» mientras se hace de día.
colors:
  alba: "#F5E1E0"
  alba-rosa: "#F9EBE7"
  cierre: "#F2D9DA"
  pie: "#F6ECEA"
  fondo: "#FDF9F8"
  superficie: "#F8EDEC"
  texto: "#3A2529"
  texto-suave: "#6E5357"
  linea: "#ECD9D8"
  acento: "#8E3B4A"
  acento-hover: "#74303C"
  acento-vivo: "#E3A9AE"
  sobre-acento: "#FFFFFF"
  manana: "#F9ECE6"
  mediodia: "#F7F0E6"
  tarde: "#FBE7E3"
  ocaso: "#EFE4EC"
  error: "#B3261E"
typography:
  display:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: clamp(2.4rem, 1.7rem + 3vw, 4.25rem)
    fontWeight: 480
    lineHeight: 0.98
    letterSpacing: -0.045em
  titulo:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: clamp(1.75rem, 1.35rem + 1.6vw, 2.6rem)
    fontWeight: 620
    lineHeight: 1.1
    letterSpacing: -0.015em
  ruta:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: clamp(1.35rem, 1.1rem + 1.1vw, 2rem)
    fontWeight: 520
    lineHeight: 1.2
  cuerpo:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: 1.0625rem
    fontWeight: 400
    lineHeight: 1.6
  voz:
    fontFamily: "'Literata Variable', Georgia, serif"
    fontSize: clamp(1.2rem, 1rem + 0.9vw, 1.65rem)
    fontStyle: italic
    fontWeight: 400
    lineHeight: 1.4
  pequeno:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: 0.9rem
    lineHeight: 1.5
rounded:
  s: 6px
  m: 14px
  pildora: 999px
spacing:
  xs: 4px
  s: 8px
  m: 16px
  l: 24px
  xl: 48px
  xxl: 96px
components:
  boton-principal:
    backgroundColor: "{colors.acento}"
    textColor: "{colors.sobre-acento}"
    rounded: "{rounded.pildora}"
    padding: 14px 26px
  boton-secundario:
    backgroundColor: transparent
    textColor: "{colors.acento}"
    border: 1.5px solid currentColor
    rounded: "{rounded.pildora}"
---

## Visión

Web de la consulta de Maite Vicente (y, desde ahora, de una segunda psicóloga) en Granollers y online. La visitan adultos del Vallès que llevan tiempo pensando en pedir ayuda, padres preocupados por un hijo y parejas en crisis. Casi siempre llegan desde el móvil y desde Google.

Lo leo como: *consulta de psicología de confianza que no compite por precio; tiene que ganar por cercanía y prueba social real (54 reseñas de Google), con un recorrido que empieza en lo que le pasa a la persona y acaba en «Pedir primera sesión» (Setmore).*

- Modo: convencer. Nivel: **premium** (la vendemos como web de diseño; sin 3D ni WebGL de momento).
- Diales: variación 6 · movimiento 7 · densidad 3.
- Concepto: **«Del ruido a la calma»**. Lo que hace la terapia (poner orden) es lo que hace la portada.
- Acción principal: **Pedir primera sesión** (Setmore). Secundarias: llamar y WhatsApp al 613 00 16 09.

## Ambiente

Tranquila, clara, cercana. Sin aspecto clínico ni de spa.

**Momento firma (tipografía cinética):** la portada abre al alba (`alba`, azul niebla) con pensamientos sueltos flotando a distintos tamaños y profundidades («otra noche sin dormir», «discutimos por todo», «no sé qué me pasa»…), que se mueven con el ratón. Al bajar, la escena queda anclada: los pensamientos de relleno se disuelven, cinco de ellos vuelan a su sitio y se convierten en las rutas de «¿Qué te trae?», y el fondo pasa de `alba` a `alba-rosa` y luego a `fondo` (se hace de día). El estado final es la portada en calma.

Cada sección tiene después su propio momento: la reseña que se enciende palabra a palabra, los pasos que se apilan, la dirección que se desliza en grande, el cierre a sangre en `acento` y la firma enorme del pie.

## Color

- **El día avanza** (21-10, elegido por Sergio): tras el amanecer de la portada, cada sección es una hora del día (`data-hora`: mañana melocotón, mediodía lino, tarde rosa, ocaso malva). Con movimiento, el fondo de la página (`--cielo`) se funde de una hora a otra con el scroll y un sol difuso cruza la pantalla y se pone antes del cierre; sin movimiento, cada sección lleva su banda de color. El cierre es una banda rosa (`cierre`) y el pie, rosa muy claro (`pie`), con la firma «Maite Vicente» enorme en `acento-vivo` muy diluido. **22-10: Maite pide colores más claros y pasteles («paz y calma»); Sergio elige la paleta «Amanecer turquesa»: sin ninguna zona oscura en toda la web.** **25-10: Maite elige el logo A (Amanecer) y pide rosas y granates como su consulta; Sergio elige «Rosa empolvado»: fondo blanco rosado, sol rosa (`acento-vivo`) y granate (`acento`, 7,3:1 con blanco) en acciones. Favicon, imagen social y logo recoloreados (logo en `Documents\clientes-web\maite-logoinal`).** Las subpáginas usan el mismo sistema. Pasteles por gusto expreso de Maite.

- `fondo` blanco con un hilo de verde azulado; `superficie` para bandas de reseñas y bloques de datos.
- `acento` es el granate de las flores de su consulta, apagado para que sea sobrio. Solo para acciones, enlaces y el subrayado de las rutas. Nunca como fondo de secciones enteras.
- Contrastes: `texto` sobre `fondo` 13:1; `texto-suave` sobre `fondo` 6,4:1; `sobre-acento` sobre `acento` 6:1.
- Sin modo oscuro ni zonas oscuras. `texto` sobre cualquier fondo de la web ≥10:1; `acento` sobre los pastel ≥4,9:1 y botón blanco sobre `acento` 6,4:1.
- El `acento` a sangre se usa una sola vez: el bloque de cierre.

## Tipografía

- **Titular de portada** (21-10): «Del ruido a la calma.» enorme (hasta 9,4rem) y debajo, con un filete `acento-vivo`, «Psicología en Granollers y online»; los dos dentro del `h1`. Un halo del color de la escena detrás del bloque lo separa de los pensamientos. Los títulos de sección van en display (hasta 4,6rem, peso 480) y entran por líneas.
- **Alba viva**: los pensamientos derivan despacio, se apagan y aparecen otros nuevos en otro sitio (rumiación, solo escritorio y antes de bajar) y una luz tenue sigue al ratón y enciende los cercanos.

- **Bricolage Grotesque** (SIL OFL, ejes de peso y tamaño óptico) para todo lo que dice la consulta: titulares, rutas, texto e interfaz. En grande, el tamaño óptico le da trazos con carácter (contraformas apretadas, terminaciones vivas); en texto se vuelve sobria y muy legible. Cubre `ç l·l à è ò ï`. Sustituye a Figtree (21-10): era correcta pero sin personalidad.
- **Literata cursiva** (SIL OFL) solo para la voz de los pacientes: los pensamientos de la escena y las reseñas citadas enteras. La voz del paciente se distingue tipográficamente de la de la consulta; nunca se usa para destacar palabras sueltas.
- Titular de portada grande y de peso medio (480) con tracking cerrado; a ese tamaño el peso medio se lee más fino que el negro.
- Autoalojadas con Fontsource (woff2 variable, subconjunto latino).
- Titulares de una sola frase, sin palabras destacadas en otro color ni en cursiva.

## Composición

Contenedor de 1200 px, márgenes laterales `clamp(20px, 5vw, 64px)`. Más aire encima de cada titular que debajo.

Primera pantalla, móvil:

```
Maite Vicente            ☰  CA
Psicología en Granollers
y online
¿Qué te trae?
─ Ansiedad, estrés o no dormir
─ Me preocupa mi hijo o hija
─ Discutimos todo el rato
─ Prefiero hacerlo online
[Pedir primera sesión]
«…reseña real…»  Ana Á. · Google
──────────────────────────────
 Llamar        │   WhatsApp      (barra fija)
```

Escritorio: titular y botón a la izquierda (5 columnas), rutas a la derecha (7 columnas), reseña destacada debajo a todo el ancho.

Secuencia de la portada (familia de composición):

1. Portada: titular + rutas + acción (lista de enlaces grandes).
2. Reseñas reales (banda `superficie`, una grande y dos pequeñas, enlace a la ficha de Google).
3. Cómo es la primera sesión (proceso real de 3 pasos, numerado porque es una secuencia).
4. Quiénes somos (dos columnas asimétricas: Maite y su compañera, con número de colegiada).
5. Presencial u online (bloque de datos: dirección, horario, mapa estático con carga al hacer clic).
6. Tarifas resumidas (tabla).
7. Cierre con la acción y el pie completo.

Páginas interiores: titular + párrafo de entrada en palabras del paciente, qué trabajamos (lista), cómo trabajamos, reseña relacionada si existe, lecturas del grupo (adultos e infantil), acción.

Artículos (solo en castellano; `/ca/articles/` enlaza a ellos): índice por grupo con filas grandes como las rutas. Cada artículo: titular, enlace a su terapia, primer párrafo como entradilla, aviso 112/024 en los temas de riesgo, índice lateral fijo en escritorio, texto a 66 caracteres, frases entre comillas en Literata cursiva con filete `acento-vivo`, preguntas frecuentes, «Sigue leyendo» y cierre propio del grupo (infantil con el botón «Soy madre/padre y quiero consultar primero»). Los textos salen del Word de Maite y se generan en `src/data/articulos.json`; no se editan a mano en la plantilla.

## Formas y profundidad

Botones en píldora, bloques y mapa con radio 14 px, campos con 6 px. Sin sombras salvo la barra fija inferior del móvil. Separadores con filete de 1 px `linea`.

## Componentes

- **Ruta:** enlace a ancho completo, filete superior, texto `ruta`, subrayado del acento que crece al pasar el ratón o con foco; zona táctil ≥ 56 px.
- **Botón principal** «Pedir primera sesión» (abre Setmore), igual en cabecera, portada, cuerpo y pie.
- **Barra móvil fija:** «Llamar» y «WhatsApp», con `env(safe-area-inset-bottom)`.
- **Reseña:** texto completo en Literata cursiva, nombre como aparece en Google, fecha y «Google» como fuente.
- **Selector de idioma:** ES / CA en la cabecera, enlaza a la página equivalente.

## Movimiento

GSAP + ScrollTrigger + SplitText y Lenis (solo escritorio con puntero fino), con el motor `src/scripts/movimiento-premium.ts` y la escena en `src/scripts/escena.ts`.

- Portada: entrada del titular por líneas; escena anclada (`+=160%`, escritorio ≥ 1000 px) del ruido a la calma; en móvil sin anclaje, el amanecer va ligado al scroll y las rutas suben escalonadas.
- Pensamientos: parallax con el ratón según su profundidad. Nada se mueve solo de forma perpetua.
- Reseña destacada: se enciende palabra a palabra. Pasos: tarjetas que se apilan. Dirección: «Roger de Flor, 63» se desliza en horizontal con el scroll. Botones principales magnéticos.
- Mejora progresiva: sin JS o con `prefers-reduced-motion`, se ve directamente el estado en calma (sin pensamientos ni alba).

## Imagen

- Mientras no haya fotos, los huecos son retratos de ejemplo claramente marcados (iniciales en Literata sobre degradado de la hora y etiqueta «Foto pendiente»). Todo lo que es de relleno lleva la etiqueta discontinua `.ejemplo`.

- Solo fotos reales de Maite, su compañera y la consulta de Roger de Flor. Hasta tenerlas, la web se sostiene con tipografía y huecos marcados como pendientes.
- Nada de fotos de banco con personas que parezcan pacientes o equipo, ni retratos generados con IA presentados como reales.

## Voz y textos

- Tú, siempre. Frases cortas y en palabras del paciente («no duermo», «discutimos»), no de manual.
- Botones: «Pedir primera sesión», «Llamar al 613 00 16 09», «Escribir por WhatsApp», «Ver tarifas».
- Catalán: lo redacta el estudio y Maite valida la terminología.

## Qué sí / Qué no

- Sí: reseñas reales enteras, colegiación visible, precios claros, dirección y horario siempre a mano.
- No: etiquetas en mayúsculas sobre los titulares, numeración 01/02/03 fuera del proceso real, palabra destacada en el titular, tarjetas iguales con icono, cifras inventadas, fondo crema.

## Decisiones descartadas

- **Demo de julio** (crema + Frank Ruhl Libre + malva, etiquetas en mayúsculas, numeración decorativa, palabra en cursiva): caía en el uniforme 1 de estética IA. Se descarta entera.
- **Portada con foto de la consulta a sangre:** se aparca hasta que haya fotos reales buenas.
- **Versión 1 «cuidado»** (21-10): correcta pero demasiado sobria para venderla como web de diseño. Se sube a premium con concepto.
- **«Las voces»** (muro de reseñas) y **«Respirar»** (forma que respira): descartados frente a «Del ruido a la calma»; el segundo se acerca a app de meditación.
- **3D y WebGL:** fuera por ahora; posible propuesta aparte.
- **Turquesa plano de la web actual** (#27AAB6): no da contraste AA con texto blanco; se profundiza a `acento`.
