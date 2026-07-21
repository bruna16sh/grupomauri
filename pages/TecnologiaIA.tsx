import React from 'react';
import { motion } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';
import { Zap, BarChart2, Code2, Cloud } from 'lucide-react';
import Button from '../components/Button';
import CaseCard from '../components/CaseCard';
import { getCasesByFrente, certificacoes, trustBarClientes } from '../data/cases';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const servicos = [
  { icon: Zap, titulo: 'Automação de processos', desc: 'Processos manuais viram sistemas; retrabalho e custo oculto deixam de crescer junto com o negócio.' },
  { icon: BarChart2, titulo: 'Dados e visibilidade', desc: 'Painéis e pipelines em tempo real; decisão com dado, não com planilha desatualizada.' },
  { icon: Code2, titulo: 'Sistemas sob medida', desc: 'Software construído pro problema específico do seu negócio, sem portfólio padrão.' },
  { icon: Cloud, titulo: 'Arquitetura que escala', desc: 'Infraestrutura desenhada pra crescer junto com a operação, sem reconstrução de emergência lá na frente.' },
];

const passos = [
  { n: '01', titulo: 'Mapeamos onde o processo trava', desc: 'Antes de qualquer linha de código.' },
  { n: '02', titulo: 'Desenhamos o sistema certo', desc: 'Pro problema mapeado, não o produto de prateleira.' },
  { n: '03', titulo: 'Construímos e entregamos', desc: 'Com visibilidade real sobre o resultado.' },
];

const TecnologiaIA: React.FC = () => {
  const { openApplicationModal } = useOutletContext<{ openApplicationModal: () => void }>();
  const casesTech = getCasesByFrente('tecnologia-ia');

  return (
    <div className="font-dmsans">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.span variants={fadeInUp} className="font-lato text-xs uppercase tracking-[0.3em] text-mauri-teal font-bold mb-6 block">
              Tecnologia sob medida
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-dmsans font-extrabold text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
              Sistemas que escalam <span className="text-mauri-teal">sem quebrar.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-lato font-light text-lg md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
              Desenvolvimento de software, automações e inteligência artificial aplicada — para operações que não podem parar.
            </motion.p>
            <motion.p variants={fadeInUp} className="font-lato text-white/60 max-w-xl mx-auto mb-12 leading-relaxed">
              SE sua operação ainda depende de planilha, WhatsApp manual ou sistema que não aguenta crescer, ENTÃO
              cada novo cliente vira mais risco em vez de mais receita.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button onClick={openApplicationModal} className="!border-mauri-teal !text-mauri-teal hover:!border-mauri-teal hover:!bg-mauri-teal hover:!text-mauri-black" variant="outline">
                Falar sobre meu projeto
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICOS */}
      <section className="py-24 md:py-32 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicos.map((s) => (
              <motion.div key={s.titulo} variants={fadeInUp} className="p-10 bg-white/[0.02] border border-mauri-teal/15 hover:border-mauri-teal/40 transition-colors">
                <s.icon className="text-mauri-teal mb-6" size={28} strokeWidth={1.5} />
                <h3 className="font-dmsans font-semibold text-2xl mb-4">{s.titulo}</h3>
                <p className="font-lato text-white/60 font-light leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="font-dmsans font-extrabold text-3xl md:text-5xl mb-16 text-center">
            Um processo que começa pelo problema, <span className="text-mauri-teal">não pelo código.</span>
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {passos.map((p) => (
              <motion.div key={p.n} variants={fadeInUp} className="text-center md:text-left">
                <div className="font-dmsans font-extrabold text-mauri-teal/30 text-5xl mb-4">{p.n}</div>
                <h3 className="font-dmsans font-semibold text-xl mb-2">{p.titulo}</h3>
                <p className="font-lato text-white/60 font-light">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-16 px-6 border-y border-white/5 bg-black/30">
        <div className="max-w-5xl mx-auto text-center">
          <span className="font-lato text-xs uppercase tracking-[0.3em] text-white/40 block mb-8">
            Ambientes de missão crítica já operados pela nossa equipe
          </span>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {trustBarClientes.map((c) => (
              <span key={c} className="font-lato text-sm md:text-base font-bold text-white/60 uppercase tracking-wide">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
            <span className="font-lato text-xs uppercase tracking-[0.3em] text-mauri-teal font-bold mb-4 block">Capacidade técnica</span>
            <h2 className="font-dmsans font-extrabold text-3xl md:text-4xl">Certificações que validam a profundidade técnica.</h2>
          </motion.div>
          <div className="space-y-3">
            {certificacoes.map((c) => (
              <div key={c.nome} className="flex items-center justify-between p-5 bg-white/[0.02] border border-white/10">
                <div>
                  <p className="font-dmsans font-medium">{c.nome}</p>
                  <p className="font-lato text-xs text-white/40">{c.emissor}</p>
                </div>
                <span className="font-lato text-[10px] uppercase tracking-widest text-mauri-teal border border-mauri-teal/40 px-3 py-1 rounded-full">
                  {c.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="py-24 md:py-32 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="font-dmsans font-extrabold text-3xl md:text-5xl mb-16">
            Cases
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {casesTech.map((c) => (
              <CaseCard key={c.slug} caseStudy={c} accent="teal" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 text-center">
        <Button onClick={openApplicationModal} className="!border-mauri-teal !text-mauri-teal hover:!border-mauri-teal hover:!bg-mauri-teal hover:!text-mauri-black" variant="outline">
          Falar sobre meu projeto
        </Button>
      </section>
    </div>
  );
};

export default TecnologiaIA;
