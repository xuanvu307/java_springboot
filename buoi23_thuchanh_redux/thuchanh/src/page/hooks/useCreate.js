import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { useCreateCourseMutation } from '../../app/service/CourseService';
import { courseSchema } from "../schemas/schemas";

const useCreate = () => {
    const [createCourse] = useCreateCourseMutation();

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
            .then(() => alert("Tạo khóa học thành công"))
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