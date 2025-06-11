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
    border: `1px solid ${theme.palette.divider}`,
    color: theme.palette.text.primary,
    transition: 'all 300ms ease',
    '&:hover': {
        border: `1px solid ${theme.palette.divider}`,
        transform: 'scale(1.05)',
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
            {mode === 'light' && <LightModeIcon className="light-icon" fontSize="small" />}
            {mode === 'dark' && <DarkModeIcon className="dark-icon" fontSize="small" />}
        </StyledButton>
    );
}
