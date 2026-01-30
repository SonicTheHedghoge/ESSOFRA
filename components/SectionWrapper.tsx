import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Props {
  children: React.ReactNode;
  id?: string;
  className?: string;
  pattern?: boolean;
}

const SectionWrapper: React.FC<Props> = ({ children, id, className = "", pattern = false }) => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 relative ${className} ${pattern ? 'bg-pattern-mosaic' : ''}`}
    >
      <div 
        ref={elementRef}
        className={`container mx-auto px-6 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;