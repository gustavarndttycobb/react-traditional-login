import { CardContent, CardHeader, CardProps } from '@mui/material';
import { StyledCard } from './styles';
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
