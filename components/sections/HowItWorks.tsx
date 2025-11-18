'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useParams, useRouter } from 'next/navigation';
import { AnimatedHeading, AnimatedText, AnimatedSection } from '../animated';

const HowItWorks = () => {
  const t = useTranslations('features');
  const tButton = useTranslations('common');
  const params = useParams();
  const router = useRouter();
  const locale = params.locale as string;

  const features = [
    {
      key: 'voice',
      icon: '🗣️',
      gradient: 'from-[#4F46E5] via-[#7C3AED] to-[#3730A3]', // Índigo → Púrpura → Índigo Dark
      reverse: false,
    },
    {
      key: 'events',
      icon: '📅',
      gradient: 'from-[#10B981] via-[#34D399] to-[#059669]', // Verde → Verde Light → Verde Dark
      reverse: true,
    },
    {
      key: 'alarms',
      icon: '⏰',
      gradient: 'from-[#F59E0B] via-[#FBBF24] to-[#D97706]', // Ámbar → Ámbar Light → Ámbar Dark
      reverse: false,
    },
    {
      key: 'messaging',
      icon: '📱',
      gradient: 'from-[#7C3AED] via-[#A78BFA] to-[#5B21B6]', // Púrpura → Púrpura Light → Púrpura Dark
      reverse: true,
    },
    {
      key: 'geolocation',
      icon: '🗺️',
      gradient: 'from-[#10B981] via-[#4F46E5] to-[#059669]', // Verde → Índigo → Verde Dark
      reverse: false,
    },
    {
      key: 'ai',
      icon: '🤖',
      gradient: 'from-[#4F46E5] via-[#7C3AED] to-[#F59E0B]', // Índigo → Púrpura → Ámbar
      reverse: true,
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
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            {t('title')}
          </AnimatedHeading>
          <AnimatedText
            animation="fadeInUp"
            delay={100}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </AnimatedText>
        </div>

        {/* Feature Sections - Todas con estilo Hero */}
        <div className="max-w-7xl mx-auto space-y-20">
          {features.map((feature, index) => {
            return (
              <AnimatedSection
                key={feature.key}
                animation="fadeInUp"
                delay={100 * (index + 1)}
                className="w-full"
              >
                {/* Diseño moderno con fondo claro */}
                <div className="relative overflow-hidden rounded-3xl shadow-xl min-h-[500px] flex items-center bg-gradient-to-br from-gray-50 to-white border border-gray-100">
                    {/* Decorative accent bar con color Kaia */}
                    <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${feature.gradient}`}></div>

                    {/* Decorative blur circles */}
                    <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${feature.gradient} opacity-10 blur-3xl rounded-full`}></div>
                    <div className={`absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br ${feature.gradient} opacity-10 blur-3xl rounded-full`}></div>

                    {/* Content */}
                    <div className="relative z-10 w-full px-8 md:px-16 py-12 md:py-20">
                      <div className="max-w-4xl mx-auto text-center">
                        <div className="space-y-8">
                          {/* Icon Badge con gradiente Kaia */}
                          <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${feature.gradient} text-white rounded-2xl px-6 py-3 shadow-lg`}>
                            <span className="text-3xl">{feature.icon}</span>
                            <span className="text-sm font-semibold uppercase tracking-wider">Featured</span>
                          </div>

                          {/* Title con gradiente Kaia */}
                          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                            <span className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                              {t(`items.${feature.key}.title`)}
                            </span>
                          </h3>

                          {/* Description */}
                          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                            {t(`items.${feature.key}.description`)}
                          </p>

                          {/* CTA Button con gradiente Kaia */}
                          <button
                            onClick={() => router.push(`/${locale}/features/${feature.key}`)}
                            className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r ${feature.gradient} text-white font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl`}
                          >
                            <span>Learn More</span>
                            <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  export default HowItWorks;
