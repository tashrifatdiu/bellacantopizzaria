import React from 'react';
import { motion } from 'framer-motion';
import './Reviews.css';
import { useLanguage } from '../contexts/LanguageContext';

const Reviews = () => {
  const { t, language } = useLanguage();

  const reviews = {
    en: [
      {
        name: "Muhammed kamran Rahman",
        rating: 5,
        date: "2 weeks ago",
        details: "Dine in | Brunch | €5–10",
        text: "I think pizza 🍕 Margaret amazing and all pizza 🍕 also good, I recommend 💯 Italian restaurant"
      },
      {
        name: "MUHAMMAD KAMRAN RAHMAN",
        rating: 5,
        date: "2 weeks ago",
        details: "€5–10",
        text: "Best pizza 🍕 🍕 in Lisbon and lovely food"
      },
      {
        name: "Khaled Ahmed",
        rating: 5,
        date: "3 weeks ago",
        details: "",
        text: "The best pizza restaurant—when I requested the food to be prepared halal, they responded kindly and were very accommodating. Excellent service, amazing pizza, and thanks, Chef!"
      },
      {
        name: "Lukas Wojciak",
        rating: 5,
        date: "A year ago",
        details: "Local Guide · 49 reviews",
        text: "If you want to have the best pizza and food in this area, it's the place to be!! It's tasty and friendly! I'm going here regularly, so I can recommend it 100%"
      },
      {
        name: "Mahfuj Ahmed",
        rating: 5,
        date: "2 weeks ago",
        details: "Dine in | Dinner | €5–10",
        text: "bella canto pizzeria is one of the best neapolitan style pizza i love the restaurant in Lisbon Portugal and my love pizza"
      },
      {
        name: "Hanif",
        rating: 5,
        date: "2 years ago",
        details: "Dine in | Dinner | €5–10",
        text: "Bella Canto offers a delightful culinary experience with their scrumptious pizzas. The perfect blend of flavors in every bite showcases their culinary expertise. Beyond the delicious food, the enchanting ambiance adds a touch of elegance to the dining experience."
      },
      {
        name: "Hallex Mene",
        rating: 5,
        date: "2 years ago",
        details: "Local Guide · 78 reviews",
        text: "Good food, good service, nice people and excellent price! Definitely one of the best, if not the best, low cost restaurants in Lisbon!"
      },
      {
        name: "Sarra",
        rating: 5,
        date: "7 months ago",
        details: "Local Guide · 280 reviews",
        text: "Good! I took the offer 2 for the price of 1"
      },
      {
        name: "Caterina Silva",
        rating: 5,
        date: "3 years ago",
        details: "Dine in | Dinner | €5–10",
        text: "The pizza tasted amazing even with lot of ingredients and their behavior was so much cooperative and cool. Next I'll also try pasta."
      },
      {
        name: "Alicia simi",
        rating: 5,
        date: "3 years ago",
        details: "",
        text: "Pizzaa! it was superb! this dough can challenge its best in Lisbon. I'll back to eat the pizza again and again."
      }
    ],
    pt: [
      {
        name: "Muhammed kamran Rahman",
        rating: 5,
        date: "Há 2 semanas",
        details: "Jantar no local | Brunch | €5–10",
        text: "Acho a pizza 🍕 Margherita incrível e todas as pizzas 🍕 também são boas, recomendo 💯 restaurante italiano"
      },
      {
        name: "MUHAMMAD KAMRAN RAHMAN",
        rating: 5,
        date: "Há 2 semanas",
        details: "€5–10",
        text: "Melhor pizza 🍕 🍕 em Lisboa e comida adorável"
      },
      {
        name: "Khaled Ahmed",
        rating: 5,
        date: "Há 3 semanas",
        details: "",
        text: "O melhor restaurante de pizza—quando pedi que a comida fosse preparada halal, responderam gentilmente e foram muito acomodativos. Excelente serviço, pizza incrível e obrigado, Chef!"
      },
      {
        name: "Lukas Wojciak",
        rating: 5,
        date: "Há um ano",
        details: "Guia Local · 49 avaliações",
        text: "Se quer ter a melhor pizza e comida nesta área, este é o lugar certo!! É saboroso e amigável! Venho aqui regularmente, então posso recomendar 100%"
      },
      {
        name: "Mahfuj Ahmed",
        rating: 5,
        date: "Há 2 semanas",
        details: "Jantar no local | Jantar | €5–10",
        text: "bella canto pizzeria é uma das melhores pizzas de estilo napolitano, adoro o restaurante em Lisboa Portugal e a minha pizza favorita"
      },
      {
        name: "Hanif",
        rating: 5,
        date: "Há 2 anos",
        details: "Jantar no local | Jantar | €5–10",
        text: "Bella Canto oferece uma experiência culinária encantadora com suas pizzas deliciosas. A mistura perfeita de sabores em cada mordida mostra sua expertise culinária. Além da comida deliciosa, o ambiente encantador adiciona um toque de elegância à experiência gastronómica."
      },
      {
        name: "Hallex Mene",
        rating: 5,
        date: "Há 2 anos",
        details: "Guia Local · 78 avaliações",
        text: "Boa comida, bom serviço, pessoas simpáticas e preço excelente! Definitivamente um dos melhores, senão o melhor, restaurantes de baixo custo em Lisboa!"
      },
      {
        name: "Sarra",
        rating: 5,
        date: "Há 7 meses",
        details: "Guia Local · 280 avaliações",
        text: "Bom! Aproveitei a oferta 2 pelo preço de 1"
      },
      {
        name: "Caterina Silva",
        rating: 5,
        date: "Há 3 anos",
        details: "Jantar no local | Jantar | €5–10",
        text: "A pizza tinha um sabor incrível mesmo com muitos ingredientes e o comportamento deles foi muito cooperativo e simpático. A seguir também vou experimentar massa."
      },
      {
        name: "Alicia simi",
        rating: 5,
        date: "Há 3 anos",
        details: "",
        text: "Pizzaa! foi soberba! esta massa pode desafiar as melhores em Lisboa. Vou voltar para comer a pizza vezes sem conta."
      }
    ]
  };

  // Get reviews based on current language
  const currentReviews = reviews[language];

  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...currentReviews, ...currentReviews, ...currentReviews];

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section id="reviews" className="reviews">
      <div className="reviews-header">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t('customerReviews')}
        </motion.h2>
        <motion.p
          className="reviews-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t('reviewsSubtitle')}
        </motion.p>
      </div>

      <div className="reviews-scroll-container">
        <motion.div
          className="reviews-track"
          key={language}
          animate={{
            x: [0, -100 * currentReviews.length * 3.5]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear"
            }
          }}
        >
          {duplicatedReviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <div className="review-avatar">
                  {review.name.charAt(0)}
                </div>
                <div className="review-info">
                  <h4 className="review-name">{review.name}</h4>
                  <div className="review-stars">{renderStars(review.rating)}</div>
                  <p className="review-date">{review.date}</p>
                </div>
              </div>
              {review.details && (
                <p className="review-details">{review.details}</p>
              )}
              <p className="review-text">"{review.text}"</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
