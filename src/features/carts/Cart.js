import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cartSlice, { selectCart, selectCartProductIds } from "./cartSlice";
import styles from "./Cart.module.css";

export const Cart = ({ item }) => {
  const data = useSelector(selectCart);
  const dispatch = useDispatch();
  const { removeFromCart } = cartSlice.actions;
  const cartProductIds = useSelector(selectCartProductIds);

  const { name, url } = data[item - 1];
  // console.log(item, data[item - 1]);
  // console.log(cartProductIds, item);

  return (
    <div className={styles.cart}>
      <h3>{name}</h3>
      <a href={url}>See more</a>
      {cartProductIds.includes(item) && (
        <button onClick={() => dispatch(removeFromCart(item.id))}>
          Remove from cart
        </button>
      )}
    </div>
  );
};
