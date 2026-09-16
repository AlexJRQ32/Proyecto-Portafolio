function ConnectCard({ connect }) {
  return (
    <div className="contact-connect-card">
      <div className="contact-connect-header">
        <i data-lucide="link" className="contact-connect-icon" />
        <span className="contact-connect-label">{connect.label}</span>
      </div>

      <a
        href="https://github.com/alexjrq32"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link-row"
      >
        <div className="contact-link-left">
          <span className="contact-link-icon-box">
            <i className="contact-link-icon fab fa-github" />
          </span>
          <div className="contact-link-texts">
            <span className="contact-link-name">{connect.github}</span>
            <span className="contact-link-url">{connect.githubUrl}</span>
          </div>
        </div>
        <i data-lucide="arrow-up-right" className="contact-link-arrow" />
      </a>

      <a
        href="https://www.linkedin.com/in/alex-roblero-297811301/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link-row"
      >
        <div className="contact-link-left">
          <span className="contact-link-icon-box">
            <i className="contact-link-icon fab fa-linkedin" />
          </span>
          <div className="contact-link-texts">
            <span className="contact-link-name">{connect.linkedin}</span>
            <span className="contact-link-url">{connect.linkedinUrl}</span>
          </div>
        </div>
        <i data-lucide="arrow-up-right" className="contact-link-arrow" />
      </a>
    </div>
  )
}

export default ConnectCard
