import { motion, type MotionValue } from 'motion/react'
import { profile } from '@/content'

const half = Math.ceil(profile.stack.length / 2)
const columns = [profile.stack.slice(0, half), profile.stack.slice(half)]

// Cuántas veces se repite cada lista. La animación recorre exactamente la mitad
// de la columna, así que esa mitad tiene que ser más alta que la pantalla para
// que el ciclo empalme sin que se vea el corte.
const COPIES = 4

// En oscuro el dorado translúcido se vuelve marrón sobre el fondo casi negro,
// así que ese tono pasa a un gris claro tenue.
const tones = ['text-ink/10', 'text-secondary/50', 'text-ink/10', 'text-gold/45 dark:text-ink/20']

interface StackMarqueeProps {
  x: MotionValue<number>
  y: MotionValue<number>
}

// Dos columnas de tecnologías que corren en sentidos opuestos, sin fin.
// Es decorativo: la lista real de tecnologías está en la página Sobre mí.
export function StackMarquee({ x, y }: StackMarqueeProps) {
  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y }}
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-[40%] gap-[3vw] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_62%,transparent_88%)] lg:flex"
    >
      {columns.map((words, column) => (
        <ul
          key={column}
          className={`h-max flex-1 self-start font-display text-[clamp(3.5rem,1rem+3.6vw,6rem)] font-semibold leading-none tracking-tighter will-change-transform ${
            column === 0 ? 'animate-marquee-up' : 'animate-marquee-down'
          }`}
        >
          {/* h-max + self-start: la columna mide lo que su contenido y no lo que el
              contenedor; si no, el -50% de la animación no coincide con media lista
              y el ciclo salta. */}
          {/* El espacio va dentro de cada ítem (padding) y no como gap,
              para que las copias midan exactamente lo mismo. */}
          {Array.from({ length: COPIES }, () => words)
            .flat()
            .map((word, i) => (
              <li key={i} className={`pb-[0.35em] ${tones[(i + column) % tones.length]}`}>
                {word}
              </li>
            ))}
        </ul>
      ))}
    </motion.div>
  )
}
