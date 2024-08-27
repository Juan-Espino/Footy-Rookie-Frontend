import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				around: {
					"25%": { transform: "translateX(-40%) scale(.75) " },

					"50%": { transform: "translateX(0%) scale(.50)" },

					"75%": { transform: "translateX(40%) scale(.75)" },
					"100%": { transform: "translateX(0%) scale(1)" },
				},
			},

			animation: {
				"around-the-world": "around 20s linear infinite",
			},
		},
	},
	plugins: [],
};
