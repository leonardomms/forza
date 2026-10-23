import { useEffect, type ReactNode } from 'react'
import Lenis from 'lenis'

type Props = { children: ReactNode }

export function SmoothScroll({ children }: Props) {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mobileViewport = window.matchMedia('(max-width: 767px)')

    if (reducedMotion.matches || mobileViewport.matches) return

    const lenis = new Lenis({
      anchors: true,
      duration: 0.85,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.95,
    })

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = window.requestAnimationFrame(raf)
    }

    document.documentElement.classList.add('lenis-enabled')
    frame = window.requestAnimationFrame(raf)

    return () => {
      window.cancelAnimationFrame(frame)
      lenis.destroy()
      document.documentElement.classList.remove('lenis-enabled')
    }
  }, [])

  return children
}
