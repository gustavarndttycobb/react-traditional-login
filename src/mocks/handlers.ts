import { http, HttpResponse } from 'msw'

export interface User {
  id: string
  firstName: string
  lastName: string
}

export interface LoginResponse {
  user: User
  token: string
}

export const handlers = [
  http.post('/api/auth/login', () => {
    return HttpResponse.json({
      user: {
        id: 'abc-123',
        firstName: 'John',
        lastName: 'Maverick',
      },
      token: 'mocked-jwt-token',
    })
  }),
]
