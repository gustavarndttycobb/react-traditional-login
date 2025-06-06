import { DarkMode } from "@mui/icons-material";
import { Box, IconButton, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useThemeContext } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

function Header() {
  const { toggleColorMode } = useThemeContext();
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Box sx={{
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: 2,
      padding: 1,
    }}>
      <Select
        value={i18n.language}
        onChange={handleLanguageChange}
        size="small"
        variant="outlined"
        sx={{ minWidth: 80 }}
      >
        <MenuItem value="en">EN</MenuItem>
        <MenuItem value="pt">PT</MenuItem>
      </Select>

      <IconButton onClick={toggleColorMode}>
        <DarkMode sx={{ color: "primary.main", fontSize: "2rem" }} />
      </IconButton>
    </Box>
  );
}

export default Header;
