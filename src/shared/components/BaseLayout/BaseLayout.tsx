import { Box } from "@mui/material";

interface IBaseLayoutProps {
    readonly children: React.ReactNode
}
function BaseLayout({ children }: IBaseLayoutProps) {
    return <Box
        sx={{
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start'
        }}>{children}</Box>
}

export default BaseLayout