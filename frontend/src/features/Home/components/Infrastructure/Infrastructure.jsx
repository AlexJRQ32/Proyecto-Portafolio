import Card from "../CardStack/Card"
import infoStack from "../../../../mocks/info-stack.json"
import { useReveal } from "../../../../hooks/useReveal"
import { useLanguage } from "../../../../context/LanguageContext"
import "./Infrastructure.css"

function Infrastructure() {
  const { t } = useLanguage()
  const sectionRef = useReveal()
  const infra = t.home.infrastructure

  const mergedCards = infra.cards.map((card, i) => ({
    ...infoStack[i],
    title: card.title,
    description: card.description,
    badge1: card.badge1,
    badge2: card.badge2,
  }))

  return(
    <section className="section infrastructure-section">
      <div ref={sectionRef} className="section-container infrastructure-container reveal">
        <header className="section-header infrastructure-header">
          <div className="infrastructure-header-row">
            <div className="infrastructure-header-left">
              <span className="section-label infrastructure-label">{infra.label}</span>
              <h2 className="section-title infrastructure-title">{infra.title}</h2>
            </div>
            <span className="infrastructure-meta">{infra.meta}</span>
          </div>
        </header>
        <footer className="infrastructure-grid">
          {mergedCards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </footer>
      </div>
    </section>
  )
}

export default Infrastructure
