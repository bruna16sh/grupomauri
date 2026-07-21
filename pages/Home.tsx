import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import Button from '../components/Button';
import FrenteCard from '../components/FrenteCard';
import CaseCard from '../components/CaseCard';
import { frentes } from '../data/frentes';
import { cases } from '../data/cases';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const numbers = [
  { valor: '+5', label: 'Anos de atuação' },
  { valor: '5', label: 'Certificações cloud' },
  { valor: '3', label: 'Frentes especializadas' },
];

const casesTeaser = cases.filter((c) =>
  ['sr-cardoso', 'predita', 'axel-education', 'dra-maria-do-ceu', 'dayane-nunes', 'liga-maternar'].includes(c.slug)
);

const frenteById = (id: string) => frentes.find((f) => f.id === id)!;

const Home: React.FC = () => {
  const { openApplicationModal } = useOutletContext<{ openApplicationModal: () => void }>();

  const scrollToFrentes = () => {
    document.getElementById('frentes')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* HERO */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h1 variants={fadeInUp} className="font-bodoni text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
              Três frentes especializadas. <br />
              <span className="italic text-white/90">Uma estrutura séria por trás de cada uma.</span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="h-[1px] w-24 bg-mauri-red mx-auto mb-8"></motion.div>

            <motion.p variants={fadeInUp} className="font-lato font-light text-lg md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
              Grupo Mauri atua em tecnologia, otimização de cloud e estratégia de marca — cada frente com equipe,
              metodologia e entrega própria. Atendimento individual ou integrado, conforme o seu projeto pedir.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Button onClick={scrollToFrentes}>Conheça as 3 Frentes</Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* O QUE FAZEMOS */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
            <span className="font-lato text-xs uppercase tracking-[0.3em] text-mauri-red font-bold mb-4 block">Como atuamos</span>
            <h2 className="font-bodoni text-3xl md:text-5xl mb-8 leading-tight">
              Três frentes. <br />
              <span className="text-white/50">Cada uma resolve um problema diferente.</span>
            </h2>
            <p className="font-lato text-white/70 text-lg md:text-xl leading-relaxed font-light">
              Sistema que não escala, custo de cloud fora de controle, marca sem direção clara — são problemas de times
              diferentes, com donos diferentes. O Grupo Mauri atua nos três, cada um com sua própria equipe e
              metodologia. Escolha o que resolve o seu momento agora.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 FRENTES */}
      <section id="frentes" className="py-24 md:py-32 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {frentes.map((f, i) => (
              <FrenteCard key={f.id} frente={f} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {numbers.map((n) => (
            <div key={n.label}>
              <div className="font-bodoni text-4xl md:text-6xl text-mauri-red mb-2">{n.valor}</div>
              <div className="font-lato text-xs md:text-sm uppercase tracking-widest text-white/50">{n.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CASES TEASER */}
      <section className="py-24 md:py-32 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16 text-center md:text-left">
            <span className="font-lato text-xs uppercase tracking-[0.3em] text-mauri-red font-bold mb-4 block">Portfólio</span>
            <h2 className="font-bodoni text-4xl md:text-5xl mb-4">Prova, não promessa.</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {casesTeaser.map((c) => (
              <motion.div key={c.slug} variants={fadeInUp}>
                <CaseCard caseStudy={c} accent={frenteById(c.frenteId).accent} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NOTA DE INTEGRACAO - baixo peso */}
      <section className="px-6 pb-8">
        <p className="max-w-3xl mx-auto text-center font-lato text-xs text-white/30 leading-relaxed">
          Alguns projetos cruzam mais de uma frente. Quando isso acontece, atendemos de forma integrada — mas cada
          frente funciona sozinha, do seu jeito.
        </p>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 md:py-40 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mauri-red/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="font-bodoni text-4xl md:text-5xl lg:text-6xl mb-10 leading-tight">
              Qual frente resolve <span className="text-mauri-red italic">o seu gargalo agora?</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              {frentes.map((f) => (
                <a key={f.id} href={f.path} className="font-lato text-sm uppercase tracking-widest border border-white/20 px-6 py-3 hover:border-mauri-red hover:text-mauri-red transition-colors">
                  {f.nome}
                </a>
              ))}
            </div>
            <Button onClick={openApplicationModal} className="text-base px-12 py-5 shadow-[0_0_30px_rgba(146,0,39,0.3)] hover:shadow-[0_0_50px_rgba(146,0,39,0.6)]">
              Não sei, quero um diagnóstico
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
