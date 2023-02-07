const heading = document.getElementById("heading")
console.log(heading);
const para2 = document.querySelector(".p2")
const para4 = document.querySelector(".p4")

const heading1 = document.querySelector("#heading");
console.log(para2);
console.log(heading1);

const para = document.querySelectorAll("p");
console.log(para);

const li4 = document.querySelector("ul li:nth-child(4)");
console.log(li4);

// theem phần tử
const btn = document.createElement("button");
btn.innerText = "Click me";
console.log(btn);
document.body.appendChild(btn);
document.body.prepend(btn);


document.body.insertBefore(btn,para4);

para2.insertAdjacentElement("beforebegin",btn)

para4.insertAdjacentHTML("beforebegin","<button>Click me</button>")

// Xoas

// heading.parentNode.removeChild(heading);
// para2.parentNode.removeChild(para2);


heading.classList.add("text-red", "text-big", "text-center");

heading.classList.remove("text-red")


setInterval(()=>{
    heading.classList.toggle("text-red")
    heading.classList.toggle(heading.style.color = "rgb(90, 167, 42)") 
     //toggle thực hiện nếu có thì xóa đi, không có thì thêm vào
},100)  // thuực hiện thao tác trong 1 khoảng thời gian

setTimeout(()=>{

},1000) // thực hiện nghỉ 1 khoảng time

const timeTest = document.getElementById("time");
const spanTime = document.querySelector("#time span")
let time = 100;

const timeInterval = setInterval(()=>{
    time--;
    spanTime.innerText = `${time}s`;

    if(time == 0){
        clearInterval(timeInterval);
        timeTest.innerText = "Kết thúc"
    }
},1000)