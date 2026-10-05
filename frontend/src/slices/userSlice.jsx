import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../services/userService";

const initialState = {
  user: null,
  message: false,
  error: false,
  loading: false,
};

const rejectRequest = (error, thunkAPI) =>
  thunkAPI.rejectWithValue(error instanceof Error ? error.message : String(error));

export const profile = createAsyncThunk(
  "user/profile",
  async (_, thunkAPI) => {
    try {
      return await userService.profile();
    } catch (error) {
      return rejectRequest(error, thunkAPI);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (formData, thunkAPI) => {
    try {
      return await userService.updateProfile(formData);
    } catch (error) {
      return rejectRequest(error, thunkAPI);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = false;
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(profile.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(profile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(profile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.message = false;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.message = "Perfil atualizado com sucesso.";
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetMessage } = userSlice.actions;
export default userSlice.reducer;
