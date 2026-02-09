import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      {/* Video Background */}
      <div className="hero-background-container">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://res.cloudinary.com/dawmir745/video/upload/v1770666431/juwivhv18hueihkhsxop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark overlay */}
      <div className="hero-overlay" />

      {/* Fixed content */}
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {t('heroTitle')}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {t('heroSubtitle')}
        </motion.p>

        <motion.button 
          className="cta-button"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(212, 175, 55, 0.4)"
          }}
          whileTap={{ scale: 0.98 }}
          onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
        >
          {t('exploreMenu')}
        </motion.button>

        {/* Scroll indicator */}
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          <span>Scroll Down</span>
          <div className="scroll-arrow">↓</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;