import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { LoginFormType } from "../types/loginFormType";
import { authService } from "../services/auth.service";
import { IUserData } from "../models/userData.model";
import { ILoginBody } from "../models/loginBody.model";
import { userService } from "../../../shared/services/user.service";
import { IGetUserDataResponse } from "../../../shared/models/getUserDataResponse.model";

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
    const [user, setUser] = useState<IGetUserDataResponse | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const login = async (data: LoginFormType) => {
        setIsLoading(true);
        try {
            setErrorMessage(null);
            const result = await authService.login(data as ILoginBody);
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

    const authContextValue = useMemo(() => ({
        isAuthenticated: !!token,
        token,
        user,
        errorMessage,
        isLoading,
        login,
        logout
    }), [token, user, errorMessage, isLoading, login, logout]);

    useEffect(() => {
        const restoreSession = async () => {
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                try {
                    const user = await userService.getUserData({
                        token: storedToken
                    });
                    setUser(user);
                    setToken(storedToken);
                } catch (error) {
                    if (error instanceof Error) {
                        setErrorMessage(error.message || "Error to logout");
                    }
                    logout();
                }
            }
        };

        restoreSession();
    }, []);

    return (
        <AuthContext.Provider
            value={authContextValue}
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
