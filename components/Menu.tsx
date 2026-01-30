import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuItem['category'] | 'all'>('all');

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Dishes' },
    { id: 'starter', label: 'Starters' },
    { id: 'main', label: 'Main Courses' },
    { id: 'dessert', label: 'Desserts' },
    { id: 'drink', label: 'Beverages' },
  ];

  return (
    <SectionWrapper id="menu" className="bg-charcoal text-cream">
      <div className="text-center mb-16">
        <span className="text-gold uppercase tracking-widest text-sm font-bold block mb-4">Discover Flavors</span>
        <h2 className="font-serif text-5xl md:text-6xl text-white mb-8">Our Signature Menu</h2>
        <div className="w-24 h-1 bg-gold mx-auto"></div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id as any)}
            className={`text-sm uppercase tracking-widest pb-2 border-b-2 transition-all duration-300 ${
              activeCategory === cat.id 
                ? 'border-gold text-gold' 
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
        {filteredItems.map((item) => (
          <div key={item.id} className="group flex justify-between items-start gap-4">
            <div className="w-full">
              <div className="flex justify-between items-baseline mb-2 border-b border-gray-700 pb-2 relative">
                <h3 className="font-serif text-2xl text-sand group-hover:text-gold transition-colors duration-300">
                  {item.name}
                </h3>
                {item.popular && (
                  <span className="text-xs text-charcoal bg-gold px-2 py-0.5 rounded-sm font-bold ml-2 absolute -top-3 right-0">
                    POPULAR
                  </span>
                )}
              </div>
              <p className="text-gray-400 font-light italic text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-20">
         <p className="text-gray-400 italic mb-6">Vegetarian and Vegan options available upon request.</p>
         <button className="px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 font-bold tracking-widest text-sm uppercase">
            Download Full Menu
         </button>
      </div>
    </SectionWrapper>
  );
};

export default Menu;