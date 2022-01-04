import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface User {
    idL: number
    name: string
}

// Define a type for the slice state
interface AuthState {
    loggedIn: boolean
    user: User | null
}

// Define the initial state using that type
const initialState: AuthState = {
    loggedIn: false,
    user: null,
}

export const AuthSlice = createSlice({
    name: 'auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.loggedIn = true
            state.user = action.payload
        },
        logout: (state) => {
            state.loggedIn = false
        },
    },
})

export const { login, logout } = AuthSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.auth

export default AuthSlice.reducer
