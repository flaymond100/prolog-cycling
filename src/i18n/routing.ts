import { isSupportedLanguage, type SupportedLanguage } from './config'

const LANG_PREFIX_RE = /^\/(en|de)(?=\/|$)/

/** The language named by a URL's path prefix, or 'en' if it doesn't have one. */
export function getLangFromPathname(pathname: string): SupportedLanguage {
  const match = pathname.match(LANG_PREFIX_RE)
  return match && isSupportedLanguage(match[1]) ? match[1] : 'en'
}

/** A path with any /en or /de prefix removed, e.g. "/de/partners" -> "/partners". */
export function stripLangPrefix(pathname: string): string {
  const rest = pathname.replace(LANG_PREFIX_RE, '')
  return rest === '' ? '/' : rest
}

/** Builds a language-prefixed path, e.g. localizedPath('de', '/partners') -> "/de/partners". */
export function localizedPath(lang: SupportedLanguage, path: string): string {
  return `/${lang}${path === '/' ? '' : path}`
}
