import Card from "../CardStack/Card"
import infoStack from "../../../../mocks/info-stack.json"
import "./Infrastructure.css"

function Infrastructure() {
  return(
    <section className="infrastructure-section">
      <div className="hero-container infrastructure-container">
        <header className="infrastructure-header">
          <span className="infrastructure-label">01 // INFRAESTRUCTURA</span>
          <h2 className="infrastructure-title">Stack Principal</h2>
        </header>
        <footer className="infrastructure-grid">
          {infoStack.map((stack) => (
            <Card key={stack.icon} {...stack} />
          ))}
        </footer>
      </div>
    </section>
  )
}

export default Infrastructure