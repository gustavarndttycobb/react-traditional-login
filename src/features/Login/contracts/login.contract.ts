import { LoginResponse } from "../models/loginResponse.model";
import { LoginFormType } from "../types/loginFormType";

export interface AuthServiceContract {
    login: (data: LoginFormType) => Promise<LoginResponse>;
    //TODO:add logout
    //TODO: add register
}
