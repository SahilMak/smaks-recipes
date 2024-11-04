'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#33c9dc',
        },
        secondary: {
            main: '#dcb733',
        },
        error: {
            main: '#dc6333',
        },
        warning: {
            main: '#dc9333',
        },
        info: {
            main: '#9333dc',
        },
        success: {
            main: '#7cdc33',
        },
    },
    typography: {
        fontFamily: 'var(--font-gayathri)',
    },
});

export default theme;