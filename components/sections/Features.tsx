import React from 'react';
import Card from '../ui/Card';
import { FEATURES } from '@/lib/constants';

const Features = () => {
  const colorClasses: Record<string, string> = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    tertiary: 'bg-tertiary/10 text-tertiary',
    accent: 'bg-accent/10 text-accent',
    info: 'bg-info/10 text-info',
    gradient: 'bg-gradient-primary text-white',
  };

  return (
    <section id="features" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Cómo funciona Kaia?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todas las herramientas que necesitas en un solo lugar
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {FEATURES.map((feature, index) => (
            <Card key={index} hover className="text-center">
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl ${
                    colorClasses[feature.color]
                  }`}
                >
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
