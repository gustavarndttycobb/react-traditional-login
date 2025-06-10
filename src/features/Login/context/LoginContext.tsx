import { createContext, useContext, useState } from "react";
import { LoginFormType } from "../types/loginFormType";
import { authService } from "../services/login.service";
import { UserData } from "../models/userData.model";

interface LoginContextType {
    isAuthenticated: boolean;
    user: UserData | null;
    login: (data: LoginFormType) => Promise<void>;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<UserData
        | null>(null);

    const login = async (data: LoginFormType) => {
        const response = await authService.login(data);
        setUser(response.user);
        setIsAuthenticated(true);
    };

    return (
        <LoginContext.Provider value={{ isAuthenticated, user, login }}>
            {children}
        </LoginContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(LoginContext);
    if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
    return ctx;
};
