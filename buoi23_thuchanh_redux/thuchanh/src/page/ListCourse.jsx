import React from 'react'
import { Link } from 'react-router-dom'
import { useDeleteCourseMutation, useGetAllCourseQuery } from '../app/service/CourseService'

function ListCourse() {
    const { data, isLoading, isError, error } = useGetAllCourseQuery();
    const [deleteCourse] = useDeleteCourseMutation();

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>Error: ${error}</h2>
    }
    const handleDelete = (id) =>{
        deleteCourse(id)
        .unwrap()
        .then(()=> alert("Xóa thành công"))
        .catch(err => alert(err))
    }
    return (
        <>
            <div className="course-list mt-4 mb-4">
                <div className="container">
                    <div className="mb-4">
                        <Link to={"/admin/course/create"} className="btn-custom btn-create-course">
                            <span><i className="fa-solid fa-plus"></i></span>
                            Tạo khóa học
                        </Link>
                        <Link to={"/admin/course"} className="btn-custom btn-refresh">
                            <span><i className="fa-solid fa-arrow-rotate-right"></i></span>
                            Refresh
                        </Link>
                    </div>

                    <div className="course-list-inner p-2">
                        <table className="table course-table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên khóa học</th>
                                    <th>Hình thức</th>
                                    <th>Chủ đề</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 && data.map((c, index) => (
                                    <tr key={c.id}>
                                        <td>{c.id}</td>
                                        <td>
                                            <Link to={`/admin/course/${c.id}`}>{c.name}</Link>
                                        </td>
                                        <td className="text-info">{c.type}</td>
                                        <td>
                                            {c.categories.map(e => e.name).join(" , ")}
                                        </td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => handleDelete(c.id)}>Xóa</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListCourse