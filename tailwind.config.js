/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern-1': "url('app/assets/bg.jpg')",
        'hero-pattern-2': "url('app/assets/bg2.jpg')",
        'hero-pattern-3': "url('app/assets/bg3.jpg')",
        'hero-pattern-4': "url('app/assets/bg4.jpg')",
        logo: "url('app/assets/logo.png')",
        portait: "url('app/assets/robin.png')"
      }
    }
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography')],
  daisyui: {
    themes: [
      {
        forsrobin: {
          primary: '#488ccb',
          secondary: '#488cab',
          accent: '#37cdbe',
          neutral: '#333',
          'base-100': '#0b101a',
          'base-200': '#6b7280',
          'base-300': '#090c12',
          'base-content': '#aaa',

          '--rounded-box': '1rem',
          '--rounded-btn': '0.5rem',
          '--rounded-badge': '1.9rem',
          '--animation-btn': '0.25s',
          '--animation-input': '0.2s',
          '--btn-text-case': 'uppercase',
          '--btn-focus-scale': '0.95',
          '--border-btn': '1px',
          '--tab-border': '1px',
          '--tab-radius': '0.5rem'
        }
      }
    ]
  }
}
