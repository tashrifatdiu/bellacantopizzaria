import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import aboutImage from '../assets/images/02-03.jpg';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="about-text"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2>{t('ourStory')}</h2>
            <p>{t('aboutText1')}</p>
            <p>{t('aboutText2')}</p>
            <p>{t('aboutText3')}</p>
          </motion.div>
          <motion.div 
            className="about-image"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.img 
              src={aboutImage} 
              alt="Bella Canto Pizzaria" 
              style={{
                width: '100%', 
                height: '450px', 
                objectFit: 'cover'
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;