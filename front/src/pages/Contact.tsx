import { ArrowUpRightIcon } from '@phosphor-icons/react'
import { ContactForm } from '@/components/contact/ContactForm'
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

      <section className="container-page grid gap-16 pb-24 md:grid-cols-12 md:pb-36">
        <Reveal className="relative md:col-span-7">
          <ContactForm />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-14 md:col-span-4 md:col-start-9">
          <div>
            <p className="font-mono text-xs text-detail md:text-sm">{t.contact.emailLabel}</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 inline-block break-words border-b-2 border-gold pb-1 font-display text-xl font-semibold tracking-tight transition-colors hover:text-accent md:text-2xl"
            >
              {profile.email}
            </a>
          </div>

          <div>
            <p className="font-mono text-xs text-detail md:text-sm">{t.contact.elsewhereLabel}</p>
            <ul className="mt-4 border-t border-line">
              {elsewhere.map((link) => (
                <li key={link.label} className="border-b border-line">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between py-5 font-display text-2xl font-semibold tracking-tight transition-colors hover:text-accent md:text-3xl"
                  >
                    {link.label}
                    <ArrowUpRightIcon className="size-6 text-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </>
  )
}
