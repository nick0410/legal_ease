module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: '#FF9933',
        white: '#FFFFFF',
        green: '#138808',
      },
      backgroundImage: {
        'ashoka-chakra': "url('/path/to/ashoka-chakra.svg')", // Update with actual path
      },
    },
  },
  plugins: [],
}