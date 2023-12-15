/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'primary': '#2babab', 'primary-hover': '#35bbbb', 
				'white': '#F8FCFF', 'white-bg': '#eff8ff', 'white-text': '#dfdfdf', 
				'background': '#161921', 'darkBackground': '#12141a'
			},
			backgroundImage: {
				'dark-bg': "url('public/Assets/Backgrounds/Dark-bg.svg')",
				'light-bg': "url('public/Assets/Backgrounds/Light-bg.svg')",
			  }
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
			'sectionShadow': ' 0 4px 6px 0 rgba(144, 144, 144, 0.25);',
			'dark-sectionShadow': ' 0 4px 6px 0 rgba(0, 0, 0, 0.25);',
			//Perdi las shadow por defecto al agregar boxShadow aqui y no se como se recuperan
			//En caso de necesitarse las defecto, se borra el objeto boxShadow. PERO la sombra de los input 
			//en el componente Contact se perderian
		},
	},
	plugins: [],
}
