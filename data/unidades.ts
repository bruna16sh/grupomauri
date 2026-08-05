export const WHATSAPP_URL = 'https://wa.me/5579996078374';
export const INSTAGRAM_URL = 'https://www.instagram.com/grupomauri/';

export interface Highlight {
  badge: string;
  title: string;
  text: string;
  ctaLabel: string;
  href: string;
}

export interface Unidade {
  numero: string;
  nome: string;
  headline: string;
  descricao: string;
  href: string;
  ctaLabel: string;
  highlight?: Highlight;
}

export const unidades: Unidade[] = [
  {
    numero: '01',
    nome: 'Qorion',
    headline: 'Tecnologia para tornar operações mais eficientes, seguras e preparadas para crescer.',
    descricao: 'Atuação em FinOps, cloud e operações, software e automação, dados e inteligência artificial.',
    href: 'https://www.qorion.tech/',
    ctaLabel: 'Conhecer a Qorion',
    highlight: {
      badge: 'Solução em destaque',
      title: 'Diagnóstico FinOps',
      text: 'Identificamos desperdícios, riscos e oportunidades para que sua empresa tenha mais controle sobre os custos e o uso da tecnologia.',
      ctaLabel: 'Solicitar diagnóstico FinOps',
      href: 'https://finops.qorion.tech/',
    },
  },
  {
    numero: '02',
    nome: 'Mauri Estratégia',
    headline: 'Estratégia de marca para empresas que precisam se posicionar com clareza e crescer com consistência.',
    descricao: 'Branding, posicionamento, comunicação e marketing construídos a partir da essência e dos objetivos do negócio.',
    href: 'https://estrategia.grupomauri.com.br/',
    ctaLabel: 'Conhecer a Mauri Estratégia',
  },
];
