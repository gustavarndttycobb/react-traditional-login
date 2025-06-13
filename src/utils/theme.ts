import { createTheme, ThemeOptions } from '@mui/material';

const sharedTheme: ThemeOptions = {
  shape: {
    borderRadius: 12, 
  },
  typography: {
    fontFamily: `'Inter', sans-serif`,
  }
};

export const lightTheme = createTheme({
  ...sharedTheme,
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff', // --background
      paper: '#ffffff',   // --card
    },
    text: {
      primary: '#0a0a0a', // --foreground
      secondary: '#737373', // --muted-foreground
    },
    primary: {
      main: '#dc2626', // --primary
      contrastText: '#fef2f2', // --primary-foreground
    },
    secondary: {
      main: '#f5f5f5', // --secondary
      contrastText: '#171717', // --secondary-foreground
    },
    divider: '#e5e5e5', // --border
  },
});

export const darkTheme = createTheme({
  ...sharedTheme,
  palette: {
    mode: 'dark',
    background: {
      default: '#0a0a0a', // --background
      paper: '#0a0a0a',   // --card
    },
    text: {
      primary: '#fafafa', // --foreground
      secondary: '#a3a3a3', // --muted-foreground
    },
    primary: {
      main: '#dc2626', // --primary
      contrastText: '#fef2f2', // --primary-foreground
    },
    secondary: {
      main: '#262626', // --secondary
      contrastText: '#fafafa', // --secondary-foreground
    },
    divider: '#262626', // --border
  },
});
