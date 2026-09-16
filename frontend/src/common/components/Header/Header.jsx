import { useState, useEffect } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../../context/LanguageContext'

function Header() {
  const { lang, setLang, t } = useLanguage()
  const h = t.header
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    window.lucide?.createIcons()
  }, [])

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header" role="banner">
      <div className="header-container">
        <strong className="header-logo">
          <i data-lucide="code-xml" className="header-logo-icon" aria-hidden="true"></i>
          <span className="header-logo-text">
            Roble <span className="header-logo-accent">- Dev</span>
          </span>
        </strong>

        <button
          className="header-menu-toggle"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="header-nav"
        >
          <i data-lucide={menuOpen ? 'x' : 'menu'} className="header-menu-icon" aria-hidden="true"></i>
        </button>

        <nav id="header-nav" className={`header-nav${menuOpen ? ' header-nav--open' : ''}`} aria-label="Navegacion principal">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <NavLink to="/home" className="header-nav-link" onClick={closeMenu}>
                {h.navHome}
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink to="/projects" className="header-nav-link" onClick={closeMenu}>
                {h.navProjects}
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink to="/about" className="header-nav-link" onClick={closeMenu}>
                {h.navAbout}
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink to="/contact" className="header-nav-link" onClick={closeMenu}>
                {h.navContact}
              </NavLink>
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
      </div>
    </header>
  )
}

export default Header
