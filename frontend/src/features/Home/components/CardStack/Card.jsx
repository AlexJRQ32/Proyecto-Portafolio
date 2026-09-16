import "./Card.css"

function Card({ icon, title, description, version, badge1, badge2 }) {
  return(
    <div className="stack-card">
      <span className="stack-card-header">
        <i className={`devicon-${icon} stack-card-icon`}></i>
        <span className="stack-card-version">{version}</span>
      </span>
      <h3 className="stack-card-title">{title}</h3>
      <p className="stack-card-description">{description}</p>
      <div className="stack-card-badges">
        <span className="stack-card-badge">{badge1}</span>
        <span className="stack-card-badge">{badge2}</span>
      </div>
    </div>
  )
}

export default Card
