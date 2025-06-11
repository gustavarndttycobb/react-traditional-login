import { useState } from "react";
import {
    Box,
    FormControl,
    FormHelperText,
    InputLabel,
    OutlinedInput,
    Fade,
    Button,
    Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useTranslation } from "react-i18next";
import { authService } from "../../services/auth.service";
import { SignupFormType } from "../../types/signupFormType";
import { signupFormSchema } from "../../schemas/signupFormSchema";
import { authStepsEnum } from "../../enums/auth.enum";
import SnackbarCustom from "../../../../shared/components/Snackbar/Snackbar";

interface ISignup {
    setAuthMode: React.Dispatch<React.SetStateAction<authStepsEnum>>
}
function Signup({ setAuthMode }: ISignup) {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<SignupFormType>({
        resolver: zodResolver(signupFormSchema),
    });

    const onSubmit = async (data: SignupFormType) => {
        setLoading(true);
        try {
            setErrorMessage(null);

            const result = await authService.signup(data as SignupFormType);
            console.log("Signup success:", result);
        } catch (error: unknown) {
            if (error instanceof Error) {
                setErrorMessage(error.message || "Eroor to signup");
                setSnackbarOpen(true);
            }
        } finally {
            setLoading(false);
        }
    };

    const toggleAuthMode = () => {
        setAuthMode(authStepsEnum.LOGIN);
        setErrorMessage(null);
    }

    return (
        <>
            <Fade in>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                    }}
                >
                    <Typography variant="h5" align="center">
                        {t("feature.auth.signup")}
                    </Typography>
                    <FormControl error={!!errors.firstName} fullWidth variant="outlined">
                        <InputLabel htmlFor="firstName">{t("feature.auth.firstName")}</InputLabel>
                        <Controller
                            name="firstName"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <OutlinedInput
                                    label={t("feature.auth.firstName")}
                                    id="firstName"
                                    {...field}
                                />
                            )}
                        />
                        <FormHelperText sx={{
                            height: "10px"
                        }}>{errors.firstName?.message}</FormHelperText>
                    </FormControl>
                    <FormControl error={!!errors.lastName} fullWidth variant="outlined">
                        <InputLabel htmlFor="name">{t("feature.auth.lastName")}</InputLabel>
                        <Controller
                            name="lastName"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <OutlinedInput
                                    label={t("feature.auth.lastName")}
                                    id="name"
                                    {...field}
                                />
                            )}
                        />
                        <FormHelperText sx={{
                            height: "10px"
                        }}>{errors.lastName?.message}</FormHelperText>
                    </FormControl>
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
                        <FormHelperText sx={{
                            height: "10px"
                        }}>{errors.email?.message}</FormHelperText>
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
                        <FormHelperText sx={{
                            height: "10px"
                        }}>{errors.password?.message}</FormHelperText>
                    </FormControl>
                    <FormControl error={!!errors.confirmPassword} fullWidth variant="outlined">
                        <InputLabel htmlFor="confirmPassword">
                            {t("feature.login.confirmPassword")}
                        </InputLabel>
                        <Controller
                            name="confirmPassword"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <OutlinedInput
                                    label={t("feature.login.confirmPassword")}
                                    id="confirmPassword"
                                    type="password"
                                    {...field}
                                />
                            )}
                        />
                        <FormHelperText sx={{
                            height: "10px"
                        }}>{errors.confirmPassword?.message}</FormHelperText>
                    </FormControl>
                    <Button variant="contained" color="primary" type="submit" disabled={loading}>
                        {loading ? t("feature.auth.loading") : t("feature.auth.signup")}
                    </Button>

                    <Button color="secondary" variant="text" disabled={loading} onClick={toggleAuthMode}>
                        {t("feature.auth.haveAccount")}
                    </Button>
                </Box>

            </Fade>
            <SnackbarCustom message={errorMessage ?? ""} snackbarOpen={snackbarOpen} setSnackbarOpen={setSnackbarOpen} severity="error" />
        </>
    );
}

export default Signup;
