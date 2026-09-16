import { createContext, useContext, useState, useMemo } from 'react'
import contentEs from '../mocks/content-es.json'
import contentEn from '../mocks/content-en.json'

const translations = { es: contentEs, en: contentEn }

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('lang') || 'es'
    } catch {
      return 'es'
    }
  })

  const handleSetLang = (newLang) => {
    setLang(newLang)
    try {
      localStorage.setItem('lang', newLang)
    } catch {
      /* ignore */
    }
  }

  const t = useMemo(() => translations[lang] || translations.es, [lang])

  const value = useMemo(() => ({ lang, setLang: handleSetLang, t }), [lang, t])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
