import { useReveal } from '../../../../hooks/useReveal'

function Timeline({ about }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="about-timeline-section reveal">
      <header className="about-timeline-header">
        <span className="about-section-label">{about.timelineLabel}</span>
        <div className="about-timeline-header-row">
          <h2 className="about-section-title">{about.timelineTitle}</h2>
          <div className="about-timeline-meta">
            <span className="about-timeline-meta-head">{about.timelineMetaHead}</span>
            <span className="about-timeline-meta-date">
              {about.timelineMetaDate}
            </span>
          </div>
        </div>
      </header>

      <div className="about-timeline-track">
        {about.timelineEntries.map((entry, i) => (
          <div className="about-timeline-entry" key={i}>
            <div className="about-timeline-version">{entry.version}</div>
            <div className="about-timeline-node-col">
              <span className="about-timeline-node" aria-hidden="true" />
              {i < about.timelineEntries.length - 1 && (
                <span className="about-timeline-line" aria-hidden="true" />
              )}
            </div>
            <div className="about-timeline-card">
              <div className="about-timeline-card-header">
                <h3 className="about-timeline-card-title">{entry.title}</h3>
                {entry.badge && (
                  <span className="about-timeline-badge">{entry.badge}</span>
                )}
              </div>
              <p className="about-timeline-card-desc">{entry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
