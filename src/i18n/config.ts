import i18n from 'i18next'
import en from './locales/en.json'
import de from './locales/de.json'

export const LANGUAGE_STORAGE_KEY = 'prolog-lang'
export const SUPPORTED_LANGUAGES = ['en', 'de'] as const
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]

export function isSupportedLanguage(value: string): value is SupportedLanguage {
  return (SUPPORTED_LANGUAGES as readonly string[]).includes(value)
}

/**
 * Only used to pick a default when landing on a URL that doesn't already
 * name a language (bare "/", or a legacy unprefixed page link). Once a
 * language is in the URL, the URL is the only source of truth — see
 * `src/i18n/routing.ts`.
 */
export function getStoredLanguage(): SupportedLanguage {
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (stored && isSupportedLanguage(stored)) return stored
  } catch {
    // localStorage unavailable (e.g. privacy mode) — fall through to default.
  }
  return 'en'
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
