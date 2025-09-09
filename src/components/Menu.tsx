import React from 'react';
import MenuItem, { MenuItemProps } from './MenuItem';

const menuItems: MenuItemProps[] = [
  {
    name: 'Classic Burger',
    description: 'A classic burger with lettuce, tomato, and our special sauce.',
    price: 9.99,
    image: 'https://img.freepik.com/free-photo/delicious-burger-with-many-ingredients-isolated-white-background-tasty-fast-food-product_90220-1063.jpg'
  },
  {
    name: 'Cheese Burger',
    description: 'A juicy burger with a slice of cheddar cheese.',
    price: 10.99,
    image: 'https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg'
  },
  {
    name: 'Bacon Burger',
    description: 'A delicious burger with crispy bacon.',
    price: 11.99,
    image: 'https://img.freepik.com/free-psd/delicious-burger-food-menu-social-media-template_120329-1739.jpg'
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-text-light text-center mb-12 menu-title">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 menu-items">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
          </div>          
      </div>
    </section>
  );
}

export default Menu;
