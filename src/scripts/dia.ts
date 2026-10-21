import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reducir = matchMedia('(prefers-reduced-motion: reduce)').matches;
const horas = gsap.utils.toArray<HTMLElement>('[data-hora]');
const sol = document.querySelector<HTMLElement>('.sol');

if (!reducir && horas.length) {
  const css = getComputedStyle(document.documentElement);
  const token = (n: string) => css.getPropertyValue(n).trim();
  const cielo = (el: HTMLElement) => token(`--${el.dataset.hora}`);
  const brillo = (el: HTMLElement) => token(`--sol-${el.dataset.hora}`);
  const cuerpo = document.body;

  gsap.set(cuerpo, { '--cielo': token('--fondo'), '--sol-actual': brillo(horas[0]) });

  horas.forEach((el, i) => {
    const antes = horas[i - 1];
    gsap.fromTo(
      cuerpo,
      { '--cielo': antes ? cielo(antes) : token('--fondo'), '--sol-actual': antes ? brillo(antes) : brillo(el) },
      { '--cielo': cielo(el), '--sol-actual': brillo(el), ease: 'none', immediateRender: false, scrollTrigger: { trigger: el, start: 'top 75%', end: 'top 25%', scrub: true } },
    );
  });

  if (sol) {
    const primera = horas[0];
    const camino = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: { trigger: primera, start: 'top bottom', endTrigger: document.querySelector('main'), end: 'bottom bottom', scrub: 1.2, invalidateOnRefresh: true },
    });
    camino
      .fromTo(sol, { x: () => innerWidth * 0.82, y: () => innerHeight * 1.05, opacity: 0 }, { x: () => innerWidth * 0.62, y: () => innerHeight * 0.32, opacity: 0.9, duration: 0.3, ease: 'sine.out' })
      .to(sol, { x: () => innerWidth * 0.3, y: () => innerHeight * 0.18, duration: 0.4, ease: 'none' })
      .to(sol, { x: () => innerWidth * 0.1, y: () => innerHeight * 0.95, opacity: 0.5, duration: 0.3, ease: 'sine.in' });
  }
}
