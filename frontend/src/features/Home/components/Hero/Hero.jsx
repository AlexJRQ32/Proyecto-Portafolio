import "./Hero.css"
import Button from "../../../../common/components/Button/Button"
import { useReveal } from "../../../../hooks/useReveal"
import { useLanguage } from "../../../../context/LanguageContext"

function Hero() {
  const { t } = useLanguage()
  const badgeRef = useReveal()
  const titleRef = useReveal()
  const descRef = useReveal()
  const actionsRef = useReveal()

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
            <p ref={descRef} className='hero-description reveal reveal-delay-3'>
              {t.home.hero.description}
            </p>
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
