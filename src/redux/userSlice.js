import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  client: []
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addClient: (state, action) => {
      state.client.push(action.payload);
    },
    addUser: (state, action) => {
      state.user.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser,  addClient } = userSlice.actions;

export default userSlice.reducer;
