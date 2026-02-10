import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Menu.css';
import { useLanguage } from '../contexts/LanguageContext';

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

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Starters');
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const { t, language } = useLanguage();

  // Map categories to authentic Italian food images
  const categoryImages = {
    "Starters": "https://images.unsplash.com/photo-1541529086526-db283c563270?w=800&q=80",
    "Pizza": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
    "Pasta": "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80",
    "Salads": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "Desserts": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
    "Drinks": "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=800&q=80"
  };

  const menuData = {
    en: {
      "Starters": [
        { name: "Garlic Bread with Cheese", description: "100% mozzarella, garlic, oregano, olive oil", price: "2,50€" },
        { name: "Avocado Toast", description: "Toast, avocado, feta, olive oil, salt, lemon, pepper", price: "6,00€" },
        { name: "Garlic Finger with Cheese", description: "Cheese, garlic, butter, oregano", price: "6,50€" },
        { name: "Burrata", description: "Burrata 120gm cheese, arugula, cherry tomatoes, olive oil, oregano", price: "6,50€" },
        { name: "Pepperoni Roll (6 units)", description: "Pepperoni, mozzarella, olive oil, oregano", price: "6,99€" },
        { name: "Cheese Stick", description: "Made capatu, mozzarella, basil, oregano", price: "6,99€" },
        { name: "Shrimp Finger", description: "Tomato sauce, mozzarella, shrimp, and mayonnaise", price: "7,99€" },
        { name: "Bruschetta Prosciutto", description: "Toasted bread, ricotta cheese, ham, basil pesto", price: "4,99€" },
        { name: "Bruschetta Milano", description: "Toasted buffalo bread, rocket, cherry tomatoes, fresh", price: "4,99€" }
      ],
      "Pizza": [
        { name: "Pizza Marinara with Buffalo", description: "Capatu flour, tomato sauce, cherry tomato, buffalo, basil, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Queijoes Sabor Special", description: "Capatu flour, tomato sauce, fresh mozzarella, gorgonzola, taleggio, parmesan, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Margherita de Speciale", description: "Caputo flour, tomato sauce, mozzarella, Parmesan, Basil, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Funghi Pizza", description: "Caputo flour, tomato sauce, mozzarella, mushrooms, olives, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Seafood Pizza", description: "Caputo flour, tomato sauce, mozzarella, shrimp, pimento parsley, oregano, and parmesan", price: "M: 8,50€ / R: 9,50€" },
        { name: "Prosciutto and Funghi Pizza", description: "Caputo flour, tomato sauce, mozzarella, prosciutto, mushrooms, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Tuna Pizza", description: "Caputo flour, tomato sauce, mozzarella, tuna, red onion, mixed pepper, olives, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Salami", description: "Caputo flour, tomato sauce, mozzarella, mushrooms, olives, mixed pepper, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Bacon", description: "Caputo flour, tomato sauce, mozzarella, bacon, pineapple, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Pepperoni", description: "Caputo flour, tomato sauce, mozzarella, pepperoni, red onion, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Portuguese Pizza and Speciale", description: "Caputo flour, tomato sauce, mozzarella, prosciutto cotto, heart of palm, boiled egg, red onion, olives, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "BELLA CANTO and Special", description: "Caputo flour, tomato sauce, mozzarella, bacon, chicken, corn, fresh mozzarella, basil, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Neapolitan Pizza", description: "Caputo flour, tomato sauce, mozzarella, capers, anchovies, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Boogie Vegan", description: "Caputo flour, tomato sauce, mozzarella, mixed vegetables, corn, tomato, olives, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Dia Vola", description: "Caputo flour, tomato sauce, mozzarella, fresh mozzarella, spicy chorizo, Parmesan, basil, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Amanti de Pollo", description: "Caputo flour, tomato sauce, mozzarella, chicken, corn, olives, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Buffalo Trufi", description: "Caputo flour, tomato sauce, mozzarella, buffalo, pesto, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Parma", description: "Caputo flour, tomato sauce, mozzarella, arugula, pomodorini, ham, olives, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Quattro (4) Farmaggi", description: "Caputo flour, tomato sauce, mozzarella, gorgonzola, parmesan, taleggio, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Hawaiian Pizza", description: "Caputo flour, tomato sauce, mozzarella, pineapple, cream, ham, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Spicy Chorizo Pizza", description: "Caputo flour, tomato sauce, mozzarella, chorizo, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Burata", description: "Caputo flour, tomato sauce, mozzarella fesca, pomodorini, arugula, burrata cheese, cherry tomato, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Bologna XXX", description: "Caputo flour, tomato sauce, mozzarella, bolognese, cipolla, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Cinco (5) Stagioni", description: "Caputo flour, tomato sauce, mozzarella, mushrooms, ham, capers, artichokes, anchovies, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Pesto", description: "Capatu flour, tomato sauce, mozzarella, zucchini, pesto, basil, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Shakshuka Pizza", description: "Capatu flour, tomato sauce, mozzarella, 3 eggs, parsley, feta cheese, parmesan, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Italian Pizza", description: "Capatu flour, tomato sauce, mozzarella, prosciutto, mozzarella fesca, arugula, cherry tomato, parmesan shavings, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Chicken and Pizza Pizza", description: "Capatu flour, tomato sauce, mozzarella, chicken, red onion, olives, mixed pimento, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Ricotta Pizza", description: "Capatu flour, tomato sauce, mozzarella, espinara, onion, ricotta, parmesan, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Bella Mortadela", description: "Capatu flour, tomato sauce, buffalo cheese, mortadella, pistachio, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Piri-Piri Pizza", description: "Capatu flour, tomato sauce, mozzarella, shrimp, peppers, piri-piri, garlic, red onion, coriander, fresh arugula, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Specie Jalapeno", description: "Capatu flour, tomato sauce, mozzarella, jalapeno, pimento mix, garlic, red onion, and oregano", price: "M: 8,50€ / R: 9,50€" },
        { name: "Calzone Napoltano", description: "Capatu flour, tomato sauce, mozzarella, parmiziano, spicy chouriço, manzarica, and oregano", price: "8,99€" },
        { name: "Calzone Classico", description: "Capatu flour, tomato sauce, mozzarella, ham, roe mushrooms, olive oil, manzarica, and oregano", price: "8,99€" },
        { name: "Calzone Special", description: "Capatu flour, tomato sauce, mozzarella, shrimp, manjaricao, garlic, trofa olive oil, and oregano", price: "8,99€" },
        { name: "Vegetarian Calzone", description: "Capatu flour, tomato sauce, mozzarella, spinach, parmigiano regianno, funghi, and oregano", price: "8,99€" },
        { name: "Pepperoni and Bacon Pizza (Combo)", description: "Half pepperoni and half bacon. Capatu flour, tomato sauce, mozzarella, pepperoni, cipolla rossa, oregano, pancetta, and pineapple", price: "10,99€" },
        { name: "Tom and Jerry Pizza (Combo)", description: "Pizza with nutella m&m and pizza diavola. Nutella pizza and m&m with caputo flour, tomato sauce, mozzarella, panna, vermicelli, colorato, and basil", price: "10,99€" },
        { name: "Pizza Family Combo", description: "Portuguese pizza and Italian pizza. Capatu flour, tomato sauce, mozzarella, prosciutto, cuore di palma, uovo sodo, cipolla, and olive parmigiano", price: "10,99€" },
        { name: "Pizza Nutella", description: "Pizza with nutella", price: "5,99€" },
        { name: "Nutella and M&M Pizza", description: "Pizza, nutella, and m&m", price: "6,50€" },
        { name: "Nutella and Banana Pizza", description: "Pizza with nutella and banana", price: "6,50€" },
        { name: "Lagarta Pizza", description: "Pizza, Nutella, M&M", price: "6,50€" },
        { name: "Strawberry Pizza", description: "Pizza with nutella, strawberry, banana", price: "6,50€" }
      ],
      "Pasta": [
        { name: "Tagliatelle Carbonara", description: "Tagliatelle pasta, fresh cream, egg, smoked veal bacon, basil and parmesan", price: "8,50€" },
        { name: "Spaghetti Bolognese", description: "Ground beef tomato San Marzano, basil and parmesan", price: "8,00€" },
        { name: "Spaghetti Chicken", description: "Marinated chicken fillet, San Marzano tomatoes, basil and parmesan", price: "8,00€" },
        { name: "Spaghetti All in Shape", description: "Fresh cream, mushrooms, gorgonzola, parmesan, basil", price: "8,00€" },
        { name: "Spaghetti Mushroom", description: "Spaghetti pasta, mushrooms, cream sauce, parmesan, basil", price: "9,50€" },
        { name: "Tagliatelle Shrimp", description: "Tagliatelle, broccoli and sautéed shrimp, cream sauce, parmesan, basil", price: "8,00€" },
        { name: "Tagliatelle Vegetarian", description: "Broccoli, zucchini, mushrooms, carrots and cherry tomatoes, parmesan, basil", price: "8,00€" },
        { name: "Penne Pomodora Pasta", description: "Penne, tomato sauce, cherry tomatoes, parmesan, basil and oregano", price: "8,00€" },
        { name: "Gnocchi Pollo", description: "Cream sauce, chicken, mozzarella, parsley, mango", price: "8,90€" },
        { name: "Gnocchi Crème", description: "Cream sauce, black pepper, parsley, basil and oregano", price: "7,99€" },
        { name: "Gnocchi Bolognese", description: "Tomato sauce, meat, mozzarella, parsley, mange", price: "8,90€" },
        { name: "Tortelloni Burrata", description: "Tomato sauce, burrata, parsley and oregano", price: "9,90€" },
        { name: "Tortelloni Broccoli and Shrimp", description: "Cream sauce, broccoli, shrimp, parsley, oregano", price: "8,90€" },
        { name: "Tortelloni Chicken", description: "Cream sauce, mushrooms, chicken, parsley, risotto mange", price: "8,90€" },
        { name: "Salmonella Rosy", description: "Tomato sauce, pasta, salmon, parmesan, oregano and basil", price: "10,99€" },
        { name: "Beans Risotto", description: "Arbore rice, chicken, red and black beans, onion, parmesan", price: "6,99€" },
        { name: "Chicken Risotto", description: "Arbore rice, chicken, corn, onion, parmesan", price: "6,99€" },
        { name: "Veg Shrimp Risotto", description: "Arboreal rice, shrimp, spinach, parmesan", price: "7,50€" },
        { name: "Cheesy and Walnut Risotto", description: "Arbore rice, gorgonzola, walnuts, parmesan", price: "6,50€" },
        { name: "Cherry Risotto", description: "Cherry tomatoes, red beans, basil", price: "6,50€" },
        { name: "Broccoli Risotto", description: "Mushrooms, tomatoes, pumpkin and broccoli, parmesan", price: "6,50€" },
        { name: "Mushroom Risotto", description: "Mushrooms, corn, onion, parmesan, parsley", price: "6,99€" }
      ],
      "Salads": [
        { name: "Greek Salad", description: "Tomato, cucumber, green pepper, red onion, olive, and feta cheese", price: "7,00€" },
        { name: "Avocado Salad", description: "Lettuce, cherry tomatoes, chilli, coriander, avocado, fried red onion, and seasoning sauce", price: "7,99€" },
        { name: "Caprese Salad", description: "Tomato, buffalo mozzarella, basil, olive oil, and oregano", price: "6,50€" },
        { name: "Mixed Salad", description: "Lettuce, tomato, cucumber, red onion, and seasoning sauce", price: "6,50€" },
        { name: "Tuna Salad", description: "Lettuce, tomato, fennel, grilled pineapple, and tuna", price: "6,50€" }
      ],
      "Desserts": [
        { name: "Pizza Nutella", description: "Pizza with nutella", price: "5,99€" },
        { name: "Nutella and M&M Pizza", description: "Pizza, nutella, and m&m", price: "6,50€" },
        { name: "Nutella and Banana Pizza", description: "Pizza with nutella and banana", price: "6,50€" },
        { name: "Lagarta Pizza", description: "Pizza, Nutella, M&M", price: "6,50€" },
        { name: "Strawberry Pizza", description: "Pizza with nutella, strawberry, banana", price: "6,50€" },
        { name: "Ben & Jerry's Ice Cream", description: "Chocolate Fudge Brownie, Peanut Butter Cup, Cookie Dough, Strawberry Cheesecake", price: "100ml: 3,50€ / 465ml: 6,50€" }
      ],
      "Drinks": [
        { name: "Coca-Cola", description: "33cl / 1.5L", price: "1,50€ / 3,50€" },
        { name: "Coca-Cola Zero", description: "33cl / 1.5L", price: "1,50€ / 3,50€" },
        { name: "Fanta Pineapple", description: "33cl", price: "1,50€" },
        { name: "Fanta Orange", description: "33cl", price: "1,50€" },
        { name: "Fanta Passion Fruit", description: "33cl", price: "1,50€" },
        { name: "7up", description: "33cl", price: "1,50€" },
        { name: "Water", description: "50cl / 1.5L", price: "1,30€ / 2,50€" },
        { name: "Water Tônica", description: "33cl", price: "1,50€" },
        { name: "Ice Tea Lemon", description: "33cl", price: "1,50€" },
        { name: "Ice Tea Mango", description: "33cl", price: "1,50€" },
        { name: "Ice Tea Pêssego", description: "33cl", price: "1,50€" },
        { name: "Guarana", description: "33cl", price: "1,50€" },
        { name: "Red Bull", description: "25cl", price: "2,50€" },
        { name: "Sumo Orange", description: "33cl", price: "1,50€" },
        { name: "Sumo Pineapple", description: "33cl", price: "1,50€" },
        { name: "Lipton Mango", description: "33cl", price: "1,50€" },
        { name: "Lipton Lemon", description: "33cl", price: "1,50€" },
        { name: "Pedras com gas", description: "33cl", price: "1,50€" },
        { name: "Coffee", description: "Espresso", price: "0,80€" }
      ]
    },
    pt: {
      "Starters": [
        { name: "Pão de Alho com Queijo", description: "100% mozzarella, alho, orégãos, azeite", price: "2,50€" },
        { name: "Torrada de Abacate", description: "Torrada, abacate, feta, azeite, sal, limão, pimenta", price: "6,00€" },
        { name: "Dedo de Alho com Queijo", description: "Queijo, alho, manteiga, orégãos", price: "6,50€" },
        { name: "Burrata", description: "Queijo burrata 120gm, rúcula, tomate cereja, azeite, orégãos", price: "6,50€" },
        { name: "Rolo de Pepperoni (6 unidades)", description: "Pepperoni, mozzarella, azeite, orégãos", price: "6,99€" },
        { name: "Palito de Queijo", description: "Feito capatu, mozzarella, manjericão, orégãos", price: "6,99€" },
        { name: "Dedo de Camarão", description: "Molho de tomate, mozzarella, camarão e maionese", price: "7,99€" },
        { name: "Bruschetta Prosciutto", description: "Pão torrado, queijo ricota, presunto, pesto de manjericão", price: "4,99€" },
        { name: "Bruschetta Milano", description: "Pão de búfala torrado, rúcula, tomate cereja, fresco", price: "4,99€" }
      ],
      "Pizza": [
        { name: "Pizza Marinara com Búfala", description: "Farinha Capatu, molho de tomate, tomate cereja, búfala, manjericão e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Queijoes Sabor Especial", description: "Farinha Capatu, molho de tomate, mozzarella fresca, gorgonzola, taleggio, parmesão e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Margherita de Speciale", description: "Farinha Caputo, molho de tomate, mozzarella, parmesão, manjericão e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Funghi", description: "Farinha Caputo, molho de tomate, mozzarella, cogumelos, azeitonas e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza de Marisco", description: "Farinha Caputo, molho de tomate, mozzarella, camarão, salsa pimento, orégãos e parmesão", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Prosciutto e Funghi", description: "Farinha Caputo, molho de tomate, mozzarella, presunto, cogumelos e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza de Atum", description: "Farinha Caputo, molho de tomate, mozzarella, atum, cebola roxa, pimento misto, azeitonas e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Salami", description: "Farinha Caputo, molho de tomate, mozzarella, cogumelos, azeitonas, pimento misto e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Bacon", description: "Farinha Caputo, molho de tomate, mozzarella, bacon, ananás e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Pepperoni", description: "Farinha Caputo, molho de tomate, mozzarella, pepperoni, cebola roxa e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Portuguesa e Speciale", description: "Farinha Caputo, molho de tomate, mozzarella, presunto cotto, palmito, ovo cozido, cebola roxa, azeitonas e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "BELLA CANTO e Especial", description: "Farinha Caputo, molho de tomate, mozzarella, bacon, frango, milho, mozzarella fresca, manjericão e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Napolitana", description: "Farinha Caputo, molho de tomate, mozzarella, alcaparras, anchovas e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Boogie Vegan", description: "Farinha Caputo, molho de tomate, mozzarella, legumes mistos, milho, tomate, azeitonas e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Dia Vola", description: "Farinha Caputo, molho de tomate, mozzarella, mozzarella fresca, chouriço picante, parmesão, manjericão e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Amanti de Pollo", description: "Farinha Caputo, molho de tomate, mozzarella, frango, milho, azeitonas e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Buffalo Trufi", description: "Farinha Caputo, molho de tomate, mozzarella, búfala, pesto e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Parma", description: "Farinha Caputo, molho de tomate, mozzarella, rúcula, pomodorini, presunto, azeitonas e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Quattro (4) Farmaggi", description: "Farinha Caputo, molho de tomate, mozzarella, gorgonzola, parmesão, taleggio e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Havaiana", description: "Farinha Caputo, molho de tomate, mozzarella, ananás, natas, presunto e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Chouriço Picante", description: "Farinha Caputo, molho de tomate, mozzarella, chouriço e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Burata", description: "Farinha Caputo, molho de tomate, mozzarella fresca, pomodorini, rúcula, queijo burrata, tomate cereja e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Bologna XXX", description: "Farinha Caputo, molho de tomate, mozzarella, bolonhesa, cebola e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Cinco (5) Stagioni", description: "Farinha Caputo, molho de tomate, mozzarella, cogumelos, presunto, alcaparras, alcachofras, anchovas e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Pesto", description: "Farinha Capatu, molho de tomate, mozzarella, courgette, pesto, manjericão e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Shakshuka", description: "Farinha Capatu, molho de tomate, mozzarella, 3 ovos, salsa, queijo feta, parmesão e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Italiana", description: "Farinha Capatu, molho de tomate, mozzarella, presunto, mozzarella fresca, rúcula, tomate cereja, lascas de parmesão e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza de Frango e Pizza", description: "Farinha Capatu, molho de tomate, mozzarella, frango, cebola roxa, azeitonas, pimento misto e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Ricotta", description: "Farinha Capatu, molho de tomate, mozzarella, espinafres, cebola, ricotta, parmesão e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Bella Mortadela", description: "Farinha Capatu, molho de tomate, queijo búfala, mortadela, pistácio e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Pizza Piri-Piri", description: "Farinha Capatu, molho de tomate, mozzarella, camarão, pimentos, piri-piri, alho, cebola roxa, coentros, rúcula fresca e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Specie Jalapeno", description: "Farinha Capatu, molho de tomate, mozzarella, jalapeno, pimento misto, alho, cebola roxa e orégãos", price: "M: 8,50€ / R: 9,50€" },
        { name: "Calzone Napolitano", description: "Farinha Capatu, molho de tomate, mozzarella, parmesão, chouriço picante, manjericão e orégãos", price: "8,99€" },
        { name: "Calzone Clássico", description: "Farinha Capatu, molho de tomate, mozzarella, presunto, cogumelos, azeite, manjericão e orégãos", price: "8,99€" },
        { name: "Calzone Especial", description: "Farinha Capatu, molho de tomate, mozzarella, camarão, manjericão, alho, azeite e orégãos", price: "8,99€" },
        { name: "Calzone Vegetariano", description: "Farinha Capatu, molho de tomate, mozzarella, espinafres, parmesão, cogumelos e orégãos", price: "8,99€" },
        { name: "Pizza Pepperoni e Bacon (Combo)", description: "Metade pepperoni e metade bacon. Farinha Capatu, molho de tomate, mozzarella, pepperoni, cebola roxa, orégãos, bacon e ananás", price: "10,99€" },
        { name: "Pizza Tom e Jerry (Combo)", description: "Pizza com nutella m&m e pizza diavola. Pizza de nutella e m&m com farinha caputo, molho de tomate, mozzarella, natas, vermicelli, colorato e manjericão", price: "10,99€" },
        { name: "Combo Família Pizza", description: "Pizza portuguesa e pizza italiana. Farinha Capatu, molho de tomate, mozzarella, presunto, palmito, ovo cozido, cebola e azeitona parmesão", price: "10,99€" },
        { name: "Pizza Nutella", description: "Pizza com nutella", price: "5,99€" },
        { name: "Pizza Nutella e M&M", description: "Pizza, nutella e m&m", price: "6,50€" },
        { name: "Pizza Nutella e Banana", description: "Pizza com nutella e banana", price: "6,50€" },
        { name: "Pizza Lagarta", description: "Pizza, Nutella, M&M", price: "6,50€" },
        { name: "Pizza de Morango", description: "Pizza com nutella, morango, banana", price: "6,50€" }
      ],
      "Pasta": [
        { name: "Tagliatelle Carbonara", description: "Massa tagliatelle, natas frescas, ovo, bacon de vitela fumado, manjericão e parmesão", price: "8,50€" },
        { name: "Esparguete à Bolonhesa", description: "Carne picada, tomate San Marzano, manjericão e parmesão", price: "8,00€" },
        { name: "Esparguete de Frango", description: "Filé de frango marinado, tomates San Marzano, manjericão e parmesão", price: "8,00€" },
        { name: "Esparguete All in Shape", description: "Natas frescas, cogumelos, gorgonzola, parmesão e manjericão", price: "8,00€" },
        { name: "Esparguete com Cogumelos", description: "Massa esparguete, cogumelos, molho de natas, parmesão e manjericão", price: "9,50€" },
        { name: "Tagliatelle de Camarão", description: "Tagliatelle, brócolos, camarão salteado, molho de natas, parmesão e manjericão", price: "8,00€" },
        { name: "Tagliatelle Vegetariano", description: "Brócolos, courgette, cogumelos, cenouras, tomate cereja, parmesão e manjericão", price: "8,00€" },
        { name: "Massa Penne Pomodora", description: "Penne, molho de tomate, tomate cereja, parmesão, manjericão e orégãos", price: "8,00€" },
        { name: "Gnocchi Pollo", description: "Molho de natas, frango, mozzarella, salsa e manga", price: "8,90€" },
        { name: "Gnocchi Crème", description: "Molho de natas, pimenta preta, salsa, manjericão e orégãos", price: "7,99€" },
        { name: "Gnocchi Bolonhesa", description: "Molho de tomate, carne, mozzarella, salsa e manga", price: "8,90€" },
        { name: "Tortelloni Burrata", description: "Molho de tomate, burrata, salsa e orégãos", price: "9,90€" },
        { name: "Tortelloni Brócolos e Camarão", description: "Molho de natas, brócolos, camarão, salsa e orégãos", price: "8,90€" },
        { name: "Tortelloni Frango", description: "Molho de natas, cogumelos, frango, salsa, risotto manga", price: "8,90€" },
        { name: "Salmão Rosy", description: "Molho de tomate, massa, salmão, parmesão, orégãos e manjericão", price: "10,99€" },
        { name: "Risotto de Feijão", description: "Arroz arbore, frango, feijão vermelho e preto, cebola, parmesão", price: "6,99€" },
        { name: "Risotto de Frango", description: "Arroz arbore, frango, milho, cebola, parmesão", price: "6,99€" },
        { name: "Risotto de Camarão Vegetariano", description: "Arroz arboreal, camarão, espinafres, parmesão", price: "7,50€" },
        { name: "Risotto de Queijo e Nozes", description: "Arroz arbore, gorgonzola, nozes, parmesão", price: "6,50€" },
        { name: "Risotto de Cereja", description: "Tomate cereja, feijão vermelho, manjericão", price: "6,50€" },
        { name: "Risotto de Brócolos", description: "Cogumelos, tomates, abóbora e brócolos, parmesão", price: "6,50€" },
        { name: "Risotto de Cogumelos", description: "Cogumelos, milho, cebola, parmesão, salsa", price: "6,99€" }
      ],
      "Salads": [
        { name: "Salada Grega", description: "Tomate, pepino, pimento verde, cebola roxa, azeitona e queijo feta", price: "7,00€" },
        { name: "Salada de Abacate", description: "Alface, tomate cereja, malagueta, coentros, abacate, cebola roxa frita e molho de tempero", price: "7,99€" },
        { name: "Salada Caprese", description: "Tomate, mozzarella de búfala, manjericão, azeite e orégãos", price: "6,50€" },
        { name: "Salada Mista", description: "Alface, tomate, pepino, cebola roxa e molho de tempero", price: "6,50€" },
        { name: "Salada de Atum", description: "Alface, tomate, funcho, ananás grelhado e atum", price: "6,50€" }
      ],
      "Desserts": [
        { name: "Pizza Nutella", description: "Pizza com nutella", price: "5,99€" },
        { name: "Pizza Nutella e M&M", description: "Pizza, nutella e m&m", price: "6,50€" },
        { name: "Pizza Nutella e Banana", description: "Pizza com nutella e banana", price: "6,50€" },
        { name: "Pizza Lagarta", description: "Pizza, Nutella, M&M", price: "6,50€" },
        { name: "Pizza de Morango", description: "Pizza com nutella, morango, banana", price: "6,50€" },
        { name: "Gelado Ben & Jerry's", description: "Chocolate Fudge Brownie, Peanut Butter Cup, Cookie Dough, Strawberry Cheesecake", price: "100ml: 3,50€ / 465ml: 6,50€" }
      ],
      "Drinks": [
        { name: "Coca-Cola", description: "33cl / 1.5L", price: "1,50€ / 3,50€" },
        { name: "Coca-Cola Zero", description: "33cl / 1.5L", price: "1,50€ / 3,50€" },
        { name: "Fanta Ananás", description: "33cl", price: "1,50€" },
        { name: "Fanta Laranja", description: "33cl", price: "1,50€" },
        { name: "Fanta Maracujá", description: "33cl", price: "1,50€" },
        { name: "7up", description: "33cl", price: "1,50€" },
        { name: "Água", description: "50cl / 1.5L", price: "1,30€ / 2,50€" },
        { name: "Água Tônica", description: "33cl", price: "1,50€" },
        { name: "Ice Tea Limão", description: "33cl", price: "1,50€" },
        { name: "Ice Tea Manga", description: "33cl", price: "1,50€" },
        { name: "Ice Tea Pêssego", description: "33cl", price: "1,50€" },
        { name: "Guaraná", description: "33cl", price: "1,50€" },
        { name: "Red Bull", description: "25cl", price: "2,50€" },
        { name: "Sumo Laranja", description: "33cl", price: "1,50€" },
        { name: "Sumo Ananás", description: "33cl", price: "1,50€" },
        { name: "Lipton Manga", description: "33cl", price: "1,50€" },
        { name: "Lipton Limão", description: "33cl", price: "1,50€" },
        { name: "Pedras com gás", description: "33cl", price: "1,50€" },
        { name: "Café", description: "Expresso", price: "0,80€" }
      ]
    }
  };

  const categories = Object.keys(menuData.en);

  const handleCategoryChange = (category) => {
    const currentIndex = categories.indexOf(activeCategory);
    const newIndex = categories.indexOf(category);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveCategory(category);
  };

  // Floating pizza images configuration - far outside menu, names adjusted for visibility
  const floatingPizzas = [
    { src: pizzaAtum, name: 'Pizza Atum', position: { top: '5%', left: '-12%' }, nameAlign: 'right', delay: 0 },
    { src: pizzaFunghi, name: 'Pizza Funghi', position: { top: '40%', right: '-12%' }, nameAlign: 'left', delay: 0.2 },
    { src: pizzaParma, name: 'Pizza Parma', position: { bottom: '15%', left: '-12%' }, nameAlign: 'right', delay: 0.4 },
    { src: pizzaChorizo, name: 'Spicy Chorizo Pizza', position: { top: '70%', right: '-12%' }, nameAlign: 'left', delay: 0.6 }
  ];

  // Floating pasta images configuration
  const floatingPastas = [
    { src: pastaCarbonara, name: 'Carbonara Cremosa', position: { top: '8%', left: '-12%' }, nameAlign: 'right', delay: 0 },
    { src: pastaPollo, name: 'Al Pollo Rosso', position: { top: '50%', right: '-12%' }, nameAlign: 'left', delay: 0.3 },
    { src: pastaBolognese, name: 'Alla Bolognese', position: { bottom: '18%', left: '-12%' }, nameAlign: 'right', delay: 0.6 }
  ];

  // Floating drink images configuration
  const floatingDrinks = [
    { src: drinkCoke, name: 'Coca-Cola', position: { top: '10%', left: '-12%' }, nameAlign: 'right', delay: 0 },
    { src: drinkFanta, name: 'Fanta', position: { top: '40%', right: '-12%' }, nameAlign: 'left', delay: 0.2 },
    { src: drinkPepsi, name: 'Pepsi', position: { bottom: '25%', left: '-12%' }, nameAlign: 'right', delay: 0.4 },
    { src: drinkRedbull, name: 'Red Bull', position: { top: '70%', right: '-12%' }, nameAlign: 'left', delay: 0.6 }
  ];

  // Floating dessert images configuration
  const floatingDesserts = [
    { src: dessertIceCream, name: 'Ben & Jerry\'s', position: { top: '12%', left: '-12%' }, nameAlign: 'right', delay: 0 },
    { src: dessertNutellaBanana, name: 'Nutella Banana Pizza', position: { top: '55%', right: '-12%' }, nameAlign: 'left', delay: 0.3 },
    { src: dessertTiramisu, name: 'Tiramisu', position: { bottom: '20%', left: '-12%' }, nameAlign: 'right', delay: 0.6 }
  ];

  // Floating starter images configuration
  const floatingStarters = [
    { src: starterBurrata, name: 'Burrata', position: { top: '8%', left: '-12%' }, nameAlign: 'right', delay: 0 },
    { src: starterGarlicBread, name: 'Garlic Bread', position: { top: '45%', right: '-12%' }, nameAlign: 'left', delay: 0.2 },
    { src: starterCheeseStick, name: 'Cheese Stick', position: { bottom: '22%', left: '-12%' }, nameAlign: 'right', delay: 0.4 },
    { src: starterShrimpFinger, name: 'Shrimp Finger', position: { top: '72%', right: '-12%' }, nameAlign: 'left', delay: 0.6 }
  ];

  // Floating salad images configuration
  const floatingSalads = [
    { src: saladGreek, name: 'Greek Salad', position: { top: '10%', left: '-12%' }, nameAlign: 'right', delay: 0 },
    { src: saladCaprese, name: 'Caprese Salad', position: { top: '50%', right: '-12%' }, nameAlign: 'left', delay: 0.3 },
    { src: saladTuna, name: 'Tuna Salad', position: { bottom: '18%', left: '-12%' }, nameAlign: 'right', delay: 0.6 }
  ];

  // Get the appropriate floating images based on category
  const getFloatingImages = () => {
    if (activeCategory === 'Starters') return floatingStarters;
    if (activeCategory === 'Pizza') return floatingPizzas;
    if (activeCategory === 'Pasta') return floatingPastas;
    if (activeCategory === 'Salads') return floatingSalads;
    if (activeCategory === 'Drinks') return floatingDrinks;
    if (activeCategory === 'Desserts') return floatingDesserts;
    return [];
  };

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
              onClick={() => handleCategoryChange(category)}
            >
              {t(category.toLowerCase())}
            </button>
          ))}
        </div>

        {/* Category Image - Between Tabs and Menu Book */}
        <motion.div 
          className="category-image-wrapper"
          key={activeCategory}
        >
          <div className="category-image-container">
            <motion.img 
              src={categoryImages[activeCategory]} 
              alt={activeCategory}
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

        {/* Menu Items */}
        <motion.div 
          className="menu-items-container"
          key={`menu-${activeCategory}`}
        >
          {/* Floating Images - Outside Menu Book, for Pizza and Pasta Categories */}
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

          {/* Menu Book with Page Turn Animation from Left */}
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
            {menuData[language][activeCategory].map((item, index) => {
              return (
                <motion.div
                  key={index}
                  className={`menu-item ${(activeCategory === 'Starters' || activeCategory === 'Pizza' || activeCategory === 'Pasta' || activeCategory === 'Salads' || activeCategory === 'Drinks' || activeCategory === 'Desserts') ? 'menu-item-compact' : ''}`}
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
                    <h4>{item.name}</h4>
                    <span className="price">{item.price}</span>
                  </div>
                  <p>{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
