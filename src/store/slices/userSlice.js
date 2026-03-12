import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthUsers from '../../API/AuthUser';

export const registrationUser = createAsyncThunk(
    'user/registration',
    async ({email, password, name}) => {
        try {
            const res = await AuthUsers.registration(email, password, name)
            return res.data
        } catch (e) {
            console.log(e.message);
        }
    }
)

export const loginUser = createAsyncThunk(
    'user/login',
    async ({email, password}) => {
        try {
            const res = await AuthUsers.login(email, password)
            return res.data
        } catch (e) {
            console.log(e.message);
        }
    }
)

export const logoutUser = createAsyncThunk(
    'user/logout',
    async () => {
        try {
            const res = await AuthUsers.logout();
            return res.data;
        } catch (error) {
            console.log(error)
        }
    }
)

const initialState = {
    user: null,
    status: 'loading',
    isAuth: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(registrationUser.pending, (state) => {
                state.user = null
                state.status = 'loading'
                state.isAuth = false
            })
            .addCase(registrationUser.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.isAuth = true
                state.status = 'success'
                localStorage.setItem('token', action.payload.access_token)
            })
            .addCase(registrationUser.rejected, (state) => {
                state.user = null
                state.status = 'error'
                state.isAuth = false
            })
            .addCase(loginUser.pending, (state) => {
                state.user = null
                state.status = 'loading',
                state.isAuth = false
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.isAuth = true
                state.status = 'success'
                localStorage.setItem('token', action.payload.access_token)
            })
            .addCase(loginUser.rejected, (state) => {
                state.user = null
                state.status = 'error'
                state.isAuth = false
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null,
                state.status = 'logout'
                state.isAuth = false
                localStorage.removeItem('token')
            })
    }
})

export default userSlice.reducer;