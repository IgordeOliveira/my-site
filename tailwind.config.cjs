const defaultTheme = require("tailwindcss/defaultTheme");


/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  fontFamily: {
			sans: ["Fira Sans", ...defaultTheme.fontFamily.sans],
			mono: ["DejaVu Mono", ...defaultTheme.fontFamily.mono],
		  },
		},
	  },
	plugins: [
		require('@tailwindcss/typography'),
		require("daisyui"),
		require('tailwind-scrollbar-hide')

	],
	daisyui: {
		themes: [
			{
				dark: {
				  ...require("daisyui/src/colors/themes")["[data-theme=corporate]"],

				//   primary: "#4361ee",
				//   secondary: "#edf2f4",
				  accent: "#2B2D42",
				  neutral: "#dee2e6",
				//   "base-100": "#edf2f4",
				},
			  },
		],
	}
}
