// components/LoginCard.tsx
import { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardContent, CardHeader } from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 400,
    margin: 'auto',
    backdropFilter: 'blur(4px)',
    backgroundColor: theme.palette.background.paper + 'F2', // Similar to bg-card/95
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: theme.shadows[6],
    borderRadius: theme.shape.borderRadius,
}));

interface LoginCardProps {
    header?: ReactNode;
    children?: ReactNode;
}

export const CardCustom = ({ header, children }: LoginCardProps) => {
    return (
        <StyledCard>
            {header && <CardHeader title={header} />}
            {children && <CardContent>{children}</CardContent>}
        </StyledCard>
    );
};

export default CardCustom;
