import { IGetUserDataResponse } from "../models/getUserDataResponse.model";

export interface UserServiceContract {
    getUserData: ({ token }: { token: string }) => Promise<IGetUserDataResponse>;
}
