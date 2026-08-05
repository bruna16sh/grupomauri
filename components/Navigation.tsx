import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';
import { unidades, WHATSAPP_URL } from '../data/unidades';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-[background-color,backdrop-filter,padding,border-color] duration-300 ease-out border-b ${
        isScrolled
          ? 'bg-[#0a0908]/72 backdrop-blur-xl border-white/[0.08] py-3'
          : 'bg-transparent backdrop-blur-0 border-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center gap-6">
        <button
          onClick={() => scrollToSection('hero')}
          className="cursor-pointer flex items-center hover:opacity-85 transition-opacity duration-200"
          aria-label="Ir para o topo"
        >
          <Logo className="h-7 sm:h-8 w-auto" />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-9">
          {unidades.map((u) => (
            <button
              key={u.nome}
              onClick={() => scrollToSection('solucoes')}
              className="link-underline font-lato text-[13px] tracking-wide text-white/65 hover:text-white transition-colors duration-200"
            >
              {u.nome}
            </button>
          ))}
          <Button
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics="whatsapp_click"
            variant="outline"
            className="!py-2.5 !px-5 !text-[11px]"
          >
            Solicitar diagnóstico
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full inset-x-0 bg-[#0a0908]/95 backdrop-blur-xl border-b border-white/[0.08] px-6 py-7 md:hidden flex flex-col gap-6 shadow-2xl">
          {unidades.map((u) => (
            <button
              key={u.nome}
              onClick={() => scrollToSection('solucoes')}
              className="text-left font-lato text-white/85 hover:text-white transition-colors"
            >
              {u.nome}
            </button>
          ))}
          <Button
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics="whatsapp_click"
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
