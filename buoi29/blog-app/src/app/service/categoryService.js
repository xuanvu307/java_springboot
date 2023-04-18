import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/public/'}),
    endpoints: (builder) => ({
        getAllCategory: builder.query({
            query : () => 'categories',
        }),
        getTopCategory: builder.query({
            query : () => 'categories/top5',
        }),
        getBlogByCategory: builder.query({
            query : (data) => `category/${data}`,
        }),
    }),
})
export const {
    useGetAllCategoryQuery,
    useGetTopCategoryQuery,
    useGetBlogByCategoryQuery,
} = categoryApi