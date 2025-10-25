import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // Lista de locales soportados
  locales: ['es', 'en'],

  // Locale por defecto
  defaultLocale: 'es',

  // Configuración de path
  localePrefix: 'always' // URLs siempre tendrán /es o /en
});

// Crear helpers de navegación tipados
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
