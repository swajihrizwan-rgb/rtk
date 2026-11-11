import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: ["Ali", "Ahmed"]
};

const userSlice = createSlice({

  name: "users",

  initialState,

  reducers: {

    addUser: (state) => {
      state.users.push("Wajih");
    },

    removeUser: (state) => {
      state.users.pop();
    }

  }

});
export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
