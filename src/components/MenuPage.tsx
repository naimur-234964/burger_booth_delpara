import React from 'react';
import MenuItem, { MenuItemProps } from './MenuItem';
import chotoNobabImage from '../assets/choto_nobab.jpg';
import bbqImage from '../assets/bbq.jpg';
import subImage from '../assets/sub.jpg';
import subCImage from '../assets/sub_c.jpg';
import cChickenImage from '../assets/cr_chicken.jpg';
import cChickenNImage from '../assets/cr_chicken_n.jpg';
import cChickenCImage from '../assets/cr_chicken_c.jpg';
import cChickenCNImage from '../assets/cr_chicken_cn.jpg';
import pastaImage from '../assets/pasta.jpg';
import cPastaImage from '../assets/c_pasta.jpg';
import cPastaCImage from '../assets/c_pasta_c.jpg';
import cChowmeinImage from '../assets/chicken_chowmein.jpg';
import vChowmeinImage from '../assets/veg_chowmein.jpg';
import meatboxImage from '../assets/meatbox.jpg';
import wedgesImage from '../assets/wedges.jpg';
import friesImage from '../assets/french_fries.jpg';
import soupImage from '../assets/soup.jpg';
import chickenFriImage from '../assets/chicken_fry.jpeg';
import lacchiImage from '../assets/lacchi.jpg';
import lemonadeImage from '../assets/lemonade.jpg';
import mojitoImage from '../assets/mojito.jpg';
import vanillaImage from '../assets/vanilla.jpg';
import chocolateImage from '../assets/chocolate.jpg';
import strawberryImage from '../assets/strawberry.jpg';
import hotCoffeeImage from '../assets/hot_coffee.jpg';
import coldCoffeeImage from '../assets/cold_coffee.jpg';
import chocolateColdCoffeeImage from '../assets/chocolate_cold_coffee.jpg';
import Footer from './Footer';


