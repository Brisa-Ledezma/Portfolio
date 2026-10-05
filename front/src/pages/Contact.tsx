import { ArrowUpRightIcon } from '@phosphor-icons/react'
import { PageHeader } from '@/components/ui/PageHeader'
import { Reveal } from '@/components/ui/Reveal'
import { profile } from '@/content'
import { useLanguage } from '@/providers/language'

const elsewhere = [
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'GitHub', href: profile.github },
]

export function Contact() {
  const { t } = useLanguage()

  return (
    <>
      <PageHeader title={t.contact.title} intro={t.contact.body} />

      <section className="container-page pb-24 md:pb-36">
        <Reveal>
          <p className="font-mono text-xs text-detail md:text-sm">{t.contact.emailLabel}</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-3 inline-block break-words border-b-2 border-gold pb-2 font-display text-[clamp(1.25rem,0.25rem+4.6vw,5rem)] font-semibold leading-tight tracking-tight transition-colors hover:text-accent"
          >
            {profile.email}
          </a>
        </Reveal>

        <Reveal delay={0.1} className="mt-20">
          <p className="font-mono text-xs text-detail md:text-sm">{t.contact.elsewhereLabel}</p>
          <ul className="mt-4 border-t border-line">
            {elsewhere.map((link) => (
              <li key={link.label} className="border-b border-line">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between py-6 font-display text-3xl font-semibold tracking-tight transition-colors hover:text-accent md:text-5xl"
                >
                  {link.label}
                  <ArrowUpRightIcon className="size-7 text-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:size-10" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  )
}
