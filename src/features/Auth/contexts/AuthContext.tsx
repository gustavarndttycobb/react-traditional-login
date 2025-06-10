import { createContext, useContext, useState } from "react";
import { LoginFormType } from "../types/loginFormType";
import { authService } from "../services/login.service";
import { IUserData } from "../models/userData.model";

interface IAuthContextType {
    isAuthenticated: boolean;
    user: IUserData | null;
    login: (data: LoginFormType) => Promise<void>;
}

const AuthContext = createContext<IAuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<IUserData
        | null>(null);

    const login = async (data: LoginFormType) => {
        const response = await authService.login(data);
        setUser(response.user);
        setIsAuthenticated(true);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
    return ctx;
};
