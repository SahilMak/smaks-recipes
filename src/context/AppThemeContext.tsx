'use client';
import { createContext, useContext, useMemo } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type {} from '@mui/material/themeCssVarsAugmentation';
import theme from '../lib/theme';

const AppThemeContext = createContext(null);

export default function AppThemeProvider(props: any) {
	const appTheme = useMemo(() => {
		return theme
	}, []);

  return (
		<AppThemeContext.Provider value={null}>
			<ThemeProvider theme={appTheme} defaultMode='light' disableTransitionOnChange>
				<CssBaseline enableColorScheme />
				{props.children}
			</ThemeProvider>
		</AppThemeContext.Provider>
	)
}

export const useAppThemeContext =  () => useContext(AppThemeContext);