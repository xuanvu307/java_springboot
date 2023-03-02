// Sử dụng javascript để thực hiện những công việc sau

// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
const ul = document.getElementById("list")
for (let i = 8; i <= 10; i++) {
    const newLi = document.createElement("li");
    newLi.innerText = `Item ${i}`;
    ul.insertAdjacentElement("beforeend", newLi);
}
// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
const li1 = document.querySelector("li:first-child");
li1.style.color = "red";


// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const li3 = document.querySelector("li:nth-child(3)");
li3.style.backgroundColor = "green";
li3.style.color = "orange"


// Remove thẻ <li> 4
const li4 = document.querySelector("li:nth-child(4)");
//c1
// li4.parentNode.removeChild(li4);

// c2
ul.removeChild(li4);


// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const li5 = document.querySelector("li:nth-child(4)")
const newLi = `<li>Item thêm</li>`;
li5.insertAdjacentHTML("beforebegin", newLi);

// Thêm 1 nút “add” + 1 ô input để nhập text. Mỗi khi bấm nút thêm 1 thẻ <li> có nội dung là nội dung trong ô input vào cuối danh sách
const btn = document.createElement("button");
btn.innerText = "Add";
ul.insertAdjacentElement("beforebegin", btn);
let it = 1000;
btn.addEventListener("click", () => {
    const newLi = `<li>Item ${it++}</li>`;
    ul.insertAdjacentHTML("beforeend", newLi);
})

// Thêm 1 nút “remove”. Chức năng để xóa thẻ <li> cuối cùng của danh sách
const remove = document.createElement("button");
remove.innerText = "Remove";
ul.insertAdjacentElement("beforebegin", remove);

remove.addEventListener("click", () => {
    const lastLi = document.querySelector("li:last-child")
    lastLi.parentNode.removeChild(lastLi);
})


// Thêm 1 nút “Hide” trên đầu của danh sách <ul>.
// Khi bấm vào “Hide” thì <ul> sẽ ẩn. Đồng thời label của nút “Hide” => “Show”
// Và ngược lại Khi bấm vào “Show” thì <ul> sẽ hiện. Đồng thời label của nút “Show” => “Hide”

const hide = document.createElement("button");
hide.innerText = "Hide";
ul.insertAdjacentElement("beforebegin", hide);

hide.addEventListener("click", () => {
    ul.classList.toggle("displayNone");
    if (hide.innerText == "Hide") {
        hide.innerText = "Show"
    } else {
        hide.innerText = "Hide";
    }
})