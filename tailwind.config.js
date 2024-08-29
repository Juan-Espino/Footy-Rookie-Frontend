import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				around: {
					// "12.5%": {
					// 	transform: "translateX(-95px) translateY(-7.5%) scale(.875)",
					// 	zIndex: "-25 ",
					// 	opacity: ".875",
					// },
					"25%": {
						transform: "translateX(-300px) translateY(-15%) scale(.75)",
						zIndex: "-50 ",
						opacity: ".75",
					},

					"50%": {
						transform: "translateX(0px) translateY(-30%) scale(.50)",
						zIndex: "-100",
						opacity: ".15",
					},

					"75%": {
						transform: "translateX(300px) translateY(-15%) scale(.75)",
						zIndex: "-50",
						opacity: ".75",
					},

					"100%": {
						transform: "translateX(0px) translateY(0%) scale(1)",
						zIndex: "100",
						opacity: "1",
					},
				},
			},

			animation: {
				"around-the-world": "around 20s linear infinite",
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
