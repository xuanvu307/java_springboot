// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
const listEl = document.getElementById("list")
for (let i = 8; i <= 10; i++) {
    const li = document.createElement("li");
    li.innerText = `Item ${i}`
    listEl.insertAdjacentElement("beforeend", li)
}
// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
const firstItem = document.querySelector("li:nth-child(1)");
firstItem.style.color = "red";

// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const li3 = document.querySelector("li:nth-child(3)");
li3.style.backgroundColor = "blue";

// Remove thẻ <li> 4
const li4 = document.querySelector("li:nth-child(4)");
li4.parentNode.removeChild(li4);


// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const newEl = document.createElement("li");
newEl.innerText = "Item thêm"

const li5 = document.querySelector("li:nth-child(4)");
// listEl.insertBefore(newEl,li5);

li5.insertAdjacentElement("afterbegin", newEl)