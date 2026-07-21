import React from 'react';
import { motion } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';
import { Search, FileText, Wrench, ShieldCheck } from 'lucide-react';
import Button from '../components/Button';
import { certificacoes } from '../data/cases';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const servicos = [
  { icon: Search, titulo: 'Diagnóstico de infraestrutura', desc: 'Auditoria completa do ambiente cloud: instâncias, contratos, arquitetura, desperdício.' },
  { icon: FileText, titulo: 'Relatório de economia potencial', desc: 'Quanto dá pra economizar, onde, e com que risco operacional (ou nenhum).' },
  { icon: Wrench, titulo: 'Implementação do plano', desc: 'A otimização é executada junto com o time técnico do cliente; cobrança por % da economia gerada.' },
  { icon: ShieldCheck, titulo: 'Governança contínua', desc: '(Opcional, pós-implementação) Alertas, revisão de arquitetura e acompanhamento mensal da economia.' },
];

const fluxo = ['Diagnóstico grátis', 'Relatório de economia potencial', 'Implementação (% da economia)', 'Governança contínua (opcional)'];

// FinOps usa amber em efeito glass (superficies translucidas + blur), nao cor solida/densa.
const glass = 'bg-mauri-amber/10 backdrop-blur-xl border border-mauri-amber/25';

const FinOpsCloud: React.FC = () => {
  const { openApplicationModal } = useOutletContext<{ openApplicationModal: () => void }>();

  return (
    <div className="font-dmsans">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* glow amber sutil de fundo, reforca o glass sem virar cor densa */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-mauri-amber/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.span variants={fadeInUp} className="font-lato text-xs uppercase tracking-[0.3em] text-mauri-amber font-bold mb-6 block">
              Otimização de cloud
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-dmsans font-extrabold text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
              Reduza sua fatura de cloud <span className="text-mauri-amber">sem arriscar sua operação.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-lato font-light text-lg md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
              Diagnóstico gratuito de infraestrutura AWS, Google Cloud ou Azure. Você só paga se houver economia real.
            </motion.p>
            <motion.p variants={fadeInUp} className="font-lato text-white/60 max-w-xl mx-auto mb-12 leading-relaxed">
              SE sua conta de cloud sobe todo mês sem explicação clara, ENTÃO provavelmente existe instância
              superdimensionada, recurso ocioso ou desconto de contrato que ninguém está usando.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button onClick={openApplicationModal} className="!border-mauri-amber !text-mauri-amber hover:!border-mauri-amber hover:!bg-mauri-amber hover:!text-mauri-black" variant="outline">
                Solicitar Diagnóstico Gratuito
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICOS - GLASS */}
      <section className="py-24 md:py-32 px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicos.map((s) => (
              <motion.div key={s.titulo} variants={fadeInUp} className={`p-10 ${glass} transition-all hover:bg-mauri-amber/[0.14]`}>
                <s.icon className="text-mauri-amber mb-6" size={28} strokeWidth={1.5} />
                <h3 className="font-dmsans font-semibold text-2xl mb-4">{s.titulo}</h3>
                <p className="font-lato text-white/60 font-light leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COMO FUNCIONA - fluxo */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="font-dmsans font-extrabold text-3xl md:text-5xl mb-16 text-center">
            Como funciona
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {fluxo.map((step, i) => (
              <motion.div key={step} variants={fadeInUp} className={`p-6 text-center ${glass}`}>
                <div className="font-dmsans font-extrabold text-mauri-amber/50 text-3xl mb-3">0{i + 1}</div>
                <p className="font-lato text-sm text-white/70 leading-relaxed">{step}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-24 px-6 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
            <span className="font-lato text-xs uppercase tracking-[0.3em] text-mauri-amber font-bold mb-4 block">Capacidade técnica</span>
            <h2 className="font-dmsans font-extrabold text-3xl md:text-4xl">Cloud arch e DevOps — a credencial que mais importa aqui.</h2>
          </motion.div>
          <div className="space-y-3">
            {certificacoes.map((c) => (
              <div key={c.nome} className={`flex items-center justify-between p-5 ${glass}`}>
                <div>
                  <p className="font-dmsans font-medium">{c.nome}</p>
                  <p className="font-lato text-xs text-white/40">{c.emissor}</p>
                </div>
                <span className="font-lato text-[10px] uppercase tracking-widest text-mauri-amber border border-mauri-amber/40 px-3 py-1 rounded-full">
                  {c.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES - gap real, sem case fictício */}
      <section className="py-24 md:py-32 px-6 text-center">
        <p className="font-lato text-white/40 text-sm max-w-md mx-auto">
          Frente nova — os primeiros diagnósticos de FinOps ainda estão em andamento. Cases completos em breve.
        </p>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <Button onClick={openApplicationModal} className="!border-mauri-amber !text-mauri-amber hover:!border-mauri-amber hover:!bg-mauri-amber hover:!text-mauri-black" variant="outline">
          Solicitar Diagnóstico Gratuito
        </Button>
      </section>
    </div>
  );
};

export default FinOpsCloud;
