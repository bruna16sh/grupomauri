import React from 'react';
import { motion } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';
import Button from '../components/Button';
import CaseCard from '../components/CaseCard';
import { getCasesByFrente } from '../data/cases';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const metodoEixo = [
  { n: '01', titulo: 'Diagnóstico e Estratégia', desc: 'Entender quem a marca é e quer ser, o que trava o crescimento agora.' },
  { n: '02', titulo: 'Identidade', desc: 'A marca ganha forma: naming, universo visual e verbal.' },
  { n: '03', titulo: 'Experiência', desc: 'Como o cliente vive a marca, do primeiro contato à fidelização.' },
  { n: '04', titulo: 'Comunicação', desc: 'A narrativa que conecta tudo isso ao mercado.' },
];

const identidadesRapidas = ['Carol Wendling', 'Malú Gômez', 'Leticia Menezes', 'Dra. Eduarda Santos', 'Letícia Matos', 'Gabriela Fernanda'];

const insights = [
  'O que é Branding Estratégico? Um Guia para CEOs.',
  'Marketing que Parece Custo: Como Reverter o Cenário e Gerar ROI.',
  'Como o Branding Afeta Diretamente o Valor de Mercado (Valuation) da sua Empresa.',
];

const EstrategiaCrescimento: React.FC = () => {
  const { openApplicationModal } = useOutletContext<{ openApplicationModal: () => void }>();
  const casesEstrategia = getCasesByFrente('estrategia-crescimento');

  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.span variants={fadeInUp} className="font-lato text-xs uppercase tracking-[0.3em] text-mauri-red font-bold mb-6 block">
              Estratégia que Gera Valor
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-bodoni text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
              Branding aqui não é estética. <br />
              <span className="italic text-mauri-red">É arquitetura de negócio.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-lato font-light text-lg md:text-2xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Posicionamento, comunicação e crescimento construídos com o Método Eixo — que conecta marca, oferta e canal de venda.
            </motion.p>
            <motion.p variants={fadeInUp} className="font-lato text-white/60 max-w-xl mx-auto mb-12 leading-relaxed">
              SE sua comunicação muda de tom a cada campanha e ninguém sabe mais o que a marca representa, ENTÃO seu
              crescimento depende de sorte, não de estrutura.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button onClick={openApplicationModal}>Aplicar para Sessão de Diagnóstico</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* METODO EIXO */}
      <section className="py-24 md:py-32 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16 text-center">
            <span className="font-lato text-xs uppercase tracking-[0.3em] text-mauri-red font-bold mb-4 block">Nossa metodologia</span>
            <h2 className="font-bodoni text-4xl md:text-5xl">O Método Eixo.</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {metodoEixo.map((m) => (
              <motion.div key={m.n} variants={fadeInUp}>
                <div className="text-mauri-red font-bodoni text-5xl opacity-30 mb-4">{m.n}</div>
                <h3 className="font-bodoni text-xl mb-3">{m.titulo}</h3>
                <p className="font-lato text-white/60 text-sm font-light leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CASES */}
      <section className="py-24 md:py-32 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
            <span className="font-lato text-xs uppercase tracking-[0.3em] text-mauri-red font-bold mb-4 block">Portfólio</span>
            <h2 className="font-bodoni text-4xl md:text-5xl">Cases que transformam marcas em ativos de valor.</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {casesEstrategia.map((c) => (
              <motion.div key={c.slug} variants={fadeInUp}>
                <CaseCard caseStudy={c} accent="red" />
              </motion.div>
            ))}
          </motion.div>

          <div>
            <h3 className="font-bodoni text-2xl mb-6 text-white/70">Identidade Visual</h3>
            <div className="flex flex-wrap gap-3">
              {identidadesRapidas.map((nome) => (
                <span key={nome} className="font-lato text-sm text-white/50 border border-white/10 px-4 py-2">
                  {nome}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="font-bodoni text-4xl md:text-5xl mb-16">
            Insights para Líderes
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((titulo) => (
              <motion.div key={titulo} variants={fadeInUp} className="p-8 bg-white/[0.02] border border-white/10">
                <p className="font-bodoni text-xl leading-snug">{titulo}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 md:py-40 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mauri-red/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="font-bodoni text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              Nosso diagnóstico é o primeiro passo para a transformação. <br />
              <span className="text-mauri-red italic">E ele não é para todos.</span>
            </h2>
            <p className="font-lato text-xl md:text-2xl text-white/80 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
              Acreditamos em parcerias profundas com empresas comprometidas com a liderança. Analisamos seu negócio para identificar pontos de alavancagem reais.
            </p>
            <Button onClick={openApplicationModal} className="text-base px-12 py-5 shadow-[0_0_30px_rgba(146,0,39,0.3)] hover:shadow-[0_0_50px_rgba(146,0,39,0.6)]">
              Aplicar para Sessão de Diagnóstico
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default EstrategiaCrescimento;
