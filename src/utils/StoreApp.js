import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const StoreApp = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default StoreApp;
