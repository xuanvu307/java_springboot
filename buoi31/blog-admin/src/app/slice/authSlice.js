import { createSlice } from '@reduxjs/toolkit'
import { getData, setData } from '../ultils/localStorageUtils';
import { authApi } from '../service/authApi';

const defaultState = {
    auth: null,
    token: null,
    isAuthenticated: false
}

const initialState = getData("authBlog") ? getData("authBlog") : defaultState;

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            
            state = defaultState

            //lưu vào storeega
            setData("authBlog", state)

            return state;
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
            state.auth = action.payload.auth;
            state.token = action.payload.token;
            state.isAuthenticated = action.payload.isAuthenticated;
            //lưu vào localstorege

            setData("authBlog", state)
        })
    }
});

export const { logout } = authSlice.actions

export default authSlice.reducer