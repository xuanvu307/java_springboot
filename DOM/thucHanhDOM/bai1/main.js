// Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = “yellow”)
const para = document.querySelector("P");
let arr = para.innerText.split(" ");
console.log(arr)
let text = "";
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 8) {
        arr[i] = `<span style="background-color : yellow">${arr[i]}</span>`;
    }
}
para.innerHTML = arr.join(" ");
// Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
const linkFB = document.createElement("a");
linkFB.href = "https://fb.com";
linkFB.innerText = "FaceBook";

para.insertAdjacentElement("afterend",linkFB);
// Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
const countWord = `<div>Số từ: ${arr.length}</div>`;

para.insertAdjacentHTML("beforebegin",countWord);
// Thay thế ký hiệu ? => 🤔, ! => 😲
para.innerHTML = para.innerHTML.replaceAll("?","🤔");
para.innerHTML = para.innerHTML.replaceAll("!","😲");