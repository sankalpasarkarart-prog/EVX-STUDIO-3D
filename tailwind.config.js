/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        surface: "rgba(255, 255, 255, 0.0)", 
        foreground: "#0f172a",
        primary: "#3b82f6", 
        accent: "#8b5cf6",
        sky: "#0ea5e9",
        brandDark: "#050B14", // Very deep blue, near black
      },
      fontFamily: {
        sans: ['"SF Pro Display"', '"SF Pro Text"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        heading: ['Futura', '"Outfit"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        accentItalic: ['"Playfair Display"', 'serif'], // Used in place of cursive
      },
      backgroundImage: {
        'dreamy': "url('/bg-dreamy.jpg')",
        'user': "url('/bg-user.jpg')",
      }
    },
  },
  plugins: [],
}
