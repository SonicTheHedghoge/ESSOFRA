import React from 'react';
import SectionWrapper from './SectionWrapper';
import { REVIEWS } from '../constants';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <SectionWrapper className="bg-terracotta text-white">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Guest Experiences</h2>
        <div className="flex justify-center gap-1 text-gold">
            {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={20} />)}
        </div>
        <p className="mt-2 text-white/80 uppercase tracking-widest text-sm">Rated 4.7/5 across hundreds of reviews</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {REVIEWS.map((review) => (
          <div key={review.id} className="bg-white/10 backdrop-blur-sm p-8 border border-white/20 rounded-sm">
            <p className="font-serif text-xl italic mb-6 leading-relaxed">"{review.text}"</p>
            <div className="flex items-center justify-between">
                <span className="font-bold tracking-wider text-sm">{review.author}</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded">{review.source}</span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Reviews;