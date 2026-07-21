import { Frente } from '../types';

// Central lugar de mapeamento accent -> classes tailwind.
// FinOps Cloud (amber) usa tratamento glass; Tecnologia&IA (teal) e Estrategia (red) sao solidos.
export const accentClasses: Record<Frente['accent'], {
  text: string;
  border: string;
  bgSolid: string;
  bgHover: string;
  surface: string; // card/superficie
  glow: string;
}> = {
  red: {
    text: 'text-mauri-red',
    border: 'border-mauri-red',
    bgSolid: 'bg-mauri-red',
    bgHover: 'hover:bg-mauri-red',
    surface: 'bg-white/[0.03] border border-white/10',
    glow: 'shadow-[0_0_40px_rgba(146,0,39,0.25)]',
  },
  teal: {
    text: 'text-mauri-teal',
    border: 'border-mauri-teal',
    bgSolid: 'bg-mauri-teal',
    bgHover: 'hover:bg-mauri-teal',
    surface: 'bg-white/[0.03] border border-mauri-teal/20',
    glow: 'shadow-[0_0_40px_rgba(18,178,193,0.20)]',
  },
  amber: {
    text: 'text-mauri-amber',
    border: 'border-mauri-amber',
    bgSolid: 'bg-mauri-amber',
    bgHover: 'hover:bg-mauri-amber',
    // Glass: superficie translucida com blur, nao fill solido
    surface: 'bg-mauri-amber/10 backdrop-blur-xl border border-mauri-amber/25',
    glow: 'shadow-[0_0_40px_rgba(212,160,23,0.18)]',
  },
};

export const fontDisplayClass = (fontDisplay: Frente['fontDisplay']) =>
  fontDisplay === 'dmsans' ? 'font-dmsans' : 'font-bodoni';
