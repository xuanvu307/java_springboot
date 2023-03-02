// Sử dụng Javascript để thực hiện các công việc sau

// Một tính năng mới vào gói Pro: ‘24/7 Phone support’
const newText = `<li>24/7 Phone support</li>`
const positionNewText = document.querySelector("#pro-plan li:last-child")
console.log(positionNewText);
positionNewText.insertAdjacentHTML("beforeend", newText);

// Đổi vị trí 2 card pricing (pro, basic) => (basic, pro)


// Trong gói Pro hãy cập nhật nút ‘Get Started’ hiện tại 
// thành màu xanh có màu background: #0984e3, có chữ màu #fff và có dòng chữ ‘Buy Now’


// Tăng dung lượng lưu trữ của gói Pro thêm 25%, gói Basic thêm 50%