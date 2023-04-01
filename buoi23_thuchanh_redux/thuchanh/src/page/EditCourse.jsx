import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDeleteCourseMutation, useGetCourseByIdQuery } from '../app/service/CourseService';

function EditCourse() {
    const {courseId} = useParams();
    const { data, isLoading, isError, error } = useGetCourseByIdQuery(courseId);
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
                    <div className="mb-4 d-flex justify-content-between">
                        <div>
                            <button className="btn-custom btn-update-course">
                                <span><i className="fa-solid fa-plus"></i></span>
                                Cập nhật
                            </button>
                            <Link to={"/admin/course"} className="btn-custom btn-refresh">
                                <span><i className="fa-solid fa-angle-left"></i></span>
                                Quay lại
                            </Link>
                        </div>
                        <div>
                            <button className="btn-custom btn-delete-course bg-danger" onClick={() => handleDelete({courseId})}>
                                <span><i className="fa-solid fa-trash-can"></i></span>
                                Xóa
                            </button>
                        </div>
                    </div>

                    <div className="course-list-inner p-2">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="mb-3">
                                    <label htmlFor="course-name" className="form-label fw-bold">Tên khóa học</label>
                                    <input type="text" className="form-control" id="course-name" defaultValue={data.name}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="course-description" className="form-label fw-bold">Mô tả</label>
                                    <textarea className="form-control" id="course-description" rows="10" defaultValue={data.description}></textarea>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="course-type" className="form-label fw-bold">Hình thức học</label>
                                    <select className="form-control" id="course-type" defaultValue={data.type}>
                                        <option hidden>- Chọn hình thức học</option>
                                        <option value="online">Online</option>
                                        <option value="onlab">Onlab</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="course-topic" className="form-label fw-bold">Chủ đề</label>
                                    <select className="form-control" id="course-topic" multiple="multiple">
                                        <option value="1">Backend</option>
                                        <option value="2">Frontend</option>
                                        <option value="3">Mobile</option>
                                        <option value="4">Lập trình web</option>
                                        <option value="5">Database</option>
                                        <option value="6">Devops</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="course-supporter" className="form-label fw-bold">Tư vấn viên</label>
                                    <select className="form-control" id="course-supporter">
                                        <option hidden>- Chọn tư vấn viên</option>
                                        <option value="1">Nguyễn Văn A</option>
                                        <option value="2">Trần Văn B</option>
                                        <option value="3">Ngô Thị C</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Thumnail</label>
                                    <div className="course-logo-preview mb-3 rounded">
                                        <img id="course-logo-preview" className="rounded" />
                                    </div>

                                    <label htmlFor="course-logo-input" className="btn btn-warning" />Đổi ảnh
                                    <input type="file" id="course-logo-input" className="d-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditCourse