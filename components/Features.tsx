import React from 'react';
import SectionWrapper from './SectionWrapper';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <SectionWrapper id="experience" className="bg-sand/30" pattern>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {FEATURES.map((feature, index) => (
          <div 
            key={index}
            className="bg-white p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300 border-t-4 border-gold"
          >
            <div className="text-terracotta mb-6 p-4 bg-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                {feature.icon}
            </div>
            <h3 className="font-serif text-2xl text-charcoal text-center mb-4">{feature.title}</h3>
            <p className="text-gray-600 text-center font-light leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Features;