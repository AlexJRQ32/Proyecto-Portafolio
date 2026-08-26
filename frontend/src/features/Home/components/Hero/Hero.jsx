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
          <div className="hero-left">
            <h1 className='hero-title' id='hero-title'>Diseñando <span className='hero-title-accent'>Soluciones</span> Escalables</h1>
            <p className='hero-description'>
              Desarrollo web integral enfocado en infraestructura digital 
              de alto rendimiento. Creo sistemas robustos y eficientes, cuidando 
              cada detalle desde el servidor hasta la interfaz visual.
            </p>
          </div>
          <div className="hero-right">
            <div className="code-window">
              <span className="top-actions">
                <i className="fas fa-circle dot-red"></i>
                <i className="fas fa-circle dot-yellow"></i>
                <i className="fas fa-circle dot-green"></i>
              </span>
              <div className="code-content">
                <div className="code">
                  <div className="line">
                    <span className="keyword">const</span> <span className="variable">developer</span> = <span>{"{"}</span>
                  </div>
                  <div className="line indent-1">name: <span className="string">"Alex Roblero"</span>,</div>
                  <div className="line indent-1">role: <span className="string">"Full-Stack Developer"</span>,</div>
                  <div className="line indent-1">skills: <span>{"["}</span><span className="string">"React"</span>, <span className="string">".NET"</span>,</div>
                  <div className="line indent-2"><span className="string">"JavaScript"</span>, <span className="string">"SQL"</span><span>{"]"}</span>,</div>
                  <div className="line indent-1">passion: <span className="string">"build things"</span></div>
                  <div className="line"><span>{"}"}</span></div>
                </div>
              </div>
            </div>
          </div>
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