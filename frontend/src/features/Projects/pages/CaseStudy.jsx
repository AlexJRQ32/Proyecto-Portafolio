import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../../../context/LanguageContext'
import { useReveal } from '../../../hooks/useReveal'
import { useLucideIcons } from '../../../hooks/useLucideIcons'
import caseStudiesEs from '../../../mocks/case-studies-es.json'
import caseStudiesEn from '../../../mocks/case-studies-en.json'
import './CaseStudy.css'

const caseStudiesMap = { es: caseStudiesEs, en: caseStudiesEn }

function CaseStudy() {
  const { slug } = useParams()
  const { lang, t } = useLanguage()
  const studies = caseStudiesMap[lang] || caseStudiesEs
  const study = studies.find((s) => s.slug === slug)

  const headerRef = useReveal()
  const problemRef = useReveal()
  const decisionsRef = useReveal()
  const stackRef = useReveal()
  const featuresRef = useReveal()

  useLucideIcons([lang, slug])

  if (!study) {
    return (
      <section className="case-study-page">
        <div className="case-study-container">
          <h1 className="case-study-not-found">Proyecto no encontrado</h1>
          <Link to="/projects" className="case-study-back">
            <i data-lucide="arrow-left" className="case-study-back-icon" />
            Volver a proyectos
          </Link>
        </div>
      </section>
    )
  }

  const cs = t.caseStudies || {}

  return (
    <section className="case-study-page" aria-labelledby="case-study-title">
      <div className="case-study-container">
        {/* Back link */}
        <Link to="/projects" className="case-study-back" ref={headerRef}>
          <i data-lucide="arrow-left" className="case-study-back-icon" />
          {cs.backLink || 'Volver a proyectos'}
        </Link>

        {/* Header */}
        <header className="case-study-header">
          <span className="case-study-meta">
            <span className={`case-study-dot case-study-dot--${study.statusColor}`} aria-hidden="true" />
            {study.code} // {study.status}
          </span>
          <h1 className="case-study-title" id="case-study-title">{study.title}</h1>
          <span className="case-study-tagline">{study.tagline}</span>
          <div className="case-study-badges">
            {study.badges.map((b) => (
              <span key={b} className="case-study-badge">{b}</span>
            ))}
          </div>
        </header>

        {/* Problem */}
        <section className="case-study-section" ref={problemRef} aria-labelledby="problem-heading">
          <div className="case-study-section-label">
            <span className="case-study-section-label-line" />
            <span>{cs.problemLabel || 'PROBLEMA'}</span>
          </div>
          <h2 className="case-study-section-title" id="problem-heading">
            {cs.problemTitle || 'Qué es y por qué existe'}
          </h2>
          <p className="case-study-text">{cs.problemText || study.problem}</p>
        </section>

        {/* Decisions */}
        <section className="case-study-section" ref={decisionsRef} aria-labelledby="decisions-heading">
          <div className="case-study-section-label">
            <span className="case-study-section-label-line" />
            <span>{cs.decisionsLabel || 'DECISIONES TÉCNICAS'}</span>
          </div>
          <h2 className="case-study-section-title" id="decisions-heading">
            {cs.decisionsTitle || 'Decisiones de diseño'}
          </h2>
          <div className="case-study-decisions">
            {study.decisions.map((d, i) => (
              <div key={i} className="case-study-decision">
            <h3 className="case-study-decision-title">{d.title}</h3>
            <p className="case-study-decision-desc">{d.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section className="case-study-section" ref={stackRef} aria-labelledby="stack-heading">
          <div className="case-study-section-label">
            <span className="case-study-section-label-line" />
            <span>{cs.stackLabel || 'STACK TECNOLÓGICO'}</span>
          </div>
          <h2 className="case-study-section-title" id="stack-heading">
            {cs.stackTitle || 'Tecnologías'}
          </h2>
          <div className="case-study-stack">
            {study.stack.map((s, i) => (
              <div key={i} className="case-study-stack-row">
                <span className="case-study-stack-layer">{s.layer}</span>
                <span className="case-study-stack-tech">{s.tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="case-study-section" ref={featuresRef} aria-labelledby="features-heading">
          <div className="case-study-section-label">
            <span className="case-study-section-label-line" />
            <span>{cs.featuresLabel || 'FEATURES CLAVE'}</span>
          </div>
          <h2 className="case-study-section-title" id="features-heading">
            {cs.featuresTitle || 'Funcionalidades'}
          </h2>
          <ul className="case-study-features">
            {study.features.map((f, i) => (
              <li key={i} className="case-study-feature-item">
                <i data-lucide="check-circle" className="case-study-feature-icon" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div className="case-study-cta">
          <a
            href={study.buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="case-study-button"
          >
            {cs.viewSite || study.buttonLabel}
            <i data-lucide="arrow-up-right" className="case-study-button-icon" />
          </a>
          <a
            href={study.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="case-study-button case-study-button--outline"
          >
            {cs.viewRepo || 'VER REPO'}
            <i data-lucide="github" className="case-study-button-icon" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy
