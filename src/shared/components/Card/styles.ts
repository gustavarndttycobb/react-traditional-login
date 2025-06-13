import { Card, styled } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 400,
    margin: 'auto',
    backdropFilter: 'blur(4px)',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: theme.shadows[3],
    borderRadius: "10px",
}));