import { Navigate } from 'react-router-dom'

export interface User {
    id: string
    name: string
    email: string
    password?: string
}

export const users: User[] = [
    {
        id: '1',
        name: 'Microsoft',
        email: 'pizza@microsoft.com',
        password: '123123',
    },
    {
        id: '2',
        name: 'Amazon',
        email: 'pizza@amazon.com',
        password: '123123',
    },
    {
        id: '3',
        name: 'Facebook',
        email: 'pizza@facebook.com',
        password: '123123',
    },
]

export const checkLogin = (user: { email: string; password: string }) => {
    return users
        .filter((u) => u.email === user.email && u.password === user.password)
        .filter((u) => {
            delete u.password
            return u
        })[0]
}

export const checkAuth = (auth: boolean) => {
    if (!auth) {
        Navigate({ to: '/' })
    }
}
