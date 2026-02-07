import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';
import { useLanguage } from '../contexts/LanguageContext';

// Import your new images
import img1 from '../assets/images/02-03.jpg';
import img2 from '../assets/images/02-04.jpg';
import img3 from '../assets/images/02-05.jpg';
import img4 from '../assets/images/02-06.jpg';
import img5 from '../assets/images/02-07.jpg';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { t } = useLanguage();

  // Your images array
  const images = [img1, img2, img3, img4, img5];

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Smooth side-swipe transition
  const imageVariants = {
    enter: {
      x: '100%',
      opacity: 0
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: {
      x: '-100%',
      opacity: 0
    }
  };

  return (
    <section id="home" className="hero">
      {/* Background images with side-swipe transition */}
      <div className="hero-background-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            className="hero-background"
            style={{
              backgroundImage: `url(${images[currentImage]})`
            }}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ 
              duration: 1,
              ease: [0.6, 0.01, 0.05, 0.95]
            }}
          />
        </AnimatePresence>
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

        {/* Image indicator dots */}
        <div className="image-indicators">
          {images.map((_, index) => (
            <div 
              key={index}
              className={`indicator ${index === currentImage ? 'active' : ''}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>

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
          <span>{t('pizzaOf').replace('{current}', currentImage + 1).replace('{total}', images.length)}</span>
          <div className="scroll-arrow">↓</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;