import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Kaia Brand Colors - Primary (Índigo)
        primary: {
          DEFAULT: '#4F46E5',
          50: '#EEEEFF',
          100: '#E0DDFF',
          200: '#C7C3FE',
          300: '#A5A0FD',
          400: '#8B85FA',
          500: '#4F46E5', // Main
          600: '#4338CA',
          700: '#3730A3',
          800: '#312E81',
          900: '#1E1B4B',
          light: '#818CF8',
          dark: '#3730A3',
        },

        // Secondary (Púrpura)
        secondary: {
          DEFAULT: '#7C3AED',
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#7C3AED', // Main
          600: '#9333EA',
          700: '#7E22CE',
          800: '#6B21A8',
          900: '#581C87',
          light: '#A78BFA',
          dark: '#5B21B6',
        },

        // Tertiary (Verde Esmeralda)
        tertiary: {
          DEFAULT: '#10B981',
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981', // Main
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          light: '#34D399',
          dark: '#059669',
        },

        // Accent (Ámbar)
        accent: {
          DEFAULT: '#F59E0B',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B', // Main
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
          light: '#FBBF24',
          dark: '#D97706',
        },

        // Status Colors
        success: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#F87171',
          dark: '#DC2626',
        },
        info: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          dark: '#2563EB',
        },
      },

      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },

      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4F46E5, #7C3AED)',
        'gradient-success': 'linear-gradient(135deg, #10B981, #34D399)',
        'gradient-sunset': 'linear-gradient(135deg, #F59E0B, #EF4444)',
        'gradient-ocean': 'linear-gradient(135deg, #3B82F6, #06B6D4)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },

      boxShadow: {
        'glow-primary': '0 0 20px rgba(79, 70, 229, 0.5)',
        'glow-secondary': '0 0 20px rgba(124, 58, 237, 0.5)',
        'glow-tertiary': '0 0 20px rgba(16, 185, 129, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
