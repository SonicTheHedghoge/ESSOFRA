import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=2670&auto=format&fit=crop"
          alt="Mediterranean ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <span className="text-gold tracking-[0.3em] uppercase text-sm md:text-base mb-6 font-medium animate-fade-in-up">
          Welcome to Djerba
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream font-bold leading-tight mb-8 drop-shadow-lg">
          A Symphony of <br/>
          <span className="italic font-light text-gold">Authentic Flavors</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl font-light max-w-2xl mb-12 leading-relaxed">
          Experience the heart of Tunisia at Essofra. 
          Where traditional culinary arts meet the warmth of Mediterranean hospitality.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6">
            <a 
                href="#menu" 
                className="px-8 py-4 bg-gold text-charcoal font-bold tracking-widest text-sm hover:bg-white transition-colors duration-300 min-w-[160px]"
            >
                VIEW MENU
            </a>
            <a 
                href="#contact" 
                className="px-8 py-4 border border-white text-white font-bold tracking-widest text-sm hover:bg-white hover:text-charcoal transition-all duration-300 min-w-[160px]"
            >
                FIND US
            </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/70 hover:text-white transition-colors">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;