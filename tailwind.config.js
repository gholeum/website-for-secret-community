// @type {import('tailwindcss').Config}
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        brr: ['Ruslan Display'],
        brr2: ['TriodPostnaja']
      },
      backgroundImage: {
        'for-cult': "url('/src/assets/0ZHRgdC00Y0g0LLRhtC90YrRidGA0YMg0YMg0YjRitGR0YLRgdC2==.png')"
      }
    }
  },
  plugins: []
}
