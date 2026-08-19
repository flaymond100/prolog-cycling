import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import './RootLayout.css'

function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const linkClass = ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : '')
  const closeMenu = () => setMenuOpen(false)
  const { pathname } = useLocation()

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <div className="header-left">
            <div className="icon-box brand-box">
              <NavLink to="/" end className="brand" onClick={closeMenu}>
                Prolog Cycling
              </NavLink>
            </div>

            <button
              type="button"
              className={`icon-box menu-toggle${menuOpen ? ' is-open' : ''}`}
              aria-expanded={menuOpen}
              aria-controls="site-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          <NavLink to="/contacts" className="icon-box contact-box" aria-label="Contact us" onClick={closeMenu}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="1" />
              <path d="M3 6.5 12 13 21 6.5" />
            </svg>
          </NavLink>
        </div>
      </header>

      <nav id="site-nav" className={`site-menu${menuOpen ? ' is-open' : ''}`}>
        <NavLink to="/" end className={linkClass} onClick={closeMenu}>
          Home
        </NavLink>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd_qNpqO2Tuz-VpnB4NPq-oOti9teQuLl2HicjRsHMk8XBEJg/viewform?fbzx=-4112900210892274421&pli=1"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Join the Team
        </a>
        <NavLink to="/contacts" className={linkClass} onClick={closeMenu}>
          Contacts
        </NavLink>
      </nav>

      <main className="site-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Prolog Cycling. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default RootLayout
