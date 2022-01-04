export interface User {
    name?: string
    email: string
    password: string
}

export const users: User[] = [
    {
        name: 'Bharat',
        email: 'b@test.com',
        password: '123123',
    },
]

export const checkLogin = (user: User) => {
    return users.some(
        (u) => u.email === user.email && u.password === user.password
    )
}
