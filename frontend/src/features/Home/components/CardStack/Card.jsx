import "./Card.css"

function Card({ icon, title, description, version, badge1, badge2 }) {
  const iconClass = icon === "database"
    ? "fa-solid fa-database"
    : `devicon-${icon}-plain`

  return(
    <div className="stack-card">
      <span className="stack-card-header">
        <i className={`${iconClass} stack-card-icon`} ></i>
        <span className="stack-card-version">{version}</span>
      </span>
      <h1 className="stack-card-title">{title}</h1>
      <p className="stack-card-description">{description}</p>
      <div className="stack-card-badges">
        <span className="stack-card-badge">{badge1}</span>
        <span className="stack-card-badge">{badge2}</span>
      </div>
    </div>
  )
}

export default Card