import { createSlice } from "@reduxjs/toolkit";
import kanban from "../json/kanban.json";
import inbox from "../json/inbox.json";
import product from "../json/product.json";

const data = localStorage.getItem("firstName");
// console.log(data)
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: data ? data : null,
    kanban:kanban,
    inbox:inbox,
    product:product
  },
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      state.user = action.payload.name;
    },
    logout: (state) => {
      state.user = null;
    }, 








  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
