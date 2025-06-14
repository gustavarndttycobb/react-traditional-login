import authHandlers from "../../../mocks/services/login.handlers";
import { LOGIN_ENDPOINT, SIGNUP_ENDPOINT } from "../../../utils/endpoints";
import { authService, AuthService } from "../services/auth.service";

jest.mock('../../../utils/env.ts', () => ({
    env: {
        API_URL: 'http://localhost:3000',
        MOCKS_ENABLED: true
    }
}));

const serviceMethodToPathMap: Record<keyof AuthService, string> = {
    login: LOGIN_ENDPOINT,
    signup: SIGNUP_ENDPOINT
};


describe("Mock handlers coverage validation", () => {
    it("should have a handler for each AuthService method", () => {
        const serviceMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(authService))
            .filter((key): key is keyof AuthService => {
                const value = (authService)[key as keyof AuthService];
                return typeof value === "function" && key !== "constructor";
            });

        const handlerPaths = authHandlers.map((handler) => handler.info.path);

        serviceMethods.forEach((method) => {
            const expectedPath = serviceMethodToPathMap[method];
            expect(expectedPath).toBeDefined();
            expect(handlerPaths).toContain(expectedPath);
        });
    });
});
