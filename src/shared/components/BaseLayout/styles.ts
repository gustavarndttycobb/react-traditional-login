import { Box, styled } from "@mui/material";
import { HEADER_HEIGHT } from "../../constants/header";

export const StyledBaseLayoutBox = styled(Box)(() => ({
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: HEADER_HEIGHT
}));