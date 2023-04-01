import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const courseApi = createApi({
    reducerPath: 'courseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/admin' }),
    tagTypes :["Course"],
    endpoints: (builder) => ({
        getAllCourse: builder.query({
            query: () => "courses",
            providesTags: ["Course"],
        }),

        getCourseById: builder.query({
            query: (id) => `courses/${id}`
        }),

        createCourse: builder.mutation({
            query: (data) => ({
                url: "courses",
                method: "POST",
                body: data
            })
        }),

        updateCourse: builder.mutation({
            query: ({ id, ...data }) => ({
                url: "courses",
                method: "PUT",
                body: data
            })
        }),

        deleteCourse: builder.mutation({
            query: (id) => ({
                url: `courses/${id}`,
                method: "DELETE"
            }),
            invalidatesTags :["Course"]
        })
    }),
})


export const {
    useGetAllCourseQuery,
    useGetCourseByIdQuery,
    useCreateCourseMutation,
    useUpdateCourseMutation,
    useDeleteCourseMutation
} = courseApi