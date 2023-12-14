/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {'primary': '#2babab', 'primary-hover': '#35bbbb', 'white': '#F8FCFF', 'white-bg': '#eff8ff', 'white-text': '#dfdfdf', 'background': '#161921', 'darkBackground': '#12141a'},
		},
		screens: {
			'xsm': '564px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		boxShadow: {
			'shadow-sm': ' 1px 1px 14px -1px rgba(0,0,0,0.62);', 
			//Perdi las shadow por defecto al agregar boxShadow aqui y no se como se recuperan
			//En caso de necesitarse las defecto, se borra el objeto boxShadow. PERO la sombra de los input 
			//en el componente Contact se perderian
		},
	},
	plugins: [],
}
