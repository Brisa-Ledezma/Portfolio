import { AnimatePresence, motion } from 'motion/react'
import { useLocation, useOutlet } from 'react-router'
import { scrollToTop } from '@/lib/scroll'
import { Footer } from './Footer'
import { Header } from './Header'

// Estructura común a todas las páginas. Al navegar, la página actual sale,
// el scroll vuelve arriba y recién entonces entra la nueva.
export function Layout() {
  const location = useLocation()
  const outlet = useOutlet()

  return (
    <>
      <Header />
      <AnimatePresence mode="wait" onExitComplete={scrollToTop}>
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {outlet}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  )
}
