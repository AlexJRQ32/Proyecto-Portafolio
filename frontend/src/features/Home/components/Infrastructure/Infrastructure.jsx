import Card from "../CardStack/Card"
import infoStack from "../../../../mocks/info-stack.json"
import "./Infrastructure.css"

function Infrastructure() {
  return(
    <section className="section infrastructure-section">
      <div className="section-container infrastructure-container">
        <header className="section-header infrastructure-header">
          <span className="section-label infrastructure-label">01 // INFRAESTRUCTURA</span>
          <h2 className="section-title infrastructure-title">Stack Principal</h2>
        </header>
        <footer className="section-grid infrastructure-grid">
          {infoStack.map((stack) => (
            <Card key={stack.id} {...stack} />
          ))}
        </footer>
      </div>
    </section>
  )
}

export default Infrastructure