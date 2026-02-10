import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';
import { useLanguage } from '../contexts/LanguageContext';

// Import remaining WhatsApp images
import img6 from '../assets/images/WhatsApp Image 2026-02-10 at 1.21.18 AM.jpeg';
import img7 from '../assets/images/WhatsApp Image 2026-02-10 at 1.21.19 AM.jpeg';
import img8 from '../assets/images/WhatsApp Image 2026-02-10 at 1.21.22 AM (1).jpeg';
import img9 from '../assets/images/WhatsApp Image 2026-02-10 at 1.21.22 AM.jpeg';
import img10 from '../assets/images/WhatsApp Image 2026-02-10 at 1.21.23 AM.jpeg';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      image: img6,
      title: t('feature1Title'),
      description: t('feature1Desc')
    },
    {
      image: img7,
      title: t('feature2Title'),
      description: t('feature2Desc')
    },
    {
      image: img8,
      title: t('feature3Title'),
      description: t('feature3Desc')
    },
    {
      image: img9,
      title: t('feature4Title'),
      description: t('feature4Desc')
    },
    {
      image: img10,
      title: t('feature5Title'),
      description: t('feature5Desc')
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>{t('whyChooseUs')}</h2>
          <p className="features-subtitle">{t('featuresSubtitle')}</p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <img 
                src={feature.image} 
                alt={feature.title}
                className="feature-image"
              />
              <div className="feature-overlay">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
