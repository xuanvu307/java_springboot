//1 Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
const heading = document.getElementById("heading");
heading.style.color = "red";
// heading.style.textTransform = "toUpperCase";

//2 Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
const paras = document.querySelectorAll(".para");
console.log(paras);
paras.forEach(element => {
    element.style.color = "blue";
    element.style.fontSize = "20px";
});

//3 Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
const linkFB = document.createElement("a");
linkFB.innerText = "LinkFB.";
linkFB.href = "https://facebook.com"
const para3 = document.querySelector(".para-3");
console.log(para3);
para3.insertAdjacentElement("afterend", linkFB);

//4 Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
const title = document.querySelector("#title");
console.log(title);
let newEL = document.createElement("h2")
newEL.innerText = "Đây là thẻ tiêu đề";
title.parentNode.replaceChild(newEL, title);

//5 Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
const description = document.querySelector(".description");
description.classList.add('text-bold')

//6 Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
const button = document.createElement("button");
button.innerText = "Click me"
para3.parentNode.replaceChild(button, para3);

//7 Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó


//8 Xóa thẻ có class=“para-1”