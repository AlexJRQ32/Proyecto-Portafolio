import Button from '../../../common/components/Button/Button'
import './Home.css'

function Home() {
  return (
    <>
      <section className='hero' aria-labelledby='hero-title'>
        <header className="hero-top">
          <span className="badge-hero">
            <i className="badge-icon fas fa-circle"></i>
            <span className="badge-text">Desarrollador Full-Stack</span>
          </span>
        </header>
        <div className="hero-mid">
          <h1 className='title' id='hero-title'>Diseñando <span className='title-accent'>Soluciones</span> Escalables</h1>
          <p className='hero-description'>
            Desarrollo web integral enfocado en infraestructura digital 
            de alto rendimiento. Creo sistemas robustos y eficientes, cuidando 
            cada detalle desde el servidor hasta la interfaz visual.
          </p>
        </div>
        <footer className="hero-bot">
          <Button text="Mis Proyectos" className="btn-orange" redirect="projects" />
          <Button text="Descargar CV" className='btn-grey' redirect="#"></Button>
        </footer>
      </section>
    </>
  )
}

export default Home