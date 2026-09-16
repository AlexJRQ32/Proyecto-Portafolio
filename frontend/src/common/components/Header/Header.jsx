import { useState, useEffect, useCallback } from 'react'
import './Header.css'
import { NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../../../context/LanguageContext'

function Header() {
  const { lang, setLang, t } = useLanguage()
  const h = t.header
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.lucide?.createIcons()
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), [])
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className="header" role="banner">
        <div className="header-container">
          <strong className="header-logo">
            <i data-lucide="code-xml" className="header-logo-icon" aria-hidden="true"></i>
            <span className="header-logo-text">
              Roble <span className="header-logo-accent">- Dev</span>
            </span>
          </strong>

          {/* Desktop nav */}
          <nav className="header-nav" aria-label="Navegacion principal">
            <ul className="header-nav-list">
              <li className="header-nav-item">
                <NavLink to="/home" className="header-nav-link">{h.navHome}</NavLink>
              </li>
              <li className="header-nav-item">
                <NavLink to="/projects" className="header-nav-link">{h.navProjects}</NavLink>
              </li>
              <li className="header-nav-item">
                <NavLink to="/about" className="header-nav-link">{h.navAbout}</NavLink>
              </li>
              <li className="header-nav-item">
                <NavLink to="/contact" className="header-nav-link">{h.navContact}</NavLink>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button
              className="header-lang-toggle"
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              aria-label={`${lang === 'es' ? 'ES' : 'EN'} - ${h.ariaToggle}`}
            >
              <i data-lucide="languages" className="header-lang-icon" aria-hidden="true"></i>
              <span className="header-lang-text">{lang === 'es' ? 'ES' : 'EN'}</span>
            </button>
            <a href="#footer" className="header-btn-link">
              <button className="header-btn">{h.moreContacts}</button>
            </a>
          </div>

          {/* Burger button (mobile) */}
          <button
            className="header-menu-toggle"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <i data-lucide={menuOpen ? 'x' : 'menu'} className="header-menu-icon" aria-hidden="true"></i>
          </button>
        </div>
      </header>

      {/* Mobile backdrop */}
      {menuOpen && (
        <div
          className="header-mobile-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile floating card menu */}
      <nav
        id="mobile-menu"
        className={`header-mobile-menu${menuOpen ? ' header-mobile-menu--open' : ''}`}
        aria-label="Menu movil"
      >
        <NavLink to="/home" className="header-mobile-link" onClick={closeMenu}>
          <i data-lucide="home" className="header-mobile-link-icon" aria-hidden="true"></i>
          {h.navHome}
        </NavLink>
        <NavLink to="/projects" className="header-mobile-link" onClick={closeMenu}>
          <i data-lucide="folder-open" className="header-mobile-link-icon" aria-hidden="true"></i>
          {h.navProjects}
        </NavLink>
        <NavLink to="/about" className="header-mobile-link" onClick={closeMenu}>
          <i data-lucide="user" className="header-mobile-link-icon" aria-hidden="true"></i>
          {h.navAbout}
        </NavLink>
        <NavLink to="/contact" className="header-mobile-link" onClick={closeMenu}>
          <i data-lucide="mail" className="header-mobile-link-icon" aria-hidden="true"></i>
          {h.navContact}
        </NavLink>
        <div className="header-mobile-divider" />
        <button
          className="header-mobile-link header-mobile-lang"
          onClick={() => { setLang(lang === 'es' ? 'en' : 'es'); closeMenu() }}
        >
          <i data-lucide="languages" className="header-mobile-link-icon" aria-hidden="true"></i>
          {lang === 'es' ? 'Cambiar a English' : 'Switch to Spanish'}
        </button>
        <a href="#footer" className="header-mobile-link header-mobile-cta" onClick={closeMenu}>
          {h.moreContacts}
          <i data-lucide="arrow-down" className="header-mobile-link-icon" aria-hidden="true"></i>
        </a>
      </nav>
    </>
  )
}

export default Header
