'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

const Stats = () => {
  const t = useTranslations('stats');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { key: 'activeUsers', value: 1000, suffix: '+' },
    { key: 'totalDownloads', value: 5000, suffix: '+' },
    { key: 'eventsCreated', value: 50000, suffix: '+' },
    { key: 'averageRating', value: 4.8, suffix: '⭐', decimals: 1 },
    { key: 'apiEndpoints', value: 38, suffix: '' },
    { key: 'uptime', value: 99.9, suffix: '%', decimals: 1 },
  ];

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
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.key}
              stat={stat}
              label={t(`items.${stat.key}`)}
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
    suffix?: string;
    decimals?: number;
  };
  label: string;
  isVisible: boolean;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ stat, label, isVisible, delay }) => {
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
    return Math.floor(num).toLocaleString();
  };

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        {formatNumber(count)}
        {stat.suffix}
      </div>
      <div className="text-sm text-white/80">{label}</div>
    </div>
  );
};

export default Stats;
