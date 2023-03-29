import { createSlice } from '@reduxjs/toolkit'

const initialState = 0; // giá trị khởi tạo ban đầu

const counterSlice = createSlice({
    name: "counter", // tên là duy nhất
    initialState,
    reducers: {
        increment(state, action) { // actions type : counter/increment
            return state + 1;
        },
        decrement(state, action) { // actions type : counter/decrement
            return state - 1;
        }
    }
});

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer