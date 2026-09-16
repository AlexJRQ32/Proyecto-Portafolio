import { useEffect } from 'react'

/**
 * useLucideIcons — Llama a window.lucide.createIcons() cada vez que cambian las deps.
 * @param {Array} deps - Dependencias del useEffect (default: [])
 */
export function useLucideIcons(deps = []) {
  useEffect(() => {
    window.lucide?.createIcons()
  }, deps)
}
