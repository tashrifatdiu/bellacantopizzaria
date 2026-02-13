import React, { useEffect } from 'react';
import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import MenuDynamic from './components/MenuDynamic';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import { client } from './lib/appwrite';

function App() {
  useEffect(() => {
    // Verify Appwrite connection on app load
    client.ping()
      .then(() => console.log('✅ Appwrite connection successful'))
      .catch((error) => console.error('❌ Appwrite connection failed:', error));
  }, []);

  return (
    <LanguageProvider>
      <div className="App">
        <ScrollProgress />
        <Header />
        <Hero />
        <About />
        <Features />
        <MenuDynamic />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
