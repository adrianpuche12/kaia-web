'use client';

import React from 'react';
import styles from '@/styles/animations.module.css';

interface GradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
  animate?: boolean;
}

/**
 * Componente con fondo de gradiente animado
 * El gradiente se mueve suavemente - efecto muy profesional
 */
export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  className = '',
  gradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  animate = true,
}) => {
  return (
    <div
      className={`relative ${className}`}
      style={{
        background: gradient,
      }}
    >
      {animate && (
        <div
          className={`absolute inset-0 ${styles.animatedGradient}`}
          style={{
            background: gradient,
            opacity: 0.8,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GradientBackground;
