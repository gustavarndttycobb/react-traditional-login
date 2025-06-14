import env from "./env";

const BASE_URL = env.API_URL;

const LOGIN_ENDPOINT = `${BASE_URL}/api/auth/login`;
const SIGNUP_ENDPOINT = `${BASE_URL}/api/auth/signup`;
const GET_USER_DATA_ENDPOINT = `${BASE_URL}/api/users/get-user-data`;

export {
    LOGIN_ENDPOINT,
    SIGNUP_ENDPOINT,
    GET_USER_DATA_ENDPOINT
}