'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Card from '../ui/Card';
import { TECH_STACK } from '@/lib/constants';
import { AnimatedHeading, AnimatedText, AnimatedSection } from '../animated';

const TechStack = () => {
  const t = useTranslations('techStack');

  return (
    <section id="tech-stack" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedHeading level={2} animation="fadeInUp" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </AnimatedHeading>
          <AnimatedText animation="fadeInUp" delay={100} className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 max-w-6xl mx-auto">
          {/* Backend */}
          <AnimatedSection animation="fadeInLeft" delay={200}>
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
          </AnimatedSection>

          {/* Mobile */}
          <AnimatedSection animation="fadeInUp" delay={300}>
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
          </AnimatedSection>

          {/* Integrations */}
          <AnimatedSection animation="fadeInRight" delay={400}>
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
          </AnimatedSection>
        </div>

        {/* Performance Stats */}
        <div className="mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <AnimatedSection animation="scaleIn" delay={200} className="text-center p-6 bg-muted rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">15-18ms</div>
            <div className="text-sm text-gray-600">Response Time</div>
          </AnimatedSection>
          <AnimatedSection animation="scaleIn" delay={300} className="text-center p-6 bg-muted rounded-lg">
            <div className="text-3xl font-bold text-secondary mb-2">99.9%</div>
            <div className="text-sm text-gray-600">Uptime</div>
          </AnimatedSection>
          <AnimatedSection animation="scaleIn" delay={400} className="text-center p-6 bg-muted rounded-lg">
            <div className="text-3xl font-bold text-tertiary mb-2">90%</div>
            <div className="text-sm text-gray-600">Performance ↑</div>
          </AnimatedSection>
          <AnimatedSection animation="scaleIn" delay={500} className="text-center p-6 bg-muted rounded-lg">
            <div className="text-3xl font-bold text-accent mb-2">52</div>
            <div className="text-sm text-gray-600">Tests ✓</div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
