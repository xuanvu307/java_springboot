import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./service/blogService";
import { categoryApi } from "./service/categoryService";
import { commentApi } from "./service/commentService";
import { authApi } from "./service/authApi";
import authRudecer from "./slice/authSlice";

export const store = configureStore({
    reducer: {
        [blogApi.reducerPath]: blogApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [commentApi.reducerPath]: commentApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        auth : authRudecer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            blogApi.middleware,
            categoryApi.middleware,
            commentApi.middleware,
            authApi.middleware,
        ),
})