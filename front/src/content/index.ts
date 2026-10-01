// Todo el texto visible del sitio vive acá, en español e inglés.
// Para editar el contenido se modifica este archivo: no hay panel de administración.

export type Language = 'es' | 'en'

export interface Content {
  header: {
    themeToLight: string
    themeToDark: string
    languageLabel: string
  }
  hero: {
    roles: string[]
    intro: string
    primaryCta: string
    secondaryCta: string
  }
}

export const profile = {
  firstName: 'Brisa',
  lastName: 'Ledezma',
  stack: [
    'React',
    'TypeScript',
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'Java',
    'MySQL',
    'MongoDB',
    'Docker',
    'Tailwind',
    'Git',
    'QA',
  ],
} as const

export const content: Record<Language, Content> = {
  es: {
    header: {
      themeToLight: 'Cambiar a tema claro',
      themeToDark: 'Cambiar a tema oscuro',
      languageLabel: 'Idioma',
    },
    hero: {
      roles: ['Analista de sistemas', 'Desarrolladora full stack', 'Desarrollo asistido por IA'],
      intro:
        'Construyo aplicaciones web y automatizaciones de punta a punta, con IA como herramienta de trabajo diaria.',
      primaryCta: 'Ver proyectos',
      secondaryCta: 'Contacto',
    },
  },
  en: {
    header: {
      themeToLight: 'Switch to light theme',
      themeToDark: 'Switch to dark theme',
      languageLabel: 'Language',
    },
    hero: {
      roles: ['Systems analyst', 'Full stack developer', 'AI-assisted development'],
      intro: 'I build web apps and automations end to end, with AI as an everyday working tool.',
      primaryCta: 'View projects',
      secondaryCta: 'Contact',
    },
  },
}
