import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
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