import React from 'react';
import MenuItem, { MenuItemProps } from './MenuItem';

const allMenuItems: MenuItemProps[] = [
  // Burgers
  { name: 'Choto Novab', description: 'A small, flavorful burger.', price: 60, image: 'https://via.placeholder.com/150', category: 'Burgers' },
  { name: 'Choto Nobab Naga', description: 'A small, flavorful burger with a spicy kick.', price: 65, image: 'https://via.placeholder.com/150', category: 'Burgers' },
  { name: 'Choto Nobab W/Cheese', description: 'A small, flavorful burger with cheese.', price: 75, image: 'https://via.placeholder.com/150', category: 'Burgers' },
  { name: 'Choto Naga W/Cheese', description: 'A small, flavorful burger with spicy kick and cheese.', price: 80, image: 'https://via.placeholder.com/150', category: 'Burgers' },
  { name: 'BBQ Burger', description: 'A smoky BBQ flavored burger.', price: 75, image: 'https://via.placeholder.com/150', category: 'Burgers' },
  { name: 'BBQ Naga', description: 'A smoky BBQ flavored burger with a spicy kick.', price: 80, image: 'https://via.placeholder.com/150', category: 'Burgers' },
  { name: 'BBQ Cheese Burger', description: 'A smoky BBQ flavored burger with cheese.', price: 90, image: 'https://via.placeholder.com/150', category: 'Burgers' },
  { name: 'BBQ Naga W/Cheese', description: 'A smoky BBQ flavored burger with spicy kick and cheese.', price: 95, image: 'https://via.placeholder.com/150', category: 'Burgers' },
  { name: 'Sub Burger', description: 'A long sub-style burger.', price: 100, image: 'https://via.placeholder.com/150', category: 'Burgers' },
  { name: 'Sub Burger Naga', description: 'A long sub-style burger with a spicy kick.', price: 105, image: 'https://via.placeholder.com/150', category: 'Burgers' },
  { name: 'Sub W/Cheese', description: 'A long sub-style burger with cheese.', price: 130, image: 'https://via.placeholder.com/150', category: 'Burgers' },
  { name: 'Sub Naga W/Cheese', description: 'A long sub-style burger with spicy kick and cheese.', price: 135, image: 'https://via.placeholder.com/150', category: 'Burgers' },
  { name: 'Crispy Chicken Burger', description: 'A crispy fried chicken patty burger.', price: 100, image: 'https://via.placeholder.com/150', category: 'Burgers' },
  { name: 'Crispy Chicken Burger Naga', description: 'A crispy fried chicken patty burger with a spicy kick.', price: 105, image: 'https://via.placeholder.com/150', category: 'Burgers' },
  { name: 'Crispy Chicken W/Cheese', description: 'A crispy fried chicken patty burger with cheese.', price: 130, image: 'https://via.placeholder.com/150', category: 'Burgers' },
  { name: 'Crispy Chicken Naga W/Cheese', description: 'A crispy fried chicken patty burger with spicy kick and cheese.', price: 135, image: 'https://via.placeholder.com/150', category: 'Burgers' },

  // Pasta
  { name: 'Pasta (without chicken)', description: 'Delicious pasta without chicken.', price: 100, image: 'https://via.placeholder.com/150', category: 'Pasta' },
  { name: 'Chicken Pasta', description: 'Delicious pasta with chicken.', price: 140, image: 'https://via.placeholder.com/150', category: 'Pasta' },
  { name: 'Chicken Pasta W/Cheese', description: 'Delicious pasta with chicken and cheese.', price: 190, image: 'https://via.placeholder.com/150', category: 'Pasta' },

  // Chowmein
  { name: 'Vegetable Chowmein', description: 'Stir-fried noodles with fresh vegetables.', price: 100, image: 'https://via.placeholder.com/150', category: 'Chowmein' },
  { name: 'Chicken Chowmein', description: 'Stir-fried noodles with chicken and vegetables.', price: 140, image: 'https://via.placeholder.com/150', category: 'Chowmein' },

  // Meat Box
  { name: 'Meat Box (Small)', description: 'A small box filled with assorted meats.', price: 100, image: 'https://via.placeholder.com/150', category: 'Meat Box' },
  { name: 'Meat Box (Medium)', description: 'A medium box filled with assorted meats.', price: 150, image: 'https://via.placeholder.com/150', category: 'Meat Box' },
  { name: 'Meat Box (Large)', description: 'A large box filled with assorted meats.', price: 220, image: 'https://via.placeholder.com/150', category: 'Meat Box' },

  // Sides
  { name: 'Wedges', description: 'Crispy potato wedges.', price: 100, image: 'https://via.placeholder.com/150', category: 'Sides' },
  { name: 'French Fries', description: 'Classic golden French fries.', price: 100, image: 'https://via.placeholder.com/150', category: 'Sides' },
  { name: 'Thai Soup', description: 'A flavorful Thai-style soup.', price: 100, image: 'https://via.placeholder.com/150', category: 'Sides' },
  { name: 'Crispy Chicken Fried', description: 'Crispy fried chicken pieces.', price: 80, image: 'https://via.placeholder.com/150', category: 'Sides' },

  // Drinks (Coffee)
  { name: 'Hot Coffee (hand made)', description: 'Freshly brewed hot coffee.', price: 60, image: 'https://via.placeholder.com/150', category: 'Drinks' },
  { name: 'Cold Coffee', description: 'Refreshing cold coffee.', price: 80, image: 'https://via.placeholder.com/150', category: 'Drinks' },
  { name: 'Chocolate Cold Coffee', description: 'Cold coffee with a rich chocolate flavor.', price: 120, image: 'https://via.placeholder.com/150', category: 'Drinks' },

  // Milkshakes
  { name: 'Vanilla Milk Shake', description: 'Creamy vanilla milkshake.', price: 120, image: 'https://via.placeholder.com/150', category: 'Milkshakes' },
  { name: 'Chocolate Milk Shake', description: 'Rich chocolate milkshake.', price: 120, image: 'https://via.placeholder.com/150', category: 'Milkshakes' },
  { name: 'Strawberry Milk Shake', description: 'Sweet strawberry milkshake.', price: 120, image: 'https://via.placeholder.com/150', category: 'Milkshakes' },

  // Beverages (Other)
  { name: 'Lacchi', description: 'Traditional yogurt-based drink.', price: 60, image: 'https://via.placeholder.com/150', category: 'Beverages' },
  { name: 'Lemon Mojito', description: 'Refreshing lemon-flavored mojito.', price: 50, image: 'https://via.placeholder.com/150', category: 'Beverages' },
  { name: 'Mint Lemonade', description: 'Cool and refreshing mint lemonade.', price: 50, image: 'https://via.placeholder.com/150', category: 'Beverages' },
];

const MenuPage = () => {
  const categories = Array.from(new Set(allMenuItems.map(item => item.category)));

  return (
    <div className="bg-primary-bg min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-text-light text-center mb-12">Full Menu</h1>
        {
          categories.map(category => (
            <div key={category} className="mb-12 p-6 rounded-lg bg-secondary-bg category-section">
              <h2 className="text-3xl font-bold text-accent mb-8 text-center category-title">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 menu-items">
                {allMenuItems.filter(item => item.category === category).map((item, index) => (
                  <MenuItem key={index} {...item} />
                ))}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default MenuPage;
