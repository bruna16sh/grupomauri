import React from 'react';

type Variant = 'primary' | 'outline' | 'text';

const baseStyles = "inline-flex items-center justify-center min-h-[44px] text-center font-lato tracking-widest uppercase text-xs sm:text-sm font-bold py-3.5 px-8 border cursor-pointer transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out active:translate-y-px";

const variants: Record<Variant, string> = {
  primary: "border-mauri-white text-mauri-black bg-mauri-white hover:bg-white/90 hover:border-white/90",
  outline: "border-white/25 text-mauri-white bg-white/[0.02] hover:bg-mauri-white hover:text-mauri-black hover:border-mauri-white",
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
