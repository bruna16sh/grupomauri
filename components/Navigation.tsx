import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';
import { frentes, WHATSAPP_URL } from '../data/frentes';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-mauri-black/90 backdrop-blur-md border-white/10 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('hero')}
          className="cursor-pointer flex items-center hover:opacity-90 transition-opacity"
          aria-label="Ir para o topo"
        >
          <Logo className="h-9 w-auto" />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {frentes.map((f) => (
            <button
              key={f.nome}
              onClick={() => scrollToSection('solucoes')}
              className="font-lato text-sm text-white/70 hover:text-white transition-colors"
            >
              {f.nome}
            </button>
          ))}
          <Button
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="!py-3 !px-6 !text-xs"
          >
            Solicitar diagnóstico
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-mauri-black border-b border-white/10 p-6 md:hidden flex flex-col space-y-6 shadow-2xl">
          {frentes.map((f) => (
            <button
              key={f.nome}
              onClick={() => scrollToSection('solucoes')}
              className="text-left font-lato text-white/80"
            >
              {f.nome}
            </button>
          ))}
          <Button
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="w-full"
          >
            Solicitar diagnóstico
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
