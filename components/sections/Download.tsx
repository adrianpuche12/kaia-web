'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Button from '../ui/Button';
import { DOWNLOAD_LINKS } from '@/lib/constants';
import { AnimatedHeading, AnimatedText, AnimatedSection } from '../animated';

const Download = () => {
  const t = useTranslations('download');
  const handleDownload = (platform: 'android' | 'ios' | 'apk') => {
    if (platform === 'apk') {
      // Navegar a la sección de releases
      const releasesSection = document.getElementById('releases');
      if (releasesSection) {
        releasesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const links = {
        android: DOWNLOAD_LINKS.playStore,
        ios: DOWNLOAD_LINKS.appStore,
      };

      if (links[platform] !== '#') {
        window.open(links[platform], '_blank');
      }
    }
  };

  return (
    <section id="download" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <AnimatedHeading level={2} animation="fadeInUp" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </AnimatedHeading>
          <AnimatedText animation="fadeInUp" delay={100} className="text-xl text-gray-700 mb-12">
            {t('subtitle')}
          </AnimatedText>

          {/* Download Buttons */}
          <AnimatedSection animation="fadeInUp" delay={200} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* Google Play */}
            <button
              onClick={() => handleDownload('android')}
              className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              disabled
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.17L6.05 21.14l8.96-5.17 2.8-1.64m1.4-2.66l-2.8-1.64L6.05 2.86l10.76 6.25 2.8 1.64c.74.43.74 1.43 0 1.86m-7.76 4.68L2.5 3.65l8.95 5.17z" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-75">{t('comingSoon')}</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </button>

            {/* App Store */}
            <button
              onClick={() => handleDownload('ios')}
              className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors opacity-50"
              disabled
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-75">{t('comingSoon')}</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </button>
          </AnimatedSection>

          {/* Direct APK Download */}
          <AnimatedSection animation="fadeInUp" delay={300} className="mb-12">
            <p className="text-sm text-gray-700 mb-4">
              {t('directDownload')}
            </p>
            <Button
              variant="outline"
              onClick={() => handleDownload('apk')}
              className="border-primary text-primary"
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
              {t('viewAllVersions')}
            </Button>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection animation="fadeIn" delay={400} className="grid grid-cols-2 gap-8 max-w-md mx-auto pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5,000+</div>
              <div className="text-sm text-gray-700 mt-1">{t('downloads')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.8 ⭐</div>
              <div className="text-sm text-gray-700 mt-1">{t('rating')}</div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Download;
