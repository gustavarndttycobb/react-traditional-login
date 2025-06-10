import { LOGIN_ENDPOINT, SIGNUP_ENDPOINT } from "../../../utils/endpoints";
import { AuthServiceContract } from "../contracts/auth.contract";
import { ILoginResponse } from "../models/loginResponse.model";
import { LoginFormType } from "../types/loginFormType";

export class AuthService implements AuthServiceContract {

  async login(data: LoginFormType): Promise<ILoginResponse> {
    const response = await fetch(LOGIN_ENDPOINT, {
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

  async signup(data: LoginFormType) {
    const response = await fetch(SIGNUP_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || 'Signup failed')
    }

    return await response.json();
  }
}

export const authService = new AuthService();


