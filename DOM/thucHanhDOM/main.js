// tao the input
const inputEl = document.createElement("input");
inputEl.type = "text"
inputEl.placeholder = "text ... "

const listEl = document.getElementById("list");

listEl.insertAdjacentElement("beforebegin",inputEl);

// tao button
const btnAdd = document.createElement("button");
btnAdd.innerText = "Add";
inputEl.insertAdjacentElement("afterend",btnAdd);

const addElement = () =>{
    let value = inputEl.value;
    if(value.trim()== ""){
        alert("noi dung trong")
        return;
    }
    listEl.insertAdjacentHTML("beforeend", `<li>${value.trim()}</li>`);
    inputEl.value    = "";
}

//Add bang chuot
//1
btnAdd.addEventListener("click", addElement);
//2
// btnAdd = addElement;

//Add bang enter

inputEl.addEventListener("keydown", (e)=>{
    if(e.key ==="Enter"){
        addElement();
    }
})


// Thêm 1 nút “remove”. Chức năng để xóa thẻ <li> cuối cùng của danh sách

const remove = document.createElement("button");
remove.innerText = "Remove";

btnAdd.insertAdjacentElement("afterend",remove);

const removeElement = () => {
    const lastChild = document.querySelector("li:last-child")
    lastChild.parentNode.removeChild(lastChild);
}

remove.addEventListener("click",removeElement);

// Thêm 1 nút “Hide” trên đầu của danh sách <ul>.
// Khi bấm vào “Hide” thì <ul> sẽ ẩn. Đồng thời label của nút “Hide” => “Show”
// Và ngược lại Khi bấm vào “Show” thì <ul> sẽ hiện. Đồng thời label của nút “Show” => “Hide”

const hide = document.createElement("button");
hide.innerText = "Hide";
// listEl.insertAdjacentHTML("beforebegin", "</br>")
listEl.insertAdjacentElement("beforebegin",hide);


hide.addEventListener("click",() =>{
    listEl.classList.toggle('hide');

    if (hide.innerText == "Hide") {
        hide.innerText = "Show"
    } else {
        hide.innerText = "Hide";
    }
})
