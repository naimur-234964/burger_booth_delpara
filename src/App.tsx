import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import sr from './scroll-reveal';

function App() {
  useEffect(() => {
    sr.reveal('.hero-title', { origin: 'top', delay: 200 });
    sr.reveal('.hero-description', { origin: 'bottom', delay: 300 });
    sr.reveal('.hero-button', { origin: 'bottom', delay: 400 });

    sr.reveal('.menu-title', { origin: 'top', delay: 200 });
    sr.reveal('.category-item', { origin: 'bottom', interval: 200 });

    sr.reveal('.about-image', { origin: 'left', delay: 200 });
    sr.reveal('.about-text', { origin: 'right', delay: 300 });

    sr.reveal('.contact-form', { origin: 'left', delay: 200 });
    sr.reveal('.contact-info', { origin: 'right', delay: 300 });

    sr.reveal('.category-title', { origin: 'top', delay: 100 });
    sr.reveal('.menu-item', { origin: 'bottom', interval: 200 });
  }, []);

  return (
    <Router>
      <div className="bg-primary-bg min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
