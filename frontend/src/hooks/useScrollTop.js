import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * useScrollTop — Scrolls the window to the top on every route change.
 */
export function useScrollTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
}
