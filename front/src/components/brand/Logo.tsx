import { useId } from 'react'

// Monograma "BL". La L dorada, fina y alta, enmarca a la B; la B tiene las
// esquinas en chaflán (cortes a 45°), un guiño a las pistas de un circuito
// sin perder la forma clásica de la letra. Es la misma figura que public/favicon.svg.
// Guía completa de uso en docs/BRAND.md.
export function Logo({ className }: { className?: string }) {
  // Ids únicos por instancia: el logo aparece más de una vez en la página.
  const id = useId()
  const wine = `${id}-wine`
  const gold = `${id}-gold`

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id={wine} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#83283a" />
          <stop offset="1" stopColor="#4c1220" />
        </linearGradient>
        <linearGradient id={gold} x1="0" y1="8" x2="0" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ead1a0" />
          <stop offset="1" stopColor="#b8924f" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={`url(#${wine})`} />
      <path d="M17 8v46h33" fill="none" stroke={`url(#${gold})`} strokeWidth="2.4" strokeLinecap="square" />
      <path
        d="M24 14v36M24 14h12l6 6v4l-6 6H24M24 30h14l7 7v6l-7 7H24"
        fill="none"
        stroke="#f3ead9"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  )
}
