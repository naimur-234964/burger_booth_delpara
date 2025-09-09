import React from 'react';
import aboutUsImage from '../assets/about-us.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="about-image">
            <img src={aboutUsImage} alt="About Us" className="rounded-lg shadow-lg" />
          </div>
          <div className="about-text">
            <h2 className="text-4xl font-bold text-text-light mb-4">About Us</h2>
            <p className="text-text-light/80 mb-4">
              We are a family-owned business that has been serving the best burgers in town for over 20 years. Our mission is to provide our customers with high-quality food and a great dining experience.
            </p>
            <p className="text-text-light/80">
              We use only the freshest ingredients, and our burgers are made with 100% beef. We also offer a variety of other menu items, including salads, sandwiches, and milkshakes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
