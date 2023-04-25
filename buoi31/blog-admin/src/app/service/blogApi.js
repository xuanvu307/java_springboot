import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api/v1/admin',
        prepareHeaders: (headers, { getState }) => {
            const token = (getState()).auth.token

            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }

            return headers
        },
    }),

    endpoints: (builder) => ({
        getAllBlog: builder.query({
            query: ({ page, pageSize }) => `/blogs?page=${page}&pageSize=${pageSize}`,
        }),
        getBlogByname: builder.query({
            query: (data) => `/search?term=${data}`
        }),
        getBlogById: builder.query({
            query: ({ blogId, blogSlug }) => `blogs/${blogId}/${blogSlug}`
        })
    }),
})
export const {
    useGetBlogByIdQuery,
    useLazyGetAllBlogQuery,
    useLazyGetBlogBynameQuery,
    useGetAllBlogQuery
} = blogApi
