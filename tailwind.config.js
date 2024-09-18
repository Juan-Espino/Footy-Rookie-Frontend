/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "selector",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"matte-white": "rgb(242, 243, 244)",
				"matte-black": "rgb(16, 18, 28)",
				"matte-black-light": "rgb(27, 29, 48)",
				"matte-grey": "rgb(189, 189, 189)",
				"prem-purple": "rgb(61, 25, 91)",
			},
			backgroundImage: {
				"light-theme": "url('/src/assets/images/lightTheme.jpg')",
				"dark-theme": "url('/src/assets/images/darkTheme.jpg')",
			},
			animationDelay: {
				10000: "10000ms",
				"-10000": "-10000ms",

				"-15000": "-15000ms",
			},
		},
	},
	plugins: [require("tailwindcss-animation-delay")],
};
