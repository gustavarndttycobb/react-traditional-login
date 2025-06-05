import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { darkTheme, lightTheme } from "./utils/theme";
import { Button } from "@mui/material";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </Button>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
