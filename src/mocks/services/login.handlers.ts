import { http, HttpResponse } from "msw";
import { ILoginBody } from "../../features/Auth/models/loginBody.model";
import { ILoginResponse } from "../../features/Auth/models/loginResponse.model";
import { authResponseMocked } from "../../features/Auth/mocks/authResponse.mock";
import { authBodyMocked } from "../../features/Auth/mocks/authBody.mock";
import { ISignupBody } from "../../features/Auth/models/signupBody.model";
import { LOGIN_ENDPOINT, SIGNUP_ENDPOINT } from "../../utils/endpoints";
import { ISignupResponse } from "../../features/Auth/models/signupResponse.model";

const loginServiceHandler = http.post(LOGIN_ENDPOINT, async ({ request }) => {
    const requestBody = await request.json() as ILoginBody;
    const email = requestBody?.email;
    const password = requestBody?.password;
    if (email !== authBodyMocked.email || password !== authBodyMocked.password) {
        return HttpResponse.json({ message: `User not found` }, { status: 401 });
    }
    return HttpResponse.json<ILoginResponse>(authResponseMocked);
})

const signupServiceHandler = http.post(SIGNUP_ENDPOINT, async ({ request }) => {
    const requestBody = await request.json() as ISignupBody;
    const email = requestBody?.email;
    const password = requestBody?.password;
    const fullName = requestBody?.fullName;
    if (!fullName || !email || !password) {
        return HttpResponse.json({ message: `missing required fields` }, { status: 401 });
    }
    return HttpResponse.json<ISignupResponse>({ message: `User successfully created` });
})

const authHandlers = [
    loginServiceHandler,
    signupServiceHandler
]

export default authHandlers