import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const translations = {
  en: {
    // Header
    home: "Home",
    about: "About",
    menu: "Menu",
    contact: "Contact",
    
    // Hero
    heroTitle: "Bella Canto Pizzaria",
    heroSubtitle: "Authentic Italian Pizza in Lisboa",
    exploreMenu: "Explore Menu",
    pizzaOf: "Pizza {current} of {total}",
    
    // About
    ourStory: "Our Story",
    aboutText1: "We are here with the magic of Italian flavors in Lisboa. Come and enjoy fire-baked pizzas and delicious Italian pasta.",
    aboutText2: "We make Italian food with the best Italian ingredients. The oven is traditional. So you can taste the fire-burning pizza in Lisboa.",
    aboutText3: "All ingredients are of high quality and the best quality. We hope you enjoy it and come back for the taste.",
    
    // Menu
    ourMenu: "Our Menu",
    starters: "Starters",
    pizza: "Pizza",
    pasta: "Pasta",
    salads: "Salads",
    desserts: "Desserts",
    
    // Gallery
    gallery: "Our Gallery",
    gallerySubtitle: "A Visual Journey Through Our Culinary Masterpieces",
    viewDish: "View Dish",
    
    // Features
    whyChooseUs: "Why Choose Us",
    featuresSubtitle: "Experience the Authentic Taste of Italy in Every Bite",
    feature1Title: "Traditional Wood-Fired Oven",
    feature1Desc: "Our authentic Italian oven creates the perfect crispy crust with smoky flavors",
    feature2Title: "Fresh Premium Ingredients",
    feature2Desc: "We use only the finest imported Italian ingredients for authentic taste",
    feature3Title: "Handcrafted Perfection",
    feature3Desc: "Every dish is carefully prepared by our expert Italian chefs",
    feature4Title: "Family Recipes",
    feature4Desc: "Traditional recipes passed down through generations of Italian cooking",
    feature5Title: "Cozy Atmosphere",
    feature5Desc: "Enjoy your meal in our warm and welcoming Italian-style dining space",
    
    // Contact
    visitUs: "Visit Us",
    address: "Address",
    contactInfo: "Contact",
    phone: "Phone",
    whatsapp: "WhatsApp",
    email: "Email",
    orderOnline: "Order Online",
    followUs: "Follow Us",
    makeReservation: "Make a Reservation",
    yourName: "Your Name",
    partySize: "Party Size",
    person: "Person",
    people: "People",
    reserveTable: "Reserve Table",
    
    // Footer
    authenticPizza: "Authentic Italian Pizza in Lisboa",
    quickLinks: "Quick Links",
    contactUs: "Contact Us",
    allRights: "All rights reserved."
  },
  pt: {
    // Header
    home: "Início",
    about: "Sobre",
    menu: "Menu",
    contact: "Contacto",
    
    // Hero
    heroTitle: "Bella Canto Pizzaria",
    heroSubtitle: "Pizza Italiana Autêntica em Lisboa",
    exploreMenu: "Explorar Menu",
    pizzaOf: "Pizza {current} de {total}",
    
    // About
    ourStory: "A Nossa História",
    aboutText1: "Estamos aqui com a magia dos sabores italianos em Lisboa. Venham desfrutar de pizzas queimadas no forno e massa italiana deliciosa.",
    aboutText2: "Fazemos comida italiana com os melhores ingredientes italianos. O forno é tradicional. Assim, pode provar a pizza de fogo a arder em Lisboa.",
    aboutText3: "Todos os ingredientes são de alta qualidade e da melhor qualidade. Esperamos que goste e que volte para saborear.",
    
    // Menu
    ourMenu: "O Nosso Menu",
    starters: "Entradas",
    pizza: "Pizza",
    pasta: "Massa",
    salads: "Saladas",
    desserts: "Sobremesas",
    
    // Gallery
    gallery: "A Nossa Galeria",
    gallerySubtitle: "Uma Viagem Visual Através das Nossas Obras-Primas Culinárias",
    viewDish: "Ver Prato",
    
    // Features
    whyChooseUs: "Porquê Escolher-nos",
    featuresSubtitle: "Experimente o Sabor Autêntico da Itália em Cada Mordida",
    feature1Title: "Forno Tradicional a Lenha",
    feature1Desc: "O nosso autêntico forno italiano cria a crosta perfeita e crocante com sabores fumados",
    feature2Title: "Ingredientes Premium Frescos",
    feature2Desc: "Usamos apenas os melhores ingredientes italianos importados para um sabor autêntico",
    feature3Title: "Perfeição Artesanal",
    feature3Desc: "Cada prato é cuidadosamente preparado pelos nossos chefs italianos especializados",
    feature4Title: "Receitas de Família",
    feature4Desc: "Receitas tradicionais transmitidas através de gerações de culinária italiana",
    feature5Title: "Ambiente Acolhedor",
    feature5Desc: "Desfrute da sua refeição no nosso espaço caloroso e acolhedor de estilo italiano",
    
    // Contact
    visitUs: "Visite-nos",
    address: "Morada",
    contactInfo: "Contacto",
    phone: "Telefone",
    whatsapp: "WhatsApp",
    email: "Email",
    orderOnline: "Encomendar Online",
    followUs: "Siga-nos",
    makeReservation: "Fazer uma Reserva",
    yourName: "O Seu Nome",
    partySize: "Número de Pessoas",
    person: "Pessoa",
    people: "Pessoas",
    reserveTable: "Reservar Mesa",
    
    // Footer
    authenticPizza: "Pizza Italiana Autêntica em Lisboa",
    quickLinks: "Links Rápidos",
    contactUs: "Contacte-nos",
    allRights: "Todos os direitos reservados."
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pt' : 'en');
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
