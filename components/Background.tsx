import React from 'react';

/**
 * Camada de fundo fixa: gradiente tonal contínuo (profundidade por plano) +
 * textura de grão sutil + vinheta. Faz a página inteira parecer uma única
 * composição, sem cortes rígidos entre seções.
 */
const Background: React.FC = () => {
  return (
    <div
      className="fixed inset-0 z-[-1] pointer-events-none"
      aria-hidden="true"
      style={{
        background:
          'linear-gradient(180deg, var(--bg-deep) 0%, var(--bg-primary) 20%, var(--bg-secondary) 48%, var(--bg-primary) 76%, var(--bg-deep) 100%)',
      }}
    >
      {/* Textura procedural de grão (papel/relevo), bem discreta */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06] mix-blend-soft-light">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.62" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feDiffuseLighting in="noise" lightingColor="#ffffff" surfaceScale="2" result="light">
            <feDistantLight azimuth="45" elevation="34" />
          </feDiffuseLighting>
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      {/* Vinheta ambiente: mantém o centro respirando, escurece as bordas */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(125% 80% at 50% 28%, transparent, rgba(0,0,0,0.55) 100%)' }}
      />
    </div>
  );
};

export default Background;
