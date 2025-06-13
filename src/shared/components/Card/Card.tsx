import { styled } from '@mui/material/styles';
import { Card, CardContent, CardHeader, CardProps } from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 400,
    margin: 'auto',
    backdropFilter: 'blur(4px)',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: theme.shadows[3],
    borderRadius: "10px",
}));

type LoginCardProps = CardProps & {
    headerContent?: React.ReactNode;
    cardContent?: React.ReactNode;
}

export const CardCustom = ({ headerContent, cardContent, ...props }: LoginCardProps) => {
    return (
        <StyledCard {...props}>
            {headerContent && <CardHeader title={headerContent} />}
            {cardContent && <CardContent>{cardContent}</CardContent>}
        </StyledCard>
    );
};

export default CardCustom;
