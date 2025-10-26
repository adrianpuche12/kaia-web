'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import styles from '@/styles/animations.module.css';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleIn';
  delay?: number;
  duration?: 'fast' | 'normal' | 'slow';
}

/**
 * Componente contenedor con animación de entrada automática
 * Se anima cuando entra en el viewport
 */
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
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

  return (
    <div
      ref={elementRef as any}
      className={`${className} ${animationClass} ${delayClass} ${durationClass}`}
    >
      {children}
    </div>
  );
};
