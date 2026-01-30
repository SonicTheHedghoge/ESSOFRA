import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { APP_NAME, PHONE_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Story', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Visit Us', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream/90 backdrop-blur-md shadow-lg py-3 text-charcoal'
          : 'bg-transparent py-6 text-cream'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="font-serif text-3xl md:text-4xl font-bold tracking-wider relative z-50">
          {APP_NAME}
          <span className={`block h-1 w-12 mt-1 rounded-full transition-colors duration-300 ${isScrolled ? 'bg-terracotta' : 'bg-gold'}`} />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm uppercase tracking-widest font-medium hover:text-gold transition-colors duration-300 ${isScrolled ? 'text-charcoal' : 'text-cream'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
             <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className={`flex items-center gap-2 px-5 py-2 border rounded-full transition-all duration-300 hover:bg-gold hover:border-gold hover:text-white ${isScrolled ? 'border-charcoal text-charcoal' : 'border-white text-white'}`}>
                <Phone size={16} />
                <span className="text-xs font-bold tracking-widest">RESERVE</span>
             </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} className={isScrolled ? 'text-charcoal' : 'text-white'} /> : <Menu size={32} className={isScrolled ? 'text-charcoal' : 'text-white'} />}
        </button>

        {/* Mobile Overlay */}
        <div
          className={`fixed inset-0 bg-charcoal text-cream flex flex-col justify-center items-center gap-8 transition-transform duration-500 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-3xl font-light hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="mt-8 px-8 py-3 bg-gold text-charcoal rounded-full font-bold tracking-widest">
            BOOK A TABLE
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;