import { BrowserRouter, Routes, Route } from "react-router";
import Login from "../features/Login/Login";
function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;