const allMenuItems: MenuItemProps[] = [
  // Burgers
  { name: 'Choto Nobab', description: 'A small, flavorful burger.', price: 60, image: chotoNobabImage, category: 'Burgers' },
  { name: 'BBQ Burger', description: 'A smoky BBQ flavored burger.', price: 75, image: bbqImage, category: 'Burgers' },
  { name: 'Sub Burger', description: 'A long sub-style burger.', price: 100, image: subCImage, category: 'Burgers' },
  { name: 'Crispy Chicken Burger', description: 'A crispy fried chicken patty burger.', price: 100, image: cChickenImage, category: 'Burgers' },
  
  { name: 'Choto Nobab Naga', description: 'A small, flavorful burger with a spicy kick.', price: 65, image: chotoNobabImage, category: 'Burgers' },
  { name: 'BBQ Naga', description: 'A smoky BBQ flavored burger with a spicy kick.', price: 80, image: bbqImage, category: 'Burgers' },
  { name: 'Sub Burger Naga', description: 'A long sub-style burger with a spicy kick.', price: 105, image: subCImage, category: 'Burgers' },
  { name: 'Crispy Chicken Burger Naga', description: 'A crispy fried chicken patty burger with a spicy kick.', price: 105, image: cChickenNImage, category: 'Burgers' },
  
  { name: 'Choto Nobab W/Cheese', description: 'A small, flavorful burger with cheese.', price: 75, image: chotoNobabImage, category: 'Burgers' },
  { name: 'BBQ Cheese Burger', description: 'A smoky BBQ flavored burger with cheese.', price: 90, image: bbqImage, category: 'Burgers' },
  { name: 'Crispy Chicken W/Cheese', description: 'A crispy fried chicken patty burger with cheese.', price: 130, image: cChickenCImage, category: 'Burgers' },
  { name: 'Sub W/Cheese', description: 'A long sub-style burger with cheese.', price: 130, image: subImage, category: 'Burgers' },
  
  { name: 'Choto Naga W/Cheese', description: 'A small, flavorful burger with spicy kick and cheese.', price: 80, image: chotoNobabImage, category: 'Burgers' },
  { name: 'Sub Naga W/Cheese', description: 'A long sub-style burger with spicy kick and cheese.', price: 135, image: subCImage, category: 'Burgers' },
  { name: 'BBQ Naga W/Cheese', description: 'A smoky BBQ flavored burger with spicy kick and cheese.', price: 95, image: bbqImage, category: 'Burgers' },
  { name: 'Crispy Chicken Naga W/Cheese', description: 'A crispy fried chicken patty burger with spicy kick and cheese.', price: 135, image: cChickenCNImage, category: 'Burgers' },

  // Pasta
  { name: 'Pasta (without chicken)', description: 'Delicious pasta without chicken.', price: 100, image: pastaImage, category: 'Pasta' },
  { name: 'Chicken Pasta', description: 'Delicious pasta with chicken.', price: 140, image: cPastaImage, category: 'Pasta' },
  { name: 'Chicken Pasta W/Cheese', description: 'Delicious pasta with chicken and cheese.', price: 190, image: cPastaCImage, category: 'Pasta' },

  // Chowmein
  { name: 'Vegetable Chowmein', description: 'Stir-fried noodles with fresh vegetables.', price: 100, image: vChowmeinImage, category: 'Chowmein' },
  { name: 'Chicken Chowmein', description: 'Stir-fried noodles with chicken and vegetables.', price: 140, image: cChowmeinImage, category: 'Chowmein' },

  // Meat Box
  { name: 'Meat Box (Small)', description: 'A small box filled with assorted meats.', price: 100, image: meatboxImage, category: 'Meat Box' },
  { name: 'Meat Box (Medium)', description: 'A medium box filled with assorted meats.', price: 150, image: meatboxImage, category: 'Meat Box' },
  { name: 'Meat Box (Large)', description: 'A large box filled with assorted meats.', price: 220, image: meatboxImage, category: 'Meat Box' },

  // Sides
  { name: 'Wedges', description: 'Crispy potato wedges.', price: 100, image: wedgesImage, category: 'Sides' },
  { name: 'French Fries', description: 'Classic golden French fries.', price: 100, image: friesImage, category: 'Sides' },
  { name: 'Thai Soup', description: 'A flavorful Thai-style soup.', price: 100, image: soupImage, category: 'Sides' },
  { name: 'Crispy Chicken Fries', description: 'Crispy fried chicken pieces.', price: 80, image: chickenFriImage, category: 'Sides' },

  // Drinks (Coffee)
  { name: 'Hot Coffee (hand made)', description: 'Freshly brewed hot coffee.', price: 60, image: hotCoffeeImage, category: 'Drinks' },
  { name: 'Cold Coffee', description: 'Refreshing cold coffee.', price: 80, image: coldCoffeeImage, category: 'Drinks' },
  { name: 'Chocolate Cold Coffee', description: 'Cold coffee with a rich chocolate flavor.', price: 120, image: chocolateColdCoffeeImage, category: 'Drinks' },

  // Milkshakes
  { name: 'Vanilla Milk Shake', description: 'Creamy vanilla milkshake.', price: 120, image: vanillaImage, category: 'Milkshakes' },
  { name: 'Chocolate Milk Shake', description: 'Rich chocolate milkshake.', price: 120, image: chocolateImage, category: 'Milkshakes' },
  { name: 'Strawberry Milk Shake', description: 'Sweet strawberry milkshake.', price: 120, image: strawberryImage, category: 'Milkshakes' },

  // Beverages (Other)
  { name: 'Lacchi', description: 'Traditional yogurt-based drink.', price: 60, image: lacchiImage, category: 'Beverages' },
  { name: 'Lemon Mojito', description: 'Refreshing lemon-flavored mojito.', price: 50, image: lemonadeImage, category: 'Beverages' },
  { name: 'Mint Lemonade', description: 'Cool and refreshing mint lemonade.', price: 50, image: mojitoImage, category: 'Beverages' },
];

const MenuPage = () => {
  const categories = Array.from(new Set(allMenuItems.map(item => item.category)));

  return (
    <div className="min-h-screen pt-20 bg-primary-bg">
      <div className="container px-4 mx-auto">
        <h1 className="mb-12 text-4xl font-bold text-center text-text-light">Full Menu</h1>
        {
          categories.map(category => (
            <div key={category} className="p-6 mb-12 rounded-lg bg-secondary-bg category-section">
              <h2 className="mb-8 text-3xl font-bold text-center text-accent category-title">{category}</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 menu-items">
                {allMenuItems.filter(item => item.category === category).map((item, index) => (
                  <MenuItem key={index} {...item} />
                ))}
              </div>
            </div>
          ))
        }
      </div>
      <Footer />
    </div>
  );
}

export default MenuPage;
