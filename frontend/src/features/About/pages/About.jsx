import './About.css'
import infoAbout from '../../../mocks/info-about.json'
import { useReveal } from '../../../hooks/useReveal'
import { useLanguage } from '../../../context/LanguageContext'
import { useLucideIcons } from '../../../hooks/useLucideIcons'
import { useReadMore } from '../../../hooks/useReadMore'
import CodeBlock from '../components/CodeBlock/CodeBlock'
import Timeline from '../components/Timeline/Timeline'

function About() {
  const { t } = useLanguage()
  const about = t.about
  const { cards: infoCards } = infoAbout
  const badgeRef = useReveal()
  const titleRef = useReveal()
  const descRef = useReveal()
  const cardsRef = useReveal()
  const { expanded: descExpanded, toggle: descToggle } = useReadMore()
  const c = t.common

  useLucideIcons([descExpanded])

  return (
    <section className="about-section" aria-labelledby="about-title">
      {/* HERO */}
      <div className="about-container">
        <header className="about-hero">
          <span ref={badgeRef} className="about-badge reveal reveal-delay-1">
            <span className="about-badge-dot" />
            <span className="about-badge-text">{about.badge}</span>
          </span>
          <div className="about-hero-label">
            <span className="about-hero-label-line" aria-hidden="true" />
            <span className="about-hero-label-text">{about.heroLabel}</span>
          </div>
          <h1 ref={titleRef} className="about-title reveal reveal-delay-2" id="about-title">
            {about.title} <span className="about-title-accent">{about.titleAccent}</span>{' '}
            {about.titleSuffix}
          </h1>
          <div ref={descRef} className={`rm-wrapper rm-wrapper--collapsed reveal reveal-delay-3${descExpanded ? ' rm-wrapper--expanded' : ''}`}>
            <p className="about-description">
              {about.description}
            </p>
          </div>
          <button
            className={`rm-toggle${descExpanded ? ' rm-toggle--expanded' : ''}`}
            onClick={descToggle}
            aria-expanded={descExpanded}
            type="button"
          >
            {descExpanded ? c.readLess : c.readMore}
            <i data-lucide="chevron-down" className="rm-toggle-icon" aria-hidden="true" />
          </button>
        </header>
      </div>

      {/* CONTENT ROW */}
      <div className="about-container">
        <div className="about-content">
          {/* Code block */}
          <CodeBlock code={about.code} codeLabel={about.code.codeLabel} />

          {/* Cards grid 2x2 */}
          <div ref={cardsRef} className="about-cards reveal">
            {about.cards.map((card, i) => (
              <div className="about-card" key={i}>
                <span className="about-card-header">
                  <i data-lucide={infoCards[i].icon} className="about-card-icon" />
                  <h3 className="about-card-title">{card.title}</h3>
                </span>
                <p className="about-card-description">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="about-container">
        <Timeline about={about} />
      </div>
    </section>
  )
}

export default About
