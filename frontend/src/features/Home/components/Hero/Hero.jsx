import "./Hero.css"
import Button from "../../../../common/components/Button/Button"
import { useReveal } from "../../../../hooks/useReveal"
import { useLanguage } from "../../../../context/LanguageContext"
import { useReadMore } from "../../../../hooks/useReadMore"
import { useLucideIcons } from "../../../../hooks/useLucideIcons"

function Hero() {
  const { t } = useLanguage()
  const badgeRef = useReveal()
  const titleRef = useReveal()
  const descRef = useReveal()
  const actionsRef = useReveal()
  const { expanded, toggle } = useReadMore()
  const c = t.common

  useLucideIcons([expanded])

  return(
    <section className='hero-section' aria-labelledby='hero-title'>
      <div className="hero-container">
        <header className="hero-header">
          <span ref={badgeRef} className="hero-badge reveal reveal-delay-1">
            <span className="hero-badge-dot"></span>
            <span className="hero-badge-text">{t.home.hero.badge}</span>
          </span>
        </header>
        <div className="hero-content">
          <div className="hero-left">
            <h1 ref={titleRef} className='hero-title reveal reveal-delay-2' id='hero-title'>{t.home.hero.title} <span className='hero-title-accent'>{t.home.hero.titleAccent}</span> {t.home.hero.titleSuffix}</h1>
            <div ref={descRef} className="reveal reveal-delay-3">
            <div className={`rm-wrapper rm-wrapper--collapsed${expanded ? ' rm-wrapper--expanded' : ''}`}>
              <p className='hero-description'>
                {t.home.hero.description}
              </p>
            </div>
            <button
              className={`rm-toggle${expanded ? ' rm-toggle--expanded' : ''}`}
              onClick={toggle}
              aria-expanded={expanded}
              type="button"
            >
              {expanded ? c.readLess : c.readMore}
              <i data-lucide="chevron-down" className="rm-toggle-icon" aria-hidden="true" />
            </button>
            </div>
          </div>
        </div>
        <footer ref={actionsRef} className="hero-actions reveal reveal-delay-3">
          <Button text={t.home.hero.ctaPrimary} className="btn-orange" redirect="projects" />
          <Button text={t.home.hero.ctaSecondary} className='btn-grey' redirect="/CV_Alex_Roblero.pdf" />
        </footer>
      </div>
    </section>
  )
}

export default Hero
