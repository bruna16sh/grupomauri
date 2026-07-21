import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CaseStudy, Frente } from '../types';
import { accentClasses } from './accent';

interface CaseCardProps {
  caseStudy: CaseStudy;
  accent: Frente['accent'];
}

const CaseCard: React.FC<CaseCardProps> = ({ caseStudy, accent }) => {
  const a = accentClasses[accent];
  return (
    <Link
      to={`/cases/${caseStudy.slug}`}
      className={`group block p-8 h-full transition-all duration-500 bg-white/[0.02] border border-white/10 hover:${a.border}`}
    >
      <span className={`font-lato text-xs uppercase tracking-[0.2em] mb-3 block font-bold ${a.text}`}>
        {caseStudy.segmento}
      </span>
      <h4 className="font-bodoni text-2xl mb-3 group-hover:text-white transition-colors">{caseStudy.titulo}</h4>
      <p className="font-lato text-white/50 text-sm font-light leading-relaxed mb-4">{caseStudy.resultado}</p>
      <div className="flex items-center text-[11px] uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
        Ver case completo <ArrowRight size={12} className="ml-2" />
      </div>
    </Link>
  );
};

export default CaseCard;
