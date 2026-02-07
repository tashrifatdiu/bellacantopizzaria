import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        menu: "Menu"
      },
      hero: {
        title: "Authentic Italian Cuisine",
        subtitle: "Experience the finest flavors of Italy"
      },
      reviews: {
        title: "What Our Guests Say",
        review1: {
          text: "The most authentic Italian experience outside of Italy. Every dish is a masterpiece.",
          author: "Maria Rodriguez"
        },
        review2: {
          text: "Exceptional service and incredible flavors. The pasta is simply divine.",
          author: "James Wilson"
        },
        review3: {
          text: "A culinary journey through Italy. The ambiance is perfect for any occasion.",
          author: "Sofia Chen"
        }
      },
      menu: {
        title: "Our Menu",
        starters: "Starters",
        mains: "Main Courses",
        desserts: "Desserts"
      }
    }
  },
  pt: {
    translation: {
      nav: {
        home: "Início",
        menu: "Menu"
      },
      hero: {
        title: "Culinária Italiana Autêntica",
        subtitle: "Experimente os melhores sabores da Itália"
      },
      reviews: {
        title: "O Que Nossos Convidados Dizem",
        review1: {
          text: "A experiência italiana mais autêntica fora da Itália. Cada prato é uma obra-prima.",
          author: "Maria Rodriguez"
        },
        review2: {
          text: "Serviço excepcional e sabores incríveis. A massa é simplesmente divina.",
          author: "James Wilson"
        },
        review3: {
          text: "Uma jornada culinária pela Itália. O ambiente é perfeito para qualquer ocasião.",
          author: "Sofia Chen"
        }
      },
      menu: {
        title: "Nosso Menu",
        starters: "Entradas",
        mains: "Pratos Principais",
        desserts: "Sobremesas"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;