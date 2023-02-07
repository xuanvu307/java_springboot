function genaratID(arr){
    if (arr.length == 0) {
        return 1;
    }
    return arr[arr.length - 1].id + 1;
}
const todos = [
    {id: 1, title: "Đi chơi", status: true},
    {id: 2, title: "Làm bài", status: false},
    {id: 3, title: "Đá Bóng", status: true},
]

const listEl = document.querySelector("ul");
const inputEl = document.getElementById("todo-input");
const btnAdd = document.getElementById("btn-add");

btnAdd.addEventListener("click", ()=>{
    const title = inputEl.value;
    if (title.trim() == "") {
        alert("tieu de trong")
        return;
    }
    const newTodo = {
        id: genaratID(todos),
        title: title,
        status : false,
    }

    todos.push(newTodo);
    renderTodos(todos);
    inputEl.value = "";
})

function findIndexId(arr,i){
    return arr.findIndex((e) => e.id == i)
}
const deleteTodo = id => {
    console.log(id);
    let indexId = findIndexId(todos,id)
    console.log(indexId);
    todos.splice(indexId,1);
    renderTodos(todos);
}

const toggleStatus = id => {
    
}

const renderTodos = arr =>{
    listEl.innerHTML = "";
    if(arr.length == 0){
        listEl.insertAdjacentHTML("afterbegin","<li>khong co viec gi</li>")
        return;
    }


    let html = "";
    arr.forEach(element => {
        html += `
            <li>
                <input type="checkbox" ${element.status ? "checked" : ""}/>
                <span class = ${element.status ? "active": ""}>${element.title}</span>
                <button onclick="editTodo(${element.id})">Edit</button>
                <button onclick="deleteTodo(${element.id})">Delete</button>
            </li>
        `
    });
    listEl.innerHTML= html;
}
renderTodos(todos);