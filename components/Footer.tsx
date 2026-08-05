import React from 'react';
import { Instagram } from 'lucide-react';
import Logo from './Logo';
import { unidades, WHATSAPP_URL, INSTAGRAM_URL } from '../data/unidades';

const Footer: React.FC = () => {
  return (
    <footer
      className="relative px-6 pt-20 pb-10 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, transparent, var(--bg-deep) 60%)' }}
    >
      {/* Linha superior discreta */}
      <div className="hairline absolute top-0 inset-x-0" aria-hidden="true" />
      {/* Monograma abstrato de baixa opacidade */}
      <img
        src="/favicon.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -right-8 w-72 opacity-[0.04] select-none"
      />

      <div className="relative max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="max-w-sm">
          <div className="mb-6 opacity-90">
            <Logo className="h-10 w-auto" />
          </div>
          <p className="font-lato text-sm text-white/55 leading-[1.7]">
            Tecnologia e estratégia de marca para empresas que precisam crescer com mais estrutura.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 md:justify-end">
          <nav className="flex flex-col gap-3.5">
            {unidades.map((u) => (
              <a
                key={u.nome}
                href={u.href}
                data-analytics="outbound_brand_click"
                className="link-underline self-start text-left font-lato text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                {u.nome}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline self-start font-lato text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              Contato
            </a>
          </nav>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram do Grupo Mauri"
            className="w-11 h-11 shrink-0 border border-white/15 rounded-full flex items-center justify-center hover:bg-mauri-white hover:border-mauri-white transition-all duration-200 text-white/60 hover:text-mauri-black"
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>

      <div className="relative max-w-[1120px] mx-auto mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="font-lato text-xs text-white/40 uppercase tracking-[0.18em]">
          © {new Date().getFullYear()} Grupo Mauri. Todos os direitos reservados.
        </p>
        <a
          href="/privacidade"
          className="link-underline self-start font-lato text-xs text-white/40 hover:text-white/70 uppercase tracking-[0.18em] transition-colors duration-200"
        >
          Política de Privacidade
        </a>
      </div>
    </footer>
  );
};

export default Footer;
