import { useState } from "react";
import {
    Box,
    Fade,
} from "@mui/material";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { authStepsEnum } from "./enums/auth.enum";

function Auth() {
    const [authMode, setAuthMode] = useState<authStepsEnum>(authStepsEnum.LOGIN);

    return (
        <Fade in>
            <Box
                sx={{
                    width: "100%",
                    mx: "auto",
                    mt: 10,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                {authMode === authStepsEnum.LOGIN && (
                    <Login setAuthMode={setAuthMode} />
                )}
                {authMode === authStepsEnum.SIGNUP && (
                    <Signup setAuthMode={setAuthMode} />
                )}
            </Box>
        </Fade>

    );
}

export default Auth;
