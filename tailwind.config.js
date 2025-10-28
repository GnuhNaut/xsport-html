/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Quét các file .html ở thư mục gốc
    "./**/*.html", // Quét các file .html ở thư mục con
    "./assets/js/**/*.js" // Quét các file .js
  ],
  theme: {
    extend: {
      // Bạn có thể chuyển cấu hình 'theme' từ script trong HTML vào đây
      colors: {
        'black': '#121218', 
        'brand-cream': '#F5F5F5',
        'brand-navy-light': '#1A1A26', 
        'brand-teal': '#14b8a6', 
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'micho': ['Montserrat', 'sans-serif'],
        'erica': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}