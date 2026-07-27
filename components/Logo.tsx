import React from 'react';

interface LogoProps {
  className?: string;
}

/**
 * Wordmark oficial do Grupo Mauri (cream sobre transparente), com o triângulo maroon original.
 * Arquivo em public/logo.webp (520x145). Dimensionar por altura (h-*) + w-auto.
 */
const Logo: React.FC<LogoProps> = ({ className }) => {
  return <img src="/logo.webp" alt="Grupo Mauri" className={className} />;
};

export default Logo;
