import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n.use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Idioma predeterminado
    lng: localStorage.getItem('language') || 'en', // Obtiene el idioma de localStorage o usa el predeterminado
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Configura la ruta según tu estructura
    },
    ns: [
      'calculatorForm',
      'faqSection',
      'featuresSection',
      'footer',
      'header',
      'heroSection',
      'notFound',
      'resultsView',
      'testimonialsSection',
    ], // Nombres de los namespaces
    defaultNS: 'header', // Namespace predeterminado (opcional)
  });

export default i18n;
