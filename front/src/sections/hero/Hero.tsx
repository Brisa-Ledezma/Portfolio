import { useMotionValue, useSpring, useTransform } from 'motion/react'
import { useRef, type PointerEvent } from 'react'
import { Link } from 'react-router'
import { profile } from '@/content'
import { gsap, useGSAP } from '@/lib/gsap'
import { useLanguage } from '@/providers/language'
import { RoleList } from './RoleList'
import { StackMarquee } from './StackMarquee'

function SplitWord({ word, className }: { word: string; className?: string }) {
  return (
    <span className={`block overflow-hidden pb-[0.08em] ${className ?? ''}`}>
      {[...word].map((char, i) => (
        <span key={i} data-char className="inline-block will-change-transform">
          {char}
        </span>
      ))}
    </span>
  )
}

export function Hero() {
  const { t, language } = useLanguage()
  const scope = useRef<HTMLElement>(null)

  // Posición del puntero normalizada a [-0.5, 0.5]; mueve apenas el fondo.
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const spring = { stiffness: 60, damping: 20, mass: 0.6 }
  const marqueeX = useSpring(useTransform(pointerX, [-0.5, 0.5], [18, -18]), spring)
  const marqueeY = useSpring(useTransform(pointerY, [-0.5, 0.5], [12, -12]), spring)

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse') return
    const rect = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5)
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  // Entrada: el nombre sube letra por letra, la línea dorada se traza
  // y los roles se descubren uno detrás de otro.
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap
          .timeline({ defaults: { ease: 'power4.out' } })
          .from('[data-char]', { yPercent: 115, duration: 1.1, stagger: 0.045 })
          .from('[data-line]', { scaleX: 0, duration: 1.2, ease: 'power3.inOut' }, '-=0.7')
          .from(
            '[data-role]',
            { clipPath: 'inset(0 100% 0 0)', duration: 0.7, stagger: 0.18, ease: 'power2.out' },
            '-=0.9',
          )
          .from('[data-role-star]', { scale: 0, rotate: -90, duration: 0.5, stagger: 0.18 }, '<0.2')
          .from('[data-reveal]', { y: 24, autoAlpha: 0, duration: 0.8, stagger: 0.12 }, '-=0.6')
      })
    },
    { scope, dependencies: [language], revertOnUpdate: true },
  )

  // Fondo: manchas de color que derivan lento, para que el hero nunca quede quieto.
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const drift = { repeat: -1, yoyo: true, ease: 'sine.inOut' }
        gsap.to('[data-blob="a"]', { xPercent: 22, yPercent: -14, scale: 1.15, duration: 16, ...drift })
        gsap.to('[data-blob="b"]', { xPercent: -18, yPercent: 16, scale: 0.9, duration: 20, ...drift })
        gsap.to('[data-blob="c"]', { xPercent: -26, yPercent: 20, scale: 1.2, duration: 24, ...drift })
      })
    },
    { scope },
  )

  return (
    <section
      ref={scope}
      onPointerMove={onPointerMove}
      className="relative isolate flex min-h-[100dvh] flex-col justify-end overflow-hidden"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          data-blob="a"
          className="absolute -left-[10%] top-[8%] size-[55vmax] rounded-full bg-(--blob-a) opacity-25 blur-[110px] dark:opacity-30"
        />
        <div
          data-blob="b"
          className="absolute -right-[12%] bottom-[-10%] size-[48vmax] rounded-full bg-(--blob-b) opacity-30 blur-[120px] dark:opacity-40"
        />
        <div
          data-blob="c"
          className="absolute right-[18%] top-[-12%] size-[30vmax] rounded-full bg-(--blob-c) opacity-25 blur-[100px] dark:opacity-15"
        />
      </div>

      <StackMarquee x={marqueeX} y={marqueeY} />

      <div className="container-page relative pb-12 pt-28 md:pb-16">
        <h1
          aria-label={`${profile.firstName} ${profile.lastName}`}
          className="font-display text-[clamp(4rem,1.5rem+11.5vw,15rem)] font-bold leading-[0.84] tracking-[-0.045em]"
        >
          <span aria-hidden="true">
            <SplitWord word={profile.firstName} />
            <SplitWord word={profile.lastName} className="text-accent" />
          </span>
        </h1>

        <div className="mt-7 md:mt-9">
          <RoleList roles={t.hero.roles} />
        </div>

        <div
          data-line
          className="mt-8 h-px origin-left bg-linear-to-r from-gold via-gold/50 to-transparent md:mt-10"
        />

        <div className="flex flex-col gap-7 pt-7 md:flex-row md:items-end md:justify-between">
          <p data-reveal className="max-w-[46ch] text-lg leading-relaxed text-ink-muted md:text-xl">
            {t.hero.intro}
          </p>

          <div data-reveal className="flex shrink-0 gap-3">
            <Link
              to="/projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              {t.hero.primaryCta}
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-gold/60 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-gold hover:bg-gold/10 active:scale-[0.98]"
            >
              {t.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
