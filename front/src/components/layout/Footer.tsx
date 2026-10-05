import { Logo } from '@/components/brand/Logo'
import { profile } from '@/content'
import { useLanguage } from '@/providers/language'

const linkClass = 'transition-colors hover:text-gold'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative overflow-hidden">
      <div className="container-page">
        <div className="h-px bg-linear-to-r from-transparent via-gold/60 to-transparent" />

        <div className="flex flex-col gap-4 py-8 text-sm text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>{t.footer.note}</p>
          <div className="flex items-center gap-5 font-mono text-xs">
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

        {/* Firma de marca al pie de todas las páginas. */}
        <div aria-hidden="true" className="flex items-end gap-[1.5vw] pb-6 pt-4 md:pb-10">
          <Logo className="size-[clamp(2.75rem,1rem+6vw,8.5rem)] shrink-0" />
          <p className="font-display text-[clamp(2.5rem,12vw,17rem)] font-bold leading-[0.78] tracking-[-0.055em] text-accent">
            brisa ledezma
          </p>
        </div>
      </div>
    </footer>
  )
}
