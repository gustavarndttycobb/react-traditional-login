import { createContext, useState, useContext, ReactNode, useMemo } from "react";
import { ThemeProvider as MuiThemeProvider, PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "../../utils/theme";

type ThemeContextType = {
    theme: PaletteMode;
    toggleColorMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext deve ser usado dentro de ThemeProviderCustom");
    }
    return context;
};

export const ThemeProviderCustom = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<PaletteMode>("light");


    const toggleColorMode = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const ThemeContextValue = useMemo(() => ({ theme, toggleColorMode }), [theme, toggleColorMode]);

    return (
        <ThemeContext.Provider value={ThemeContextValue}>
            <MuiThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
