import { Box } from "@mui/material";

function BaseLayout({ children }: { children: React.ReactNode }) {
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