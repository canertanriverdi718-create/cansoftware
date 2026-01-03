import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef7ff',
          100: '#d8ecff',
          200: '#b9deff',
          300: '#89cbff',
          400: '#52aeff',
          500: '#2a8bff',
          600: '#0d6bf5',
          700: '#0654e1',
          800: '#0b44b6',
          900: '#103c8f',
          950: '#0d2657',
        },
        accent: {
          cyan: '#00d4ff',
          purple: '#a855f7',
          pink: '#ec4899',
          blue: '#3b82f6',
        },
        dark: {
          50: '#f6f6f7',
          100: '#e2e3e5',
          200: '#c4c6cb',
          300: '#9fa2a9',
          400: '#7a7e87',
          500: '#5f636c',
          600: '#4b4e56',
          700: '#3e4047',
          800: '#35373c',
          900: '#1a1b1e',
          950: '#0d0e10',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0d0e10 0%, #1a1b2e 25%, #0d1f3c 50%, #1a0d2e 75%, #0d0e10 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide': 'slide 30s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)' },
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0, 212, 255, 0.3)',
        'glow-md': '0 0 30px rgba(0, 212, 255, 0.4)',
        'glow-lg': '0 0 50px rgba(0, 212, 255, 0.5)',
        'glow-purple': '0 0 30px rgba(168, 85, 247, 0.4)',
        'soft-xl': '0 20px 50px -12px rgba(0, 0, 0, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(0, 212, 255, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config
