import { useState, useCallback } from 'react'

/**
 * useReadMore -- toggles expanded/collapsed state for text truncation.
 *
 * @param {boolean} initialExpanded - starting state (default: false)
 * @returns {{ expanded: boolean, toggle: () => void }}
 */
export function useReadMore(initialExpanded = false) {
  const [expanded, setExpanded] = useState(initialExpanded)
  const toggle = useCallback(() => setExpanded((prev) => !prev), [])
  return { expanded, toggle }
}
