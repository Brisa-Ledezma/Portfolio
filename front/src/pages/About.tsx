import { ContactBand } from '@/components/ui/ContactBand'
import { PageHeader } from '@/components/ui/PageHeader'
import { Reveal } from '@/components/ui/Reveal'
import { useLanguage } from '@/providers/language'

const sectionTitle = 'font-display text-3xl font-bold tracking-tighter md:text-5xl'

export function About() {
  const { t } = useLanguage()
  const [lead, ...rest] = t.about.bio

  return (
    <>
      <PageHeader title={t.about.title} />

      <section className="container-page grid gap-8 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <p className="font-display text-3xl font-medium leading-[1.15] tracking-tight md:text-4xl">{lead}</p>
        </Reveal>
        <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-ink-muted md:col-span-4 md:col-start-9">
          {rest.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      </section>

      <section className="container-page pt-24 md:pt-36">
        <Reveal>
          <h2 className={sectionTitle}>{t.about.experienceTitle}</h2>
        </Reveal>
        <div className="mt-10 border-t border-line">
          {t.about.experience.map((job) => (
            <Reveal key={job.role}>
              <article className="grid gap-4 border-b border-line py-9 md:grid-cols-12">
                <p className="font-mono text-xs text-detail md:col-span-3 md:pt-2 md:text-sm">{job.period}</p>
                <div className="md:col-span-9">
                  <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{job.role}</h3>
                  <p className="mt-1 text-accent">{job.place}</p>
                  <ul className="mt-4 max-w-[62ch] space-y-2 leading-relaxed text-ink-muted">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page pt-24 md:pt-36">
        <Reveal>
          <h2 className={sectionTitle}>{t.about.educationTitle}</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {t.about.education.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="flex h-full flex-col justify-between gap-10 rounded-3xl bg-surface p-7 ring-1 ring-gold/20">
                <div className="flex items-center justify-between font-mono text-xs text-detail">
                  {item.period}
                  <span aria-hidden="true" className="text-base text-gold">
                    ✦
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm text-ink-muted">{item.place}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page pt-24 md:pt-36">
        <Reveal>
          <h2 className={sectionTitle}>{t.about.stackTitle}</h2>
        </Reveal>
        <dl className="mt-10 border-t border-line">
          {t.about.stackGroups.map((group) => (
            <Reveal key={group.label}>
              <div className="grid gap-3 border-b border-line py-6 md:grid-cols-12 md:items-baseline">
                <dt className="font-mono text-xs text-detail md:col-span-3 md:text-sm">{group.label}</dt>
                <dd className="font-display text-2xl font-medium leading-snug tracking-tight md:col-span-9 md:text-3xl">
                  {group.items.join(', ')}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </section>

      <ContactBand />
    </>
  )
}
