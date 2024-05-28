import { User } from 'types/user'

export async function fakeLogin(
  username: string,
  password: string,
): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'user' && password === 'password') {
        resolve({
          id: '1',
          username: 'user',
          email: 'user@example.com',
        })
      } else {
        reject(new Error('Invalid username or password'))
      }
    }, 2000)
  })
}
