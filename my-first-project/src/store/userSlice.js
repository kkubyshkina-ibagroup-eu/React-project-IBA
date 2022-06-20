import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: localStorage.getItem("login"),
  adminMode: localStorage.getItem("login") === "testAdmin@gmail.com",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state) => {
      state.isLogin = true;
    },
    logoutUser: (state) => {
      state.isLogin = false;
      state.adminMode = false;
      localStorage.removeItem("login");
      localStorage.removeItem("password");
    },
    adminMode: (state) => {
      state.adminMode = true;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
