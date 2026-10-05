// Monograma "bl": el trazo de la b y la l comparten el mismo ritmo vertical.
// Es la misma figura que public/favicon.svg.
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <rect width="32" height="32" rx="9" className="fill-block" />
      <g fill="none" stroke="#d4b47a" strokeWidth="3" strokeLinecap="round">
        <path d="M9.25 7.5v17" />
        <circle cx="14.25" cy="19.5" r="5" />
        <path d="M22.75 7.5v17" />
      </g>
    </svg>
  )
}
