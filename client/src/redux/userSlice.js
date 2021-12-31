import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currentUser: null,
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

export const signUp = createAsyncThunk(
  "user/signUp",
  async ({ email, password }) => {
    const res = await axios.post("http://localhost:5000/api/auth/signup", {
      email,
      password,
    });
    return res.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
