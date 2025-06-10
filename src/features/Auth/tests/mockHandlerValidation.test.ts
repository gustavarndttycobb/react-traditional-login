import authHandlers from "../../../mocks/services/login.handlers";
import { LOGIN_ENDPOINT, SIGNUP_ENDPOINT } from "../../../utils/endpoints";
import { authService, AuthService } from "../services/auth.service";


const serviceMethodToPathMap: Record<keyof AuthService, string> = {
    login: LOGIN_ENDPOINT,
    signup: SIGNUP_ENDPOINT
    //TODO: logout: "/api/auth/logout"
    //TODO: register: "/api/auth/register"
};

describe("Mock handlers coverage validation", () => {
    it("should have a handler for each AuthService method", () => {
        const serviceMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(authService))
            .filter((key): key is keyof AuthService => {
                const value = (authService as AuthService)[key as keyof AuthService];
                return typeof value === "function" && key !== "constructor";
            });

        const handlerPaths = authHandlers.map((handler) => handler.info.path);

        serviceMethods.forEach((method) => {
            const expectedPath = serviceMethodToPathMap[method];
            expect(expectedPath).toBeDefined(); // O método deve estar no map
            expect(handlerPaths).toContain(expectedPath); // O path deve estar entre os handlers
        });
    });
});
