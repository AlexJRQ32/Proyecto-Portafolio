import { useState, useCallback, useEffect } from 'react'

/**
 * useCarousel — Lógica de carrusel: índice, dirección, navegación, keyboard listener.
 * @param {number} total - Número total de items
 * @returns {{ current, direction, total, goNext, goPrev, setCurrent }}
 */
export function useCarousel(total, initialIndex = 0) {
  const [current, setCurrent] = useState(initialIndex)
  const [direction, setDirection] = useState('next')

  const goNext = useCallback(() => {
    setDirection('next')
    setCurrent((prev) => (prev + 1) % total)
  }, [total])

  const goPrev = useCallback(() => {
    setDirection('prev')
    setCurrent((prev) => (prev - 1 + total) % total)
  }, [total])

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrev])

  return { current, direction, total, goNext, goPrev, setCurrent }
}
