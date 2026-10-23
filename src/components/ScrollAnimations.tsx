import { useEffect, type ReactNode } from 'react'

type Props = { children: ReactNode }

export function ScrollAnimations({ children }: Props) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const enabled = params.get('animations') === 'on'
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!enabled || reducedMotion) return

    const root = document.documentElement
    root.classList.add('scroll-animations-enabled')

    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-revealed')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' })

    elements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${(index % 4) * 80}ms`)
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
      root.classList.remove('scroll-animations-enabled')
      elements.forEach((element) => {
        element.classList.remove('is-revealed')
        element.style.removeProperty('--reveal-delay')
      })
    }
  }, [])

  return children
}
