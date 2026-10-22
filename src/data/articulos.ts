import datos from './articulos.json';
import type { Lang, PageKey } from './site';
import type { Hora } from './paginas';

export type Grupo = 'adultos' | 'infantil';

export interface Bloque {
  t: 'p' | 'destacado' | 'cita' | 'h2' | 'h3' | 'ul';
  h?: string;
  items?: string[];
  corta?: boolean;
}

export interface Articulo {
  slug: string;
  grupo: Grupo;
  titulo: string;
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  minutos: number;
  urgencias: boolean;
  intro: Bloque[];
  cuerpo: Bloque[];
  faq: [string, string][];
  relacionados: string[];
}

export const articulos = datos as unknown as Articulo[];

export const grupos: Record<Grupo, { key: PageKey; hora: Hora; titulo: Record<Lang, string>; terapia: Record<Lang, string> }> = {
  adultos: {
    key: 'adultos',
    hora: 'manana',
    titulo: { es: 'Adultos', ca: 'Adults' },
    terapia: { es: 'Terapia para adultos', ca: 'Teràpia per a adults' },
  },
  infantil: {
    key: 'infantil',
    hora: 'tarde',
    titulo: { es: 'Niños y adolescentes', ca: 'Infants i adolescents' },
    terapia: { es: 'Terapia para niños y adolescentes', ca: 'Teràpia per a infants i adolescents' },
  },
};

export const porGrupo = (grupo: Grupo) => articulos.filter((a) => a.grupo === grupo);

export const buscar = (slug: string) => articulos.find((a) => a.slug === slug)!;

export function rutaArticulo(slug: string) {
  return `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}articulos/${slug}/`;
}

export const anclaH2 = (h: string) =>
  h
    .replace(/<[^>]*>/g, '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
