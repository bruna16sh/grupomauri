import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 200 65" 
      className={className}
      aria-label="Grupo Mauri"
    >
      {/* 
         Reconstrução Vetorial da Imagem de Referência
         - Fonte Mauri: Bodoni Moda (Serifa de alto contraste)
         - Fonte Grupo: Lato (Sans serif geométrica)
         - Elemento: Triângulo Vermelho (#920027)
      */}
      
      {/* Triângulo Vermelho - Posicionado como ponto de ênfase na base esquerda */}
      <path d="M2 58 L8 44 L14 58 Z" fill="#920027" />

      {/* GRUPO - Alinhado opticamente com o início do "M" */}
      <text 
        x="22" 
        y="26" 
        fontFamily="'Lato', sans-serif" 
        fontWeight="300" 
        fontSize="10" 
        letterSpacing="0.45em" 
        fill="#ededed"
        opacity="0.9"
      >
        GRUPO
      </text>

      {/* MAURI - Tipografia Display */}
      <text 
        x="20" 
        y="58" 
        fontFamily="'Bodoni Moda', serif" 
        fontWeight="400" 
        fontSize="42" 
        fill="#ededed"
        letterSpacing="-0.02em"
      >
        MAURI
      </text>
    </svg>
  );
};

export default Logo;