import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService";


const user = JSON.parse(localStorage.getItem("user"))

const getErrorMessage = (errors) => {
    const firstError = errors[0]

    return typeof firstError === "string"
        ? firstError
        : Object.values(firstError)[0]
}

const initialState = {
    user: user ? user : null,
    error: false, 
    success: false,
    loading: false
}

// Register an user an sign in
export const Register = createAsyncThunk("auth/Register", async (user, thunkAPI) => {
    const data  = await authService.Register(user)

    // check for errors
    if(data.errors){
        return thunkAPI.rejectWithValue(getErrorMessage(data.errors))
    }

    return data
})

// logout an user
export const logout = createAsyncThunk("auth/logout", async () => {
    await authService.logout()
})

// sign in an user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
    const data = await authService.login(user)

    // check for errors
    if(data.errors){
        return thunkAPI.rejectWithValue(getErrorMessage(data.errors))
    }

    return data
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.loading = false
            state.error = false
            state.success = false
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(Register.pending, (state) => {
            state.loading = true 
            state.error = false 
        })
        .addCase(Register.fulfilled, (state, action) => {
            state.loading = false 
            state.error = false
            state.success = true
            state.user =action.payload
        })
        .addCase(Register.rejected, (state, action) =>
        {
            state.loading = false
            state.error = action.payload
            state.success = false
            state.user = null
        })
        .addCase(logout.fulfilled, (state) => {
            state.loading = false 
            state.error = false
            state.success = false
            state.user = null
        })
        .addCase(login.pending, (state) => {
            state.loading = true 
            state.error = false 
        })
        .addCase(login.fulfilled, (state, action) => {
            state.loading = false 
            state.error = false
            state.success = true
            state.user =action.payload
        })
        .addCase(login.rejected, (state, action) =>
        {
            state.loading = false
            state.error = action.payload
            state.success = false
            state.user = null
        })
    }
})

export const {reset} =authSlice.actions
export default authSlice.reducer