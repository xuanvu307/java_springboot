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
            }),
            invalidatesTags :["Course"]
        }),

        updateCourse: builder.mutation({
            query: ({ courseId, ...data }) => ({
                url: `courses/${courseId}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags :["Course"]
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