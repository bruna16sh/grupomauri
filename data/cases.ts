import { CaseStudy } from '../types';

export const cases: CaseStudy[] = [
  // Tecnologia & IA
  {
    slug: 'sr-cardoso',
    frenteId: 'tecnologia-ia',
    titulo: 'Sr. Cardoso Barbearia',
    segmento: 'Barbearia / serviços pessoais',
    problema: 'Agendamento manual pelo WhatsApp gerava desorganização — sem visibilidade centralizada de agenda, financeiro ou estoque.',
    solucao: 'Plataforma web mobile-first (PWA) com agendamento público, painel administrativo completo (agenda, bloqueios, RBAC master/barbeiro), módulo financeiro (comissões e repasses), controle de estoque com alertas, automações via WhatsApp (Evolution API) para confirmações, lembretes e campanhas, rotinas automatizadas por cron.',
    resultado: 'Agenda, financeiro e estoque centralizados em um só sistema — rotina manual substituída por operação com automação e visibilidade completa.',
    stack: 'React + Vite + TypeScript + Tailwind + shadcn/ui · Node.js + Express · Google Firestore · Cloud Run + Cloud Storage + Cloud Scheduler · WhatsApp Evolution API · JWT + RBAC + PBKDF2 · Vitest',
  },
  {
    slug: 'predita',
    frenteId: 'tecnologia-ia',
    titulo: 'Predita',
    segmento: 'Fintech / mercados de previsão on-chain',
    problema: 'Levar prediction markets ao público brasileiro exigia infraestrutura whitelabel robusta, pagamento em reais e liquidação em blockchain sem fricção para o usuário final.',
    solucao: 'Frontend Next.js 15 + React 19 + PayloadCMS; backend em monorepo TypeScript com microserviços Fastify por domínio; tempo real via Cloudflare Workers e Durable Objects; orquestração assíncrona com Temporal self-hosted; integração Solana + Monaco Protocol + Anchor + Web3.js; pagamentos PIX/BRL com liquidação on-chain; autenticação via Privy; busca com Algolia; infraestrutura GCP com Terraform.',
    resultado: 'Plataforma em produção unindo pagamento local (PIX) e liquidação em blockchain (Solana), em arquitetura whitelabel pronta pra escalar.',
    stack: 'Next.js 15 + React 19 + Tailwind · Fastify + TypeScript · PostgreSQL + Supabase + Redis · Temporal · Cloudflare Workers + Durable Objects · Solana + Monaco Protocol · Privy · PIX · PayloadCMS · Algolia · Novu · Google Cloud Run · Terraform · Docker',
  },
  {
    slug: 'axel-education',
    frenteId: 'tecnologia-ia',
    titulo: 'Axel Education',
    segmento: 'Educação / EdTech com IA',
    problema: 'Alunos precisavam de acompanhamento individualizado — diagnóstico de lacunas, priorização do que estudar, geração de material e revisão com base em desempenho real — algo que não escala com professor humano sozinho.',
    solucao: 'Plataforma SaaS completa: dashboard do aluno, chat com tutor IA, geração de materiais (flashcards, quizzes, resumos, mapas mentais, podcasts), revisão espaçada baseada em curva de esquecimento, correção automática, billing via Stripe, sistema de créditos com ledger financeiro append-only. Backend NestJS 10 com Vertex AI Gemini, embeddings, RAG, pgvector, fallback DeepSeek.',
    resultado: 'Sistema funcionando como "segundo cérebro" do aluno — sessões adaptativas e materiais gerados sob medida, com billing, créditos e indicação rodando dentro da mesma plataforma.',
    stack: 'React 18 + Vite + TypeScript + Tailwind + shadcn/ui + Zustand + TanStack Query + Apollo Client · NestJS 10 + Prisma 7 + PostgreSQL + pgvector · Vertex AI Gemini + DeepSeek · Stripe · Google Cloud Run + Cloud SQL + Cloud CDN + Cloud Tasks + Cloud Scheduler · Sentry + OpenTelemetry + Langfuse',
  },
  // Estratégia e Crescimento
  {
    slug: 'dra-maria-do-ceu',
    frenteId: 'estrategia-crescimento',
    titulo: 'Dra. Maria do Céu',
    segmento: 'Saúde / odontologia',
    problema: 'Precisava de autoridade percebida no mercado sem soar arrogante ou distante — erro comum em nichos de saúde/estética que afasta paciente.',
    solucao: 'Branding + conteúdo + mídia paga com tom de autoridade com leveza.',
    resultado: 'Posicionamento que comunica competência técnica sem perder acessibilidade.',
  },
  {
    slug: 'fitwell',
    frenteId: 'estrategia-crescimento',
    titulo: 'Fitwell',
    segmento: 'Fitness / academia (Canela/RS, 30 anos de história)',
    problema: 'Marca tradicional precisando de campanhas relevantes sem perder o legado de 3 décadas.',
    solucao: 'Planejamento estratégico + campanhas sazonais (projetos Tibum/Azulia, campanha comemorativa dos 30 anos da piscina).',
    resultado: 'Marca tradicional ativada com narrativa comemorativa, sem perder identidade histórica.',
  },
  {
    slug: 'dayane-nunes',
    frenteId: 'estrategia-crescimento',
    titulo: 'Dayane Nunes',
    segmento: 'Finanças / marca pessoal alta renda',
    problema: 'Construir marca pessoal em mercado de investimentos dominado por jargão técnico e distância emocional do cliente.',
    solucao: 'Arquétipos Sábio + Cuidadora combinados no conceito "Patrimônio Inteligente" — inteligência técnica com cuidado humano.',
    resultado: 'Marca pessoal com posicionamento diferenciado no segmento de alta renda.',
  },
  {
    slug: 'liga-maternar',
    frenteId: 'estrategia-crescimento',
    titulo: 'Liga Maternar',
    segmento: 'Educação / saúde materno-infantil',
    problema: 'Plataforma de formação precisava de estratégia completa — não só comunicação, também venda e organização interna.',
    solucao: 'Estratégia 360º (marketing + vendas + organização interna).',
    resultado: 'Diretório de profissionais certificados em operação, com busca/filtros por estado, cidade e curso, e área administrativa própria.',
  },
  {
    slug: 'raisa-menezes',
    frenteId: 'estrategia-crescimento',
    titulo: 'Raísa Menezes',
    segmento: 'Saúde (enfermeira materno-infantil)',
    problema: 'Prestadora de serviço individual (pré-natal, amamentação, taping) sem estrutura de oferta clara pra crescer além do atendimento 1:1.',
    solucao: 'Posicionamento + esteira de produtos (e-books, cursos, consultorias) — cria caminhos de monetização além da consulta avulsa.',
    resultado: 'Modelo de negócio com múltiplos pontos de entrada, do produto de entrada à consultoria.',
  },
  {
    slug: 'roberta-villachan',
    frenteId: 'estrategia-crescimento',
    titulo: 'Roberta Villachan',
    segmento: 'Autoconhecimento / terapia (Pathwork)',
    problema: 'Nicho exige conexão genuína — identidade visual genérica não comunica autenticidade.',
    solucao: 'Identidade visual + conteúdo orgânico.',
    resultado: 'Marca com linguagem própria, sustentada por conteúdo consistente.',
  },
];

export const getCase = (slug: string) => cases.find(c => c.slug === slug);
export const getCasesByFrente = (frenteId: string) => cases.filter(c => c.frenteId === frenteId);

export const trustBarClientes = [
  'GOL Linhas Aéreas',
  'Aeroporto Galeão',
  'Grupo Soma',
  'Banco BRB',
  'ApexBrasil',
  'Brazil Journal',
];

export const certificacoes = [
  { nome: 'Professional Cloud Architect', emissor: 'Google Cloud', badge: 'TOP TIER' },
  { nome: 'Professional Cloud DevOps Engineer', emissor: 'Google Cloud', badge: 'TOP TIER' },
  { nome: 'Associate Cloud Engineer', emissor: 'Google Cloud', badge: 'ASSOCIATE' },
  { nome: 'Cloud Practitioner', emissor: 'Amazon Web Services', badge: 'ASSOCIATE' },
  { nome: 'MBA Management and Business Communication', emissor: 'Ohio University', badge: 'AACSB' },
];
