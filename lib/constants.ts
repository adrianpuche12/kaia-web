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
    { name: 'Node.js', icon: '🟢', description: 'JavaScript runtime' },
    { name: 'TypeScript', icon: '💙', description: 'Static typing' },
    { name: 'Express', icon: '⚡', description: 'Web framework' },
    { name: 'PostgreSQL', icon: '🐘', description: 'Database' },
    { name: 'Prisma', icon: '🔷', description: 'ORM' },
    { name: 'Redis', icon: '🔴', description: 'In-memory cache' },
  ],
  mobile: [
    { name: 'React Native', icon: '⚛️', description: 'Mobile framework' },
    { name: 'Expo', icon: '📱', description: 'Development platform' },
    { name: 'TypeScript', icon: '💙', description: 'Static typing' },
    { name: 'Zustand', icon: '🐻', description: 'State management' },
  ],
  integrations: [
    { name: 'Twilio', icon: '📞', description: 'SMS & WhatsApp' },
    { name: 'SendGrid', icon: '📧', description: 'Email' },
    { name: 'Google Maps', icon: '🗺️', description: 'Geolocation' },
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
      '38 functional endpoints',
      '7 complete mobile screens',
      'JWT authentication system',
      'PostgreSQL + 23 optimized indexes',
      'Redis cache implemented',
      '52 automated tests',
      'Railway deployment',
    ],
  },
  {
    version: 'v1.1',
    date: '8 Nov 2025',
    title: 'Push Notifications',
    status: 'completed',
    features: [
      'Push notifications with Expo',
      'Android notification permissions',
      'Expo notifications integrated',
    ],
  },
  {
    version: 'v1.1.2',
    date: '9 Nov 2025',
    title: 'Navegación Mejorada',
    status: 'completed',
    features: [
      'Solución overlap menú Android',
      'Barra navegación modo inmersivo',
      'Safe Area implementado',
      'Ajuste dinámico tab bar',
    ],
  },
  {
    version: 'v1.2.0',
    date: '14 Nov 2025',
    title: 'Comandos de Voz',
    status: 'completed',
    features: [
      'Voice commands para crear eventos',
      'Speech Recognition integrado',
      'Text-to-Speech confirmaciones',
      'Claude AI para procesamiento NLP',
      'Sistema de fallback automático (Claude + Gemini)',
      'Parseo de fechas naturales con chrono-node',
    ],
  },
  {
    version: 'v1.3',
    date: '15 Nov 2025',
    title: 'Migración Contabo',
    status: 'completed',
    features: [
      'Backend migrado a Contabo VPS',
      'PostgreSQL 16.10 dedicado',
      'PM2 cluster con 2 instancias',
      'Nginx reverse proxy',
      'Mayor estabilidad y rendimiento',
    ],
  },
  {
    version: 'v1.5',
    date: '20 Dec 2025',
    title: 'Migración Render',
    status: 'completed',
    features: [
      'Backend migrado a Render',
      'PostgreSQL en Render',
      'HTTPS con SSL automático',
      'Mayor estabilidad cloud-native',
    ],
  },
  {
    version: 'v2.0',
    date: 'Q1 2026',
    title: 'App Stores',
    status: 'pending',
    features: [
      'Google Play Store release',
      'iOS version (TestFlight)',
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
  // Auto-downloads the latest Android release from GitHub
  apkDirect: 'https://github.com/adrianpuche12/Kaia/releases/download/v1.5.0/kaia-v1.5.0.apk',
};

// Releases/Available versions
export const RELEASES = [
  {
    id: '259ee8a9-0db7-409e-8423-4de7167b0a1b',
    version: '1.5.0',
    buildNumber: 4,
    date: '2025-12-21',
    platform: 'Android',
    size: '88.0 MB',
    // VERSIÓN ACTUAL - Migración a Render
    downloadUrl: 'https://github.com/adrianpuche12/Kaia/releases/download/v1.5.0/kaia-v1.5.0.apk',
    status: 'stable',
    notes: [
      'Migración completa a Render cloud platform',
      'Backend URL: https://kaia-backend-3fxx.onrender.com/api',
      'PostgreSQL con Neon DB (serverless)',
      'Cache con Upstash Redis',
      'HTTPS automático con SSL',
      'Mejoras de estabilidad y rendimiento',
      'GitHub Release oficial disponible',
    ],
  },
  {
    id: 'f5cf64ea-62a5-442e-86e1-779a88de17e9',
    version: '1.3.5',
    buildNumber: 11,
    date: '2025-11-16',
    platform: 'Android',
    size: '88.2 MB',
    // DEPRECADA - Railway inactivo
    downloadUrl: 'https://expo.dev/accounts/adrianpuche/projects/mobile/builds/f5cf64ea-62a5-442e-86e1-779a88de17e9',
    status: 'deprecated',
    notes: [
      'DEPRECADO: Backend en Railway ya no está activo',
      'Network Security Config para permitir HTTP',
      'Backend Contabo VPS (ya no disponible)',
      'Usar v1.5.0 en su lugar',
    ],
  },
  {
    id: 'ff2a6e14-cbd1-455d-9c4b-0dfdb3ab987e',
    version: '1.3.4',
    buildNumber: 10,
    date: '2025-11-16',
    platform: 'Android',
    size: '88.2 MB',
    downloadUrl: 'https://expo.dev/accounts/adrianpuche/projects/mobile/builds/ff2a6e14-cbd1-455d-9c4b-0dfdb3ab987e',
    status: 'deprecated',
    notes: [
      'DEPRECADO: Android bloqueaba HTTP incluso con usesCleartextTraffic',
      'Error: "network request failed"',
      'Usar v1.3.5 en su lugar',
    ],
  },
  {
    id: '45de435a-a272-4d3d-b0c4-fbb736a04356',
    version: '1.3.3',
    buildNumber: 9,
    date: '2025-11-15',
    platform: 'Android',
    size: '88.2 MB',
    downloadUrl: 'https://expo.dev/accounts/adrianpuche/projects/mobile/builds/45de435a-a272-4d3d-b0c4-fbb736a04356',
    status: 'deprecated',
    notes: [
      'DEPRECADO: Build anterior a arreglo de base de datos',
      'Error: "network request failed" por credenciales DB incorrectas',
      'Usar v1.3.4 en su lugar',
    ],
  },
  {
    id: '394e2c57-07a2-458c-9dd7-4ccfb0be1e31',
    version: '1.3.2',
    buildNumber: 8,
    date: '2025-11-15',
    platform: 'Android',
    size: '88.2 MB',
    // API URL configurada pero HTTP bloqueado
    downloadUrl: 'https://expo.dev/accounts/adrianpuche/projects/mobile/builds/394e2c57-07a2-458c-9dd7-4ccfb0be1e31',
    status: 'deprecated',
    notes: [
      'DEPRECADO: Android bloqueaba tráfico HTTP',
      'Error: "network request failed"',
      'Usar v1.3.3 en su lugar',
    ],
  },
  {
    id: 'ce29b577-d6ae-4c99-9545-1e8eaa91a744',
    version: '1.3.1',
    buildNumber: 7,
    date: '2025-11-15',
    platform: 'Android',
    size: '88.2 MB',
    // Fix API URL (incompleto)
    downloadUrl: 'https://expo.dev/accounts/adrianpuche/projects/mobile/builds/ce29b577-d6ae-4c99-9545-1e8eaa91a744',
    status: 'deprecated',
    notes: [
      'DEPRECADO: Faltaba apiUrl en app.json extra',
      'process.env.EXPO_PUBLIC_API_URL no funcionó en runtime',
      'Usar v1.3.2 en su lugar',
    ],
  },
  {
    id: 'c00a37da-6406-44b1-9115-0e5e29fa37fe',
    version: '1.3.0',
    buildNumber: 6,
    date: '2025-11-15',
    platform: 'Android',
    size: '88.2 MB',
    // Migración a Contabo (URL incorrecta)
    downloadUrl: 'https://expo.dev/accounts/adrianpuche/projects/mobile/builds/c00a37da-6406-44b1-9115-0e5e29fa37fe',
    status: 'deprecated',
    notes: [
      'DEPRECADO: API URL apuntaba a Railway (inactivo)',
      'Error al registrarse: "application failed to respond"',
      'Usar v1.3.1 en su lugar',
    ],
  },
  {
    id: 'dd082442-adc7-40da-9923-02a05bffd46b',
    version: '1.2.0',
    buildNumber: 5,
    date: '2025-11-14',
    platform: 'Android',
    size: '87.8 MB',
    // Comandos de voz implementados
    downloadUrl: 'https://expo.dev/artifacts/eas/ti3R3YFQbGzQ9XjcGHUzHe.apk',
    status: 'deprecated',
    notes: [
      'Comandos de voz para crear eventos',
      'Speech Recognition con @jamsch/expo-speech-recognition',
      'Text-to-Speech para confirmaciones audibles',
      'Claude AI para procesamiento de lenguaje natural',
      'Sistema de fallback automático (Claude → Gemini)',
      'Parseo de fechas naturales con chrono-node',
      'Feedback visual completo (escuchando, procesando, éxito)',
      'Actualización automática de lista de eventos',
    ],
  },
  {
    id: '4DknyoTKroRnpk3iPJiK8m',
    version: '1.1.2',
    buildNumber: 4,
    date: '2025-11-09',
    platform: 'Android',
    size: '87.8 MB',
    // Safe Area implementado
    downloadUrl: 'https://github.com/adrianpuche12/Kaia/releases/download/v1.1.2/kaia-v1.1.2-safearea.apk',
    status: 'deprecated',
    notes: [
      'Safe Area implementado para todos los dispositivos',
      'Ajuste dinámico del tab bar con insets',
      'Mejor manejo de áreas seguras',
      'Padding inteligente basado en dispositivo',
      'SOLUCIÓN: Menú Samsung no tapa navegación de Kaia',
    ],
  },
  {
    id: 't2BpDZgxKyyaHHMX1Q7Nas',
    version: '1.1.3',
    buildNumber: 4,
    date: '2025-11-09',
    platform: 'Android',
    size: '87.8 MB',
    // DEPRECATED - Problema con menú Samsung
    downloadUrl: 'https://github.com/adrianpuche12/Kaia/releases/download/v1.1.3/kaia-v1.1.3.apk',
    status: 'deprecated',
    notes: [
      'DEPRECADO - Problema con menú de navegación Samsung',
      'El menú del dispositivo tapa el menú de Kaia',
      'Usar v1.1.2 en su lugar',
    ],
  },
  {
    id: '4474716c-1569-4213-b038-bf0fa0676fdf',
    version: '1.1.1',
    buildNumber: 3,
    date: '2025-11-08',
    platform: 'Android',
    size: '87.8 MB',
    // Production build - INSTALABLE en dispositivos reales
    downloadUrl: 'https://github.com/adrianpuche12/Kaia/releases/download/v1.1.1/kaia-v1.1.1-production.apk',
    status: 'deprecated',
    notes: [
      'APK firmado para producción - INSTALABLE',
      'Solucionado problema de instalación en dispositivos',
      'Push notifications implemented',
      'Expo notifications integrated',
      'Build optimizado con Gradle Release',
    ],
  },
  {
    id: 'c024f976-b73f-48b7-bf09-98707f156822',
    version: '1.1.0',
    buildNumber: 2,
    date: '2025-10-31',
    platform: 'Android',
    size: '88 MB',
    // Versión con problemas de instalación
    downloadUrl: 'https://github.com/adrianpuche12/Kaia/releases/download/v1.1.0/kaia-v1.1.0-android.apk',
    status: 'deprecated',
    notes: [
      'Push notifications implemented',
      'Expo notifications integrated',
      'Android notification permissions',
      'NOTA: Esta versión tiene problemas de instalación',
      'Usar v1.1.1 en su lugar',
    ],
  },
  {
    id: '8345a8ea-847e-4372-9068-4e4876fa091c',
    version: '1.0.0',
    buildNumber: 1,
    date: '2025-10-18',
    platform: 'Android',
    size: '65.4 MB',
    // Old version
    downloadUrl: 'https://github.com/adrianpuche12/Kaia/releases/download/v1.0.0/application-8345a8ea-847e-4372-9068-4e4876fa091c.apk',
    status: 'deprecated',
    notes: [
      'Initial MVP version',
      '7 complete screens',
      'JWT authentication',
      'Backend API integration',
      'Natural voice commands',
    ],
  },
];
