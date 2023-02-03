import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/carts/cartSlice";
import counterSlice from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    cartData: cartSlice.reducer,
  },
});
