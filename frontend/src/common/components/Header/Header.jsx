import { useEffect } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../../context/LanguageContext'

function Header() {
  const { lang, setLang, t } = useLanguage()
  const h = t.header

  useEffect(() => {
    window.lucide?.createIcons()
  }, [])

  return (
    <header className='header'>
      <div className="header-container">
        <strong className="header-logo">
          <i data-lucide="code-xml" className="header-logo-icon"></i>
          Roble - Dev
        </strong>
        <nav className='header-nav'>
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <NavLink to="/home" className="header-nav-link">
                {h.navHome}
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink to="/projects" className="header-nav-link">
                {h.navProjects}
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink to="/about" className="header-nav-link">
                {h.navAbout}
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink to="/contact" className="header-nav-link">
                {h.navContact}
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <button
            className="header-lang-toggle"
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            aria-label={h.ariaToggle}
          >
            <i data-lucide="languages" className="header-lang-icon"></i>
            <span className="header-lang-text">{lang === 'es' ? 'ES' : 'EN'}</span>
          </button>
          <a href="#footer">
            <button className="header-btn">{h.moreContacts}</button>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
