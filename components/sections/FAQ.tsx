'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { AnimatedHeading, AnimatedText, AnimatedSection } from '../animated';

const FAQSection = () => {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedHeading level={2} animation="fadeInUp" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </AnimatedHeading>
          <AnimatedText animation="fadeInUp" delay={100} className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t('subtitle')}
          </AnimatedText>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqKeys.map((key, index) => (
            <AnimatedSection
              key={key}
              animation="fadeInUp"
              delay={100 * (index + 2)}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-8">
                  {t(`items.${key}.question`)}
                </span>
                <svg
                  className={`w-5 h-5 text-primary transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700">
                  {t(`items.${key}.answer`)}
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            {t('subtitle')}
          </p>
          <a
            href="https://kaia-production.up.railway.app/api/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            API Documentation →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
