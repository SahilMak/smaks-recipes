import * as React from 'react';
import styles from './page.module.scss'
import BgImage from '@/components/bgImage/BgImage';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <main className={styles.main}>
		<BgImage/>
		<Stack
			className={styles.stack}
			spacing={2}
		>
			<Typography
				className={styles.typographyTop}
				component="div"
				variant="h2"
			>
				Welcome to<br />Smak&apos;s Recipes!
			</Typography>
			<Typography
				className={styles.typographyBottom}
				component="div"
				variant="h2"
			>
				Coming soon
			</Typography>
		</Stack>
    </main>
  )
}
