import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-mauri-black">
      {/* 
         TEXTURA PROCEDURAL AVANÇADA 
         Recria o efeito de 'papel martelado/couro' usando luz e ruído fractal.
      */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.12] mix-blend-soft-light">
        <filter id="hammeredPaper">
          {/* Gera o ruído base (a granulação) */}
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.60" 
            numOctaves="4" 
            stitchTiles="stitch" 
            result="noise"
          />
          
          {/* Aplica iluminação para criar o relevo 3D (picos e vales) da textura */}
          <feDiffuseLighting 
            in="noise" 
            lightingColor="#ffffff" 
            surfaceScale="2" 
            result="light"
          >
            <feDistantLight azimuth="45" elevation="35" />
          </feDiffuseLighting>
        </filter>
        <rect width="100%" height="100%" filter="url(#hammeredPaper)" />
      </svg>
      
      {/* Iluminação de Estúdio (Vignette) */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/40 to-black/90" />
      
      {/* Gradiente sutil de topo para baixo para profundidade extra */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
    </div>
  );
};

export default Background;