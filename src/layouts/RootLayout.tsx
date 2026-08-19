import { NavLink, Outlet } from 'react-router-dom'
import './RootLayout.css'

function RootLayout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand">Prolog Cycling</div>
        <nav className="site-nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contacts
          </NavLink>
        </nav>
      </header>

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
