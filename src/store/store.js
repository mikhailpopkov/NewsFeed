import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import commentReducer from "./slices/commentSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    comment: commentReducer,
  },
});
