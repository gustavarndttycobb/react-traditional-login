import { http, HttpResponse } from "msw";
import { ILoginBody } from "../../features/Auth/models/loginBody.model";
import { ILoginResponse } from "../../features/Auth/models/loginResponse.model";
import { authResponseMocked } from "../../features/Auth/mocks/authResponse.mock";
import { authBodyMocked } from "../../features/Auth/mocks/authBody.mock";

const loginServiceHandler = http.post('/api/auth/login', async ({ request }) => {
    const requestBody = await request.json() as ILoginBody;
    const email = requestBody?.email;
    const password = requestBody?.password;
    if (email !== authBodyMocked.email || password !== authBodyMocked.password) {
        return HttpResponse.json({ message: `User not found` }, { status: 401 });
    }
    return HttpResponse.json<ILoginResponse>(authResponseMocked);
})

const loginHandlers = [
    loginServiceHandler
]

export default loginHandlers