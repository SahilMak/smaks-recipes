'use client';
import React from 'react';
import { useAppSelector } from '@/lib/hooks';
import styles from './page.module.scss';
import { Recipe } from '@/models/recipes';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Image from 'next/image';

export default function Recipes() {
	const recipes = useAppSelector((state) => state.recipes.list);

	return (
		<Box
			className={styles.box}
			sx={{ flexGrow: 1 }}
		>
			<Grid
				container
				className={styles.gridContainer}
				spacing={{ xs: 3, sm: 3, md: 4 }}
			>
			{recipes?.map((recipe: Recipe) => (
				<Grid
					size={{ xs: 6, sm: 6, md: 4}}
					key={recipe.name}
					className={styles.grid}
					sx={{
						'&:hover': {
							bgcolor: 'primary.light',
							color: 'background.default',
						}
					}}
				>
					<Stack
						spacing={4}
						className={styles.stack}
						sx={{
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<Image
							src={ recipe.image }
							alt={ recipe.name }
							placeholder="blur"
							height={625}
							width={500}
							quality={25}
							loading="eager"
							className={styles.image}
						/>
						<div className={styles.name}>{ recipe.name }</div>
					</Stack>
				</Grid>
			))}
			</Grid>
		</Box>
	)
}