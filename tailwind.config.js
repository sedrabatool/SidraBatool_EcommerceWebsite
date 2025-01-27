module.exports = {
	content: [
	  './app/**/*.{js,ts,jsx,tsx}',  // Make sure the paths match your project structure
	  './pages/**/*.{js,ts,jsx,tsx}',  // Add other relevant paths if needed
	],
	theme: {
	  extend: {
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'], // Ensure this matches
		  },
	  },
	},
	plugins: [],
  };
  