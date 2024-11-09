'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { shrikhand } from '@/fonts';
import './navbar.scss';

const pages = [
	{text: 'HOME', link: '/'},
	{text: 'MEALS', link: ''},
	{text: 'CUISINE', link: ''},
	{text: 'ABOUT', link: '/about'}
];
const meals = [
	{text: 'Beverages', link: '/meals/beverages'},
	{text: 'Breakfast', link: '/meals/breakfast'},
	{text: 'Dessert', link: '/meals/dessert'},
	{text: 'Dinner', link: '/meals/dinner'},
	{text: 'Lunch', link: '/meals/lunch'},
	{text: 'Sides', link: '/meals/sides'},
	{text: 'Soup', link: '/meals/soup'},
	{text: 'View all', link: '/meals'}
];
const cuisine = [
	{text: 'American', link: '/cuisine/american'},
	{text: 'Asian', link: '/cuisine/asian'},
	{text: 'Filipino', link: '/cuisine/filipino'},
	{text: 'Greek', link: '/cuisine/greek'},
	{text: 'Indian', link: '/cuisine/indian'},
	{text: 'Indo-Chinese', link: '/cuisine/indo-chinese'},
	{text: 'Lebanese', link: '/cuisine/lebanese'},
	{text: 'Mexican', link: '/cuisine/mexican'},
	{text: 'Thai', link: '/cuisine/thai'},
	{text: 'View all', link: '/cuisine'}
];

export default function Navbar(props: any) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [openMenu, setOpenMenu] = useState('');
	const router = useRouter();
  const open = Boolean(anchorEl);
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
			const tabText: string = event.currentTarget.innerText;
			if (tabText === 'HOME' || tabText === 'ABOUT') {
				const obj = pages.find((page) => page.text === tabText);
				router.push(obj!.link);
			} else {
				console.log(tabText);
				setOpenMenu(tabText);
				setAnchorEl(event.currentTarget);
			}
  };
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar position="fixed">
			<Container>
				<Toolbar disableGutters>
					<Typography
						className={shrikhand.variable}
						color="primary"
						noWrap
						component="div"
						variant="h1"
						sx={{ display: { xs: 'none', sm: 'flex' }, mr: 1 }}
					>
						Smak&apos;s Recipes
					</Typography>
					<Box
						className={props.font.variable}
						sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1, mr: 2 }}
					>
					{pages.map((page) => (
						<Button
							key={page.text}
							color="inherit"
							onClick={handleOpen}
							variant="text"
							sx={{ my: 2, display: 'block'}}
						>
							{ page.text }
						</Button>
					))}
						<Menu
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
						>
						{(openMenu === 'MEALS' ? meals : cuisine).map((obj: any) => (
							<MenuItem
								key={obj.text}
								divider
								onClick={() => router.push(obj.link)}
								sx={{
									':hover': {
										bgcolor: 'secondary.main',
										color: 'secondary.contrastText'
									}
								}}
							>
								{ obj.text }
							</MenuItem>
						))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}