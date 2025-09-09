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
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden menu-item">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-text-light mb-2">{name}</h3>
        <p className="text-text-light/80 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-accent">৳ {price.toFixed(2)}</span>
          <button className="bg-primary-bg text-white font-bold py-2 px-4 rounded-md hover:bg-accent/90 transition duration-300">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;

