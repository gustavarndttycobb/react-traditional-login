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
        borderRadius: "10px",
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
                        <InputAdornment position="start" >{startIcon}</InputAdornment>
                    ) : undefined,
                    endAdornment: endIcon ? (
                        <InputAdornment position="end" >{endIcon}</InputAdornment>
                    ) : undefined,
                },
            }}
            {...props}
        />
    );
};
