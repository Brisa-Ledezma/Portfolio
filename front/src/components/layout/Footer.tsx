import { profile } from '@/content'
import { useLanguage } from '@/providers/language'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-line px-5 py-8 text-sm text-ink-muted md:flex-row md:items-center md:justify-between md:px-10">
      <p>{t.footer.note}</p>
      <div className="flex gap-6 font-mono text-xs">
        <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
          LinkedIn
        </a>
        <a href={`mailto:${profile.email}`} className="transition-colors hover:text-ink">
          Email
        </a>
      </div>
    </footer>
  )
}
