/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "selector",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"matte-white": "rgb(242, 243, 244)",
				"matte-black": "rgb(16, 18, 28)",
				"transparent-matte-black": "rgba(16, 18, 28,.9)",
				"matte-black-light": "rgb(27, 29, 48)",
				"matte-grey": "rgb(189, 189, 189)",
				"prem-purple": "rgb(61, 25, 91)",
				"prem-pink": "rgb(255, 0, 90)",
			},
			fontFamily: {
				nunito: ["Nunito", "sans-serif"],
				marker: ["Permanent Marker", "cursive"],
			},
			backgroundImage: {
				"light-theme": "url('/src/assets/images/lightTheme.jpg')",
				"dark-theme": "url('/src/assets/images/darkTheme.jpg')",
				"soccer-ball": "url('/src/assets/images/soccer_ball.png')",
				"tactics-board": "url('/src/assets/images/tactics_board.webp')",
				"light-tactics-board":
					"url('/src/assets/images/light_tactics_board.png')",
				"moonlit-asteroid":
					"linear-gradient(to right, #0f2027, #203a43, #2c5364)",
				mastercard: "linear-gradient(to right, #f46b45, #eea849)",
				kyoto: "linear-gradient(to left, #c21500, #ffc500);",
				darken: "linear-gradient( rgba(0,0,0,.5), rgba(0,0,0,.5) )",
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
