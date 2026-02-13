import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Menu.css';
import { useLanguage } from '../contexts/LanguageContext';
import { databases } from '../lib/appwrite';
import { Query } from 'appwrite';

// Import pizza images for floating effect
import pizzaAtum from '../assets/images/pizza/pizza Atum.png';
import pizzaFunghi from '../assets/images/pizza/pizza funghi.png';
import pizzaParma from '../assets/images/pizza/pizza parma.png';
import pizzaChorizo from '../assets/images/pizza/spicy chorizo pizza.png';

// Import pasta images for floating effect
import pastaCarbonara from '../assets/images/pasta/Tonnarello  carbonara cremosa.png';
import pastaPollo from '../assets/images/pasta/Tonnarello Al pollo Rosso.png';
import pastaBolognese from '../assets/images/pasta/Tonnrello Alla Bolognesa.png';

// Import drink images for floating effect
import drinkCoke from '../assets/images/drinks/coke.png';
import drinkFanta from '../assets/images/drinks/fanta.png';
import drinkPepsi from '../assets/images/drinks/pepsi.png';
import drinkRedbull from '../assets/images/drinks/redbull.png';

// Import dessert images for floating effect
import dessertIceCream from '../assets/images/desserts/Ben & Jerry\'s Ice Cream.png';
import dessertNutellaBanana from '../assets/images/desserts/Nutella and Banana Pizza.png';
import dessertTiramisu from '../assets/images/desserts/tiramisu della casa.png';

// Import starter images for floating effect
import starterBurrata from '../assets/images/starters/Burrata.png';
import starterCheeseStick from '../assets/images/starters/Cheese Stick.png';
import starterGarlicBread from '../assets/images/starters/Garlic Bread with Cheese.png';
import starterShrimpFinger from '../assets/images/starters/Shrimp Finger.png';

// Import salad images for floating effect
import saladGreek from '../assets/images/salad/greek salad.png';
import saladCaprese from '../assets/images/salad/Italian caprese salad.jpg';
import saladTuna from '../assets/images/salad/tuna salad.png';

