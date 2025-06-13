import { Box, styled } from "@mui/material";

export const StyledHeaderBox = styled(Box)(() => ({
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 2,
    padding: 1,
    position: "fixed",
    backgroundColor: "transparent",
    height: "50px",
}));