import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./sliders/productSlide";
import userReducer from "./sliders/userSlide";

export const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
  },
});
