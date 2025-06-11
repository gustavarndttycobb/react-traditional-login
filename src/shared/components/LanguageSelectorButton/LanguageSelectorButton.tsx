import React from 'react';
import {
    Button,
    Menu,
    MenuItem,
    ButtonProps,
    ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Translate } from '@mui/icons-material';

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

const StyledButton = styled(Button)(({ theme }) => ({
    position: 'relative',
    width: '40px',
    height: '40px',
    minWidth: '40px',
    padding: 0,
    overflow: 'hidden',
    borderRadius: theme.shape.borderRadius,
    transition: 'all 300ms ease',
    '&:hover': {
        transform: 'scale(1.05)',
    },
    svg: {
        fontSize: '1.4rem',
    },
}));

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
                <Translate />
            </StyledButton>
            <Menu
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
                sx={{
                    marginTop: 1,
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
            </Menu>
        </>
    );
}
