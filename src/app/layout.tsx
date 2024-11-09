import type { Metadata } from 'next'
import { gayathri } from '@/fonts';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from '@/components/navbar/Navbar';
import theme from '../theme';
import './globals.scss'

export const metadata: Metadata = {
  title: 'Smak\'s Recipes',
  description: 'Easy recipes for amateur cooks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={gayathri.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Navbar font={gayathri} />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
