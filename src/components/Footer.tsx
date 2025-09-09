import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary-bg py-8">
      <div className="container mx-auto px-4 text-center text-text-light/80">
        <div className="flex justify-center space-x-4 mb-4 text-md font-bold">
          <a href="https://www.facebook.com/delparaburger" target='_blank' className="hover:text-text-light">Facebook</a>
          <a href="#" target='_blank' className="hover:text-text-light">Twitter</a>
          <a href="#" target='_blank' className="hover:text-text-light">Instagram</a>
        </div>
        <p>&copy; 2025 Burger Booth Delpara. All rights reserved.</p>
        <p>&copy; Created with love by <a href="https://www.facebook.com/solutorix" target='_blank' className='font-bold hover:text-accent transition duration-300'>Solutorix Technologies</a></p>
      </div>
    </footer>
  );
}

export default Footer;
