import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'

const INTERVAL_MS = 2600

// Muestra los roles de a uno: comunica que el perfil cubre varios puestos
// sin ocupar tres líneas del hero.
export function RoleRotator({ roles }: { roles: string[] }) {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduceMotion) return
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), INTERVAL_MS)
    return () => clearInterval(id)
  }, [reduceMotion, roles.length])

  const role = roles[index % roles.length]

  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={role}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block whitespace-nowrap"
        >
          {role}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
