import './Projects.css'
import { Link } from 'react-router-dom'
import projects from '../../../mocks/info-projects.json'
import { useLanguage } from '../../../context/LanguageContext'
import { useCarousel } from '../../../hooks/useCarousel'
import { useLucideIcons } from '../../../hooks/useLucideIcons'
import DeviceFrame from '../components/DeviceFrame/DeviceFrame'

function Projects() {
  const { t } = useLanguage()
  const p = t.projects
  // Restore carousel position when returning from a case study
  const savedIndex = Number(sessionStorage.getItem('projects-carousel-index')) || 0
  const { current, direction, total, goNext, goPrev, setCurrent, onTouchStart, onTouchEnd } = useCarousel(
    projects.length,
    savedIndex < projects.length ? savedIndex : 0,
  )

  const handleViewCase = () => {
    sessionStorage.setItem('projects-carousel-index', String(current))
  }

  useLucideIcons([current])

  const project = projects[current]

  return (
    <section className="projects-page" aria-labelledby="projects-title">
      <div className="projects-container">
        {/* HEADER */}
        <header className="projects-header">
          <span className="projects-label">
            <span className="projects-label-line" />
            {p.label}
          </span>
          <h1 className="projects-title" id="projects-title">
            <span>{p.titleLine1}</span>
            <span>{p.titleLine2}</span>
          </h1>
          <p className="projects-description">
            {p.description}
          </p>
        </header>

        {/* CAROUSEL */}
        <div className="carousel" role="region" aria-label={p.dotsAria}>
          {/* Device viewport */}
          <div className="carousel-viewport">
            <button
              className="carousel-arrow carousel-arrow--prev"
              onClick={goPrev}
              aria-label={p.prevAria}
            >
              <i data-lucide="chevron-left" className="carousel-arrow-icon" />
            </button>

            <div className="carousel-stage" aria-live="polite" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              <div key={current} className={`carousel-slide carousel-slide--${direction}`}>
                <DeviceFrame
                  device={project.device}
                  image={project.image}
                  title={project.title}
                  projectUrl={project.buttonUrl}
                />
              </div>
            </div>

            <button
              className="carousel-arrow carousel-arrow--next"
              onClick={goNext}
              aria-label={p.nextAria}
            >
              <i data-lucide="chevron-right" className="carousel-arrow-icon" />
            </button>
          </div>

          {/* Swipe hint (mobile only) — pegado al device, antes de la info */}
          <div className="carousel-swipe-hint" aria-hidden="true">
            <i data-lucide="chevron-left" className="swipe-hint-icon" />
            <span>{p.swipeHint}</span>
            <i data-lucide="chevron-right" className="swipe-hint-icon" />
          </div>

          {/* Project info */}
          <div className="carousel-info">
            <div key={`info-${current}`} className={`carousel-slide carousel-slide--${direction}`}>
              <div className="carousel-info-top">
              <span className="project-meta">
                <span
                  className={`project-dot ${
                    project.status === 'PROTOTIPO' ? 'project-dot--gray' : ''
                  }`}
                  aria-hidden="true"
                />
                {project.code} // {project.status}
              </span>
              <span className="carousel-counter">
                {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
            </div>
            <span className="project-card-tagline">{project.tagline}</span>
            <h2 className="carousel-title" id="project-title-current">
              {project.title}
            </h2>
            <p className="carousel-description">{project.description}</p>
            <div className="project-badges">
              {project.badges.map((badge) => (
                <span key={badge} className="project-badge">
                  {badge}
                </span>
              ))}
            </div>
            <div className="project-buttons">
              <a
                href={project.buttonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                {project.buttonLabel}
                <i data-lucide={project.buttonIcon} className="project-button-icon" />
              </a>
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button project-button--outline"
                >
                  {p.viewRepo}
                  <i data-lucide="github" className="project-button-icon" />
                </a>
              )}
              <Link
                to={`/projects/${project.id}`}
                onClick={handleViewCase}
                className="project-button project-button--case"
              >
                {p.viewCase || 'VER CASO'}
                <i data-lucide="arrow-up-right" className="project-button-icon" />
              </Link>
            </div>

              {/* Dot indicators */}
              <div className="carousel-dots" role="tablist" aria-label={p.dotsAria}>
              {projects.map((proj, i) => (
                <button
                  key={proj.id}
                  className={`carousel-dot ${i === current ? 'carousel-dot--active' : ''}`}
                  onClick={() => setCurrent(i)}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`${p.viewProjectAria} ${proj.title}`}
                />
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
