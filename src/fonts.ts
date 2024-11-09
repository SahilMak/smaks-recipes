import { Gayathri, Shrikhand } from 'next/font/google'

export const gayathri = Gayathri({
  weight: ['100', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gayathri'
});

export const shrikhand = Shrikhand({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-shrikhand'
});