import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`py-4 px-8 md:px-12 lg:px-32 flex items-center justify-between transition-all duration-300 ${isScrolled
          ? 'sticky top-0 left-0 right-0 bg-secondary-bg bg-opacity-70 backdrop-blur-sm z-50'
          : 'relative bg-secondary-bg'
        }`}>
      <Logo />
      <nav className="items-center hidden space-x-8 font-bold md:flex">
        <Link to="/" className="text-text-light hover:text-accent">Home</Link>
        <Link to="/menu" className="text-text-light hover:text-accent">Menu</Link>
        <Link to="/#about" className="text-text-light hover:text-accent">About</Link>
        <Link to="/#contact" className="text-text-light hover:text-accent">Contact</Link>
      </nav>
      <button ref={buttonRef} className="md:hidden text-text-light" onClick={toggleMenu}>
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
        <nav ref={menuRef} className="absolute left-0 z-10 w-full font-bold top-16 bg-secondary-bg md:hidden backdrop-blur-sm bg-opacity-70">
          <Link onClick={closeMenu} to="/" className="block px-4 py-2 text-center text-text-light hover:bg-primary-bg">Home</Link>
          <Link onClick={closeMenu} to="/menu" className="block px-4 py-2 text-center text-text-light hover:bg-primary-bg">Menu</Link>
          <Link onClick={closeMenu} to="/#about" className="block px-4 py-2 text-center text-text-light hover:bg-primary-bg">About</Link>
          <Link onClick={closeMenu} to="/#contact" className="block px-4 py-2 text-center text-text-light hover:bg-primary-bg">Contact</Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
