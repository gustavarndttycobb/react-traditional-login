import { useEffect, useState } from "react";
import {
    Box,
    FormControl,
    FormHelperText,
    Typography,
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
import SnackbarCustom from "../../../../shared/components/Snackbar/Snackbar";
import CardCustom from "../../../../shared/components/Card/Card";
import { EmailOutlined,  LockOutline } from "@mui/icons-material";
import { TextFieldCustom } from "../../../../shared/components/Textfield/Textfield";
import ButtonCustom from "../../../../shared/components/Button/Button";

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
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                    }}
                >
                    <CardCustom
                        header={
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
                        children={<Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "1rem",

                            }}>

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
                                <ButtonCustom label={isLoading ? t("feature.auth.loading") : t("feature.auth.signin")}
                                    isLoading={isLoading}
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
                                        {t("feature.auth.dontHaveAccount")}
                                    </Typography>

                                    <ButtonCustom disabled={isLoading} onClick={toggleAuthMode} label={t("feature.auth.signup")} variant="text"
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

export default Login;
