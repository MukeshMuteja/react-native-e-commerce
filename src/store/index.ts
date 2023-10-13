import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from './productReducer'
import CartReducer from './cartReducer';


export const reducer = combineReducers({
    products: counterReducer,
    cart: CartReducer
 });

export const store = configureStore({reducer})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export const AppDispatch =  store.dispatch
