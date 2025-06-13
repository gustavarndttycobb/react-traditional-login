import { useAuth } from "../Auth/contexts/AuthContext";
import { useTranslation } from "react-i18next";
import { StyledPageExampleBox } from "./styles";

function PageExample() {
    const { t } = useTranslation();
    const { user } = useAuth();
    return (
        <StyledPageExampleBox>{t('feature.pageExample.welcome')} {user?.lastName}, {user?.lastName}</StyledPageExampleBox>
    );
}

export default PageExample;