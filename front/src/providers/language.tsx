import { createContext, use, useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { content, type Content, type Language } from '@/content'
import { readStorage, writeStorage } from '@/lib/storage'

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: Content
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function initialLanguage(): Language {
  const stored = readStorage('language')
  if (stored === 'es' || stored === 'en') return stored
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(initialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next)
    writeStorage('language', next)
  }, [])

  const value = useMemo(
    () => ({ language, setLanguage, t: content[language] }),
    [language, setLanguage],
  )

  return <LanguageContext value={value}>{children}</LanguageContext>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage(): LanguageContextValue {
  const context = use(LanguageContext)
  if (!context) throw new Error('useLanguage debe usarse dentro de LanguageProvider')
  return context
}
