import React from 'react';

export interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price, image }) => {
  return (
    <div className="overflow-hidden transition duration-300 rounded-lg shadow-xl bg menu-item hover:scale-105 hover:shadow-2xl">
      <img src={image} alt={name} className="object-contain w-full h-96" />
      <div className="p-6">
        <h3 className="mb-2 text-2xl font-bold text-text-light">{name}</h3>
        <p className="mb-4 text-text-light/80">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-accent">৳ {price.toFixed(2)}</span>
          <button className="px-4 py-2 font-bold text-white transition duration-300 rounded-md bg-primary-bg hover:bg-accent/90" onClick={() => (window.location.href = 'tel:+8801842424541')}>Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;

