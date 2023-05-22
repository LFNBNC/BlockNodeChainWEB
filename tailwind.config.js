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

          fontFamily: {
            code: ['Source Code Pro', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
            screens: {
              'sm': '640px',   // Small devices (e.g., smartphones)
              'md': '768px',   // Medium devices (e.g., tablets)
              'lg': '1024px',  // Large devices (e.g., laptops)
              'xl': '1280px',  // Extra large devices (e.g., desktops)
          
          },
        }
      },
    },
  },
  variants: {},
  plugins: [],
}
