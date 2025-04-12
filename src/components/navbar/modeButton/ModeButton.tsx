import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { useColorScheme } from '@mui/material/styles';
import { setDarkMode } from '@/lib/actions';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

export default function ModeButton() {
    const darkMode = useAppSelector((state) => state.darkMode.on);
    const updateDarkMode = useAppDispatch();
    const { mode, setMode } = useColorScheme();
    const toggleTheme = () => {
        setMode(darkMode ? 'light' : 'dark');
        updateDarkMode(setDarkMode(!darkMode));
    };

    return (
        <IconButton
            className="iconButton"
            aria-label="mode-toggle"
            onClick={() => toggleTheme()}
        >
            {darkMode ? (
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
                    <DarkModeIcon color="info" className="modeIcon" />
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
                    <LightModeIcon color="secondary" className="modeIcon" />
                </Tooltip>
            )}
        </IconButton>
    )
}