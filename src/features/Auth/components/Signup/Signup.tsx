import { useState } from "react";
import {
    FormControl,
    Fade,
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
import { StyledCardAccountButtonBox, StyledCardAccountTypography, StyledCardButtonBox, StyledCardContentBox, StyledCardHeaderContentBox, StyledCardHeaderDescriptionTypography, StyledCardHeaderIconBox, StyledCardHeaderTitleTypography, StyledFormHelperText, StyledSignupBox } from "./styles";
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
                <StyledSignupBox
                    as="form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <CardCustom
                        headerContent={
                            <StyledCardHeaderContentBox
                            >
                                <StyledCardHeaderIconBox
                                >
                                    <LockOutline sx={{
                                        fontSize: "30px"
                                    }} />
                                </StyledCardHeaderIconBox>
                                <StyledCardHeaderTitleTypography variant="h5" align="center" >
                                    {t("feature.auth.createAccount")}
                                </StyledCardHeaderTitleTypography>
                                <StyledCardHeaderDescriptionTypography align="center">
                                    {t("feature.auth.signupDescription")}
                                </StyledCardHeaderDescriptionTypography>

                            </StyledCardHeaderContentBox>
                        }
                        cardContent={<StyledCardContentBox
                        >
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
                                <StyledFormHelperText >{errors.fullName?.message}</StyledFormHelperText>
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
                                <StyledFormHelperText>{errors.confirmPassword?.message}</StyledFormHelperText>
                            </FormControl>
                            <StyledCardButtonBox>
                                <ButtonCustom label={loading ? t("feature.auth.loading") : t("feature.auth.signup")}
                                    isLoading={loading}
                                    size="large"
                                    type="submit"
                                />
                                <StyledCardAccountButtonBox
                                >
                                    <StyledCardAccountTypography variant="body2" align="center">
                                        {t("feature.auth.haveAccount")}
                                    </StyledCardAccountTypography>

                                    <ButtonCustom disabled={loading} onClick={toggleAuthMode} label={loading ? t("feature.auth.loading") : t("feature.auth.signup")} variant="text"
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
                </StyledSignupBox>
            </Fade>
            <SnackbarCustom message={errorMessage ?? ""} snackbarOpen={snackbarOpen} setSnackbarOpen={setSnackbarOpen} severity="error" />
        </>
    );
}

export default Signup;
