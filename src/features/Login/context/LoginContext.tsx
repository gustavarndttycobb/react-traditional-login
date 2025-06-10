import { createContext, useContext, useState } from "react";
import { LoginFormType } from "../types/loginFormType";
import { loginService } from "../services/loginService";
import { User } from "../../../mocks/handlers";

interface LoginContextType {
    isAuthenticated: boolean;
    user: User | null;
    login: (data: LoginFormType) => Promise<void>;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    const login = async (data: LoginFormType) => {
        const response = await loginService(data);
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
