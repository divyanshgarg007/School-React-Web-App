import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import translationEN from './locales/en/translationEN.json'
import translationGR from './locales/el/translationGR.json'
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      el: {
        translation: translationGR,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
  })

export default i18n
