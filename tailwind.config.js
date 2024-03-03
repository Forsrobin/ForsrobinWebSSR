const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern-1': "url('app/assets/oooscillate.svg')",
        logo: "url('app/assets/logo.svg')",
        portait: "url('app/assets/robin.webp')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      screens: {
        standalone: { raw: '(display-mode: standalone)' }
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    }
  },
  plugins: [require("daisyui"), addVariablesForColors],
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

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}