import React from 'react';
import {
    MenuItem,
    ButtonProps,
    ListItemText,
} from '@mui/material';
import { Translate } from '@mui/icons-material';
import { StyledButton, StyledMenu } from './styles';

type Language = {
    code: string;
    label: string;
    icon?: React.ReactNode;
};

type Props = ButtonProps & {
    languages: Language[];
    currentLanguage: string;
    onChangeLanguage: (code: string) => void;
};



export function LanguageSelectorButton({
    languages,
    currentLanguage,
    onChangeLanguage,
    ...props
}: Props) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (langCode?: string) => {
        setAnchorEl(null);
        if (langCode && langCode !== currentLanguage) {
            onChangeLanguage(langCode);
        }
    };

    return (
        <>
            <StyledButton
                variant="outlined"
                onClick={handleClick}
                aria-controls={open ? 'language-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                {...props}
            >
                <Translate fontSize='small' />
            </StyledButton>
            <StyledMenu
                id="language-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose()}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',

                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                {languages.map((lang) => (
                    <MenuItem
                        key={lang.code}
                        selected={lang.code === currentLanguage}
                        onClick={() => handleClose(lang.code)}
                    >
                        <ListItemText>{lang.label}</ListItemText>
                    </MenuItem>
                ))}
            </StyledMenu>
        </>
    );
}
