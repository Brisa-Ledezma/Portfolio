import { ListIcon, MoonIcon, SunIcon, XIcon } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import type { Language } from '@/content'
import { useLanguage } from '@/providers/language'
import { useTheme } from '@/providers/theme'

const languages: Language[] = ['es', 'en']

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/projects', label: t.nav.projects },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-bg/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
        <Link to="/" className="font-mono text-sm tracking-tight text-ink" onClick={() => setMenuOpen(false)}>
          brisa.ledezma
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className="text-ink-muted transition-colors hover:text-ink aria-[current=page]:text-accent"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

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

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
            className="grid size-9 place-items-center rounded-full border border-line text-ink transition-transform active:scale-95 md:hidden"
          >
            {menuOpen ? <XIcon size={16} /> : <ListIcon size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="flex h-[calc(100dvh-4rem)] flex-col justify-center gap-2 bg-bg px-5 md:hidden"
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMenuOpen(false)}
                className="font-display text-5xl font-bold tracking-tighter text-ink aria-[current=page]:text-accent"
              >
                {link.label}
              </NavLink>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
