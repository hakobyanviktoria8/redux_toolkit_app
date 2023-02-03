import counterSlice from "./counterSlice";

describe("counter reducer", () => {
  const initialState = {
    value: 3,
  };
  const { increment, decrement, incrementByAmount } = counterSlice.actions;

  it("should handle increment", () => {
    const actual = counterSlice.reducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it("should handle decrement", () => {
    const actual = counterSlice.reducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it("should handle incrementByAmount", () => {
    const actual = counterSlice.reducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
