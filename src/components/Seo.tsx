import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from '../i18n/config'
import { localizedPath, stripLangPrefix } from '../i18n/routing'

const SITE_NAME = 'Prolog Cycling'
const SITE_URL = 'https://prolog-cycling.com'

const OG_LOCALES: Record<SupportedLanguage, string> = {
  en: 'en_US',
  de: 'de_DE',
}

interface SeoProps {
  /** Page-specific title. Rendered as "{title} | Prolog Cycling", unless it already is the site name. */
  title: string
  description: string
  lang: SupportedLanguage
  /** Keep this page out of search results (e.g. the 404 page). */
  noindex?: boolean
}

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLinkTag(rel: string, href: string, hreflang?: string) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`
  let el = document.head.querySelector<HTMLLinkElement>(selector)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (hreflang) el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Sets per-route title/description/canonical/robots/hreflang — this is a CSR
 * app with no server-side rendering, so this only reaches crawlers that
 * execute JS (Googlebot does; most social-share bots don't, which is why
 * index.html also carries static site-wide Open Graph tags as a fallback).
 */
function Seo({ title, description, lang, noindex = false }: SeoProps) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`
    const url = `${SITE_URL}${pathname}`
    const unlocalizedPath = stripLangPrefix(pathname)

    document.title = fullTitle
    setMetaTag('name', 'description', description)
    setMetaTag('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    setMetaTag('property', 'og:title', fullTitle)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', url)
    setMetaTag('property', 'og:locale', OG_LOCALES[lang])

    setLinkTag('canonical', url)
    // Tell crawlers this page has equivalent versions at the other language
    // URLs, so /en and /de aren't treated as duplicate content.
    SUPPORTED_LANGUAGES.forEach((code) => {
      setLinkTag('alternate', `${SITE_URL}${localizedPath(code, unlocalizedPath)}`, code)
    })
    setLinkTag('alternate', `${SITE_URL}${localizedPath('en', unlocalizedPath)}`, 'x-default')
  }, [title, description, lang, noindex, pathname])

  return null
}

export default Seo
