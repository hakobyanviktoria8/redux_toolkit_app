import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/carts/cartDataJsonSlice";
import cartSlice from "../features/carts/cartSlice";
import counterSlice from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    cartData: cartSlice.reducer,
    products: productSlice.reducer,
  },
});
