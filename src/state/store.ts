import { configureStore, StoreEnhancer } from '@reduxjs/toolkit'
import AuthSlice from './customer/AuthSlice'
import ProductListSlice from './product/ProductListSlice'
import persistState from 'redux-localstorage'

const store = configureStore({
    reducer: {
        auth: AuthSlice,
        product: ProductListSlice,
    },
    enhancers: [persistState() as unknown as StoreEnhancer],
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
