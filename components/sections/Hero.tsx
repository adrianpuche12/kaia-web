'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Button from '../ui/Button';

const Hero = () => {
  const t = useTranslations();
  const tBrand = useTranslations('brand');
  const tHero = useTranslations('hero');

  const handleDownload = () => {
    // Navegar a la sección de releases en lugar de abrir Expo Dev
    const releasesSection = document.getElementById('releases');
    if (releasesSection) {
      releasesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-primary">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Container */}
          <div className="mb-8 inline-block">
            <div className="bg-white/25 backdrop-blur-sm rounded-3xl px-12 py-6">
              <h1 className="text-7xl md:text-8xl font-bold text-white tracking-wider">
                {tBrand('name')}
              </h1>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-white/95 font-light mb-8 tracking-wide">
            {tBrand('tagline')}
          </p>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {tHero('headline')}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            {tBrand('description')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-tertiary hover:bg-tertiary-dark text-white shadow-2xl"
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
                  d="M4 16v1a3 3 0 003 3h10a 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              {tHero('ctaDownload')}
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 hover:border-white/80 backdrop-blur-sm"
              onClick={() => {
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {tHero('ctaLearnMore')}
            </Button>
          </div>

          {/* Stats preview */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold">1,000+</div>
              <div className="text-sm text-white/80">{tHero('statsUsers')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">5,000+</div>
              <div className="text-sm text-white/80">{tHero('statsDownloads')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">4.8 ⭐</div>
              <div className="text-sm text-white/80">{tHero('statsRating')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
