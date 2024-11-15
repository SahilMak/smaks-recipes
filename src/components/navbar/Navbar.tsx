'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useColorScheme } from '@mui/material/styles';
import Search from './Search';
import { gayathri, shrikhand } from '@/fonts';
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

export default function Navbar() {
	const { mode, setMode } = useColorScheme();
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
			setOpenMenu(tabText);
			event.stopPropagation();
			setAnchorEl(event.currentTarget);
		}
};
	const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		setAnchorEl(null);
	};
	const toggleMode = React.useCallback(() => {
    if (mode) {
      const newMode = (mode === 'dark') ? 'light' : 'dark';
      setMode(newMode);
    }
  }, [mode, setMode]);

	if (!mode) {
    return null;
  }
	return (
		<AppBar
			className="appBar"
			position="sticky"
		>
			<Container
				className="container"
			>
				<Toolbar
					className="toolbar"
					disableGutters
				>
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
						className={gayathri.variable}
						sx={{ display: { xs: 'none', sm: 'flex' }, mr: 2 }}
					>
					{pages.map((page) => (
						<Button
							className="button"
							key={page.text}
							color="inherit"
							onClick={handleOpen}
							variant="text"
							sx={{ my: 2}}
						>
							{ page.text }
						</Button>
					))}
						<Menu
							anchorEl={anchorEl}
							disableScrollLock={true}
							open={open}
							onClose={handleClose}
						>
						{(openMenu === 'MEALS' ? meals : cuisine).map((obj: any) => (
							<MenuItem
								className="MenuItem"
								key={obj.text}
								divider
								onClick={() => router.push(obj.link)}
							>
								{ obj.text }
							</MenuItem>
						))}
						</Menu>
					</Box>
					<Search />
					<IconButton
						className="IconButton"
						aria-label="mode-toggle"
						onClick={() => toggleMode()}
					>
						{mode === 'dark' ? (
							<DarkModeIcon color="info" className="ModeIcon" />
						) : (
							<LightModeIcon color="secondary" className="ModeIcon" />
						)}
					</IconButton>
				</Toolbar>
			</Container>
		</AppBar>
	)
}