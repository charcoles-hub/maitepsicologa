import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const reducir = matchMedia('(prefers-reduced-motion: reduce)').matches;
const horas = gsap.utils.toArray<HTMLElement>('[data-hora]');
const sol = document.querySelector<HTMLElement>('.sol');
const capa = document.querySelector<HTMLElement>('.cielo');

if (!reducir && horas.length && capa && sol && document.documentElement.classList.contains('mov')) {
  const css = getComputedStyle(document.documentElement);
  const token = (n: string) => css.getPropertyValue(n).trim();
  const cielo = (el: HTMLElement) => token(`--${el.dataset.hora}`);
  const brillo = (el: HTMLElement) => token(`--sol-${el.dataset.hora}`);
  document.querySelectorAll<HTMLElement>('.titular-seccion').forEach((el) => {
    SplitText.create(el, {
      type: 'lines', mask: 'lines', autoSplit: true,
      onSplit(self) {
        return gsap.from(self.lines, { yPercent: 110, duration: 1.1, ease: 'expo.out', stagger: 0.09, scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
      },
    });
  });

  gsap.set(capa, { backgroundColor: token('--fondo') });
  gsap.set(sol, { '--sol-actual': brillo(horas[0]) });

  horas.forEach((el, i) => {
    const antes = horas[i - 1];
    const disparo = { trigger: el, start: 'top 75%', end: 'top 25%', scrub: true };
    gsap.fromTo(capa, { backgroundColor: antes ? cielo(antes) : token('--fondo') }, { backgroundColor: cielo(el), ease: 'none', immediateRender: false, scrollTrigger: disparo });
    gsap.fromTo(sol, { '--sol-actual': antes ? brillo(antes) : brillo(el) }, { '--sol-actual': brillo(el), ease: 'none', immediateRender: false, scrollTrigger: { ...disparo } });
  });

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
