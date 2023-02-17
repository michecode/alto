/** @type {import('tailwindcss').Config} */

// const colors = require('src/styles/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			serif: ['Recoleta'],
			sans: ['Helvetica']
		},
		colors: {
			transparent: 'transparent',
			black: '#000',
			white: '#FFF',
			offwhite: '#FFF8F4',
			almond: '#ECDCC9',
			wheat: '#EDD4B2',
			tweed: '#D0A98F',
			byz: '#4D243D',
			silver: '#CAC2B5',
			eerie: '#202020'
		},
		extend: {
			bgGradientDeg: {
				0: '0deg',
				90: '90deg',
				180: '180deg',
				270: '270deg'
			}
		}
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'bg-gradient': (angle) => ({
						'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`
					})
				},
				{
					// values from config and defaults you wish to use most
					values: Object.assign(
						theme('bgGradientDeg', {}), // name of config key. Must be unique
						{
							10: '10deg', // bg-gradient-10
							15: '15deg',
							20: '20deg',
							25: '25deg',
							30: '30deg',
							45: '45deg',
							60: '60deg',
							90: '90deg',
							120: '120deg',
							135: '135deg'
						}
					)
				}
			);
		})
	]
};
