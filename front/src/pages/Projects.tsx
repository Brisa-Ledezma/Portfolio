import { ArrowUpRightIcon, GithubLogoIcon } from '@phosphor-icons/react'
import { ContactBand } from '@/components/ui/ContactBand'
import { PageHeader } from '@/components/ui/PageHeader'
import { Reveal } from '@/components/ui/Reveal'
import type { Project } from '@/content'
import { useLanguage } from '@/providers/language'

const label = 'font-mono text-xs text-gold'
const linkClass =
  'group inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-2 text-sm font-medium transition-colors hover:border-gold hover:bg-gold/10'

function ProjectLinks({ project }: { project: Project }) {
  const { t } = useLanguage()

  if (!project.repo && !project.demo) {
    return <p className="font-mono text-xs text-ink-muted">{t.projects.repoPending}</p>
  }

  return (
    <div className="flex flex-wrap gap-3">
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noreferrer" className={linkClass}>
          {t.projects.demoLabel}
          <ArrowUpRightIcon size={14} className="text-gold" />
        </a>
      )}
      {project.repo && (
        <a href={project.repo} target="_blank" rel="noreferrer" className={linkClass}>
          <GithubLogoIcon size={16} />
          {t.projects.repoLabel}
          <ArrowUpRightIcon size={14} className="text-gold" />
        </a>
      )}
    </div>
  )
}

// Cada proyecto se lee en el orden que busca quien evalúa:
// problema, solución, mi aporte y para qué se usó cada tecnología.
export function Projects() {
  const { t } = useLanguage()

  return (
    <>
      <PageHeader title={t.projects.title} intro={t.projects.intro} />

      <div className="container-page">
        {t.projects.items.map((project) => (
          <Reveal key={project.name}>
            <article className="grid gap-10 border-t border-line py-12 md:grid-cols-12 md:py-20">
              <div className="flex flex-col gap-5 md:col-span-4">
                {project.featured && (
                  <span className="w-fit rounded-full bg-block px-3 py-1 font-mono text-xs text-on-block">
                    ✦ {t.projects.featuredLabel}
                  </span>
                )}
                <h2 className="font-display text-4xl font-bold leading-none tracking-tighter md:text-5xl">
                  {project.name}
                </h2>
                <p className="font-mono text-xs text-detail md:text-sm">{project.kind}</p>
                <ProjectLinks project={project} />
              </div>

              <div className="space-y-8 md:col-span-7 md:col-start-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className={label}>{t.projects.problemLabel}</h3>
                    <p className="mt-2 leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h3 className={label}>{t.projects.solutionLabel}</h3>
                    <p className="mt-2 leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                <div>
                  <h3 className={label}>{t.projects.contributionLabel}</h3>
                  <ul className="mt-3 space-y-2.5">
                    {project.contribution.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed text-ink-muted">
                        <span aria-hidden="true" className="mt-[0.15em] text-gold">
                          ✦
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className={label}>{t.projects.stackLabel}</h3>
                  <dl className="mt-3 divide-y divide-line border-y border-line">
                    {project.stack.map((tech) => (
                      <div key={tech.name} className="grid gap-1 py-3 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-6">
                        <dt className="font-mono text-sm">{tech.name}</dt>
                        <dd className="text-sm text-ink-muted">{tech.use}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <ContactBand />
    </>
  )
}
