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
            <p className="text-text-light mb-4">
              We are a family-owned business that has been serving the best burgers in town for over 5 years. Our mission is to provide our customers with high-quality food and a great dining experience.
            </p>
            <p className="text-text-light mb-4">
              Our mission is simple: to provide every customer with high-quality food, friendly service, and a dining experience that feels like home. We believe that good food brings people closer, and we put care and passion into every bite.
            </p>
            <p className="text-text-light mb-4">
              We use only the freshest, locally sourced ingredients, and our burgers are crafted with 100% premium beef, seasoned to perfection. Alongside our signature burgers, you’ll find a variety of menu items to satisfy every craving — from crisp, fresh salads to hearty sandwiches and creamy, hand-spun milkshakes.
            </p>
            <p className="text-text-light">
              Whether you’re stopping by for a quick lunch, a family dinner, or a late-night snack, we’re here to serve you with the same dedication and love that has kept our doors open and our customers coming back for years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
