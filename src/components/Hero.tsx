import React from 'react';
import heroBurger from '../assets/hero-burger.jpg';

const Hero = () => {
  return (
    <section 
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBurger})` }}
    >
      <div className="text-center text-white bg-gray-900 bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-5xl font-bold mb-4 hero-title">The Best Burgers in Town</h1>
        <p className="text-xl mb-8 hero-description">Made with love and the freshest ingredients.</p>
        <a href="#menu" className="bg-accent text-primary-bg font-bold py-3 px-8 rounded-full hover:bg-accent/90 transition duration-300 hero-button">View Menu</a>
      </div>
    </section>
  );
}

export default Hero;
// ult Hero;
