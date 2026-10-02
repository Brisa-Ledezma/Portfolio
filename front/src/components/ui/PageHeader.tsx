import { motion } from 'motion/react'

interface PageHeaderProps {
  title: string
  intro?: string
}

const ease = [0.22, 1, 0.36, 1] as const

// Encabezado común de las páginas internas: el título sube desde abajo de su línea.
export function PageHeader({ title, intro }: PageHeaderProps) {
  return (
    <header className="mx-auto max-w-7xl px-5 pb-12 pt-32 md:px-10 md:pb-16 md:pt-44">
      <h1 className="overflow-hidden pb-[0.1em] font-display text-[clamp(3.25rem,11vw,9rem)] font-bold leading-[0.9] tracking-[-0.04em]">
        <motion.span
          className="block"
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, ease }}
        >
          {title}
        </motion.span>
      </h1>
      {intro && (
        <motion.p
          className="mt-8 max-w-[52ch] text-lg leading-relaxed text-ink-muted md:text-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
        >
          {intro}
        </motion.p>
      )}
    </header>
  )
}
