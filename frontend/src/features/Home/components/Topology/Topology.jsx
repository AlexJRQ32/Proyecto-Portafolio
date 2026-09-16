import Card from "../CardTopology/Card"
import topologyData from "../../../../mocks/info-topology.json"
import { useReveal } from "../../../../hooks/useReveal"
import { useLanguage } from "../../../../context/LanguageContext"
import { useLucideIcons } from "../../../../hooks/useLucideIcons"
import "./Topology.css"

function Topology() {
  const { t } = useLanguage()
  const sectionRef = useReveal()
  const topo = t.home.topology

  const mergedLayers = topo.layers.map((layer, i) => ({
    ...topologyData[i],
    layer: layer.layer,
    title: layer.title,
    technologies: layer.technologies,
    description: layer.description,
  }))

  useLucideIcons([])

  return(
    <section className="section topology-section" id="topology">
      <div ref={sectionRef} className="section-container topology-container reveal">
        <header className="section-header topology-header">
          <div className="topology-header-row">
            <div className="topology-header-left">
              <span className="section-label topology-label">{topo.label}</span>
              <h2 className="section-title topology-title">{topo.title}</h2>
            </div>
            <span className="topology-meta-pill">{topo.metaPill}</span>
          </div>
        </header>
        <footer className="topology-grid">
          {mergedLayers.map((layer, index) => (
            <div className="topology-item" key={layer.id}>
              <Card {...layer} />
              {index < mergedLayers.length - 1 && (
                <div className="topology-connector">
                  <i data-lucide="arrow-right" className="topology-connector-arrow"></i>
                  <span className="topology-connector-line"></span>
                </div>
              )}
            </div>
          ))}
        </footer>
        <div className="topology-footer">
          <span className="topology-footer-left">
            <span className="topology-footer-dot"></span>
            {topo.footerLatency}
          </span>
          <span className="topology-footer-right">{topo.footerStatus}</span>
        </div>
      </div>
    </section>
  )
}

export default Topology
