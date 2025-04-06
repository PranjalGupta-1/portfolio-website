// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: '#8e4268',
        deepPurple: '#534274',
        silver: '#b4b4b4',
        crimson: '#a10d25',
        beige: '#b9a178',
        lightPink: '#f5bce0',
        lavender: '#8579a1',
        offWhite: '#f4f4f4',
        paleViolet: '#fbf0ff',
        mauve: '#a2557c',
        golden: '#e28743',
      },
      backgroundImage: {
        'home-gradient': 'linear-gradient(to bottom right, #534274, #b9a178, #8579a1)',
        'about-gradient': 'linear-gradient(to bottom right, #534274, #b9a178, #8579a1)',
        'projects-gradient': 'linear-gradient(to bottom right, #8e4268, #a10d25, #a2557c)',
        'contact-gradient': 'linear-gradient(to bottom right, #534274, #b9a178, #8579a1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
      },
    },
  },
  plugins: [],
};