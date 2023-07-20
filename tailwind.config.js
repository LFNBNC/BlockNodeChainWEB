/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          gridTemplateRows: {
            bento: 'repeat(auto-fill, minmax(200px, 1fr))',
          },
          gridTemplateColumns: {
            bento: 'repeat(auto-fill, minmax(200px, 1fr))',
          },
          fontFamily: {
            orbitron: "Orbitron",
          },
          fontSize: {
            "5xl": "24px",
          },
          corePlugins: {
            preflight: false,
          },
      },
    },
  },
  variants: {},
  plugins: [],
}
