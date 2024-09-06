import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"default-text": "var(--text-color)",
				background: "var(--background)",
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
