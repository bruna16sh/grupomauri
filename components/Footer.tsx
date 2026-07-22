import React from 'react';
import { Linkedin } from 'lucide-react';
import Logo from './Logo';
import { frentes, WHATSAPP_URL } from '../data/frentes';

const Footer: React.FC = () => {
  const scrollToSolucoes = () => {
    document.getElementById('solucoes')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 border-t border-white/10 bg-black/40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="max-w-sm">
          <div className="mb-6 opacity-90">
            <Logo className="h-10 w-auto" />
          </div>
          <p className="font-lato text-sm text-white/50 leading-relaxed">
            Ecossistema de tecnologia, cloud e marca para empresas que precisam crescer com mais estrutura.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 md:justify-end">
          <nav className="flex flex-col gap-3">
            {frentes.map((f) => (
              <button
                key={f.nome}
                onClick={scrollToSolucoes}
                className="text-left font-lato text-sm text-white/60 hover:text-white transition-colors"
              >
                {f.nome}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-lato text-sm text-white/60 hover:text-white transition-colors"
            >
              Contato
            </a>
          </nav>
          <a
            href="#"
            aria-label="LinkedIn"
            className="w-10 h-10 shrink-0 border border-white/20 rounded-full flex items-center justify-center hover:bg-mauri-red hover:border-mauri-red transition-all duration-300 text-white/60 hover:text-white"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5">
        <p className="font-lato text-xs text-white/30 uppercase tracking-widest">
          © {new Date().getFullYear()} Grupo Mauri. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
