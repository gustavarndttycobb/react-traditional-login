import { Box } from "@mui/material";
import { useThemeContext } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { ThemeToggleButton } from "../ThemeToggleButton/ThemeToggleButton";
import { LanguageSelectorButton } from "../LanguageSelectorButton/LanguageSelectorButton";

function Header() {
  const { toggleColorMode } = useThemeContext();
  const { i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Box sx={{
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: 2,
      padding: 1,
      position: "fixed",
      backgroundColor: "transparent",
    }}>
      <LanguageSelectorButton currentLanguage={i18n.language} languages={[{ code: 'en', label: 'English' }, { code: 'pt', label: 'Português' }]}
        onChangeLanguage={handleLanguageChange}
      />
      <ThemeToggleButton onClickToggleTheme={toggleColorMode} />
    </Box>
  );
}

export default Header;
