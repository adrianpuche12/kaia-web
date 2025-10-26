'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import styles from '@/styles/animations.module.css';

interface AnimatedHeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleIn';
  delay?: number;
  duration?: 'fast' | 'normal' | 'slow';
}

/**
 * Componente de encabezado con animación de entrada automática
 * Se anima cuando entra en el viewport
 */
export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  children,
  level = 2,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration = 'normal',
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  const delayClass = delay > 0 ? styles[`delay-${delay}`] : '';
  const durationClass = styles[`duration-${duration}`];
  const animationClass = isVisible ? styles[animation] : styles.animated;

  const headingProps = {
    ref: elementRef as any,
    className: `${className} ${animationClass} ${delayClass} ${durationClass}`,
  };

  if (level === 1) return <h1 {...headingProps}>{children}</h1>;
  if (level === 2) return <h2 {...headingProps}>{children}</h2>;
  if (level === 3) return <h3 {...headingProps}>{children}</h3>;
  if (level === 4) return <h4 {...headingProps}>{children}</h4>;
  if (level === 5) return <h5 {...headingProps}>{children}</h5>;
  return <h6 {...headingProps}>{children}</h6>;
};
