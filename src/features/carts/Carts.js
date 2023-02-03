import React from "react";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import { selectCart } from "./cartSlice";

export const Carts = () => {
  const data = useSelector(selectCart);

  console.log("data take useSelector(selectCart) ", data);

  return (
    <div>
      <hr />
      {!data ? (
        <h2>Loading ...</h2>
      ) : (
        <div className={styles.cartsWrapper}>
          {data?.map((item, idx) => (
            <div className={styles.cart} key={idx}>
              <h3>{item.name}</h3>
              <a href={item.url}>See more</a>
              <br />
              <button>Add to cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
