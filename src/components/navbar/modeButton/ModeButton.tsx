import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

export default function ModeButton(props: Readonly<{ mode: 'dark' | 'light' | 'system', toggleMode: any }>) {
    return (
        <IconButton
            className="iconButton"
            aria-label="mode-toggle"
            onClick={() => props.toggleMode()}
        >
            {props.mode === 'dark' ? (
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