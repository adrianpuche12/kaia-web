'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { RELEASES } from '@/lib/constants';
import { AnimatedHeading, AnimatedText, AnimatedSection } from '../animated';

const Releases = () => {
  const t = useTranslations('releases');
  const locale = useLocale();
  const handleDownload = (url: string, version: string) => {
    if (url === '#') return;

    // Detectar si es un dispositivo móvil Android (principal target)
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (isAndroid || isMobile) {
      // En móviles Android, crear un link invisible y hacer click
      // Esto funciona mejor que window.location.href en Chrome móvil
      const link = document.createElement('a');
      link.href = url;
      link.style.display = 'none';
      // No usar atributo download en móvil, dejar que el navegador lo maneje
      document.body.appendChild(link);
      link.click();

      // Limpiar después de un delay para asegurar que el click se procese
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
    } else {
      // En desktop, usar el método tradicional con atributo download
      const link = document.createElement('a');
      link.href = url;
      link.download = `kaia-v${version}.apk`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      stable: {
        bg: 'bg-tertiary',
        text: 'text-white',
        label: t('stable'),
      },
      beta: {
        bg: 'bg-accent',
        text: 'text-white',
        label: t('beta'),
      },
      deprecated: {
        bg: 'bg-gray-500',
        text: 'text-white',
        label: t('deprecated'),
      },
    };

    const badge = badges[status as keyof typeof badges] || badges.stable;

    return (
      <span className={`${badge.bg} ${badge.text} px-3 py-1 rounded-full text-xs font-semibold`}>
        {badge.label}
      </span>
    );
  };

  return (
    <section id="releases" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <AnimatedHeading level={2} animation="fadeInUp" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('title')}
            </AnimatedHeading>
            <AnimatedText animation="fadeInUp" delay={100} className="text-xl text-gray-700 max-w-2xl mx-auto">
              {t('subtitle')}
            </AnimatedText>
          </div>

          {/* Releases List */}
          <div className="space-y-6">
            {RELEASES.map((release, index) => (
              <AnimatedSection
                key={release.id}
                animation="fadeInUp"
                delay={100 * (index + 2)}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900">
                            Kaia v{release.version}
                          </h3>
                          {getStatusBadge(release.status)}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            📅 {new Date(release.date).toLocaleDateString(locale, {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            📱 {release.platform}
                          </span>
                          <span className="flex items-center gap-1">
                            📦 {release.size}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Download Button */}
                    <button
                      onClick={() => handleDownload(release.downloadUrl, release.version)}
                      disabled={release.downloadUrl === '#'}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
                        release.downloadUrl === '#'
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl'
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
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
                      {release.downloadUrl === '#' ? t('comingSoon') : t('download')}
                    </button>
                  </div>

                  {/* Release Notes */}
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                      {t('releaseNotes')}
                    </h4>
                    <ul className="space-y-2">
                      {release.notes.map((note, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="text-tertiary mt-1">✓</span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Build Info */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Build #{release.buildNumber}</span>
                      <span>•</span>
                      <span>ID: {release.id.substring(0, 8)}...</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">
                  {t('howToInstall.title')}
                </h4>
                <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                  <li>{t('howToInstall.step1')}</li>
                  <li>{t('howToInstall.step2')}</li>
                  <li>{t('howToInstall.step3')}</li>
                  <li>{t('howToInstall.step4')}</li>
                </ol>
                <p className="text-xs text-blue-700 mt-3">
                  <strong>{t('howToInstall.note')}:</strong> {t('howToInstall.noteText')}{' '}
                  <a
                    href="https://kaia-production.up.railway.app/api/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-900"
                  >
                    {t('howToInstall.documentation')}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Releases;
