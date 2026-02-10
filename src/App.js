import React from 'react';
import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <ScrollProgress />
        <Header />
        <Hero />
        <About />
        <Features />
        <Menu />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
