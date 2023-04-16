import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./service/blogService";
import { categoryApi } from "./service/categoryService";

export const store = configureStore({
    reducer: {
        [blogApi.reducerPath]: blogApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(blogApi.middleware, categoryApi.middleware),
})