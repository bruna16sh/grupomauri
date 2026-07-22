export const WHATSAPP_URL = 'https://wa.me/5579996078374';
export const INSTAGRAM_URL = 'https://www.instagram.com/grupomauri/';

export interface Frente {
  numero: string;
  nome: string;
  destaque: string;
  descricao: string;
  href: string;
}

export const frentes: Frente[] = [
  {
    numero: '01',
    nome: 'Tecnologia & IA',
    destaque: 'Construímos soluções digitais para operações que precisam evoluir.',
    descricao: 'Desenvolvimento de sistemas, automações, integrações, dashboards, produtos digitais e inteligência artificial aplicada ao negócio.',
    href: 'https://www.qorion.tech/',
  },
  {
    numero: '02',
    nome: 'FinOps Cloud',
    destaque: 'Reduzimos custos em cloud sem comprometer sua operação.',
    descricao: 'Diagnóstico e otimização de ambientes AWS, Google Cloud e Azure, com foco em economia real, segurança técnica e governança contínua.',
    href: 'https://www.qorion.tech/',
  },
  {
    numero: '03',
    nome: 'Branding & Marketing',
    destaque: 'Construímos marcas com posicionamento, presença e direção estratégica.',
    descricao: 'Branding estratégico, identidade, comunicação, conteúdo, presença digital, SEO/GAI e campanhas conectadas à arquitetura do negócio.',
    href: 'https://estrategia.grupomauri.com.br/',
  },
];
