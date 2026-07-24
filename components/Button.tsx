import React from 'react';

type Variant = 'primary' | 'outline' | 'text';

const baseStyles = "inline-block text-center font-lato tracking-widest uppercase text-xs sm:text-sm font-bold py-4 px-8 transition-all duration-300 ease-out border cursor-pointer";

const variants: Record<Variant, string> = {
  primary: "border-mauri-white text-mauri-black bg-mauri-white hover:bg-transparent hover:text-mauri-white",
  outline: "border-mauri-white text-mauri-white hover:bg-mauri-white hover:text-mauri-black bg-transparent",
  text: "border-transparent text-mauri-white hover:text-mauri-silver px-4",
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if ('href' in props && props.href !== undefined) {
    return (
      <a className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};

export default Button;
