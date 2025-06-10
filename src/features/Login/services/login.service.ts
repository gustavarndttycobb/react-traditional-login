import { AuthServiceContract } from "../contracts/login.contract";
import { LoginResponse } from "../models/loginResponse.model";
import { LoginFormType } from "../types/loginFormType";

export class AuthService implements AuthServiceContract {

  async login(data: LoginFormType): Promise<LoginResponse> {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || 'Login failed')
    }

    return await response.json();
  }
}

export const authService = new AuthService();


