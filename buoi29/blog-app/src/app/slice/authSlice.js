import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../service/authApi';
import { getData, setData } from '../../utils/localStorageUtils';

const defaultState = {
    auth: null,
    token: null,
    isAuthenticated : false 
}

const initialState = getData("authBlog") ? getData("authBlog") : defaultState;
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
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

export const {} = authSlice.actions

export default authSlice.reducer