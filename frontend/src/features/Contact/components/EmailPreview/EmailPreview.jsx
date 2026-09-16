function EmailPreview({ emailPreview, correo, nombre, tipo, focusedField, mensaje }) {
  const caret = <span className="contact-caret" aria-hidden="true" />

  return (
    <div className="contact-email-preview">
      <div className="contact-email-header">
        <i data-lucide="mail" className="contact-email-icon" />
        <span className="contact-email-label">{emailPreview.label}</span>
      </div>
      <div className="contact-email-divider" />
      <div className="contact-email-meta">
        <div className="contact-email-row">
          <span className="contact-email-key">{emailPreview.to}</span>
          <span className="contact-email-value">robleroalex015@gmail.com</span>
        </div>
        <div className="contact-email-row">
          <span className="contact-email-key">{emailPreview.from}</span>
          <span className="contact-email-value">{correo}{focusedField === 'correo' && caret}</span>
        </div>
        <div className="contact-email-row">
          <span className="contact-email-key">{emailPreview.subject}</span>
          <span className="contact-email-value">{nombre ? `[${tipo}] - ${nombre}` : `[${tipo}] - `}{focusedField === 'nombre' && caret}</span>
        </div>
      </div>
      <div className="contact-email-divider" />
      <div className="contact-email-body" aria-live="polite">
        {focusedField === 'mensaje' ? mensaje : (mensaje || emailPreview.bodyPlaceholder)}{focusedField === 'mensaje' && caret}
      </div>
    </div>
  )
}

export default EmailPreview
