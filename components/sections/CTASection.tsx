'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Button from '../ui/Button';
import { AnimatedHeading, AnimatedText, AnimatedSection } from '../animated';

const CTASection = () => {
  const t = useTranslations('cta');

  const handleDownload = () => {
    // Navegar a la sección de releases
    const releasesSection = document.getElementById('releases');
    if (releasesSection) {
      releasesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedHeading level={2} animation="fadeInUp" className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('title')}
          </AnimatedHeading>
          <AnimatedText animation="fadeInUp" delay={100} className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            {t('subtitle')}
          </AnimatedText>

          <AnimatedSection animation="fadeInUp" delay={200} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-primary hover:bg-gray-100 shadow-xl transition-all duration-200"
              onClick={handleDownload}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              {t('button')}
            </button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 hover:border-white/80 backdrop-blur-sm"
              onClick={() => {
                window.open('https://kaia-production.up.railway.app/api/docs', '_blank');
              }}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Documentation
            </Button>
          </AnimatedSection>

          {/* Features highlight */}
          <AnimatedSection animation="fadeIn" delay={300} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">🎤</div>
              <div className="text-sm font-medium">Natural voice</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">🤖</div>
              <div className="text-sm font-medium">Smart AI</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">🔒</div>
              <div className="text-sm font-medium">100% secure</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">🆓</div>
              <div className="text-sm font-medium">Free</div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
