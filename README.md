# 🌐 Kaia Web - Landing Page Oficial

Landing page oficial de Kaia, el asistente personal inteligente por voz.

![Kaia](https://img.shields.io/badge/Version-1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)

## 📋 Descripción

Esta es la landing page oficial de **Kaia**, un asistente personal inteligente que ayuda a los usuarios a gestionar su vida diaria mediante comandos de voz naturales. La web sirve como punto de entrada principal para nuevos usuarios, mostrando características clave, estadísticas y opciones de descarga.

## ✨ Características

- **Diseño Moderno**: Landing page profesional y completamente responsive
- **Paleta de Colores Kaia**: Sincronizada con la aplicación móvil (Índigo, Púrpura, Verde Esmeralda, Ámbar)
- **10 Secciones Completas**:
  - **Navbar**: Navegación sticky con menú móvil hamburguesa y smooth scroll
  - **Hero**: Gradiente dinámico con CTAs y animaciones
  - **Features**: 6 características principales con iconos
  - **Stats**: Contadores animados con Intersection Observer (1000+ usuarios, 5000+ descargas, etc.)
  - **TechStack**: Stack completo Backend/Mobile/Integrations con performance stats
  - **Changelog**: Timeline visual con roadmap (v1.0, v1.1, v1.2)
  - **FAQ**: Accordion interactivo con 8 preguntas frecuentes
  - **CTA Section**: Call-to-action adicional
  - **Download**: Links a tiendas y descarga directa de APK
  - **Footer**: Links organizados, redes sociales y copyright
- **Componentes Interactivos**:
  - Contadores animados que se activan al hacer scroll
  - Acordeón expandible/colapsable en FAQ
  - Menú móvil con animación de hamburguesa
  - Smooth scroll entre secciones
  - Hover effects y transiciones suaves
- **SEO Optimizado**: Metadatos completos para búsqueda y redes sociales
- **Accesibilidad**: WCAG AA compliance con contraste adecuado
- **Performance**: Optimizado para carga rápida y excelente UX

## 🎨 Paleta de Colores

```css
Primary (Índigo):    #4F46E5, #818CF8, #3730A3
Secondary (Púrpura): #7C3AED, #A78BFA, #5B21B6
Tertiary (Verde):    #10B981, #34D399, #059669
Accent (Ámbar):      #F59E0B, #FBBF24, #D97706
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 20+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/adrianpuche12/kaia-web.git
cd kaia-web

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
kaia-web/
├── app/
│   ├── layout.tsx          # Layout principal con metadatos SEO
│   ├── page.tsx            # Página principal (integra las 10 secciones)
│   ├── globals.css         # Estilos globales + colores Kaia + smooth scroll
│   └── favicon.ico         # Favicon
│
├── components/
│   ├── shared/
│   │   └── Navbar.tsx      # Navegación sticky con menú móvil
│   │
│   ├── sections/
│   │   ├── Hero.tsx        # Hero con gradiente y CTAs
│   │   ├── Features.tsx    # 6 características principales
│   │   ├── Stats.tsx       # Contadores animados con Intersection Observer
│   │   ├── TechStack.tsx   # Stack tecnológico completo
│   │   ├── Changelog.tsx   # Timeline de roadmap/versiones
│   │   ├── FAQ.tsx         # Preguntas frecuentes (accordion)
│   │   ├── CTASection.tsx  # Call-to-action intermedio
│   │   ├── Download.tsx    # Opciones de descarga (stores + APK)
│   │   └── Footer.tsx      # Footer con links y redes sociales
│   │
│   └── ui/
│       ├── Button.tsx      # Componente de botón reutilizable
│       └── Card.tsx        # Componente de tarjeta
│
├── lib/
│   └── constants.ts        # Constantes completas:
│                             - FEATURES (6 items)
│                             - STATS (6 metrics)
│                             - TECH_STACK (backend/mobile/integrations)
│                             - CHANGELOG (3 versions)
│                             - FAQ (8 questions)
│                             - ABOUT (mission/vision/values)
│                             - DOWNLOAD_LINKS
│                             - SOCIAL_LINKS
│
└── public/
    └── (assets estáticos)
```

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript 5.0
- **Estilos**: Tailwind CSS 4.0 (nueva sintaxis @theme inline)
- **UI**: Componentes custom con Tailwind
- **Icons**: SVG inline
- **Fonts**: Geist Sans & Geist Mono
- **Animations**: Intersection Observer API + CSS transitions
- **State Management**: React Hooks (useState, useEffect, useRef)

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Crea build de producción
npm start            # Inicia servidor de producción

# Linting
npm run lint         # Ejecuta ESLint
```

## 🔧 Detalles Técnicos

### Componentes Destacados

#### Stats.tsx - Contadores Animados
- Utiliza **Intersection Observer API** para detectar cuando la sección es visible
- Anima los números desde 0 hasta el valor objetivo en 2 segundos
- Delays progresivos para efecto de cascada
- Soporta decimales y sufijos personalizados

#### Navbar.tsx - Navegación Inteligente
- **Sticky positioning** con cambio de estilo al hacer scroll
- Menú móvil responsivo con animación hamburguesa
- **Smooth scroll** programático a las secciones
- Transiciones suaves entre estados

#### FAQ.tsx - Acordeón Interactivo
- State management con useState
- Animación de rotación del chevron
- Solo una pregunta abierta a la vez
- Transiciones suaves de expansión/colapso

#### Changelog.tsx - Timeline Visual
- Layout alternado en desktop (zigzag)
- Indicadores de estado: completado/pendiente
- Iconos dinámicos según estado
- Línea vertical conectora

### Accesibilidad y UX

- **Contraste WCAG AA**: Todos los textos cumplen con estándares de accesibilidad
- **Responsive Design**: Breakpoints md: para tablet/desktop
- **Smooth Scroll**: Navegación fluida entre secciones
- **Loading States**: Contadores con animación progresiva
- **Hover Feedback**: Todas las áreas interactivas tienen feedback visual

### Datos Reales del Proyecto

La web integra datos reales del proyecto Kaia documentado en Obsidian Vault:
- **38 endpoints** REST API documentados
- **52 tests** automatizados (100% passing)
- **99.9% uptime** en producción (Railway)
- **15-18ms** response time promedio
- **1000+ usuarios** activos
- **5000+ descargas** totales

### Historial de Desarrollo

**Fase 1: Setup Inicial**
- Creación de proyecto Next.js 16 + TypeScript + Tailwind 4.0
- Configuración de colores Kaia en globals.css
- 4 secciones básicas: Hero, Features, Download, Footer

**Fase 2: Expansión Completa**
- Lectura de documentación completa de Kaia (Obsidian Vault)
- Creación de 6 secciones adicionales (Navbar, Stats, TechStack, Changelog, FAQ, CTA)
- Expansión de constants.ts con datos del MVP
- Componentes interactivos (contadores, accordion, menú móvil)

**Fase 3: Fixes de Accesibilidad**
- Fix de contraste en Navbar (text-foreground → text-gray-900)
- Fix de contraste en FAQ (text-muted-foreground → text-gray-700)
- Fix de contraste en TechStack y Changelog
- Fix de contraste en Footer (bg-foreground → bg-gray-900)

## 🌐 Deployment

### Servidor Contabo

La web será desplegada en servidor Contabo (después del 1 de noviembre de 2024).

Requisitos para deployment:
- Node.js 20+
- PM2 para process management
- Nginx como reverse proxy
- SSL/TLS con Let's Encrypt

## 🔗 Links Relacionados

- **Backend API**: https://kaia-production.up.railway.app
- **Swagger Docs**: https://kaia-production.up.railway.app/api/docs
- **GitHub (App)**: https://github.com/adrianpuche12/Kaia

## 📄 Licencia

Este proyecto es parte del ecosistema Kaia desarrollado por Jorge Adrián Pucheta.

## 👤 Autor

**Jorge Adrián Pucheta**
- Email: jorgeadrian_pucheta@hotmail.com
- GitHub: [@adrianpuche12](https://github.com/adrianpuche12)

---

**Hecho con ❤️ para Kaia**
