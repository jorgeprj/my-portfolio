import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: '#5e5ce6',
				sucess: '#41c958',
				alert: '#d44760',

			},
			boxShadow: {
				grid: '0px 4px 10px 0px rgba(0, 0, 0, 0.05);'
			}
		}
	},
	plugins: [require("@tailwindcss/container-queries")],
};
export default config;
