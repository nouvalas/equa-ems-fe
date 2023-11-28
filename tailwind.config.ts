import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat: ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
       'radial-gradient' : "radial-gradient(103.88% 58.43% at 56.74% 50%, #0085FF 0%, #003465 100%)"
      },
    },
  },
  plugins: [],
}
export default config
