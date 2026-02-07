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
    ourStory: "Nossa História",
    aboutText1: "Estamos aqui com a magia dos sabores italianos em Lisboa. Venham para desfrutar do fogo queimado pizzas e massa italiana deliciosa.",
    aboutText2: "Estamos a fazer a comida italiana com os melhores ingredientes italianos. O forno é tradicional. Assim, pode provar a pizza de fogo a arder em Lisboa.",
    aboutText3: "Todos os ingredientes são de alta qualidade e de melhor qualidade. Espero que gostes e que voltes a ter o sabor.",
    
    // Menu
    ourMenu: "Nosso Menu",
    starters: "Entradas",
    pizza: "Pizza",
    pasta: "Massa",
    salads: "Saladas",
    desserts: "Sobremesas",
    
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
    yourName: "Seu Nome",
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
