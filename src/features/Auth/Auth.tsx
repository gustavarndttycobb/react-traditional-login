import { useState } from "react";
import { Fade } from "@mui/material";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { authStepsEnum } from "./enums/auth.enum";
import { StyledAuthBox } from "./styles";

function Auth() {
    const [authMode, setAuthMode] = useState<authStepsEnum>(authStepsEnum.LOGIN);

    return (
        <Fade in>
            <StyledAuthBox>
                {authMode === authStepsEnum.LOGIN && (
                    <Login setAuthMode={setAuthMode} />
                )}
                {authMode === authStepsEnum.SIGNUP && (
                    <Signup setAuthMode={setAuthMode} />
                )}
            </StyledAuthBox>
        </Fade>

    );
}

export default Auth;
