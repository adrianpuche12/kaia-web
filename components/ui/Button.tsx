import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'tertiary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
      primary: 'bg-primary-500 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl focus:ring-primary-500',
      secondary: 'bg-secondary-500 hover:bg-secondary-700 text-white shadow-lg hover:shadow-xl focus:ring-secondary-500',
      tertiary: 'bg-tertiary-500 hover:bg-tertiary-700 text-white shadow-lg hover:shadow-xl focus:ring-tertiary-500',
      accent: 'bg-accent-500 hover:bg-accent-700 text-white shadow-lg hover:shadow-xl focus:ring-accent-500',
      outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500',
      ghost: 'text-primary-500 hover:bg-primary-500/10 focus:ring-primary-500',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
