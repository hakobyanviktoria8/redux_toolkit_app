import { createSlice } from "@reduxjs/toolkit";
import { pocemonData } from "./data";

const initialState = {
  data: pocemonData,
  cartProductIds: [],
};

const cartSlice = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartProductIds = [action.payload, ...state.cartProductIds];
    },
    removeFromCart: (state, action) => {
      const idx = state.cartProductIds.indexOf(action.payload);
      state.cartProductIds.splice(idx, 1);
    },
    clearAllItems: (state) => {
      state.cartProductIds = [];
    },
  },
});

export const selectCart = (state) => state.cartData.data;
export const selectCartProductIds = (state) => state.cartData.cartProductIds;
export default cartSlice;
