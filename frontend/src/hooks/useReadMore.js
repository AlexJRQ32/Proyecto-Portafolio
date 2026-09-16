import { useState, useCallback, useRef, useEffect } from 'react'

/**
 * useReadMore -- toggles expanded/collapsed state for text truncation.
 * Detects whether the text actually overflows the collapsed height;
 * if it fits, the toggle button is not needed.
 *
 * @param {Array} deps - extra dependencies that change the text (e.g. language)
 * @returns {{ expanded: boolean, toggle: () => void, textRef: React.RefObject, needsToggle: boolean }}
 */
export function useReadMore(deps = []) {
  const [expanded, setExpanded] = useState(false)
  const [needsToggle, setNeedsToggle] = useState(false)
  const textRef = useRef(null)
  const toggle = useCallback(() => setExpanded((prev) => !prev), [])

  useEffect(() => {
    const check = () => {
      const el = textRef.current
      if (!el) return
      if (expanded) return // keep last verdict while expanded
      setNeedsToggle(el.scrollHeight > el.clientHeight + 2)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded, ...deps])

  return { expanded, toggle, textRef, needsToggle }
}
