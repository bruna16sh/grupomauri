import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import Logo from './Logo';
import { frentes } from '../data/frentes';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-black/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <Link to="/" className="w-40 mb-4 opacity-80">
            <Logo className="w-full h-auto" />
          </Link>
          <p className="font-lato text-xs text-white/40 uppercase tracking-widest">
            © {new Date().getFullYear()} Grupo Mauri. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
          {frentes.map((f) => (
            <Link key={f.id} to={f.path} className="font-lato text-sm text-white/60 hover:text-white transition-colors">
              {f.nome}
            </Link>
          ))}
        </div>

        <div>
          <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-mauri-red hover:border-mauri-red transition-all duration-300 text-white/60 hover:text-white">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
