import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

/**
 * resources is an object that contains all the translations for the different languages.
 */
const resources = {
  en: {
    translation: {
      Home: 'Home',
      NotFound: 'Not Found',
    },
  },
};
/**
 * i18n is initialized with the resources object and the language to use.
 * The keySeparator option is set to false because we do not use keys in form messages.welcome.
 * The interpolation option is set to false because we do not use interpolation in form messages.welcome.
 */
i18n
  .use(HttpApi)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    backend: {
      loadPath: './api/v1/translations/locales/{{lng}}/{{ns}}.json', // URL to fetch translations
    },
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;