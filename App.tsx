import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a high-end preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-charcoal flex items-center justify-center z-[100]">
        <div className="text-center">
            <h1 className="font-serif text-4xl text-cream animate-pulse tracking-widest">ESSOFRA</h1>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-4"></div>
        </div>
      </div>
    );
  }

  return (
    <main className="w-full relative">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Menu />
      <Reviews />
      <Footer />
    </main>
  );
};

export default App;