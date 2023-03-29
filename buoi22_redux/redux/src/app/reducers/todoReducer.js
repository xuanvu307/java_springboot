const initiaState = [
    {id: 1, title: "lam bai tap"},
    {id: 2, title: "nau com"},
    {id: 3, title: "da bong"},
    {id: 4, title: "di choi"}
];

const todoReducer = (state = initiaState, action) =>{
    switch(action.type){
        case "todo/addTodo" : {
            return [...state, action.payload];
        } 
        case "todo/deleteTodo" :{
            return state.filter(todo => todo.id !== action.payload);
        } 
        default : {
            return state;
        }
    }
}

export default todoReducer