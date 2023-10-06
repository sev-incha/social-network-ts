import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { authApi } from "./api/authApi";
import { postApi } from "./api/postApi";
import { fileApi } from "./api/fileApi";
import { commentApi } from "./api/commentApi";

export const store = configureStore({
  reducer: {
    userSlice,
    [authApi.reducerPath]: authApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [fileApi.reducerPath]: fileApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([
    authApi.middleware,
    postApi.middleware,
    fileApi.middleware,
    commentApi.middleware,
  ])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
