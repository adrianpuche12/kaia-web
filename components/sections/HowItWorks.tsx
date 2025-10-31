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
    <section id="how-it-works" className="py-20 bg-gray-50">
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

        {/* Feature Sections - Todas con diseño estilizado */}
        <div className="max-w-7xl mx-auto space-y-20">
          {features.map((feature, index) => {
            // Definir gradientes de borde únicos para cada funcionalidad
            const borderGradients: Record<string, string> = {
              voice: 'from-purple-500 via-blue-500 to-purple-600',
              events: 'from-blue-500 via-cyan-500 to-blue-600',
              alarms: 'from-pink-500 via-rose-500 to-pink-600',
              messaging: 'from-orange-500 via-amber-500 to-orange-600',
              geolocation: 'from-teal-500 via-emerald-500 to-teal-600',
              ai: 'from-violet-500 via-purple-500 to-violet-600',
            };

            // Definir gradientes de blur decorativo para cada funcionalidad
            const blurGradients: Record<string, string> = {
              voice: 'from-purple-100 to-blue-100',
              events: 'from-blue-100 to-cyan-100',
              alarms: 'from-pink-100 to-rose-100',
              messaging: 'from-orange-100 to-amber-100',
              geolocation: 'from-teal-100 to-emerald-100',
              ai: 'from-violet-100 to-purple-100',
            };

            // Definir gradientes de glow para cada funcionalidad
            const glowGradients: Record<string, string> = {
              voice: 'from-purple-400 to-blue-500',
              events: 'from-blue-400 to-cyan-500',
              alarms: 'from-pink-400 to-rose-500',
              messaging: 'from-orange-400 to-amber-500',
              geolocation: 'from-teal-400 to-emerald-500',
              ai: 'from-violet-400 to-purple-500',
            };

            // Definir gradientes de texto para títulos
            const textGradients: Record<string, string> = {
              voice: 'from-purple-600 via-blue-600 to-purple-700',
              events: 'from-blue-600 via-cyan-600 to-blue-700',
              alarms: 'from-pink-600 via-rose-600 to-pink-700',
              messaging: 'from-orange-600 via-amber-600 to-orange-700',
              geolocation: 'from-teal-600 via-emerald-600 to-teal-700',
              ai: 'from-violet-600 via-purple-600 to-violet-700',
            };

            // Todas las features ahora usan el diseño estilizado
            return (
              <AnimatedSection
                key={feature.key}
                animation="fadeInUp"
                delay={100 * (index + 1)}
                className="w-full"
              >
                {/* Sección estilizada con banner de colores Kaia */}
                <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${borderGradients[feature.key]} p-1`}>
                  {/* Contenedor interno con fondo blanco */}
                  <div className="relative bg-white rounded-[calc(1.5rem-4px)] overflow-hidden">
                    {/* Decorative background elements */}
                    <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${blurGradients[feature.key]} rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3`}></div>
                    <div className={`absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr ${blurGradients[feature.key]} rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/3`}></div>

                    {/* Content Grid */}
                    <div className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-center p-8 md:p-12 lg:p-16">
                      {/* Icon/Image - Posición alterna */}
                      <div className={`flex justify-center ${feature.reverse ? 'md:justify-start order-2 md:order-2' : 'md:justify-end order-2 md:order-1'}`}>
                        <div className="relative group">
                          {/* Glow effect */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${glowGradients[feature.key]} rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                          {/* Icon container */}
                          <div
                            className={`
                              relative
                              w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80
                              rounded-3xl
                              bg-gradient-to-br ${feature.iconBg}
                              flex items-center justify-center
                              shadow-2xl
                              transform transition-all duration-500
                              group-hover:scale-105 group-hover:rotate-2
                              border-4 border-white
                            `}
                          >
                            <span className="text-8xl md:text-9xl lg:text-[10rem] filter drop-shadow-lg animate-pulse-slow">
                              {feature.icon}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Text Content - Posición alterna */}
                      <div className={`space-y-6 ${feature.reverse ? 'order-1 md:order-1' : 'order-1 md:order-2'}`}>
                        {/* Badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${feature.iconBg} text-white text-sm font-semibold shadow-lg`}>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span>Funcionalidad destacada</span>
                        </div>

                        {/* Title with gradient */}
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                          <span className={`bg-gradient-to-r ${textGradients[feature.key]} bg-clip-text text-transparent`}>
                            {t(`items.${feature.key}.title`)}
                          </span>
                        </h3>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                          {t(`items.${feature.key}.description`)}
                        </p>

                        {/* Button */}
                        <button
                          onClick={() => router.push(`/${locale}/features/${feature.key}`)}
                          className={`
                            inline-flex items-center gap-2 px-8 py-4 rounded-full
                            bg-gradient-to-r ${borderGradients[feature.key]}
                            text-white font-bold text-lg
                            shadow-xl hover:shadow-2xl
                            transform hover:scale-105
                            transition-all duration-300
                            border-2 border-white
                            relative overflow-hidden
                            group
                          `}
                        >
                          {/* Animated shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-1000"></div>
                          <span className="relative">{tButton('learnMore')}</span>
                          <svg className="w-5 h-5 relative transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
