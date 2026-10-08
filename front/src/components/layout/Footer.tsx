import { Logo } from '@/components/brand/Logo'
import { profile } from '@/content'
import { useLanguage } from '@/providers/language'

const linkClass = 'transition-colors hover:text-gold'

// Pie compacto: firma con el logo a la izquierda y enlaces a la derecha.
export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="container-page">
      <div className="h-px bg-linear-to-r from-transparent via-gold/60 to-transparent" />

      <div className="flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Logo className="size-9 shrink-0" />
          <div>
            <p className="font-display text-lg font-semibold leading-tight tracking-tight text-ink">
              {profile.firstName} {profile.lastName}
            </p>
            <p className="text-xs text-ink-muted">{t.footer.note}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 font-mono text-xs text-ink-muted">
          <a href={profile.github} target="_blank" rel="noreferrer" className={linkClass}>
            GitHub
          </a>
          <span aria-hidden="true" className="text-gold">
            ✦
          </span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
            LinkedIn
          </a>
          <span aria-hidden="true" className="text-gold">
            ✦
          </span>
          <a href={`mailto:${profile.email}`} className={linkClass}>
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
