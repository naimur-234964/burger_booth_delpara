import React from 'react';
import { Link } from 'react-router-dom';

import hamburgerImage from '../assets/hamburger_category.jpg';
import pastaImage from '../assets/pasta_category.jpg';
import chowmeinImage from '../assets/chowmein_category.jpg';
import meatBoxImage from '../assets/meatbox_category.jpeg';
import sidesImage from '../assets/sides_category.jpg';
import drinksImage from '../assets/drinks_category.jpg';
import milkshakeImage from '../assets/milkshake_category.jpg';
import beveragesImage from '../assets/beverages_category.jpg';

const categories = [
  { name: 'Burgers', image: hamburgerImage },
  { name: 'Pasta', image: pastaImage },
  { name: 'Chowmein', image: chowmeinImage },
  { name: 'Meat Box', image: meatBoxImage },
  { name: 'Sides', image: sidesImage },
  { name: 'Drinks', image: drinksImage },
  { name: 'Milkshakes', image: milkshakeImage },
  { name: 'Beverages', image: beveragesImage },
];

const Menu = () => {
  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-text-light text-center mb-12 menu-title">Our Menu Categories</h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
          {categories.map((category, index) => (
            <Link to="/menu" key={index} className="block p-6 rounded-lg  text-text-light text-center text-2xl font-bold hover:bg-secondary-bg/30  transition duration-300 category-item">
              <img src={category.image} alt={category.name} className="w-64 h-64 object-cover rounded-full mb-4 mx-auto" />
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;