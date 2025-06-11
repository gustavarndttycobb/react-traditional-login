import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

type CustomTextFieldProps = TextFieldProps & {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    label?: string;
    placeholder?: string
};

const StyledTextField = styled(TextField)(({ theme }) => ({
    width: '100%',
    '& .MuiOutlinedInput-root': {
        padding: 0,
        '& fieldset': {
            borderColor: theme.palette.divider,
        },
        '&:hover fieldset': {
            borderColor: theme.palette.primary.light,
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
            boxShadow: `0 0 0 2px ${theme.palette.primary.main}33`,
        },
    },
    '& .MuiOutlinedInput-input': {
        padding: theme.spacing(1.25, 1.5),
    },
}));

export const TextFieldCustom: React.FC<CustomTextFieldProps> = ({
    startIcon,
    endIcon,
    slotProps,
    label,
    placeholder,
    ...props
}) => {
    return (
        <StyledTextField
            variant="outlined"
            label={label}
            placeholder={placeholder}
            slotProps={{
                input: {
                    ...slotProps?.input,
                    startAdornment: startIcon ? (
                        <InputAdornment position="start" sx={{
                            marginLeft: '5px',
                        }}>{startIcon}</InputAdornment>
                    ) : undefined,
                    endAdornment: endIcon ? (
                        <InputAdornment position="end" sx={{
                            marginRight: '5px'
                        }}>{endIcon}</InputAdornment>
                    ) : undefined,
                },
            }}
            {...props}
        />
    );
};
