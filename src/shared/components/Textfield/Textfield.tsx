import React from 'react';
import { TextFieldProps } from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { StyledTextField } from './styles';

type CustomTextFieldProps = TextFieldProps & {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    label?: string;
    placeholder?: string
};

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
