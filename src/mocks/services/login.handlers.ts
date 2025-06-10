import { http, HttpResponse } from "msw";
import { UserAuth } from "../../features/Login/models/userAuth.model";
import { LoginResponse } from "../../features/Login/models/loginResponse.model";
import { authResponseMocked } from "../../features/Login/mocks/authResponse.mock";
import { authBodyMocked } from "../../features/Login/mocks/authBody.mock";

const loginServiceHandler = http.post('/api/auth/login', async ({ request }) => {
    const requestBody = await request.json() as UserAuth;
    const email = requestBody?.email;
    const password = requestBody?.password;
    if (email !== authBodyMocked.email || password !== authBodyMocked.password) {
        return HttpResponse.json({ message: `User not found` }, { status: 401 });
    }
    return HttpResponse.json<LoginResponse>(authResponseMocked);
})

const loginHandlers = [
    loginServiceHandler
]

export default loginHandlers