import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   selectCount,
// } from "./counterSlice";
import counterSlice, { selectCount } from "./counterSlice";
import styles from "./Counter.module.css";
const { decrement, increment, incrementByAmount } = counterSlice.actions;

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  // another way take state value
  // console.log(counterSlice.getInitialState().value);

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}
