/**
 * Motor de movimiento premium: scroll suave + coreografía + microinteracciones.
 * Probado en producción (Astro). Dependencias: gsap ≥ 3.13 (ScrollTrigger y
 * SplitText van incluidos y son gratuitos) y lenis.
 *
 *   npm i gsap lenis
 *   // en el layout (Astro): <script>import '../scripts/movimiento-premium';</script>
 *
 * Mejora progresiva: el contenido está en el HTML y se ve sin este script. Con
 * prefers-reduced-motion no se anima nada. En táctil el scroll es el nativo.
 * Para evitar el parpadeo de la entrada, pon en el <head> (ver premium.css):
 *   <script is:inline>if(!matchMedia('(prefers-reduced-motion: reduce)').matches){var r=document.documentElement;r.classList.add('mov');setTimeout(function(){if(!r.classList.contains('mov-listo'))r.classList.remove('mov')},2500)}</script>
 *
 * API por atributos (usa solo lo que necesites):
 *   [data-titulo-entrada]  titular que sube por líneas desde una máscara al cargar
 *   [data-sube]            elementos que aparecen detrás del titular, escalonados
 *   [data-parallax-salida] contenido de la portada que se aleja al bajar (dentro de [data-portada])
 *   [data-enciende]        texto que se enciende palabra a palabra con el scroll
 *   [data-desvela]         imagen/pieza que se desvela con máscara al entrar
 *   [data-caso]            sección anclada: [data-pantalla] (contenedor con <img> alto que
 *                          se recorre), [data-paso] (se iluminan por turnos), [data-caso-progreso]
 *   [data-galeria] + [data-pista]  galería horizontal anclada (≥1000 px); añade .galeria--anclada
 *   [data-apila]           tarjetas sticky que se apilan (oscurece las de atrás)
 *   [data-iman]            botón magnético
 *   [data-cursor="Ver"]    muestra una burbuja con ese texto junto al cursor (no oculta el cursor)
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

const raiz = document.documentElement;
const reducir = matchMedia('(prefers-reduced-motion: reduce)').matches;
const punteroFino = matchMedia('(hover: hover) and (pointer: fine)').matches;

if (!reducir && punteroFino) {
  const lenis = new Lenis({ lerp: 0.09, anchors: { offset: -84 } });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

if (!reducir) {
  const titulo = document.querySelector<HTMLElement>('[data-titulo-entrada]');
  if (titulo) {
    SplitText.create(titulo, {
      type: 'lines', mask: 'lines', autoSplit: true,
      onSplit(self) {
        gsap.set(titulo, { visibility: 'visible' });
        return gsap.from(self.lines, { yPercent: 115, duration: 1.25, ease: 'expo.out', stagger: 0.11, delay: 0.1 });
      },
    });
  }
  gsap.fromTo('[data-sube]', { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.1, ease: 'power3.out', stagger: 0.09, delay: 0.55 });
  raiz.classList.add('mov-listo');

  const portada = document.querySelector('[data-portada]');
  if (portada) {
    gsap.to('[data-parallax-salida]', { yPercent: -14, autoAlpha: 0.15, ease: 'none', scrollTrigger: { trigger: portada, start: 'top top', end: 'bottom top', scrub: true } });
  }

  document.querySelectorAll<HTMLElement>('[data-enciende]').forEach((el) => {
    SplitText.create(el, {
      type: 'words', autoSplit: true,
      onSplit(self) {
        return gsap.fromTo(self.words, { opacity: 0.16 }, { opacity: 1, ease: 'none', stagger: 0.1, scrollTrigger: { trigger: el, start: 'top 82%', end: 'bottom 48%', scrub: true } });
      },
    });
  });

  document.querySelectorAll<HTMLElement>('[data-desvela]').forEach((el) => {
    gsap.fromTo(el, { clipPath: 'inset(12% 8% 12% 8%)', scale: 1.04 }, { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%', end: 'top 38%', scrub: 0.6 } });
  });

  const mm = gsap.matchMedia();

  const caso = document.querySelector<HTMLElement>('[data-caso]');
  if (caso) {
    const pantallas = [...caso.querySelectorAll<HTMLElement>('[data-pantalla]')];
    const recorrido = (p: HTMLElement) => { const img = p.querySelector('img'); return img ? -(img.offsetHeight - p.clientHeight) : 0; };
    mm.add('(min-width: 1000px)', () => {
      const pasos = [...caso.querySelectorAll<HTMLElement>('[data-paso]')];
      const tl = gsap.timeline({ scrollTrigger: { trigger: caso, start: 'top top', end: '+=230%', pin: true, scrub: 0.8, invalidateOnRefresh: true } });
      pantallas.forEach((p) => tl.to(p.querySelector('img'), { y: () => recorrido(p), ease: 'none', duration: 1 }, 0));
      tl.fromTo(caso.querySelectorAll('[data-caso-progreso]'), { scaleY: 0 }, { scaleY: 1, ease: 'none', duration: 1 }, 0);
      const tramo = 1 / Math.max(1, pasos.length);
      pasos.forEach((paso, i) => {
        tl.fromTo(paso, { opacity: 0.26 }, { opacity: 1, duration: 0.08, ease: 'none' }, i * tramo);
        if (i < pasos.length - 1) tl.to(paso, { opacity: 0.26, duration: 0.08, ease: 'none' }, (i + 1) * tramo - 0.02);
      });
    });
    mm.add('(max-width: 999px)', () => {
      pantallas.forEach((p) => gsap.to(p.querySelector('img'), { y: () => recorrido(p), ease: 'none', scrollTrigger: { trigger: p, start: 'top 85%', end: 'bottom 15%', scrub: true, invalidateOnRefresh: true } }));
    });
  }

  mm.add('(min-width: 1000px)', () => {
    const galeria = document.querySelector<HTMLElement>('[data-galeria]');
    const pista = galeria?.querySelector<HTMLElement>('[data-pista]');
    if (!galeria || !pista) return;
    galeria.classList.add('galeria--anclada');
    const distancia = () => Math.max(0, pista.scrollWidth - raiz.clientWidth);
    gsap.to(pista, { x: () => -distancia(), ease: 'none', scrollTrigger: { trigger: galeria, start: 'top top', end: () => `+=${distancia()}`, pin: true, scrub: 0.8, invalidateOnRefresh: true } });
    return () => galeria.classList.remove('galeria--anclada');
  });

  mm.add('(min-width: 760px)', () => {
    const tarjetas = gsap.utils.toArray<HTMLElement>('[data-apila]');
    tarjetas.forEach((t, i) => {
      const siguiente = tarjetas[i + 1];
      if (siguiente) gsap.fromTo(t, { scale: 1, filter: 'brightness(1) saturate(1)' }, { scale: 0.95, filter: 'brightness(0.94) saturate(0.85)', ease: 'none', scrollTrigger: { trigger: siguiente, start: 'top 55%', end: () => `top ${parseFloat(getComputedStyle(siguiente).top) || 0}px`, scrub: true, invalidateOnRefresh: true } });
    });
  });

  if (punteroFino) {
    document.querySelectorAll<HTMLElement>('[data-iman]').forEach((el) => {
      const x = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' });
      const y = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' });
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        x((e.clientX - (r.left + r.width / 2)) * 0.28);
        y((e.clientY - (r.top + r.height / 2)) * 0.38);
      });
      el.addEventListener('pointerleave', () => gsap.to(el, { x: 0, y: 0, duration: 1, ease: 'elastic.out(1, 0.45)' }));
    });

    const objetivos = document.querySelectorAll<HTMLElement>('[data-cursor]');
    if (objetivos.length) {
      const burbuja = document.createElement('div');
      burbuja.className = 'burbuja';
      burbuja.setAttribute('aria-hidden', 'true');
      document.body.append(burbuja);
      gsap.set(burbuja, { scale: 0, autoAlpha: 0 });
      const bx = gsap.quickTo(burbuja, 'x', { duration: 0.5, ease: 'power3.out' });
      const by = gsap.quickTo(burbuja, 'y', { duration: 0.5, ease: 'power3.out' });
      window.addEventListener('pointermove', (e) => { bx(e.clientX); by(e.clientY); }, { passive: true });
      objetivos.forEach((el) => {
        el.addEventListener('pointerenter', () => { burbuja.textContent = el.dataset.cursor ?? ''; gsap.to(burbuja, { scale: 1, autoAlpha: 1, duration: 0.4, ease: 'power3.out' }); });
        el.addEventListener('pointerleave', () => gsap.to(burbuja, { scale: 0, autoAlpha: 0, duration: 0.3, ease: 'power2.in' }));
      });
    }
  }

  document.fonts.ready.then(() => ScrollTrigger.refresh());
}
