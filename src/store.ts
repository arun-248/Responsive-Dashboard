import { configureStore } from "@reduxjs/toolkit"
import theme from "./slices/themeSlice"
import data from "./slices/dataSlice"

export const store = configureStore({
  reducer: { theme, data }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
