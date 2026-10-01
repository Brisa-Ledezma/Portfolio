import { useMotionValue, useSpring, useTransform } from 'motion/react'
import { useRef, type PointerEvent } from 'react'
import { profile } from '@/content'
import { gsap, useGSAP } from '@/lib/gsap'
import { useLanguage } from '@/providers/language'
import { RoleRotator } from './RoleRotator'
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

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Entrada: el nombre sube letra por letra y después aparece el resto.
        gsap
          .timeline({ defaults: { ease: 'power4.out' } })
          .from('[data-char]', { yPercent: 115, duration: 1.1, stagger: 0.045 })
          .from('[data-reveal]', { y: 24, autoAlpha: 0, duration: 0.8, stagger: 0.12 }, '-=0.55')

        // Fondo: dos manchas de color que derivan lento, para que el hero nunca quede quieto.
        gsap.to('[data-blob="a"]', {
          xPercent: 22,
          yPercent: -14,
          scale: 1.15,
          duration: 16,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
        gsap.to('[data-blob="b"]', {
          xPercent: -18,
          yPercent: 16,
          scale: 0.9,
          duration: 20,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })
    },
    { scope },
  )

  return (
    <section
      id="top"
      ref={scope}
      onPointerMove={onPointerMove}
      className="relative isolate flex min-h-[100dvh] flex-col justify-end overflow-hidden"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          data-blob="a"
          className="absolute -left-[10%] top-[8%] size-[55vmax] rounded-full bg-(--blob-a) opacity-25 blur-[110px] dark:opacity-40"
        />
        <div
          data-blob="b"
          className="absolute -right-[12%] bottom-[-10%] size-[48vmax] rounded-full bg-(--blob-b) opacity-30 blur-[120px] dark:opacity-35"
        />
      </div>

      <StackMarquee x={marqueeX} y={marqueeY} />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 pt-24 md:px-10 md:pb-16">
        <p data-reveal className="mb-5 font-mono text-sm text-ink-muted md:text-base">
          <RoleRotator key={language} roles={t.hero.roles} />
        </p>

        <h1
          aria-label={`${profile.firstName} ${profile.lastName}`}
          className="font-display text-[clamp(4rem,15.5vw,13.5rem)] font-bold leading-[0.84] tracking-[-0.045em]"
        >
          <span aria-hidden="true">
            <SplitWord word={profile.firstName} />
            <SplitWord word={profile.lastName} className="text-accent" />
          </span>
        </h1>

        <div className="mt-8 flex flex-col gap-7 border-t border-line pt-7 md:mt-10 md:flex-row md:items-end md:justify-between">
          <p data-reveal className="max-w-[46ch] text-lg leading-relaxed text-ink-muted md:text-xl">
            {t.hero.intro}
          </p>

          <div data-reveal className="flex shrink-0 gap-3">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              {t.hero.primaryCta}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink/25 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink active:scale-[0.98]"
            >
              {t.hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
