import "./Card.css"

function Card({ id, icon, layer, title, technologies, description, featured }) {
  const cardClassName = `topology-card ${
    featured ? "card-core" : ""
  }`

  const layerClassName = `layer ${
    featured ? "layer-core" : ""
  }`

  const techClassName = `technologies ${
    featured ? "technologies-core" : ""
  }`

  return(
    <div className={cardClassName}>
      <header className="topology-card-header">
        <div className="card-top">
          <div className="icon-square">
            <i data-lucide={icon} className="icon-topology"></i>
          </div>
          <span className={layerClassName}>{layer}</span>
        </div>
        <div className="card-mid">
          <h2 className="title-card">{title}</h2>
          <span className={techClassName}>{technologies}</span>
        </div>
      </header>
      <footer className="topology-card-footer">
        <p className="topology-card-description">{description}</p>
      </footer>
    </div>
  )
}

export default Card
