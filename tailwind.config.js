/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '10xl': ['227px', {
        lineHeight: '14rem',
        fontWeight: '600',
      }],
    extend: {},
  },
  plugins: [],
}
}
