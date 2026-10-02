import Lenis from 'lenis'
import { useEffect, type ReactNode } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { setActiveLenis } from '@/lib/scroll'

// Scroll suave con Lenis, sincronizado con el reloj de GSAP para que
// las animaciones atadas al scroll no queden desfasadas.
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)
    setActiveLenis(lenis)

    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      setActiveLenis(null)
      lenis.destroy()
    }
  }, [])

  return children
}
