import cartSlice from "./cartSlice";

describe("cart reducer", () => {
  const initialState = {
    cartProductIds: [1],
  };

  const { addToCart, removeFromCart, clearAllItems } = cartSlice.actions;

  it("should add to cart", () => {
    const actual = cartSlice.reducer(initialState, addToCart(2));
    expect(actual.cartProductIds).toEqual([2, 1]);
  });

  it("should remove from cart", () => {
    const actual = cartSlice.reducer(initialState, removeFromCart(1));
    expect(actual.cartProductIds).toEqual([]);
  });

  it("should clear all items", () => {
    const actual = cartSlice.reducer(initialState, clearAllItems());
    expect(actual.cartProductIds).toEqual([]);
  });
});
