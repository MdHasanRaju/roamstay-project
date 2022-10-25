import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: undefined,
  user: undefined,
  isModalOpen: false,
  isLoggedIn: false,
  loginType: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    userLoggedOut: (state) => {
      state.user = undefined;
      state.accessToken = undefined;
      state.isLoggedIn = false;
      state.loginType = "";
    },
    toggleModal: (state, action) => {
      state.isModalOpen = action.payload;
    },
    userLoggedInType: (state, action) => {
      state.loginType = action.payload.loginType;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

export const { userLoggedIn, userLoggedOut, toggleModal, userLoggedInType } =
  authSlice.actions;
export default authSlice.reducer;
