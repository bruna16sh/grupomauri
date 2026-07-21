import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { getCase } from '../data/cases';
import { getFrente } from '../data/frentes';
import { accentClasses, fontDisplayClass } from '../components/accent';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const CaseDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? getCase(slug) : undefined;

  if (!caseStudy) {
    return <Navigate to="/" replace />;
  }

  const frente = getFrente(caseStudy.frenteId)!;
  const accent = accentClasses[frente.accent];
  const displayFont = fontDisplayClass(frente.fontDisplay);

  return (
    <section className="min-h-screen px-6 pt-32 pb-24">
      <div className="max-w-3xl mx-auto">
        <Link to={frente.path} className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-12 ${accent.text} hover:opacity-70 transition-opacity`}>
          <ArrowLeft size={14} /> Voltar para {frente.nome}
        </Link>

        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <span className={`font-lato text-xs uppercase tracking-[0.3em] font-bold mb-4 block ${accent.text}`}>
            {caseStudy.segmento}
          </span>
          <h1 className={`text-4xl md:text-6xl mb-12 leading-tight ${displayFont}`}>{caseStudy.titulo}</h1>

          <div className="space-y-10">
            <div>
              <h2 className="font-lato text-xs uppercase tracking-widest text-white/40 mb-3">Problema</h2>
              <p className="font-lato text-white/80 text-lg leading-relaxed font-light">{caseStudy.problema}</p>
            </div>
            <div>
              <h2 className="font-lato text-xs uppercase tracking-widest text-white/40 mb-3">Solução</h2>
              <p className="font-lato text-white/80 text-lg leading-relaxed font-light">{caseStudy.solucao}</p>
            </div>
            <div>
              <h2 className="font-lato text-xs uppercase tracking-widest text-white/40 mb-3">Resultado</h2>
              <p className="font-lato text-white/80 text-lg leading-relaxed font-light">{caseStudy.resultado}</p>
            </div>
            {caseStudy.stack && (
              <div className={`p-6 ${accent.surface}`}>
                <h2 className="font-lato text-xs uppercase tracking-widest text-white/40 mb-3">Stack</h2>
                <p className="font-lato text-white/60 text-sm leading-relaxed">{caseStudy.stack}</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseDetail;
