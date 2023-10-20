import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./sliders/counterSlide";
import userReducer from "./sliders/userSlide";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
