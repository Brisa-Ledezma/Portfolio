import { MoonIcon, SunIcon } from '@phosphor-icons/react'
import type { Language } from '@/content'
import { useLanguage } from '@/providers/language'
import { useTheme } from '@/providers/theme'

const languages: Language[] = ['es', 'en']

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#top" className="font-mono text-sm tracking-tight text-ink">
          brisa.ledezma
        </a>

        <div className="flex items-center gap-2">
          <div
            role="group"
            aria-label={t.header.languageLabel}
            className="flex rounded-full border border-line p-0.5 font-mono text-xs"
          >
            {languages.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLanguage(code)}
                aria-pressed={language === code}
                className="rounded-full px-3 py-1.5 uppercase text-ink-muted transition-colors aria-pressed:bg-ink aria-pressed:text-bg"
              >
                {code}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.header.themeToLight : t.header.themeToDark}
            className="grid size-9 place-items-center rounded-full border border-line text-ink transition-transform active:scale-95"
          >
            {theme === 'dark' ? <SunIcon size={16} /> : <MoonIcon size={16} />}
          </button>
        </div>
      </div>
    </header>
  )
}
