import { ILoginResponse } from "../models/loginResponse.model";
import { ISignupResponse } from "../models/signupResponse.model";
import { LoginFormType } from "../types/loginFormType";
import { SignupFormType } from "../types/signupFormType";

export interface AuthServiceContract {
    login: (data: LoginFormType) => Promise<ILoginResponse>;
    signup: (data: SignupFormType) => Promise<ISignupResponse>;
}
