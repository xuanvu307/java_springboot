import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/public' }),
    endpoints: (builder) => ({
        getAllBlog: builder.query({
            query : ({page, pageSize}) => `/blogs?page=${page}&pageSize=${pageSize}`,
        }),
        getBlogByname: builder.query({
            query: (data) => `/search?term=${data}`
        }),
        getBlogById: builder.query({
            query: ({blogId, blogSlug}) => `blogs/${blogId}/${blogSlug}`
        })
    }),
})
export const {
    useGetBlogByIdQuery,
    useLazyGetAllBlogQuery,
    useLazyGetBlogBynameQuery,
} = blogApi