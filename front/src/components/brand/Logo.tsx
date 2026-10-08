import { useId } from 'react'

// Monograma "BL": la B en beige, la L con el pie dorado y el destello ✦ de la marca.
// Es la misma figura que public/favicon.svg.
export function Logo({ className }: { className?: string }) {
  // Id único por instancia: el logo aparece más de una vez en la página.
  const gradientId = useId()

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#83283a" />
          <stop offset="1" stopColor="#4c1220" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill={`url(#${gradientId})`} />
      <g fill="none" stroke="#f3ead9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12v24M9 12h7a5.5 5.5 0 0 1 0 11H9M9 23h8a6.5 6.5 0 0 1 0 13H9M30 12v24" />
      </g>
      <path d="M30 36h9" stroke="#d9b97a" strokeWidth="4" strokeLinecap="round" />
      <path
        d="M39 7.5c.55 4.3 2.2 5.95 6.5 6.5-4.3.55-5.95 2.2-6.5 6.5-.55-4.3-2.2-5.95-6.5-6.5 4.3-.55 5.95-2.2 6.5-6.5Z"
        fill="#d9b97a"
      />
    </svg>
  )
}
