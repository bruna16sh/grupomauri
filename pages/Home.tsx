import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import Button from '../components/Button';
import { frentes, WHATSAPP_URL } from '../data/frentes';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-lato text-xs uppercase tracking-[0.3em] text-mauri-red font-bold mb-5 block">
    {children}
  </span>
);

const Home: React.FC = () => {
  return (
    <>
      {/* HERO */}
      <section id="hero" className="relative min-h-[88vh] flex items-center px-6 pt-28 pb-16 overflow-hidden">
        {/* Imagem de fundo do hero (aparece quando public/hero-bg.png existir; some sem quebrar se ausente) */}
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <div
            className="absolute right-0 top-0 h-full w-full md:w-3/4 bg-no-repeat bg-right bg-cover opacity-80"
            style={{ backgroundImage: "url('/hero-bg.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-mauri-black via-mauri-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-mauri-black via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp}>
              <Eyebrow>Grupo Mauri · Ecossistema de Soluções</Eyebrow>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="font-fraunces font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.08] mb-8 max-w-4xl"
            >
              Tecnologia, cloud e marca para empresas que precisam crescer com mais{' '}
              <span className="text-mauri-red">estrutura</span>.
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="font-lato font-light text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed"
            >
              O Grupo Mauri atua em frentes especializadas para ajudar empresas a construir soluções digitais,
              otimizar custos em cloud e fortalecer posicionamento de mercado, com estratégia, método e visão de negócio.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button onClick={() => scrollTo('solucoes')}>Conheça nossas soluções</Button>
            </motion.div>
          </motion.div>
        </div>

        <button
          onClick={() => scrollTo('como-atuamos')}
          className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 animate-bounce transition-colors"
          aria-label="Rolar para baixo"
        >
          <ChevronDown size={28} />
        </button>
      </section>

      {/* COMO ATUAMOS */}
      <section id="como-atuamos" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeInUp}>
            <Eyebrow>Como atuamos</Eyebrow>
            <h2 className="font-fraunces font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
              Frentes especializadas. Uma visão integrada de <span className="text-mauri-red">negócio</span>.
            </h2>
            <p className="font-lato text-white/70 text-lg leading-relaxed font-light">
              Cada frente do Grupo Mauri tem foco, linguagem e metodologia próprios. Isso permite atuar com profundidade
              em tecnologia, cloud e marca, sem perder a visão estratégica do todo. Quando o projeto exige integração,
              conectamos as frentes. Quando exige especialização, cada uma atua com autonomia e precisão.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section id="solucoes" className="py-24 px-6 border-y border-white/5 bg-white/[0.015]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
            <Eyebrow>Soluções</Eyebrow>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}>
            {frentes.map((f, i) => (
              <motion.div
                key={f.nome}
                variants={fadeInUp}
                className={`group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start py-12 ${
                  i > 0 ? 'border-t border-white/10' : ''
                }`}
              >
                <div className="md:col-span-2">
                  <span className="font-fraunces text-6xl md:text-7xl text-mauri-red/25 leading-none">{f.numero}</span>
                </div>
                <div className="md:col-span-7">
                  <h3 className="font-fraunces font-semibold text-2xl md:text-3xl mb-3">{f.nome}</h3>
                  <p className="font-lato text-mauri-red text-base md:text-lg font-medium mb-4">{f.destaque}</p>
                  <p className="font-lato text-white/60 font-light leading-relaxed max-w-xl">{f.descricao}</p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <Button
                    href={f.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    className="!py-3 !px-6 !text-xs inline-flex items-center gap-2"
                  >
                    Conhecer mais
                    <ArrowUpRight size={14} />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AUTORIDADE */}
      <section id="autoridade" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeInUp}>
            <Eyebrow>Autoridade</Eyebrow>
            <h2 className="font-fraunces font-semibold text-3xl md:text-4xl leading-tight mb-6">
              Mais de 5 anos atuando com tecnologia, cloud e estratégia de marca.
            </h2>
            <p className="font-lato text-white/70 text-lg leading-relaxed font-light">
              Atuação em tecnologia, cloud e estratégia de marca por mais de 5 anos, com certificações profissionais em
              provedores como AWS, Google Cloud, Azure e Oracle Cloud.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mauri-red/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="font-fraunces font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              Qual solução faz mais sentido para o <span className="text-mauri-red">momento</span> da sua empresa?
            </h2>
            <p className="font-lato text-white/70 text-lg font-light mb-10 max-w-2xl leading-relaxed">
              Tecnologia, cloud ou marca: cada área tem uma abordagem própria, mas todas partem da mesma lógica,
              entender o negócio antes de propor a solução.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8">
              {frentes.map((f) => (
                <Button
                  key={f.nome}
                  href={f.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  className="!py-3 !px-6 !text-xs"
                >
                  {f.nome}
                </Button>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-lato text-sm text-white/60 hover:text-white transition-colors border-b border-mauri-red pb-1"
            >
              Não sei, quero um diagnóstico
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
