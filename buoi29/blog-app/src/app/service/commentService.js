import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const commentApi = createApi({
    reducerPath: 'commentApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/public' }),
    endpoints: (builder) => ({
        getCommentOfBlogId: builder.query({
            query : ({idBlog, page}) => `blogs/${idBlog}/comment?page=${page}`,
        })
    }),
})
export const {
    useLazyGetCommentOfBlogIdQuery,
} = commentApi