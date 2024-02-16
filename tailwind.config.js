module.exports = {
	content: [
		"./src/**/*.{html,ts}",
	],
	theme: {
		extend: {},
	},
	plugins: [import('@tailwindcss/forms')],
}