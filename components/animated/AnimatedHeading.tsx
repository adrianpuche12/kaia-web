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

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const delayClass = delay > 0 ? styles[`delay-${delay}`] : '';
  const durationClass = styles[`duration-${duration}`];
  const animationClass = isVisible ? styles[animation] : styles.animated;

  return (
    <Tag
      ref={elementRef as any}
      className={`${className} ${animationClass} ${delayClass} ${durationClass}`}
    >
      {children}
    </Tag>
  );
};
