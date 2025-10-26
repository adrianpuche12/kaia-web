'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import styles from '@/styles/animations.module.css';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleIn';
  delay?: number;
  duration?: 'fast' | 'normal' | 'slow';
  as?: 'p' | 'span' | 'div';
}

/**
 * Componente de texto con animación de entrada automática
 * Se anima cuando entra en el viewport
 */
export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration = 'normal',
  as = 'p',
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  const delayClass = delay > 0 ? styles[`delay-${delay}`] : '';
  const durationClass = styles[`duration-${duration}`];
  const animationClass = isVisible ? styles[animation] : styles.animated;

  const textProps = {
    ref: elementRef as any,
    className: `${className} ${animationClass} ${delayClass} ${durationClass}`,
  };

  if (as === 'p') return <p {...textProps}>{children}</p>;
  if (as === 'span') return <span {...textProps}>{children}</span>;
  return <div {...textProps}>{children}</div>;
};
