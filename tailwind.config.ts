import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        // Heparbion Plus Brand Colors
        emerald: {
          DEFAULT: '#043927',
          50: '#e6f5ef',
          100: '#b3e0cc',
          200: '#80cba9',
          300: '#4db686',
          400: '#26a66d',
          500: '#043927',
          600: '#033320',
          700: '#022c1a',
          800: '#012614',
          900: '#01200e',
        },
        gold: {
          DEFAULT: '#D4AF37',
          50: '#fdf8e8',
          100: '#f9edc0',
          200: '#f0d97a',
          300: '#e8c84d',
          400: '#D4AF37',
          500: '#b8962e',
          600: '#9a7d26',
          700: '#7c641e',
          800: '#5e4b16',
          900: '#40330f',
        },
        cream: {
          DEFAULT: '#FAF8F5',
          50: '#FFFFFF',
          100: '#FAF8F5',
          200: '#F5F1EB',
          300: '#EDE7DD',
          400: '#E2D9CC',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      borderRadius: {
        lg: 'calc(var(--radius) + 2px)',
        md: 'var(--radius)',
        sm: 'calc(var(--radius) - 2px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-in': {
          from: { transform: 'translateY(10px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-12px) rotate(1deg)' },
          '66%': { transform: 'translateY(-6px) rotate(-1deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(4, 57, 39, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(4, 57, 39, 0.6), 0 0 60px rgba(212, 175, 55, 0.2)' },
        },
        'reveal-up': {
          from: { opacity: '0', transform: 'translateY(60px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'reveal-left': {
          from: { opacity: '0', transform: 'translateX(-60px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'reveal-right': {
          from: { opacity: '0', transform: 'translateX(60px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'reveal-scale': {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'wave': {
          '0%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(0.4)' },
          '100%': { transform: 'scaleY(1)' },
        },
        'mesh-move': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'reveal-up': 'reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reveal-left': 'reveal-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reveal-right': 'reveal-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reveal-scale': 'reveal-scale 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'wave': 'wave 1.2s ease-in-out infinite',
        'mesh-move': 'mesh-move 15s ease infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      },
    }
  },
  plugins: [
    animate,
    typography,
  ],
} satisfies Config;
