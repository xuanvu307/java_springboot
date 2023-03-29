import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: 1, title: "lam bai tap" },
    { id: 2, title: "nau com" },
    { id: 3, title: "da bong" },
    { id: 4, title: "di choi" }
];

const todoSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        addTodo(state, action) {
            state.push(action.payload)
        },
        deleteTodo(state, action) {
            const index = state.findIndex(todo => todo.id === action.payload);
            state.splice(index, 1);
        }
    }
});

export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer