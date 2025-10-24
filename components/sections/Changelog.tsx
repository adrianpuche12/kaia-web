import React from 'react';
import { CHANGELOG } from '@/lib/constants';

const Changelog = () => {
  return (
    <section id="changelog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Roadmap y Actualizaciones
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conoce las últimas actualizaciones y lo que viene próximamente
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-muted transform md:-translate-x-1/2"></div>

            {CHANGELOG.map((version, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-8 ${
                  index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%]'
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 ${
                    version.status === 'completed'
                      ? 'bg-tertiary'
                      : 'bg-muted-foreground border-4 border-white'
                  }`}
                ></div>

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <div className="bg-white border-2 border-muted rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {version.version} - {version.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {version.date}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          version.status === 'completed'
                            ? 'bg-tertiary/10 text-tertiary'
                            : 'bg-accent/10 text-accent'
                        }`}
                      >
                        {version.status === 'completed'
                          ? 'Completado'
                          : 'Próximamente'}
                      </span>
                    </div>

                    {/* Features list */}
                    <ul className="space-y-2">
                      {version.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-muted-foreground"
                        >
                          <svg
                            className={`w-5 h-5 mr-2 flex-shrink-0 ${
                              version.status === 'completed'
                                ? 'text-tertiary'
                                : 'text-muted-foreground'
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            {version.status === 'completed' ? (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            ) : (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            )}
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              ¿Quieres saber más sobre nuestro roadmap completo?
            </p>
            <a
              href="https://github.com/adrianpuche12/Kaia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary font-semibold hover:underline"
            >
              Ver en GitHub
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Changelog;
