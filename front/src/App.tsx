import { MotionConfig } from 'motion/react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { Layout } from '@/components/layout/Layout'
import { About } from '@/pages/About'
import { Contact } from '@/pages/Contact'
import { Home } from '@/pages/Home'
import { Projects } from '@/pages/Projects'
import { LanguageProvider } from '@/providers/language'
import { SmoothScroll } from '@/providers/smooth-scroll'
import { ThemeProvider } from '@/providers/theme'

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {/* reducedMotion="user": respeta la preferencia del sistema en todas las animaciones de Motion. */}
        <MotionConfig reducedMotion="user">
          <SmoothScroll>
            <BrowserRouter>
              <Routes>
                <Route element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </SmoothScroll>
        </MotionConfig>
      </LanguageProvider>
    </ThemeProvider>
  )
}
