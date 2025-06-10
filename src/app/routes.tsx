import { BrowserRouter, Routes, Route } from "react-router";
import Auth from "../features/Auth/Auth";
function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Auth />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;