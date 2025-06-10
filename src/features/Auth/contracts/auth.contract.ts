import { ILoginResponse } from "../models/loginResponse.model";
import { LoginFormType } from "../types/loginFormType";

export interface AuthServiceContract {
    login: (data: LoginFormType) => Promise<ILoginResponse>;
    //TODO:add logout
    //TODO: add register
}
