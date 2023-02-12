import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import GridSlice from './storeGrid/storeGrid'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    grid: GridSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch