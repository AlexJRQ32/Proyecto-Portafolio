import { useState, useRef, useCallback, useEffect } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdeknllg'

/**
 * useContactForm — Toda la lógica del form de Contact: estado, submit, toast, timer.
 * @param {Object} t - Objeto de traducciones (t.contact.form)
 * @returns {{ tipo, setTipo, nombre, setNombre, correo, setCorreo, mensaje, setMensaje, focusedField, setFocusedField, formStatus, handleSubmit, dismissToast }}
 */
export function useContactForm(t) {
  const form = t.form

  const [tipo, setTipo] = useState(() => form.tipoOptions[0].value)
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [focusedField, setFocusedField] = useState(null)
  const [formStatus, setFormStatus] = useState('idle')

  const timerRef = useRef(null)

  const dismissToast = useCallback(() => {
    setFormStatus('idle')
  }, [])

  const showToast = useCallback((type) => {
    setFormStatus(type)
    clearTimeout(timerRef.current)
    const ms = type === 'success' ? 4000 : 6000
    timerRef.current = setTimeout(() => setFormStatus('idle'), ms)
  }, [])

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  // Re-render lucide icons when toast appears
  useEffect(() => {
    if (formStatus === 'success' || formStatus === 'error') {
      window.lucide?.createIcons()
    }
  }, [formStatus])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()

    const nombreVal = e.target.nombre.value.trim()
    const correoVal = e.target.correo.value.trim()
    const tipoVal = e.target.tipo.value
    const mensajeVal = e.target.mensaje.value.trim()

    setFormStatus('sending')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ tipo: tipoVal, nombre: nombreVal, correo: correoVal, mensaje: mensajeVal }),
      })

      if (res.ok) {
        setNombre('')
        setCorreo('')
        setMensaje('')
        setTipo(form.tipoOptions[0].value)
        showToast('success')
      } else {
        showToast('error')
      }
    } catch {
      showToast('error')
    }
  }, [form.tipoOptions, showToast])

  return {
    tipo, setTipo,
    nombre, setNombre,
    correo, setCorreo,
    mensaje, setMensaje,
    focusedField, setFocusedField,
    formStatus,
    handleSubmit,
    dismissToast,
  }
}
