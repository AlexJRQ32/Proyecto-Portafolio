function DeviceFrame({ device, image, title, projectUrl }) {
  if (device === 'phone') {
    return (
      <div className="device device--phone" aria-hidden="true">
        <div className="device-phone-notch" />
        <div className="device-phone-screen">
          <img src={image} alt={`Screenshot de ${title}`} className="device-img" loading="lazy" />
        </div>
      </div>
    )
  }

  return (
    <div className="device device--monitor" aria-hidden="true">
      <div className="device-monitor-bar">
        <span className="device-monitor-dots">
          <span className="device-monitor-dot device-monitor-dot--red" />
          <span className="device-monitor-dot device-monitor-dot--yellow" />
          <span className="device-monitor-dot device-monitor-dot--green" />
        </span>
        <span className="device-monitor-url">{projectUrl}</span>
      </div>
      <div className="device-monitor-screen">
        <img src={image} alt={`Screenshot de ${title}`} className="device-img" loading="lazy" />
      </div>
    </div>
  )
}

export default DeviceFrame
