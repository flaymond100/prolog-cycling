import { useOutletContext } from 'react-router-dom'
import i18n, { type SupportedLanguage } from './config'

/**
 * Route-driven translation: `lang` comes from the matched /en or /de route
 * (via RootLayout's Outlet context), not from any mutable "current language"
 * state, so `t` is always correct on the very first render — no flash.
 */
export function useLangT() {
  const { lang } = useOutletContext<{ lang: SupportedLanguage }>()
  return { t: i18n.getFixedT(lang), lang }
}
