import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  'Burgers',
  'Pasta',
  'Chowmein',
  'Meat Box',
  'Sides',
  'Drinks',
  'Milkshakes',
  'Beverages',
];

const Menu = () => {
  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-text-light text-center mb-12 menu-title">Our Menu Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link to="/menu" key={index} className="block p-6 rounded-lg bg-secondary-bg text-text-light text-center text-2xl font-bold hover:bg-accent hover:text-primary-bg transition duration-300 category-item">
              {category}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
