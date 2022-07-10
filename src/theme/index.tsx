import { createTheme } from '@mui/material/styles'
import GlobalStyles from '@mui/material/GlobalStyles'

declare module '@mui/material/styles' {
	interface Palette {
		neutral: Palette['primary']
	}
	interface PaletteOptions {
		neutral: PaletteOptions['primary']
	}
	interface TypeBackground {
		bg1: string
		bg2: string
		bg3: string
	}
}
export const theme = createTheme({
	typography: {
		fontFamily: 'Montserrat',
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				'*': {
					margin: 0,
					padding: 0,
				},
				body: {
					lineHeight: '1.7',
					color: '#ffffff',
					border: 'none',
				},
				ul: {
					listStyle: 'none',
				},
				a: {
					textDecoration: 'none',
					color: '#ffffff',
				},
				h1: {
					lineHeight: '1.2',
					fontSize: '2.4rem',
				},
				h2: {
					lineHeight: '1.2',
					fontSize: '2rem',
				},
				h3: {
					lineHeight: '1.2',
					fontSize: '1.6rem',
				},
				h4: {
					lineHeight: '1.2',
					fontSize: '1.3rem',
				},
				h5: {
					lineHeight: '1.2',
				},
				h6: {
					lineHeight: '1.2',
				},
				section: {
					padding: '6rem 0',
				},
				'section > h2': {
					textAlign: 'center',
					marginBottom: '4rem',
				},
			},
		},
	},
	palette: {
		neutral: {
			main: '#64748B',
			contrastText: '#ffffff',
		},
		background: {
			default: '#1f2641',
			bg1: '#1f2641',
			bg2: '#2e3267',
			bg3: '#424890',
		},
	},
})

export const globalStyles = (
	<GlobalStyles
		styles={{
			'.container': {
				margin: '0 auto',
				width: '80%',
			},
			'.btn': {
				display: 'inline-block',
				background: 'white',
				color: 'black',
				padding: '1rem 2rem',
				border: '1px solid transparent',
				fontWeight: '500',
				transition: theme.transitions.create('all', { duration: 400 }),
			},
			'.btn:hover': {
				background: 'transparent',
				color: '#ffffff',
				backgroundColor: '#ffffff',
			},
			'.btn-primary': {
				background: theme.palette.error.main,
				color: 'white',
			},
			'.window-scroll': {
				background: '#6c63ff!important',
				boxShadow: '0 1rem 2rem rgba(0, 0, 0, 0.2)',
			},
		}}
	/>
)
