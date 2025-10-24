'use client';

import React, { useEffect, useRef, useState } from 'react';
import { STATS } from '@/lib/constants';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="stats" ref={sectionRef} className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kaia en números
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Nuestro crecimiento y el impacto que estamos generando
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {STATS.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: {
    value: number;
    label: string;
    suffix?: string;
    decimals?: number;
  };
  isVisible: boolean;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ stat, isVisible, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const stepValue = stat.value / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += stepValue;
        if (current >= stat.value) {
          setCount(stat.value);
          clearInterval(interval);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, stat.value, delay]);

  const formatNumber = (num: number) => {
    if (stat.decimals !== undefined) {
      return num.toFixed(stat.decimals);
    }
    return Math.floor(num).toLocaleString('es-ES');
  };

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        {formatNumber(count)}
        {stat.suffix}
      </div>
      <div className="text-sm text-white/80">{stat.label}</div>
    </div>
  );
};

export default Stats;
