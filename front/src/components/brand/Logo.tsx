import { useId } from 'react'

// Monograma "LB": una L de fuste grueso y una B que nace sobre su pie, con la panza
// inferior en diagonal colgando por debajo de la línea de la L. Letras doradas sobre
// bordó. Es la misma figura que public/favicon.svg. Guía de uso en docs/BRAND.md.
const LETTERS =
  'M119 92H162V432H119ZM98 84H184V91Q166 92 162 106V110H119V106Q115 92 98 91ZM100 432H244V440H100ZM236 414Q240 428 244 432H236ZM206 300H214V432H206ZM206 296C290 280 404 278 438 328C454 354 444 392 402 405C372 413 334 414 300 416L300 409C340 406 380 398 392 377C404 356 398 322 374 309C338 291 270 295 214 305ZM256 412L307 412L208 612L185 612ZM185 604H392V612H185ZM296 413C424 414 482 468 474 532C468 588 424 612 382 612L382 604C406 603 426 580 428 532C432 478 398 428 296 422Z'

export function Logo({ className }: { className?: string }) {
  // Ids únicos por instancia: el logo aparece más de una vez en la página.
  const id = useId()
  const wine = `${id}-wine`
  const gold = `${id}-gold`

  return (
    <svg viewBox="0 0 700 700" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id={wine} x1="0" y1="0" x2="700" y2="700" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#7a2333" />
          <stop offset="1" stopColor="#4c1220" />
        </linearGradient>
        <linearGradient id={gold} x1="100" y1="84" x2="480" y2="612" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f0daac" />
          <stop offset=".5" stopColor="#d4b06e" />
          <stop offset="1" stopColor="#a9844a" />
        </linearGradient>
      </defs>
      <rect width="700" height="700" rx="150" fill={`url(#${wine})`} />
      <path
        transform="translate(42 44) scale(.88) translate(59 0)"
        d={LETTERS}
        fill={`url(#${gold})`}
        stroke={`url(#${gold})`}
        strokeWidth="6"
        strokeLinejoin="round"
      />
    </svg>
  )
}
