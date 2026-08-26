import { Fragment, useEffect } from "react"
import Card from "../CardTopology/Card"
import "./Topology.css"
import topologyData from "../../../../mocks/info-topology.json"

function Topology() {
  useEffect(() => {
    window.lucide?.createIcons()
  }, [])

  return(
    <section className="section topology-section">
      <div className="section-container topology-container">
        <header className="section-header topology-header">
          <span className="section-label topology-label">02 // TOPOLOGíA</span>
          <h2 className="section-title topology-title">Arquitectura del Sistema</h2>
        </header>
        <footer className="section-grid topology-grid">
          {topologyData.map((layer, index) => (
            <Fragment key={layer.id}>
              <Card {...layer} />

              {index < topologyData.length - 1 && (
                <div className="container-icon">
                  <i data-lucide={"arrow-right"}></i>
                </div>
              )}
            </Fragment>
          ))}
        </footer>
      </div>
    </section>
  )
}

export default Topology