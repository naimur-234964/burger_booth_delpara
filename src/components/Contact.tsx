import React from 'react';
import heroBurger from '../assets/hero-burger.jpg';

const Contact = () => {
  return (
    <section id="contact" className="py-20 h-screen bg-cover bg-center flex items-center justify-center bg-fixed"
          style={{ backgroundImage: `url(${heroBurger})` }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="contact-form">
            <h3 className="text-2xl font-bold text-text-light mb-4">Get in Touch</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input type="text" id="name" className="w-full bg-secondary-bg border border-primary-bg rounded-lg py-2 px-4 text-text-light focus:outline-none focus:border-accent" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input type="email" id="email" className="w-full bg-secondary-bg border border-primary-bg rounded-lg py-2 px-4 text-text-light focus:outline-none focus:border-accent" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full bg-secondary-bg border border-primary-bg rounded-lg py-2 px-4 text-text-light focus:outline-none focus:border-accent"></textarea>
              </div>
              <button type="submit" className="bg-secondary-bg text-white font-bold py-3 px-8 rounded-md hover:bg-accent/90 transition duration-300">Send Message</button>
            </form>
          </div>
          <div className="contact-info font-bold">
            <h3 className="text-3xl text-text-light mb-4">Our Information</h3>
            <p className="text-white mb-2">DELPARA BURGER BOOTH & RESTAURANT</p>
            <p className="text-white mb-2">Address: Delpara Nursery (Opposite Side of Delpara Play Ground), Delpara, Kutubpur, Narayanganj</p>
            <p className="text-white">Contact: 01842424541, 01681856244</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
