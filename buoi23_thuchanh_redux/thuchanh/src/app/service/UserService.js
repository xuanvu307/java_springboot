import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/admin' }),
    tagTypes :["Course"],
    endpoints: (builder) => ({
        getAllUser: builder.query({
            query : () => 'course',
        })
    }),
})


export const {
    useGetAllUserQuery
} = userApi