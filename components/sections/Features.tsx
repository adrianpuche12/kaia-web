'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Card from '../ui/Card';
import { AnimatedHeading, AnimatedText, AnimatedSection } from '../animated';

const Features = () => {
  const t = useTranslations('features');

  const features = [
    { key: 'voice', icon: '🗣️', color: 'primary' },
    { key: 'events', icon: '📅', color: 'secondary' },
    { key: 'alarms', icon: '⏰', color: 'accent' },
    { key: 'messaging', icon: '📱', color: 'tertiary' },
    { key: 'geolocation', icon: '🗺️', color: 'info' },
    { key: 'ai', icon: '🤖', color: 'gradient' },
  ];

  const colorClasses: Record<string, string> = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    tertiary: 'bg-tertiary/10 text-tertiary',
    accent: 'bg-accent/10 text-accent',
    info: 'bg-info/10 text-info',
    gradient: 'bg-gradient-primary text-white',
  };

  return (
    <section id="features" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <AnimatedHeading level={2} animation="fadeInUp" className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('title')}
          </AnimatedHeading>
          <AnimatedText animation="fadeInUp" delay={100} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </AnimatedText>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <AnimatedSection
              key={feature.key}
              animation="fadeInUp"
              delay={100 * (index + 2)}
              duration="normal"
            >
              <Card hover className="text-center h-full">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl ${
                      colorClasses[feature.color]
                    }`}
                  >
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(`items.${feature.key}.title`)}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {t(`items.${feature.key}.description`)}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
