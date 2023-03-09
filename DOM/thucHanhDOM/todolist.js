<<<<<<< Updated upstream
=======
<<<<<<< HEAD
// function genaratID(arr){
//     if (arr.length == 0) {
//         return 1;
//     }
//     return arr[arr.length - 1].id + 1;
// }
// const todos = [
//     {id: 1, title: "Đi chơi", status: true},
//     {id: 2, title: "Làm bài", status: false},
//     {id: 3, title: "Đá Bóng", status: true},
// ]
let todos = [];
=======
>>>>>>> Stashed changes
function genaratID(arr) {
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

>>>>>>> d7c75319210e88bd4c329a28200b24acde115e02
const listEl = document.querySelector("ul");
const inputEl = document.getElementById("todo-input");
const btnAdd = document.getElementById("btn-add");

<<<<<<< Updated upstream
btnAdd.addEventListener("click", () => {
=======
<<<<<<< HEAD
const API_URL = "http://localhost:8080/api/todos"
const getTodos = async()=>{
    try {
        // goij api
        let rs = await axios.get(API_URL);
        todos = rs.data;
        // hien thi

        renderTodos(todos);
    } catch(arr) {
        console.log(arr);
    }
}

btnAdd.addEventListener("click",async ()=>{
=======
btnAdd.addEventListener("click", () => {
>>>>>>> d7c75319210e88bd4c329a28200b24acde115e02
>>>>>>> Stashed changes
    const title = inputEl.value;
    if (title.trim() == "") {
        alert("tieu de trong")
        return;
    }
    const newTodo = {
        title: title,
<<<<<<< Updated upstream
        status: false,
=======
<<<<<<< HEAD
=======
        status: false,
>>>>>>> d7c75319210e88bd4c329a28200b24acde115e02
>>>>>>> Stashed changes
    }

    // them vao backend( axios(đường dẫn, đối tượng));
    // thêm ở front, phải thêm cả front cả back
    // thêm vào back
    const rs = await axios.post(API_URL, newTodo);
    console.log(rs);
    
    // thêm vào front

    todos.push(rs.data);
    renderTodos(todos);
    inputEl.value = "";
})

function findIndexId(arr, i) {
    return arr.findIndex((e) => e.id == i)
}
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
const deleteTodo =async (id) => {

    // xóa (axios(đường dẫn))
    await axios.delete(`${API_URL}/${id}`);

    // xóa ở front
    let indexId = findIndexId(todos,id)
    // console.log(indexId);
    todos.splice(indexId,1);
=======
>>>>>>> Stashed changes

const deleteTodo = id => {
    let indexId = findIndexId(todos, id)
    console.log(indexId);
    todos.splice(indexId, 1);
<<<<<<< Updated upstream
=======
>>>>>>> d7c75319210e88bd4c329a28200b24acde115e02
>>>>>>> Stashed changes
    renderTodos(todos);
}

const toggleStatus = id => {
    let indexId = findIndexId(todos, id);
    const checkbox = document.querySelector("checkbox")


    renderTodos(todos);
}

<<<<<<< Updated upstream
const renderTodos = arr => {
=======
<<<<<<< HEAD
const editTodo = id =>{

}

const renderTodos = arr =>{
=======
const renderTodos = arr => {
>>>>>>> d7c75319210e88bd4c329a28200b24acde115e02
>>>>>>> Stashed changes
    listEl.innerHTML = "";
    if (arr.length == 0) {
        listEl.insertAdjacentHTML("afterbegin", "<li>khong co viec gi</li>")
        return;
    }


    let html = "";
    arr.forEach(element => {
        html += `
            <li>
                <input onclick = "toggleStatus(${element.id})" type="checkbox" ${element.status ? "checked" : ""}/>
                <span class = ${element.status ? "active" : ""}>${element.title}</span>
                <button onclick="editTodo(${element.id})">Edit</button>
                <button onclick="deleteTodo(${element.id})">Delete</button>
            </li>
        `
    });
    listEl.innerHTML = html;
}
// renderTodos(todos);
getTodos();