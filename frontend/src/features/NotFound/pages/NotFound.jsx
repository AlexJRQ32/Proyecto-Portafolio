import './NotFound.css'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../../context/LanguageContext'
import { useLucideIcons } from '../../../hooks/useLucideIcons'
import { useReveal } from '../../../hooks/useReveal'

function NotFound() {
  const { t } = useLanguage()
  const nf = t.notFound
  const cardRef = useReveal()

  useLucideIcons([])

  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <div ref={cardRef} className="not-found-card reveal">
        <span className="not-found-label">
          <span className="not-found-label-line" aria-hidden="true" />
          {nf.label}
          <span className="not-found-label-line" aria-hidden="true" />
        </span>

        <span className="not-found-code" aria-hidden="true">404</span>

        <h1 className="not-found-title" id="not-found-title">
          {nf.title}
        </h1>

        <p className="not-found-description">{nf.description}</p>

        <Link to="/home" className="not-found-cta">
          <i data-lucide="arrow-left" className="not-found-cta-icon" />
          {nf.cta}
        </Link>
      </div>
    </section>
  )
}

export default NotFound
