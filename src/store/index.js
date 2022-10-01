import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const setupStore = configureStore({
  reducer: {
    users: userReducer,
  },
});
