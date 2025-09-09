import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`py-4 px-8 flex items-center justify-between transition-all duration-300 ${
        isScrolled 
          ? 'fixed top-0 left-0 right-0 bg-secondary-bg bg-opacity-70 backdrop-blur-md z-50' 
          : 'relative bg-secondary-bg'
      }`}>
      <Logo />
      <nav className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-text-light hover:text-accent">Home</Link>
        <Link to="/menu" className="text-text-light hover:text-accent">Menu</Link>
        <Link to="/#about" className="text-text-light hover:text-accent">About</Link>
        <Link to="/#contact" className="text-text-light hover:text-accent">Contact</Link>
      </nav>
      <button className="md:hidden text-text-light" onClick={toggleMenu}>
        {isMenuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        )}
      </button>
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-secondary-bg md:hidden z-10">
          <Link to="/" className="block py-2 px-4 text-text-light hover:bg-primary-bg text-center">Home</Link>
          <Link to="/menu" className="block py-2 px-4 text-text-light hover:bg-primary-bg text-center">Menu</Link>
          <Link to="/#about" className="block py-2 px-4 text-text-light hover:bg-primary-bg text-center">About</Link>
          <Link to="/#contact" className="block py-2 px-4 text-text-light hover:bg-primary-bg text-center">Contact</Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
