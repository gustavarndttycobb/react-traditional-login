import { Box, FormHelperText, styled, Typography } from "@mui/material";

export const StyledSignupBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: 2,
}));
export const StyledCardHeaderContentBox = styled(Box)(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2px",
}))
export const StyledCardHeaderIconBox = styled(Box)(({ theme }) => ({
    width: "50px",
    height: "50px",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "1rem",
    color: theme.palette.primary.contrastText,
    mb: "10px"
}))
export const StyledCardHeaderTitleTypography = styled(Typography)(() => ({ fontWeight: "bold" }))
export const StyledCardHeaderDescriptionTypography = styled(Typography)(({theme}) => ({
    color: theme.palette.text.secondary,
    fontSize: "14px"
}))
export const StyledCardContentBox = styled(Box)(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
}))
export const StyledFormHelperText = styled(FormHelperText)(() => ({ height: "10px" }))
export const StyledCardButtonBox = styled(Box)(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    mt: "5px",
    gap: "1rem"
}))
export const StyledCardAccountButtonBox = styled(Box)(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
}))
export const StyledCardAccountTypography = styled(Typography)(({theme}) => ({ color: theme.palette.text.secondary }))