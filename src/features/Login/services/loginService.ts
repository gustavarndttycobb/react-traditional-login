import { LoginResponse } from "../../../mocks/handlers";
import { LoginFormType } from "../types/loginFormType";

export const loginService = async (data: LoginFormType): Promise<LoginResponse> => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return await response.json();
};
