import type { Metadata } from 'next'
import { gayathri } from '@/lib/fonts';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import AppThemeContext from '../context/AppThemeContext';
import Navbar from '@/components/navbar/Navbar';
import { getAllRecipes } from '@/lib/firebase/firestore';
import StoreProvider from './StoreProvider';
import './globals.scss'

export const metadata: Metadata = {
	title: 'Smak\'s Recipes',
  	description: 'Easy recipes for amateur cooks',
}

export default async function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode
}>) {
	const recipes = await getAllRecipes();
	return (
		<html lang="en">
			<body className={gayathri.variable}>
				<AppRouterCacheProvider options={{enableCssLayer: false}}>
					<StoreProvider recipes={recipes}>
						<AppThemeContext>
							<InitColorSchemeScript attribute="class" />
							<Navbar />
							<main>
								{children}
							</main>
						</AppThemeContext>
					</StoreProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	)
}
