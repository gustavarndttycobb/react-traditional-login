import { http, HttpResponse } from "msw";
import { GET_USER_DATA_ENDPOINT } from "../../utils/endpoints";
import { getUserDataBodyMocked } from "../user/getUserDataBody.mock";
import { IGetUserDataBody } from "../../shared/models/getUserDataBody.model";
import { getUSerDataResponseMocked } from "../user/getUserDataResponse.mock";

const userServiceHandler = http.post(GET_USER_DATA_ENDPOINT, async ({ request }) => {
    const requestBody = await request.json() as IGetUserDataBody;
    if (requestBody.token === getUserDataBodyMocked.token) {
        return HttpResponse.json(getUSerDataResponseMocked);
    }
    return HttpResponse.json({ message: `User not found` }, { status: 401 });
})

const userHandlers = [
    userServiceHandler
]

export default userHandlers