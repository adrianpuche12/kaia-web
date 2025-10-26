'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { AnimatedHeading, AnimatedText, AnimatedSection } from '../animated';

const HowItWorks = () => {
  const t = useTranslations('features');

  const features = [
    {
      key: 'voice',
      icon: '🗣️',
      gradient: 'from-purple-50 to-blue-50',
      iconBg: 'from-purple-400 to-blue-500',
      reverse: false
    },
    {
      key: 'events',
      icon: '📅',
      gradient: 'from-blue-50 to-cyan-50',
      iconBg: 'from-blue-400 to-cyan-500',
      reverse: true
    },
    {
      key: 'alarms',
      icon: '⏰',
      gradient: 'from-pink-50 to-rose-50',
      iconBg: 'from-pink-400 to-rose-500',
      reverse: false
    },
    {
      key: 'messaging',
      icon: '📱',
      gradient: 'from-orange-50 to-amber-50',
      iconBg: 'from-orange-400 to-amber-500',
      reverse: true
    },
    {
      key: 'geolocation',
      icon: '🗺️',
      gradient: 'from-teal-50 to-emerald-50',
      iconBg: 'from-teal-400 to-emerald-500',
      reverse: false
    },
    {
      key: 'ai',
      icon: '🤖',
      gradient: 'from-violet-50 to-purple-50',
      iconBg: 'from-violet-400 to-purple-500',
      reverse: true
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <AnimatedHeading
            level={2}
            animation="fadeInUp"
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            {t('title')}
          </AnimatedHeading>
          <AnimatedText
            animation="fadeInUp"
            delay={100}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </AnimatedText>
        </div>

        {/* Feature Sections */}
        <div className="max-w-7xl mx-auto space-y-12">
          {features.map((feature, index) => (
            <AnimatedSection
              key={feature.key}
              animation={feature.reverse ? 'fadeInRight' : 'fadeInLeft'}
              delay={100 * (index + 1)}
              className="w-full"
            >
              <div
                className={`
                  relative overflow-hidden rounded-3xl
                  bg-gradient-to-br ${feature.gradient}
                  p-8 md:p-12 lg:p-16
                  shadow-lg hover:shadow-2xl
                  transition-all duration-500
                  border border-white/50
                `}
              >
                <div
                  className={`
                    flex flex-col gap-8
                    ${feature.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}
                    items-center justify-between
                  `}
                >
                  {/* Text Content */}
                  <div className="flex-1 space-y-6">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                      {t(`items.${feature.key}.title`)}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                      {t(`items.${feature.key}.description`)}
                    </p>
                  </div>

                  {/* Icon/Image */}
                  <div className="flex-shrink-0">
                    <div
                      className={`
                        w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48
                        rounded-3xl
                        bg-gradient-to-br ${feature.iconBg}
                        flex items-center justify-center
                        shadow-xl
                        transform transition-transform duration-500
                        hover:scale-110 hover:rotate-3
                      `}
                    >
                      <span className="text-6xl md:text-7xl lg:text-8xl filter drop-shadow-lg">
                        {feature.icon}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative gradient overlay */}
                <div
                  className="absolute -z-10 top-0 right-0 w-64 h-64 bg-white/30 rounded-full blur-3xl"
                  style={{
                    transform: feature.reverse ? 'translate(30%, -30%)' : 'translate(-30%, -30%)',
                  }}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
