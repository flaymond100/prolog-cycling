import { useEffect } from 'react'

const SITE_NAME = 'Prolog Cycling'
const SITE_URL = 'https://prolog-cycling.com'

interface SeoProps {
  /** Page-specific title. Rendered as "{title} | Prolog Cycling", unless it already is the site name. */
  title: string
  description: string
  /** Path this page lives at, e.g. "/contacts". Defaults to "/". */
  path?: string
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

/**
 * Sets per-route title/description/canonical/robots — this is a CSR app with
 * no server-side rendering, so this only reaches crawlers that execute JS
 * (Googlebot does; most social-share bots don't, which is why index.html
 * also carries static site-wide Open Graph tags as a fallback).
 */
function Seo({ title, description, path = '/', noindex = false }: SeoProps) {
  useEffect(() => {
    const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`
    const url = `${SITE_URL}${path}`

    document.title = fullTitle
    setMetaTag('name', 'description', description)
    setMetaTag('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    setMetaTag('property', 'og:title', fullTitle)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', url)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)
  }, [title, description, path, noindex])

  return null
}

export default Seo
