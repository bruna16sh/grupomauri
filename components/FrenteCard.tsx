import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Frente } from '../types';
import { accentClasses, fontDisplayClass } from './accent';

interface FrenteCardProps {
  frente: Frente;
  index: number;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const FrenteCard: React.FC<FrenteCardProps> = ({ frente, index }) => {
  const accent = accentClasses[frente.accent];

  return (
    <motion.div variants={fadeInUp}>
      <Link
        to={frente.path}
        className={`group block p-10 h-full transition-all duration-500 ${accent.surface} hover:${accent.glow}`}
      >
        <div className={`font-lato text-6xl opacity-20 mb-8 group-hover:opacity-100 transition-opacity ${accent.text}`}>
          0{index + 1}
        </div>
        <h3 className={`text-2xl mb-4 text-mauri-white group-hover:${accent.text} transition-colors ${fontDisplayClass(frente.fontDisplay)}`}>
          {frente.nome}
        </h3>
        <p className="font-lato text-sm uppercase tracking-widest mb-4 opacity-70">{frente.tagline}</p>
        <p className="font-lato text-white/70 font-light leading-relaxed mb-6">
          {frente.descricao}
        </p>
        <div className={`flex items-center text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 ${accent.text}`}>
          <span className="mr-2">Ver {frente.nome}</span>
          <ArrowRight size={14} />
        </div>
      </Link>
    </motion.div>
  );
};

export default FrenteCard;
