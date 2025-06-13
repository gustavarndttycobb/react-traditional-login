import { useState } from "react";
import {
    Box,
    FormControl,
    FormHelperText,
    Fade,
    Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { authService } from "../../services/auth.service";
import { SignupFormType } from "../../types/signupFormType";
import { signupFormSchema } from "../../schemas/signupFormSchema";
import { authStepsEnum } from "../../enums/auth.enum";
import { EmailOutlined, LockOutline, PersonOutline } from "@mui/icons-material";
import { TextFieldCustom } from "../../../../shared/components/Textfield/Textfield";
import ButtonCustom from "../../../../shared/components/Button/Button";
import CardCustom from "../../../../shared/components/Card/Card";
import SnackbarCustom from "../../../../shared/components/Snackbar/Snackbar";

interface ISignup {
    readonly setAuthMode: React.Dispatch<React.SetStateAction<authStepsEnum>>
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

    const onSubmit = async (signupFormData: SignupFormType) => {
        setLoading(true);
        try {
            setErrorMessage(null);

            const result = await authService.signup(signupFormData);
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
                    <CardCustom
                        headerContent={
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "2px",

                                }}>
                                <Box
                                    sx={{
                                        width: "50px",
                                        height: "50px",
                                        backgroundColor: "primary.main",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "1rem",
                                        color: "white",
                                        mb: "10px"
                                    }}>
                                    <LockOutline sx={{
                                        fontSize: "30px"
                                    }} />
                                </Box>
                                <Typography variant="h5" align="center" sx={{
                                    fontWeight: "bold"
                                }}>
                                    {t("feature.auth.welcomeBack")}
                                </Typography>
                                <Typography align="center" sx={{
                                    color: "#737373",
                                    fontSize: "14px"
                                }}>
                                    {t("feature.auth.signInDescription")}
                                </Typography>

                            </Box>
                        }
                        cardContent={<Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "1rem",

                            }}>
                            <FormControl error={!!errors.fullName} fullWidth variant="outlined">
                                <Controller
                                    name="fullName"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextFieldCustom
                                            label={t("feature.auth.fullName")}
                                            id="fullName"
                                            startIcon={<PersonOutline sx={{
                                                fontSize: "20px"
                                            }} />}
                                            placeholder="Enter your fullName"
                                            {...field}
                                        />
                                    )}
                                />
                                <FormHelperText sx={{
                                    height: "10px"
                                }}>{errors.fullName?.message}</FormHelperText>
                            </FormControl>
                            <FormControl error={!!errors.email} fullWidth variant="outlined">
                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextFieldCustom
                                            label={t("feature.auth.email")}
                                            id="email"
                                            startIcon={<EmailOutlined sx={{ fontSize: "20px" }} />}
                                            placeholder="Enter your email"
                                            type='email'
                                            {...field}
                                        />
                                    )}
                                />
                                <FormHelperText sx={{
                                    height: "10px"
                                }}>{errors.email?.message}</FormHelperText>
                            </FormControl>

                            <FormControl error={!!errors.password} fullWidth variant="outlined">
                                <Controller
                                    name="password"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextFieldCustom
                                            label={t("feature.auth.password")}
                                            id="password"
                                            type="password"
                                            startIcon={<LockOutline sx={{
                                                fontSize: "20px"
                                            }} />}
                                            placeholder="Enter your password"
                                            {...field}
                                        />
                                    )}
                                />
                                <FormHelperText sx={{
                                    height: "10px"
                                }}>{errors.password?.message}</FormHelperText>
                            </FormControl>
                            <FormControl error={!!errors.confirmPassword} fullWidth variant="outlined">

                                <Controller
                                    name="confirmPassword"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextFieldCustom
                                            label={t("feature.auth.confirmPassword")}
                                            id="confirmPassword"
                                            type="password"
                                            startIcon={<LockOutline sx={{
                                                fontSize: "20px"
                                            }} />}
                                            placeholder="Confirm your password"

                                            {...field}
                                        />
                                    )}
                                />
                                <FormHelperText sx={{
                                    height: "10px"
                                }}>{errors.confirmPassword?.message}</FormHelperText>
                            </FormControl>
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    mt: "5px",
                                    gap: "1rem"
                                }}>
                                <ButtonCustom label={loading ? t("feature.auth.loading") : t("feature.auth.signup")}
                                    isLoading={loading}
                                    size="large"
                                    type="submit"
                                />
                                <Box
                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography variant="body2" align="center" sx={{
                                        color: "#737373"
                                    }}>
                                        {t("feature.auth.haveAccount")}
                                    </Typography>

                                    <ButtonCustom disabled={loading} onClick={toggleAuthMode} label={loading ? t("feature.auth.loading") : t("feature.auth.signup")} variant="text"
                                        sx={{
                                            width: "auto"
                                        }}
                                    />

                                </Box>
                            </Box>
                        </Box>}
                        sx={{
                            width: "600px"
                        }}
                    />
                </Box>
            </Fade>
            <SnackbarCustom message={errorMessage ?? ""} snackbarOpen={snackbarOpen} setSnackbarOpen={setSnackbarOpen} severity="error" />
        </>
    );
}

export default Signup;
