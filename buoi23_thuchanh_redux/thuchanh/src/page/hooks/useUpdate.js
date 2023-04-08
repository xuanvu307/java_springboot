import { useDeleteCourseMutation, useUpdateCourseMutation } from '../../app/service/CourseService';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { courseSchema } from '../schemas/schemas';
import { useNavigate } from 'react-router-dom';

function useUpdate(courseId) {
    const [updateCourse] = useUpdateCourseMutation();
    const [deleteCourse] = useDeleteCourseMutation();

    const navigate = useNavigate();

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(courseSchema),
        mode: "all",
    });


    const onUpdateCourse = (data) => {
        updateCourse({ courseId, ...data })
            .unwrap()
            .then(() => alert("Cập nhật thành công"))
            .catch(err => alert(err.data.message))
    };

    const handleDelete = (e) => {
        e.preventDefault();
        deleteCourse(courseId)
            .unwrap()
            .then(alert("Xóa thành công"))
            .then(
                setTimeout(() => {
                    navigate(`/admin/course`, { replace: true });
                }, 1000)
            )
            .catch(err => alert(err.data.message))
    }

    return {
        control,
        register,
        handleSubmit,
        errors,
        onUpdateCourse,
        handleDelete
    }
}

export default useUpdate