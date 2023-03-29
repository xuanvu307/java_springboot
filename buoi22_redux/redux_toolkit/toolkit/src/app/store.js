import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import todoSlice from "./slices/todoSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        todos: todoSlice
    }
})

export default store