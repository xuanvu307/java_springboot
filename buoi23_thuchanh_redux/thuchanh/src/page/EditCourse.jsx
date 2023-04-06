import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Controller } from "react-hook-form";
import { getCategoryOptions, getTypeOptions, getUserOptions } from './fetchData/Options';
import useFetchQuery from './hooks/useFetchQuery';
import Select from "react-select";
import { useGetCourseByIdQuery } from '../app/service/CourseService';
import useUpdate from './hooks/useUpdate';

function EditCourse() {
    const { courseId } = useParams();
    const { data: dataCourses, isLoading: isLoadingCourse, isError: isErrorCourse } = useGetCourseByIdQuery(courseId);
    const { categories, users, isLoading } = useFetchQuery();
    const { control, register, handleSubmit, errors, onUpdateCourse, handleDelete } = useUpdate(courseId);

    const categoryOptions = getCategoryOptions(categories);
    const userOptions = getUserOptions(users);
    const typeOptions = getTypeOptions();

    if (isLoading || isLoadingCourse) {
        return <h2>Loading ...</h2>;
    }

    const categoryDefault = getCategoryOptions(dataCourses.categories);

    console.log()
    return (
        <>
            <div className="course-list mt-4 mb-4">
                <div className="container">
                    <form onSubmit={handleSubmit(onUpdateCourse)}>
                        <div className="mb-4 d-flex justify-content-between">
                            <div>
                                <button className="btn-custom btn-update-course" type='submit'>
                                    <span><i className="fa-solid fa-plus"></i></span>
                                    Cập nhật
                                </button>
                                <Link to={"/admin/course"} className="btn-custom btn-refresh">
                                    <span><i className="fa-solid fa-angle-left"></i></span>
                                    Quay lại
                                </Link>
                            </div>
                            <div>
                                <button className="btn-custom btn-delete-course bg-danger" onClick={(e) => handleDelete(e)}>
                                    <span><i className="fa-solid fa-trash-can"></i></span>
                                    Xóa
                                </button>
                            </div>
                        </div>

                        <div className="course-list-inner p-2">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="mb-3">
                                        <label
                                            htmlFor="course-name"
                                            className="form-label fw-bold"
                                        >
                                            Tên khóa học
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="course-name"
                                            defaultValue={dataCourses?.name}
                                            {...register("name")}
                                        />
                                        <p className="text-danger fst-italic mt-2">
                                            {errors.name?.message}
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="course-description"
                                            className="form-label fw-bold"
                                        >
                                            Mô tả
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="course-description"
                                            rows="10"
                                            defaultValue={dataCourses?.description}
                                            {...register("description")}
                                        ></textarea>
                                        <p className="text-danger fst-italic mt-2">
                                            {errors.description?.message}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <label
                                            htmlFor="course-price"
                                            className="form-label fw-bold"
                                        >
                                            Giá
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            id="course-price"
                                            defaultValue={dataCourses.price}
                                            {...register("price")}
                                        />
                                        <p className="text-danger fst-italic mt-2">
                                            {errors.price?.message}
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="course-type"
                                            className="form-label fw-bold"
                                        >
                                            Hình thức học
                                        </label>
                                        <Controller
                                            name="type"
                                            control={control}
                                            defaultValue={dataCourses?.type}
                                            render={({ field }) => (
                                                <Select
                                                    {...field}
                                                    placeholder="-- Chọn hình thức học --"
                                                    options={typeOptions}
                                                    value={typeOptions.find(
                                                        (c) =>
                                                            c.value === field.value
                                                    )}
                                                    onChange={(val) =>
                                                        field.onChange(val.value)
                                                    }
                                                />
                                            )}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="course-topic"
                                            className="form-label fw-bold"
                                        >
                                            Chủ đề
                                        </label>
                                        <Controller
                                            name="category"
                                            control={control}
                                            defaultValue={dataCourses.categories.map(e => e.id)}
                                            render={({
                                                field: { onChange, value, ref },
                                            }) => (
                                                <Select
                                                    closeMenuOnSelect={false}
                                                    placeholder="-- Chọn danh mục --"
                                                    inputRef={ref}
                                                    defaultValue={
                                                        categoryDefault
                                                    }
                                                    value={categoryOptions.find(
                                                        (c) => c.value === value
                                                    )}
                                                    onChange={(val) =>
                                                        onChange(
                                                            val.map((c) => c.value)
                                                        )
                                                    }
                                                    options={categoryOptions}
                                                    isMulti
                                                />
                                            )}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="course-topic"
                                            className="form-label fw-bold"
                                        >
                                            Nhân viên tư vấn
                                        </label>
                                        <Controller
                                            name="userId"
                                            control={control}
                                            defaultValue={dataCourses.user.id}
                                            render={({ field }) => (
                                                <Select
                                                    {...field}
                                                    placeholder="-- Chọn nhân viên tư vấn --"
                                                    defaultValue={{ label: dataCourses.user.name, value: dataCourses.user.id }}
                                                    options={userOptions}
                                                    value={userOptions.find(
                                                        (c) =>
                                                            c.value === field.value
                                                    )}
                                                    onChange={(val) =>
                                                        field.onChange(val.value)
                                                    }
                                                />
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditCourse