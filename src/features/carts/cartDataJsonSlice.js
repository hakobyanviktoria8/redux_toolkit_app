import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk(
  "fetch-all",
  async (apiUrl) => {
    const res = await fetch(apiUrl);
    return res.json();
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    fetchStatus: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.fetchStatus = "success";
      })
      .addCase(fetchAllProducts.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.fetchStatus = "error";
      });
  },
});

export default productSlice;
