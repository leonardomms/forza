import { useEffect, type ReactNode } from 'react'
import Lenis from 'lenis'

type Props = { children: ReactNode }

export function SmoothScroll({ children }: Props) {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mobileViewport = window.matchMedia('(max-width: 767px)')

    if (reducedMotion.matches || mobileViewport.matches) {
      return
    }

    const lenis = new Lenis({
      anchors: true,
      autoRaf: true,
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.85,
    })

    document.documentElement.classList.add('lenis-enabled')

    return () => {
      lenis.destroy()
      document.documentElement.classList.remove('lenis-enabled')
    }
  }, [])

  return children
}
