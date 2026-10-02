import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService";


const user = JSON.parse(localStorage.getItem("user"))

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
        return thunkAPI.rejectWithValue(data.error[0])
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
            state.error = true
            state.success = null
            state.user =action.payload
        })
        .addCase(Register.rejected, (state, action) =>
        {
            state.loading = false
            state.error = action.payload
            state.user = null
        })
    }
})

export const {reset} =authSlice.actions
export default authSlice.reducer