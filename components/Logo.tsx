import React from 'react';

interface LogoProps {
  className?: string;
}

/**
 * Wordmark oficial do Grupo Mauri (cream sobre transparente).
 * Arquivo em public/logo.png (2063x575). Dimensionar por altura (h-*) + w-auto.
 * `grayscale` mantém a home neutra (dessatura o triângulo maroon da marca).
 */
const Logo: React.FC<LogoProps> = ({ className }) => {
  return <img src="/logo.png" alt="Grupo Mauri" className={`grayscale ${className ?? ''}`} />;
};

export default Logo;
