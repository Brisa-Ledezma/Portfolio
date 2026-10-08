// Todo el texto visible del sitio vive acá, en español e inglés.
// Para editar el contenido se modifica este archivo: no hay panel de administración.

export type Language = 'es' | 'en'

export interface Project {
  name: string
  kind: string
  summary: string
  role: string
  stack: string[]
  repo?: string
}

export interface Content {
  nav: {
    home: string
    projects: string
    about: string
    contact: string
    openMenu: string
    closeMenu: string
  }
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
  home: {
    projectsTitle: string
    projectsLink: string
    aboutStatement: string
    aboutLink: string
    contactTitle: string
    contactBody: string
    contactCta: string
  }
  projects: {
    title: string
    intro: string
    roleLabel: string
    repoLabel: string
    items: Project[]
  }
  about: {
    title: string
    bio: string[]
    experienceTitle: string
    experience: { role: string; place: string; period: string; points: string[] }[]
    educationTitle: string
    education: { title: string; place: string; period: string }[]
    stackTitle: string
    stackGroups: { label: string; items: string[] }[]
  }
  contact: {
    title: string
    body: string
    emailLabel: string
    elsewhereLabel: string
  }
  footer: {
    note: string
  }
}

export const profile = {
  firstName: 'Brisa',
  lastName: 'Ledezma',
  email: 'brisaledezma000@gmail.com',
  github: 'https://github.com/Brisa-Ledezma',
  linkedin: 'https://www.linkedin.com/in/brisa-ledezma',
  stack: [
    'React',
    'TypeScript',
    'Node.js',
    'Next.js',
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

const repos = {
  portfolio: 'https://github.com/Brisa-Ledezma/Portfolio',
  gym: 'https://github.com/Brisa-Ledezma/Proyecto_gimnasio-',
}

export const content: Record<Language, Content> = {
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Sobre mí',
      contact: 'Contacto',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
    },
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
    home: {
      projectsTitle: 'Proyectos',
      projectsLink: 'Ver todos en detalle',
      aboutStatement:
        'Estudio Análisis de Sistemas y vengo de hacer QA y de enseñar informática. Me gusta entender el problema antes de escribir código.',
      aboutLink: 'Conocer más sobre mí',
      contactTitle: 'Busco mi primera experiencia en desarrollo.',
      contactBody: 'Si tenés un puesto, un proyecto o una pregunta, escribime.',
      contactCta: 'Hablemos',
    },
    projects: {
      title: 'Proyectos',
      intro:
        'Trabajos de formación y personales. En cada uno cuento qué resuelve y qué parte hice yo.',
      roleLabel: 'Mi parte',
      repoLabel: 'Ver repositorio',
      items: [
        {
          name: 'JosBy',
          kind: 'Plataforma web, trabajo en equipo',
          summary: 'Plataforma que conecta freelancers con empresas que buscan contratar servicios.',
          role: 'Desarrollé los perfiles de usuario, con edición de datos personales y carga de imágenes, y colaboré en las interfaces de interacción entre freelancers y empresas.',
          stack: ['MongoDB', 'Express', 'React', 'Node.js'],
        },
        {
          name: 'Sistema de Facturación',
          kind: 'Aplicación de escritorio',
          summary: 'Sistema para emitir y consultar facturas sobre una base de datos relacional.',
          role: 'Modelé la base de datos, implementé altas, bajas y modificaciones, y resolví la integración entre Java y MySQL.',
          stack: ['Java', 'MySQL', 'SQL'],
        },
        {
          name: 'Gestión de Gimnasio',
          kind: 'Aplicación de escritorio',
          summary: 'Sistema para administrar la información de un gimnasio.',
          role: 'Diseñé el modelo de datos, las funcionalidades de alta, baja y modificación, y las consultas SQL con JOIN que integran la información.',
          stack: ['Java', 'MySQL', 'SQL'],
          repo: repos.gym,
        },
        {
          name: 'Este portfolio',
          kind: 'Aplicación full stack',
          summary:
            'El sitio que estás viendo: front animado, API propia y todo el entorno en contenedores.',
          role: 'Definí el stack, la arquitectura de ramas y los criterios de seguridad, y lo construí con desarrollo asistido por IA.',
          stack: ['React', 'TypeScript', 'Tailwind', 'NestJS', 'PostgreSQL', 'Docker'],
          repo: repos.portfolio,
        },
      ],
    },
    about: {
      title: 'Sobre mí',
      bio: [
        'Soy estudiante avanzada de la Tecnicatura Superior en Análisis de Sistemas y desarrolladora full stack junior.',
        'Trabajo con JavaScript, React, Node.js y Java, sobre bases de datos relacionales y no relacionales. Uso IA y automatizaciones para avanzar más rápido, sin dejar de entender lo que entrego.',
        'Mi paso por QA me dejó el hábito de buscar el error antes de que lo encuentre otra persona. Enseñar informática me entrenó para explicar lo técnico con claridad.',
      ],
      experienceTitle: 'Experiencia',
      experience: [
        {
          role: 'Capacitadora en informática',
          place: 'Municipalidad de General Pueyrredón, prácticas',
          period: 'Ago - Sep 2024',
          points: [
            'Capacitación a adolescentes y adultos en herramientas informáticas y programación.',
            'Dictado de talleres de pensamiento computacional y uso de software.',
          ],
        },
        {
          role: 'QA Analyst',
          place: 'Municipalidad de General Pueyrredón, prácticas',
          period: 'Abr - May 2024',
          points: [
            'Análisis y carga de datos en el mapa interactivo PNUMA.',
            'Identificación de errores y elaboración de informes de no conformidades.',
          ],
        },
      ],
      educationTitle: 'Formación',
      education: [
        {
          title: 'Tecnicatura Superior en Análisis de Sistemas',
          place: 'Instituto Superior de Estudios Técnicos (ISET)',
          period: '2023 - Actualidad',
        },
        {
          title: 'Desarrollo Web Full Stack, 220 hs',
          place: "Fundación Karuna, L'Oréal, Educación IT, Fundación Pescar",
          period: '2025',
        },
        {
          title: 'Inglés A2',
          place: 'Instituto Hilet',
          period: '2024',
        },
      ],
      stackTitle: 'Con qué trabajo',
      stackGroups: [
        { label: 'Front', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'] },
        { label: 'Back', items: ['Node.js', 'NestJS', 'Java', 'APIs REST'] },
        { label: 'Datos', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
        { label: 'Herramientas', items: ['Git', 'GitHub', 'Docker', 'Postman', 'Jira', 'Trello'] },
        { label: 'Forma de trabajo', items: ['Scrum', 'QA funcional', 'Desarrollo asistido por IA'] },
      ],
    },
    contact: {
      title: 'Hablemos',
      body: 'Estoy abierta a puestos de analista de sistemas, desarrollo full stack y automatización. Respondo por mail.',
      emailLabel: 'Escribime a',
      elsewhereLabel: 'También estoy en',
    },
    footer: {
      note: 'Analista de sistemas y desarrolladora full stack',
    },
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
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
    home: {
      projectsTitle: 'Projects',
      projectsLink: 'See them all in detail',
      aboutStatement:
        'I study Systems Analysis and come from QA and from teaching computing. I like to understand the problem before writing code.',
      aboutLink: 'More about me',
      contactTitle: 'I am looking for my first development role.',
      contactBody: 'If you have a position, a project or a question, write to me.',
      contactCta: "Let's talk",
    },
    projects: {
      title: 'Projects',
      intro: 'Training and personal work. For each one I explain what it solves and which part I built.',
      roleLabel: 'My part',
      repoLabel: 'View repository',
      items: [
        {
          name: 'JosBy',
          kind: 'Web platform, team project',
          summary: 'A platform that connects freelancers with companies looking to hire services.',
          role: 'I built the user profiles, with personal data editing and image upload, and helped build the interfaces where freelancers and companies interact.',
          stack: ['MongoDB', 'Express', 'React', 'Node.js'],
        },
        {
          name: 'Billing System',
          kind: 'Desktop application',
          summary: 'A system to issue and look up invoices on a relational database.',
          role: 'I modeled the database, implemented create, update and delete operations, and solved the integration between Java and MySQL.',
          stack: ['Java', 'MySQL', 'SQL'],
        },
        {
          name: 'Gym Management',
          kind: 'Desktop application',
          summary: "A system to manage a gym's information.",
          role: 'I designed the data model, the create, update and delete features, and the SQL JOIN queries that bring the data together.',
          stack: ['Java', 'MySQL', 'SQL'],
          repo: repos.gym,
        },
        {
          name: 'This portfolio',
          kind: 'Full stack application',
          summary: 'The site you are looking at: animated front end, its own API and a fully containerized setup.',
          role: 'I defined the stack, the branching strategy and the security criteria, and built it with AI-assisted development.',
          stack: ['React', 'TypeScript', 'Tailwind', 'NestJS', 'PostgreSQL', 'Docker'],
          repo: repos.portfolio,
        },
      ],
    },
    about: {
      title: 'About me',
      bio: [
        'I am an advanced Systems Analysis student and a junior full stack developer.',
        'I work with JavaScript, React, Node.js and Java, on relational and non-relational databases. I use AI and automation to move faster, without losing track of what I deliver.',
        'My time in QA left me with the habit of finding the bug before someone else does. Teaching computing trained me to explain technical things clearly.',
      ],
      experienceTitle: 'Experience',
      experience: [
        {
          role: 'Computing instructor',
          place: 'Municipality of General Pueyrredón, internship',
          period: 'Aug - Sep 2024',
          points: [
            'Trained teenagers and adults in computing tools and programming.',
            'Ran workshops on computational thinking and software use.',
          ],
        },
        {
          role: 'QA Analyst',
          place: 'Municipality of General Pueyrredón, internship',
          period: 'Apr - May 2024',
          points: [
            'Analyzed and loaded data into the UNEP interactive map.',
            'Identified errors and wrote non-conformity reports.',
          ],
        },
      ],
      educationTitle: 'Education',
      education: [
        {
          title: 'Associate Degree in Systems Analysis',
          place: 'Instituto Superior de Estudios Técnicos (ISET)',
          period: '2023 - Present',
        },
        {
          title: 'Full Stack Web Development, 220 hours',
          place: "Fundación Karuna, L'Oréal, Educación IT, Fundación Pescar",
          period: '2025',
        },
        {
          title: 'English A2',
          place: 'Instituto Hilet',
          period: '2024',
        },
      ],
      stackTitle: 'What I work with',
      stackGroups: [
        { label: 'Front end', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'] },
        { label: 'Back end', items: ['Node.js', 'NestJS', 'Java', 'REST APIs'] },
        { label: 'Data', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
        { label: 'Tools', items: ['Git', 'GitHub', 'Docker', 'Postman', 'Jira', 'Trello'] },
        { label: 'Ways of working', items: ['Scrum', 'Functional QA', 'AI-assisted development'] },
      ],
    },
    contact: {
      title: "Let's talk",
      body: 'I am open to systems analyst, full stack development and automation roles. I reply by email.',
      emailLabel: 'Write to me at',
      elsewhereLabel: 'You can also find me on',
    },
    footer: {
      note: 'Systems analyst and full stack developer',
    },
  },
}
