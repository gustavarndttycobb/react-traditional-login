import { GET_USER_DATA_ENDPOINT } from "../../utils/endpoints";
import { UserServiceContract } from "../contracts/user.contract";
import { IGetUserDataBody } from "../models/getUserDataBody.model";
import { IGetUserDataResponse } from "../models/getUserDataResponse.model";

export class UserService implements UserServiceContract {

  async getUserData(body: IGetUserDataBody): Promise<IGetUserDataResponse> {
    const response = await fetch(GET_USER_DATA_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message ?? 'Login failed')
    }

    return await response.json();
  }

}

export const userService = new UserService();


