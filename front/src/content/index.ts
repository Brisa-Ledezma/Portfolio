// Todo el texto visible del sitio vive acá, en español e inglés.
// Para editar el contenido se modifica este archivo: no hay panel de administración.

export type Language = 'es' | 'en'

// Cada tecnología va con el para qué: la lista sola es una afirmación, el uso es la evidencia.
export interface Tech {
  name: string
  use: string
}

// Cada proyecto responde, en orden: problema, solución, mi aporte y tecnologías.
export interface Project {
  name: string
  kind: string
  featured?: boolean
  problem: string
  solution: string
  contribution: string[]
  stack: Tech[]
  repo?: string
  demo?: string
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
    // Rol concreto primero y tecnologías clave al final: se entiende el perfil en segundos.
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
    featuredLabel: string
    problemLabel: string
    solutionLabel: string
    contributionLabel: string
    stackLabel: string
    repoLabel: string
    demoLabel: string
    repoPending: string
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
    stackGroups: { label: string; items: string[]; evidence?: string }[]
  }
  contact: {
    title: string
    body: string
    emailLabel: string
    elsewhereLabel: string
    form: {
      title: string
      name: string
      email: string
      message: string
      messageHelp: string
      submit: string
      sending: string
      waking: string
      success: string
      sendAnother: string
      errors: {
        name: string
        email: string
        message: string
        invalid: string
        rate_limited: string
        unavailable: string
        network: string
      }
    }
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
    'Express',
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
  josby: 'https://github.com/FacundoZu/josby-frontend',
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
      roles: ['Desarrolladora Full Stack Junior', 'Analista de Sistemas', 'Java · React · Node.js · MySQL'],
      intro:
        'Desarrollo aplicaciones de punta a punta: base de datos, API e interfaz, con IA como herramienta de trabajo.',
      primaryCta: 'Ver proyectos',
      secondaryCta: 'Ver GitHub',
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
        'Para cada uno: qué problema resuelve, cómo lo resolví, qué parte hice yo y para qué usé cada tecnología.',
      featuredLabel: 'Destacado',
      problemLabel: 'Problema',
      solutionLabel: 'Solución',
      contributionLabel: 'Mi aporte',
      stackLabel: 'Tecnologías y para qué',
      repoLabel: 'GitHub',
      demoLabel: 'Demo',
      repoPending: 'Repositorio en preparación',
      items: [
        {
          name: 'Este portfolio',
          kind: 'Aplicación full stack · proyecto personal',
          featured: true,
          problem:
            'Necesitaba un sitio propio, publicado y fácil de mantener, que además sirviera para mostrar cómo programo.',
          solution:
            'Un front en React separado de una API en NestJS, todo en contenedores Docker y con despliegue automático: cada cambio se verifica y se publica solo.',
          contribution: [
            'Definí la arquitectura: front estático en GitHub Pages y API en un contenedor Docker en Render.',
            'Armé el pipeline de GitHub Actions: lint, tipos, tests, imagen Docker y despliegue en cada push.',
            'Escribí tests unitarios y end-to-end de la API.',
            'Documenté el flujo de ramas, el despliegue y los controles de seguridad según OWASP Top 10.',
            'Lo desarrollé con asistencia de IA, definiendo y revisando cada decisión técnica.',
          ],
          stack: [
            { name: 'React + TypeScript', use: 'interfaz por páginas, bilingüe y con tema claro y oscuro' },
            { name: 'Tailwind CSS + GSAP', use: 'sistema de diseño y animaciones' },
            { name: 'NestJS', use: 'API REST modular' },
            { name: 'Vitest + Supertest', use: 'tests unitarios y end-to-end de la API' },
            { name: 'Docker', use: 'mismo entorno en desarrollo y en producción' },
            { name: 'GitHub Actions', use: 'integración y despliegue continuo' },
          ],
          repo: repos.portfolio,
        },
        {
          name: 'Gestión de Gimnasio',
          kind: 'Aplicación de escritorio · trabajo de la carrera',
          problem:
            'Un gimnasio necesita administrar socios, profesores, pagos, productos y rutinas desde un solo lugar.',
          solution:
            'Una aplicación de escritorio con un menú distinto según el rol de quien ingresa (administrador, profesor o cliente), sobre una base de datos relacional.',
          contribution: [
            'Diseñé el modelo de datos en MySQL, con claves foráneas e índices.',
            'Implementé altas, bajas y modificaciones con borrado lógico, para no perder el historial.',
            'Escribí consultas SQL con JOIN que cruzan usuarios, clientes y profesores.',
            'Usé transacciones en el registro de usuarios para que la base quede siempre consistente.',
            'Integré una API externa de ejercicios para armar el catálogo de rutinas.',
          ],
          stack: [
            { name: 'Java (Swing)', use: 'interfaz de escritorio con navegación según el rol' },
            { name: 'JDBC', use: 'consultas parametrizadas y transacciones' },
            { name: 'MySQL', use: 'modelo relacional con claves foráneas e índices' },
            { name: 'API REST externa', use: 'catálogo de ejercicios' },
          ],
          repo: repos.gym,
        },
        {
          name: 'Sistema de Facturación',
          kind: 'Aplicación de escritorio · trabajo de la carrera',
          problem:
            'Un comercio necesita registrar ventas, controlar el stock y emitir facturas con el detalle de cada producto.',
          solution:
            'Una aplicación de escritorio con inicio de sesión por rol y módulos de clientes, empleados, proveedores, stock y facturación.',
          contribution: [
            'Modelé la base de datos relacional: facturas, detalle por producto, stock y proveedores.',
            'Implementé altas, bajas y modificaciones en cada módulo.',
            'Resolví la emisión de la factura y el descuento de stock dentro de una misma transacción.',
            'Integré Java con MySQL mediante JDBC, con consultas parametrizadas.',
          ],
          stack: [
            { name: 'Java (Swing)', use: 'interfaz de escritorio por módulos' },
            { name: 'JDBC', use: 'conexión, consultas parametrizadas y transacciones' },
            { name: 'MySQL', use: 'modelo relacional de facturas, productos y stock' },
            { name: 'SQL', use: 'consultas con JOIN entre stock, proveedores y estados' },
          ],
        },
        {
          name: 'JosBy',
          kind: 'Plataforma web · equipo de cinco personas',
          problem:
            'Freelancers y empresas necesitan un lugar donde encontrarse, publicar servicios y gestionar pedidos.',
          solution:
            'Una plataforma web con perfiles, publicación de servicios, pedidos y chat en tiempo real, desarrollada en equipo.',
          contribution: [
            'Desarrollé la página de perfil y la edición de datos personales.',
            'Hice la ventana para cargar y cambiar la foto de perfil.',
            'Sumé el flujo para que un usuario pase a ser freelancer, en el front y en la API.',
          ],
          stack: [
            { name: 'React', use: 'vistas de perfil, edición y carga de imagen' },
            { name: 'Tailwind CSS', use: 'estilos de esas vistas' },
            { name: 'Node.js + Express', use: 'endpoint para convertir un usuario en freelancer' },
            { name: 'MongoDB', use: 'datos del perfil de usuario' },
          ],
          repo: repos.josby,
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
        {
          label: 'Front',
          items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'],
          evidence: 'Usado en este portfolio y en JosBy',
        },
        {
          label: 'Back',
          items: ['Node.js', 'NestJS', 'Java', 'APIs REST'],
          evidence: 'API de este portfolio, JosBy, Gimnasio y Facturación',
        },
        {
          label: 'Datos',
          items: ['MySQL', 'MongoDB', 'SQL'],
          evidence: 'MySQL en Gimnasio y Facturación, MongoDB en JosBy',
        },
        {
          label: 'Herramientas',
          items: ['Git', 'GitHub', 'Docker', 'GitHub Actions', 'Postman', 'Jira', 'Trello'],
          evidence: 'Docker y GitHub Actions en el despliegue de este portfolio',
        },
        { label: 'Forma de trabajo', items: ['Scrum', 'QA funcional', 'Desarrollo asistido por IA'] },
      ],
    },
    contact: {
      title: 'Hablemos',
      body: 'Estoy abierta a puestos de analista de sistemas, desarrollo full stack y automatización. Respondo por mail.',
      emailLabel: 'Escribime a',
      elsewhereLabel: 'También estoy en',
      form: {
        title: 'Escribime desde acá',
        name: 'Nombre',
        email: 'Email',
        message: 'Mensaje',
        messageHelp: 'Entre 10 y 2000 caracteres.',
        submit: 'Enviar mensaje',
        sending: 'Enviando...',
        waking: 'El servidor se está despertando, puede tardar unos segundos más.',
        success: '¡Gracias! Tu mensaje llegó. Te respondo por mail.',
        sendAnother: 'Enviar otro mensaje',
        errors: {
          name: 'Escribí tu nombre (2 a 80 caracteres).',
          email: 'Revisá el email: no parece válido.',
          message: 'El mensaje tiene que tener entre 10 y 2000 caracteres.',
          invalid: 'Hay datos que no son válidos. Revisalos y volvé a intentar.',
          rate_limited: 'Enviaste varios mensajes seguidos. Esperá unos minutos y volvé a intentar.',
          unavailable: 'No pude recibir el mensaje en este momento. Escribime directo al mail.',
          network: 'No hubo conexión con el servidor. Probá de nuevo o escribime directo al mail.',
        },
      },
    },
    footer: {
      note: 'Desarrolladora full stack junior · Analista de sistemas',
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
      roles: ['Junior Full Stack Developer', 'Systems Analyst', 'Java · React · Node.js · MySQL'],
      intro: 'I build applications end to end: database, API and interface, with AI as a working tool.',
      primaryCta: 'View projects',
      secondaryCta: 'View GitHub',
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
      intro:
        'For each one: the problem it solves, how I solved it, which part I built and what I used each technology for.',
      featuredLabel: 'Featured',
      problemLabel: 'Problem',
      solutionLabel: 'Solution',
      contributionLabel: 'My contribution',
      stackLabel: 'Technologies and what for',
      repoLabel: 'GitHub',
      demoLabel: 'Demo',
      repoPending: 'Repository coming soon',
      items: [
        {
          name: 'This portfolio',
          kind: 'Full stack application · personal project',
          featured: true,
          problem:
            'I needed a site of my own, published and easy to maintain, that would also show how I write code.',
          solution:
            'A React front end separated from a NestJS API, fully containerized with Docker and continuously deployed: every change is verified and published automatically.',
          contribution: [
            'Defined the architecture: static front end on GitHub Pages and the API in a Docker container on Render.',
            'Built the GitHub Actions pipeline: lint, types, tests, Docker image and deployment on every push.',
            'Wrote unit and end-to-end tests for the API.',
            'Documented the branching flow, the deployment and the security controls based on the OWASP Top 10.',
            'Built it with AI assistance, defining and reviewing every technical decision.',
          ],
          stack: [
            { name: 'React + TypeScript', use: 'multi-page, bilingual interface with light and dark themes' },
            { name: 'Tailwind CSS + GSAP', use: 'design system and animations' },
            { name: 'NestJS', use: 'modular REST API' },
            { name: 'Vitest + Supertest', use: 'unit and end-to-end API tests' },
            { name: 'Docker', use: 'same environment in development and production' },
            { name: 'GitHub Actions', use: 'continuous integration and deployment' },
          ],
          repo: repos.portfolio,
        },
        {
          name: 'Gym Management',
          kind: 'Desktop application · degree project',
          problem: 'A gym needs to manage members, trainers, payments, products and routines in one place.',
          solution:
            'A desktop application with a different menu for each role (administrator, trainer or member), on top of a relational database.',
          contribution: [
            'Designed the MySQL data model, with foreign keys and indexes.',
            'Implemented create, update and delete operations with soft deletes to keep history.',
            'Wrote SQL JOIN queries that bring together users, members and trainers.',
            'Used transactions in user sign-up so the database always stays consistent.',
            'Integrated an external exercise API to build the routines catalog.',
          ],
          stack: [
            { name: 'Java (Swing)', use: 'desktop interface with role-based navigation' },
            { name: 'JDBC', use: 'parameterized queries and transactions' },
            { name: 'MySQL', use: 'relational model with foreign keys and indexes' },
            { name: 'External REST API', use: 'exercise catalog' },
          ],
          repo: repos.gym,
        },
        {
          name: 'Billing System',
          kind: 'Desktop application · degree project',
          problem:
            'A store needs to record sales, keep stock under control and issue invoices with the detail of each product.',
          solution:
            'A desktop application with role-based login and modules for customers, employees, suppliers, stock and billing.',
          contribution: [
            'Modeled the relational database: invoices, per-product detail, stock and suppliers.',
            'Implemented create, update and delete operations in every module.',
            'Handled invoice creation and the stock update inside a single transaction.',
            'Integrated Java and MySQL through JDBC with parameterized queries.',
          ],
          stack: [
            { name: 'Java (Swing)', use: 'module-based desktop interface' },
            { name: 'JDBC', use: 'connection, parameterized queries and transactions' },
            { name: 'MySQL', use: 'relational model for invoices, products and stock' },
            { name: 'SQL', use: 'JOIN queries across stock, suppliers and statuses' },
          ],
        },
        {
          name: 'JosBy',
          kind: 'Web platform · team of five',
          problem: 'Freelancers and companies need a place to meet, publish services and manage orders.',
          solution:
            'A web platform with profiles, service listings, orders and real-time chat, built as a team.',
          contribution: [
            'Built the profile page and the personal data editing.',
            'Built the modal to upload and change the profile picture.',
            'Added the flow that turns a user into a freelancer, in the front end and the API.',
          ],
          stack: [
            { name: 'React', use: 'profile, editing and image upload views' },
            { name: 'Tailwind CSS', use: 'styling for those views' },
            { name: 'Node.js + Express', use: 'endpoint that turns a user into a freelancer' },
            { name: 'MongoDB', use: 'user profile data' },
          ],
          repo: repos.josby,
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
        {
          label: 'Front end',
          items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'],
          evidence: 'Used in this portfolio and in JosBy',
        },
        {
          label: 'Back end',
          items: ['Node.js', 'NestJS', 'Java', 'REST APIs'],
          evidence: 'This portfolio API, JosBy, Gym Management and Billing System',
        },
        {
          label: 'Data',
          items: ['MySQL', 'MongoDB', 'SQL'],
          evidence: 'MySQL in Gym Management and Billing System, MongoDB in JosBy',
        },
        {
          label: 'Tools',
          items: ['Git', 'GitHub', 'Docker', 'GitHub Actions', 'Postman', 'Jira', 'Trello'],
          evidence: 'Docker and GitHub Actions in this portfolio deployment',
        },
        { label: 'Ways of working', items: ['Scrum', 'Functional QA', 'AI-assisted development'] },
      ],
    },
    contact: {
      title: "Let's talk",
      body: 'I am open to systems analyst, full stack development and automation roles. I reply by email.',
      emailLabel: 'Write to me at',
      elsewhereLabel: 'You can also find me on',
      form: {
        title: 'Write to me here',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        messageHelp: 'Between 10 and 2000 characters.',
        submit: 'Send message',
        sending: 'Sending...',
        waking: 'The server is waking up, this may take a few more seconds.',
        success: 'Thank you! Your message arrived. I will reply by email.',
        sendAnother: 'Send another message',
        errors: {
          name: 'Write your name (2 to 80 characters).',
          email: 'Check the email: it does not look valid.',
          message: 'The message must be between 10 and 2000 characters.',
          invalid: 'Some fields are not valid. Check them and try again.',
          rate_limited: 'You sent several messages in a row. Wait a few minutes and try again.',
          unavailable: 'I could not receive the message right now. Please email me directly.',
          network: 'Could not reach the server. Try again or email me directly.',
        },
      },
    },
    footer: {
      note: 'Junior full stack developer · Systems analyst',
    },
  },
}
