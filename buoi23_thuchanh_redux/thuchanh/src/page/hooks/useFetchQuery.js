import { useGetAllCategoryQuery } from "../../app/service/CategoryService";
import { useGetAllUserQuery } from "../../app/service/UserService";


const useFetchQuery = () => {
    // Lấy danh sách category
    const { data: categories, isLoading: isLoadingCategory } = useGetAllCategoryQuery();

    // Lấy danh sách user
    const { data: users, isLoading: isLoadingUser } = useGetAllUserQuery();

    return {
        categories,
        users,
        isLoading: isLoadingCategory || isLoadingUser
    }
}

export default useFetchQuery;