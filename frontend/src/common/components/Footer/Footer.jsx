import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer' id='footer'>
      <div className="footer-container">
        <section className="footer-brand">
          <strong className="footer-brand-name"><i className="footer-brand-icon fas fa-code"></i>Roble - Dev</strong>
          <p className="footer-brand-description">Desarrollador apasionado por crear experiencias web modernas y funcionales.</p>
        </section>

        <nav className="footer-links" aria-label="Navegación del pie de página">
          <h2 className="footer-heading">Navegación</h2>
          <ul className="footer-list">
            <li className="footer-list-item"><NavLink className="footer-link" to="/">Home</NavLink></li>
            <li className="footer-list-item"><NavLink className="footer-link" to="/projects">Projects</NavLink></li>
            <li className="footer-list-item"><NavLink className="footer-link" to="/about">About</NavLink></li>
            <li className="footer-list-item"><NavLink className="footer-link" to="/contact">Contact</NavLink></li>
          </ul>
        </nav>

        <section className="footer-social">
          <h2 className="footer-heading">Redes</h2>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a className="footer-link" href="https://github.com/alexjrq32" target="_blank" rel="noreferrer">
                <i className='footer-social-icon fab fa-github'></i> GitHub
              </a>
            </li>
            <li className="footer-list-item">
              <a className="footer-link" href="https://www.linkedin.com/in/alex-roblero-297811301/" target="_blank" rel="noreferrer">
                <i className='footer-social-icon fab fa-linkedin'></i> LinkedIn
              </a>
            </li>
            <li className="footer-list-item">
              <a className="footer-link" href="mailto:robleroalex015@gmail.com">
                <i className='footer-social-icon fas fa-envelope'></i> Email
              </a>
            </li>
          </ul>
        </section>
      </div>

      <small className="footer-bottom">© {new Date().getFullYear()} Roble - Dev. Todos los derechos reservados.</small>
    </footer>
  )
}

export default Footer
