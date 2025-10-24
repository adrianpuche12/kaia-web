# 🌐 Kaia Web - Landing Page Oficial

Landing page oficial de Kaia, el asistente personal inteligente por voz.

![Kaia](https://img.shields.io/badge/Version-1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)

## 📋 Descripción

Esta es la landing page oficial de **Kaia**, un asistente personal inteligente que ayuda a los usuarios a gestionar su vida diaria mediante comandos de voz naturales. La web sirve como punto de entrada principal para nuevos usuarios, mostrando características clave, estadísticas y opciones de descarga.

## ✨ Características

- **Diseño Moderno**: Landing page con diseño profesional y responsive
- **Paleta de Colores Kaia**: Sincronizada con la aplicación móvil (Índigo, Púrpura, Verde Esmeralda, Ámbar)
- **Secciones Completas**:
  - Hero con gradiente y CTAs
  - Features (6 características principales)
  - Download (links a tiendas y APK directo)
  - Footer con links y redes sociales
- **SEO Optimizado**: Metadatos completos para búsqueda y redes sociales
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
│   ├── layout.tsx          # Layout principal con metadatos
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales + colores Kaia
│
├── components/
│   ├── sections/
│   │   ├── Hero.tsx        # Sección hero con gradiente
│   │   ├── Features.tsx    # Características principales
│   │   ├── Download.tsx    # Opciones de descarga
│   │   └── Footer.tsx      # Footer con links
│   │
│   └── ui/
│       ├── Button.tsx      # Componente de botón reutilizable
│       └── Card.tsx        # Componente de tarjeta
│
├── lib/
│   └── constants.ts        # Constantes (textos, links, etc.)
│
└── public/
    └── (assets estáticos)
```

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4.0
- **UI**: Componentes custom con Tailwind
- **Icons**: SVG inline
- **Fonts**: Geist Sans & Geist Mono

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

## 🌐 Deployment

### Servidor Contabo

Instrucciones para deployment en servidor Contabo (próximamente).

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
