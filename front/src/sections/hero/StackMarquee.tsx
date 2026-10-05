import { motion, type MotionValue } from 'motion/react'
import { profile } from '@/content'

const half = Math.ceil(profile.stack.length / 2)
const columns = [profile.stack.slice(0, half), profile.stack.slice(half)]

interface StackMarqueeProps {
  x: MotionValue<number>
  y: MotionValue<number>
}

// Dos columnas de tecnologías que corren en sentidos opuestos.
// Es decorativo: la lista real de tecnologías está en la sección Stack.
export function StackMarquee({ x, y }: StackMarqueeProps) {
  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y }}
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-[40%] gap-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_62%,transparent_88%)] lg:flex"
    >
      {columns.map((words, column) => (
        <ul
          key={column}
          className={`flex flex-1 flex-col gap-6 font-display text-6xl font-semibold tracking-tighter xl:text-7xl ${
            column === 0 ? 'animate-marquee-up' : 'animate-marquee-down'
          }`}
        >
          {/* La lista se duplica para que el ciclo no tenga corte. */}
          {[...words, ...words].map((word, i) => (
            <li key={i} className={i % 3 === 1 ? 'text-secondary/45' : 'text-ink/10'}>
              {word}
            </li>
          ))}
        </ul>
      ))}
    </motion.div>
  )
}
