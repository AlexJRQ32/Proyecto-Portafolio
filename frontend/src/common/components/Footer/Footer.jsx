import { NavLink } from 'react-router-dom'
import './Footer.css'
import { useLanguage } from '../../../context/LanguageContext'

function Footer() {
  const { t } = useLanguage()
  const f = t.footer

  return (
    <footer className='footer' id='footer'>
      <div className="footer-container">
        <section className="footer-brand">
          <strong className="footer-brand-name"><i className="footer-brand-icon fas fa-code"></i>Roble - Dev</strong>
          <p className="footer-brand-description">{f.brandDescription}</p>
        </section>

        <nav className="footer-links" aria-label="Navegación del pie de página">
          <h2 className="footer-heading">{f.navHeading}</h2>
          <ul className="footer-list">
            <li className="footer-list-item"><NavLink className="footer-link" to="/home">{f.navHome}</NavLink></li>
            <li className="footer-list-item"><NavLink className="footer-link" to="/projects">{f.navProjects}</NavLink></li>
            <li className="footer-list-item"><NavLink className="footer-link" to="/about">{f.navAbout}</NavLink></li>
            <li className="footer-list-item"><NavLink className="footer-link" to="/contact">{f.navContact}</NavLink></li>
          </ul>
        </nav>

        <section className="footer-social">
          <h2 className="footer-heading">{f.socialHeading}</h2>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a className="footer-link" href="https://github.com/alexjrq32" target="_blank" rel="noreferrer">
                <i className='footer-social-icon fab fa-github'></i> {f.github}
              </a>
            </li>
            <li className="footer-list-item">
              <a className="footer-link" href="https://www.linkedin.com/in/alex-roblero-297811301/" target="_blank" rel="noreferrer">
                <i className='footer-social-icon fab fa-linkedin'></i> {f.linkedin}
              </a>
            </li>
            <li className="footer-list-item">
              <a className="footer-link" href="mailto:robleroalex015@gmail.com">
                <i className='footer-social-icon fas fa-envelope'></i> {f.email}
              </a>
            </li>
          </ul>
        </section>
      </div>

      <small className="footer-bottom">&copy; {new Date().getFullYear()} Roble - Dev. {f.copyright}</small>
    </footer>
  )
}

export default Footer
