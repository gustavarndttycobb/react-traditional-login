import { createContext, useState, useContext, ReactNode, useEffect, useMemo } from "react";
import env from "../../utils/env";

type EnvironmentContextType = {
    isDevelopmentMode: boolean;
};

const EnvironmentContext = createContext<EnvironmentContextType | undefined>(undefined);

export const useEnvironmentContext = () => {
    const context = useContext(EnvironmentContext);
    if (!context) {
        throw new Error("useEnvironmentContext deve ser usado dentro de EnvironmentProvider");
    }
    return context;
};

export const EnvironmentProvider = ({ children }: { children: ReactNode }) => {
    const [isDevelopmentMode, setIsDevelopmentMode] = useState<boolean>(true);

    const environmentContextValue = useMemo(() => ({
        isDevelopmentMode
    }), [
        isDevelopmentMode
    ]);

    useEffect(() => {
        setIsDevelopmentMode(env.MOCKS_ENABLED);
    }, []);


    return (
        <EnvironmentContext.Provider value={environmentContextValue}>
            {children}
        </EnvironmentContext.Provider>
    );
};
