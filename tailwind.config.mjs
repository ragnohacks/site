/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dino-teal': '#76B8B0',
				'dino-dark-teal': '#449F94',
				'dino-neon-orange': '#FDA747',
				'dino-orange': '#FFBE74',
				'dino-dark-orange': '#E97D04',
			},
		},
	},
	plugins: [],
}
