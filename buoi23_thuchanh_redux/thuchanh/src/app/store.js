import { configureStore } from '@reduxjs/toolkit'
import { categoryApi } from './service/CategoryService'
import { courseApi } from './service/CourseService'
import { userApi } from './service/UserService'

export const store = configureStore({
    reducer: {
        [courseApi.reducerPath]: courseApi.reducer, // api đặt lên trên đầu
        [userApi.reducerPath] : userApi.reducer,
        [categoryApi.reducerPath] : categoryApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(courseApi.middleware, userApi.middleware, categoryApi.middleware),
})
