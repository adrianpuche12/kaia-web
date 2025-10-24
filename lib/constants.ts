// Kaia Landing Page - Constants

export const BRAND = {
  name: 'Kaia',
  tagline: 'Su asistente ideal',
  description: 'Gestiona tu vida diaria con tu voz. Kaia es tu asistente personal inteligente que te ayuda a organizar eventos, recordatorios y alarmas mediante comandos de voz naturales.',
};

export const FEATURES = [
  {
    icon: '🗣️',
    title: 'Comandos de voz naturales',
    description: 'Habla naturalmente. Kaia entiende tus intenciones sin comandos complicados.',
    color: 'primary',
  },
  {
    icon: '📅',
    title: 'Gestión inteligente de eventos',
    description: 'Crea, edita y organiza tus eventos con contexto automático de ubicación y tiempo.',
    color: 'secondary',
  },
  {
    icon: '⏰',
    title: 'Alarmas contextuales',
    description: 'Recordatorios inteligentes basados en ubicación, tiempo y tus patrones de uso.',
    color: 'accent',
  },
  {
    icon: '📱',
    title: 'Mensajería multi-plataforma',
    description: 'Recibe notificaciones por WhatsApp, SMS o Email según tus preferencias.',
    color: 'tertiary',
  },
  {
    icon: '🗺️',
    title: 'Geolocalización inteligente',
    description: 'Kaia conoce tus ubicaciones frecuentes y te sugiere eventos basados en dónde estás.',
    color: 'info',
  },
  {
    icon: '🤖',
    title: 'IA que aprende de ti',
    description: 'Mejora con el tiempo, aprendiendo tus preferencias y patrones para asistirte mejor.',
    color: 'gradient',
  },
];

export const STATS = [
  {
    value: 1000,
    label: 'Usuarios activos',
    suffix: '+',
  },
  {
    value: 5000,
    label: 'Descargas totales',
    suffix: '+',
  },
  {
    value: 50000,
    label: 'Eventos creados',
    suffix: '+',
  },
  {
    value: 4.8,
    label: 'Rating promedio',
    suffix: '⭐',
    decimals: 1,
  },
  {
    value: 38,
    label: 'API Endpoints',
    suffix: '',
  },
  {
    value: 99.9,
    label: 'Uptime %',
    suffix: '%',
    decimals: 1,
  },
];

export const TECH_STACK = {
  backend: [
    { name: 'Node.js', icon: '🟢', description: 'Runtime de JavaScript' },
    { name: 'TypeScript', icon: '💙', description: 'Tipado estático' },
    { name: 'Express', icon: '⚡', description: 'Framework web' },
    { name: 'PostgreSQL', icon: '🐘', description: 'Base de datos' },
    { name: 'Prisma', icon: '🔷', description: 'ORM' },
    { name: 'Redis', icon: '🔴', description: 'Caché en memoria' },
  ],
  mobile: [
    { name: 'React Native', icon: '⚛️', description: 'Framework móvil' },
    { name: 'Expo', icon: '📱', description: 'Plataforma de desarrollo' },
    { name: 'TypeScript', icon: '💙', description: 'Tipado estático' },
    { name: 'Zustand', icon: '🐻', description: 'State management' },
  ],
  integrations: [
    { name: 'Twilio', icon: '📞', description: 'SMS y WhatsApp' },
    { name: 'SendGrid', icon: '📧', description: 'Email' },
    { name: 'Google Maps', icon: '🗺️', description: 'Geolocalización' },
    { name: 'Railway', icon: '🚂', description: 'Hosting' },
  ],
};

export const CHANGELOG = [
  {
    version: 'v1.0',
    date: '18 Oct 2025',
    title: 'MVP Launch',
    status: 'completed',
    features: [
      '38 endpoints funcionales',
      '7 pantallas móviles completas',
      'Sistema de autenticación JWT',
      'PostgreSQL + 23 índices optimizados',
      'Redis caché implementado',
      '52 tests automatizados',
      'Deployment a Railway',
    ],
  },
  {
    version: 'v1.1',
    date: 'Nov 2025',
    title: 'Push Notifications',
    status: 'pending',
    features: [
      'Notificaciones push con Expo',
      'Eventos recurrentes (RRULE)',
      'Background jobs (BullMQ)',
    ],
  },
  {
    version: 'v1.2',
    date: 'Dic 2025',
    title: 'App Stores',
    status: 'pending',
    features: [
      'Publicación en Google Play Store',
      'Versión iOS (TestFlight)',
      'Web dashboard MVP',
    ],
  },
];

export const ABOUT = {
  mission: 'Transformar la forma en que las personas gestionan su vida diaria mediante inteligencia artificial y comandos de voz naturales.',
  vision: 'Ser el asistente personal más intuitivo y confiable del mercado, disponible 24/7 para ayudar a millones de usuarios.',
  values: [
    'Privacidad primero',
    'IA ética y transparente',
    'Experiencia de usuario excepcional',
    'Innovación constante',
  ],
};

export const FAQ = [
  {
    question: '¿Kaia es gratis?',
    answer: 'Sí, Kaia es completamente gratis durante la fase MVP. Ofreceremos planes premium en el futuro con funciones avanzadas.',
  },
  {
    question: '¿Está disponible en iOS?',
    answer: 'Actualmente solo en Android. La versión iOS está en desarrollo y estará disponible próximamente.',
  },
  {
    question: '¿Kaia funciona offline?',
    answer: 'Algunas funciones básicas funcionan offline. Las funciones de IA y mensajería requieren conexión a internet.',
  },
  {
    question: '¿Mis datos están seguros?',
    answer: 'Absolutamente. Usamos encriptación end-to-end y no compartimos tus datos con terceros. Tu privacidad es nuestra prioridad.',
  },
  {
    question: '¿Puedo sincronizar con Google Calendar?',
    answer: 'Esta función está en desarrollo y estará disponible en las próximas actualizaciones.',
  },
  {
    question: '¿Kaia consume mucha batería?',
    answer: 'No. Kaia está optimizado para usar recursos mínimos y preservar la batería de tu dispositivo.',
  },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/adrianpuche12/Kaia',
  twitter: '#',
  linkedin: '#',
  discord: '#',
};

export const DOWNLOAD_LINKS = {
  playStore: '#', // TODO: Add real Play Store link
  appStore: '#', // iOS coming soon
  apkDirect: 'https://expo.dev/accounts/adrianpuche/projects/mobile/builds/8345a8ea-847e-4372-9068-4e4876fa091c',
};

// Releases/Versiones disponibles
export const RELEASES = [
  {
    id: '8345a8ea-847e-4372-9068-4e4876fa091c',
    version: '1.0.0',
    buildNumber: 1,
    date: '2025-10-18',
    platform: 'Android',
    size: '65.4 MB',
    // URL directa de descarga desde GitHub Releases
    downloadUrl: 'https://github.com/adrianpuche12/Kaia/releases/download/v1.0.0/application-8345a8ea-847e-4372-9068-4e4876fa091c.apk',
    status: 'stable',
    notes: [
      'Versión inicial MVP',
      '7 pantallas completas',
      'Autenticación JWT',
      'Integración con backend API',
      'Comandos de voz naturales',
    ],
  },
  {
    id: 'beta-1.1.0',
    version: '1.1.0-beta',
    buildNumber: 2,
    date: '2025-10-24',
    platform: 'Android',
    size: '29.2 MB',
    downloadUrl: '#',
    status: 'beta',
    notes: [
      'Mejoras en la interfaz',
      'Optimización de rendimiento',
      'Corrección de bugs menores',
      'Nuevas animaciones',
    ],
  },
];
