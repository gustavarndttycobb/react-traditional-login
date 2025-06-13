import { Alert, AlertColor, Snackbar, } from "@mui/material"

interface ISnackbarCustom {
    readonly message: string
    readonly snackbarOpen: boolean
    readonly setSnackbarOpen: React.Dispatch<React.SetStateAction<boolean>>
    readonly severity: AlertColor
}
function SnackbarCustom({ message, snackbarOpen, setSnackbarOpen, severity }: ISnackbarCustom) {
    return <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
        <Alert
            onClose={() => setSnackbarOpen(false)}
            severity={severity}
            sx={{ width: "100%" }}
            elevation={6}
            variant="filled"
        >
            {message}
        </Alert>
    </Snackbar>
}

export default SnackbarCustom 