'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Card from '../ui/Card';
import { TECH_STACK } from '@/lib/constants';

const TechStack = () => {
  const t = useTranslations('techStack');

  return (
    <section id="tech-stack" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 max-w-6xl mx-auto">
          {/* Backend */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">
              Backend
            </h3>
            <Card className="h-full">
              <div className="space-y-4">
                {TECH_STACK.backend.map((tech, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-2xl">{tech.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {tech.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {tech.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Mobile */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-center mb-6 text-secondary">
              Mobile
            </h3>
            <Card className="h-full">
              <div className="space-y-4">
                {TECH_STACK.mobile.map((tech, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-2xl">{tech.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {tech.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {tech.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Integrations */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-center mb-6 text-tertiary">
              {t('integrations')}
            </h3>
            <Card className="h-full">
              <div className="space-y-4">
                {TECH_STACK.integrations.map((tech, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-2xl">{tech.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {tech.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {tech.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-muted rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">15-18ms</div>
            <div className="text-sm text-gray-600">Response Time</div>
          </div>
          <div className="text-center p-6 bg-muted rounded-lg">
            <div className="text-3xl font-bold text-secondary mb-2">99.9%</div>
            <div className="text-sm text-gray-600">Uptime</div>
          </div>
          <div className="text-center p-6 bg-muted rounded-lg">
            <div className="text-3xl font-bold text-tertiary mb-2">90%</div>
            <div className="text-sm text-gray-600">Performance ↑</div>
          </div>
          <div className="text-center p-6 bg-muted rounded-lg">
            <div className="text-3xl font-bold text-accent mb-2">52</div>
            <div className="text-sm text-gray-600">Tests ✓</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
