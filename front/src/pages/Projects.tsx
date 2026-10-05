import { ArrowUpRightIcon } from '@phosphor-icons/react'
import { ContactBand } from '@/components/ui/ContactBand'
import { PageHeader } from '@/components/ui/PageHeader'
import { Reveal } from '@/components/ui/Reveal'
import { useLanguage } from '@/providers/language'

export function Projects() {
  const { t } = useLanguage()

  return (
    <>
      <PageHeader title={t.projects.title} intro={t.projects.intro} />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {t.projects.items.map((project) => (
          <Reveal key={project.name}>
            <article className="grid gap-8 border-t border-line py-12 md:grid-cols-12 md:py-20">
              <div className="md:col-span-5">
                <h2 className="font-display text-4xl font-bold leading-none tracking-tighter md:text-6xl">
                  {project.name}
                </h2>
                <p className="mt-4 font-mono text-xs text-ink-muted md:text-sm">{project.kind}</p>
              </div>

              <div className="md:col-span-6 md:col-start-7">
                <p className="text-xl leading-relaxed md:text-2xl">{project.summary}</p>

                <h3 className="mt-8 font-mono text-xs text-accent">{t.projects.roleLabel}</h3>
                <p className="mt-2 max-w-[60ch] leading-relaxed text-ink-muted">{project.role}</p>

                <ul className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="rounded-full border border-line px-3.5 py-1.5 font-mono text-xs">
                      {tech}
                    </li>
                  ))}
                </ul>

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-8 inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                  >
                    {t.projects.repoLabel}
                    <ArrowUpRightIcon size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <ContactBand />
    </>
  )
}
