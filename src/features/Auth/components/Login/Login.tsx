import { useEffect, useState } from "react";
import {
    FormControl,
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
import { EmailOutlined, LockOutline } from "@mui/icons-material";
import { TextFieldCustom } from "../../../../shared/components/Textfield/Textfield";
import ButtonCustom from "../../../../shared/components/Button/Button";
import SnackbarCustom from "../../../../shared/components/Snackbar/Snackbar";
import CardCustom from "../../../../shared/components/Card/Card";
import { StyledCardAccountButtonBox, StyledCardAccountTypography, StyledCardButtonBox, StyledCardContentBox, StyledCardHeaderContentBox, StyledCardHeaderDescriptionTypography, StyledCardHeaderIconBox, StyledCardHeaderTitleTypography, StyledFormHelperText, StyledLoginBox } from "./styles";

interface ILogin {
    readonly setAuthMode: React.Dispatch<React.SetStateAction<authStepsEnum>>
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

    const onSubmit = async (loginFormData: LoginFormType) => {
        await login(loginFormData as ILoginBody);
    };

    const toggleAuthMode = () => {
        setAuthMode(authStepsEnum.SIGNUP);
    }

    useEffect(() => {
        if (errorMessage) {
            setSnackbarOpen(true);
        }
    }, [errorMessage]);

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/home");
        }
    }, [isAuthenticated, navigate]);

    return (
        <>
            <Fade in>
                <StyledLoginBox
                    as="form"
                    onSubmit={handleSubmit(onSubmit)}

                >
                    <CardCustom
                        headerContent={
                            <StyledCardHeaderContentBox>
                                <StyledCardHeaderIconBox>
                                    <LockOutline sx={{
                                        fontSize: "30px"
                                    }} />
                                </StyledCardHeaderIconBox>
                                <StyledCardHeaderTitleTypography variant="h5" align="center" >
                                    {t("feature.auth.welcomeBack")}
                                </StyledCardHeaderTitleTypography>
                                <StyledCardHeaderDescriptionTypography align="center" >
                                    {t("feature.auth.signInDescription")}
                                </StyledCardHeaderDescriptionTypography>

                            </StyledCardHeaderContentBox>
                        }
                        cardContent={<StyledCardContentBox
                        >

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
                                <StyledFormHelperText>{errors.email?.message}</StyledFormHelperText>
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
                                <StyledFormHelperText>{errors.password?.message}</StyledFormHelperText>
                            </FormControl>
                            <StyledCardButtonBox>
                                <ButtonCustom label={isLoading ? t("feature.auth.loading") : t("feature.auth.signin")}
                                    isLoading={isLoading}
                                    size="large"
                                    type="submit"
                                />
                                <StyledCardAccountButtonBox
                                >
                                    <StyledCardAccountTypography variant="body2" align="center">
                                        {t("feature.auth.dontHaveAccount")}
                                    </StyledCardAccountTypography>

                                    <ButtonCustom disabled={isLoading} onClick={toggleAuthMode} label={t("feature.auth.signup")} variant="text"
                                        sx={{
                                            width: "auto"
                                        }}
                                    />

                                </StyledCardAccountButtonBox>
                            </StyledCardButtonBox>
                        </StyledCardContentBox>}
                        sx={{
                            width: "600px"
                        }}
                    />
                </StyledLoginBox>
            </Fade>
            <SnackbarCustom message={errorMessage ?? ""} snackbarOpen={snackbarOpen} setSnackbarOpen={setSnackbarOpen} severity="error" />
        </>
    );
}

export default Login;
