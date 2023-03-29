// acction : là object chứa thông tin vê sự kiện{
//     type: loại hành đọng(duy nhất và bắt buộc) ~ URL API
//     payload: thông tin gửi lên để cập nhật state ~ request body
// }
// 
//action creator: function trả về action(Object)

export const increment = () =>{
    return {
        type : "counter/increment"
    }
}

export const decrement = () =>{
    return {
        type : "counter/decrement"
    }
}
