import { Box } from "@mui/material";
import { useAuth } from "../Auth/contexts/AuthContext";
import { useTranslation } from "react-i18next";

function PageExample() {
    const { t } = useTranslation();
    const { user } = useAuth();
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>{t('feature.pageExample.welcome')} {user?.lastName}, {user?.lastName}</Box>
    );
}

export default PageExample;