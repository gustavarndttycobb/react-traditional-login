import { BrowserRouter, Routes, Route } from "react-router";
import Auth from "../features/Auth/Auth";
import PageExample from "../features/PageExample/PageExample";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route
                    path="/home"
                    element={
                        <ProtectedRoute>
                            <PageExample />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
