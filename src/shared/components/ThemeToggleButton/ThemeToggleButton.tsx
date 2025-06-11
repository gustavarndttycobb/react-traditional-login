import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

type IToggleTheme = ButtonProps & {
    onClickToggleTheme: () => void;
};

const StyledButton = styled(Button)(({ theme }) => ({
    position: 'relative',
    width: '40px',
    height: '40px',
    minWidth: '40px',
    padding: 0,
    overflow: 'hidden',
    borderRadius: theme.shape.borderRadius,
    transition: 'all 300ms ease',
    '&:hover': {
        transform: 'scale(1.05)',
    },
    svg: {
        position: 'absolute',
        fontSize: '1.4rem',
        transition: 'all 300ms ease',
    },
    '.light-icon': {
        opacity: theme.palette.mode === 'dark' ? 0 : 1,
        transform: theme.palette.mode === 'dark'
            ? 'rotate(-90deg) scale(0)'
            : 'rotate(0deg) scale(1)',
    },
    '.dark-icon': {
        opacity: theme.palette.mode === 'dark' ? 1 : 0,
        transform: theme.palette.mode === 'dark'
            ? 'rotate(0deg) scale(1)'
            : 'rotate(90deg) scale(0)',
    },
}));

export function ThemeToggleButton({ onClickToggleTheme, ...props }: IToggleTheme) {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        onClickToggleTheme();
    };

    return (
        <StyledButton variant="outlined" onClick={toggleTheme} {...props}>
            {mode === 'light' && <LightModeIcon className="light-icon" />}
            {mode === 'dark' && <DarkModeIcon className="dark-icon" />}
        </StyledButton>
    );
}
