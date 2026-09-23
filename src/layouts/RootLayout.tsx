import { useEffect, useRef, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import i18n, { type SupportedLanguage } from '../i18n/config'
import { localizedPath } from '../i18n/routing'
import './RootLayout.css'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

interface RootLayoutProps {
  lang: SupportedLanguage
}

function RootLayout({ lang }: RootLayoutProps) {
  const t = i18n.getFixedT(lang)
  const [menuOpen, setMenuOpen] = useState(false)
  const linkClass = ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : '')
  const closeMenu = () => setMenuOpen(false)
  const { pathname } = useLocation()
  const isFirstRender = useRef(true)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    // The gtag.js snippet's own 'config' call only fires once, on the
    // initial document load, so it already covers the first pageview.
    // Client-side route changes never reload the page, so every navigation
    // after that needs its own page_view event sent explicitly.
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    window.gtag?.('event', 'page_view', {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [pathname])

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <div className="header-left">
            <div className="icon-box brand-box">
              <NavLink
                to={localizedPath(lang, '/')}
                end
                className="brand"
                onClick={closeMenu}
                aria-label={t('nav.brandAriaLabel')}
              >
                <span className="brand-logo">
                  <img src={`${import.meta.env.BASE_URL}prolog-logo-tp.png`} alt="Prolog Cycling" />
                </span>
              </NavLink>
            </div>

            <button
              type="button"
              className={`icon-box menu-toggle${menuOpen ? ' is-open' : ''}`}
              aria-expanded={menuOpen}
              aria-controls="site-nav"
              aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          <div className="header-right">
            <NavLink
              to={localizedPath(lang, '/contacts')}
              className="icon-box contact-box"
              aria-label={t('nav.contactUs')}
              onClick={closeMenu}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="1" />
                <path d="M3 6.5 12 13 21 6.5" />
              </svg>
            </NavLink>
          </div>
        </div>
      </header>

      <nav id="site-nav" className={`site-menu${menuOpen ? ' is-open' : ''}`}>
        <NavLink to={localizedPath(lang, '/')} end className={linkClass} onClick={closeMenu}>
          {t('nav.home')}
        </NavLink>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd_qNpqO2Tuz-VpnB4NPq-oOti9teQuLl2HicjRsHMk8XBEJg/viewform?fbzx=-4112900210892274421&pli=1"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          {t('nav.joinTeam')}
        </a>
        <NavLink to={localizedPath(lang, '/partners')} className={linkClass} onClick={closeMenu}>
          {t('nav.partners')}
        </NavLink>
        <NavLink to={localizedPath(lang, '/contacts')} className={linkClass} onClick={closeMenu}>
          {t('nav.contacts')}
        </NavLink>
      </nav>

      <main className="site-content">
        <Outlet context={{ lang }} />
      </main>

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} PROLOG Cycling. {t('footer.rights')}</p>
      </footer>
    </div>
  )
}

export default RootLayout
