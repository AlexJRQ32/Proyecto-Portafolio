import "./Card.css"

function Card({ id, icon, layer, title, technologies, description }) {
  const cardClassName = `topology-card ${
    id === "api" ? "card-core" : ""
  }`

  return(
    <div className={cardClassName}>
      <header className="topology-card-header">
        <div className="card-top">
          <div className="icon-square">
            <i className="icon-topology" data-lucide={icon}></i>
          </div>
          <span className="layer">{layer}</span>
        </div>
        <div className="card-mid">
          <h2 className="title-card">{title}</h2>
          <span className="technologies">{technologies}</span>
        </div>
      </header>
      <footer className="topology-card-footer">
        <p className="topology-card-description">{description}</p>
      </footer>
    </div>
  )
}

export default Card