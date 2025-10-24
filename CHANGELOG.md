# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [1.0.0] - 2024-10-24

### Fase 1: Configuración Inicial

#### Added
- Proyecto Next.js 16 con TypeScript 5.0
- Configuración de Tailwind CSS 4.0 con sintaxis @theme inline
- Paleta de colores Kaia (Índigo, Púrpura, Verde Esmeralda, Ámbar)
- Componentes UI base: Button.tsx y Card.tsx
- 4 secciones iniciales:
  - Hero con gradiente y CTAs
  - Features (6 características)
  - Download (links a tiendas)
  - Footer básico
- Metadatos SEO completos en layout.tsx
- Smooth scroll behavior en globals.css
- Constantes en lib/constants.ts

### Fase 2: Expansión Completa

#### Added
- **Navbar.tsx**: Navegación sticky con menú móvil hamburguesa
  - Scroll detection para cambio de estilo
  - Smooth scroll a secciones
  - Menú responsive con animación

- **Stats.tsx**: Contadores animados
  - Intersection Observer API
  - Animación progresiva de 0 a valor objetivo
  - 6 métricas: usuarios, descargas, uptime, tests, response time, endpoints

- **TechStack.tsx**: Stack tecnológico completo
  - 3 columnas: Backend, Mobile, Integrations
  - Performance stats cards
  - Datos reales del proyecto

- **Changelog.tsx**: Timeline visual de roadmap
  - 3 versiones (v1.0, v1.1, v1.2)
  - Estados: completado/pendiente
  - Layout alternado en desktop
  - Iconos dinámicos según estado

- **FAQ.tsx**: Preguntas frecuentes interactivas
  - 8 preguntas con accordion
  - Animación de chevron rotativo
  - Solo una pregunta abierta a la vez

- **CTASection.tsx**: Call-to-action intermedio
  - Gradiente de marca
  - CTAs duales

#### Changed
- Expandido lib/constants.ts con:
  - STATS (6 metrics)
  - TECH_STACK (backend/mobile/integrations)
  - CHANGELOG (3 versions)
  - FAQ (8 questions)
  - ABOUT (mission/vision/values)

- Actualizado app/page.tsx para integrar las 10 secciones

### Fase 3: Fixes de Accesibilidad

#### Fixed

**Commit 1: Navbar, FAQ, TechStack, Changelog - Contraste de texto**
- `components/shared/Navbar.tsx`:
  - Cambiado `text-foreground` → `text-gray-900` (desktop menu)
  - Cambiado `text-foreground` → `text-gray-900` (mobile menu)

- `components/sections/FAQ.tsx`:
  - Cambiado `text-foreground` → `text-gray-900` (questions)
  - Cambiado `text-muted-foreground` → `text-gray-700` (answers)

- `components/sections/TechStack.tsx`:
  - Cambiado todos los `text-foreground` → `text-gray-900`
  - Cambiado todos los `text-muted-foreground` → `text-gray-600`

- `components/sections/Changelog.tsx`:
  - Cambiado `text-foreground` → `text-gray-900` (titles)
  - Cambiado `text-muted-foreground` → `text-gray-700` (features)

**Commit 2: Footer - Contraste de fondo**
- `components/sections/Footer.tsx`:
  - Cambiado `bg-foreground` → `bg-gray-900`
  - Asegura fondo oscuro sólido con buen contraste para texto blanco

#### Reason
Los colores semánticos de Tailwind (`text-foreground`, `text-muted-foreground`, `bg-foreground`) no estaban renderizando con suficiente contraste, violando estándares WCAG AA. Se reemplazaron con colores explícitos de la escala gray de Tailwind para garantizar accesibilidad.

### Documentation

#### Added
- README.md actualizado con:
  - Documentación de las 10 secciones
  - Detalles técnicos de componentes destacados
  - Estructura completa del proyecto
  - Historial de desarrollo en 3 fases
  - Datos reales del proyecto Kaia
  - Requisitos de deployment

- CHANGELOG.md (este archivo)
  - Documentación cronológica de todos los cambios
  - Commits agrupados por fase de desarrollo
  - Explicación de fixes de accesibilidad

## Estadísticas del Proyecto

- **Secciones**: 10 completas
- **Componentes**: 12 (9 sections + 1 shared + 2 UI)
- **Líneas de código**: ~1,500+
- **Commits**: 5 (setup + expansion + 3 accessibility fixes + docs)
- **Tecnologías**: Next.js 16, TypeScript 5.0, Tailwind CSS 4.0
- **Funcionalidades interactivas**: 4 (contadores, accordion, menú móvil, smooth scroll)

## Próximos Pasos

- [ ] Deployment a servidor Contabo (después del 1 de noviembre)
- [ ] Configuración de dominio personalizado
- [ ] Integración con Google Analytics
- [ ] Testing end-to-end con Playwright
- [ ] Optimización de imágenes (si se agregan)
- [ ] PWA capabilities (opcional)

---

**Desarrollado con ❤️ para Kaia** | Jorge Adrián Pucheta
