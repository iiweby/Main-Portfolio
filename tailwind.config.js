/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			fontFamily: {
				Lato: ["Lato", "sans-serif"],
				tangerine: ["Tangerine", "cursive"],
				Mono: ["IBM Plex Mono", "monospace"],
				belanosima: ["belanosima", "sans-serif"],
				Montserrat: ["Montserrat", "sans-serif"],
			},
			colors: {
				brightRed: "hsl (12, 88%, 59%)",
				brightRed: "hsl(12, 88%, 59%)",
				brightRedLight: "hsl(12, 88%, 69%)",
				brightRedSupLight: "hsl(12, 88%, 95%)",
				darkBlue: "hsl(228, 39%, 23%)",
				darkGrayishBlue: "hsl(227, 12%, 61%)",
				veryDarkBlue: "hsl(233, 12%, 13%)",
				veryPaleRed: "hsl(13, 100%, 96%)",
				veryLightGray: "hsl(0, 0%, 98%)",
				blueRibbon: "#1463F3",
				darkBlueRibbon: "#0028B9",
				lightBlueRibbon: "#80BEFF",
				inavy: "#0a192f",
				ironGray: "#52595D",
			},
		},
	},
	plugins: [],
};
