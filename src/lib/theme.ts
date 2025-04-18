import { createTheme, responsiveFontSizes, Theme } from '@mui/material/styles';

const theme: Theme = responsiveFontSizes(
	createTheme({
		cssVariables: {
			colorSchemeSelector: "class",
			disableCssColorScheme: true
		},
		colorSchemes: {
			light: {
				palette: {
					primary: {
						main: '#006874',
						dark: '#33C9DC',
					},
					secondary: {
						main: '#DCB733',
						light: '#FEE086',
						dark: '#564500',
					},
					error: {
						main: '#DC6333',
					},
					warning: {
						main: '#DC9333',
					},
					info: {
						main: '#9333DC',
						light: '#F1DAFF',
						dark: '#573A70',
					},
					success: {
						main: '#7CDC33',
					},
					background: {
						default: '#E9EFF0',
						paper: '#E3E9EA',
					},
					text: {
						primary: '#171D1E',
					},
				},
			},
			dark: {
				palette: {
					primary: {
						main: '#33C9DC',
						dark: '#006874',
					},
					secondary: {
						main: '#DCB733',
						light: '#FEE086',
						dark: '#564500',
					},
					error: {
						main: '#DC6333',
					},
					warning: {
						main: '#DC9333',
					},
					info: {
						main: '#9333DC',
						light: '#F1DAFF',
						dark: '#573A70',
					},
					success: {
						main: '#7CDC33',
					},
					background: {
						default: '#0E1415',
						paper: '#252B2C',
					},
					text: {
						primary: '#DEE3E5',
					},
				},
			},
		},
		typography: {
			fontFamily: 'var(--font-gayathri)',
			h1: {
				fontFamily: 'var(--font-shrikhand)',
			},
		},
	})
);

export default theme;