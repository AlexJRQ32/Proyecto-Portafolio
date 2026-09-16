import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../../context/LanguageContext'
import { useLucideIcons } from '../../../hooks/useLucideIcons'
import './TabBar.css'

const tabs = [
  { to: '/home', icon: 'home', labelKey: 'navHome' },
  { to: '/projects', icon: 'folder-code', labelKey: 'navProjects' },
  { to: '/about', icon: 'user', labelKey: 'navAbout' },
  { to: '/contact', icon: 'mail', labelKey: 'navContact' },
]

function TabBar() {
  const { t } = useLanguage()
  const h = t.header

  useLucideIcons([h])

  return (
    <nav className="tabbar" aria-label="Navegacion movil">
      <div className="tabbar-inner">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) =>
              `tabbar-item${isActive ? ' tabbar-item--active' : ''}`
            }
            end={tab.to === '/home'}
          >
            <i data-lucide={tab.icon} className="tabbar-icon" aria-hidden="true" />
            <span className="tabbar-label">{h[tab.labelKey]}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default TabBar
