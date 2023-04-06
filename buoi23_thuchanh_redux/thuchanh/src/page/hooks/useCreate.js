import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useCreateCourseMutation } from '../../app/service/CourseService';
import { courseSchema } from "../schemas/schemas";

const useCreate = () => {
    const [createCourse] = useCreateCourseMutation();

    const navigate = useNavigate();
    // Khởi tạo form
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            price: 0,
        },
        resolver: yupResolver(courseSchema),
        mode: "all",
    });

    // Function tạo khóa học
    const onCreateCourse = (data) => {
        createCourse(data)
            .unwrap()
            .then((data) => {
                console.log(data)
                alert("Tạo khóa học thành công")
                setTimeout(() => {
                    navigate(`/admin/course/${data.id}`, { replace: true });
                }, 1000)
            })
            .catch(err => alert(err.data.message))
    };

    return {
        control,
        register,
        handleSubmit,
        errors,
        onCreateCourse
    }
}

export default useCreate;