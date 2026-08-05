import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import Button from '../components/Button';
import { unidades, WHATSAPP_URL } from '../data/unidades';

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

// Rótulo de seção (eyebrow editorial, sem pill/botão)
const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="block mb-5 font-lato text-[11px] uppercase tracking-[0.3em] text-mauri-silver font-semibold">
    {children}
  </span>
);

const Home: React.FC = () => {
  return (
    <>
      {/* ============ HERO ============ */}
      <section
        id="hero"
        className="relative min-h-[92vh] flex items-center justify-center px-6 pt-32 pb-[clamp(7rem,10vw,10rem)] overflow-hidden text-center"
      >
        {/* Fundo do hero: monograma de vidro como backdrop luminoso + profundidade tonal */}
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <div
            className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-[0.42] grayscale"
            style={{ backgroundImage: "url('/hero-bg.webp')" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(circle at 50% 44%, rgba(255,255,255,0.05), transparent 42%)' }}
          />
          <div className="absolute inset-0 bg-[#0a0908]/58" />
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#0a0908]/25 to-[#0a0908]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0908] via-transparent to-[#0a0908]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto w-full flex flex-col items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col items-center">
            <motion.div variants={fadeInUp}>
              <Eyebrow>Grupo Mauri · Ecossistema de Soluções</Eyebrow>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="title-silver balance font-fraunces font-semibold h-hero mb-7">
              Tecnologia e estratégia de marca para empresas que precisam crescer com mais{' '}
              <span className="italic">estrutura</span>.
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="font-lato font-light text-lg md:text-xl text-white/78 max-w-2xl mb-10 leading-[1.65]"
            >
              O Grupo Mauri reúne unidades especializadas para desenvolver soluções tecnológicas, otimizar
              investimentos em cloud e construir marcas com direção estratégica.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button onClick={() => scrollTo('solucoes')}>Conheça nossas soluções</Button>
            </motion.div>
          </motion.div>
        </div>

        <button
          onClick={() => scrollTo('como-atuamos')}
          className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 text-white/35 hover:text-white/70 animate-bounce transition-colors"
          aria-label="Rolar para baixo"
        >
          <ChevronDown size={26} />
        </button>
      </section>

      {/* ============ COMO ATUAMOS ============ */}
      <section
        id="como-atuamos"
        className="relative pt-[clamp(4rem,3rem+4vw,6.25rem)] pb-[clamp(2.5rem,1.5rem+3vw,4rem)] px-6 overflow-hidden"
      >
        {/* Iluminação ambiente central, contida na própria seção */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <div
            className="w-[560px] max-w-[110%] h-72 rounded-full blur-[130px] opacity-70"
            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.028), transparent 70%)' }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeInUp}>
            <Eyebrow>Como atuamos</Eyebrow>
            <h2 className="title-silver balance font-fraunces font-semibold h-section mb-7">
              Unidades especializadas para diferentes desafios do <span className="italic">negócio</span>.
            </h2>
            <p className="font-lato text-white/78 text-lg leading-[1.65] font-light measure mx-auto">
              Cada unidade reúne conhecimento, processos e soluções próprias, mantendo a visão integrada do Grupo Mauri.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ SOLUÇÕES ============ */}
      <section
        id="solucoes"
        className="relative pt-[clamp(1.5rem,0.5rem+3vw,3rem)] pb-[clamp(4rem,3rem+4vw,6.25rem)] px-6"
      >
        <div className="relative max-w-[1120px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}>
            {unidades.map((u, i) => (
              <motion.div key={u.nome} variants={fadeInUp} className="group relative">
                {/* Superfície de hover (não desloca o layout) */}
                <div
                  className="pointer-events-none absolute inset-y-2 -inset-x-5 md:-inset-x-7 rounded-2xl bg-white/0 group-hover:bg-white/[0.022] transition-colors duration-200"
                  aria-hidden="true"
                />
                {/* Separador entre linhas */}
                {i > 0 && (
                  <div
                    className="absolute top-0 inset-x-0 h-px bg-white/[0.08] group-hover:bg-white/[0.16] transition-colors duration-200"
                    aria-hidden="true"
                  />
                )}
                <div
                  className={`relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-start ${
                    i === 0 ? 'pt-4 pb-11 md:pt-6 md:pb-14' : 'py-11 md:py-14'
                  }`}
                >
                  <div className="md:col-span-2">
                    <span className="font-fraunces text-5xl md:text-7xl text-white/15 group-hover:text-white/35 leading-none transition-colors duration-200 tabular-nums">
                      {u.numero}
                    </span>
                  </div>
                  <div className="md:col-span-7">
                    <h3 className="title-silver font-fraunces font-semibold text-2xl md:text-3xl mb-3 inline-block">
                      {u.nome}
                    </h3>
                    <p className="font-lato text-mauri-silver text-base md:text-lg font-medium mb-4">{u.headline}</p>
                    <p className="font-lato text-white/72 font-light leading-[1.6] max-w-xl mb-6">{u.descricao}</p>

                    {u.highlight && (
                      <div className="border border-white/[0.12] rounded-xl px-5 py-5 max-w-xl bg-white/[0.015]">
                        <span className="inline-block font-lato text-[10px] uppercase tracking-[0.25em] text-mauri-silver font-semibold mb-2.5">
                          {u.highlight.badge}
                        </span>
                        <p className="font-fraunces text-lg text-mauri-white mb-2">{u.highlight.title}</p>
                        <p className="font-lato text-white/68 text-sm font-light leading-[1.6] mb-4">{u.highlight.text}</p>
                        <a
                          href={u.highlight.href}
                          data-analytics="cta_finops_click"
                          className="link-underline font-lato text-xs uppercase tracking-wide text-mauri-white hover:text-mauri-silver transition-colors inline-flex items-center gap-1.5"
                        >
                          {u.highlight.ctaLabel}
                          <ArrowUpRight size={12} />
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="md:col-span-3 md:text-right">
                    <Button
                      href={u.href}
                      data-analytics="outbound_brand_click"
                      variant="outline"
                      className="!py-3 !px-6 !text-xs inline-flex items-center gap-2 group-hover:border-white/40"
                    >
                      {u.ctaLabel}
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="relative section-y px-6">
        {/* Caixa cinza que destaca a seção, contida e com margem clara ao redor */}
        <div className="cta-surface relative max-w-[960px] mx-auto rounded-[1.75rem] px-6 sm:px-12 py-16 md:py-20 text-center overflow-hidden">
          {/* Iluminação ambiente central */}
          <div className="pointer-events-none absolute inset-0 flex items-start justify-center" aria-hidden="true">
            <div
              className="w-[620px] max-w-[110%] h-[400px] rounded-full blur-[130px]"
              style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.05), transparent 66%)' }}
            />
          </div>
          <div className="relative z-10 max-w-[720px] mx-auto flex flex-col items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col items-center">
            <h2 className="title-silver balance font-fraunces font-semibold h-section mb-6">
              Qual solução faz mais sentido para o <span className="italic">momento</span> da sua empresa?
            </h2>
            <p className="font-lato text-white/78 text-lg font-light mb-10 max-w-2xl mx-auto leading-[1.65]">
              Há mais de 5 anos, atuamos com tecnologia, cloud e estratégia de marca com uma mesma lógica: entender o
              negócio antes de propor a solução, com experiência certificada em AWS, Google Cloud, Microsoft Azure e
              Oracle Cloud.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 w-full sm:w-auto">
              {unidades.map((u) => (
                <Button
                  key={u.nome}
                  href={u.href}
                  data-analytics="outbound_brand_click"
                  variant="outline"
                  className="!py-3 !px-6 !text-xs w-full sm:w-auto"
                >
                  {u.nome}
                </Button>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="whatsapp_click"
              className="font-lato text-sm text-white/65 hover:text-white transition-colors border-b border-white/30 hover:border-white pb-1"
            >
              Não sei, quero um diagnóstico
            </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
