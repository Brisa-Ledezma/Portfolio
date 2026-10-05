import { ListIcon, MoonIcon, SunIcon, XIcon } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Logo } from '@/components/brand/Logo'
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
    <header className="fixed inset-x-0 top-0 z-40">
      {/* Fondo que se desvanece hacia abajo: separa el menú del contenido sin cortar la página. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-bg/80 via-bg/35 to-transparent backdrop-blur-[3px] [mask-image:linear-gradient(to_bottom,black_35%,transparent)]"
      />

      <div className="container-page relative flex h-18 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 text-ink" onClick={() => setMenuOpen(false)}>
          <Logo className="size-8" />
          <span className="font-mono text-sm tracking-tight">brisa.ledezma</span>
        </Link>

        <nav className="hidden items-center gap-9 text-sm lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className="relative py-1 text-ink-muted transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100 aria-[current=page]:text-ink aria-[current=page]:after:scale-x-100"
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
            className="grid size-9 place-items-center rounded-full border border-line text-gold transition-transform active:scale-95"
          >
            {theme === 'dark' ? <SunIcon size={16} /> : <MoonIcon size={16} />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
            className="grid size-9 place-items-center rounded-full border border-line text-ink transition-transform active:scale-95 lg:hidden"
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
            className="container-page relative flex h-[calc(100dvh-4.5rem)] flex-col justify-center gap-3 bg-bg lg:hidden"
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
