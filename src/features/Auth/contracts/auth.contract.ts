import { ILoginResponse } from "../models/loginResponse.model";
import { ISignupBody } from "../models/signupBody.model";
import { ISignupResponse } from "../models/signupResponse.model";
import { LoginFormType } from "../types/loginFormType";

export interface AuthServiceContract {
    login: (data: LoginFormType) => Promise<ILoginResponse>;
    signup: (data: ISignupBody) => Promise<ISignupResponse>;
}
