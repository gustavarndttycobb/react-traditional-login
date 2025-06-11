import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

type IButtonProps = ButtonProps & {
    isLoading?: boolean;
    label: string;
};

const StyledButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'variant',
})<ButtonProps>(({ variant }) => {
    const base = {
        width: '100%',
        fontWeight: 500,
        transition: 'all 200ms ease-in-out',
        transform: 'scale(1)',
        borderRadius: "10px",
        '&:active': {
            transform: 'scale(0.98)',
        },
    };

    const variants = {
        contained: {
            background: 'linear-gradient(to right, #ef4444, #dc2626)',
            color: '#fff',
            '&:hover': {
                background: 'linear-gradient(to right, #dc2626, #b91c1c)',
                transform: 'scale(1.02)',
            },
        },
        outlined: {
            background: 'transparent',
            color: '#dc2626',
            border: '1px solid transparent',
            backgroundImage:
                'linear-gradient(white, white), linear-gradient(to right, #ef4444, #dc2626)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
            '&:hover': {
                backgroundImage:
                    'linear-gradient(white, white), linear-gradient(to right, #dc2626, #b91c1c)',
                transform: 'scale(1.02)',
            },
        },
        text: {
            background: 'transparent',
            color: '#dc2626',
            '&:hover': {
                backgroundColor: 'rgba(220, 38, 38, 0.08)',
                transform: 'scale(1.02)',
            },
        },
    };

    return {
        ...base,
        ...(variants[variant ?? 'contained']),
    };
});

function ButtonCustom({ isLoading = false, label, ...props }: IButtonProps) {
    return (
        <StyledButton {...props} disabled={isLoading || props.disabled}>
            {label}
        </StyledButton>
    );
}

export default ButtonCustom;
