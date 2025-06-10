import { UserData } from "./userData.model"

export interface LoginResponse {
  user: UserData
  token: string
}