const MenuDynamic = () => {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [direction, setDirection] = useState(1);
  const [loading, setLoading] = useState(true);
  const { t, language } = useLanguage();

  const databaseId = process.env.REACT_APP_APPWRITE_DATABASE_ID;
  const categoriesCollectionId = process.env.REACT_APP_APPWRITE_CATEGORIES_COLLECTION_ID;
  const menuItemsCollectionId = process.env.REACT_APP_APPWRITE_MENU_ITEMS_COLLECTION_ID;

  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (activeCategory) {
      fetchMenuItems(activeCategory.$id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  const fetchCategories = async () => {
    try {
      const response = await databases.listDocuments(
        databaseId,
        categoriesCollectionId,
        [Query.orderAsc('order'), Query.limit(5000)]
      );
      setCategories(response.documents);
      if (response.documents.length > 0) {
        setActiveCategory(response.documents[0]);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMenuItems = async (categoryId) => {
    try {
      const response = await databases.listDocuments(
        databaseId,
        menuItemsCollectionId,
        [
          Query.equal('categoryId', categoryId),
          Query.equal('available', true),
          Query.orderAsc('order'),
          Query.limit(5000)
        ]
      );
      setMenuItems(response.documents);
    } catch (error) {
      console.error('Error fetching menu items:', error);
      setMenuItems([]);
    }
  };

  const handleCategoryChange = (category) => {
    const currentIndex = categories.findIndex(c => c.$id === activeCategory.$id);
    const newIndex = categories.findIndex(c => c.$id === category.$id);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveCategory(category);
  };

  // Floating pizza images configuration
  const floatingPizzas = [
    { src: pizzaAtum, name: language === 'en' ? 'Pizza Atum' : 'Pizza de Atum', position: { top: '5%', left: '-12%' }, nameAlign: 'right', delay: 0 },
    { src: pizzaFunghi, name: 'Pizza Funghi', position: { top: '40%', right: '-12%' }, nameAlign: 'left', delay: 0.2 },
    { src: pizzaParma, name: 'Pizza Parma', position: { bottom: '15%', left: '-12%' }, nameAlign: 'right', delay: 0.4 },
    { src: pizzaChorizo, name: language === 'en' ? 'Spicy Chorizo Pizza' : 'Pizza Chouriço Picante', position: { top: '70%', right: '-12%' }, nameAlign: 'left', delay: 0.6 }
  ];

  const floatingPastas = [
    { src: pastaCarbonara, name: 'Carbonara Cremosa', position: { top: '8%', left: '-12%' }, nameAlign: 'right', delay: 0 },
    { src: pastaPollo, name: language === 'en' ? 'Al Pollo Rosso' : 'Ao Frango Rosso', position: { top: '50%', right: '-12%' }, nameAlign: 'left', delay: 0.3 },
    { src: pastaBolognese, name: language === 'en' ? 'Alla Bolognese' : 'À Bolonhesa', position: { bottom: '18%', left: '-12%' }, nameAlign: 'right', delay: 0.6 }
  ];

  const floatingDrinks = [
    { src: drinkCoke, name: 'Coca-Cola', position: { top: '10%', left: '-12%' }, nameAlign: 'right', delay: 0 },
    { src: drinkFanta, name: 'Fanta', position: { top: '40%', right: '-12%' }, nameAlign: 'left', delay: 0.2 },
    { src: drinkPepsi, name: 'Pepsi', position: { bottom: '25%', left: '-12%' }, nameAlign: 'right', delay: 0.4 },
    { src: drinkRedbull, name: 'Red Bull', position: { top: '70%', right: '-12%' }, nameAlign: 'left', delay: 0.6 }
  ];

  const floatingDesserts = [
    { src: dessertIceCream, name: 'Ben & Jerry\'s', position: { top: '12%', left: '-12%' }, nameAlign: 'right', delay: 0 },
    { src: dessertNutellaBanana, name: language === 'en' ? 'Nutella Banana Pizza' : 'Pizza Nutella Banana', position: { top: '55%', right: '-12%' }, nameAlign: 'left', delay: 0.3 },
    { src: dessertTiramisu, name: 'Tiramisu', position: { bottom: '20%', left: '-12%' }, nameAlign: 'right', delay: 0.6 }
  ];

  const floatingStarters = [
    { src: starterBurrata, name: 'Burrata', position: { top: '8%', left: '-12%' }, nameAlign: 'right', delay: 0 },
    { src: starterGarlicBread, name: language === 'en' ? 'Garlic Bread' : 'Pão de Alho', position: { top: '45%', right: '-12%' }, nameAlign: 'left', delay: 0.2 },
    { src: starterCheeseStick, name: language === 'en' ? 'Cheese Stick' : 'Palito de Queijo', position: { bottom: '22%', left: '-12%' }, nameAlign: 'right', delay: 0.4 },
    { src: starterShrimpFinger, name: language === 'en' ? 'Shrimp Finger' : 'Dedo de Camarão', position: { top: '72%', right: '-12%' }, nameAlign: 'left', delay: 0.6 }
  ];

  const floatingSalads = [
    { src: saladGreek, name: language === 'en' ? 'Greek Salad' : 'Salada Grega', position: { top: '10%', left: '-12%' }, nameAlign: 'right', delay: 0 },
    { src: saladCaprese, name: language === 'en' ? 'Caprese Salad' : 'Salada Caprese', position: { top: '50%', right: '-12%' }, nameAlign: 'left', delay: 0.3 },
    { src: saladTuna, name: language === 'en' ? 'Tuna Salad' : 'Salada de Atum', position: { bottom: '18%', left: '-12%' }, nameAlign: 'right', delay: 0.6 }
  ];

  const getFloatingImages = () => {
    if (!activeCategory) return [];
    const categoryName = activeCategory.name || activeCategory.nameEn || '';
    
    if (categoryName.toLowerCase().includes('starter') || categoryName.toLowerCase().includes('entrada')) return floatingStarters;
    if (categoryName.toLowerCase().includes('pizza')) return floatingPizzas;
    if (categoryName.toLowerCase().includes('pasta') || categoryName.toLowerCase().includes('massa')) return floatingPastas;
    if (categoryName.toLowerCase().includes('salad') || categoryName.toLowerCase().includes('salada')) return floatingSalads;
    if (categoryName.toLowerCase().includes('drink') || categoryName.toLowerCase().includes('bebida')) return floatingDrinks;
    if (categoryName.toLowerCase().includes('dessert') || categoryName.toLowerCase().includes('sobremesa')) return floatingDesserts;
    return [];
  };

  if (loading) {
    return (
      <section id="menu" className="menu">
        <div className="container">
          <h2>{t('ourMenu')}</h2>
          <div style={{ textAlign: 'center', padding: '4rem', color: '#d4af37' }}>
            Loading menu...
          </div>
        </div>
      </section>
    );
  }

  if (categories.length === 0) {
    return (
      <section id="menu" className="menu">
        <div className="container">
          <h2>{t('ourMenu')}</h2>
          <div style={{ textAlign: 'center', padding: '4rem', color: '#d4af37' }}>
            No menu categories available. Please add categories in the admin panel.
          </div>
        </div>
      </section>
    );
  }

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
              key={category.$id}
              className={`menu-tab ${activeCategory?.$id === category.$id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {language === 'en' ? category.nameEn : category.namePt}
            </button>
          ))}
        </div>

        {/* Category Image */}
        {activeCategory && (
          <motion.div 
            className="category-image-wrapper"
            key={activeCategory.$id}
          >
            <div className="category-image-container">
              <motion.img 
                src={activeCategory.imageUrl} 
                alt={language === 'en' ? activeCategory.nameEn : activeCategory.namePt}
                className="category-image"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6,
                  ease: "easeOut"
                }}
              />
              <div className="image-glow"></div>
            </div>
          </motion.div>
        )}

        {/* Menu Items */}
        <motion.div 
          className="menu-items-container"
          key={`menu-${activeCategory?.$id}`}
        >
          {/* Floating Images */}
          {getFloatingImages().map((item, idx) => (
            <motion.div
              key={idx}
              className={`floating-pizza-outside ${item.nameAlign === 'left' ? 'name-left' : 'name-right'}`}
              style={{
                ...item.position
              }}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotate: 0,
                y: [0, -20, 0]
              }}
              transition={{ 
                opacity: { duration: 0.6, delay: 0.3 + item.delay },
                scale: { duration: 0.6, delay: 0.3 + item.delay },
                rotate: { duration: 0.8, delay: 0.3 + item.delay },
                y: {
                  duration: 4 + idx,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <img src={item.src} alt={item.name} />
              <div className="pizza-name">{item.name}</div>
            </motion.div>
          ))}

          {/* Menu Book */}
          <motion.div 
            className="menu-items"
            initial={{ 
              rotateY: direction === 1 ? -90 : 90,
              opacity: 0,
              x: direction === 1 ? -100 : 100
            }}
            animate={{ 
              rotateY: 0,
              opacity: 1,
              x: 0
            }}
            exit={{ 
              rotateY: direction === 1 ? 90 : -90,
              opacity: 0,
              x: direction === 1 ? 100 : -100
            }}
            transition={{ 
              duration: 0.9,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: direction === 1 ? "left center" : "right center"
            }}
          >
            {menuItems.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: 'rgba(255,255,255,0.6)' }}>
                No items in this category yet.
              </div>
            ) : (
              menuItems.map((item, index) => (
                <motion.div
                  key={item.$id}
                  className="menu-item menu-item-compact"
                  initial={{ 
                    opacity: 0,
                    y: 20
                  }}
                  animate={{ 
                    opacity: 1,
                    y: 0
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4 + (index * 0.06),
                    ease: "easeOut"
                  }}
                >
                  <div className="item-header">
                    <h4>{language === 'en' ? item.nameEn : item.namePt}</h4>
                    <span className="price">{item.price}</span>
                  </div>
                  <p>{language === 'en' ? item.descriptionEn : item.descriptionPt}</p>
                </motion.div>
              ))
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuDynamic;
