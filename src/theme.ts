'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	cssVariables: true,
	colorSchemes: {
		light: {
			palette: {
				primary: {
					main: '#33C9DC',
					dark: '#006874',
				},
				secondary: {
					main: '#DCB733',
					contrastText: '#231B00'
				},
				error: {
					main: '#DC6333',
				},
				warning: {
					main: '#DC9333',
				},
				info: {
					main: '#9333DC',
				},
				success: {
					main: '#7CDC33',
				},
				background: {
					default: '#E9EFF0',
					paper: '#E9EFF0',
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
					main: '#564500',
					contrastText: '#FEE086'
				},
				error: {
					main: '#DC6333',
				},
				warning: {
					main: '#DC9333',
				},
				info: {
					main: '#9333DC',
				},
				success: {
					main: '#7CDC33',
				},
				background: {
					default: '#0E1415',
					paper: '#0E1415',
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
});

export default theme;