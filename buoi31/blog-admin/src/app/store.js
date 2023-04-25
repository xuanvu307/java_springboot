import { configureStore } from "@reduxjs/toolkit";
import authRudecer from "./slice/authSlice";
import { authApi } from "./service/authApi";
import { blogApi } from "./service/blogApi";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [blogApi.reducerPath]: blogApi.reducer,
        auth : authRudecer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            blogApi.middleware,
        ),
})