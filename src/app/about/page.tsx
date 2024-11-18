import * as React from 'react';
import styles from './page.module.scss';
import BgImage from '@/components/bgImage/BgImage';

export default function About() {
	return (
		<>
			<BgImage page={'about'} />
			<div className={styles.text}>About Me coming soon!</div>
		</>
	)
}