import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('visitUs')}
        </motion.h2>
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="info-item">
              <h3>📍 {t('address')}</h3>
              <p>R. da Beneficência, 107A<br />1600-093 Lisboa<br />Portugal</p>
            </div>
            <div className="info-item">
              <h3>📞 {t('contactInfo')}</h3>
              <p>
                {t('phone')}: <a href="tel:+351920322105">+351 920 322 105</a><br />
                {t('whatsapp')}: <a href="https://wa.me/351920322105" target="_blank" rel="noopener noreferrer">+351 920 322 105</a><br />
                {t('email')}: <a href="mailto:bellacanto107a@gmail.com">bellacanto107a@gmail.com</a>
              </p>
            </div>
            <div className="info-item">
              <h3>🚚 {t('orderOnline')}</h3>
              <div className="delivery-platforms">
                <a href="https://www.ubereats.com/store-browse-uuid/72530b01-09ad-4fb5-b066-ae85991d0324?diningMode=DELIVERY" className="platform-link" target="_blank" rel="noopener noreferrer">Uber Eats</a>
                <a href="https://order.store/store/bella-canto-pizzaria/clMLAQmtT7WwZq6FmR0DJA" className="platform-link" target="_blank" rel="noopener noreferrer">Glovo</a>
                <a href="https://food.bolt.eu/en-US/386/p/54577-bella-canto-pizzaria" className="platform-link" target="_blank" rel="noopener noreferrer">Bolt Food</a>
              </div>
            </div>
            <div className="info-item">
              <h3>📱 {t('followUs')}</h3>
              <div className="social-links">
                <a href="https://www.facebook.com/share/17zcsHodGV/" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/bella_canto_pizzaria?igsh=MWQzYW04amxlemZicQ==" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="reservation-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>{t('makeReservation')}</h3>
            <form>
              <input type="text" placeholder={t('yourName')} required />
              <input type="email" placeholder={t('email')} required />
              <input type="tel" placeholder={t('phone')} required />
              <input type="date" required />
              <input type="time" required />
              <select required>
                <option value="">{t('partySize')}</option>
                <option value="1">1 {t('person')}</option>
                <option value="2">2 {t('people')}</option>
                <option value="3">3 {t('people')}</option>
                <option value="4">4 {t('people')}</option>
                <option value="5+">5+ {t('people')}</option>
              </select>
              <button type="submit">{t('reserveTable')}</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;