import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 220 85" 
      className={className}
      aria-label="Grupo Mauri"
    >
      {/* 
         Nota: As fontes são herdadas do index.html (Bodoni Moda e Lato).
         O SVG inline permite manipular cores via CSS (fill="currentColor") se necessário, 
         mas aqui fixamos as cores da marca.
      */}
      
      {/* Triângulo Vermelho - Alinhado à esquerda da base do Mauri */}
      <path d="M0 60 L7 44 L14 60 Z" fill="#920027" />

      {/* GRUPO - Lato, Pequeno, Espaçamento Largo */}
      <text 
        x="22" 
        y="30" 
        fontFamily="'Lato', sans-serif" 
        fontWeight="300" 
        fontSize="11" 
        letterSpacing="0.35em" 
        fill="#ededed"
        opacity="0.9"
      >
        GRUPO
      </text>

      {/* MAURI - Bodoni, Grande */}
      <text 
        x="20" 
        y="60" 
        fontFamily="'Bodoni Moda', serif" 
        fontWeight="400" 
        fontSize="38" 
        fill="#ededed"
      >
        MAURI
      </text>

      {/* Tagline - Lato, Muito pequena, Espaçamento Largo */}
      <text 
        x="22" 
        y="75" 
        fontFamily="'Lato', sans-serif" 
        fontWeight="300" 
        fontSize="5.5" 
        letterSpacing="0.3em" 
        fill="#ededed" 
        opacity="0.6"
      >
        BRANDING & MARKETING & VENDAS
      </text>
    </svg>
  );
};

export default Logo;