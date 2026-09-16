import { NavLink } from 'react-router-dom'
import './Footer.css'
import { useLanguage } from '../../../context/LanguageContext'

function Footer() {
  const { t } = useLanguage()
  const f = t.footer

  return (
    <footer className="footer" id="footer" role="contentinfo">
      <div className="footer-container">
        <section className="footer-brand">
          <strong className="footer-brand-name">
            <i data-lucide="code-xml" className="footer-brand-icon" aria-hidden="true"></i>
            Roble - Dev
          </strong>
          <p className="footer-brand-description">{f.brandDescription}</p>
        </section>

        <nav className="footer-links" aria-label="Navegacion del pie de pagina">
          <h2 className="footer-heading">{f.navHeading}</h2>
          <ul className="footer-list">
            <li className="footer-list-item">
              <NavLink className="footer-link" to="/home">{f.navHome}</NavLink>
            </li>
            <li className="footer-list-item">
              <NavLink className="footer-link" to="/projects">{f.navProjects}</NavLink>
            </li>
            <li className="footer-list-item">
              <NavLink className="footer-link" to="/about">{f.navAbout}</NavLink>
            </li>
            <li className="footer-list-item">
              <NavLink className="footer-link" to="/contact">{f.navContact}</NavLink>
            </li>
          </ul>
        </nav>

        <section className="footer-social">
          <h2 className="footer-heading">{f.socialHeading}</h2>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a className="footer-link" href="https://github.com/alexjrq32" target="_blank" rel="noreferrer">
                <i className="fab fa-github footer-social-icon" aria-hidden="true"></i> {f.github}
              </a>
            </li>
            <li className="footer-list-item">
              <a className="footer-link" href="https://www.linkedin.com/in/alex-roblero-297811301/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin footer-social-icon" aria-hidden="true"></i> {f.linkedin}
              </a>
            </li>
            <li className="footer-list-item">
              <a className="footer-link" href="mailto:robleroalex015@gmail.com">
                <i className="fas fa-envelope footer-social-icon" aria-hidden="true"></i> {f.email}
              </a>
            </li>
          </ul>
        </section>
      </div>

      <small className="footer-bottom">
        <span className="footer-bottom-dot" aria-hidden="true"></span>
        &copy; {new Date().getFullYear()} Roble - Dev. {f.copyright}
      </small>
    </footer>
  )
}

export default Footer
