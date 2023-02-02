import counterSlice from "./counterSlice";

describe("counter reducer", () => {
  const initialState = {
    value: 3,
    status: "idle",
  };

  it("should handle increment", () => {
    const actual = counterSlice.reducer(
      initialState,
      counterSlice.actions.increment()
    );
    expect(actual.value).toEqual(4);
  });

  it("should handle decrement", () => {
    const actual = counterSlice.reducer(
      initialState,
      counterSlice.actions.decrement()
    );
    expect(actual.value).toEqual(2);
  });

  it("should handle incrementByAmount", () => {
    const actual = counterSlice.reducer(
      initialState,
      counterSlice.actions.incrementByAmount(2)
    );
    expect(actual.value).toEqual(5);
  });
});
