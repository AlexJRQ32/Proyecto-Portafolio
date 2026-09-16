function Toast({ formStatus, successText, errorText, onDismiss }) {
  if (formStatus !== 'success' && formStatus !== 'error') return null

  return (
    <div
      className={`contact-toast contact-toast--${formStatus}`}
      role={formStatus === 'success' ? 'status' : 'alert'}
      aria-live="polite"
    >
      <span className="contact-toast-icon-wrap">
        <i
          data-lucide={formStatus === 'success' ? 'check-circle' : 'alert-circle'}
          className="contact-toast-icon"
        />
      </span>
      <span className="contact-toast-text">
        {formStatus === 'success' ? successText : errorText}
      </span>
      <button
        className="contact-toast-close"
        onClick={onDismiss}
        aria-label="Cerrar notificación"
        type="button"
      >
        <span className="contact-toast-close-icon-wrap"><i data-lucide="x" className="contact-toast-close-icon" /></span>
      </button>
    </div>
  )
}

export default Toast
