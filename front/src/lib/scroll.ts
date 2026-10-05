import type Lenis from 'lenis'

// Referencia a la instancia activa de Lenis, para poder mover el scroll
// desde fuera del proveedor (por ejemplo, al cambiar de página).
let activeLenis: Lenis | null = null

export function setActiveLenis(lenis: Lenis | null): void {
  activeLenis = lenis
}

export function scrollToTop(): void {
  if (activeLenis) activeLenis.scrollTo(0, { immediate: true })
  else window.scrollTo(0, 0)
}
