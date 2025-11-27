import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';

interface NavProps {
  onOpenModal: () => void;
}

const Navigation: React.FC<NavProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-40 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-mauri-black/90 backdrop-blur-md border-white/10 py-4' 
          : 'bg-transparent border-transparent py-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => scrollToSection('hero')} 
          className="cursor-pointer w-40 sm:w-48 hover:opacity-90 transition-opacity"
        >
          <Logo className="w-full h-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('problem')} className="font-lato text-sm text-white/70 hover:text-white transition-colors">O Problema</button>
          <button onClick={() => scrollToSection('solution')} className="font-lato text-sm text-white/70 hover:text-white transition-colors">A Solução</button>
          <button onClick={() => scrollToSection('services')} className="font-lato text-sm text-white/70 hover:text-white transition-colors">Serviços</button>
          <Button variant="outline" onClick={onOpenModal} className="!py-3 !px-6 !text-xs">
            Agendar Diagnóstico
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-mauri-black border-b border-white/10 p-6 md:hidden flex flex-col space-y-6 animate-fade-in shadow-2xl">
          <button onClick={() => scrollToSection('problem')} className="text-left font-lato text-white/80">O Problema</button>
          <button onClick={() => scrollToSection('solution')} className="text-left font-lato text-white/80">A Solução</button>
          <button onClick={() => scrollToSection('services')} className="text-left font-lato text-white/80">Serviços</button>
          <Button variant="primary" onClick={() => { setMobileMenuOpen(false); onOpenModal(); }} className="w-full">
            Agendar Diagnóstico
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;