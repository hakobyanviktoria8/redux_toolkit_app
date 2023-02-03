import { createSlice } from "@reduxjs/toolkit";
import { pocemonData } from "./data";

const initialState = {
  data: pocemonData,
};

const cartSlice = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    // loadAllData: (state) => {
    //   state.data = pocemonData;
    // },
  },
});

export const selectCart = (state) => state.cartData.data;
export default cartSlice;
