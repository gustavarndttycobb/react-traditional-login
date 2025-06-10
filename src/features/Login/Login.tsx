import { useState } from "react";
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    InputLabel,
    OutlinedInput,
    Typography,
    Snackbar,
    Alert
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormType } from "./types/loginFormType";
import { loginFormSchema } from "./schemas/loginFormSchema";
import { useTranslation } from "react-i18next";
import { authService } from "./services/login.service";
import { UserAuth } from "./models/userAuth.model";


function Login() {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<LoginFormType>({
        resolver: zodResolver(loginFormSchema),
    });

    const onSubmit = async (data: UserAuth) => {
        setLoading(true);
        try {
            setErrorMessage(null);
            const result = await authService.login(data);
            console.log("Login success:", result);
            setLoading(false);
        } catch (error: unknown) {
            if (error instanceof Error) {
                setErrorMessage(error?.message || "Erro no login");
                setSnackbarOpen(true);
                setLoading(false);
            }
        }
    };

    return (
        <>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{ maxWidth: 400, mx: "auto", mt: 10, display: "flex", flexDirection: "column", gap: 2 }}
            >
                <Typography variant="h5">{t("feature.login.login")}</Typography>

                <FormControl error={!!errors.email} fullWidth variant="outlined">
                    <InputLabel htmlFor="email">{t("feature.login.email")}</InputLabel>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <OutlinedInput label={t("feature.login.email")} id="email" type="email" {...field} />}
                    />
                    <FormHelperText>{errors.email?.message}</FormHelperText>
                </FormControl>

                <FormControl error={!!errors.password} fullWidth variant="outlined">
                    <InputLabel htmlFor="password">{t("feature.login.password")}</InputLabel>
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <OutlinedInput label={t("feature.login.password")} id="password" type="password" {...field} />}
                    />
                    <FormHelperText>{errors.password?.message}</FormHelperText>
                </FormControl>

                <Button variant="contained" color="primary" type="submit" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </Button>

                <Button color="secondary" variant="text" disabled={loading} onClick={() => alert("Sign up screen coming soon...")}>
                    {t("feature.login.dontHaveAccount")}
                </Button>
            </Box>

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
