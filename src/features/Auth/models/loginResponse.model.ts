import { IUserData } from "./userData.model"

export interface ILoginResponse {
  user: IUserData
  token: string
}
