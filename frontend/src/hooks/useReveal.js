import { useEffect, useRef } from 'react'

/**
 * useReveal — IntersectionObserver that adds `.is-visible` to the ref element
 * when it enters the viewport. Once visible, disconnects (no re-hide).
 *
 * @param {Object} opts
 * @param {number} opts.threshold - visibility threshold (default 0.15)
 * @param {string} opts.rootMargin - root margin (default '-60px 0px')
 * @returns {React.RefObject} ref to attach to the element
 */
export function useReveal({ threshold = 0.05, rootMargin = '0px 0px -40px 0px' } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If reduced motion is preferred, reveal immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}
