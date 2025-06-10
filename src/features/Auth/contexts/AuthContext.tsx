import { createContext, useContext, useState } from "react";
import { LoginFormType } from "../types/loginFormType";
import { authService } from "../services/auth.service";
import { IUserData } from "../models/userData.model";
import { ILoginBody } from "../models/loginBody.model";

interface IAuthContextType {
    isAuthenticated: boolean;
    token: string | null;
    user: IUserData | null;
    errorMessage: string | null;
    isLoading: boolean;
    login: (data: LoginFormType) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<IAuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
    const [user, setUser] = useState<IUserData | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const isAuthenticated = !!token;

    const login = async (data: LoginFormType) => {
        setIsLoading(true);
        try {
            setErrorMessage(null);
            const result = await authService.login(data as ILoginBody);
            setUser(result.user);
            setToken(result.token);
            localStorage.setItem("token", result.token);
        } catch (error: unknown) {
            if (error instanceof Error) {
                setErrorMessage(error.message || "Error to login");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                token,
                user,
                errorMessage,
                isLoading,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
    return ctx;
};
