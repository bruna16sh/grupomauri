import React from 'react';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "font-lato tracking-widest uppercase text-xs sm:text-sm font-bold py-4 px-8 transition-all duration-500 ease-out border";
  
  const variants = {
    primary: "border-mauri-white text-mauri-black bg-mauri-white hover:bg-mauri-red hover:text-white hover:border-mauri-red",
    outline: "border-mauri-white text-mauri-white hover:bg-mauri-red hover:border-mauri-red bg-transparent",
    text: "border-transparent text-mauri-white hover:text-mauri-red px-4",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;