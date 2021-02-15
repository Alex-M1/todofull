import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import uk from './locales/uk.json'
import ru from './locales/ru.json'

const userLang = navigator.language,
  substr = userLang.substring(0, 2)

let language = localStorage.getItem('language') || substr

i18n.use(initReactI18next).init({

  resources: {
    en: { translations: en },
    uk: { translations: uk },
    ru: { translations: ru },
  },
  fallbackLng: ['en', 'uk', 'ru'],
  lng: language,

  debug: process.env.NODE_ENV !== 'production',
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  react: {
    wait: true,
  },
})

export default i18n