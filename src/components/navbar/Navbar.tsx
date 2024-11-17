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
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import { useColorScheme } from '@mui/material/styles';
import Search from './Search';
import { cuisine, meals, pages } from './menuLinks';
import { gayathri, shrikhand } from '@/lib/fonts';
import './navbar.scss';

export default function Navbar() {
	const { mode, setMode } = useColorScheme();
  	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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
						onClick={() => router.push('/')}
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
								className="MenuItem"
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
					<IconButton
						className="IconButton"
						aria-label="mode-toggle"
						onClick={() => toggleMode()}
					>
						{mode === 'dark' ? (
							<Tooltip
								describeChild
								title={
									<>
										<p className="tooltip-top">{'Dark mode active'}</p>
										<em className="tooltip-bottom">{'Switch to light mode'}</em>
									</>
								}
								TransitionComponent={Zoom}
								slotProps={{
									tooltip: {
										sx: {
											bgcolor: 'info.dark',
											color: 'info.light',
										}
									}
								}}
							>
								<DarkModeIcon color="info" className="ModeIcon" />
							</Tooltip>
						) : (
							<Tooltip
								describeChild
								title={
									<>
										<p className="tooltip-top">{'Light mode active'}</p>
										<em className="tooltip-bottom">{'Switch to dark mode'}</em>
									</>
								}
								TransitionComponent={Zoom}
								slotProps={{
									tooltip: {
										sx: {
											bgcolor: 'secondary.light',
											color: 'secondary.dark',
										}
									}
								}}
							>
								<LightModeIcon color="secondary" className="ModeIcon" />
							</Tooltip>
						)}
					</IconButton>
				</Toolbar>
			</Container>
		</AppBar>
	)
}