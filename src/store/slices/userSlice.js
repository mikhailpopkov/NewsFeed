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
        } catch (e) {
            console.log(e.message)
        }
    }
)

export const checkAuth = createAsyncThunk(
    'user/checkAuth',
    async () => {
        try {
            const res = await AuthUsers.checkAuth()
            return res.data
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
                localStorage.setItem('refreshToken', action.payload.refresh_token)
            })
            .addCase(registrationUser.rejected, (state) => {
                state.user = null
                state.status = 'error'
                state.isAuth = false
            })
            .addCase(loginUser.pending, (state) => {
                state.user = null
                state.status = 'loading'
                state.isAuth = false
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.isAuth = true
                state.status = 'success'
                localStorage.setItem('token', action.payload.access_token)
                localStorage.setItem('refreshToken', action.payload.refresh_token)
            })
            .addCase(loginUser.rejected, (state) => {
                state.user = null
                state.status = 'error'
                state.isAuth = false
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null,
                state.status = 'idle'
                state.isAuth = false
                localStorage.removeItem('token')
                localStorage.removeItem('refreshToken')
            })
            .addCase(checkAuth.pending, (state) => {
                state.user = null
                state.status = 'loading'
                state.isAuth = false
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.user = action.payload
                state.status = 'success'
                state.isAuth = true
            })
            .addCase(checkAuth.rejected, (state) => {
                state.user = null
                state.status = 'error'
                state.isAuth = false
            })  
    }
})

export default userSlice.reducer;