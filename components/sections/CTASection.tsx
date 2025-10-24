'use client';

import React from 'react';
import Button from '../ui/Button';
import { DOWNLOAD_LINKS } from '@/lib/constants';

const CTASection = () => {
  const handleDownload = () => {
    window.open(DOWNLOAD_LINKS.apkDirect, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comienza a usar Kaia hoy
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Únete a miles de usuarios que ya están transformando su vida diaria con el poder de la voz y la inteligencia artificial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 shadow-xl"
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
              Descargar gratis
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary"
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
              Ver documentación
            </Button>
          </div>

          {/* Features highlight */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">🎤</div>
              <div className="text-sm font-medium">Voz natural</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">🤖</div>
              <div className="text-sm font-medium">IA inteligente</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">🔒</div>
              <div className="text-sm font-medium">100% seguro</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">🆓</div>
              <div className="text-sm font-medium">Gratis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
