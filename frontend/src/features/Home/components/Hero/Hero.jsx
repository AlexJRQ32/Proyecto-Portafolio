import "./Hero.css"
import Button from "../../../../common/components/Button/Button"

function Hero() {
  return(
    <section className='hero-section' aria-labelledby='hero-title'>
      <div className="hero-container">
        <header className="hero-header">
          <span className="hero-badge">
            <i className="hero-badge-icon fas fa-circle"></i>
            <span className="hero-badge-text">Desarrollador Full-Stack</span>
          </span>
        </header>
        <div className="hero-content">
          <h1 className='hero-title' id='hero-title'>Diseñando <span className='hero-title-accent'>Soluciones</span> Escalables</h1>
          <p className='hero-description'>
            Desarrollo web integral enfocado en infraestructura digital 
            de alto rendimiento. Creo sistemas robustos y eficientes, cuidando 
            cada detalle desde el servidor hasta la interfaz visual.
          </p>
        </div>
        <footer className="hero-actions">
          <Button text="Mis Proyectos" className="btn-orange" redirect="projects" />
          <Button text="Descargar CV" className='btn-grey' redirect="#"></Button>
        </footer>
      </div>
    </section>
  )
}

export default Hero