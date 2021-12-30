import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currentUser: null,
  isFetching: false,
  error: false,
};

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });
    return res.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isFetching = false;
        state.currentUser = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.isFetching = false;
        state.error = true;
      });
  },
});

// export const { loginStart, loginSuccess, loginFail } = userSlice.actions;
export default userSlice.reducer;
