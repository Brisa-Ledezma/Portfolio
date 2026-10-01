import { Header } from '@/components/layout/Header'
import { LanguageProvider } from '@/providers/language'
import { SmoothScroll } from '@/providers/smooth-scroll'
import { ThemeProvider } from '@/providers/theme'
import { Hero } from '@/sections/hero/Hero'

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SmoothScroll>
          <Header />
          <main>
            <Hero />
          </main>
        </SmoothScroll>
      </LanguageProvider>
    </ThemeProvider>
  )
}
