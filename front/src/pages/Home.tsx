import { ArrowRightIcon } from '@phosphor-icons/react'
import { Link } from 'react-router'
import { ContactBand } from '@/components/ui/ContactBand'
import { Reveal } from '@/components/ui/Reveal'
import { useLanguage } from '@/providers/language'
import { Hero } from '@/sections/hero/Hero'

const linkClass =
  'group items-center gap-2 border-b border-ink/30 pb-1 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent'

export function Home() {
  const { t } = useLanguage()

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-5 pt-24 md:px-10 md:pt-36">
        <Reveal className="flex items-end justify-between gap-6">
          <h2 className="font-display text-5xl font-bold tracking-tighter md:text-7xl">
            {t.home.projectsTitle}
          </h2>
          <Link to="/projects" className={`${linkClass} hidden md:inline-flex`}>
            {t.home.projectsLink}
            <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <ul className="mt-10 border-t border-line md:mt-14">
          {t.projects.items.map((project, i) => (
            <li key={project.name} className="border-b border-line">
              <Reveal delay={i * 0.06}>
                <Link
                  to="/projects"
                  className="group flex flex-col gap-2 py-7 md:flex-row md:items-baseline md:justify-between md:py-9"
                >
                  <span className="font-display text-3xl font-semibold tracking-tight transition-[color,transform] duration-300 group-hover:translate-x-3 group-hover:text-accent md:text-5xl">
                    {project.name}
                  </span>
                  <span className="font-mono text-xs text-ink-muted md:text-sm">
                    {project.stack.slice(0, 3).join(' / ')}
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <Link to="/projects" className={`${linkClass} mt-8 inline-flex md:hidden`}>
          {t.home.projectsLink}
          <ArrowRightIcon size={14} />
        </Link>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pt-24 md:grid-cols-12 md:px-10 md:pt-40">
        <Reveal className="md:col-span-9 md:col-start-2">
          <p className="font-display text-3xl font-medium leading-[1.15] tracking-tight md:text-5xl">
            {t.home.aboutStatement}
          </p>
          <Link to="/about" className={`${linkClass} mt-10 inline-flex`}>
            {t.home.aboutLink}
            <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>

      <ContactBand />
    </>
  )
}
