import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const escena = document.querySelector<HTMLElement>('[data-escena]');
const reducir = matchMedia('(prefers-reduced-motion: reduce)').matches;
const punteroFino = matchMedia('(hover: hover) and (pointer: fine)').matches;

if (escena && !reducir && document.documentElement.classList.contains('mov')) {
  const css = getComputedStyle(document.documentElement);
  const token = (n: string) => css.getPropertyValue(n).trim();
  const noche = { '--e-fondo': token('--noche'), '--e-texto': token('--noche-texto'), '--e-suave': token('--noche-suave'), '--grano': 0.06 };
  const alba = { '--e-fondo': '#1d5a5c', '--e-texto': token('--noche-texto'), '--e-suave': token('--noche-suave'), '--grano': 0.03 };
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

    tl.fromTo(escena, noche, { ...alba, duration: 0.22 }, 0.12)
      .to(escena, { ...dia, duration: 0.28 }, 0.34)
      .fromTo(relleno, { autoAlpha: 1, y: 0, filter: 'blur(0px)' }, { autoAlpha: 0, y: (i) => -30 - (i % 4) * 14, filter: 'blur(6px)', duration: 0.32, stagger: 0.015 }, 0.02)
      .fromTo(pregunta, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.18, ease: 'power2.out' }, 0.5)
      .fromTo(filas, { '--l': 0 }, { '--l': 1, duration: 0.3, stagger: 0.03, ease: 'power2.inOut' }, 0.42);

    claves.forEach((clave) => {
      const i = Number(clave.dataset.ruta);
      tl.fromTo(
        clave,
        { x: 0, y: 0, scale: 1, autoAlpha: 1 },
        { x: () => vuelo(i).x, y: () => vuelo(i).y, scale: () => vuelo(i).scale, duration: 0.5, ease: 'power2.inOut' },
        0.16 + i * 0.05,
      );
      tl.to(clave.querySelector('.pensamiento__par'), { opacity: 1, duration: 0.3 }, 0.18 + i * 0.05);
      tl.to(clave, { autoAlpha: 0, duration: 0.1 }, 0.72 + i * 0.02);
      tl.fromTo(destinos[i], { opacity: 0 }, { opacity: 1, duration: 0.1 }, 0.7 + i * 0.02);
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
    const luz = escena.querySelector<HTMLElement>('.escena__luz');
    const luzX = luz ? gsap.quickTo(luz, 'x', { duration: 0.9, ease: 'power3.out' }) : null;
    const luzY = luz ? gsap.quickTo(luz, 'y', { duration: 0.9, ease: 'power3.out' }) : null;
    const pares = pensamientos.map((p) => p.querySelector<HTMLElement>('.pensamiento__par')!);
    let pendiente = false;
    let puntero = { x: -9999, y: -9999 };
    const iluminar = () => {
      pendiente = false;
      const fuerza = Math.max(0, 1 - calma * 4);
      if (luz) gsap.set(luz, { opacity: fuerza });
      pares.forEach((par) => {
        const r = par.getBoundingClientRect();
        const d = Math.hypot(r.left + r.width / 2 - puntero.x, r.top + r.height / 2 - puntero.y);
        const v = Math.max(0, 1 - d / 280) ** 1.4 * fuerza;
        par.style.setProperty('--luz', v.toFixed(3));
      });
    };
    window.addEventListener('pointermove', (e) => {
      ultimo = { nx: e.clientX / innerWidth - 0.5, ny: e.clientY / innerHeight - 0.5 };
      mover();
      const base = escena.getBoundingClientRect();
      puntero = { x: e.clientX, y: e.clientY };
      luzX?.(e.clientX - base.left);
      luzY?.(e.clientY - base.top);
      if (!pendiente) {
        pendiente = true;
        requestAnimationFrame(iluminar);
      }
    }, { passive: true });
    ScrollTrigger.create({ trigger: escena, start: 'top top', end: '+=40%', onUpdate: mover });
  }

  mm.add('(min-width: 1000px)', () => {
    const pool: string[] = JSON.parse(escena.dataset.pool ?? '[]');
    const huecos = [[6, 8], [28, 4], [48, 12], [72, 5], [88, 14], [62, 24], [90, 34], [74, 40], [86, 56], [62, 52], [78, 72], [92, 80], [58, 90], [34, 95], [6, 92], [4, 22]];
    const deriva = relleno.map((p) => {
      const texto = p.querySelector<HTMLElement>('.pensamiento__texto')!;
      return gsap.to(texto, { x: gsap.utils.random(-14, 14), y: gsap.utils.random(-10, 10), duration: gsap.utils.random(5, 9), ease: 'sine.inOut', yoyo: true, repeat: -1, delay: gsap.utils.random(0, 3) });
    });
    let siguiente = 0;
    let ocupado = false;
    const posicion = (el: HTMLElement) => ({ x: (el.offsetLeft / escena.clientWidth) * 100, y: (el.offsetTop / escena.clientHeight) * 100 });
    const rumiar = () => {
      if (ocupado || calma > 0.01 || document.hidden || !pool.length) return;
      ocupado = true;
      const el = gsap.utils.random(relleno);
      const texto = el.querySelector<HTMLElement>('.pensamiento__texto')!;
      const otros = pensamientos.filter((o) => o !== el).map(posicion);
      const hueco = huecos
        .map(([x, y]) => ({ x, y, d: Math.min(...otros.map((o) => Math.hypot((o.x - x) * 0.6, o.y - y))) }))
        .sort((a, b) => b.d - a.d)[gsap.utils.random(0, 2, 1)];
      gsap.to(texto, {
        opacity: 0,
        filter: 'blur(6px)',
        duration: 1.3,
        ease: 'power2.in',
        onComplete: () => {
          texto.textContent = pool[siguiente++ % pool.length];
          el.style.left = `${hueco.x}%`;
          el.style.top = `${hueco.y}%`;
          const sobra = el.offsetLeft + el.offsetWidth - (escena.clientWidth - 24);
          if (sobra > 0) el.style.left = `${el.offsetLeft - sobra}px`;
          gsap.to(texto, { opacity: 1, filter: 'blur(0px)', duration: 1.8, ease: 'power2.out', onComplete: () => { ocupado = false; } });
        },
      });
    };
    const reloj = window.setInterval(rumiar, 2600);
    return () => {
      window.clearInterval(reloj);
      deriva.forEach((t) => t.kill());
    };
  });

  document.querySelectorAll<HTMLElement>('[data-desliza]').forEach((el) => {
    gsap.fromTo(el, { xPercent: 6 }, { xPercent: -28, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  document.fonts.ready.then(() => ScrollTrigger.refresh());
}
