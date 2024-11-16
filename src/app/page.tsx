import * as React from 'react';
import styles from './page.module.scss'
import BgImage from '@/components/bgImage/BgImage';

export default function Home() {
  return (
    <main className={styles.main}>
		<BgImage/>
		<h2>Home</h2>
    </main>
  )
}
