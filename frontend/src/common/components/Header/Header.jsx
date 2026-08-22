import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <div className="header-container">
        <strong className="header-logo">
          <i className="header-logo-icon fas fa-code"></i>
          Roble - Dev
        </strong>
        <nav className='header-nav'>
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <NavLink to="/" className="header-nav-link">
                Home
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink to="/projects" className="header-nav-link">
                Projects
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink to="/about" className="header-nav-link">
                About
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink to="/contact" className="header-nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className="header-btn">SSH_LOGIN</button>
      </div>
    </header>
  )
}

export default Header