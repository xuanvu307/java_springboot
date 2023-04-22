import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/public' }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `http://localhost:8080/login-handle`,
                method: "POST",
                body: data
            })
        }),
    }),
})
export const {
    useLoginMutation,
} = authApi