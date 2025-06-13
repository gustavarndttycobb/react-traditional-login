import { ButtonProps } from '@mui/material';
import { StyledButton } from './styles';

type IButtonProps = ButtonProps & {
    isLoading?: boolean;
    label: string;
};

function ButtonCustom({ isLoading = false, label, ...props }: IButtonProps) {
    return (
        <StyledButton {...props} disabled={isLoading || props.disabled}>
            {label}
        </StyledButton>
    );
}

export default ButtonCustom;
