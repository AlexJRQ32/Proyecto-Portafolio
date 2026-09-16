import './Contact.css'
import { useReveal } from '../../../hooks/useReveal'
import { useLanguage } from '../../../context/LanguageContext'
import { useLucideIcons } from '../../../hooks/useLucideIcons'
import { useContactForm } from '../../../hooks/useContactForm'
import EmailPreview from '../components/EmailPreview/EmailPreview'
import ConnectCard from '../components/ConnectCard/ConnectCard'
import Toast from '../components/Toast/Toast'

function Contact() {
  const { t } = useLanguage()
  const c = t.contact
  const titleRef = useReveal()
  const formRef = useReveal()
  const sidebarRef = useReveal()

  useLucideIcons([])

  const {
    tipo, setTipo,
    nombre, setNombre,
    correo, setCorreo,
    mensaje, setMensaje,
    focusedField, setFocusedField,
    formStatus,
    handleSubmit,
    dismissToast,
  } = useContactForm(c)

  return (
    <section className="contact-page" aria-labelledby="contact-title">
      {/* HEADER */}
      <div className="contact-container">
        <header className="contact-hero">
          <div className="contact-hero-label">
            <span className="contact-hero-label-line" aria-hidden="true" />
            <span className="contact-hero-label-text">{c.label}</span>
          </div>
          <h1 ref={titleRef} className="contact-title reveal reveal-delay-1" id="contact-title">{c.title}</h1>
        </header>
      </div>

      {/* GRID 2 COLUMNAS */}
      <div className="contact-container">
        <div className="contact-grid">
          {/* COLUMNA IZQUIERDA — FORMULARIO */}
          <div ref={formRef} className="contact-form-card reveal">
            <div className="contact-form-header">
              <span className="contact-form-label">{c.form.directMessage}</span>
              <span className="contact-form-divider" />
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              {/* Tipo de consulta */}
              <div className="contact-field">
                <label className="contact-field-label" htmlFor="contact-tipo">
                  <i data-lucide="message-square" className="contact-field-icon" />
                  {c.form.tipoLabel}
                </label>
                <select id="contact-tipo" name="tipo" className="contact-select" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                  {c.form.tipoOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* Fila 2 columnas: nombre + correo */}
              <div className="contact-row">
                <div className="contact-field">
                  <label className="contact-field-label" htmlFor="contact-nombre">
                    <i data-lucide="user" className="contact-field-icon" />
                    {c.form.nombreLabel}
                  </label>
                  <input
                    id="contact-nombre"
                    name="nombre"
                    type="text"
                    className="contact-input"
                    placeholder={c.form.nombrePlaceholder}
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    onFocus={() => setFocusedField('nombre')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </div>
                <div className="contact-field">
                  <label className="contact-field-label" htmlFor="contact-correo">
                    <i data-lucide="mail" className="contact-field-icon" />
                    {c.form.correoLabel}
                  </label>
                  <input
                    id="contact-correo"
                    name="correo"
                    type="email"
                    className="contact-input"
                    placeholder={c.form.correoPlaceholder}
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    onFocus={() => setFocusedField('correo')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </div>
              </div>

              {/* Textarea */}
              <div className="contact-field">
                <label className="contact-field-label" htmlFor="contact-mensaje">
                  <i data-lucide="send" className="contact-field-icon" />
                  {c.form.mensajeLabel}
                </label>
                <textarea
                  id="contact-mensaje"
                  name="mensaje"
                  className="contact-textarea"
                  placeholder={c.form.mensajePlaceholder}
                  rows={3}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  onFocus={() => setFocusedField('mensaje')}
                  onBlur={() => setFocusedField(null)}
                  required
                />
              </div>

              {/* Fila inferior: estado + boton */}
              <div className="contact-form-footer">
                <span className="contact-status">
                  <span className="contact-status-dot" aria-hidden="true" />
                  {c.form.status}
                </span>
                <button type="submit" className="contact-submit" disabled={formStatus === 'sending'}>
                  {formStatus === 'sending' && <span className="contact-spinner" aria-hidden="true" />}
                  {formStatus === 'sending' ? c.form.sending : c.form.submit}
                  {formStatus !== 'sending' && <span className="contact-submit-icon-wrap"><i data-lucide="send" className="contact-submit-icon" /></span>}
                </button>
              </div>
            </form>
          </div>

          {/* COLUMNA DERECHA — EMAIL PREVIEW + CONECTAR */}
          <div ref={sidebarRef} className="contact-sidebar reveal reveal-delay-2">
            <EmailPreview
              emailPreview={c.emailPreview}
              correo={correo}
              nombre={nombre}
              tipo={tipo}
              focusedField={focusedField}
              mensaje={mensaje}
            />
            <ConnectCard connect={c.connect} />
          </div>
        </div>
      </div>

      {/* TOAST NOTIFICATION */}
      <Toast
        formStatus={formStatus}
        successText={c.form.success}
        errorText={c.form.error}
        onDismiss={dismissToast}
      />
    </section>
  )
}

export default Contact
