'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    cssVariables: true,
    colorSchemes: {
        light: {
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
                background: {
                    default: '#E9EFF0',
                    paper: '#E9EFF0',
                },
            },
        },
        dark: {
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
                background: {
                    default: '#0E1415',
                    paper: '#0E1415',
                },
            },
        },
    },
    typography: {
        fontFamily: 'var(--font-gayathri)',
        h1: {
            fontFamily: 'var(--font-shrikhand)',
        },
    },
});

export default theme;