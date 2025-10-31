'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/sections/Footer';
import { AnimatedHeading, AnimatedText, AnimatedSection } from '@/components/animated';

const featureIcons: Record<string, string> = {
  voice: '🗣️',
  events: '📅',
  alarms: '⏰',
  messaging: '📱',
  geolocation: '🗺️',
  ai: '🤖',
};

// Gradientes únicos para cada funcionalidad (matching con home)
  const featureGradients: Record<string, {
    bg: string;
    iconBg: string;
    hero: string;
    heroDark: string;
    badge: string;
    button: string;
    border: string;
    glow: string;
  }> = {
    voice: {
      bg: 'from-purple-50 to-blue-50',
      iconBg: 'from-purple-400 to-blue-500',
      hero: 'from-purple-500 via-blue-500 to-purple-600',
      heroDark: 'from-purple-600 via-blue-600 to-purple-700',
      badge: 'from-purple-500 to-blue-500',
      button: 'from-purple-500 via-blue-500 to-purple-600',
      border: 'from-purple-500 via-blue-500 to-purple-600',
      glow: 'from-purple-400 to-blue-500',
    },
    events: {
      bg: 'from-blue-50 to-cyan-50',
      iconBg: 'from-blue-400 to-cyan-500',
      hero: 'from-blue-500 via-cyan-500 to-blue-600',
      heroDark: 'from-blue-600 via-cyan-600 to-blue-700',
      badge: 'from-blue-500 to-cyan-500',
      button: 'from-blue-500 via-cyan-500 to-blue-600',
      border: 'from-blue-500 via-cyan-500 to-blue-600',
      glow: 'from-blue-400 to-cyan-500',
    },
    alarms: {
      bg: 'from-pink-50 to-rose-50',
      iconBg: 'from-pink-400 to-rose-500',
      hero: 'from-pink-500 via-rose-500 to-pink-600',
      heroDark: 'from-pink-600 via-rose-600 to-pink-700',
      badge: 'from-pink-500 to-rose-500',
      button: 'from-pink-500 via-rose-500 to-pink-600',
      border: 'from-pink-500 via-rose-500 to-pink-600',
      glow: 'from-pink-400 to-rose-500',
    },
    messaging: {
      bg: 'from-orange-50 to-amber-50',
      iconBg: 'from-orange-400 to-amber-500',
      hero: 'from-orange-500 via-amber-500 to-orange-600',
      heroDark: 'from-orange-600 via-amber-600 to-orange-700',
      badge: 'from-orange-500 to-amber-500',
      button: 'from-orange-500 via-amber-500 to-orange-600',
      border: 'from-orange-500 via-amber-500 to-orange-600',
      glow: 'from-orange-400 to-amber-500',
    },
    geolocation: {
      bg: 'from-teal-50 to-emerald-50',
      iconBg: 'from-teal-400 to-emerald-500',
      hero: 'from-teal-500 via-emerald-500 to-teal-600',
      heroDark: 'from-teal-600 via-emerald-600 to-teal-700',
      badge: 'from-teal-500 to-emerald-500',
      button: 'from-teal-500 via-emerald-500 to-teal-600',
      border: 'from-teal-500 via-emerald-500 to-teal-600',
      glow: 'from-teal-400 to-emerald-500',
    },
    ai: {
      bg: 'from-violet-50 to-purple-50',
      iconBg: 'from-violet-400 to-purple-500',
      hero: 'from-violet-500 via-purple-500 to-violet-600',
      heroDark: 'from-violet-600 via-purple-600 to-violet-700',
      badge: 'from-violet-500 to-purple-500',
      button: 'from-violet-500 via-purple-500 to-violet-600',
      border: 'from-violet-500 via-purple-500 to-violet-600',
      glow: 'from-violet-400 to-purple-500',
    },
  };

