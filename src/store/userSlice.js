import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Seymur1", email: "orucovsv@gmail.com" },
  { id: 2, name: "Seymur2", email: "orucovsv@gmail.com" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUser = state.find((user) => user.id === +id);

      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { createUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
