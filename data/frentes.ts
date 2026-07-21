import { Frente } from '../types';

export const frentes: Frente[] = [
  {
    id: 'tecnologia-ia',
    path: '/tecnologia-ia',
    nome: 'Tecnologia & IA',
    tagline: 'Construímos o que ainda não existe.',
    descricao: 'Sistemas, automações e inteligência artificial aplicada — desenhados pra escalar sem quebrar.',
    accent: 'teal',
    fontDisplay: 'dmsans',
  },
  {
    id: 'finops-cloud',
    path: '/finops-cloud',
    nome: 'FinOps Cloud',
    tagline: 'Otimizamos o que você já tem.',
    descricao: 'Diagnóstico gratuito da sua infraestrutura em nuvem. Reduza custo sem arriscar operação.',
    accent: 'amber',
    fontDisplay: 'dmsans',
  },
  {
    id: 'estrategia-crescimento',
    path: '/estrategia-crescimento',
    nome: 'Estratégia e Crescimento',
    tagline: 'Pensamos a arquitetura por trás da marca.',
    descricao: 'Posicionamento, comunicação e crescimento — com o Método Eixo, não só estética.',
    accent: 'red',
    fontDisplay: 'bodoni',
  },
];

export const getFrente = (id: string) => frentes.find(f => f.id === id);
