import React, { useEffect, useState } from 'react';
import Button from './Button';
import { readConsent, setConsent } from '../lib/consent';

/**
 * Faixa de consentimento. Só aparece enquanto não houver decisão.
 *
 * Recusar tem o mesmo peso visual de aceitar, de propósito: botão de recusa
 * escondido ou apagado descaracteriza o consentimento.
 */
const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  // Decide só depois de montar: o HTML é pré-renderizado, sem cookie para ler.
  useEffect(() => {
    if (readConsent() === 'unset') setVisible(true);
  }, []);

  if (!visible) return null;

  const decide = (state: 'granted' | 'denied') => {
    setConsent(state);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-text"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/[0.10] bg-[#0a0908]/95 backdrop-blur-xl px-6 py-5 shadow-[0_-18px_50px_rgba(0,0,0,0.45)]"
    >
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
        <div className="flex-1 min-w-0">
          <p
            id="cookie-banner-title"
            className="font-lato text-[11px] uppercase tracking-[0.22em] text-mauri-silver font-semibold mb-1.5"
          >
            Cookies neste site
          </p>
          <p id="cookie-banner-text" className="font-lato text-sm text-white/65 font-light leading-[1.65]">
            Usamos cookies para entender como o site é usado e de onde vêm as visitas. Você pode
            recusar sem perder nenhuma funcionalidade. Detalhes na{' '}
            <a href="/privacidade" className="link-underline text-white/85 hover:text-white">
              política de privacidade
            </a>
            .
          </p>
        </div>

        <div className="flex gap-3 shrink-0">
          <Button
            variant="outline"
            className="!py-3 !px-6 !text-xs flex-1 md:flex-none md:min-w-[120px]"
            onClick={() => decide('denied')}
          >
            Recusar
          </Button>
          <Button
            variant="primary"
            className="!py-3 !px-6 !text-xs flex-1 md:flex-none md:min-w-[120px]"
            onClick={() => decide('granted')}
          >
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
