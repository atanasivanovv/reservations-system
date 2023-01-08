/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				main: '#1D4ED8',
			},
			backgroundImage: {
				'canvas-background': 'url(./assets/canvas-bg.jpg)',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
