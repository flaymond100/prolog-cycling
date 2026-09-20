import i18n from 'i18next'
import en from './locales/en.json'
import de from './locales/de.json'

export const SUPPORTED_LANGUAGES = ['en', 'de'] as const
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]

export function isSupportedLanguage(value: string): value is SupportedLanguage {
  return (SUPPORTED_LANGUAGES as readonly string[]).includes(value)
}

i18n.init({
  resources: {
    en: { translation: en },
    de: { translation: de },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
