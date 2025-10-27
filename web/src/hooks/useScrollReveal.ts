import { useEffect } from 'react'

type ScrollRevealOptions = {
  rootMargin?: string
  threshold?: number
}

export function useScrollReveal(options?: ScrollRevealOptions) {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    // Add a class to scope initial hidden state only when JS is enabled
    document.documentElement.classList.add('reveal-init')

    // Respect reduced motion: reveal everything immediately
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      const all = document.querySelectorAll('[data-reveal], [data-reveal-children]')
      all.forEach((el) => (el as HTMLElement).classList.add('is-visible'))
      return
    }

    const elements = Array.from(document.querySelectorAll('[data-reveal], [data-reveal-children]')) as HTMLElement[]
    if (elements.length === 0) return

    // Delay by a frame to ensure initial styles apply before observing
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        }
      },
      {
        root: null,
        rootMargin: options?.rootMargin ?? '0px 0px -5% 0px',
        threshold: options?.threshold ?? 0.05,
      }
    )

    requestAnimationFrame(() => {
      // Always reveal elements above the fold immediately (hero etc.)
      const viewportH = window.innerHeight
      for (const el of elements) {
        const rect = el.getBoundingClientRect()
        if (rect.top < viewportH * 0.9) {
          el.classList.add('is-visible')
          continue
        }
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options?.rootMargin, options?.threshold])
}


