import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" className="bg-cream">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Images Grid */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-terracotta opacity-50"></div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1544025162-d76690b68f6c?q=80&w=800&auto=format&fit=crop" 
              alt="Interior" 
              className="w-full h-80 object-cover rounded-sm shadow-xl mt-12"
            />
            <img 
              src="https://images.unsplash.com/photo-1590593162201-f67611a18b87?q=80&w=800&auto=format&fit=crop" 
              alt="Plating" 
              className="w-full h-80 object-cover rounded-sm shadow-xl"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-terracotta opacity-50"></div>
        </div>

        {/* Text Content */}
        <div className="space-y-8">
            <div className="flex items-center gap-4 mb-2">
                <span className="h-px w-12 bg-terracotta"></span>
                <span className="text-terracotta uppercase tracking-widest text-sm font-bold">Our Story</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-charcoal leading-none">
                Authentic Soul of <span className="text-terracotta italic">Djerba</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
                Nestled in the heart of Houmt Souk, Essofra is more than a restaurant; it is a culinary sanctuary. 
                We bring the ancient recipes of Tunisia to your table, crafted with passion and the freshest local ingredients.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
                From the bustling souks to our tranquil terrace, every detail is curated to provide an immersive Mediterranean experience. 
                Whether you are savoring our slow-cooked <span className="text-terracotta font-medium">Meloukhia</span> or enjoying a fresh mint tea, 
                you are tasting the history of Djerba.
            </p>
            
            <div className="bg-white p-6 border-l-4 border-gold shadow-sm mt-8">
                <Quote className="text-gold mb-4 opacity-50" size={32} />
                <p className="font-serif text-xl italic text-gray-800">
                    "Often described as a must-visit stop for authentic local cuisine when in Djerba."
                </p>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;