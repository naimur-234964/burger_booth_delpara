import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary-bg py-8">
      <div className="container mx-auto px-4 text-center text-text-light/80">
        <p>&copy; 2025 Burger Booth Delpara. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.facebook.com/delparaburger" target='_blank' className="hover:text-text-light">Facebook</a>
          <a href="#" target='_blank' className="hover:text-text-light">Twitter</a>
          <a href="#" target='_blank' className="hover:text-text-light">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
