import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import sr from './scroll-reveal';

function App() {
  useEffect(() => {
    sr.reveal('.hero-title', { origin: 'top', delay: 200 });
    sr.reveal('.hero-description', { origin: 'bottom', delay: 300 });
    sr.reveal('.hero-button', { origin: 'bottom', delay: 400 });

    sr.reveal('.menu-title', { origin: 'top', delay: 200 });
    sr.reveal('.menu-item', { origin: 'bottom', interval: 200 });

    sr.reveal('.about-image', { origin: 'left', delay: 200 });
    sr.reveal('.about-text', { origin: 'right', delay: 300 });

    sr.reveal('.contact-form', { origin: 'left', delay: 200 });
    sr.reveal('.contact-info', { origin: 'right', delay: 300 });
  }, []);

  return (
    <div className="bg-primary-bg min-h-screen">
      <Header />
      <Hero />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;