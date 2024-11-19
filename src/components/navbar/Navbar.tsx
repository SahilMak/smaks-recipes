'use client';
import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useColorScheme } from '@mui/material/styles';
import ModeButton from './modeButton/ModeButton';
import Search from './search/Search';
import { cuisine, meals, pages } from './menuLinks';
import { gayathri, shrikhand } from '@/lib/fonts';
import './navbar.scss';

export default function Navbar() {
	const { mode, setMode } = useColorScheme();
  	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [openDrawer, setOpenDrawer] = useState(false);
	const [openDrawerMenu, setOpenDrawerMenu] = useState('');
	const [openMenu, setOpenMenu] = useState('');
	const router = useRouter();
  	const open = Boolean(anchorEl);
  	const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
		const tabText: string = event.currentTarget.innerText;
		if (tabText === 'RECIPES' || tabText === 'ABOUT') {
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
	const toggleDrawer = (newOpen: boolean) => {
		setOpenDrawer(newOpen);
	};
	const handleDrawerMenu = (list: any) => () => {
		if (list.text === 'RECIPES' || list.text === 'ABOUT') {
			router.push(list!.link);
		} else {
			setOpenDrawerMenu((openDrawerMenu === list.text) ? '' : list.text);
		}
	};
	const toggleMode = useCallback(() => {
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
				{/* Desktop */}
				<Toolbar
					className="toolbar"
					disableGutters
				>
					<Typography
						className={shrikhand.variable}
						color="primary"
						noWrap
						onClick={() => router.push('/')}
						component="div"
						variant="h1"
						sx={{ display: 'flex', mr: 1 }}
					>
						Smak&apos;s Recipes
					</Typography>
					<Box
						className={gayathri.variable}
						sx={{ display: 'flex', mr: 2 }}
					>
					{pages.map((page) => (
						<Button
							className="button"
							color="inherit"
							key={page.text}
							onClick={handleOpen}
							variant="text"
							sx={{
								my: 2,
								'&:hover': {
									bgcolor: 'primary.dark',
									color: mode === 'light' ? 'background.default' : 'inherit',
								}
							}}
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
								className="menuItem"
								key={obj.text}
								divider
								onClick={() => router.push(obj.link)}
								sx={{
									'&:hover': {
										bgcolor: mode === 'light' ? 'secondary.light' : 'info.dark',
										color: mode === 'light' ? 'secondary.dark' : 'info.light',
									}
								}}
							>
								{ obj.text }
							</MenuItem>
						))}
						</Menu>
					</Box>
					<Search />
					<ModeButton mode={mode} toggleMode={toggleMode} />
					<IconButton
						className="menuIconButton"
						aria-label="menu-toggle"
						onClick={() => toggleDrawer(true)}
					>
						<MenuIcon className="menuIcon" />
					</IconButton>
				</Toolbar>
				{/* Mobile */}
				<Stack className="stack">
					<Typography
						className={shrikhand.variable}
						color="primary"
						noWrap
						onClick={() => router.push('/')}
						component="div"
						variant="h1"
						sx={{ display: 'flex', mr: 1 }}
					>
						Smak&apos;s Recipes
					</Typography>
					<Box
						className="box"
						sx={{ display: 'flex', mr: 2 }}
					>
						<ModeButton mode={mode} toggleMode={toggleMode} />
						<Search />
						<IconButton
							className="iconButton"
							aria-label="menu-toggle"
							onClick={() => toggleDrawer(true)}
						>
							<MenuIcon className="menuIcon" />
						</IconButton>
					</Box>
					<SwipeableDrawer
						anchor="right"
						onClose={() => toggleDrawer(false)}
						onOpen={() => toggleDrawer(true)}
						open={openDrawer}
					>
						<List>
						{pages.map((page) => (
							<>
								<ListItemButton
									className="drawerMenuItem"
									key={page.text}
									onClick={handleDrawerMenu(page)}
									sx={{
										'&:hover': {
											bgcolor: mode === 'light' ? 'secondary.light' : 'info.dark',
											color: mode === 'light' ? 'secondary.dark' : 'info.light',
										}
									}}
								>
									<ListItemText primary={page.text} />
									{openDrawerMenu === page.text && page.link === '' ? 
										<ExpandLess sx={{ display: page.link === '' ? 'inline-block' : 'none', marginBottom: '8px' }} />
										:
										<ExpandMore sx={{ display: page.link === '' ? 'inline-block' : 'none', marginBottom: '8px' }} />
									}
								</ListItemButton>
								<Collapse
									in={openDrawerMenu === page.text}
									timeout="auto"
									unmountOnExit
									sx={{ display: page.link === '' ? 'block' : 'none' }}
								>
									<List disablePadding>
										{(page.text === 'MEALS' ? meals : cuisine).map((obj) => (
											<ListItemButton
												className="drawerMenuItem"
												key={obj.text}
												onClick={() => {
													toggleDrawer(false);
													router.push(obj.link);
												}}
												sx={{
													'&:hover': {
														bgcolor: mode === 'light' ? 'secondary.light' : 'info.dark',
														color: mode === 'light' ? 'secondary.dark' : 'info.light',
													}
												}}
											>
												<ListItemText primary={obj.text} />
											</ListItemButton>
										))}
									</List>
								</Collapse>
							</>
						))}
						</List>
					</SwipeableDrawer>
				</Stack>
			</Container>
		</AppBar>
	)
}