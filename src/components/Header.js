import React, { useState } from 'react';
import './Header.css';
import pizzaLogo from '../assets/images/pizzalogo.png';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <>
      {/* Mobile Language Toggle - Outside Navbar */}
      <button className="mobile-language-toggle" onClick={toggleLanguage}>
        {language === 'en' ? '🇵🇹 PT' : '🇬🇧 EN'}
      </button>

      <header className="header">
        <div className="container">
          <div className="logo">
            <img src={pizzaLogo} alt="Bella Canto Pizzaria Logo" className="logo-image" />
            <h1 className="logo-text">Bella Canto Pizzaria</h1>
          </div>
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>{t('home')}</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>{t('about')}</a>
            <a href="#menu" onClick={() => setIsMenuOpen(false)}>{t('menu')}</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>{t('contact')}</a>
            <a href="tel:+351920322105" className="nav-phone">📞 +351 920 322 105</a>
            <button className="language-toggle" onClick={toggleLanguage}>
              {language === 'en' ? '🇵🇹 PT' : '🇬🇧 EN'}
            </button>
          </nav>
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;