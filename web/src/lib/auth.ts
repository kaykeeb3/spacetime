import decode from 'jwt-decode'
import { cookies } from 'next/headers'


interface User {
  sub: string,
  name: string,
  avatarUrl: string
}

export function  getUser(): User {
  const token = cookies().get('token')?.value

  if (!token) {
    throw new Error('Unauthenticade.')
  }

  const user: User = decode(token)

  return user
}