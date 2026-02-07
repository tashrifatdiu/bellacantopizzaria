import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Menu.css';
import { useLanguage } from '../contexts/LanguageContext';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Starters');
  const { t } = useLanguage();

  // Map categories to online images
  const categoryImages = {
    "Starters": "https://images.unsplash.com/photo-1541529086526-db283c563270?w=800&q=80", // Bruschetta/appetizers
    "Pizza": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80", // Pizza
    "Pasta": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80", // Pasta
    "Salads": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80", // Fresh salad
    "Desserts": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80" // Desserts
  };

  const menuData = {
    "Starters": [
      { name: "Garlic Bread with Cheese", description: "100% mozzarella, garlic, oregano, olive oil", price: "2,50€" },
      { name: "Avocado Toast", description: "Toast, avocado, feta, olive oil, salt, lemon, pepper", price: "6,00€" },
      { name: "Burrata", description: "Burrata 120gm cheese, arugula, cherry tomatoes, olive oil, oregano", price: "6,50€" },
      { name: "Pepperoni Roll (6 units)", description: "Pepperoni, mozzarella, olive oil, oregano", price: "6,99€" },
      { name: "Cheese Stick", description: "Made capatu, mozzarella, basil, oregano", price: "6,99€" },
      { name: "Shrimp Finger", description: "Tomato sauce, mozzarella, shrimp, and mayonnaise", price: "7,99€" },
      { name: "Bruschetta Prosciutto", description: "Toasted bread, ricotta cheese, ham, basil pesto", price: "4,99€" },
      { name: "Bruschetta Milano", description: "Toasted buffalo bread, rocket, cherry tomatoes, fresh", price: "4,99€" }
    ],
    "Pizza": [
      { name: "Pizza Margherita de Speciale", description: "Caputo flour, tomato sauce, mozzarella, Parmesan, Basil and oregano", price: "M: 8,50€ / R: 9,50€" },
      { name: "Pizza Marinara with Buffalo", description: "Capatu flour, tomato sauce, cherry tomato, buffalo, basil and oregano", price: "M: 8,50€ / R: 9,50€" },
      { name: "Quattro Formaggi", description: "Caputo flour, tomato sauce, mozzarella, gorgonzola, parmesan, taleggio and oregano", price: "M: 8,50€ / R: 9,50€" },
      { name: "Pizza Pepperoni", description: "Caputo flour, tomato sauce, mozzarella, pepperoni, red onion and oregano", price: "M: 8,50€ / R: 9,50€" },
      { name: "Prosciutto and Funghi", description: "Caputo flour, tomato sauce, mozzarella, prosciutto, mushrooms and oregano", price: "M: 8,50€ / R: 9,50€" },
      { name: "Seafood Pizza", description: "Caputo flour, tomato sauce, mozzarella, shrimp, pimento parsley, oregano and parmesan", price: "M: 8,50€ / R: 9,50€" },
      { name: "Pizza Diavola", description: "Caputo flour, tomato sauce, mozzarella, fresh mozzarella, spicy chorizo, Parmesan, basil and oregano", price: "M: 8,50€ / R: 9,50€" },
      { name: "Hawaiian Pizza", description: "Caputo flour, tomato sauce, mozzarella, pineapple, cream, ham and oregano", price: "M: 8,50€ / R: 9,50€" },
      { name: "Pizza Burrata", description: "Caputo flour, tomato sauce, mozzarella fesca, pomodorini, Arugula, burrata cheese, cherry tomato and oregano", price: "M: 8,50€ / R: 9,50€" },
      { name: "BELLA CANTO Special", description: "Caputo flour, tomato sauce, mozzarella, Bacon, chicken, corn, fresh mozzarella, basil and oregano", price: "M: 8,50€ / R: 9,50€" }
    ],
    "Pasta": [
      { name: "Tagliatelle Carbonara", description: "Tagliatelle pasta, fresh cream, egg, smoked veal bacon, basil and parmesan", price: "8,50€" },
      { name: "Spaghetti Bolognese", description: "Ground beef tomato San Marzano, basil and parmesan", price: "8,00€" },
      { name: "Tagliatelle Shrimp", description: "Tagliatelle Broccoli and sauteed shrimp, cream sauce, parmesan, basil", price: "9,50€" },
      { name: "Spaghetti Mushroom", description: "Spaghetti pasta, mushrooms, cream sauce, parmesan, basil", price: "8,00€" },
      { name: "Tortelloni Burrata", description: "Tomato sauce, burrata, parsley and oregano", price: "9,90€" },
      { name: "Gnocchi Pollo", description: "Cream sauce, chicken, mozzarella, parsley, mango", price: "8,90€" },
      { name: "Penne Pomodoro", description: "Penne, Tomato Sauce, Cherry Tomatoes, Parmesan, Basil and Oregano", price: "8,00€" },
      { name: "Salmon Rosy", description: "Tomato sauce, pasta, salmon, parmesan, oregano and basil", price: "10,99€" }
    ],
    "Salads": [
      { name: "Greek Salad", description: "Tomato, cucumber, green pepper, red onion, olive and feta cheese", price: "7,00€" },
      { name: "Avocado Salad", description: "Lettuce, cherry tomatoes, chilli, coriander, avocado, fried red onion seasoning sauce", price: "7,99€" },
      { name: "Caprese Salad", description: "Tomato, buffalo mozzarella, basil, olive oil and oregano", price: "6,50€" },
      { name: "Tuna Salad", description: "Lettuce, tomato, fennel, grilled pineapple and tuna", price: "6,50€" },
      { name: "Mixed Salad", description: "Lettuce, tomato, cucumber, red onion and seasoning sauce", price: "6,50€" }
    ],
    "Desserts": [
      { name: "Pizza Nutella", description: "Sweet pizza with Nutella spread", price: "5,99€" },
      { name: "Nutella and M&M Pizza", description: "Sweet pizza with Nutella and M&M's", price: "6,50€" },
      { name: "Nutella and Banana Pizza", description: "Sweet pizza with Nutella and fresh banana", price: "6,50€" },
      { name: "Strawberry Pizza", description: "Sweet pizza with fresh strawberries", price: "6,50€" },
      { name: "Ben & Jerry's Ice Cream", description: "Chocolate Fudge Brownie, Peanut Butter Cup, Cookie Dough, Strawberry Cheesecake", price: "3,50€ / 6,50€" }
    ]
  };

  const categories = Object.keys(menuData);

  return (
    <section id="menu" className="menu">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('ourMenu')}
        </motion.h2>

        {/* Category Tabs */}
        <div className="menu-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`menu-tab ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {t(category.toLowerCase())}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <motion.div 
          className="menu-items-container"
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Floating Category Image */}
          <motion.div 
            className="category-image-container"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.img 
              src={categoryImages[activeCategory]} 
              alt={activeCategory}
              className="category-image"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="image-glow"></div>
          </motion.div>

          <div className="menu-items">
            {menuData[activeCategory].map((item, index) => (
              <motion.div
                key={index}
                className="menu-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="item-header">
                  <h4>{item.name}</h4>
                  <span className="price">{item.price}</span>
                </div>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