export default function FeatureDetailPage() {
  const params = useParams();
  const router = useRouter();
  const t = useTranslations('featureDetails');
  const tCommon = useTranslations('features');
  const locale = params.locale as string;
  const featureId = params.featureId as string;

  // Validar que el featureId existe
  if (!featureIcons[featureId]) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Feature not found</h1>
          <button
            onClick={() => router.push(`/${locale}`)}
            className="text-indigo-600 hover:text-indigo-700 font-semibold"
          >
            Return to home
          </button>
        </div>
        <Footer />
      </main>
    );
  }

  const gradient = featureGradients[featureId];
  const icon = featureIcons[featureId];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Rediseñado */}
      <section className={`relative py-20 md:py-28 overflow-hidden bg-gradient-to-br ${gradient.hero}`}>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-600/20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="grid md:grid-cols-2 gap-12 items-center">
              {/* Icon */}
              <div className="flex justify-center md:justify-start order-2 md:order-1">
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-white/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                  {/* Icon container */}
                  <div className={`relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-3xl bg-white flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-105 border-4 border-white/50`}>
                    <span className="text-8xl md:text-9xl lg:text-[8rem] filter drop-shadow-lg">
                      {icon}
                    </span>
                  </div>
                </div>
              </div>

              {/* Title and Subtitle */}
              <div className="text-center md:text-left space-y-6 order-1 md:order-2">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold border border-white/30">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>Funcionalidad Destacada</span>
                </div>

                <AnimatedHeading
                  level={1}
                  animation="fadeInUp"
                  delay={100}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg"
                >
                  {tCommon(`items.${featureId}.title`)}
                </AnimatedHeading>
                <AnimatedText
                  animation="fadeInUp"
                  delay={200}
                  className="text-xl md:text-2xl text-white/90 drop-shadow-md"
                >
                  {tCommon(`items.${featureId}.description`)}
                </AnimatedText>

                {/* Quick stats */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white font-semibold">Respuesta instantánea</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white font-semibold">100% por voz</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Full Description Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                {t(`${featureId}.fullDescription.title`)}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-xl leading-relaxed">
                  {t(`${featureId}.fullDescription.intro`)}
                </p>
                <p className="text-lg leading-relaxed">
                  {t(`${featureId}.fullDescription.details`)}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How to Use Section - Rediseñado */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-16">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${gradient.badge} text-white text-sm font-semibold mb-6 shadow-lg`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Guía Rápida</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {t(`${featureId}.howToUse.title`)}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t(`${featureId}.howToUse.subtitle`)}
              </p>
            </AnimatedSection>

            {/* Steps con diseño visual mejorado */}
            <div className="relative">
              {/* Línea conectora vertical (solo visible en desktop) - con gradiente del color de la funcionalidad */}
              <div className={`hidden md:block absolute left-[2.25rem] top-16 bottom-16 w-0.5 bg-gradient-to-b ${gradient.glow}`}></div>

              <div className="space-y-8">
                {[1, 2, 3, 4].map((step, index) => (
                  <AnimatedSection
                    key={step}
                    animation="fadeInUp"
                    delay={100 * (index + 1)}
                    className="relative"
                  >
                    <div className={`bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2 ${gradient.bg.replace('from-', 'border-').replace(' to-', '/50 hover:border-')} transition-all duration-300 hover:shadow-2xl group`}>
                      <div className="flex items-start gap-6">
                        {/* Step number con efecto especial */}
                        <div className="relative flex-shrink-0">
                          {/* Glow effect */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${gradient.glow} rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                          {/* Number circle */}
                          <div className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${gradient.badge} flex items-center justify-center text-white font-bold text-2xl md:text-3xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                            {step}
                          </div>
                        </div>

                        <div className="flex-1 pt-1">
                          <h3 className={`text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r ${gradient.badge} group-hover:bg-clip-text group-hover:text-transparent transition-colors`}>
                            {t(`${featureId}.howToUse.steps.step${step}.title`)}
                          </h3>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            {t(`${featureId}.howToUse.steps.step${step}.description`)}
                          </p>
                        </div>

                        {/* Ícono decorativo */}
                        <div className="hidden lg:block flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section - Rediseñado */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-16">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${gradient.badge} text-white text-sm font-semibold mb-6 shadow-lg`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Características Principales</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {t(`${featureId}.keyFeatures.title`)}
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {[1, 2, 3, 4].map((feature, index) => {
                const icons = [
                  // Icon 1: Location
                  <svg key="1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>,
                  // Icon 2: Alert
                  <svg key="2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>,
                  // Icon 3: Bell
                  <svg key="3" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>,
                  // Icon 4: Brain
                  <svg key="4" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ];

                return (
                  <AnimatedSection
                    key={feature}
                    animation={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}
                    delay={100 * (index + 1)}
                    className="group"
                  >
                    <div className="relative h-full">
                      {/* Borde con gradiente */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradient.glow} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`}></div>

                      {/* Card content */}
                      <div className="relative h-full p-4 md:p-6 lg:p-8 rounded-2xl bg-white border-2 border-gray-200 group-hover:border-transparent shadow-lg group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
                        {/* Icon */}
                        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${gradient.badge} flex items-center justify-center text-white mb-4 md:mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg flex-shrink-0`}>
                          <div className="scale-75 md:scale-100">
                            {icons[index]}
                          </div>
                        </div>

                        <h3 className={`text-base md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-4 group-hover:bg-gradient-to-r ${gradient.badge} group-hover:bg-clip-text group-hover:text-transparent transition-colors break-words`}>
                          {t(`${featureId}.keyFeatures.features.feature${feature}.title`)}
                        </h3>
                        <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed break-words">
                          {t(`${featureId}.keyFeatures.features.feature${feature}.description`)}
                        </p>

                        {/* Decorative corner */}
                        <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br ${gradient.glow} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Rediseñado */}
      <section className={`relative py-20 md:py-28 overflow-hidden bg-gradient-to-br ${gradient.heroDark}`}>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fadeInUp">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-8 border border-white/30">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Comienza Ahora</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                {t('cta.title')}
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-12 drop-shadow-md max-w-3xl mx-auto">
                {t('cta.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => router.push(`/${locale}#download`)}
                  className="group relative px-10 py-5 rounded-full bg-white text-blue-600 font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:translate-x-full transition-all duration-1000"></div>

                  <span className="relative flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {t('cta.downloadButton')}
                  </span>
                </button>

                <button
                  onClick={() => router.push(`/${locale}#how-it-works`)}
                  className="px-10 py-5 rounded-full bg-transparent text-white font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/50 hover:border-white backdrop-blur-sm hover:bg-white/10"
                >
                  <span className="flex items-center gap-2">
                    {t('cta.learnMoreButton')}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Stats rápidos */}
              <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">5K+</div>
                  <div className="text-sm text-white/80">Descargas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.8⭐</div>
                  <div className="text-sm text-white/80">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">99%</div>
                  <div className="text-sm text-white/80">Uptime</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
