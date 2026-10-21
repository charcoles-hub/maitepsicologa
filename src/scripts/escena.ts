import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const escena = document.querySelector<HTMLElement>('[data-escena]');
const reducir = matchMedia('(prefers-reduced-motion: reduce)').matches;
const punteroFino = matchMedia('(hover: hover) and (pointer: fine)').matches;

if (escena && !reducir) {
  const css = getComputedStyle(document.documentElement);
  const token = (n: string) => css.getPropertyValue(n).trim();
  const noche = { '--e-fondo': token('--noche'), '--e-texto': token('--noche-texto'), '--e-suave': token('--noche-suave'), '--grano': 0.06 };
  const dia = { '--e-fondo': token('--fondo'), '--e-texto': token('--texto'), '--e-suave': token('--texto-suave'), '--grano': 0 };

  const cabecera = document.querySelector<HTMLElement>('.cabecera');
  const pensamientos = gsap.utils.toArray<HTMLElement>('[data-pensamiento]', escena);
  const claves = pensamientos.filter((p) => p.dataset.ruta !== undefined);
  const relleno = pensamientos.filter((p) => p.dataset.ruta === undefined);
  const filas = gsap.utils.toArray<HTMLElement>('[data-ruta-fila]', escena);
  const destinos = gsap.utils.toArray<HTMLElement>('[data-ruta-destino]', escena);
  const pregunta = escena.querySelector('[data-pregunta]');
  const rutas = escena.querySelector('[data-rutas]');

  let calma = 0;
  const marcarDia = (p: number, umbral: number) => cabecera?.classList.toggle('cabecera--dia', p > umbral);

  gsap.set(rutas, { visibility: 'visible' });
  gsap.fromTo(
    pensamientos.map((p) => p.querySelector('.pensamiento__texto')),
    { autoAlpha: 0, filter: 'blur(8px)' },
    { autoAlpha: 1, filter: 'blur(0px)', duration: 1.6, ease: 'power2.out', stagger: { each: 0.07, from: 'random' }, delay: 0.25, onStart: () => gsap.set(pensamientos, { visibility: 'visible' }) },
  );

  const mm = gsap.matchMedia();

  mm.add('(min-width: 1000px)', () => {
    const vuelo = (i: number) => {
      const clave = claves.find((c) => Number(c.dataset.ruta) === i)!;
      const destino = destinos[i];
      const base = escena.getBoundingClientRect();
      const d = destino.getBoundingClientRect();
      const tamOrigen = parseFloat(getComputedStyle(clave).fontSize);
      const tamDestino = parseFloat(getComputedStyle(destino).fontSize);
      const alto = d.height;
      return {
        x: d.left - base.left - clave.offsetLeft,
        y: d.top - base.top + alto / 2 - tamDestino * 0.6 - clave.offsetTop,
        scale: tamDestino / tamOrigen,
      };
    };

    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: escena,
        start: 'top top',
        end: '+=160%',
        pin: true,
        scrub: 0.8,
        invalidateOnRefresh: true,
        onUpdate: (st) => {
          calma = st.progress;
          marcarDia(st.progress, 0.42);
        },
      },
    });

    tl.fromTo(escena, noche, { ...dia, duration: 0.5 }, 0.12)
      .fromTo(relleno, { autoAlpha: 1, y: 0, filter: 'blur(0px)' }, { autoAlpha: 0, y: (i) => -30 - (i % 4) * 14, filter: 'blur(6px)', duration: 0.32, stagger: 0.015 }, 0.02)
      .fromTo(pregunta, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.18, ease: 'power2.out' }, 0.5)
      .fromTo(filas, { '--l': 0 }, { '--l': 1, duration: 0.3, stagger: 0.03, ease: 'power2.inOut' }, 0.42);

    claves.forEach((clave) => {
      const i = Number(clave.dataset.ruta);
      tl.fromTo(
        clave,
        { x: 0, y: 0, scale: 1, autoAlpha: 1 },
        { x: () => vuelo(i).x, y: () => vuelo(i).y, scale: () => vuelo(i).scale, duration: 0.5, ease: 'power2.inOut' },
        0.18 + i * 0.03,
      );
      tl.to(clave.querySelector('.pensamiento__par'), { opacity: 1, duration: 0.3 }, 0.2 + i * 0.03);
      tl.to(clave, { autoAlpha: 0, duration: 0.1 }, 0.72 + i * 0.02);
      tl.fromTo(destinos[i], { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.1 }, 0.7 + i * 0.02);
    });

    tl.to({}, { duration: 0.12 });

    return () => {
      calma = 0;
      cabecera?.classList.remove('cabecera--dia');
    };
  });

  mm.add('(max-width: 999px)', () => {
    gsap.fromTo(escena, noche, {
      ...dia,
      ease: 'none',
      scrollTrigger: {
        trigger: escena,
        start: 'top top',
        end: 'bottom 35%',
        scrub: true,
        onUpdate: (st) => marcarDia(st.progress, 0.35),
      },
    });
    gsap.to(pensamientos, { autoAlpha: 0, y: -40, ease: 'none', scrollTrigger: { trigger: escena, start: 'top top', end: '40% top', scrub: true } });
    gsap.from(filas, { autoAlpha: 0, y: 24, duration: 0.8, ease: 'power3.out', stagger: 0.07, scrollTrigger: { trigger: rutas, start: 'top 80%' } });
    return () => cabecera?.classList.remove('cabecera--dia');
  });

  if (punteroFino) {
    const capas = pensamientos.map((p) => {
      const par = p.querySelector<HTMLElement>('.pensamiento__par')!;
      const prof = Number(par.dataset.prof ?? 0.5);
      return { prof, x: gsap.quickTo(par, 'x', { duration: 1.2, ease: 'power3.out' }), y: gsap.quickTo(par, 'y', { duration: 1.2, ease: 'power3.out' }) };
    });
    let ultimo = { nx: 0, ny: 0 };
    const mover = () => {
      const fuerza = Math.max(0, 1 - calma * 3);
      capas.forEach((c) => {
        c.x(ultimo.nx * 46 * c.prof * fuerza);
        c.y(ultimo.ny * 30 * c.prof * fuerza);
      });
    };
    window.addEventListener('pointermove', (e) => {
      ultimo = { nx: e.clientX / innerWidth - 0.5, ny: e.clientY / innerHeight - 0.5 };
      mover();
    }, { passive: true });
    ScrollTrigger.create({ trigger: escena, start: 'top top', end: '+=40%', onUpdate: mover });
  }

  document.querySelectorAll<HTMLElement>('[data-desliza]').forEach((el) => {
    gsap.fromTo(el, { xPercent: 6 }, { xPercent: -28, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  document.fonts.ready.then(() => ScrollTrigger.refresh());
}
