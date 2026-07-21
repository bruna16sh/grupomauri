
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import Logo from './Logo';
import { frentes } from '../data/frentes';

interface NavProps {
  onOpenModal: () => void;
}

const Navigation: React.FC<NavProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-mauri-black/90 backdrop-blur-md border-white/10 py-4'
          : 'bg-transparent border-transparent py-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="cursor-pointer w-40 sm:w-48 hover:opacity-90 transition-opacity">
          <Logo className="w-full h-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {frentes.map((f) => (
            <Link
              key={f.id}
              to={f.path}
              className={`font-lato text-sm transition-colors ${
                isActive(f.path) ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {f.nome}
            </Link>
          ))}
          <Button variant="outline" onClick={onOpenModal} className="!py-3 !px-6 !text-xs">
            Aplicar para Diagnóstico
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
          {frentes.map((f) => (
            <Link
              key={f.id}
              to={f.path}
              className="text-left font-lato text-white/80"
              onClick={() => setMobileMenuOpen(false)}
            >
              {f.nome}
            </Link>
          ))}
          <Button variant="primary" onClick={() => { setMobileMenuOpen(false); onOpenModal(); }} className="w-full">
            Aplicar para Diagnóstico
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
