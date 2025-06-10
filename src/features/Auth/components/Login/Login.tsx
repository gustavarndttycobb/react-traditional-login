import { useEffect, useState } from "react";
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    InputLabel,
    OutlinedInput,
    Typography,
    Snackbar,
    Alert,
    Fade,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useTranslation } from "react-i18next";
import { LoginFormType } from "../../types/loginFormType";
import { loginFormSchema } from "../../schemas/loginFormSchema";
import { ILoginBody } from "../../models/loginBody.model";
import { authStepsEnum } from "../../enums/auth.enum";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";

interface ILogin {
    setAuthMode: React.Dispatch<React.SetStateAction<authStepsEnum>>
}
function Login({ setAuthMode }: ILogin) {
    const { t } = useTranslation();
    const { login, errorMessage, isLoading, isAuthenticated } = useAuth();
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const navigate = useNavigate();

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<LoginFormType>({
        resolver: zodResolver(loginFormSchema),
    });

    const onSubmit = async (data: LoginFormType) => {
        await login(data as ILoginBody);
        if (isAuthenticated) {
            navigate("/home");
        }
    };

    const toggleAuthMode = () => {
        setAuthMode(authStepsEnum.SIGNUP);
    }

    useEffect(() => {
        if (errorMessage) {
            setSnackbarOpen(true);
        }
    }, [errorMessage]);

    return (
        <>
            <Fade in>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{
                        maxWidth: 400,
                        mx: "auto",
                        mt: 10,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                    }}
                >
                    <Typography variant="h5" align="center">
                        {t("feature.auth.login")}
                    </Typography>
                    <FormControl error={!!errors.email} fullWidth variant="outlined">
                        <InputLabel htmlFor="email">{t("feature.auth.email")}</InputLabel>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <OutlinedInput
                                    label={t("feature.auth.email")}
                                    id="email"
                                    type="email"
                                    {...field}
                                />
                            )}
                        />
                        <FormHelperText>{errors.email?.message}</FormHelperText>
                    </FormControl>

                    <FormControl error={!!errors.password} fullWidth variant="outlined">
                        <InputLabel htmlFor="password">{t("feature.auth.password")}</InputLabel>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <OutlinedInput
                                    label={t("feature.auth.password")}
                                    id="password"
                                    type="password"
                                    {...field}
                                />
                            )}
                        />
                        <FormHelperText>{errors.password?.message}</FormHelperText>
                    </FormControl>

                    <Button variant="contained" color="primary" type="submit" disabled={isLoading}>
                        {isLoading ? t("feature.auth.loading") : t("feature.auth.login")}
                    </Button>

                    <Button color="secondary" variant="text" disabled={isLoading} onClick={toggleAuthMode}>
                        {t("feature.auth.dontHaveAccount")}
                    </Button>
                </Box>
            </Fade>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={4000}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert
                    onClose={() => setSnackbarOpen(false)}
                    severity="error"
                    sx={{ width: "100%" }}
                    elevation={6}
                    variant="filled"
                >
                    {errorMessage}
                </Alert>
            </Snackbar>
        </>
    );
}

export default Login;
