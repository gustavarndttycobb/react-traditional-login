import { DarkMode } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useThemeContext } from "../../contexts/ThemeContext";

function Header() {
    const { toggleColorMode } = useThemeContext();
    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
        }}>
            <IconButton>
                <DarkMode onClick={toggleColorMode} sx={{
                    color: "primary.main",
                    fontSize: "2rem"
                }} />
            </IconButton>
        </Box>)
}

export default Header