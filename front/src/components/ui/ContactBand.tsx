import { ArrowUpRightIcon } from '@phosphor-icons/react'
import { Link } from 'react-router'
import { useLanguage } from '@/providers/language'
import { Reveal } from './Reveal'

// Bloque de cierre que invita a escribir. Es el único bloque bordó pleno de cada página.
export function ContactBand() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <Reveal>
        <div className="flex flex-col gap-10 rounded-3xl bg-block px-7 py-12 text-on-block md:flex-row md:items-end md:justify-between md:px-14 md:py-20">
          <div>
            <h2 className="max-w-[16ch] font-display text-4xl font-bold leading-[0.95] tracking-tighter md:text-6xl">
              {t.home.contactTitle}
            </h2>
            <p className="mt-5 max-w-[40ch] text-lg text-on-block/75">{t.home.contactBody}</p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-on-block px-7 py-3.5 text-sm font-medium text-block transition-transform hover:-translate-y-0.5 active:scale-[0.98] md:self-auto"
          >
            {t.home.contactCta}
            <ArrowUpRightIcon size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
